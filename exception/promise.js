let a = 0;
let b = 1;

const doSomething1 = new Promise((resolve, reject) => {
    if (a == 0)
        resolve('resolve 1')
    else
        reject('reject 1')
})

const doSomething2 = (data) => {
    return new Promise((resolve, reject) => {
        if (b == 0)
            resolve(data + ' : resolve 2')
        else
            reject('reject 2')

    })
}

doSomething1
    .then(doSomething2)
    .then(res => console.log(res))
    .catch(rej => console.log(rej))