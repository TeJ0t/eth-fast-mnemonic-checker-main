const fs = require('fs')
const ethers = require('ethers')
require('colors')

const provider = new ethers.providers.WebSocketProvider(
    'wss://eth-mainnet.g.alchemy.com/v2/w8KnwdziiyzLu9O4-npg43bWjiFqEost'
)

const addresses = fs
    .readFileSync('hits.txt', 'utf8')
    .split('\n')
    .map((val) => {
        return val.split(',')
    })

;(async () => {
    for (let i = 1; i < addresses.length; i++) {
        const address = addresses[i][0]
        const balance = await provider.getBalance(address)

        if (balance.gt(0)) {
            console.log(address.bgGreen.black, balance.toString().bgGreen.black)
            fs.appendFileSync('private-keys.txt' , addresses[i][1] + "," + balance + "\n")
            console.log('Private Key: '.yellow, addresses[i][1])
        } else {
            console.log(address, 0)
        }
    }
})()
