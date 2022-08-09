const hre = require("hardhat");

async function main() {
	const Emoji = await hre.ethers.getContractFactory("Emoji");
	const emoji = await Emoji.deploy();

	await emoji.deployed();

	console.log("Contract deployed to", emoji.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
