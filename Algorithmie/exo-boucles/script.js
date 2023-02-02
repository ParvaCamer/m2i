function tenHelloWorld(count) {
    document.getElementById('ten-hello-world').innerHTML = ""
    let message = "Hello World !<br>";
    for (let i = 0; i < count; i++) {
        document.getElementById('ten-hello-world').innerHTML += i + " - " + message
    }
}

function aboveNineteen(number) {
    document.getElementById('above-nineteen').innerHTML = ""
    for (let i = 100; i >= number; i--) {
        document.getElementById('above-nineteen').innerHTML += i + " "
    }
}

function departmentCode75() {
    document.getElementById('department-code').innerHTML = ""
    for (let i = 75000; i <= 75999; i++) {
        document.getElementById('department-code').innerHTML += i + " "
    }
}

function departmentCode77() {
    document.getElementById('department-code').innerHTML = ""
    for (let i = 77000; i <= 77999; i++) {
        document.getElementById('department-code').innerHTML += i + " "
    }
}

function displayStars() {
    document.getElementById('display-stars').innerHTML = ""
    let random = Math.floor(Math.random() * 2)
    for (let i = 0; i < 6; i++) {
        if (random == 0) {
            document.getElementById('display-stars').innerHTML += "*".repeat(i) + "<br>"
        } else {
            document.getElementById('display-stars').innerHTML += String(i).repeat(i) + "<br>"
        }
    }
} 