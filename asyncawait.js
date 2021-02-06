/*
const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(resolve, 2000, 'i did something')
    })
}

const doSomething = async () => {
    console.log(await doSomethingAsync());
}

console.log('before')
doSomething()
console.log('after')

const test = async () => {
    return 'test';
}
test().then(res => console.log(res))

const fetch = require('node-fetch')

const getFirstUserData = () => {
    return fetch('/js.json') // return a promise, resolve response data
        .then(response => response.json()) // reture a promise, resolve translate response data to json type
        .then(users => users[0]) // return a promise, resolve is first element in response array data
        .then(user => fetch(`/users/${user.name}`)) // use first element data to fetch new data and return response data when resolve
        .then(userResponse => userResponse.json()) // translate to json type and return it if resolve
}
getFirstUserData()


const { default: fetch } = require("node-fetch")

const getFirstUserData = async () => {
    const response = await fetch('/js.json')
    const users = await response.json()
    const user = users[0]
    const userResponse = await fetch(`/users/${user.name}`)
    const userData = await userResponse.json()

    return userData;
}
getFirstUserData()
*/

const promiseToDoSomething = () => {
    return new Promise(resolve => {
        setTimeout(resolve, 2000, 'i did something')
    })
}

const watchSomeoneDoingSomething = async () => {
    const something = await promiseToDoSomething()
    return something + '\nand i watched'
}

const watchSomeoneWatchingSomeoneDoingSomething = async () => {
    const something = await watchSomeoneDoingSomething()
    return something + '\nand i watched as well'
}

watchSomeoneWatchingSomeoneDoingSomething().then(res => console.log(res))