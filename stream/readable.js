const Stream = require('stream')
const readableStream = new Stream.Readable({
    read() {}
})

//readableStream._read = () => {}

readableStream.pipe(process.stdout)

readableStream.push('hi\n')
readableStream.push('hello\n')

readableStream.on('readable', () => {
    console.log(readableStream.read().toString())
})