/**
 * H8_P0_W3_E3
 * Tantangan Array 2 - Melakukan Looping Data Array
 */

function dataHandling(array) {
    // var nomorID = '';
    for (var i = 0; i < array.length; i++) {
        for(var j = 0; j < array[i].length; j++) {
            var nomorID = nomorID + array[i][j];
            // nomorID += ', '
        }
        nomorID += '\n';
    }
    console.log(nomorID);
}

var input = [   
                ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
                ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
                ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']    
            ]

console.log(input[0][0]);
console.log(input.length);
// console.log(dataHandling(input));
dataHandling(input);