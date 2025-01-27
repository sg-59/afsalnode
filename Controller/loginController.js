const user=require('../Model/userSchema')
const argon=require('argon2')
const jwt=require('jsonwebtoken')

const loginAccout=async(req,res)=>{
    try{
const Findmail=await user.findOne({email:req.body.email})
console.log("find mail",Findmail);

if(!Findmail){
    return res.status(401).json("Email is not valid please check your email !")
}

if (await argon.verify(Findmail.password, req.body.password)) {
  const token=await jwt.sign({id:Findmail._id},process.env.secKey,{expiresIn:"1d"})
  console.log("token ",token);
  
   return res.status(200).json({userId:Findmail._id,token:token,message:"loginsuccess"})
  } else {
   return res.status(401).json("Password and email does'nt match")
  }

    }catch(err){

        return res.status(500).json("net work error or something ....")
    }
}

module.exports={loginAccout}