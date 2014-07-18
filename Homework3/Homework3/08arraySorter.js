function sortArray(value) {


    var sorted = [];
    var min = Math.min.apply(Math, value);
    while (value.length > 0) {
        min = Math.min.apply(Math, value);
        sorted.push(min);
        index = value.indexOf(min);
        value.splice(index, 1);
    }
    return sorted;
}

console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));