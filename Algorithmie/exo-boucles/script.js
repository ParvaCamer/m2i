function tenHelloWorld(count) {
    let message = "Hello World !<br>";
    for (let i = 0; i < count; i++) {
        document.getElementById('ten-hello-world').innerHTML += i + " - " + message
    }
}
tenHelloWorld(10)

function aboveNineteen(number) {
    for (let i = 100; i >= number; i--) {
        document.getElementById('above-nineteen').innerHTML += i + " "
    }
}
aboveNineteen(90)