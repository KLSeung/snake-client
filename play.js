
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting...');
const connection = connect();

setupInput(connection); //We're passing in the conn object into the input so we can use it in our input function