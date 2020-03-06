Object.prototype.getKeyValuePair = function (element) {
    let keys = [];
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    let values = [];
    for (let val in this) {
        if (this.hasOwnProperty(val)) {
            values.push(this[val]);
        }
    }
    return '[' + keys[element] + '] : ' + values[element] + '\n';
}
console.log({a: 'somestring', b: 42, c: false}.getKeyValuePair(0));