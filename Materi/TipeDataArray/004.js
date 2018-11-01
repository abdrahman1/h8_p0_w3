/**
 * 
 */
// Multidimesional Array

// cara deklarasi array 2 dimensi kosong
var arr2D = [[]];
// contoh array 2 dimensi
var arr2D = [[1,2], [3,4], [5,6]];
var murid = [['Budi', 'SD 1 Cicayur'], ['Suci', 'SD 23 Beji']]

console.log(arr2D[0]); // [1,2]
console.log(arr2D[0][1]);
console.log(murid[1])
console.log(murid[1][1]);

// array 2 dimensi dengan built-in functions
console.log(arr2D)
// arr2D.push(12);
arr2D.push([7, 8]); // arr2D = [ [1,2], [3,4], [5,6], [7,8] 
arr2D[1].push(0);
arr2D[0].pop();
arr2D[0].pop();
console.log(arr2D);
