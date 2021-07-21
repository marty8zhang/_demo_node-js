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

app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find({})

    res.send(messages)
  } catch (e) {
    res.sendStatus(500)

    return console.log('Error on getting all messages:', err)
  } finally {
    console.log('Getting all messages processed.')
  }
})

app.post('/messages', async (req, res) => {
  try {
    const message = new Message(req.body)

    await message.save()

    io.emit('message', req.body)

    res.sendStatus(200)
  } catch (err) {
    res.sendStatus(500)

    return console.log('Error on posting a message:', err)
  } finally {
    console.log('Posting a message processed.')
  }
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
  })
  .then(() => {
    console.log('MongoDB connected.')
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err)
  })

server.listen(3000, () => {
  console.log(`Server listening on`, server.address())
})
