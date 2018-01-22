
//console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html( a , ...args) {
  // what goes here?
  // don't forget to return the escaped string!
  let result = [];
  args.forEach( x => {
    let t = x.replace(/&/g,'&amp;').replace(/'/g , '&apos;').replace(/"/g , '&quot;').replace(/</g , '&lt;').replace(/>/g,'&quot;');
    result.push(t);
  }
  );
  let y = '';
  let i;
  for (i = 0; i < a.length-1; i++) {
    y = `${y}${a[i]}${result[i]}`
  }
  y = `${y}${a[i]}`
  return y;
}

module.exports = html;
