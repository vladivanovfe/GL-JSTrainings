// .concatenateUnique(Array<number | string>, ...): Array<number | string> - Returns a new array from all given arrays in arguments with unique records

Array.prototype.concatenateUnique = function (...arrays) {
    let newArr = this.concat(...arrays);
    return [...new Set(newArr)];
}
console.log(['a', 'b'].concatenateUnique(['a', 'c'], ['c', 'd'], ['d', 'd', 'x']));
