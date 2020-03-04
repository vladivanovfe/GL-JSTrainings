String.prototype.repeat = function(times) {
    let str = '';
    for (let i = 0; i < times; i++) {
        str += this;
    }
    return str;
}
console.log('abc'.repeat(3));