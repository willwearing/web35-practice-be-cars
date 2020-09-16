const express = require('express')

const server = express()

server.use(express.json())

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
  console.log(`\n** Server is listening on port ${PORT} **\n`)
})
