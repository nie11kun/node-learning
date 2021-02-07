const { fstat } = require('fs')
const path = require('path')

const file = '/home/marco/file.txt'
console.log(path.dirname(file))
console.log(path.basename(file))
console.log(path.extname(file))
console.log(path.basename(file, path.extname(file)))

const dir = 'home/marco/'
let p = path.join('/' + dir + 'test.txt')
console.log(p)

p = path.resolve('file.txt')
console.log(p)
p = path.resolve('./test/file.txt')
console.log(p)

p = path.resolve('tmp', 'file.txt')
console.log(p)

p = path.resolve('/tmp', 'file.txt')
console.log(p)

p = path.normalize('/home/../test/file.txt')
console.log(p)