function palindrome(kata) {
    var mulaiCounter = kata.length-1;
    var newKata = '';
    while (mulaiCounter >= 0) {
        newKata += kata[mulaiCounter];
        mulaiCounter--;
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