/*
document.getElementById('button').addEventListener('click', () => {});

window.addEventListener('load', () => {
    //...
})


const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
        xhr.status == 200 ? console.log(xhr.responseText) : console.log('error');
    };
};
xhr.open('GET', 'https://niekun.net');
xhr.send();
*/

const fs = require('fs')

fs.readFile('./fs.json', (err, data) => {
    if (err !== null) {
        console.log('read error');
        return;
    }
    console.log(data.toString());
})