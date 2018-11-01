/**
 * H8_P0_W3_E6
 * 
 */
function angkaPalindrome(num) {
    var numString = String(num);
    var numBalik = '';
    if (num < 10) {
        return num+1;
    } else {
        for (var i = 0; i < numString.length; i++) {
            numBalik += numString[numString.length-1-i];
        }
        if (numBalik == num) {
            return num;
        } else {
            return angkaPalindrome(num + 1);
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
