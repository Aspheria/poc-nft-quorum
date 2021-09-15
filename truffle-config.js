
const HDWalletProvider = require('@truffle/hdwallet-provider');
const quorumBitshoppDevPrivateKey = '8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63';

module.exports = {
  contracts_build_directory: './client/src/contracts',

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    quorumBitshoppDev: {
      provider: () =>
        new HDWalletProvider(
          quorumBitshoppDevPrivateKey,
          'http://34.75.1.248:8545',
        ),
      network_id: '*',
    }
  },

  compilers: {
    solc: {
      version: "^0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  }
};
