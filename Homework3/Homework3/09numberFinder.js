function mostRepeat(value) {
    var count = 1;
    var maxCount = 1;
    var mostRepat;
    var number;
    for (var i = 0; i < value.length; i++) {
        for (var j = 0; j < value.length; j++) {
            if (i === j) {
                continue;
            }
            if (value[i] === value[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            mostRepat = value[i];

        }
        count = 1;
    }
    if (mostRepat === undefined) {
        mostRepat = value[0];
    }
    return { Mostrep: mostRepat, times: maxCount };
}

console.log(mostRepeat([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]).Mostrep + " (" + mostRepeat([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]).times + " times)");
console.log(mostRepeat([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]).Mostrep + " (" + mostRepeat([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]).times + " times)");
console.log(mostRepeat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]).Mostrep + " (" + mostRepeat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]).times + " times)");