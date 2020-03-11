// 	.repeat(times: number): string - Writes to console your string n times // 'test'.repeat(5)

String.prototype.repeat = function(times) {
    let str = '';
    for (let i = 0; i < times; i++) {
        str += this;
    }
    return str;
}
console.log('abc'.repeat(3));