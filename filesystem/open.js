const fs = require('fs')

fs.open('./test.txt', 'r', (err, data) => {
    if (err) {
        console.log('open fail')
        return
    }
    console.log('open success')
})

try {
    const data = fs.openSync('./test.txt', 'r')
    console.log('open success')
} catch (error) {
    console.log('open fail')
}
