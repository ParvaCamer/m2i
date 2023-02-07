let soldInput = document.getElementById('amount-informations-input-sold-value');
let overdraftInput = document.getElementById('amount-informations-input-overdraft');
let withdrawInput = document.getElementById('withdraw-informations-input-sold-value');

let overdraftValue = document.getElementById('overdraft');
let soldValue = document.getElementById('sold');
let withdrawValue = document.getElementById('withdraw');
let hasWithdraw = 0;

const inputs = document.querySelectorAll('.input-radio');

inputs.forEach(input => {
    input.addEventListener('click', function () {
        inputs.forEach(input => {
            input.checked = false;
        });
        this.checked = true;
    });
});

function openAccount() {
    changeStyle('display-open-account', 'display', 'flex');
    changeStyle('button-open-account', 'opacity', '0');
    changeStyle('button-open-account', 'cursor', 'default');
    changeStyle('button-open-account-a', 'cursor', 'default');
    changeStyle('container-home-fieldset', 'opacity', 1);
    changeStyle('amount-informations', 'opacity', 1);
    changeStyle('informations-sold', 'display', 'block');
    changeStyle('informations-sold', 'opacity', 1);
}

let displayErrorOverdraft = false;
function switchInputRadio(value) {
    if (value) {
        displayErrorOverdraft = value;
        changeStyle('informations-overdraft', 'display', 'block');
        setTimeout(() => {
            changeStyle('informations-overdraft', 'opacity', 1);
        }, 300);
    } else {
        displayErrorOverdraft = value;
        setTimeout(() => {
            changeStyle('informations-overdraft', 'opacity', 0);
        }, 500);
        changeStyle('informations-overdraft', 'display', 'none');
    }
    return value
}

function reload() {
    localStorage.clear();
    window.location.reload();
}

try {
    localStorage.debug = '';
    soldInput.value = localStorage.sold;
    overdraftInput.value = localStorage.overdraft;
    displayErrorOverdraft = localStorage.displayError;
    if (soldInput.value != null && overdraftInput.value != null) {
        getOverdraft();
    }
    if (localStorage.agios != null) {
        changeStyle('info-4', 'fontSize', '1.1em');
        document.getElementById('agios').innerHTML = localStorage.agios
    }
    console.log(localStorage)
} catch (error) {
    localStorage.clear();
    console.log(error)
    console.log(localStorage)
}

function getOverdraft() {
    let overdraft = overdraftInput.value;
    let initialAmount = soldInput.value;
    if (localStorage.length == 0) {
        document.getElementById('amount-informations-p').innerHTML = "";
        if ((overdraft < 100 || overdraft > 2000) && displayErrorOverdraft) {
            changeStyle('amount-informations-p', 'innerHTML', 'Le montant du découvert doit être compris entre 100 et 2000 €, veuillez entrer une valeur valide.<br>')
        }
        if (initialAmount < 500) {
            changeStyle('amount-informations-p', 'innerHTML', 'Le montant initial doit être au minimum de 500 €, veuillez entrer une valeur valide.<br>');
        }
    }
    if (document.getElementById('amount-informations-p').innerHTML != "") {
        return
    } else {
        document.getElementById('p-notifications').innerHTML = "";
        if (localStorage.length == 0) {
            changeStyle('p-notifications', 'innerHTML', `${displayTime()}Bienvenue chez nous !<br>`);
            changeStyle('p-notifications', 'innerHTML', `${displayTime()}Votre solde est de ${initialAmount}€.<br>`);
        }
        soldValue.innerHTML = initialAmount;
        if (displayErrorOverdraft || localStorage.displayError) {
            overdraftValue.innerHTML = overdraft;
            if (localStorage.length == 0) {
                changeStyle('p-notifications', 'innerHTML', `${displayTime()}Votre découvert est de ${overdraft}€.<br>`);
                document.getElementById('container-notifications').scrollTop = document.getElementById('container-notifications').scrollHeight;
            }
            changeStyle('button-custom-agios', 'display', 'block');
        } else {
            overdraftValue.innerHTML = 0;
        }
        if (window.innerWidth < 1200) {
            changeStyle('container-user', 'display', 'flex');
            changeStyle('container-home', 'display', 'none');
            setTimeout(() => {
                changeStyle('container-user-informations', 'opacity', 1);
                changeStyle('container-button', 'opacity', '1');
            }, 100);
        } else {
            changeStyle('container-user', 'display', 'grid');
            changeStyle('container-home', 'display', 'none');
            setTimeout(() => {
                changeStyle('container-user-informations', 'opacity', 1);
                changeStyle('container-button', 'opacity', '1');
            }, 100);
        }
        if (localStorage.length == 0) {
            localStorage.sold = soldValue.innerHTML;
            localStorage.overdraft = overdraftValue.innerHTML;
            localStorage.displayError = displayErrorOverdraft;
        }
    }
}

let runAgios = true;
function deposit() {
    let doc = document.getElementById('deposit-informations-input-sold-value');
    let value = parseInt(doc.value);
    if (value < 0 || isNaN(value)) {
        changeStyle('amount-informations-p-e', 'innerHTML', 'Le dépôt doit être supérieur à 0€.');
    } else {
        soldValue.innerHTML = value + +soldValue.innerHTML;
        changeStyle('p-notifications', 'innerHTML', `${displayTime()}Vous avez déposé ${value}€.<br>`);
        changeStyle('p-notifications', 'innerHTML', `${displayTime()}Votre solde est de ${soldValue.innerHTML}€.<br>`);
        document.getElementById('container-notifications').scrollTop = document.getElementById('container-notifications').scrollHeight;
    }
    doc.value = "";
    localStorage.sold = soldValue.innerHTML;
}

function withdraw() {
    hasWithdraw = +hasWithdraw;
    let overdraft = +overdraftValue.innerHTML;
    let sold = +soldValue.innerHTML;
    let withdraw = +withdrawInput.value;
    if (sold + overdraft >= withdraw) {
        sold -= withdraw;
        hasWithdraw += withdraw;
        soldValue.innerHTML = sold;
        changeStyle('p-notifications', 'innerHTML', `${displayTime()}Retrait de ${withdraw}€ effectué.<br>`);
        changeStyle('p-notifications', 'innerHTML', `${displayTime()}Solde restant : ${sold}€<br>`);
        document.getElementById('container-notifications').scrollTop = document.getElementById('container-notifications').scrollHeight;
    } else {
        changeStyle('amount-informations-p-e', 'innerHTML', 'Solde insuffisant !');
        changeStyle('p-notifications', 'innerHTML', `${displayTime()}Solde insuffisant ! <br>`);
        document.getElementById('container-notifications').scrollTop = document.getElementById('container-notifications').scrollHeight;
    }
    if (sold < 0 && sold < overdraft) {
        agios(sold, null, runAgios);
        runAgios = false;
        changeStyle('button-custom-agios', 'display', 'block');
    }
    withdrawValue.innerHTML = hasWithdraw;
    localStorage.sold = sold;
}

function askOverdraft() {
    let value = parseInt(document.getElementById('amount-informations-input-ask-overdraft').value);
    let valueInner = +overdraftValue.innerHTML;
    if (value < 100 || value > 2000) {
        changeStyle('amount-informations-p-error', 'innerHTML', 'Le montant du découvert doit être compris entre 100 et 2000 €, veuillez entrer une valeur valide.<br>')
    } else {
        changeStyle('p-notifications', 'innerHTML', `${displayTime()}Demande de découvert de ${value}€ autorisé.<br>`);
        document.getElementById('container-notifications').scrollTop = document.getElementById('container-notifications').scrollHeight;
        overdraftValue.innerHTML = valueInner + value;
        localStorage.overdraft = overdraftValue.innerHTML;
    }
}

function calculAgios() {
    let agiosInput = parseInt(document.getElementById('amount-informations-input-agios').value);
    if (agiosInput < 1 || agiosInput > 365 || isNaN(agiosInput)) {
        changeStyle('amount-informations-p-error-agios', 'innerHTML', 'Le nombre de jours doit être compris entre 1 et 365');
    } else {
        agios(soldValue.innerHTML, agiosInput, false)
    }
}

let time;
function agios(sold, timeValue, askTime) {
    if (askTime) {
        time = parseInt(prompt("Solde négatif. Saisissez le nombre de jour d'utilisation du découvert"));
    } else {
        time = timeValue;
    }
    while ((time < 1 || time > 365 || isNaN(time))) {
        time = parseInt(prompt("Le nombre de jours doit être compris entre 1 et 365"));
    }
    let interest;
    if (timeValue != null) {
        interest = (-sold * timeValue * 0.1 / 365).toFixed(2)
    } else {
        interest = (-sold * time * 0.1 / 365).toFixed(2)
    }
    changeStyle('info-4', 'fontSize', '1.1em');
    document.getElementById('agios').innerHTML = interest;
    changeStyle('p-notifications', 'innerHTML', `${displayTime()}Vos agios sont de ${interest}€.<br>`)
    document.getElementById('container-notifications').scrollTop = document.getElementById('container-notifications').scrollHeight;
    localStorage.agios = interest;
}

function changeStyle(id, property, value) {
    if (property === 'innerHTML') {
        document.getElementById(id).innerHTML += value;
    } else {
        document.getElementById(id).style[property] = value;
    }
}

function displayOperations(value) {
    document.getElementById('amount-informations-p-e').innerHTML = "";
    document.getElementById('withdraw-informations-input-sold-value').value = "";
    document.getElementById('deposit-informations-input-sold-value').value = "";
    document.getElementById('amount-informations-input-ask-overdraft').value = "";
    if (value === 'deposit') {
        changeStyle('container-operations-withdraw-informations', 'display', 'flex');
        changeStyle('deposit-informations-div', 'display', 'block');
        changeStyle('deposit-informations-div', 'opacity', 1);
        changeStyle('button-deposit', 'display', 'inline-flex');
        changeStyle('svg-informations', 'transform', 'rotate(0deg)');
        changeStyle('withdraw-informations-div', 'display', 'none');
        changeStyle('withdraw-informations-div', 'opacity', 0);
        changeStyle('button-withdraw', 'display', 'none');
        changeStyle('amount-overdraft', 'display', 'none');
        changeStyle('amount-overdraft', 'opacity', 0);
        changeStyle('amount-agios', 'display', 'none');
    } else if (value === 'withdraw') {
        changeStyle('container-operations-withdraw-informations', 'display', 'flex');
        changeStyle('withdraw-informations-div', 'display', 'block');
        changeStyle('withdraw-informations-div', 'opacity', 1);
        changeStyle('button-withdraw', 'display', 'inline-flex');
        changeStyle('svg-informations', 'transform', 'rotate(180deg)');
        changeStyle('deposit-informations-div', 'display', 'none');
        changeStyle('deposit-informations-div', 'opacity', 0);
        changeStyle('button-deposit', 'display', 'none');
        changeStyle('amount-overdraft', 'display', 'none');
        changeStyle('amount-overdraft', 'opacity', 0);
        changeStyle('amount-agios', 'display', 'none');
    } else if (value === 'overdraft') {
        changeStyle('amount-overdraft', 'display', 'flex');
        changeStyle('amount-overdraft', 'opacity', 1);
        changeStyle('container-operations-withdraw-informations', 'display', 'none');
        changeStyle('amount-agios', 'display', 'none');
    } else if (value === 'agios') {
        changeStyle('amount-agios', 'display', 'flex');
        changeStyle('amount-agios', 'opacity', 1);
        changeStyle('container-operations-withdraw-informations', 'display', 'none');
        changeStyle('amount-overdraft', 'display', 'none');
        changeStyle('amount-overdraft', 'opacity', 0);
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