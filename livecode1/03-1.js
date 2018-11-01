/**
 Membership ID

 Active8 gym memiliki sistem membership untuk setiap pelanggan di haruskan mengisi nama, tanggal lahir, dan diberikan nomor antrian
 dari ketiga data tersebut maka akan dibuatkan ID Member dengan format sebagai berikut

 Huruf Pertama Pelanggan + Dua Digit Tanggal Lahir  + Dua Digit Bulan Lahir + Dua Digit akhir tahun lahir + tiga digit nomor antrian

 Buatlah sebuah function yang menghasilkan id member tersebut



 Contoh 1:
 -----------------------------
 genetareMemberID("Alfian", "22091999", 121)
 output
 ---
 a220999121
 
 Contoh 2:
 -----------------------------
 genetareMemberID("budi", "09022000", 1)
 output
 ---
 b090200001

 */

var nama = 'wahid';
var lahir = '22091978';
var nomor = '121';

function generateMemberID(nama, lahir, nomor) {
    var generate = generateNama(nama) + generateLahir(lahir) + generateNomor(nomor);
    var hasil = 'generateMemberID("'+nama+'", "'+lahir+'", '+nomor+') \noutput \n--- \n'+generate;
    return hasil;
}
function generateNama(nama) {
    var hasil = '';
    for (var i = 0; i < nama.length; i++) {
        // var hasil = '';
        if (i == 0) {
            hasil += nama[i];
        }
    }
    return hasil;
}

function generateLahir(lahir){ //02091987
    var hasil = '';
    for (var i = 0; i < lahir.length; i++) {
        if (i < 2) {
            hasil += lahir[i]
        } 
        else if (i >=2 && i <= 3 ) {
            hasil += lahir[i];
        } 
        else if (i >= lahir.length-2 && i <= lahir.length-1) {
            hasil += lahir[i];
        }
    }
    return hasil;
    // console.log(hasil)
}
function generateNomor(nomor) {
    var hasil = '';
    for (var i = 0; i < nomor.length; i++) {
        if (i < nomor.length - 1) {
            hasil += nomor[i];
        }
    }
    return hasil;
}
// console.log(generateNama(nama));
// console.log(generateLahir(lahir));
// console.log(lahir.length);
// console.log(lahir.length-2);
// console.log(lahir.length-1);
// console.log(nama[0]);
console.log(generateMemberID(nama, lahir, nomor));
