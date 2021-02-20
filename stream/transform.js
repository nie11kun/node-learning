const Stream = require('stream')
const transformStream = new Stream.Transform()

transformStream._transform = (chunk, encoding, callback) => {
    console.log('transform' + chunk.toString())
    transformStream.push(chunk)
    callback()
}

const writeableStream = new Stream.Writable()
writeableStream._write = (chunk, encoding, callback) => {
    console.log('write' + chunk.toString())
    callback()
}

process.stdin.pipe(transformStream).pipe(writeableStream)
