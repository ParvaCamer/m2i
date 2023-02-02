function guessMyAge() {
    let display = document.getElementById('my-age');

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
    display.innerHTML = `Tu t'appelles ${firstName} ${lastName} et tu as ${age} ans. ${child}`
}

function giveNumbers() {
    let display = document.getElementById('give-numbers');

    let firstNumber = parseInt(prompt('Donne moi un premier nombre'));
    let secondNumber = parseInt(prompt('Donne moi un deuxième nombre'));

    let addition = firstNumber + secondNumber;
    let soustraction = firstNumber - secondNumber;
    let multiplication = firstNumber * secondNumber;
    let division = firstNumber / secondNumber;

    if (secondNumber == 0) {
        division = 'Division par 0 impossible'
    }
    display.innerHTML = `Résultat addition : ${addition}.<br> Résultat soustraction : ${soustraction}.<br> Résultat multiplication : ${multiplication}.<br> Résultat division : ${division}.`
}

function pickNumber() {
    let display = document.getElementById('pick-number');

    let number = parseInt(prompt('Choisis un nombre entre 0 et 100'));

    if (number > 0 && number < 51) {
        display.innerHTML = "Nombre compris entre 0 et 50"
    } else if (number > 50 && number < 76) {
        display.innerHTML = "Nombre compris entre 51 et 75"
    } else {
        display.innerHTML = "Nombre supérieur à 75 ou inférieur à 0"
    }
}

function pickAnotherNumber() {
    let display = document.getElementById('pick-another-number');

    let number = parseInt(prompt('Choisis un nombre entre 0 et 10'));

    while (number < 0 || number > 10) {
        number = parseInt(prompt('Choisis un nombre entre 0 et 10'));
    }

    display.innerHTML = `Le nombre saisi est ${number}`
}

function numberLower100() {
    let display = document.getElementById('pick-lower');
    display.innerHTML = "";

    let number = parseInt(prompt('Choisis un nombre inférieur à 100'));;

    while (number > 100) {
        number = parseInt(prompt('Le nombre doit être inférieur à 100'));
    }

    while (number < 101) {
        display.innerHTML += `* ${number} `
        number++
    }
}

function averageCalculation() {
    let display = document.getElementById('average-calculation');

    let number = parseInt(prompt('Choisis le nombre de notes à ajouter'));

    let array = [];
    let result = 0;
    while (number != 0) {
        let note = parseInt(prompt('Ecris la note'));
        if (note === -1) {
            break;
        }
        array.push(note);
        number--;
    }

    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    result /= array.length;
    display.innerHTML = `La moyenne est : ${result}`;
}

function averageSubject() {
    let numberOfStudent = parseInt(prompt("Combien d'élèves êtes-vous ?"));

    let resultMaths = 0, resultFrançais = 0, resultAnglais = 0, resultPhysique = 0, resultChimie = 0;

    let student = {
        name: "",
        subject: [
            ['Maths', resultMaths],
            ['Français', resultFrançais],
            ['Anglais', resultAnglais],
            ['Physique', resultPhysique],
            ['Chimie', resultChimie]
        ],
        result: 0
    };

    for (let k = 0; k < numberOfStudent; k++) {
        student.result = 0;
        student.name = prompt('Quel est ton nom ?');
        for (let i = 0; i < student.subject.length; i++) {
            let note = parseInt(prompt(`Écris ta note en ${student.subject[i][0]}`));
            if (note === -1) {
                break;
            }
            student.subject[i][1] += note;
            console.log(student.subject[i][0], ' : ', student.subject[i][1])
            student.result += note;
            document.getElementById('average-subjects').innerHTML = "";
        }
        student.result /= student.subject.length;
        document.getElementById('average-student').innerHTML = `${student.name}, ta moyenne est de : ${student.result}<br>`;
    }
    for (let j = 0; j < student.subject.length; j++) {
        student.subject[j][1] /= numberOfStudent;
        document.getElementById('average-subjects').innerHTML = `La moyenne en ${student.subject[j][0]} est de : ${student.subject[j][1]}<br>`;
    }
}

function sorting() {
    let ascending = document.getElementById('ascending-order');
    let descending = document.getElementById('descending-order');
    let sortingCount = document.getElementById('sorting-count');

    let numbers = [];
    let input;
    let count = 0;

    while (input !== "q") {
        input = prompt("Entre un nombre ou écris 'q' pour quitter");
        if (input === "q") {
            break;
        }
        numbers.push(Number(input));
    }

    for (let i = 0; i < numbers.length; i++) {
        count++;
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let value = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = value
            }
        }
    }

    ascending.innerHTML = `Nombres triés dans l'ordre croissant : ${numbers}`;
    descending.innerHTML = `Nombres triés dans l'ordre décroissant : ${numbers.reverse()}`;
    sortingCount.innerHTML = `Nombres de tours effectués pour le tri : ${count}`;
}

function objectClass() {
    let display = document.getElementById('object-class');
    display.innerHTML = "";
    let animals = [
        {
            name: 'chien',
            paws: 4,
            noise: 'aboie'
        },
        {
            name: 'chat',
            paws: 4,
            noise: 'miaule'
        },
        {
            name: 'cheval',
            paws: 4,
            noise: 'hennit'
        },
        {
            name: 'goéland',
            paws: 2,
            noise: 'raille'
        }
    ];

    let random = Math.floor(Math.random() * animals.length)
    console.log(animals[random])
    display.innerHTML += `Exemple de class : Le ${animals[random].name} a ${animals[random].paws} pattes et il ${animals[random].noise}. Affiche la console pour voir l'objet en détails.`
}

// Exercices bonus //
let toNumber = 15;
function multiplication() {
    for (let i = 1; i <= toNumber; i++) {
        document.getElementById('multiplication').innerHTML += `Table de ${i} :<br>`
        for (let j = 1; j <= 10; j++) {
            document.getElementById('multiplication').innerHTML += `${i} x ${j} = ${i * j}<br>`
        }
    }
}

function countVowels() {
    let writeVowels = prompt('Écris une phrase');
    let arrayVowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;
    for (let i = 0; i < writeVowels.length; i++) {
        for (let j = 0; j < arrayVowels.length; j++) {
            if (writeVowels[i] == arrayVowels[j]) {
                count++
            }
        }
    }
    document.getElementById('count-vowels').innerHTML = `Il y a ${count} voyelles dans la phrase.`
}

function formula() {
    let a = parseInt(prompt('Saisir un premier nombre'));
    let b = parseInt(prompt('Saisir un deuxième nombre'));
    let c = parseInt(prompt('Saisir un troisième nombre'));
    let display = document.getElementById('formula');
    if (a === 0) {
        if (b === 0) {
            display.innerHTML = 'Pas de solution.'
        } else {
            display.innerHTML = `La solution est : ${-c / b}`
        }
    } else {
        let discriminant = b * b - 4 * a * c;
        if (discriminant < 0) {
            display.innerHTML = 'Pas de solution.'
        } else if (discriminant === 0) {
            display.innerHTML = `La solution est : ${-b / (2 * a)}`
        } else {
            let x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
            let x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
            display.innerHTML = `Les solutions sont ${x1} et ${x2}`
        }
    }
}
// Levelup //
function transform(value) {
    let number = parseInt(prompt(`Écris une valeur pour la transformer en ${value}`))

    if (value === 'hexadécimale') {
        let hex = number.toString(16);
        document.getElementById('hex-dec').innerHTML = `La valeur ${number} équivaut à ${hex}`;
    } else if (value === 'décimale') {
        let dec = parseInt(number, 16);
        document.getElementById('hex-dec').innerHTML = `La valeur ${number} équivaut à ${dec}`
    } else {
        let bin = number.toString(2);
        document.getElementById('hex-dec').innerHTML = `La valeur ${number} équivaut à ${bin}`
    }
}

function taxes() {
    let age = parseInt(prompt('Quel est ton âge ?'))
    let sexe = prompt('Es-tu un homme ou une femme ?')
    if ((age > 20 && sexe === "homme") || ((age > 17 && age < 36) && sexe === "femme")) {
        document.getElementById('taxes').innerHTML = 'Tu es imposable.'
    } else {
        document.getElementById('taxes').innerHTML = "Tu n'es pas imposable."
    }
}

function cart() {
    let maxPrice = 0;
    let minPrice = Number.MAX_SAFE_INTEGER;
    let totalItems = 0;
    let totalPrices = 0;
    while (true) {
        let quantity = parseInt(prompt("Saisissez la quantité commandée:"));
        if (quantity < 0) {
            break;
        }
        let unitPrice = parseFloat(prompt("Saisissez le prix unitaire:"));
        if (unitPrice < 0) {
            break;
        }
        let itemPrice = quantity * unitPrice;
        totalItems += quantity;
        totalPrices += (itemPrice / totalItems).toFixed(2);
        if (unitPrice > maxPrice) {
            maxPrice = unitPrice;
        }
        if (unitPrice < minPrice) {
            minPrice = unitPrice;
        }
    }
    document.getElementById('total-items-cart').innerHTML = `Nombre d'articles : ${totalItems}`;
    document.getElementById('average-price-cart').innerHTML = `Prix moyen des articles : ${totalPrices} €`;
    document.getElementById('most-expensive-cart').innerHTML = `Article le plus cher : ${maxPrice} €`
    document.getElementById('less-expensive-cart').innerHTML = `Article le moins cher : ${minPrice} €`
}

function print() {
    let number = parseInt(prompt('Combien de photocopies voulez-vous ?'))
    let price = 0;

    while (number != 0) {
        if (number <= 10) {
            price += 0.10
        } else if (number > 10 && number <= 20) {
            price += 0.09
        } else {
            price += 0.08
        }
        number--
    }
    document.getElementById('print').innerHTML = price.toFixed(2) + ' €';
}

function numberToThe() {
    let a = parseInt(prompt('Entre une valeur'));
    let b = parseInt(prompt('Saisir une puissance'));
    let result = 1;

    while (a < 0) {
        a = parseInt(prompt('La valeur doit être positive'))
    }
    while (b <= 0) {
        b = parseInt(prompt('La puissance doit être positive'))
    }
    while (b > 0) {
        result *= a;
        b--
    }
    document.getElementById('number-to-the').innerHTML = result;
}

let average = 0;
let total = 0;
let count = 1;
function temperature() {
    let temp = parseInt(prompt('Quelle est la température prélevée ?'));
    total += temp;
    average = (total / count);
    count++;
    let difference = 37 - temp;
    document.getElementById('average-temperature').innerHTML = `La température moyenne du patient est de ${average}°C`;
    document.getElementById('difference-temperature').innerHTML = `L'écart par rapport à la température corporelle est de ${difference}°C`;
}

function transformTemp(value) {
    let number = parseInt(prompt(`Écris une valeur pour la transformer en ${value}`))

    if (value === 'celcius') {
        let celcius = (number - 32) / 1.8;
        document.getElementById('cel-fahr').innerHTML = `${number}°F équivaut à ${celcius}°C`;
    } else {
        let fahr = (number * 1.8) + 32;
        document.getElementById('cel-fahr').innerHTML = `${number}°C équivaut à ${fahr}°F`
    }
}

function countConsonants() {
    let writeVowels = prompt('Écris une phrase');
    let consonants = 'zrtpqsdfghjklmwxcvbn';
    let count = 0;
    for (let i = 0; i < writeVowels.length; i++) {
        for (let j = 0; j < consonants.length; j++) {
            if (writeVowels[i] == consonants[j]) {
                count++
            }
        }
    }
    document.getElementById('count-consonants').innerHTML = `Il y a ${count} consonnes dans la phrase.`
}

function swapNumbers() {
    let a = parseInt(prompt('Entre un premier nombre'));
    let b = parseInt(prompt('Entre un deuxième nombre'));
    let c = 0;

    c = a
    a = b
    b = c
    document.getElementById('swap-numbers').innerHTML = `Le premier nombre est donc ${a} et le deuxième est ${b}`;
}

function palindrome() {
    let word = prompt('Écris premier un mot');
    word = word.toLowerCase().replace(/[\W_]/g, '')
    let palin = word.split('').reverse().join('')
    if (word === palin) {
        document.getElementById('palindrome').innerHTML = 'Le mot est un palindrome'
    } else {
        document.getElementById('palindrome').innerHTML = 'Le mot n\'est pas un palindrome'
    }
}

function highestNumber() {
    let howMuch = parseInt(prompt('Combien de nombres veux-tu entrer ?'))
    let array = [];

    while (howMuch != 0) {
        let number = parseInt(prompt('Entre un nombre'));
        array.push(number);
        howMuch--
    }
    let highest = 0;
    for (let i = 0; i < array.length; i++) {
        if (highest < array[i]) {
            highest = array[i];
        }
    }
    document.getElementById('highest-number').innerHTML = `Le nombre le plus grand est ${highest}`
}

function lowestNumber() {
    let howMuch = parseInt(prompt('Combien de nombres veux-tu entrer ?'))
    let array = [];

    while (howMuch != 0) {
        let number = parseInt(prompt('Entre un nombre'));
        array.push(number);
        howMuch--
    }
    document.getElementById('lowest-number').innerHTML = `Le nombre le plus petit est ${Math.min(...array)}`
}

function longestWord() {
    let sentence = prompt('Écrire une phrase');
    let array = sentence.split(' ')
    let highest = 0;
    let longest = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > highest) {
            highest = array[i].length;
            longest = array[i];
        }
    }
    document.getElementById('longest-word').innerHTML = `Le mot le plus long de la phrase est ${longest}`
}

function shortestWord() {
    let sentence = prompt('Écrire une phrase');
    let array = sentence.split(' ')
    let lowest = array[0].length;
    for (let i = 0; i < array.length; i++) {
        if (lowest > array[i].length) {
            lowest = array[i].length;
        }
    }
    document.getElementById('shortest-word').innerHTML = `La taille du mot le plus petit de la phrase est ${lowest}`
}

function longestNumberWord() {
    let sentence = prompt('Écrire une phrase');
    let array = sentence.split(' ')
    let highest = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > highest) {
            highest = array[i].length;
        }
    }
    document.getElementById('longest-number-word').innerHTML = `La taille du mot le plus long de la phrase est ${highest}`
}

function highestNumberArray() {
    let result = [];
    while (42) {    
        let numbers = prompt('Entre un ou des nombres. "s" pour stop')
        if (numbers === 's') {
            break;
        }
        numbers = numbers.split(' ');
        let check = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (+numbers[i] > check) {
                check = +numbers[i]
            }
        }
        result.push(check);
        
    }
    document.getElementById('highest-number-array').innerHTML = `Les nombres les plus grand sont : ${result}`
}
