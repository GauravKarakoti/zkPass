require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // For environment variables

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_API_URL, // Alchemy/Infura API URL for Goerli
      accounts: [process.env.PRIVATE_KEY], // Your wallet private key
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY, // For verifying contracts on Etherscan
  },
};
