const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

/*
eventEmitter.on('start', () => console.log('started'))
eventEmitter.emit('start')

eventEmitter.on('test1', par => console.log('started', par))
eventEmitter.emit('test1', 'wow')

eventEmitter.on('test2', (a, b) => console.log(`started from ${a} to ${b}`))
eventEmitter.emit('test2', 1, 200)
*/

eventEmitter.addListener('test', () => { console.log('test emited') })
eventEmitter.emit('test')

eventEmitter.addListener('test2', () => {})
eventEmitter.addListener('test3', () => {})

console.log(eventEmitter.eventNames())

console.log(eventEmitter.getMaxListeners())

eventEmitter.addListener('test4', () => { console.log('a') })
eventEmitter.addListener('test4', () => { console.log('b') })
console.log(eventEmitter.listenerCount('test4'))


const f1 = () => {}
const f2 = () => {}
eventEmitter.addListener('test5', f1)
eventEmitter.addListener('test5', f2)
console.log(eventEmitter.listeners('test5'))
eventEmitter.removeListener('test5', f1)

const f3 = () => {}
eventEmitter.addListener('test6', f3)
eventEmitter.off('test6', f3)

eventEmitter.on('test6', () => {})

eventEmitter.once('test7', () => console.log('once show once'))
eventEmitter.emit('test7')
eventEmitter.emit('test7')

eventEmitter.on('test8', () => console.log('first listener'))
eventEmitter.prependListener('test8', () => console.log('second listener'))
eventEmitter.emit('test8')
eventEmitter.emit('test8')

eventEmitter.once('test9', () => console.log('first listener'))
eventEmitter.prependOnceListener('test9', () => console.log('second listener'))
eventEmitter.emit('test9')
eventEmitter.emit('test9')

eventEmitter.removeAllListeners('test9')

eventEmitter.setMaxListeners(20)
console.log(eventEmitter.getMaxListeners())