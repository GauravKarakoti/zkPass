# zkPass - Zero Knowledge Authentication System

zkPass is a decentralized authentication system leveraging **Zero Knowledge Proofs (ZKPs)** to securely register and verify users without exposing sensitive information. The project consists of a smart contract deployed on Ethereum, allowing users to register their public keys and verify their identity using zero-knowledge proofs.

This project includes:
- A **smart contract** deployed on Ethereum (using Hardhat and Solidity).
- A **frontend** that interacts with the Ethereum blockchain through MetaMask and allows users to register and verify their public keys.

## Features
- **User Registration**: Users can register their public keys.
- **Zero Knowledge Proof Verification**: Users can verify their identity using a zero-knowledge proof mechanism.
- **Ethereum Integration**: The frontend interacts with Ethereum using MetaMask for account management and contract interactions.

## Hosted Application

The application is live and can be accessed through the following link:

[zkPass Live Demo](https://your-app-name.vercel.app)

Feel free to explore the app, register a public key, and test the zero-knowledge proof verification.

## Prerequisites

Before running the project, make sure you have the following tools installed:
- **Node.js** (v16.x or later)
- **MetaMask** browser extension (for interacting with the Ethereum network)
- **Hardhat** for Ethereum development
- **npm** or **yarn** for package management

## Setting Up the Project

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd zkpass
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up the Ethereum provider**:
    - Install and set up **MetaMask** in your browser.
    - Create a wallet and get some test Ether (on networks like Goerli or Hardhat).

4. **Configure the Hardhat project**:
    - Replace the `contractAddress` and `abi` in the frontend `ethereum.js` with the actual values from your deployed contract.

## Running the Project

1. **Deploy the Smart Contract**:

   You can deploy the contract to the Hardhat network or a testnet (e.g., Goerli). For deploying on Hardhat:

    ```bash
    npx hardhat run scripts/deploy.js --network hardhat
    ```

2. **Start the Frontend**:

    If you have the frontend (React, or similar) set up, you can start it:

    ```bash
    npm start
    ```

    Visit `http://localhost:3000` in your browser to interact with the application.

3. **Interacting with the Smart Contract**:
   - **Register User**: Enter your public key to register.
   - **Verify User**: Use a proof (for now, a mock proof) to verify your identity.
  
Link to Live Application : https://zk-pass.vercel.app/

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
