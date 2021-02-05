const t1 = setTimeout(() => {
    console.log('delay 1s')
}, 1000);
clearTimeout(t1);

console.log('start')

const test = (a, b) => console.log(a + b);

setTimeout(test, 2000, 1, 2);

const t2 = setInterval(() => {
    console.log('wow');
}, 500);

setTimeout(() => {
    clearInterval(t2);
}, 2000);

const test2 = () => {
    console.log('wow');
    setTimeout(test2, 1000);
}

test2();