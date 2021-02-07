const fs = require('fs')

fs.access('./tmp', err => {
    console.log(err ? 'not exist' : 'exist')
})