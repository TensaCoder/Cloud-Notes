const connectToMongo = require('./db');
const express = require('express')

// Establishing Connection with MongoDB
connectToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! this is notes project')
})

app.listen(port, () => {
  console.log(`Example app listening on port: http://localhost:${port}`)
})