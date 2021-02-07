const fs = require('fs')

content = '\nnew line\n'
fs.appendFile('./test.txt', content, err => {
    if (err) {
        console.log('write error')
        return
    }
    console.log('write success')
})

try {
    fs.appendFileSync('./test.txt', content)
    console.log('write success')
} catch (error) {
    console.log('write error')
}