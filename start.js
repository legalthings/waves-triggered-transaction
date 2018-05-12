
var Curl = require('node-libcurl').Curl;
const WavesAPI = require('waves-api');

var config = require('./config');

const Waves = WavesAPI.create(WavesAPI.MAINNET_CONFIG);
const seed = Waves.Seed.fromExistingPhrase(process.env.SEED);

var trackingIndex = 0;

function makeTransaction(amount, fee) {
    const transferData = {
        recipient: config.waves.recipient,
        assetId: config.waves.assetId,
        amount: amount,
        feeAssetId: 'WAVES',
        fee: fee,
        attachment: '',
        timestamp: Date.now()
    };
    
    Waves.API.Node.v1.assets.transfer(transferData, seed.keyPair).then((responseData) => {
        console.log(responseData);
    });
}

setInterval(() => {
    var curl = new Curl();

    curl.setOpt('URL', 'http://nodes.wavesplatform.com/blocks/headers/last');
    curl.setOpt('FOLLOWLOCATION', true);
    
    curl.on('end', function(statusCode, body, headers) {
        data = JSON.parse(body);
        if (trackingIndex < config.tracking.blocks.length && parseInt(data.height) == config.tracking.blocks[trackingIndex]) {
            makeTransaction(1, 100000);
            trackingIndex ++;
        }
        this.close();
    });
    
    curl.on('error', curl.close.bind(curl));

    curl.perform();
}, config.tracking.period);