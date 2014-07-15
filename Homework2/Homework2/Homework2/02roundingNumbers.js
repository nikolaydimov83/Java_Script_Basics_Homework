function roundNumber(value) {
    return {round:Math.round(value), floor:Math.floor(value)};
}

console.log(roundNumber(22.7).round + " " + roundNumber(22.7).floor);

console.log(roundNumber(12.3).round + " " + roundNumber(12.3).floor);

console.log(roundNumber(58.7).round + " " + roundNumber(58.7).floor);
