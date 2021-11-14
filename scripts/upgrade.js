const { ethers, upgrades } = require("hardhat");

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await upgrades.upgradeProxy("0x610178dA211FEF7D417bC0e6FeD39F05609AD788", Greeter);
  console.log("Greeter upgraded to:", greeter.address);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });