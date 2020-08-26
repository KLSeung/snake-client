
const { connect } = require('./client');
const { setupInput } = require('./input');

setupInput().on('data', handleUserInput);
console.log('Connecting...');
connect();
