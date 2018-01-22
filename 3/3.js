function mapreduce() {
  let arr = process.argv.slice(3).reduce((x,y) => `${x},${y}`);
  let a = process.argv.map( x => x[0]).slice(3);
  let b = a.reduce( (x,y) => `${x}${y}` );
  console.log(`[${arr}] becomes "${b}"`);
  return b;
}
mapreduce();
module.exports = mapreduce;
