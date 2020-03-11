// .getEven(): Array<number> - Returns a new array with only even numbers

Array.prototype.getEven = function () {
    return this.map(x => {
        if (x % 2 == 0) {
            return x;
        } else {
            return 'notEven';
        }
    })
};
console.log([2,4,5,6,8,3].getEven());