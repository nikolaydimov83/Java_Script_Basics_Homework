function divisionBy3(value) {
    value = value.toString();
    var sum = 0;
    sum = parseInt(sum);
    for (var i = 0; i <= value.length - 1; i++) {
        value[i] = parseInt(value[i]);
        sum = sum+parseInt(value[i]);
    }
    var result = "the number is not divided by 3 without remainder";
    if (sum % 3 === 0) {
        result = "the number is divided by 3 without remainder";
    }
    return result;
}

console.log(divisionBy3(12));
console.log(divisionBy3(189));
console.log(divisionBy3(591));
