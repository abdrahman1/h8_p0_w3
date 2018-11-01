/**
 * H8_P0_W3_E9
 * Cari Mean
 */

function cariMean(arr) {
    var indexArr = 0;
    var tampung = 0;
    while (indexArr < arr.length) {
        tampung += arr[indexArr];
        indexArr++;
    }
    var mean = Math.round(tampung / arr.length);
    // if (mean % 2 !== 0) {
    //     var meanRound = Math.round(mean);
    //     return meanRound;   
    // } else {
    //     return mean;
    // }
    return mean;
}

// Test Case
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7






