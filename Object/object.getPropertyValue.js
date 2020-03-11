// .getPropertyValue(obj: object): any - returns a value of provided key name. In case if you have duplicated results (see example above), return an array of values. Throw an exception in case if you don't have any results.

Object.prototype.getPropertyValue = function (value) {
    for (let prop in this ) {
        if (this.hasOwnProperty(prop)) {
            if (this[prop] === value) {
                return prop;
            }
        } else {
            throw new Error ("Prop not found!")
        }
    }
}
console.log({
    key1: 10,
    key2: 'abc'
 }.getPropertyValue('abc'));