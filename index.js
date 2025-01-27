const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const userRouter=require('./Router/userRouter')
const demoRouter=require('./Router/demoRouter')
const logRouter=require('./Router/LoginRouter')
const cors=require('cors')

app.use(cors())

dotenv.config()

mongoose.connect(process.env.Mongourl).then(()=>{
 console.log("data base are connected");
}).catch((err)=>{
    console.log(err.message);
})

app.use(express.json())
app.use('/api',userRouter)
app.use('/api2',demoRouter)
app.use('/login',logRouter)

app.listen(3000,function(){
console.log("port is connected")

})