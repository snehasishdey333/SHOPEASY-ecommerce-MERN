const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const connect=require('./database/db')
const userRouter=require('./routes/users')
const authRouter=require('./routes/auth')
const productRouter=require('./routes/products')
const cartRouter=require('./routes/carts')
const orderRouter=require('./routes/orders')
const stripeRoute = require('./routes/stripe')


//database
connect()

//middlewares
app.use(cors())
dotenv.config()
app.use(express.json())
app.use("/api/users/",userRouter)
app.use("/api/auth/",authRouter)
app.use("/api/products/",productRouter)
app.use("/api/carts/",cartRouter)
app.use("/api/orders/",orderRouter)
app.use("/api/checkout", stripeRoute);

app.get("/",(req,res)=>{
    res.json("hello")
})

const PORT=process.env.PORT

app.listen(PORT || 5000,()=>{
    console.log("app is running on port 5000")
})