const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true},
  rank: { type: String},
  imageUrl: { type: String, required: true },
})

module.exports = mongoose.model('Product', productSchema)
