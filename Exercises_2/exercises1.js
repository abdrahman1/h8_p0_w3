/**
 * H8_P0_W3_E2
 * Tantangan Array 1 - Mengakses Nilai Dalam Array
 */



function balikString(string) {
    var tampung = '';
    for (var i = string.length-1; i>= 0; i--) {
        tampung = tampung + string[i];
    }
    return tampung;
}
console.log(balikString('hello world!'));