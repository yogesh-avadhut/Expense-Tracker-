import express from "express"
import { connectdb } from "./db config/mongodb.js"
import expencesRoute from "./route/expences-route.js"

const app = express()
app.use(express.json())

app.get("/home", (req: any, res: any) => {
    
    try {
        res.send({
            error: false,
            message: "welcome to home...",
        })
    }
    catch (err: any) {
        res.send({
            error: true,
            message: "expences are not recover ",
            errmessage: err.message
        })
    }

})


app.use("/api",expencesRoute)







async function connectdbAndRunServer() {
    try {
        await connectdb()
        app.listen(5000, () => {
            console.log("server is running now...")
        })
    }
    catch (err) {
        console.log(err)
    }
}

connectdbAndRunServer()