Array.prototype.getOdd = function () {
    let arr = this;

    arr.map(function() {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 != 0) {
                return arr[i];
            }
        }
    })
}

console.log([1,2,3,4,5,6,7,8].getOdd());
