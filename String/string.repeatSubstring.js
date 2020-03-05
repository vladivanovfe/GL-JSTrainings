String.prototype.repeatSubstring = function (substr, times) {
    let str = '';
    for (let i = 0; i < times; i++) {
        str += substr;
    }
    return str;
}
console.log(''.repeatSubstring('xaxa', 2));