let step = 0;  // Korak unosa
let number1, number2, result;
const consoleDiv = document.getElementById('console');
const userInput = document.getElementById('userInput');

// Dodajemo događaj koji se aktivira kada korisnik pritisne Enter
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleInput(userInput.value);
        userInput.value = '';  // Reset polja za unos nakon pritiska na Enter
    }
});

function handleInput(input) {
    input = input.trim();  // Ukloni nepotrebne razmake

    if (step === 0) {
        // Prvi unos (prvi broj)
        if (isNaN(parseInt(input))) {
            consoleDiv.innerHTML += "\nGreška: Unesite ispravan broj!";
        } else {
            number1 = parseInt(input);
            consoleDiv.innerHTML += `\nUneli ste prvi broj: ${number1}`;
            consoleDiv.innerHTML += `\nUnesite drugi broj: `;
            step = 1; // Pređi na sledeći korak
        }
    } else if (step === 1) {
        // Drugi unos (drugi broj)
        if (isNaN(parseInt(input))) {
            consoleDiv.innerHTML += "\nGreška: Unesite ispravan broj!";
        } else {
            number2 = parseInt(input);
            consoleDiv.innerHTML += `\nUneli ste drugi broj: ${number2}`;
            consoleDiv.innerHTML += `\nIzaberite operaciju (1: +, 2: -, 3: *, 4: /): `;
            step = 2; // Pređi na unos operacije
        }
    } else if (step === 2) {
        // Unos operacije
        let operation = input;
        if (operation === "+" || operation === "1") {
            result = number1 + number2;
            step = 3; // Prikaz rezultata
        } else if (operation === "-" || operation === "2") {
            result = number1 - number2;
            step = 3; // Prikaz rezultata
        } else if (operation === "*" || operation === "3") {
            result = number1 * number2;
            step = 3; // Prikaz rezultata
        } else if (operation === "/" || operation === "4") {
            if (number2 === 0) {
                consoleDiv.innerHTML += "\nGreška: Delilac ne sme biti 0!";
                consoleDiv.innerHTML += "\nUnesite novu vrednost drugog broja: ";
                step = 1; // Ponovo traži drugi broj
                return;
            } else {
                result = number1 / number2;
                step = 3; // Prikaz rezultata
            }
        } else {
            consoleDiv.innerHTML += "\nGreška: Nepoznata operacija!";
            consoleDiv.innerHTML += `\nIzaberite ispravnu operaciju (1: +, 2: -, 3: *, 4: /): `;
            return;
        }
    }

    if (step === 3) {
        // Prikaz rezultata
        consoleDiv.innerHTML += `\nRezultat: ${result}`;
        consoleDiv.innerHTML += `\nUnesite prvi broj za novu operaciju: `;
        step = 0; // Resetujemo na prvi korak za novu operaciju
    }

    // Automatski skrol do dna konzole
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}
