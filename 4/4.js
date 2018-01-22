let foot = {
  kick: function () {
    this.yelp = "Ouch!";
    let a;
    //let ret =
    (() => {
      a = this.yelp;
    })();
    //ret();
    return a;
  }
};
//console.log(foot.kick());
module.exports = foot.kick;
