
function repeatmsg( msg , x = msg.length) {
  // what goes here?
  let a = '!';
  return `${msg}${a.repeat(x)}`;
}
module.exports = repeatmsg;
