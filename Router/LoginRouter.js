const { loginAccout } = require('../Controller/loginController')

const router=require('express').Router()

router.post('/verifyAccount',loginAccout)


module.exports=router