/*
let a = 1;
let b = 2;
console.log(a, b);

console.log('num1 is ' + a + ', num2 is ' + b)
console.log('num1 is %s, num2 is %s', a, b)
console.log('my %s is %d years old', 'son', 10)
console.clear();
let obj = {
    name: 'marco',
    age: 20
}
console.log(obj)


console.count('count1')
console.count('count2')
console.count('count1')
console.count('count1')


const doSomeThing = () => console.log('test');
const measureTime = () => {
    console.time();
    doSomeThing();
    console.timeEnd();
}
measureTime()

console.log('\x1b[31m%s, \x1b[33m%s', 'hello', 'world')

const chalk = require('chalk')
console.log(chalk.yellow('hello world'))
*/

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        clearInterval(timer);
    }
}, 100);
