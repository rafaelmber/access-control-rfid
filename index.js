const path = require('path');
const morgan = require('morgan');
const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const { Parser } = require('./cardReader');
const accessControl = require('./accessControl');

//Settings

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

io.on('connection', (socket) => {
  console.log('\nNew User connected\n');
  socket.on('allow', () => {
    console.log('Opening door');
  });
  socket.on('deny', () => {
    console.log('Closing Door');
  });
});

Parser.on('data', async (data) => {
  const worker = await accessControl(data);
  io.emit('worker', worker);
});

//Routes
app.use('/api/worker', require('./routes/worker.routes'));
app.use('/api/card', require('./routes/card.routes'));

//app.use('/api/picture', require('./routes/picture.routes'));
//Correr el servidor
http.listen(3000, () => {
  console.log('Server Running');
});
