const express=require('express')
const app=express()
const mongoose=require('mongoose')
require('dotenv').config()
const userRouter=require('./Router/userRouter')
const loginRouter=require('./Router/LoginRouter')

mongoose.connect(process.env.MONGOurl).then(()=>{
    console.log("data base are connected");
    
}).catch((err)=>{
    console.log(err.message);
    
})

app.use(express.json())

app.use('/api',userRouter)
app.use('/logapi',loginRouter)


app.listen(3000,()=>{
    console.log("port 3000 is connected"); 
    
})






