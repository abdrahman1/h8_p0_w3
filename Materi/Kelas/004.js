var arr = [
    [
        [100, 150, 200, 250],
        ['ari', 'ira', 'ria', 'air'],
        ['#*$', '$#*', '**$', '$##']
    ],
    [
        [250, 300, 500, 700],
        ['ika', 'ria', 'asami', 'komang'],
        ['$#*', '*$$$', '$#$', '**#']
    ]
];

var pembanding = 0;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i][0].length; j++) {
        if (arr[i][0][j] > pembanding) {
            pembanding = arr[i][0][j];
        }
    }
}
console.log(pembanding);
console.log(arr[1][1][1]);