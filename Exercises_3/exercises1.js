/**
 * H8_P0_W3_E3
 * Tantangan Array 2 - Melakukan Looping Data Array
 */

function dataHandling(input) {

    var cetak = ['Nomor ID: ', 'Nama Lengkap: ','TTL: ','', 'Hobi: '];
    var tampung = '';
    for (var i = 0; i < input.length; i++) {
        tampung += '\n';
        for (var j = 0; j < input[i].length; j++) {
            if (j === 2) {
                tampung += cetak[j]
                tampung += input[i][j] + ' ';
            } else if (j === 3) {
                tampung += input[i][j] + '\n';
            } else {
                tampung += cetak[j]
                tampung += input[i][j] + '\n';
            }
        }
        // tampung += '\n'
    }
    return tampung;
}


var input = [
    ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
    ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
    ['003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
    ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
]

// console.log(data[0][0]);
// console.log(input[0][0]);
// console.log(data.length);
// console.log(input);
console.log(dataHandling(input));
// dataHandling(data);