
module.exports = function average(...args) {
  // what goes here?
  if(args.length===0)
    return 0 ;

  let sum = args.reduce((a,b) => a + b, 0);
  return (sum/args.length);
};
