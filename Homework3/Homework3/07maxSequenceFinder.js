function longIncrease(value) {
    var longest = [];
    var inter = [];
    for (var i = 0; i <= value.length - 1; i++) {
        if (value[i] < value[i + 1]) {
            inter.push(value[i]);
        }
        else {
            inter.push(value[i]);
            if (inter.length > longest.length) {
                longest = inter;

            }
            inter = [];
        }
    }
    if (longest.length>1){
        return longest;
    }
    else {
        return 'no';
    }
}
console.log(longIncrease([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(longIncrease([3, 2, 3, 4, 2, 2, 4]));

console.log(longIncrease([3, 2, 1]));