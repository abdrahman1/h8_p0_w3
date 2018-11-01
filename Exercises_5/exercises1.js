/**
 * H8_P0_W3_E5
 * Palindrome
 */

function palindrome(kata) {
    var newKata = '';
    for (var i = kata.length-1; i >= 0; i--) {
        newKata += kata[i];
    }
    if (newKata == kata) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome('katok'));
console.log(palindrome('katak'));
console.log(palindrome('blanket'));
console.log(palindrome('civic'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister'));