function checkLenght(value) {

    var valueString = value.toString();
    return valueString.length;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function soothsayer(value) {
    
    
    var years = value[0];
    var final = "You will work "
    var langs = value[1];
    var cities = value[2];
    var cars = value[3];

    var len = years.length;
    index = getRandomInt(0, len - 1);
    final = final + years[index];

    var len = langs.length;
    index = getRandomInt(0, len - 1);
    final = final + " years on " + langs[index]+"\n";

    var len = cities.length;
    index = getRandomInt(0, len - 1);
    final = final + "You will live in " + cities[index];

    var len = cars.length;
    index = getRandomInt(0, len - 1);
    final = final + " and drive " + cars[index];
    return final;
}

console.log(soothsayer([[3, 5, 2, 7, 9], ["Java", "Python", "C#", "JavaScript", "Ruby"], ["Silicon Valley", "London", "Las Vegas", "Paris", "Sofia"], ["BMW", "Audi", "Lada", "Skoda", "Opel"]]))