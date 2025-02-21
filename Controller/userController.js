
const user=require('../Model/userSchema')
const argon=require('argon2')
const forgotten=require('../Model/otpSchema')
const afsal=require('../Model/querrySchema')
const nodemailer=require('nodemailer')

const cloudinary=require('cloudinary').v2

require('dotenv').config()


cloudinary.config({ 
    cloud_name:process.env.CloudName, 
    api_key:process.env.APIkey, 
    api_secret:process.env.APIsecret // Click 'View API Keys' above to copy your API secret
});

const transporter = nodemailer.createTransport({
service:"gmail",
    auth: {
      user:process.env.EMAIL,
      pass:process.env.EMAIL_PASSWORD,
    },
  });




const postData=async(req,res)=>{
    console.log("bcvdvchdvhcvjhdvhchdvhcvhdgvcghvdgh",req.body);
    req.body.password=await argon.hash(req.body.password)

    const hostedImage=await cloudinary.uploader.upload(req.file.path)

    console.log("hosted Images",hostedImage);
    
    
    try{
     
      await user.create({image:hostedImage.secure_url,...req.body})
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

const generateotp=()=>{
    return Math.round(Math.random()*1000+2000)
}

const forgottenPassword=async(req,res)=>{
    const {email}=req.body
const otp=generateotp()
console.log(otp);
try{
    await forgotten.create({email,otp})
    await transporter.sendMail({
        from:process.env.Email, // sender address
        to: email, // list of receivers
        subject: "Send otp", // Subject line
        text: "Youre otp is shown below", // plain text body
        html: `<h3>you are otp ${otp}</h3>
        <img src=https://media.licdn.com/dms/image/v2/C560BAQH1sk8Lgp9cgg/company-logo_200_200/company-logo_200_200/0/1660654385768/the_futura_labs_logo?e=2147483647&v=beta&t=tc-It4H-ow-h9X3rUh_OEutD-Iwy4m9K2v3fTC8_zcc>`, // html body
      });
return res.status(200).json("otp stored successfully")      
    }catch(err){
return res.status(500).json(err)
    }
}


const insertManydatas=async(req,res)=>{
    try{
const a=await afsal.find({age:{$gt:25}},{name:1,_id:0})
return res.status(200).json(a)
    }catch(err){
return res.status(500).json(err)
    }
}
module.exports={postData,getData,getSingleData,deleteData,updatedata,forgottenPassword,insertManydatas}