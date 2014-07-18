function findPalindromes(value) {
    var splitters = [".", ",", "!", "?", "/", "\\", "(", ")"];
    var textAsArray=value;
    for (var i = 0; i < splitters.length; i++) {
        textAsArray = textAsArray.split(splitters[i]);
        textAsArray = textAsArray.join('');
    }
    textAsArray = textAsArray.split(" ");
    var final = [];
    var lowerCase='';
    for (var j=0;j<textAsArray.length;j++){
        lowerCase = textAsArray[j].toLowerCase();
        var lowerCaseArray = lowerCase.split("");
        var normalStr = lowerCaseArray.join('');
        var reversed = lowerCaseArray.reverse();
       
        var reversedStr = reversed.join('');
        if (normalStr === reversedStr) {
            final.push(lowerCase);
        }
    }
    
    return final;
}

console.log(findPalindromes('There is a man, his name was Bob.'));

