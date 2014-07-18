function findMinAndMax(value) {
    var max = Math.max.apply(Math, value);
    var min = Math.min.apply(Math, value);
    return {mmax:max,mmin:min}
}

console.log("Min ->" + findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]).mmin + "\n" + "Max ->" + findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]).mmax);
console.log("Min ->" + findMinAndMax([2, 2, 2, 2, 2]).mmin + "\n" + "Max ->" + findMinAndMax([2, 2, 2, 2, 2]).mmax);
console.log("Min ->" + findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]).mmin + "\n" + "Max ->" + findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]).mmax);