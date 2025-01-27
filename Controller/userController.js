
const user=require('../Model/userSchema')
const argon=require('argon2')


const postData=async(req,res)=>{
    console.log("bcvdvchdvhcvjhdvhchdvhcvhdgvcghvdgh",req.body);
    req.body.password=await argon.hash(req.body.password)
    
    try{
     
      await user.create(req.body)
       return res.status(200).json({status:"success"})
    }catch(err){
       return res.status(500).json({status:"failed"})
    }  
}

const getData=async(req,res)=>{
    try{
const a=await user.find()
res.send(a)
    }catch(err){
console.log(err);

    }
}

const getSingleData=async(req,res)=>{

    console.log(req.params.userId);
    
    try{
const a=await user.findById(req.params.userId)
res.send(a)
    }catch(err){

    }
}

const deleteData=async(req,res)=>{
    try{
await user.findByIdAndDelete(req.params.id)
res.send('item deleted')
    }catch(err){

    }
}

module.exports={postData,getData,getSingleData,deleteData}