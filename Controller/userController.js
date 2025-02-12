
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
return res.status(200).json(a)
    }catch(err){
console.log(err);
return res.status(500).json(err.message)
    }
}

const getSingleData=async(req,res)=>{


    console.log("after middleware");
    

    console.log(req.params.userId);
    
    try{
const a=await user.findById(req.params.userId)
return res.status(200).json(a)
    }catch(err){
        return res.status(500).json(err.message)
    }
}

const deleteData=async(req,res)=>{
    try{
await user.findByIdAndDelete(req.params.id)
return res.status(200).json("deleted")
    }catch(err){
return res.status(500).json(err)
    }
}

const updatedata=async(req,res)=>{
    try{
        console.log(req.body);
        req.body.password=await argon.hash(req.body.password)
const updatedInfo=await user.findByIdAndUpdate(req.params.id,{$set:{name:req.body.username,mobile:req.body.phone,email:req.body.Email,...req.body}},{new:true})
return res.status(200).json(updatedInfo)
    }catch(err){
return res.status(500).json(err.message)
    }
}

module.exports={postData,getData,getSingleData,deleteData,updatedata}