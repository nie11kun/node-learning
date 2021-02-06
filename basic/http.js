const http = require('http')

const hostname = '127.0.0.1'
const port = 8080

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World!\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

process.on('SIGINT', () => {
    server.close(() =>
        console.log('process terminated')
    );
});

setTimeout(() =>
    process.kill(process.pid, 'SIGINT')
    , 3000);
