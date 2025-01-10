const mongoose=require('mongoose')

const userData=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    age:{type:Number,required:true,min:18,max:100},
    mobile:{type:Number,required:true,unique:true },
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
})


module.exports=mongoose.model('userInfo',userData)

