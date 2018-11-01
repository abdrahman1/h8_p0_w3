function hitungJumlahKata(kalimat) {
    var tmpKata = [];
    var tmpKar = '';
    for (i = 0; i < kalimat.length; i++) {
        if (i == kalimat.length-1) {
            tmpKar += kalimat[i];
            tmpKata.push(tmpKar);
        } else {
            if (kalimat[i] == ' ') {
                tmpKata.push(tmpKar);
                tmpKar = '';
            } else {
                tmpKar += kalimat[i];
            }
        }
    }
    return tmpKata.length;
}
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
