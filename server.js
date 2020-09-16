const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const colors = require('colors')
const cors = require('cors')

const connectDB = require('./utils/db.js')
require('dotenv').config()

const server = express()

server.use(cors())
server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())
connectDB()

let currentTime = new Date().toLocaleString()

server.get('/', (req, res) => {
  res.json({
    status: 'Success',
    message: 'Server is live',
    dateTime: currentTime,
    author: 'Github: @MrZacSmith',
  })
})

const PORT = process.env.PORT || 3555

server.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT} **\n`.rainbow)
})
