/**
 * 
 */


// Typecasting To and From String
// Typecasting berarti mengubah data dari suatu tipe data ke tipe data yang lain. Pada JavaScript, typecasting sering dilakukan pada string, baik dari suatu tipe data menjadi string atau sebaliknya. Berikut beberapa cara yang bisa dilakukan untuk melakukan typecasting terhadap string.


// String([angka/array])

var int = 12;
var real = 3.45;
var arr = [6, 7, 8];

var strInt = String(int);
var strReal = String(real);
var strArr = String(arr);

console.log(strInt); 
console.log(strReal);
console.log(strArr + '\n');

// .toString()
var number = 21;
console.log(number.toString()); 
var array = [1,2];
console.log(array.toString() + '\n');

// Number ([String])
var number1 = Number("90"); 
var number2 = Number("1.23");
var number3 = Number("4.5");
console.log(number1, number2, number3);
console.log('\n');
// parseInt([String]) dan parseFloat([String])
var int = '89';
var real = '56.7';

var strInt_1 = parseInt(int); // strInt_1 = 89
var strInt_2 = parseInt(real); // strInt_2 = 56

var strReal_1 = parseFloat(int); // strReal_1 = 89
var strReal_2 = parseFloat(real); // strReal_2 = 56.7
console.log(strInt_2);
console.log(strReal_2);

