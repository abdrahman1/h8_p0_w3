function balikAngka(number) {

    while (true) {
        number++

        var numString = String(number);
        var numBalik = '';
        for (var i = numString.length - 1; i >= 0; i--) {
            numBalik += numString[i];
        }
        // return numBalik;
        if (numBalik == number) {
            return number;
        }
    }
}
console.log(balikAngka(12456));
console.log(balikAngka(11));
console.log(balikAngka(7));


