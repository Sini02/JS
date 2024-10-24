const prompt = require("prompt-sync")();

class brojevi{

    constructor(){
        this.number1 = null;
        this.number2 = null;
    }

    static unosBroja(poruka){
        let broj = parseFloat(prompt(poruka));

        while(isNaN(broj)) {
            broj = parseFloat(prompt("Unos je neispravan. Ponovite: "));
        }

        return broj;       
    }

    unosBrojeva(){
        this.number1 = brojevi.unosBroja("Unesite prvi broj: ");
        this.number2 = brojevi.unosBroja("Unesite drugi broj: ");
    }
}

class operacije{

    static saberi(broj1, broj2){
        return broj1 + broj2;
    }

    static oduzmi(broj1, broj2){
        return broj1 - broj2;
    }

    static pomnozi(broj1, broj2){
        return broj1 * broj2;
    }

    static podeli(broj1, broj2){
        if(broj2 === 0){
            throw new Error("Delilac ne sme biti 0.");
        }
        return broj1 / broj2;
    }

    static izaberiOperaciju(broj1, broj2){
        let operacija;
        let rezultat;
        let flag = true;

        while(flag){
            console.log("Izaberite operaciju: ");
            console.log("1. +");
            console.log("2. -");
            console.log("3. *");
            console.log("4. /");

            operacija = prompt();

            switch(operacija){
                case "+":
                case "1":
                    rezultat = operacije.saberi(broj1, broj2);
                    flag = false;
                    break;
                case "-":
                case "2":
                    rezultat = operacije.oduzmi(broj1, broj2);
                    flag = false;
                    break;
                case "*":
                case "3":
                    rezultat = operacije.pomnozi(broj1, broj2);
                    flag = false;
                    break;
                case "/":
                case "4":
                    try{
                        rezultat = operacije.podeli(broj1, broj2);
                        flag = false;
                    }catch (error){
                        console.error("Greska: " +error.message);
                        broj2 = brojevi.unosBroja("Unesite novu(ili istu ukoliko zelite drugu operaciju) vrednost drugog broja: ");
                    }
                    break;
                default:
                    console.log("Niste pravilno uneli operaciju, pokusajte ponovo.");    
            }
        }
        return rezultat;
    }
}

function main(){
    let numbers = new brojevi();
    numbers.unosBrojeva();

    let rezultat = operacije.izaberiOperaciju(numbers.number1, numbers.number2);

    console.log("Reziltat: " +rezultat);

    let check = true;

    while(check){
        let odgovor = prompt("Da li zelite da ugasite program? (da/ne)");
        if(odgovor.toLowerCase() === "da"){
            check = false;
            console.log("Program ugasen.");
        }else main();
    }
}

main();