const fs = require('fs')

fs.stat('./test.txt', (err, stats) => {
    if (err) {
        console.log('read fail')
        return
    }
    console.log(stats)
})

try {
    const stats = fs.statSync('./test.txt')
    console.log(stat)
} catch (error) {
    console.log(error)
}
