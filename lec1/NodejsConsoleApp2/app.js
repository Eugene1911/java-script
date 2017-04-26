
function to_dec(str) {
    if (!(typeof (str) == 'string') || (str === "") ) {
        return undefined;
    }
    var result = 0;
    var p = 0;
    if (str.length == 1)
        return parseInt(str[0]);
    var sign = parseInt(str[0]);
    str = str.substring(1);
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === '1' || str[i] === '0') {
            result += parseInt(str[i]) * Math.pow(2, p++)
        }
        else return undefined;
    }
    if (sign)
        result *= -1;
    return result
}

console.log(to_dec("1010101"));
console.log(to_dec("0010101"));
console.log(to_dec("1"));
console.log(to_dec("0"));


