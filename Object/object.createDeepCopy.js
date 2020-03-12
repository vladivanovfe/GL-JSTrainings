// .createDeepCopy(sourceObj: object): object - returns a deep copy of provided object. Assume that field may contain other references, they also must be deep copied. Do not use Object.assign() method.

Object.prototype.createDeepCopy = function () {
    let copy = {};
    let sourceObj = this;

    for(key in sourceObj) {
        if(typeof sourceObj[key] != "object" || Array) {
            copy[key] = sourceObj[key];
        } else {
            copy[key] = {};
            sourceObj[key].createDeepCopy();
        }
    }
    return copy;
}