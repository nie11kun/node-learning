const os = require('os')

/*
console.log(os.EOL)
console.log(os.constants.signals)
console.log(os.constants.errno)
*/

console.log(os.arch())
console.log(os.cpus())
console.log(os.endianness())
console.log(os.freemem()/1024/1024)
console.log(os.homedir())
console.log(os.hostname())
console.log(os.loadavg())
console.log(os.networkInterfaces())
console.log(os.platform())
console.log(os.release())
console.log(os.tmpdir())
console.log(os.totalmem()/1024/1024)
console.log(os.type())
console.log(os.uptime()/3600)
console.log(os.userInfo())