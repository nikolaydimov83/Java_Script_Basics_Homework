function checkSeqlenght(value) {
    var counter = 1;
    var counterMax = 1;
    arrayLen = value.length - 1;
    var arrayLong = [];
    var arrayInter = [];
    for (var i = 0; i < arrayLen; i++) {
        if (value[i] === value[i + 1]) {
            counter++;
            arrayInter.push(value[i]);
            if (counter >= counterMax) {
                arrayLong = arrayInter;
                counterMax = counter
            }
        }
        else {
            arrayInter = [];
            counter = 1;
            continue;
        }
    }
    if (counterMax === 1) {
        arrayLong.push( value[value.length - 1]);
    }
    else {
        var b = arrayLong[0];
        arrayLong.push(b);
    }
    return arrayLong;
}

console.log(checkSeqlenght([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(checkSeqlenght(['happy', 'well']));
console.log(checkSeqlenght([2, 'qwe', 'qwe', 3, 3, '3']));