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

const display=async(req,res)=>{
    console.log("get Data");
    res.send("get data")
}

const hello=async(req,res)=>{
    console.log("hello page");
    
}

module.exports={postData,display,hello}