const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;

const portNumber = 'COM3';
const baudRate = 9600;

const port = new SerialPort(
  portNumber,
  {
    baudRate,
  },
  (err) => {
    if (err) {
      console.error('Hubo un error', err);
    }
  }
);

const Parser = port.pipe(new Readline({ delimiter: '\r\n' }));
/*
parser.on('data', (data) => {
  console.log(data);
});
*/

//Write on port
/*
port.write('a') //Without buffer
port.write(Buffer.from('a'))
*/

module.exports.Parser = Parser;

module.exports.Port = port;
