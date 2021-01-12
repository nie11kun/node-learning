const { argv } = require("process");

/*
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

const val = process.argv.slice(2);
console.log(val[0]);
*/

const args = require('minimist')(process.argv.slice(2));
console.log(args['name']);
console.log(args['age']);