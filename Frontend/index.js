import { ethers } from "./ethers-5.2.esm.min.js"
import { abi, contractAddress } from "./constant.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
//const addPatientButton = document.getElementById("addPatientButton")
const viewButton = document.getElementById("viewButton")
connectButton.onclick = connect
fundButton.onclick = fund
addUserButton.onclick = addUserDetails
viewButton.onclick = viewDetails

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        connectButton.innerHTML = "Connected"
    } else {
        connectButton.innerHTML = "Metamask not found"
    }
}

async function addUserDetails() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, abi, signer)
    const withSigner = contract.connect(signer)
    const patientID = document.getElementById("patientID").value
    const password = document.getElementById("password1").value
    const adhaarNo = parseInt(document.getElementById("adhaarNo").value)
    const age = parseInt(document.getElementById("age").value)
    const name = document.getElementById("name").value
    const dueAmount = parseInt(document.getElementById("dueAmount").value)
    const walletAddress = document.getElementById("walletAddress").value

    // Call the addDetails function
    try {
        await withSigner.addDetails(
            patientID,
            password,
            adhaarNo,
            age,
            name,
            dueAmount,
            walletAddress,
        )
        displayMessage("Details added successfully.")
    } catch (error) {
        console.error(error)
        displayMessage("Error: Could not add user details.")
    }
}

function displayMessage(message) {
    const resultDiv = document.getElementById("result")
    resultDiv.innerText = message
}

async function viewDetails() {
    const patientID = document.getElementById("username").value
    const password = document.getElementById("password").value
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, abi, signer)
    try {
        const result = await contract.viewDetails(patientID, password)
        displayResult(result)
    } catch (error) {
        console.error(error)
        displayResult("Error: Could not retrieve user details.")
    }
}

function displayResult(result) {
    const resultDiv = document.getElementById("patientDetails")
    resultDiv.innerHTML = `
                <p> ${result[0]}</p>
                <p> ${result[1]}</p>
                <p> ${result[2]}</p>
                <p> ${result[3]}</p>
                <p> (wei)${result[4]}</p>
                <p> Your Wallet Address: ${ethers.utils.getAddress(
                    result[5],
                )}</p>
            `
}

async function fund() {
    const ethAmount = document.getElementById("fundamount").value
    console.log("Funding with", ethAmount)
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const transactionResponse = await contract.fund({
                value: ethers.utils.parseEther(ethAmount),
            })
            await listenForTransactionMine(transactionResponse, provider)
            console.log("Done")
        } catch (error) {
            console.log("Error")
        }
    }
}

function listenForTransactionMine(transactionResponse, provider) {
    console.log("Mining", transactionResponse.hash)
    //without using the promise the provider.once listener will be listend only after the console log done it is iniated as a new process
    return new Promise((resolve, reject) => {
        provider.once(transactionResponse.hash, (transactionReceipt) => {
            console.log(
                "Completed with",
                transactionReceipt.confirmations,
                "comfirmations",
            )
            resolve()
        })
    })
}
