const { SerialPort } = require('serialport');
const { ReadlineParser } = require('serialport');

const portNumber = 'COM3';
const baudRate = 9600;

const port = new SerialPort({
  path: portNumber,
  baudRate,
});

port.on('error', (err) => {
  if (err) {
    console.error('There was an error:', err);
  }
});
const Parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

module.exports.Parser = Parser;

module.exports.Port = port;
