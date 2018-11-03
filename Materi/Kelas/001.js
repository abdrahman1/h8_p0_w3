var kata = 'kaki';
var x = 0;
var sementara = '';
var sementara2 = '';
// for (x; x < 2; x++) {
//     console.log(kata[x]);
// }
// for (x; x < kata.length; x++) {
//     sementara = sementara + kata[x];
// }
// for (var y = sementara.length - 1; y >= 0; y--) {
//     sementara2 += sementara[y]
// }
// console.log(sementara2);
// console.log('\n');

for (x; x<2; x++) {
    console.log(kata[x]);
}
for (var y = kata.length-1; y >= x; y--) {
    sementara += kata[y];
}
console.log(sementara);
