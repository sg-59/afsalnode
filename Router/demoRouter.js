const { hello } = require('../Controller/userController')

const router=require('express').Router()

router.post('/afsal',hello)

module.exports=router