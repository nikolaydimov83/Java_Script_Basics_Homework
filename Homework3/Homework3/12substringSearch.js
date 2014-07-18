function countSubstringOccur(value) {
    var words = value[1].split(" ");
    var counter = 0;
    var wordAsArray;
    inter = [];
    for (var i = 0; i < words.length; i++) {
        wordAsArray = words[i].split('');
        for (var j = 0; j < wordAsArray.length - value[0].length + 1; j++) {
            for (var k = j; k < wordAsArray.length; k++) {
                inter.push(wordAsArray[k]);
                var a1 = inter.join('').toLowerCase;
                if (inter.join('').toLowerCase() === value[0].toLowerCase()) {
                    counter++;
                }
            }
            inter = [];
        }
    }
    return counter;
}

console.log(countSubstringOccur(['in', "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]));
console.log(countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']));
console.log(countSubstringOccur(['but', "But you were living in another world tryin' to get your message through."]));