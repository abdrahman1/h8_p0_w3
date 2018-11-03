/**
 * H8_P0_W3_E8
 * Pasangan Angka Terbesar
 */

function pasanganTerbesar(num) {
    var numString = String(num);
    var tampil = '';
    var max = 0; // dua angka terbesar
    for (var i = 0; i < numString.length; i++) {
        if (numString[i]+numString[i+1] > max) {
            max = numString[i]+numString[i+1];
            // tampil += max + ' |'
        }
    }
    return Number(max);
    // return max;
}
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99