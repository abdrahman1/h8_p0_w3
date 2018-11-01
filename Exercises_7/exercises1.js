/**
 * H8_P0_W3_E7
 */
function hitungJumlahKata(kalimat) {
    var newKalimat = [];
    newKata = '';
    for (var i = 0; i < kalimat.length; i++) {
        if(i == kalimat.length - 1) {
            newKalimat.push(newKata);
        } else {
            if (kalimat[i] != ' ') {
                newKata += kalimat[i];
            } else if(kalimat[i] === ' ') {
                newKalimat.push(newKata);
                newKata = '';
            }
        }
    }
    // newKalimat.push(newKata);
    // return newKalimat.length
    return newKalimat
}
console.log(hitungJumlahKata('I have a dream'));
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

// var string = 'I have a dream';
// var array = ['i', 'have', 'a', 'dream'];
// console.log(string.length); 
// console.log(array.length);