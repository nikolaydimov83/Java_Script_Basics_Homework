function bitChecker(value) {
    value = parseInt(value);
    valueBin = value.toString(2);
    result = false;
    if (valueBin[valueBin.length - 4] === "1") {
        result=true
    }
    return result;
}

console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));
