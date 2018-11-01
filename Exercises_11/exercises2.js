function tentukanDeretAritmatika(arr) {
    var tampil = '';
    var beda = arr[0] - arr[1];
    for (var i = 0; i < arr.length - 1; i++) {
        if (i == arr.length-2) {
            tampil += arr[i+1] - arr[i];
        } else {
            tampil += arr[i+1] - arr[i] + ' ';
        }
    }
    var bedaArr = tampil.split(' ');
    return bedaArr;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false