# Waves triggered transaction
Do a [Waves](https://wavesplatform.com/) transaction on the nth block.

## Installation

```
npm install
```

## Set Environment Variables

create .env file in project folder and add this line

```
export SEED="a seed which was backed up some time ago"
```

set .env file

```
source .env
```

_Alternatively set the environment variable directly in your commandline shell._

## Usage

Usage:

```
node app.js [OPTION]
```

Do a waves transaction with `[OPTION]`.

    --recipient                 An Recipient public address (required)
    --assetId                   ID of a token, or WAVES (required)
    --block                     Sequence of the block which you want to trigger (required)
    --amount                    The amount you want to send (required)
    --fee                       The fee for transaction in WAVES (defaults to 0.001)
    --attachment                140 bytes of data
    --poll                      Interval to check if the chain is on the nth block, in seconds (defaults to 5)

Examples:

    node app.js \
        --recipient="3PPbMwqLtwBGcJrTA5whqJfY95GqnNnFMDX" \
        --assetId="HPCVtLLrKZ9pK9E1AhK1bdmZsc9uiKauZjpqq5HzH3Lp" \
        --block=999000 \
        --amount=0.00000001 \
        --fee=0.005 \
        --attachment="Waves rocks!" \
        --poll=3
