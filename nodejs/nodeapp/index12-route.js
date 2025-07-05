import express from "express"
import productRouter from "./productRoute.js"
import userRouter from "./userRoute.js"

const app = express()

app.listen(8081, () => {
    console.log("Server started")
})

app.use("/api/products", productRouter)
app.use("/api/users", userRouter)

