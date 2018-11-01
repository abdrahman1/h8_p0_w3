function pasanganTerbesar(num) {
    var numString = String(num);
    var tmpMax = 0;
    for (var i = 0; i < numString.length; i++) {
        if (numString[i]+numString[i+1] > tmpMax) {
            tmpMax = numString[i]+numString[i+1];
        }
    }
    return tmpMax;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99