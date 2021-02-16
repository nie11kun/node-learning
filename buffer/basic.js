const { copySync } = require("fs-extra")

const buf1 = Buffer.from('hey!')
const buf2 = Buffer.from('7468697320697320612074c3a97374', 'hex')
const buf3 = Buffer.from(buf1)

const buf4 = Buffer.alloc(1024)
const buf5 = Buffer.allocUnsafe(1024)

console.log(buf1[0])
console.log(buf1[1])
console.log(buf1[2])
console.log(buf1)
console.log(buf1.toString())

console.log(buf1.length)

for (const iterator of buf1) {
    console.log(iterator)
}

const buf6 = Buffer.alloc(5)
buf6.write('hello')
buf6[0] = 111
console.log(buf6.toString())

const buf7 = Buffer.alloc(4)
buf1.copy(buf7)
console.log(buf7.toString())

const buf8 = Buffer.alloc(2)
buf1.copy(buf8, 0, 0, 2)
console.log(buf8.toString())

const slice = buf1.slice(0, 2)
console.log(slice.toString())
buf1[0] = 111
console.log(slice.toString())