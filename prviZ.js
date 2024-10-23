const prompt = require("prompt-sync")();

var y = true;
var num1 = prompt("Unesite prvi broj: ");
var num2 = prompt("Unesite drugi broj: ");

var number1 = parseInt(num1);
var number2 = parseInt(num2);

while(y){

    if(isNaN(number1)){

        num1 = prompt("Ponovite unos prvog broja: ");  
        number1 = parseInt(num1);

    }else if(isNaN(number2)){

        num2 = prompt("Ponovite unos drugog broja: "); 
        number2 = parseInt(num2);

    }else{
        y = false;
    }
}

var result;//undefined

var i = true;

while(i){

    console.log("Izaberite operaciju: ");
    console.log("1. +");
    console.log("2. -");
    console.log("3. *");
    console.log("4. /");

    var operation = prompt();

    if(operation === "+" || operation === "1" || operation === "1."){
        result = number1 + number2;
        i = false;

    }else if(operation === "-" || operation === "2" || operation === "2."){
        result = number1 - number2;
        i = false;

    }else if(operation === "*" || operation === "3" || operation === "3."){
        result = number1 * number2;
        i = false;

    }else if(operation === "/" || operation === "4" || operation === "4."){
        try {
            if (number2 === 0) {
                throw new Error("Delilac ne sme biti 0");
            }
            result = number1 / number2;
            i = false;
        } catch (error) {
            console.error("Greška: " + error.message);
            console.log("Unesite novu(ili istu ukoliko zelite drugu operaciju) vrednost drugog broja: ");
            var num3 = prompt();
            number2 = parseInt(num3);
        }

    }else{
        console.log("Niste ispravno uneli operaciju! Pokusajte ponovo.")
    }
}

console.log("Rezultat: " +result);