// .getOdd(): Array<number> - Returns a new array with only odd numbers

Array.prototype.getOdd = function () {
    let result = [];
    this.forEach(x => {
        if (!(x % 2) == 0) {
            result.push(x);
        }
    })
    return result;
};
console.log([2,4,5,6,8,3].getOdd());