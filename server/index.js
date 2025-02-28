const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
   cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});


const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
   console.log('User connected:', socket.id);

   socket.on('chat message', (message) => {
      console.log('message: ' + message);
      io.emit('chat message', message); // Broadcast to all connected clients
   });

   socket.on('disconnect', () => {
     console.log('User disconnected', socket.id);
   });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});