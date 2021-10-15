require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain pumpkin harvest nation flush ghost'; 
let testAccounts = [
"0xc5f7235a9b15bd36b046c4933e2bce892b4bb8632b8915222b96e5cb4927e3f0",
"0xa1ee7c42348307c3c88870ee90c7cfb1bd671de402b342fadc7bd0381843e8f0",
"0x44289417237745f880c66f2a7a54e4f399aef11f4dd643c30c866f61098869ef",
"0x6d1529fe14b3b784ea0f728fe863f7dc90da42ad736f5b23acd2ba722e0cc57c",
"0x22c6e6d866535d0eb2bb3305f89468df6c0df7fc2ac94df41a91293b84424dc6",
"0x7dd14c18592d2ad124cb68793926322ebb8e9ed86983f0427b8debe706a0c712",
"0xdc43d1285aac2500143b0a4faab43be1fd9dd5be679267778026ac9ac2710c7b",
"0x3996b7e3619edfe1954e8f01f420c561c05998c4ea9a5b4a73497b81cfc9fac0",
"0x2677f407c5560b67fff81a0f8dacd9d79b832720176c4fab64dd97a29cdce922",
"0x1ac91bcbcd9e7892611ae1a7d866c4374b1e6fc2c511387fd1b5754263c9d1ea"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

