Object.prototype.getValues = function () {
    let values = [];
    for (let val in this) {
        if (this.hasOwnProperty(val)) {
            values.push(this[val]);
        }
    }
    return values;
}
console.log({a: 'somestring', b: 42, c: false}.getValues());