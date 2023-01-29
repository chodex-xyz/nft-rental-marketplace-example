import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    bscTestnet: {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [
        process.env.BSC_TESTNET_OWNER_PRIVATE_KEY ?? "",
        process.env.BSC_TESTNET_OTHER_ACCOUNT_PRIVATE_KEY ?? "",
      ],
    },
  },
};

export default config;
