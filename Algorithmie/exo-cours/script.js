function guessMyAge() {
    let display = document.getElementById('my-age');
    display.innerHTML = "";

    let firstName = prompt('Ton prénom :');
    let lastName = prompt('Ton nom :');
    let age = parseInt(prompt('Ton âge :'));

    let child;
    if (age > 18) {
        child = "Tu es majeur."
    } else if (age == 18) {
        child = "Tu es majeur et tu as exactement 18 ans."
    } else {
        child = "Tu es mineur."
    }
    display.innerHTML += `Tu t'appelles ${firstName} ${lastName} et tu as ${age} ans. ${child}`
}

function giveNumbers() {
    let display = document.getElementById('give-numbers');
    display.innerHTML = "";

    let firstNumber = parseInt(prompt('Donne moi un premier nombre'));
    let secondNumber = parseInt(prompt('Donne moi un deuxième nombre'));

    let addition = firstNumber + secondNumber;
    let soustraction = firstNumber - secondNumber;
    let multiplication = firstNumber * secondNumber;
    let division = firstNumber / secondNumber;

    if (secondNumber == 0) {
        division = 'Division par 0 impossible'
    }
    display.innerHTML += `Résultat addition : ${addition}.<br> Résultat soustraction : ${soustraction}.<br> Résultat multiplication : ${multiplication}.<br> Résultat division : ${division}.`
}

function pickNumber() {
    let display = document.getElementById('pick-number');
    display.innerHTML = "";

    let number = parseInt(prompt('Choisis un nombre entre 0 et 100'));
    
    if (number > 0 && number < 51) {
        display.innerHTML += "Nombre compris entre 0 et 50"
    } else if (number > 50 && number < 76) {
        display.innerHTML += "Nombre compris entre 51 et 75"
    } else {
        display.innerHTML += "Nombre supérieur à 75 ou inférieur à 0"
    }
}

function pickAnotherNumber() {
    let display = document.getElementById('pick-another-number');
    display.innerHTML = "";

    let number = parseInt(prompt('Choisis un nombre entre 0 et 10'));

    while (number < 0 || number > 10) {
        number = parseInt(prompt('Choisis un nombre entre 0 et 10'));
    }

    display.innerHTML += `Le nombre saisi est ${number}`
}

function numberLower100() {
    let display = document.getElementById('pick-lower');
    display.innerHTML = "";

    let number = parseInt(prompt('Choisis un nombre inférieur à 100'));

    while (number > 100) {
        number = parseInt(prompt('Choisis un nombre inférieur à 100'));
    }

    while (number < 101) {
        display.innerHTML += `- ${number} `
        number++
    }
}

function averageCalculation() {
    let display = document.getElementById('average-calculation');
    display.innerHTML = "";

    let number = parseInt(prompt('Choisis le nombre de notes à ajouter'));
    let array = [];
    while (number != 0) {
        let note = prompt('Ecris la note');
        if (note == -1) {
            return
        }
        array.push(note);
        number--
        console.log(number, array)
        let result = 0;
        for (let i = 0; i < array.length; i++) {
            let parse = parseInt(array[i]);
            result += parse / array.length;
            console.log(result)
        }
        display.innerHTML += `${result}`
    }


}