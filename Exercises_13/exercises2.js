function targetTerdekat(arr) {
    var indeksO = [];
    var indeksX = [];
    var selisihOX = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            indeksO.push(i)
        } else if (arr[i] === 'x') {
            indeksX.push(i)
        }
    }
    for (var i = 0; i < indeksX.length; i++) {
        selisihOX = Math.abs(indeksX[0] - indeksO[0]);
        selisihBanding = Math.abs(indeksX[i] - indeksO[0]);
        if (selisihBanding < selisihOX) {
            selisihOX = selisihBanding;
        }
    }
    return selisihOX;


}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2