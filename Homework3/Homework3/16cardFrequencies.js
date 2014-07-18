function findCardFrequency(value) {
    var valueArray = value.split(" ");
    var cardOccurence = [];
    var toatlNumCards = valueArray.length;
    var sequence = [];
    for (var i = 0; i < valueArray.length; i++) {
        var arrayCarNum = valueArray[i].split('');
        arrayCarNum.pop();
        arrayCarNum = arrayCarNum.join('');
        if (sequence.indexOf(arrayCarNum) === -1)
        {
            sequence.push(arrayCarNum);
        }
        if (cardOccurence[arrayCarNum] !== undefined) {
            cardOccurence[arrayCarNum] = cardOccurence[arrayCarNum] + 1;
        }
        else
        {
            cardOccurence[arrayCarNum] = 1;
        }
    }
    var arrayPerc = [];
    var percSeq = [];
    for (var j = 0; j < sequence.length;j++) {
        arrayPerc[sequence[j]] = (Math.round((cardOccurence[sequence[j]] / toatlNumCards)*10000)/100).toFixed(2)+'%';
        percSeq.push(arrayPerc[sequence[j]]);
    }
    var finalStr = '';
    for (var k = 0; k < sequence.length; k++) {
        finalStr = finalStr + sequence[k] + " -> " + percSeq[k] + "\n";
    }
    return finalStr;
}

console.log(findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦'))
console.log(findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠'))
console.log(findCardFrequency('10♣ 10♥'))