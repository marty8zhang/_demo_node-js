const express = require('express')
const path = require('path')
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

let messages = []

app.use(express.static(path.join(__dirname, '../../public')))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/messages', (req, res) => {
  res.send(messages)
})

app.post('/messages', (req, res) => {
  messages.push(req.body)

  io.emit('message', req.body)

  res.sendStatus(200)
})

io.on('connection', (socket) => {
  console.log('A user connected.')
})

server.listen(3000, () => {
  console.log(`Server listening on`, server.address())
})
