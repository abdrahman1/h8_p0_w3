/**
 * H8_P0_W3_E2
 * Tantangan Array 1 - Mengakses Nilai Dalam Array
 */


var hello = 'hello world!';

function balikString(string) {
    var tampung = '';
    for (var i = hello.length-1; i>= 0; i--) {
        tampung = tampung + hello[i];
    }
    return tampung;
}
console.log(balikString('hello world!'));