function checkLenght(value) {
    
    var valueString = value.toString(); 
    return valueString.length;
}

function checkDigit(value){
    var a = checkLenght(value) - 3;
    var valString = value.toString();
    var b = valString[a];
    var final=false;
    if (b === "3") {
        final = true;
    }
    return final;
}

console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));