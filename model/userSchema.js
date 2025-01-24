const mongoose=require('mongoose')

const userInfo=new mongoose.Schema({
    name:{required:true,type:String},
    mobile:{required:true,type:Number,unique:true},
    email:{required:true,type:String,unique:true},
    password:{required:true,type:String}
})

module.exports=mongoose.model('userDatasinafsalbatch',userInfo)