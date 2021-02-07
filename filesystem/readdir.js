const fs = require('fs')
const path = require('path')

const isFile = fileName => {
    return fs.statSync(fileName).isFile()
}
const p = '/usr'
const d = fs.readdirSync(p).map(f => {
    return path.resolve(p, f)
}).filter(isFile)

console.log(d)