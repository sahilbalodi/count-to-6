
let userArray = process.argv.slice(2);

// what goes here?
let user = {};
[ , user.username , user.email ] = userArray ;
console.log(user);
module.exports = user;
