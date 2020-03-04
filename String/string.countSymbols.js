String.prototype.countSymbols = function(symbol) { 
    let result = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] == symbol) {
            result++;
        }
    }
    return result;
};
console.log('test'.countSymbols('t'));