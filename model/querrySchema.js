const mongoose=require('mongoose')

const querrySchema=new mongoose.Schema(
    {
        index: Number,
        name: String,
        isActive: Boolean,
        registered: Date,
        age: Number,
        gender: String,
        eyeColor: String,
        favoriteFruit: String,
        company: {
          title: String,
          email: String,
          phone: String,
          location: {
            country: String,
            address: String
          }
        },
        tags: []
      },
)

module.exports=mongoose.model('querrycollection',querrySchema)