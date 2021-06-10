const express = require('express')
const app = express();
const util = require('./util')
const cors = require('cors')
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "*"
    }
});

const port = process.env.PORT || 4005
app.use(cors())
app.use(express.json());

let rooms = {}

io.on('connection', (socket) => {
    socket.on('create room', (roomdata) => {
        let id = util.generateRandomId()
        let inital = new Array(25).fill(0);
        rooms[id] = { texts: roomdata.texts, currentState: inital }
        socket.join(id)
        socket.emit('room created', id)
    })

    socket.on('join room', (room) => {
        socket.join(room)
    })

    socket.on('board update', (update) => {
        let id = update.id
        rooms[id].currentState = update.state
        io.sockets.in(id).emit('board update', update.state)
    })

    socket.on('disconnect', () => {
        console.log('Client Disconnected!')
    })
}); 

app.get('/api/rooms/:id', (req, res) => {
    let id = req.params.id;
    res.send(rooms[id])
})

app.get('/api/rooms', (req, res) => {
    res.send(rooms)
})

app.get('/', (req, res) => {
    res.send('LLLLLLLLL')
})

server.listen(port, () => console.log(`Running on http://localhost:${port}/`));