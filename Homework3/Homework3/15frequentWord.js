function findMostFreqWord(value) {
    var words = removeDots(value);
    var maxVal = 0;
    var maxKey = '';
    var wordFreq = {};
    var countReps=0;

    for (var i = 0; i < words.length; i++) {
        var indexWordFreq = words[i].toLowerCase();
       
        var valueWordFreq = 0;
        for (var j in wordFreq) {
            if (j === indexWordFreq) {
                wordFreq[j]++;
                countReps++;
            }
        }
        if (countReps === 0) {
            wordFreq[indexWordFreq] = 1;
        }
        
        
        for (var k in wordFreq) {
            if (wordFreq[k] >= maxVal) {
                maxVal = wordFreq[k];
                maxKey = k;
            }
        }
        countReps = 0;
    }
    var final = [];
    for (var t in wordFreq) {
        if (maxVal === wordFreq[t]) {
            final.push(t);
        }
    }
    return { 'keys': final, 'value': maxVal };
}
function removeDots(value){
var splitters = [".", ",", "!", "?", "/", "\\", "(", ")"];
var textAsArray = value;
for (var i = 0; i < splitters.length; i++) {
    textAsArray = textAsArray.split(splitters[i]);
    textAsArray = textAsArray.join('');
}
textAsArray = textAsArray.split(" ");

return textAsArray;
}
console.log(findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.').keys + '->' + findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.').value);
console.log(findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.').keys + '->' + findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.').value);
console.log(findMostFreqWord('in the middle of the night').keys + '->' + findMostFreqWord('in the middle of the night').value);
