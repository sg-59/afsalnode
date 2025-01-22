const { getData, getSingleData } = require('../Controller/userController')

const router=require('express').Router()

router.get('/hellohai',getData)
router.get('/getSingledata/:userId',getSingleData)

module.exports=router