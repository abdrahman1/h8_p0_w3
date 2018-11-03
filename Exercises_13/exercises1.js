function targetTerdekat(arr) {
    var indexO = [];
    var indexX = [];
    var selisihOX = 0;
    var selisihBanding;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            indexO.push(i);
        } else if (arr[i] === 'x') {
            indexX.push(i);
        }
        for (j = 0; j < indexX.length; j++) {
            selisihOX = Math.abs(indexX[0] - indexO[indexO.length - 1])
            selisihBanding = Math.abs(indexX[j] - indexO[indexO.length - 1]);
            if (selisihBanding < selisihOX) {
                selisihOX = selisihBanding;
            }
        }
    }
    return selisihOX;
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2