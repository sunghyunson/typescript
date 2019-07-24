// var logger = require('./logger.js')
// logger = 1;
// const logger = require('./logger.js')

// console.log(module)

// console.log(logger);
// logger.logFunc('message')


const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);



const os = require("os")
var totalMemory = os.totalmem()
var freeMemory = os.freemem();

console.log('Total memory: ' + totalMemory);
console.log('Free memory: ' + freeMemory);


const fs = require('fs')
const files = fs.readdirSync('./')
console.log(files);

fs.readdir('./', function (errors, files) {
	if (errors) console.log("Error", errors);
	else console.log('Result', files);
})





const EventEmitter = require('events')
// const emitter = new EventEmitter();
const Logger = require('./logger')
const logger = new Logger();
// Register a listener
logger.on('messageLogged', (arg) => {
	console.log('Listener called', arg);
})

logger.mylog('message');


// Register a listener
// emitter.on('messageLogged', function (arg) {
// 	console.log('Listener called', arg);
// })
// emitter.on('messageLogged', (arg) => {
// 	console.log('Listener called', arg);
// })

// Raise an event
// emitter.emit('messageLogged', { id: 1, url: 'http://' });

// Raise: logging (data: message)

