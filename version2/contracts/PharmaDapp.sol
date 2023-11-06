// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PharmaDapp {
	address private owner;
	address payable public wallet;
	address[] funders;
	mapping(address => uint256) addressToAmountFunded;

	constructor() {
		owner = msg.sender;
		wallet = payable(0xd52FF5dC89697B2ab1f6A9A86482a4f9b2Eb525a); //mention the wallet where the funds have to be sent
	}

	event AuthenticationResult(bool success);
	event UserInfoUpdated(
		string patientID,
		string password,
		uint256 adhaarNo,
		uint256 age,
		string name,
		uint256 _dueAmount,
		address walletAddress
	);
	event TransanctionSuccesful(string status);

	struct info {
		string patientID;
		string password;
		uint256 adhaarNo;
		uint256 age;
		string name;
		uint256 dueAmount;
		address walletAddress;
	}
	info[] public userDetail;
	//mapping (address=> info) public addressToAmountPayable;

	modifier isOwner() {
		require(msg.sender == owner, "Caller is not owner");
		_;
	}

	function addDetails(
		string memory _patientID,
		string memory _password,
		uint _adhaarNo,
		uint256 _age,
		string memory _name,
		uint256 _dueAmount,
		address _walletAddress
	) public isOwner {
		userDetail.push(
			info(
				_patientID,
				_password,
				_adhaarNo,
				_age,
				_name,
				_dueAmount,
				_walletAddress
			)
		);
		emit UserInfoUpdated(
			_patientID,
			_password,
			_adhaarNo,
			_age,
			_name,
			_dueAmount,
			_walletAddress
		);
	}

	function viewDetails(
		string memory _patientID,
		string memory _password
	)
		public
		view
		returns (
			string memory,
			string memory,
			string memory,
			string memory,
			string memory,
			address
		)
	{
		for (uint256 i = 0; i < userDetail.length; i++) {
			if (
				keccak256(abi.encodePacked(userDetail[i].patientID)) ==
				keccak256(abi.encodePacked(_patientID)) &&
				(keccak256(abi.encodePacked(userDetail[i].password)) ==
					keccak256(abi.encodePacked(_password)))
			) {
				return (
					"Welcome!",
					string(
						abi.encodePacked(
							"Adaahar Number:",
							uint256ToString(userDetail[i].adhaarNo)
						)
					),
					string(
						abi.encodePacked(
							"Age:",
							uint256ToString(userDetail[i].age)
						)
					),
					string(abi.encodePacked("Name:", userDetail[i].name)),
					string(
						abi.encodePacked(
							"Outstanding Bill:",
							uint256ToString(userDetail[i].dueAmount)
						)
					),
					userDetail[i].walletAddress
				);
			}
		}

		return ("You are not registerd with us :(", "", "", "", "", address(0));
	}

	function uint256ToString(
		uint256 value
	) internal pure returns (string memory) {
		if (value == 0) {
			return "0";
		}
		uint256 temp = value;
		uint256 digits;
		while (temp != 0) {
			digits++;
			temp /= 10;
		}
		bytes memory buffer = new bytes(digits);
		while (value != 0) {
			buffer[--digits] = bytes1(uint8(48 + uint256(value % 10)));
			value /= 10;
		}
		return string(buffer);
	}

	function fund() external payable {
		require(userDetail.length > 0, "You are not registered with us");
		for (uint256 i = 0; i < userDetail.length; i++) {
			if (msg.sender == userDetail[i].walletAddress) {
				require(msg.value > 0, "Payment must be greater than 0");
				wallet.transfer(msg.value); //transfer the amount to the specified wallet
				emit TransanctionSuccesful("Transferred Succesfully");
				funders.push(msg.sender);
				addressToAmountFunded[msg.sender] += msg.value;
				//update the new dueAmount
				if (userDetail[i].dueAmount > msg.value) {
					userDetail[i].dueAmount =
						userDetail[i].dueAmount -
						msg.value;
				} else {
					revert("Error: You can't pay more than your DueAmount");
				}
			} else {
				revert("Error:You are not registered with us");
			}
		}
	}
}
