let overdraftValue = document.getElementById('overdraft');
let soldValue = document.getElementById('sold');
let withdrawValue = document.getElementById('withdraw');
let hasWithdraw = 0;

function openAccount() {
    document.getElementById('p-notifications').innerHTML += 'Bienvenue chez nous !<br>'
    let overdraft = parseInt(prompt("Saisissez le montant du découvert entre 100 et 2000€"));
    while (overdraft < 100 || overdraft > 2000) {
        overdraft = parseInt(prompt("Le montant du découvert doit être compris entre 100 et 2000 €, veuillez entrer une valeur valide."));
    }

    let initialAmount = parseInt(prompt("Quel est le montant à transférer pour l'ouverture du compte ? (minimum de 500 €)"));
    while (initialAmount < 500) {
        initialAmount = parseInt(prompt("Le montant initial doit être au minimum de 500 €, veuillez entrer une valeur valide."));
    }

    soldValue.innerHTML = initialAmount;
    overdraftValue.innerHTML = overdraft;
    document.getElementById('p-notifications').innerHTML += `Votre solde est de ${initialAmount}€.<br>Votre découvert est de ${overdraft}€.<br>`;
    document.getElementById('button-overdraft').style.display = 'none';
    document.getElementById('button-withdraw').style.display = 'inline-flex';
    document.getElementById('user-informations').style.opacity = 1;
}

let runAgios = true;
function withdraw() {
    let overdraft = +overdraftValue.innerHTML;
    let sold = +soldValue.innerHTML;
    let withdraw = parseInt(prompt("Entrez le montant du retrait (0 pour quitter)"));

    while (withdraw !== 0) {
        if (sold + overdraft >= withdraw) {
            sold -= withdraw;
            hasWithdraw += withdraw;
            soldValue.innerHTML = sold;
            document.getElementById('p-notifications').innerHTML += `Retrait de ${withdraw}€ effectué.<br>`;
            document.getElementById('p-notifications').innerHTML += `Solde restant : ${sold}€<br>`
            withdraw = parseInt(prompt("Entrez le montant souhaité pour le retrait (0 pour quitter) :"));
        } else {
            document.getElementById('p-notifications').innerHTML += 'Solde insuffisant ! <br>'
            break;
        }
    }
    if (sold < 0 && sold < overdraft) {
        agios(sold, runAgios);
        runAgios = false;
    }
    withdrawValue.innerHTML = hasWithdraw;
}

let time;
function agios(sold, askTime) {
    if (askTime) {
        time = parseInt(prompt("Saisissez le nombre de jour d'utilisation du découvert"));
    }
    while (time < 1 || time > 365) {
        time = parseInt(prompt("Le nombre de jours doit être compris entre 1 et 365"));
    }
    let interest = (-sold * time * 0.1 / 365).toFixed(2)
    document.getElementById('info-4').style.fontSize = '1.1em';
    document.getElementById('agios').innerHTML = interest;
    document.getElementById('p-notifications').innerHTML += `Vos agios sont de ${interest}€.<br>`
}