require("@nomicfoundation/hardhat-ignition/modules");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    // for testnet
    "lisk-sepolia": {
      url: "https://rpc.sepolia-api.lisk.com",
      accounts: [process.env.WALLET_PRIVATE_KEY],
      gasPrice: 1000000000,
    },

    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_SEPOLIA}`,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },

    "op-sepolia": {
      url: "https://sepolia.optimism.io/",
      accounts: [process.env.WALLET_PRIVATE_KEY],
      chainId: 11155420,
      gasPrice: 1000000000,
    },

    ethereum: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_MAIN}`,
      accounts: [process.env.WALLET_PRIVATE_KEY],
      chainId: 44787,
    },

    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [process.env.WALLET_PRIVATE_KEY],
      chainId: 44787,
    },

    celo: {
      url: "https://forno.celo.org",
      accounts: [process.env.WALLET_PRIVATE_KEY],
      chainId: 42220,
    },
  },

  // ethereum - celo - explorer API keys
  etherscan: {
    // Use "123" as a placeholder, because Blockscout doesn't need a real API key, and Hardhat will complain if this property isn't set.
    apiKey: {
      "op-sepolia": process.env.OPTIMISM_API_KEY,
//       celo: process.env.CELOSCAN_API_KEY,
    },
    customChains: [
      {
        network: "op-sepolia",
        chainId:  11155420,
        urls: {
          apiURL:"https://optimism-sepolia.blockscout.com/api",
          browserURL: "https://optimism-sepolia.blockscout.com/",
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },

  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      viaIR: true,
    },
  },
};
