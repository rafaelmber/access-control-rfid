//Import libraries
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const http = require('http');
const ioLib = require('socket.io');
//Import Scripts
const { Parser, Port } = require('./cardReader');
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
  console.log(data);
  const worker = await accessControl(data);
  io.emit('worker', worker);
  setTimeout(() => {
    Port.write(Buffer.from('b'));
    io.emit('closed');
  }, 5000);
});

//Routes
app.use('/api/worker', require('./routes/worker.routes'));
app.use('/api/card', require('./routes/card.routes'));
app.use('/api/access', require('./routes/access.routes'));
app.use('/api/picture', express.static(path.join(__dirname, 'assets/pictures')));

app.use('/app', express.static(path.join(__dirname, '../client/public')));
app.get('/app/*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/public/index.html')));
app.get('/', (req, res) => {
  res.redirect('/app');
});
//Correr el server
server.listen(3000, () => {
  console.log('Server Running');
});
