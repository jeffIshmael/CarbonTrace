const hre = require("hardhat");

async function main() {
  //compile the contract to get the latest bytecode and ABI
  await hre.run("compile");

  //get the smart contract
  const carbonTrace = await hre.ethers.getContractFactory("CarbonTrace");

  //deploy the dAppify smart contract
  const deployedCarbon = await carbonTrace.deploy();
  await deployedCarbon.waitForDeployment();
  console.log("CarbonTrace deployed to:", await deployedCarbon.getAddress());

  
}

//handle errors from main()
main().catch((error) => {
  console.error(error);
  process.exit(1);
});