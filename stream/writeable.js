const Stream = require('stream')
const writeableStream = new Stream.Writable()

writeableStream._write = (chunk, encoding, callback) => {
    console.log(chunk.toString())
    callback()
}

process.stdin.pipe(writeableStream)

writeableStream.write('hello world\n', 'utf-8', err => {console.log(err)})

writeableStream.end()