const { getData, getSingleData } = require('../Controller/userController')
const verifyToken = require('../VeifyToken')

const router=require('express').Router()

router.get('/hellohai',getData)
router.get('/getSingledata/:userId',verifyToken,getSingleData)

module.exports=router