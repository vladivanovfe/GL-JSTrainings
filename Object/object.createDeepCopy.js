// .createDeepCopy(sourceObj: object): object - returns a deep copy of provided object. Assume that field may contain other references, they also must be deep copied. Do not use Object.assign() method.

Object.prototype.createDeepCopy = function (sourceObj) {
    let copy = {};

    for(key in sourceObj) {
        if(typeof sourceObj[key] != "object" || Array) {
            let newObj = {};
            copy[key] = newObj[key];
        } else {
            copy[key] = {};
            newObj[key].createDeepCopy();
        }
    }
    return copy;
}