function logFive(seq) {
    for (let i = 0; i < 5; i++) {
        if (!(seq.next())) {
            break;
        } else {
            console.log(seq.current());
        }
    }
}

// ArraySeq start

function ArraySeq(array) {
    this.start = -1;
    this.array = array;
}
  
ArraySeq.prototype.next = function () {
    if (this.start >= this.array.length - 1) {
        return false;
    } else {
        this.start++;
    }
    return true;
};

ArraySeq.prototype.current = function () {
    return this.array[this.start];
};

// RanfeSeq start

function RangeSeq(from, to) {
    this.start = from - 1;
    this.range = to;
}

RangeSeq.prototype.next = function () {
    if (this.start >= this.range - 1) {
        return false;
    } else {
        this.start++;
    }
    return true;
};

RangeSeq.prototype.current = function() {
    return this.start;
};

// test

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104