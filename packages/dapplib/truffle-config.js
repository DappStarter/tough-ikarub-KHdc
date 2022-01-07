require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space story remember magic exchange giraffe light army gesture'; 
let testAccounts = [
"0x1208369762b83ccf9ee9048f986cf3229a4cef4db5cdaeab1d7e357b3774b3d8",
"0xcc44a0ac03118672d82b352f4ff69bd66a09554ea320ef3fa3352fff95a5ec20",
"0x5c8a4b0ce27e5bf58dd009c2b115114df808ad89e51aafee09730efccd8b6fc4",
"0xd9bca894b9e38e3622c6dc52af827c170b7044e61274995bffa83d86e6b5fc7d",
"0x544add1cbd7f849de59d6c6b8c2dd49ad3b09939298c42c57945fabb22809a5a",
"0x7c025568ff9618af3820abf9ede4fdeb875d0e7e8f172d3b4390536d628e6dfc",
"0xc97d8e2e649465d81cda5144185aa18161256d21c1fc8fa72b45d30024425f86",
"0x2319dcb582ca920270d95a57cde40cf3703e08b700081e7787cf12bfe559a78c",
"0xa57c6e69f9a8781d6516fe69e89b7887447681e0d4137251b44a276845133283",
"0xe8749a0a90560955f4d3c159b6a857822c1b34c27d0ef1ae669b210df957003b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


