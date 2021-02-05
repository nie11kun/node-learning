/*
let done = true;

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = "working done";
        resolve(workDone);
    } else {
        const why = 'still working on';
        reject(why);
    }
});

const checkIfDone = () => {
    isItDoneYet
    .then(ok => console.log(ok))
    .catch(err => console.log(err))
}

done = false

checkIfDone();


const { rejects } = require('assert');
const { Color } = require('chalk');
const fs = require('fs');
const { resolve } = require('path');

const getFile = (fileName) => {
    return new Promise((resolve, rejects) => {
        fs.readFile('./fs.json', (err, data) => {
            if (err) {
                rejects(err)
                return
            }
            resolve(data)
        })
    })
}

getFile("fs.json")
    .then(data => console.log(data.toString()))
    .catch(err => console.log(err))

*/

const fetch = require('node-fetch');

const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}

const json = response => response.json() // return a promise

fetch('https://api.github.com/users/github') // return a promise, resolve is a response type
    .then(status) // use response as data and reture a promise
    .then(json) // use response as data convert to json and reture a promise
    .then(data => console.log('Request succeeded with JSON response', data)) // resolve call
    .catch(err => console.log('Request failed', err)) // if status promise call reject function, would call here

new Promise((resolve, reject) => {
    throw new Error('error')
}).catch(err => console.log(err))

new Promise((resolve, reject) => {
    reject('error')
}).catch(err => console.log(err))