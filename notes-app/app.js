const name = require('./utils.js');
const getNotes = require('./note.js');
const validator = require('validator');
const chalk = require('chalk');

console.log(name);
const message = getNotes();
console.log(message);

console.log(chalk.red(validator.isEmail('test@test.com')));