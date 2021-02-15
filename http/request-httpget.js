const https = require('http')
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/'
}

const req = https.get(options, res => {
    console.log(`statusCode is：${res.statusCode}`);
    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', err => console.log(err))