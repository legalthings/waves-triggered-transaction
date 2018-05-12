// var Curl = require('node-libcurl').Curl;

// setInterval(() => {
//     var curl = new Curl();
 
//     curl.setOpt('URL', 'http://nodes.wavesplatform.com/blocks/headers/last');
//     curl.setOpt('FOLLOWLOCATION', true);
    
//     curl.on('end', function(statusCode, body, headers) {
//         // console.log(".");
//         data = JSON.parse(body);
//         if (parseInt(data.height) == 997600) {
//             console.log("Bingo");
//         }
//         this.close();
//     });
    
//     curl.on('error', curl.close.bind(curl));

//     curl.perform();
// }, 5000);

const WavesAPI = require('waves-api');
const Waves = WavesAPI.create(WavesAPI.MAINNET_CONFIG);

const seed = Waves.Seed.fromExistingPhrase(process.env.SEED);

const transferData = {

    // An arbitrary address; mine, in this example
    recipient: '3PJ3RhcWyKXF6SXd6t35v7sLxYwgctY9g5c',

    // ID of a token, or WAVES
    assetId: 'HPCVtLLrKZ9pK9E1AhK1bdmZsc9uiKauZjpqq5HzH3Lp',

    // The real amount is the given number divided by 10^(precision of the token)
    amount: 1,

    // The same rules for these two fields
    feeAssetId: 'WAVES',
    fee: 100000,

    // 140 bytes of data (it's allowed to use Uint8Array here)
    attachment: '',

    timestamp: Date.now()

};

Waves.API.Node.v1.assets.transfer(transferData, seed.keyPair).then((responseData) => {
    console.log(responseData);
});