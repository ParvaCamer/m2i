function chaines() {
    let value = +prompt('Donnez un nombre entier');
    let array = [];
    for (let i = 1; i <= (value / 2); i++) {
        let result = i;
        let j = i +1;

        while (result < value) {
            result += j;
            j++
        }

        if (result === value) {
            let ar = [];
            for (let k = i; k < j; k++) {
                ar.push(k);
            }
            array.push(ar)
            console.log(ar)
        }
    }
    console.log(array)
}

chaines()