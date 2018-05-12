
const WavesAPI = require('waves-api');
const args = require('yargs').argv;
var config = require('./config');
var axios = require('axios');
const Waves = WavesAPI.create(WavesAPI.MAINNET_CONFIG);
const seed = Waves.Seed.fromExistingPhrase(process.env.SEED);

if (args.recipient == undefined) {
    console.log('Missing recipient address');
    process.exit(1);
} else {
    config.recipient = args.recipient;
}

if (args.assetId == undefined) {
    console.log('Missing assetId');
    process.exit(1);
} else {
    config.assetId = args.assetId;
}

if (args.block == undefined) {
    console.log('Missing block');
    process.exit(1);
} else {
    config.block = args.block;
}

if (args.amount == undefined) {
    console.log('Missing amount');
    process.exit(1);
} else {
    config.amount = args.amount * 100000000; //0.00000001 = 1
}

if (args.fee != undefined) {
    config.fee = args.fee * 100000000; //0.001 = 1
}

if (args.attachment != undefined) {
    config.attachment = args.attachment;
}

if (args.poll != undefined) {
    config.poll = args.poll * 1000;
}

var tracked = false;

function track() {
    if (!tracked) {
        axios.get('https://nodes.wavesplatform.com/blocks/headers/last')
            .then(function (response) {
                if (response.data.height == config.block) {
                    console.log('Bingo');

                    const transferData = {
                        recipient: config.recipient,
                        assetId: config.assetId,
                        amount: config.amount,
                        feeAssetId: 'WAVES',
                        fee: config.fee,
                        attachment: config.attachment,
                        timestamp: Date.now()
                    };

                    Waves.API.Node.v1.assets.transfer(transferData, seed.keyPair).then((responseData) => {
                        console.log(responseData);
                        process.exit(1);
                    });
                    
                    tracked = true;                    
                } else {
                    console.log("tracking: " + response.data.height);
                }
            })
            .catch(function (error) {
                // console.log(error);
            });
        
        setTimeout(track, config.poll);
    }
}

track();