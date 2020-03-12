// .createShallowCopy(sourceObj: object): object - returns "shallow" copy of provided object. The references of the first level must be copied, if there are references deeped, provide a link, not a copy.

Object.prototype.createShallowCopy = function() {        
    let copy = {};
    let sourceObj = this;

    for (let key in sourceObj) {
        copy[key] = this[key];
    }
    return copy;

};