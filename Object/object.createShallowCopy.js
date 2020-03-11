// .createShallowCopy(sourceObj: object): object - returns "shallow" copy of provided object. The references of the first level must be copied, if there are references deeped, provide a link, not a copy.

Object.prototype.createShallowCopy = function() {
    let shallowCopy = (this instanceof Object);
    for (let i in this) {
        if (i == 'createShallowCopy') {
            shallowCopy[i] = this[i];
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