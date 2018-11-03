var arr = [[100, 200, 500, 1000],[100000, 50000, 20000, 10000, 5000, 2000, 1000]]

var pembanding = 0;
for (var i=0; i<arr.length;i++) {
    for (var j=0;j<arr[i].length;j++) {
        if (arr[i][j] > pembanding) {
            pembanding = arr[i][j];
        }
    }
}
console.log(pembanding);