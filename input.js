const { connect } = require("http2");

// STores the active TCP connection object
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  

  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === '\u0077') {
    connection.write('Move: up');
  } else if (key === '\u0064') {
    connection.write('Move: right');
  } else if (key === '\u0073') {
    connection.write('Move: down');
  } else if (key === '\u0061') {
    connection.write('Move: left');
  } else if (key === '\u0068') {
    connection.write('Say: Hi!')
  } else if (key === '\u0070') {
    connection.write('Say: Pineapple')
  } else if (key === "\u0066") {
    connection.write('Say: Pay Respect');
  }
};

setupInput().on('data', handleUserInput);

module.exports = { setupInput };