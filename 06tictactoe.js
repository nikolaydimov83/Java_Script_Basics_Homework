var a = "X";
var a0 = document.getElementById("0");
var a1 = document.getElementById("1");
var a2 = document.getElementById("2");

var a3 = document.getElementById("3");
var a4 = document.getElementById("4");
var a5 = document.getElementById("5");

var a6 = document.getElementById("6");
var a7 = document.getElementById("7");
var a8 = document.getElementById("8");

var b0 = "d";
var b1 = "d";
var b2 = "d";

var b3 = "d";
var b4 = "d";
var b5 = "d";

var b6 = "d";
var b7 = "d";
var b8 = "d";



a0.onclick = function () {
    if (b0=="d"){
    document.getElementById('0').innerHTML = a;
    b0 = a;
    if (a == "X")
    {
        a = "O";
    }
    else {
        a = "X";
    }

    if ((b0 == b1) && (b1 == b2)) {
        alert("You win");
    }
    if ((b0 == b3) && (b3 == b6)) {
        alert("You win");
    }

    if ((b0 == b4) && (b4 == b8)) {
        alert("You win");
    }
    return false;
    }
}

a1.onclick = function () {
    if (b1=="d"){
    document.getElementById('1').innerHTML = a;
    b1 = a;
    if (a == "X") {
        a = "O";
    }
    else {
        a = "X";
    }

    if ((b0 == b1) && (b1 == b2)) {
        alert("You win");
    }
    if ((b1 == b4) && (b4 == b7)) {
        alert("You win");
    }
    
    return false;
    }
}
a2.onclick = function () {
    if (b2 == "d") {
        document.getElementById('2').innerHTML = a;
        b2 = a;
        if (a == "X") {
            a = "O";
        }
        else {
            a = "X";
        }
        if ((b0 == b1) && (b1 == b2)) {
            alert("You win");
        }
        if ((b2 == b5) && (b5 == b8)) {
            alert("You win");
        }
        if ((b2 == b4) && (b4 == b6)) {
            alert("You win");
        }
        return false;
    }
}
a3.onclick = function () {
    if (b3 == "d") {
        document.getElementById('3').innerHTML = a;
        b3 = a;
        if (a == "X") {
            a = "O";
        }
        else {
            a = "X";
        }

        if ((b3 == b4) && (b4 == b5)) {
            alert("You win");
        }
        if ((b0 == b3) && (b3 == b6)) {
            alert("You win");
        }
        return false;
    }
}
a4.onclick = function () {
    if (b4 == "d") {
        document.getElementById('4').innerHTML = a;
        b4 = a;
        if (a == "X") {
            a = "O";
        }
        else {
            a = "X";
        }
        if ((b3 == b4) && (b4 == b5)) {
            alert("You win");
        }
        if ((b4 == b1) && (b4 == b7)) {
            alert("You win");
        }

        if ((b0 == b4) && (b4 == b8)) {
            alert("You win");
        }
        if ((b2 == b4) && (b4 == b6)) {
            alert("You win");
        }
        return false;
    }
}
a5.onclick = function () {
    if (b5 == "d") {
        document.getElementById('5').innerHTML = a;
        b5 = a;
        if (a == "X") {
            a = "O";
        }
        else {
            a = "X";
        }
        if ((b3 == b4) && (b4 == b5)) {
            alert("You win");
        }
        if ((b5 == b2) && (b5 == b8)) {
            alert("You win");
        }
        return false;
    }
}
a6.onclick = function () {
    if (b6 == "d") {
        document.getElementById('6').innerHTML = a;
        b6 = a;
        if (a == "X") {
            a = "O";
        }
        else {
            a = "X";
        }
        if ((b6 == b7) && (b6 == b8)) {
            alert("You win");
        }
        if ((b6 == b3) && (b6 == b0)) {
            alert("You win");
        }
        if ((b2 == b4) && (b4 == b6)) {
            alert("You win");
        }
        return false;
    }
}
 
a7.onclick = function () {
    if (b7 == "d") {
        document.getElementById('7').innerHTML = a;
        b7 = a;
        if (a == "X") {
            a = "O";
        }
        else {
            a = "X";
        }
        if ((b6 == b7) && (b6 == b8)) {
            alert("You win");
        }
        if ((b7 == b4) && (b7 == b1)) {
            alert("You win");
        }
        return false;
    }
}
a8.onclick = function () {
    if (b8 == "d") {
        document.getElementById('8').innerHTML = a;
        b8 = a;
        if (a == "X") {
            a = "O";
        }
        else {
            a = "X";
        }
        if ((b6 == b7) && (b6 == b8)) {
            alert("You win");
        }
        if ((b8 == b5) && (b8 == b2)) {
            alert("You win");
        }
        if ((b0 == b4) && (b4 == b8)) {
            alert("You win");
        }
        return false;
    }
}


