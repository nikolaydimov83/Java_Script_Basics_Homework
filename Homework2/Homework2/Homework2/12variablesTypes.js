function variablesTypes(value) {

    value[0] = value[0].toString();
    value[1] = parseInt(value[1]);
    var str = typeof value[0];
    var num = typeof value[1];
    var bool = typeof value[2];
    var obj = typeof value[3];
    var a =value[3];
    var foods=a[0]+", ";
    for (var i=1;i<=a.length-1;i++)
    {
        if (i===a.length-1){
            foods=foods+a[i];
        }
        else{
            foods=foods+a[i]+", ";
        }
    }
    var str = "My name: " + value[0] + " //type is " + str +"\n"+
    "My age: " + value[1] + " //type is " + num + "\n" +
    "I am male : " + value[2] + " //type is " + bool + "\n" +
    "My favorite foods are: " + foods + " //type is " + obj;

    return str;
}

console.log(variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]));