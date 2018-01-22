
let min;
//console.log(process.argv.slice(2));
let arr = process.argv.slice(2).map(x => Number(x));
min = Math.min(...arr);
console.log(`The minimum of [${arr}] is ${min}`);

module.exports = min;
