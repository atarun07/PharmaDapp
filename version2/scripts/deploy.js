//import
const { ethers } = require("hardhat")

//main
async function main() {
	const PharmaDappFactory = await ethers.getContractFactory("PharmaDapp")
	console.log("Deploying Contract ..")
	const PharmaDapp = await PharmaDappFactory.deploy()
	await PharmaDapp.waitForDeployment
	const address = await PharmaDapp.getAddress()
	console.log("Contract Address is: ", address)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit = 1
	})
