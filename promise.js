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
*/

const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const getFile = (fileName) => {
    return new Promise((resolve, rejects) => {
        fs.readFile('./fs.json', (err, data) => {
            
        })
    })
}

