# StarkNet Gas Price Dashboard

This is a dashboard that tracks the gas price on the StarkNet alpha mainnet. The react app deployed [here] simply shows the data that is saved as a json file inside `./react-ui/src/gas_prices.json`. 

To get the latest data, follow the followign steps: \
    1. Clone this repo : `git clone https://github.com/MakC-Ukr/Starknet-Gas-Price`\
    2.  Run `python3 data_updater.py` (starknet must be setup on your end;. If not, follow the steps [here](https://starknet.io/docs/quickstart.html))\
    3.  Move to the React app: `cd react-ui`\
    4.  Run `npm install`\
    5.  Run `npm start` \

The dashboard uses the block gas prices returned by StarkNet CLI for each block as described [here](https://starknet.io/docs/hello_starknet/cli.html).
