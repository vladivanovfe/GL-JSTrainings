// 	.hasNumber(number: Array<number>): boolean - Returns true if a given array has a number from arguments

Array.prototype.hasNumber = function (num) {
    return this.indexOf(num) > -1;

}
console.log([1,2,3,4,5].hasNumber(5));