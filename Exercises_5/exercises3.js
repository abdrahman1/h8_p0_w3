function palindrome(kata) {
    var balikKata = '';
    for (var i = 0; i < kata.length; i++) {
        balikKata += kata[kata.length-1-i];
    }
    if (balikKata == kata) {
        return + true;
    } else {
        return false;
    }
    // return balikKata;
    
}
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false