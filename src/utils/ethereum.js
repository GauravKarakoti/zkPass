import { ethers } from "ethers";

let provider;
let signer;
let userAuthContract;

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS"; // Replace with your contract address
const abi = [ /* Your ABI here */ ];

export const initializeEthereum = () => {
  if (window.ethereum) {
    provider = new ethers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    userAuthContract = new ethers.Contract(contractAddress, abi, signer);
    try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const userAddress = await signer.getAddress();
        console.log("Connected address:", userAddress);
      } catch (error) {
        console.error("Error requesting accounts:", error);
      }
  } else {
    console.error("Please install MetaMask!");
  }
};

export const registerUser = async (publicKey) => {
  try {
    const tx = await userAuthContract.registerUser(publicKey);
    await tx.wait();
    console.log("User registered successfully!");
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

export const verifyUserZKP = async (userAddress, proof) => {
  try {
    const result = await userAuthContract.verifyZKP(userAddress, proof);
    return result;
  } catch (error) {
    console.error("Error verifying ZKP:", error);
  }
};
