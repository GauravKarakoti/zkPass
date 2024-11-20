import React, { useState, useEffect } from 'react';
import { initializeEthereum, registerUser } from "./utils/ethereum";
import { ethers } from 'ethers';
import './App.css';

function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [userAuth, setUserAuth] = useState("");
  const [publicKey, setPublicKey] = useState("");

  const handleVerifyZKP = async () => {
    const userAddress = "0xYourAddress"; // Replace with actual user address logic
    const proof = "valid-proof"; // Replace with user input proof
    const result = await verifyUserZKP(userAddress, proof); // Call the verify function
    if (result) {
      console.log("ZKP is valid!");
    } else {
      console.log("ZKP is invalid!");
    }
  };
  

  const handleRegister = async () => {
    await registerUser(publicKey);
  };

  const contractAddress = "<Your_Contract_Address>"; // Replace with your deployed contract address
  const abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "publicKey",
          "type": "string"
        }
      ],
      "name": "UserRegistered",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_publicKey",
          "type": "string"
        }
      ],
      "name": "registerUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userPublicKeys",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_proof",
          "type": "string"
        }
      ],
      "name": "verifyZKP",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  useEffect(() => {
    const loadBlockchainData = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }

        // Create contract instance
        const userAuthContract = new ethers.Contract(contractAddress, abi, signer);
        setContract(userAuthContract);
      } else {
        alert('Please install MetaMask!');
      }
    };
    
    loadBlockchainData();
  }, []);

  const handleUserAuth = async () => {
    if (contract) {
      try {
        const result = await contract.getUserAuth(userAuth); // Example function to get user authentication details
        alert("User Auth: " + result);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="App">
      <h1>Welcome to zkPass</h1>
      {account ? (
        <>
          <p>Connected Account: {account}</p>
          <input
            type="text"
            value={userAuth}
            onChange={(e) => setUserAuth(e.target.value)}
            placeholder="Enter User Auth Details"
          />
          <button onClick={handleUserAuth}>Get User Auth</button>
        </>
      ) : (
        <button onClick={() => window.ethereum.request({ method: 'eth_requestAccounts' })}>
          Connect Wallet
        </button>
      )}
      <button onClick={initializeEthereum}>Connect to Ethereum</button>
      <input
        type="text"
        value={publicKey}
        onChange={(e) => setPublicKey(e.target.value)}
        placeholder="Enter public key"
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleVerifyZKP}>Verify ZKP</button>

    </div>
  );
}


export default App;
