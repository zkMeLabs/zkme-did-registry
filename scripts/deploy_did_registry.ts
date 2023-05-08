import { ethers, upgrades } from 'hardhat';

async function main() {
  const signers = await ethers.getSigners();
  const deployer = await signers[0].getAddress();

  console.log(`deployer address: ${deployer}`);

  const Registry = await ethers.getContractFactory('ZkmeDidRegistry');

  const registry = await upgrades.deployProxy(Registry, [], { initializer: "initialize" });

  await registry.deployed();

  console.log(`registry deployed address: ${registry.address}`);
}

main().catch(error => {
  console.log(error);
  process.exitCode = 1;
})