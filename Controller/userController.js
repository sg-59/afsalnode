
const user=require('../Model/userSchema')

const postData=async(req,res)=>{
    console.log(req.body);
    
    try{
        await user.create({name:req.body.username,...req.body})
        res.send('success')
    }catch(err){
        console.log("err");
        
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