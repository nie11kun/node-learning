const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    fs.readFile(__dirname + '/test.txt', (err, data) => {
        if (err) {
            console.log('read error')
        }
        res.end(data)
    })
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})