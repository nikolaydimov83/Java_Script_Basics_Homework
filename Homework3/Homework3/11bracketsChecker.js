function checkBrackets(value) {
    valueAsArray=value.split('');
    var stack = [];
    for (var i = 0; i < value.length; i++) {
        if (valueAsArray[i] === '(') {
            stack.unshift(valueAsArray[i]);
        }
        if (valueAsArray[i]===')')
            if (stack.length === 0) {
                return "incorrect";
            }
            else {
                stack.shift();
            }
    }
    if (stack.length===0){
        return "correct"
    }
    else {
        return "incorrect"
    }
}

console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));

