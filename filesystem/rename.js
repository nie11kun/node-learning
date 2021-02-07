const fs = require('fs')

fs.rename('./tmp', './new', err => {
    if (err) {
        console.log('rename error')
        return
    }
    console.log('rename success')
})