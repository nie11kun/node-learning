const http = require('http')
process.env.PORT = 3000
const port = process.env.PORT

const server = http.createServer((req, res) => {
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    })
    req.on('end', () => {
        console.log(JSON.parse(data).todo)
    })

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>hello world</h1>')
})
server.listen(port, () => console.log(`server running at port ${port}`))