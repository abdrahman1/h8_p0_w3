/**
 * 
 * 
 */

function dataHandling(input) {
    var cetakArr = ['Nomor ID: ', 'Nama: ', '', 'TTL: '];
    var counterArr = 0;
    var hasil = '';
    while (counterArr < input.length) {
        for (var i = 0; i < input[counterArr].length; i++) {
            if (i === 2) {
                hasil += cetakArr[i] + input[counterArr][i] + ' ';
            } else if (i === 3) {
                hasil += input[counterArr][i] + '\n';
            } else {
                hasil += cetakArr[i] + input[counterArr][i] + '\n';
            }
        }
        counterArr++;
        hasil += '\n';
    }
    return hasil;
}


function data() {
    var input = [
        ['0001', 'Roman Alamsayah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
        ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
        ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
        ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
    ]
    return input;
}
var cetakData = data();
console.log(dataHandling(cetakData));