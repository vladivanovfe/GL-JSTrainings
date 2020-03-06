Object.prototype.getValues = function () {
    let obj = this;
    let arr = [];
    for (let val in obj) {
        arr.push(val);
    }
}
console.log({
    a: 'somestring',
    b: 42,
    c: false
  }.getValues())