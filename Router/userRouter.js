const { postData, deleteData } = require('../Controller/userController')


const router=require('express').Router()

router.post('/storeData',postData)
router.delete('/removeDatabase/:id',deleteData)
module.exports=router