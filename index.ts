import { ethers } from "ethers"
import { config } from "dotenv";
config();

async function main() {
    //create connection to the blockchain
    const provider = new ethers.providers.WebSocketProvider(`wss://goerli.infura.io/ws/v3/6e88e74979444b2faf2bbaf5f280b519`);
    //create a subsription to an event
    provider.on('pending', async (tx) => {
        const txInfo = await provider.getTransaction(tx)
        console.log(txInfo);
        
    })
}
main()

