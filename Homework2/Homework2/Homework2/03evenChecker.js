function evenNumber(value) {
    var even=false;
    if (value % 2 === 0) {
        even = true;
    }
    return even;
}

console.log(evenNumber(3));
console.log(evenNumber(127));
console.log(evenNumber(588));