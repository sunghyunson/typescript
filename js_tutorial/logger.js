
var url = 'http://mylogger.io/log'

const EventEmitter = require('events')
// const emitter = new EventEmitter();

class Logger extends EventEmitter {
	mylog(message) {
		console.log(message);

		// Raise an event
		this.emit('messageLogged', { id: 3, url: 'https://' })
	}
}


// module.exports.logFunc = log;
// module.exports.endPoint = url;
module.exports = Logger;
