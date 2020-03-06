Array.prototype.getOdd = function () {
    return this.map(x => {
        if (!(x % 2) == 0) {
            return x;
        } else {
            return 'notOdd';
        }
    })
};
console.log([2,4,5,6,8,3].getOdd());