function tentukanDeretAritmatika(arr) {
    var tampil = '';
    var beda = arr[0] - arr[1];
    for (var i = 0; i < arr.length - 1; i++) {
        // if (arr[i] - arr[i + 1] != beda) {
        //     // counter++;
        //     tampil += arr[i] - arr[i+1] + ' ' 
        // } else {
        //     tampil += arr[i] - arr[i+1] + ' '
        // }
        if (i == arr.length-2) {
            tampil += arr[i+1] - arr[i];
        } else {
            tampil += arr[i+1] - arr[i] + ' ';
        }
    }
    // return (counter === 0);
    var bedaArr = tampil.split(' ');
    return bedaArr;
    // you can only write your code here!
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false