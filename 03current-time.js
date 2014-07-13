function timerFunc() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    if (min > 9)
        {
    var time = hour +":"+ min;
    }

    else {
        var time = hour + ":" +"0"+ min;
    }
    return time;
}

console.log(timerFunc());