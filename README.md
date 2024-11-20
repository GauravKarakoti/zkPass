# zkPass - Zero Knowledge Authentication System

zkPass is a decentralized authentication system leveraging **Zero Knowledge Proofs (ZKPs)** to securely register and verify users without exposing sensitive information. The project consists of a smart contract deployed on Ethereum, allowing users to register their public keys and verify their identity using zero-knowledge proofs.

This project includes:
- A **smart contract** deployed on Ethereum (using Hardhat and Solidity).
- A **frontend** that interacts with the Ethereum blockchain through MetaMask and allows users to register and verify their public keys.

## Features
- **User Registration**: Users can register their public keys.
- **Zero Knowledge Proof Verification**: Users can verify their identity using a zero-knowledge proof mechanism.
- **Ethereum Integration**: The frontend interacts with Ethereum using MetaMask for account management and contract interactions.

## Smart Contract

The **UserAuth** smart contract is the heart of the authentication system. It:
1. Stores users' public keys.
2. Emits events when users register their keys.
3. Verifies zero-knowledge proofs (ZKPs) for user authentication.

### Key Functions:
- **registerUser**: Registers a user's public key on the Ethereum blockchain.
- **verifyZKP**: Verifies a zero-knowledge proof provided by the user.

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

## Project Structure

```bash
zkpass/
│
├── contracts/                  # Smart contract code (UserAuth.sol)
│   └── UserAuth.sol
│
├── scripts/                    # Hardhat scripts
│   └── deploy.js               # Deployment script for the smart contract
│
├── src/                        # Frontend code (React or similar)
│   ├── App.js                  # Main React component
│   └── utils/                  # Utilities for interacting with Ethereum
│       └── ethereum.js         # Functions for interacting with MetaMask and the contract
│
├── hardhat.config.js           # Hardhat configuration file
├── package.json                # Project dependencies
└── README.md                   # Project documentation
```

Link to Live Application : https://zk-pass.vercel.app

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
