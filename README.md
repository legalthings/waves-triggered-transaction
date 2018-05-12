# waves-triggered-transaction
Do a Waves transaction on the nth block

## Installation

```
npm install
```

## Set Environment Variables

create .evn file in project folder and add this line

```
export SEED="a seed which was backed up some time ago"
```

set .env file

```
source .env
```

## Usage

```
Usage: node app.js [OPTION]
Do a waves transaction with [OPTION]

With no OPTION, there must be error.

    --recipient                 An Recipient public address

    --assetId                   ID of a token, or WAVES

    --block                     Sequence of the block which you want to trigger

    --amount                    The amount is the given number divided by 10^(precision of the token)

    --fee                       The fee is the given number divided by 10^(precision of the token)

    --attachment                140 bytes of data (it's allowed to use Uint8Array here)

    --poll                      Interval to check if the chain includes the nth block or not

Examples:
    node app.js 
        --recipient="3PJ3RhcWyKXF6SXd6t35v7sLxYwgctY9g5c" --assetId="HPCVtLLrKZ9pK9E1AhK1bdmZsc9uiKauZjpqq5HzH3Lp" 
        --block=997760
        --amount=0.00000001
        --fee=0.005
        --attachment="Hello world"
        --poll=5
```