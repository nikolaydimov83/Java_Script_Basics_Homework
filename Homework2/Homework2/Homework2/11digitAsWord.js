function convertDigitToWord(num) {
    var num = parseInt(num);
    var numStr;
    switch (num) {
        case 0:
            numStr="Zero";
            break;
        case 1:
            numStr = "One";
            break;
        case 2:
            numStr = "Two";
            break;
        case 3:
            numStr = "Three";
            break;
        case 4:
            numStr = "Four";
            break;
        case 5:
            numStr = "Five";
            break;
        case 6:
            numStr = "Six";
            break;
        case 7:
            numStr = "Seven";
            break;
        case 8:
            numStr = "Eight";
            break;
        case 9:
            numStr = "Nine";
            break;
        default:
            numStr="This is not adigit";
            break;
    }
    return numStr;
}

console.log(convertDigitToWord(8));
console.log(convertDigitToWord(3));
console.log(convertDigitToWord(5));