Object.prototype.getKeys = function () {
    // let keys = [];
    // let obj = this;
    // for (let key in obj) {
    //     keys.push(key);
    // }
    let keys = [], i = 0;
    for (keys[i++] in this) {}
}
console.log({ 'first' : 'xxx', 'second' : 'zzz' }.getKeys());