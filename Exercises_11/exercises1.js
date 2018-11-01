/**
 * H8_P0_W3_E11
 * Deret Aritmatika
 */

function tentukanDeretAritmatika(arr) {
    var beda = arr[1] - arr[2];
    for (var i = 0; i < arr.length-1; i++) {
        if (arr[i] - arr[i+1] != beda) {
            return false;
        } else {

            return true;
        }
    }

}
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false