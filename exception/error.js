process.on('uncaughtException', err => {
    console.log('there was a uncaught error', err)
    process.exit(1)
})

const test = 123;
throw test;


//throw new Error('error')

//class childError extends Error {
//}
//throw new childError('error')
