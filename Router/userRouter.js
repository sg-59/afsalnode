const { postData, deleteData, updatedata, forgottenPassword, insertManydatas } = require('../Controller/userController')
const verifyToken = require('../VeifyToken')
const multer=require('multer')


const router=require('express').Router()

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/storeData',upload.single('image'),postData)
router.delete('/removeDatabase/:id',verifyToken,deleteData)
router.put('/updateDatabase/:id',verifyToken,updatedata)
router.post('/sendOtp',forgottenPassword)
router.get('/mongoQuerry',insertManydatas)
module.exports=router