Array.prototype.concatenateUnique = function (...arrays) {
    let newArr = this.concat(...arrays);
    return [...new Set(newArr)];
}
console.log(['a', 'b'].concatenateUnique(['a', 'c'], ['c', 'd'], ['d', 'd', 'x']));
