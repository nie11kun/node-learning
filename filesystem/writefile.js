const fs = require('fs')

const content = 'some new words'
fs.writeFile('./test.txt', content, err => {
    if (err) {
        console.log('write error')
        return
    }
    console.log('write success')
})

try {
    fs.writeFileSync('./test.txt', content)
    console.log('write success')
} catch (error) {
    console.log('write error')
}

fs.writeFile('./test.txt', content, {flag: 'a+'}, err => {
    if (err) {
        console.log('write error')
        return
    }
    console.log('write success')
})