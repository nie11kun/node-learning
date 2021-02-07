const fs = require('fs')

const fd = 'tmp'
try {
    if (!fs.existsSync(fd)) {
        fs.mkdirSync(fd)
        console.log('create success')
    }
} catch (error) {
    console.log('create fail')
}