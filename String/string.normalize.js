// .normalize(string: string): string - Returns a given substring in a lower case

String.prototype.normalize = function (substr) {
    let result = '';
    let sub = String(substr).toLowerCase();
    for (let i = 0; i < this.length; i++) {
        if (this.indexOf(substr) > -1) {
            result = this.substring(0, substr.length);
        } else {
            return new Error('No Coincidences!');
        }
    }
    return this.replace(result, sub);
}
console.log('HELLO WORLD'.normalize('HELLO'));
