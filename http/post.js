const https = require('https')

const data = JSON.stringify({
    todo: 'go to sleep'
})

const options = {
    hostname: 'niekun.net',
    port: 443,
    path: '/',
    method: 'POST',
    Headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = https.request(options, res => {
    console.log(`statusCode is：${res.statusCode}`);
    res.on('data', d => {
        process.stdout.write(d)
    })
})
req.on('error', err => console.log(err))

req.write(data)
req.end()