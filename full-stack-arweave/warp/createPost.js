import { warp, configureWallet} from './configureWarpServer.js'
import { transactionId } from '../transactionid.js'
import { v4 as uuid } from 'uuid'

async function createPost() {
    try{
    let wallet = await configureWallet()
    const contract = warp.contract(transactionId).connect(wallet)

    await contract.writeInteraction({
        function: 'createPost',
        post: {
            title: "Hi from first post!",
            content: "Chancellor on brink of second bailout for banks.",
            id: uuid()
        }
    })

    console.log("post created.")
} catch (err) {
    console.error("error creating post: ", err)
}



}

createPost()