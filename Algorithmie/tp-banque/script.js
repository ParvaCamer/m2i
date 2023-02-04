let soldInput = document.getElementById('amount-informations-input-sold-value');
let overdraftInput = document.getElementById('amount-informations-input-overdraft');
let withdrawInput = document.getElementById('withdraw-informations-input-sold-value');

let overdraftValue = document.getElementById('overdraft');
let soldValue = document.getElementById('sold');
let withdrawValue = document.getElementById('withdraw');
let hasWithdraw = 0;

function openAccount() {
    document.getElementById('amount-informations-p').innerHTML = "";
    /*let overdraft = parseInt(prompt("Saisissez le montant du découvert entre 100 et 2000€"));
    while (overdraft < 100 || overdraft > 2000) {
        overdraft = parseInt(prompt("Le montant du découvert doit être compris entre 100 et 2000 €, veuillez entrer une valeur valide."));
    }*/
    //let overdraft = overdraftInput.value;
    let overdraft = 500
    if (overdraft < 100 || overdraft > 2000) {
        changeStyle('amount-informations-p', 'innerHTML', 'Le montant du découvert doit être compris entre 100 et 2000 €, veuillez entrer une valeur valide.<br>')
    }
    /*let initialAmount = parseInt(prompt("Quel est le montant à transférer pour l'ouverture du compte ? (minimum de 500 €)"));
    while (initialAmount < 500) {
        initialAmount = parseInt(prompt("Le montant initial doit être au minimum de 500 €, veuillez entrer une valeur valide."));
    }*/
    //let initialAmount = soldInput.value;
    let initialAmount = 500
    if (initialAmount < 500) {
        changeStyle('amount-informations-p', 'innerHTML', 'Le montant initial doit être au minimum de 500 €, veuillez entrer une valeur valide.<br>');
    }

    if (document.getElementById('amount-informations-p').innerHTML != "") {
        return
    } else {
        document.getElementById('p-notifications').innerHTML = "";
        changeStyle('p-notifications', 'innerHTML', `${displayTime()}Bienvenue chez nous !<br>`);
        changeStyle('p-notifications', 'innerHTML', `${displayTime()}Votre solde est de ${initialAmount}€.<br>${displayTime()}Votre découvert est de ${overdraft}€.<br>`);
        soldValue.innerHTML = initialAmount;
        overdraftValue.innerHTML = overdraft;
        changeStyle('amount-informations', 'display', 'none');
        changeStyle('withdraw-informations', 'display', 'block');
        changeStyle('user-informations', 'opacity', 1);
        changeStyle('amount-informations','display', 0);
    }
}
openAccount()

let runAgios = true;
function withdraw() {
    hasWithdraw = +hasWithdraw;    
    let overdraft = +overdraftValue.innerHTML;
    let sold = +soldValue.innerHTML;
    //let withdraw = parseInt(prompt("Entrez le montant du retrait (0 pour quitter)"));
    let withdraw = +withdrawInput.value;
    if (sold + overdraft >= withdraw) {
        sold -= withdraw;
        hasWithdraw += withdraw;
        soldValue.innerHTML = sold;
        changeStyle('p-notifications', 'innerHTML', `${displayTime()}Retrait de ${withdraw}€ effectué.<br>`);
        changeStyle('p-notifications', 'innerHTML', `${displayTime()}Solde restant : ${sold}€<br>`);
        document.getElementById('container-notifications').scrollTop = document.getElementById('container-notifications').scrollHeight;
        //withdraw = parseInt(prompt("Entrez le montant souhaité pour le retrait (0 pour quitter) :"));
    } else {
        changeStyle('p-notifications', 'innerHTML', `${displayTime()}Solde insuffisant ! <br>`)
        document.getElementById('container-notifications').scrollTop = document.getElementById('container-notifications').scrollHeight;
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
        time = parseInt(prompt("Solde négatif. Saisissez le nombre de jour d'utilisation du découvert"));
    }
    while (time < 1 || time > 365) {
        time = parseInt(prompt("Le nombre de jours doit être compris entre 1 et 365"));
    }
    let interest = (-sold * time * 0.1 / 365).toFixed(2)
    changeStyle('info-4', 'fontSize', '1.1em');
    document.getElementById('agios').innerHTML = interest;
    document.getElementById('p-notifications').innerHTML += `${displayTime()}Vos agios sont de ${interest}€.<br>`;
    document.getElementById('container-notifications').scrollTop = document.getElementById('container-notifications').scrollHeight;
}

function changeStyle(id, property, value) {
    if (property === 'innerHTML') {
        document.getElementById(id).innerHTML += value;
    } else {
        document.getElementById(id).style[property] = value;
    }
}

let amountSwitch = false;
function switchAmount() {
    if (amountSwitch) {
        amountSwitch = false;
        changeStyle('deposit-informations-div', 'display', 'block');
        changeStyle('button-deposit', 'display', 'inline-flex');
        changeStyle('withdraw-informations-div', 'display', 'none');
        changeStyle('button-withdraw', 'display', 'none');
        changeStyle('svg-informations', 'transform', 'rotate(0deg)');
    } else {
        amountSwitch = true;
        changeStyle('deposit-informations-div', 'display', 'none');
        changeStyle('button-deposit', 'display', 'none');
        changeStyle('withdraw-informations-div', 'display', 'block');
        changeStyle('button-withdraw', 'display', 'inline-flex');
        changeStyle('svg-informations', 'transform', 'rotate(180deg)');
    }
}

function showNotifications() {
    let container = document.getElementById('notifications');
    let display = document.getElementById('container-notifications');

    if (window.innerWidth < 1200) {
        container.style.transition = "all .25s ease-in-out"
        if (display.style.maxHeight > "0px") {
            document.getElementById('bell').style.display = "block";
            display.style.maxHeight = "0px";
            display.style.display = "block";
            document.getElementById('notifications-title').style.display = "none";
            document.getElementById('notifications-line').style.display = "none";
            container.style.position = "fixed";
            container.style.flexDirection = "unset";
            container.style.borderRadius = "50%";
            container.style.height = "40px";
            container.style.width = "25px";
            container.style.right = "10px";
        } else {
            document.getElementById('bell').style.display = "none";
            document.getElementById('notifications-title').style.display = "block";
            document.getElementById('notifications-line').style.display = "block";
            container.style.width = "50%";
            container.style.height = "auto";
            container.style.right = 0;
            container.style.position = "relative";
            container.style.flexDirection = "column";
            container.style.borderRadius = "12px";
            display.style.maxHeight = "90px";
        }
    } else {
        if (display.style.maxHeight > "0px") {
            display.style.maxHeight = "0px";
        } else {
            display.style.maxHeight = "200px";
        }
        container.style.bottom = "-25px";
    }
}

function displayTime() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    return `<b>${hour}h${min.toString().padStart(2, '0')}: </b>`
}