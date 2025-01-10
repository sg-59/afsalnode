const router=require('express').Router()
const user=require('../model/userSchema')

router.post('/postData',async(req,res)=>{
try{
    console.log("********",req.body);
    
const uploaddata=await user.create(req.body)
res.send("success")
}catch(err){
res.send("error detected")
}
})
router.post('/dummyData',(req,res)=>{
console.log("dummydata");
res.send("okokok")

})



module.exports=router

