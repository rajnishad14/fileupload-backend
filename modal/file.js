const mongoose = require('mongoose')

const schema = mongoose.Schema({
  id: Number,
  userId: Number,
  title: String,
  body: String,
})

const postData = mongoose.model('postData', schema)
module.exports = postData
