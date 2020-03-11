// .repeatSubstring(substring: string, times): string - Returns a given substring if is present with multiplication by times

String.prototype.repeatSubstring = function (substr, times) {
    let str = this;
    for (let i = 0; i < times; i++) {
        str += substr;
    }
    return str;
}
console.log('ASDF'.repeatSubstring('abc', 2));