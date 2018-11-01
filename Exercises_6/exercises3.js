function angkaPalindrome(num) {
   
    var loopAngka = true;
    while (loopAngka) {
        num++;
        var numBalik = '';
        var numString = String(num);
        for (var i = numString.length - 1; i >= 0; i -- ) {
            numBalik += numString[i];
        }
        if (numBalik == num) {
            loopAngka = false;
        }
       
    }
    return num;
    
}



// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(121));
