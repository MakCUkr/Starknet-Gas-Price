import json
import subprocess

ls_err = []
with open('./react-ui/src/gas_prices.json') as json_file:
    prices = json.load(json_file)
with open('./react-ui/src/timestamps.json') as json_file:
    timestamps = json.load(json_file)

latest_block = max([int(i) for i in prices.keys()])+1

to_continue = True
while to_continue and latest_block<5305:
    try:
        out = subprocess.Popen(['starknet', 'get_block', '--number', str(latest_block), '--network', 'alpha-mainnet'],
                    stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        stdout, stderr = out.communicate()
        print(latest_block)
        stdout = str(stdout)
        time_curr = stdout.split()[18].split(",")[0]
        price_curr = stdout.split()[5:7][1].split('"')[1]
        prices[str(latest_block)] = price_curr
        timestamps[str(latest_block)] = time_curr
        ls_err.append(stderr)
        latest_block+=1
    except:
        to_continue = False

with open("./react-ui/src/gas_prices.json", "w") as fp:
    json.dump(prices,fp) 
with open("./react-ui/src/timestamps.json", "w") as fp:
    json.dump(timestamps,fp) 