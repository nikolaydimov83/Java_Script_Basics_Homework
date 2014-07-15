function calcSupply(age, maxAge, amount,food) {
    var result = (maxAge - age) *365*amount;
    var final = result + "kg of "+food+" would be enough until I am " + maxAge + " years old."
    return final;
}

console.log(calcSupply(38,118,0.5,"chocolate"));
console.log(calcSupply(20, 87, 2, "fruit"));
console.log(calcSupply(16, 102, 1.1, "nuts"));
