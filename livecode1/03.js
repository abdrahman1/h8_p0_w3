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



// var nama = 'usman';
// var lahir = '02061995';
// var nomor = 456;

function generateMemberID(nama, lahir, nomor) {
    var genNama = nama[0];
    var genLahir = lahir[0]+lahir[1]+lahir[2]+lahir[3]+lahir[6]+lahir[7];
    var genNomor = nomor;
    var genAll = genNama + genLahir + genNomor;
    var hasil = '"generateMembarID("'+nama+'", '+'"'+lahir+'", '+nomor+') \noutput \n--- \n'+genAll;
    return hasil;
}
console.log(generateMemberID('usman', '02061995', 456));