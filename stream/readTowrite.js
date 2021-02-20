const Stream = require('stream')

const readableStream = new Stream.Readable()
readableStream._read = () => {}

const writeableStream = new Stream.Writable()
writeableStream._write = (chunk, encoding, callback) => {
    console.log(chunk.toString())
    callback()
}

readableStream.pipe(writeableStream)

readableStream.push('hi\n')
readableStream.push('hello\n')