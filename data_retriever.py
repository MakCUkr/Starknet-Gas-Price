import subprocess
import json
from tqdm import tqdm

prices = {}
timestamps = {}
ls_err = []

for block_num in tqdm(range(4600,5300)):
    out = subprocess.Popen(['starknet', 'get_block', '--number', str(block_num), '--network', 'alpha-mainnet'],
                       stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    stdout, stderr = out.communicate()
    stdout = str(stdout)
    time_curr = stdout.split()[18].split(",")[0]
    price_curr = stdout.split()[5:7][1].split('"')[1]
    prices[str(block_num)] = price_curr
    timestamps[str(block_num)] = time_curr
    ls_err.append(stderr)

with open("./react-ui/src/gas_prices.json", "w") as fp:
    json.dump(prices,fp) 
with open("./react-ui/src/timestamps.json", "w") as fp:
    json.dump(timestamps,fp) 


#
# Loading a sample output of the CLI command from txt file
#


# with open('sample.txt') as f:
#     lines = f.readlines()[0][1:]

# print(lines.split()[5:7][1].split('"')[1])

#
# Saving a sample output of the CLI command
#


# out = subprocess.Popen(['starknet', 'get_block', '--number', '2000', '--network', 'alpha-mainnet'],
#                     stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
# stdout, stderr = out.communicate()

# with open ('sample.txt', 'w') as file:  
#     file.write(str(stdout))  