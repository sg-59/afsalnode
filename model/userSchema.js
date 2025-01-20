const mongoose=require('mongoose')

const userInfo=new mongoose.Schema({
    name:String,
    // dateOfBirth:Date,
    email:String,
    password:String
})

module.exports=mongoose.model('userDatasinafsalbatch',userInfo)