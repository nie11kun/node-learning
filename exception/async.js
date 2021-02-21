let a = 0;
const demo = new Promise((resolve, reject) => {
    if (a == 0) {
        setTimeout(resolve, 1000, 'resolve');
    } else {
        reject('reject')
    }
})

const test = async() => {
    try {
        const data = await demo
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
test()