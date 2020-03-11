// .replaceAt(substring: string, replacer: string): string - replaces a given substring by replacer if substring is present

String.prototype.replaceAt = function (substr, replacer) {
    let result = this.split(substr).join(replacer);
    return result;
}
console.log('hello world'.replaceAt('hello', 'hi'));