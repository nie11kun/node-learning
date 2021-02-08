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

console.log(process.env.PATH)
console.log(process.env.PATH.split(path.delimiter))

console.log(path.basename('/home/marco/dir'))
console.log(path.basename('/home/marco/file.txt'))
console.log(path.basename('/home/marco/file.txt', '.txt'))

console.log(path.dirname('/home/marco/file'))

console.log(path.extname('/home/marco/file.txt'))

console.log(path.isAbsolute('/home/marco'))
console.log(path.isAbsolute('./marco'))

const name = 'marco';
console.log(path.join('/home/' + name + '/file'))

console.log(path.normalize('/home/marco/../test'))

console.log(path.parse('/home/marco/test/file.txt'))

console.log(path.relative('/home/marco', '/home/marco/test/file.txt'))

console.log(path.resolve('file.txt'))

console.log(path.resolve('tmp/test', 'file.txt'))

console.log(path.resolve('/tmp/test', 'file.txt'))