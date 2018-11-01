function angkaPalindrome(angka) {
    var numString = String(angka);
    var tmpAngka = '';
    if (angka < 10) {
        return angka + 1;
    } else {
        for (var i = 0; i < numString.length; i++) {
            tmpAngka += numString[numString.length-1-i];
        }
        if (tmpAngka === numString) {
            return angka;
        } else {
            return angkaPalindrome(angka + 1);
        }
    }


}
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001