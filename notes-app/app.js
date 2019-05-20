const name = require('./utils.js');
const getNotes = require('./note.js');
const validator = require('validator');

console.log(name);
const message = getNotes();
console.log(message);