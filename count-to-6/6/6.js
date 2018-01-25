
function min() {
//let arr = process.argv.slice(2).map(x => Number(x));

  let minimum = Math.min(...arguments);
  //console.log(`The minimum of [${arr}] is ${minimum}`);
  return minimum;
}
module.exports = min;
