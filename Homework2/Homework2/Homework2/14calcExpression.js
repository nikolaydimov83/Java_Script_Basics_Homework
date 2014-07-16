function getExp(){

    var element = document.getElementById("in").value;

    try {
        document.getElementById('out').innerHTML = eval(element);;
    }
    catch (err) {
        document.getElementById("out").innerHTML = "Incorrect input";
    }




}


