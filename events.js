const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => console.log('started'))
eventEmitter.emit('start')

eventEmitter.on('test1', par => console.log('started', par))
eventEmitter.emit('test1', 'wow')

eventEmitter.on('test2', (a, b) => console.log(`started from ${a} to ${b}`))
eventEmitter.emit('test2', 1, 200)