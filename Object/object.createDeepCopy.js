// .createDeepCopy(sourceObj: object): object - returns a deep copy of provided object. Assume that field may contain other references, they also must be deep copied. Do not use Object.assign() method.

Object.prototype.createShallowCopy = function() {
    let shallowCopy = (this instanceof Object);
    for (let i in this) {
        if (i == 'createShallowCopy') {
            if (this[i] && typeof this[i] == "object") {
                shallowCopy[i] = this[i].createShallowCopy();
            } else {
                shallowCopy[i] = this[i];
            } 
            
            return shallowCopy;
        };
    };
};

console.log({
    name: 'Vlad',
    age: 21,
    smth: {
        a: 10,
        b: 15,
        c: 20
    }.createShallowCopy()
})