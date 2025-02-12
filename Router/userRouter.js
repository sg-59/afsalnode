const { postData, deleteData, updatedata } = require('../Controller/userController')
const verifyToken = require('../VeifyToken')


const router=require('express').Router()

router.post('/storeData',postData)
router.delete('/removeDatabase/:id',verifyToken,deleteData)
router.put('/updateDatabase/:id',verifyToken,updatedata)
module.exports=router