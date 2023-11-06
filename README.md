# PharmaDapp

**USER GUIDE**<br>
The PharmaDapp, is a hospital interface app built on blockchain using Solidity, Hardhat for backend and HTML,JS for Frontend .Using the App:,<br>
1.The Admistration(only the address who deployed the contract) will be able to add patient details.<br>
2.Any existing patient can view their details including the DueAmount by entering their PatientID and Password given by the administration.<br>
3.Only Registered user wallet addresses can make transactions, in ETH using their metamask wallet to pay their Hospital Dues.<br>
4.The patient can only pay an amount =< the DueAmount, but not more than it.<br>

![image](https://github.com/atarun07/PharmaDapp/assets/136088264/20abb816-bd89-419f-a65d-a3994eec4b53)

**DEVELOPER GUIDE:**

For Linux users:

1.Clone the Repository ```https://github.com/atarun07/PharmaDapp.git```
2.In the Version2 folder create a .env file and add the URL of Sepolia Testnet and your Private Key(Advised to create a new dummy wallet with no real tokens)<br>
3.In the terminal go into the version2 folder and type ```yarn hardhat compile``` to successfully compile the solidity file<br>
4.Then run ``` yarn hardhat run scripts/deploy.js -network sepolia``` to deploy the contract into the sepolia testnet<br>
5.Copy the deployed contract address and paste it in the constant.js file of the Frontend folder<br>
6.Now run the HTML file and connect your metamask wallet(ensure you have enable the metamask Extension).<br>
7.To start with obtain some Sepolia ETH from any faucet.<br>
8.Add your first Patient :) to begin the app.<br>



