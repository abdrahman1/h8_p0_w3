/**
 * 
 */

// push()
var arr = [0, 1, 2, 3];
// arr.push(4);
console.log(arr)
// arr[4] = 4;
console.log(arr.length)
arr[arr.length] = 'string'
console.log(arr); // 0, 1, 2, 3, 4
console.log(arr[4])
// POP()

var arr = [0, 1, 2, 3]; // assign ulang
arr.pop();
console.log(arr); // 0, 1, 2, 3, 4

// unshift
var arr = [0, 1, 2];
arr.unshift(3);
console.log(arr); // 3, 0, 1, 2

// shift()
var arr = [3,0,1,2];
arr.shift();
console.log(arr); // 0, 1, 2

// sort()
var arr = [3, 5, 7, 1, 2];
arr.sort();
console.log(arr); // 1, 2, 3, 5, 7
var arr = [1, 2, 15];
// JavaScript sort secara unicode
arr.sort();
console.log(arr); // 1, 15, 2
var arr = [1, 2, 15];
arr.sort(function(value1, value2) { return value1 > value2});
console.log(arr); // 1, 2, 15
console.log('\n')
// slice()
var arr = [0, 1, 2, 3, 4];
var irisan1 = arr.slice(1,3) // mengambil irisan array mulai dari index 1 hingga index 2 (sebelum index 3). Index 3 tidak ikut diambil.
console.log(irisan1); // [1, 2]
var irisan2 = arr.slice(1);
console.log(irisan2); // [1, 2, 3, 4]
var irisan3 = arr.slice(2, 3);
console.log(irisan3); // [2]
var irisan4 =  arr.slice(2, 2);
console.log(irisan4) // [] kosong
console.log('\n');

// splice

var arr = ["buku", "laptop", "komputer"];
arr.splice(2, 0, "televisi"); // Menghapus 0 nilai dari index 2, dan menambah 1 nilai yaitu "televisi" pada index 2.
console.log(arr) // ["buku", "laptop", "televisi", "komputer"]
arr.splice(0, 2); // menghapus 2 nilai dari index 0
console.log(arr); // ["televisi", "komputer"]
var arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
console.log(arr);
arr.splice(1, 4, arr[1] + " Elsharawy", "Provinsi " + arr[2], arr[3], "Pria", "SMA Internasional Metro" );
console.log(arr);
console.log('\n');

// split
var kalimat = "saya adalah full-stack javascript programmer!";
var kata = kalimat.split(" ");
console.log(kata);

