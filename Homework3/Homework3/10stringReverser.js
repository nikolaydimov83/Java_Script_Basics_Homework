function reverseString(value) {
    var a = value.split('');
    a = a.reverse();
    b = a.join('');
    return b;
}


console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));