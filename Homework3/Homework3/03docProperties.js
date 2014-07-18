
/*in order to test open 03docProperties.HTML*/
function displayProperties(value) {
    var arr=[];
    for (var i in value){
        arr.push(value[i]);
    }
    console.log(arr);
}
console.log(displayProperties(document));
 