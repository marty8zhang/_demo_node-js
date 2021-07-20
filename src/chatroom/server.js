const express = require('express')
const path = require('path')
const http = require('http')
const mongoose = require('mongoose')
const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, '../../public')))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
  res.render('index')
})

const Message = mongoose.model('Message', {
  name: String,
  message: String,
})

app.get('/messages', (req, res) => {
  Message.find({}, (err, messages) => {
    if (err) {
      res.sendStatus(500)
    }

    res.send(messages)
  })
})

app.post('/messages', (req, res) => {
  const message = new Message(req.body)

  message.save((err) => {
    if (err) {
      res.sendStatus(500)
    }

    io.emit('message', req.body)

    res.sendStatus(200)
  })
})

io.on('connection', (socket) => {
  console.log('A user connected.')
})

const mongodbConnectionString = 'mongodb://mongodb:27017/_tutorial_node-js'
mongoose.connect(
  mongodbConnectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log('MongoDB connection error:', err)
    } else {
      console.log('MongoDB connected.')
    }
  })

server.listen(3000, () => {
  console.log(`Server listening on`, server.address())
})
