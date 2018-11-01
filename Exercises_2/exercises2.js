function balikKata(kata) {
    var hasil  = "";
    for (var i = 0; i < kata.length; i++) {
        hasil += kata[kata.length-1-i];
    }
    return hasil;
}
console.log(balikKata('Hello World!'));