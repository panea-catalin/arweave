import { WarpFactory } from 'warp-contracts'
import fs from 'fs'
import { ArweaveSigner } from 'warp-contracts-plugin-deploy'

const environment = process.env.WARPENV || 'testnet'
console.log(environment)
let warp

if (environment === 'testnet') {

    warp = WarpFactory.forTestnet()
} else if (environment === 'mainnet') {
    warp = WarpFactory.forMainnet()
} else {
    throw Error('environment not set properly...')
}

async function configureWallet() {
    try {
        let wallet
        if (environment === 'testnet') {
            try{
                wallet = JSON.parse(fs.readFileSync('../testwallet.json', 'utf-8'))
            } catch (err) {
                const { jwk } = await warp.generateWallet()
                fs.writeFileSync('../testwallet.json', JSON.stringify(jwk))
                wallet = jwk
            }
        } else {
            wallet = JSON.parse(fs.readFileSync('../wallet.json', 'utf-8'))
        }
        return new ArweaveSigner(wallet)
    } catch (err) {
        console.log("Error configuring wallet: ", err)
    }
}

export {
    configureWallet,
    warp
}