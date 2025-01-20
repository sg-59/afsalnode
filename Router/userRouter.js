const { postData, display } = require('../Controller/userController')


const router=require('express').Router()

router.post('/storeData',postData)
router.post('/getData',display)

module.exports=router