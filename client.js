const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected!');
    conn.write('Name: KLS');
    // conn.write("Move: up");
    // setInterval(() => {
    //   conn.write("Move: up")
    // }, 50);
  });

  return conn;
};

module.exports = { connect };