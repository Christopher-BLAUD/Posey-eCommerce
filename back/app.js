const mongoose = require('mongoose')
const express = require('express')
const app = express()
const path = require('path')
const sofa = require('./routes/sofa')
const bodyParser = require('body-parser')

mongoose
  .connect(
    'mongodb+srv://ChrisB:Lolette.34@cluster0.bhhbb.mongodb.net/posey?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/api', sofa)

module.exports = app
