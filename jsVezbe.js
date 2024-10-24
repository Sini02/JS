//const prompt = require("prompt-sync")();

currentDayTime();
//currentWindow();
currentDate();
triangleArea(5, 6, 7);
rotateString();
leapYear(2000);
findSunday(2014, 2050)

/*var userInput = prompt("Unesite random broj u opsegu 1-10: ");
let input = parseInt(userInput);

randomGame(input);*/

christmas();
//10. zadatak je uradjen pod drugiZ.html
celsToFaren();
farenToCels();
getURL();
//userDefName();
//extension();
//diff13();
//sum16();            // Heres a link to all of exercises to help you orient in code(some of functions has a number of task init)
//diff19();                     //https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
//console.log(sum18());
//check19();
//console.log(check20());
//console.log(string21());
//console.log(string22());
console.log(string23());


function string23(){
    let string = prompt("Unesite string: ");
    if(string.length < 1) return 0;

    let lastChar = string.charAt(0);
    let firstChar = string.charAt(string.length - 1);

    let newString = lastChar + string.slice(1, string.length - 1) + firstChar;
    console.log(newString);
    return newString;
}

function string22(){
    let string = prompt("Unesite string: ");
    let position = parseInt(prompt("Unesite poziciju brisanja: ")) - 1;

    return string.slice(0, position) + string.slice(position + 1);
}

function string21(){
    let string = prompt("Unesite string: ");

    if(string.substring(0, 2) == "Py"){
        return string;
    }else return "Py" + string;
}

function currentDayTime(){
    let currentTime = new Date();
    console.log("Current time is: " +currentTime.toLocaleTimeString());
    let niz = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    console.log("Current day is: " +niz[currentTime.getDay() - 1]);
}

function currentWindow(){
    window.print();
}

function currentDate(){
    let currentDate = new Date();
    console.log(currentDate.getDate() +"/"+ (currentDate.getMonth()+1) +"/"+ currentDate.getFullYear());
}

function triangleArea(a, b, c){
    let poluObim = (a+b+c)/2;
    console.log("Povrsina trougla: " +Math.sqrt(poluObim * (poluObim - a) * (poluObim - b) * (poluObim - c)).toFixed(2));
}

function rotateString(){
    console.log("w3resource".split('').reverse().join(''));
}

function leapYear(year){
    if(year % 4 == 0 && year % 100 == 0){
        if(year % 400 == 0){
            console.log(year+ " Godina je prestupna."); 
        }else console.log(year+ " Godina nije prestupna.");
    }else if(year % 4 == 0){
        console.log(year+ " Godina je prestupna.");
    }else{
        console.log(year+ " Godina nije prestupna.");
    }

}

function findSunday(yearFrom, yearTo){
    let flag = true;
    for(var year = yearFrom; year < yearTo; year++){
        let date = new Date(year, 0, 0);
        let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        if(daysOfWeek[date.getDay()] == "Sunday"){
            console.log("1. januar ce biti nedelja " +year+". godine.");
            flag = false;
        }
    }
    if(flag){
        console.log("Izmedju " +yearFrom+ ". i " +yearTo+ ". godine nijedan 1. januar nece biti nedelja.");
    }
}

function randomNum(){
    return Math.floor(Math.random() * (10 - 0 + 1)) + 0;
}

function randomGame(num){
    if(randomNum == num){
        console.log("Good Work");
    }else console.log("Not matched");

    console.log(randomNum());
}

function christmas(){
    let currDate = new Date();
    let chr = null;

    if(currDate.getMonth() == 0 && currDate.getDate() < 7){
        chr = new Date(currDate.getFullYear(), 0, 7);
    }else chr = new Date(currDate.getFullYear() + 1, 0, 7);

    let daysTill = ((30 - currDate.getDate()) + ((12 - (currDate.getMonth() + 1)) * 30)) + 6; //Svaki mesec "ima" 30 dana

    console.log("Preostalo je: " +Math.abs(daysTill)+" dana do bozica.");
}

function celsToFaren(){
    console.log("60 celzijusa iznosi: "+((9/5*60)+32).toFixed(2)+" farenhajta.");
}

function farenToCels(){
    console.log("45 farenhajta iznosi: "+(5/9*(45-32)).toFixed(2)+" celzijusa.");
}

function getURL(){
    console.log(window.location.href);
}

function userDefName(){
    let naziv = prompt("Unesite naziv promenljive");
    let promenljiva = {};
    promenljiva[naziv] = 42;
    console.log("Vrednost " +naziv+ " promenjljive je: " +promenljiva[naziv]);
}

function extension(){
    let string = prompt("Unesite naziv fajla sa ekstenzijom: ");
    let lokacija = null;

    for(let i = 0; i < string.length; i++){
        if(string[i] == "."){
            lokacija = i;
        }
    }

    let ekstenzija = "";
    
    for(let i = lokacija; i < string.length; i++){
        ekstenzija = ekstenzija + string[i];
    }

    console.log("Ekstenzija unetog imena fajla je: " +ekstenzija);

}

function diff13() {
    let number = prompt("Unesite broj: ");
     if(number > 13){
        console.log((number-13) * 2);
     }else if(number < 13) {
        console.log(13 - number);
     }else if(number == 13){
        console.log("Izmedju brojeva nema razlike.");
     }else console.log("Niste uneli ispravan broj!");
}

function sum16(){
    let number1 = parseInt(prompt("Unesite 2 broja: "));
    let number2 = parseInt(prompt());

    if(!isNaN(number1) && !isNaN(number2)){
        if(number1 === number2){
            console.log((number1+number2) * 3);
        }else console.log(number1+number2);
    }else console.log("Niste uneli dva broja.");

}

function diff19() {
    let number = prompt("Unesite broj: ");
     if(number > 19){
        console.log((number-19) * 3);
     }else if(number < 19) {
        console.log(19 - number);
     }else if(number == 19){
        console.log("Izmedju brojeva nema razlike.");
     }else console.log("Niste uneli ispravan broj!");
}

function sum18(){
    let number1 = parseInt(prompt("Unesite 2 broja: "));
    let number2 = parseInt(prompt());
    let sum = number1 + number2;

    if(number1 == 50 || number2 == 50 || sum == 50){
        return true;
    }else return false;
}

function check19(){
    let number = parseInt(prompt("Unesite broj: "));
    if(isNaN(number)){
        console.log("Niste uneli broj.");
        return 0;
    } 

    if((number > 20 && number < 100) || number == 400){
        console.log("Broj se nalazi u opsegu.");
    }else console.log("Broj se ne nalazi u opsegu.");
}

function check20(){
    let number1 = parseInt(prompt("Unesite 2 broja: "));
    let number2 = parseInt(prompt());

    if((number1 < 0 && number2 > 0) || (number1 > 0 && number2 < 0)){
        return true;
    }else return false;
}

