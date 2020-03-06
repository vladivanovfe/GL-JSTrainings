Object.prototype.getKeyValuePair = function (key) {
    let result = [];
    for (let i in this ) {
        result.push(this[i].key);
        return result;
    }
}
console.log({'key' : 'aadaadadad'}.getKeyValuePair());