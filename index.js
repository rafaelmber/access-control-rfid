//Import libraries
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const http = require('http');
const ioLib = require('socket.io');
//Import Scripts
const { Parser } = require('./cardReader');
const accessControl = require('./accessControl');

//Instances Server and sockets
const app = express();
const server = http.createServer(app);
const io = ioLib(server);

//Database
const db = require('./database.js');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  '/api/picture',
  express.static(path.join(__dirname, 'assets/pictures'))
);

//Client Connected
io.on('connection', (socket) => {
  console.log('\nNew User connected\n');
  socket.on('allow', () => {
    console.log('Opening door');
  });
  socket.on('deny', () => {
    console.log('Closing Door');
  });
});

//Card Read
Parser.on('data', async (data) => {
  const worker = await accessControl(data);
  io.emit('worker', worker);
  setTimeout(() => {
    io.emit('closed');
  }, 5000);
});

//Routes
app.use('/api/worker', require('./routes/worker.routes'));
app.use('/api/card', require('./routes/card.routes'));

//Correr el server
server.listen(3000, () => {
  console.log('Server Running');
});
