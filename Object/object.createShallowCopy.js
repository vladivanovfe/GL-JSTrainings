// .createShallowCopy(sourceObj: object): object - returns "shallow" copy of provided object. The references of the first level must be copied, if there are references deeped, provide a link, not a copy.

Object.prototype.createShallowCopy = function(sourceObj) {        
    let copy = {};

    for(key in sourceObj) {
        if(typeof sourceObj[key] != "object" || Array) {
            copy[key] = sourceObj[key];
        } else {
            let newObj = {};
            copy[key] = {};
            newObj[key].createShallowCopy();
        }
    }
    return copy;
};