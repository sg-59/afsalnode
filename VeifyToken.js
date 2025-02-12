const jwt=require('jsonwebtoken')

const verifyToken=async(req,res,next)=>{
    console.log("verify token id",req.params.userId);
    console.log("verify token",req.headers.token);

    const token=req.headers.token
    if(token){
        jwt.verify(token,process.env.secKey,(err,data)=>{
            if(err) return res.status(401).json("invalid token")
            console.log("final answer",data);

            if(req.params.userId==data.id){
                next()
            }else{
                return res.status(401).json("userId and token missmatch")
            }
            
                })
   
            }else{
                return res.status(401).json("token is not found")
            }
}

module.exports=verifyToken