const bar = () => console.log('bar');
const baz = () => console.log('baz');

const foo = () => {
    console.log('foo');
    setTimeout(bar, 0);
    new Promise((resolve, reject) =>
            resolve("should be right after baz, before bar"))
        .then(resolve => console.log(resolve));
    baz();
}

foo();
console.log('END');

process.nextTick(() => console.log("next tick"));
setImmediate(() => console.log("immediate"));