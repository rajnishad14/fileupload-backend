const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const fileRouter = require('./routes/file')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

const CONNECTION_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clustor0.maus9.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
const port = process.env.PORT || 3002

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//
app.use('/', fileRouter)
//

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log('server is running at port:', port)
    })
  })
  .catch((error) => {
    console.log(error)
  })
