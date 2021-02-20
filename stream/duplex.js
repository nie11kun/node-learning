const Stream = require('stream')
const duplexStream = new Stream.Duplex()

duplexStream._read = () => {}
duplexStream._write = (chunk, encoding, callback) => {
    console.log('duplex' + chunk.toString())
    duplexStream.push(chunk)
    callback()
}

const writeableStream = new Stream.Writable()
writeableStream._write = (chunk, encoding, callback) => {
    console.log('write' + chunk.toString())
    callback()
}

process.stdin.pipe(duplexStream).pipe(writeableStream)
