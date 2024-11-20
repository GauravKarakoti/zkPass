async function main() {
    // Get the deployer's account
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    // Get the contract factory
    const UserAuth = await ethers.getContractFactory("UserAuth");
  
    // Deploy the contract
    const userAuth = await UserAuth.deploy();
    console.log("Deploying UserAuth...");
  
    // Log the contract address directly
    console.log("UserAuth contract deployed to:", userAuth.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  