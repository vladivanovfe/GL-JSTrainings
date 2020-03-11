// .repeatSubstring(substring: string, times): string - Returns a given substring if is present with multiplication by times

String.prototype.repeatSubstring = function (substr, times) {
    let str = this;
    if (str.indexOf(substr) > -1) {
        let result = '';
        for (let i = 0; i < times; i++) {
            result += substr ;
        }

        return result;
    }
}
console.log('Hello world'.repeatSubstring('wor', 5));