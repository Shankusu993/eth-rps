require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // anvil: {
    //   chainId: 31337,
    //   url: "127.0.0.1:8545",
    //   accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"],
    // },
    wc_dev: {
      chainID: 993,
      url: "http://3.108.227.185:8545",
      accounts: [`${process.env.ACCOUNT_KEY}`],
    }


    // ropsten: {
    //   url: process.env.ROPSTEN_RPC,
    //   accounts: [`0https://eth-rps.vercel.appx${process.env.ACCOUNT_KEY}`],
    // },
    // arbitrum_test: {
    //   url: "https://rinkeby.arbitrum.io/rpc",
    //   accounts: [`0x${process.env.ACCOUNT_KEY}`],
    // },
    // optimism_test: {
    //   url: process.env.OPTIMISM_KOVAN_RPC,
    //   accounts: [`0x${process.env.ACCOUNT_KEY}`],
    //   gasPrice: 15000000, // required
    //   ovm: true, // required for OVM compatibility
    // },
    // polygon_test: {
    //   url: "https://rpc-mumbai.maticvigil.com",
    //   accounts: [`0x${process.env.ACCOUNT_KEY}`],
    // },
  },
};
