import mongoose from "mongoose"


const url = "mongodb://localhost:27017"


async function connectdb() {
    try {
        await mongoose.connect(url)
        console.log("mongo db connected ...")
    }
    catch (err) {
        console.log("mongo db connection issue", err)
    }
}  


export { connectdb }