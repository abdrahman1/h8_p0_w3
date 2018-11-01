function pasanganTerbesar(num) {
    var numString = String(num);
    var hasil = '';
    var hasil2 = '';
    for (var i=0; i < numString.length; i++) {
        if (numString[i] > hasil) {
            hasil = numString[i];
            hasil2 = numString[i+1];
        }
    }
    var terbesar = Number(hasil+hasil2);
    return terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99