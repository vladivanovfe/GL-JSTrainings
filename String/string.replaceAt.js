function replaceAt(substr, replacer) {
    let str = 'hello world';
    return str.split(substr).join(replacer);
}
console.log(replaceAt('hello', 'hi'));