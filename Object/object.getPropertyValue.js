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