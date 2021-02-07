const fs = require('fs')

fs.readFile('./test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('read fail')
        return
    }
    console.log(data)
})

try {
    data = fs.readFileSync('./test.txt', 'utf-8')
    console.log(data)
} catch (error) {
    console.log('read error')
}