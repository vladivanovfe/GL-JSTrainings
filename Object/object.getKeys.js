// .getKeys(): Array<string> - returns an array of objects keys (don't use Objects.keys() :))

Object.prototype.getKeys = function () {
    let keys = [];
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}
console.log({a: 'somestring', b: 42, c: false}.getKeys());