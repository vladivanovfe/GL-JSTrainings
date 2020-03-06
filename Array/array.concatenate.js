Array.prototype.concatenate = function (...arrays) {
    return this.concat(...arrays);
}
console.log(['a', 'b'].concatenate(['a', 'c'], ['c', 'd'], ['d', 'd', 'x']));