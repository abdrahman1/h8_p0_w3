// var num = 7589;
// var sementara = '';
// var arr = String(num).split("");
// for (var i = 1; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log(arr);

var num = 7589;
var arr = String(num).split("");
var pembanding = 9;
// var sementara = ''
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pembanding) {
        // sementara += arr[i];
        pembanding += arr[i];
    }
}
// console.log(sementara)
console.log(typeof pembanding);