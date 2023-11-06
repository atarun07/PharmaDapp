export const contractAddress = "0xDfa22bE478d043f7E66678c3CE9c4A33cc94224a"

export const abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "success",
                type: "bool",
            },
        ],
        name: "AuthenticationResult",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "status",
                type: "string",
            },
        ],
        name: "TransanctionSuccesful",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "patientID",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "password",
                type: "string",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "adhaarNo",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "age",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_dueAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "walletAddress",
                type: "address",
            },
        ],
        name: "UserInfoUpdated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_patientID",
                type: "string",
            },
            {
                internalType: "string",
                name: "_password",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "_adhaarNo",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_age",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "_dueAmount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_walletAddress",
                type: "address",
            },
        ],
        name: "addDetails",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "fund",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "userDetail",
        outputs: [
            {
                internalType: "string",
                name: "patientID",
                type: "string",
            },
            {
                internalType: "string",
                name: "password",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "adhaarNo",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "age",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "dueAmount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "walletAddress",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_patientID",
                type: "string",
            },
            {
                internalType: "string",
                name: "_password",
                type: "string",
            },
        ],
        name: "viewDetails",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
            {
                internalType: "string",
                name: "",
                type: "string",
            },
            {
                internalType: "string",
                name: "",
                type: "string",
            },
            {
                internalType: "string",
                name: "",
                type: "string",
            },
            {
                internalType: "string",
                name: "",
                type: "string",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "wallet",
        outputs: [
            {
                internalType: "address payable",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
]
