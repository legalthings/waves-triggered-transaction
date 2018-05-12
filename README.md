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
node app.js --recipient="3PJ3RhcWyKXF6SXd6t35v7sLxYwgctY9g5c" --assetId="HPCVtLLrKZ9pK9E1AhK1bdmZsc9uiKauZjpqq5HzH3Lp" --block=997760 --amount=0.00000001 --fee=0.005 --attachment="Hello world" --poll=5
```