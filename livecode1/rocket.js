/**
 Buatlah sebuah function drawPattern yang menerima 1 parameter berupa angka
 Angka tersebut mewakili panjang dan lebar pattern yang akan dibuat
 pada setiap baris ganjil maka kolom genapnya akan dicetak pola `/`
 pada setiap baris genap maka kolom ganjilnya dicetak pola '\'

 contoh 1:
 ----------------------------
 drawPattern(3)

 Output
 ---
  / 
 \ \
  / 

 contoh 2:
 ----------------------------
 drawPattern(2)
 /
\

 */


//Put your code here

function drawPattern(row) {
    // if (var i%2 == 0) {
    //     var row1 = 
    // }
    // var hasil = '';
    for (var i = 0; i < row; i++) {
        var hasil = '';
        for (var j = 0; j < row; j++) {
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    hasil += ' ';
                } else {
                    hasil += '/';
                }
            } else {
                if (j % 2 == 0) {
                    hasil += '\\';
                } else {
                    hasil += ' ';
                }
            }
            
        }
        // hasil += '\n';
        console.log(hasil)
    }
    // return hasil;
}
// console.log(drawPattern(8));
drawPattern(8);


// drawPattern(7)
/*
Output:
---
 / / /
\ \ \ \
 / / /
\ \ \ \
 / / /
\ \ \ \
 / / /
*/