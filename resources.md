Instead of querying a specific contract or transaction, you may want to query an entire block and examine the transactions contained within it. To do this, run the following:

`starknet get_block --number BLOCK_NUMBER`

The output should resemble:

{
    "block_hash": "0x3edbb1517aaf8187b96477a0b42517de577a448666be16c1b85ccd49fbb04b9",
    "block_number": 1,
    "gas_price": "0x174876e800",
    "parent_block_hash": "0x2481e994cd8611047378fffa1454a4a4de1ce420caa28126a546a13443ff840",
    "sequencer_address": "0x310959e4d55cfe4712291a5f9787893fb392d1ffb96905aba549b21e91e9fc9",
    "starknet_version": "0.10.0",
    "state_root": "079354de0075c5c1f2a6af40c7dd70a92dc93c68b54ecc327b61c8426fea177c",
    "status": "ACCEPTED_ON_L2",
    "timestamp": 105,
    "transaction_receipts": [
        {
            "actual_fee": "0x0",
            "events": [],
            "l2_to_l1_messages": [],
            "transaction_hash": "0x50ed2694abe6c3812590cb34f39f367cda58bcfb37c6a61c94da43c60169b07",
            "transaction_index": 0
        }
    ],
    "transactions": [
        {
            "class_hash": "0x4474242ed3116e6fda7f66ab4fbb11e269af89c210dcc1115aad65712b04c95",
            "max_fee": "0x0",
            "nonce": "0x0",
            "sender_address": "0x78d796e87cfa496bffad27be9ed42f2709bd6e32a6366f842fdf38664a1412d",
            "signature": [],
            "transaction_hash": "0x50ed2694abe6c3812590cb34f39f367cda58bcfb37c6a61c94da43c60169b07",
            "type": "DECLARE",
            "version": "0x1"
        }
    ]
}






To estimate the fee of a given transaction run the following:

```
starknet invoke \ 
    --address ${CONTRACT_ADDRESS} \
    --abi contract_abi.json \
    --function increase_balance \
    --inputs 1234 \
    --estimate_fee
```

The output should resemble:

The estimated fee is: 756000000000000 WEI (0.000756 ETH).
Gas usage: 7560
Gas price: 100000000000 WEI

