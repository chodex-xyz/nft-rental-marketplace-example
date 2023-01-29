import { ethers } from "hardhat";

async function main() {
  const TestGame4907 = await ethers.getContractFactory("TestGame4907");
  const testGame4907 = await TestGame4907.deploy();

  await testGame4907.deployed();

  console.log(`TestGame4907 deployed to ${testGame4907.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
