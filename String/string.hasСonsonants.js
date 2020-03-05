String.prototype.hasConsonants = function () {
    let vowels = ['a', 'e', 'u', 'i', 'o'];
    let str = this;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() !== vowels[i]) {
            return true;
        } else {
            return false;
        }
    }    
}
console.log('ABC'.hasConsonants());