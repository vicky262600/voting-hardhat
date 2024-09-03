const { ethers, run, network } = require("hardhat");

async function main() {
  // getting the contract
  const VotingFactory = await ethers.getContractFactory("Voting");

  // deploying the contract
  console.log("deploying...");
  const votingInstance = await VotingFactory.deploy(["Modi", "Rahul", "Kejriwal"], 20);
  await votingInstance.waitForDeployment();
  console.log(votingInstance.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
