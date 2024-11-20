// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserAuth {
    // Mapping to store user public keys
    mapping(address => string) public userPublicKeys;

    // Event for user registration
    event UserRegistered(address user, string publicKey);

    // Register a user's public key
    function registerUser(string memory _publicKey) external {
        require(bytes(userPublicKeys[msg.sender]).length == 0, "User already registered");
        userPublicKeys[msg.sender] = _publicKey;
        emit UserRegistered(msg.sender, _publicKey);
    }

    // Verify zero-knowledge proof (Mock function for now)
    function verifyZKP(address _user, string memory _proof) external view returns (bool) {
        // For simplicity, assume the proof is valid if the user is registered
        require(bytes(userPublicKeys[_user]).length != 0, "User not registered");
        return keccak256(abi.encodePacked(_proof)) == keccak256(abi.encodePacked("valid-proof"));
    }
}
