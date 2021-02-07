const fs = require('fs-extra')

const p = './new'
/*
fs.remove(p, err => {
    if (err) {
        console.log('remove error')
        return
    }
    console.log('remove success')
})

fs.remove(p)
.then(() => console.log('remove success'))
.catch((err) => console.log(err))
*/

const rm = async (p) => {
    try {
        await fs.remove(p)
        console.log('remove success')
    } catch (error) {
        console.log('remove error')
    }
}
rm(p)
