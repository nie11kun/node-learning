const https = require('http')
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
}

const req = https.request(options, res => {
    console.log(`statusCode is：${res.statusCode}`);
    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', err => console.log(err))
req.end()