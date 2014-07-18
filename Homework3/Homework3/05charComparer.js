function compareCharArrays(first, second) {

    var result = "Initial";
    var filen = first.length;
    var selen = second.length;
    var lenghtShort = Math.min(filen, selen);
    for (var i = 0; i < lenghtShort; i++) {
        if (first[i] > second[i]) {
            result = "Not equal"
            break;
        }
        else if (first[i] < second[i]) {
            result = "Not equal"
            break;
        }
        else {
            if (i === lenghtShort - 1) {
                if (filen === selen) {
                    result = "Equal";
                }
                else if (filen > selen) {
                    result = "Not equal";
                }
                else {
                    result = "Not equal";
                }
            }
        }
    }
    return result;
}
Math.min()
console.log(compareCharArrays(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']));
console.log(compareCharArrays(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']));
console.log(compareCharArrays(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']));