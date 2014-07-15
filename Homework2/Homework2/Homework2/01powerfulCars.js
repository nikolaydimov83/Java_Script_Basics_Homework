function convertKWtoHP(value) {
    var hp = value * 1.34102208884381;
    hp = Math.round(hp * 100) / 100;
    return hp;
}

console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));