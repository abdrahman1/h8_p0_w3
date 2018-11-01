/**
 * H8_P0_W3_E4
 * Tantangan Array 3 - Array Join, Split, Slice, Splice, Sort
 */

function dataHandling2(array) {
    array.splice(1, 4, array[1] + ' Elsharawy', 'Provinsi ' + array[2], array[3], 'pria' + 'SMA Internasional Metro');
    console.log(array);
    var tanggalLahir = array[3].split("/");
    var bulan = tanggalLahir[1] // array[3].slice(3, 5)
    // console.log(tanggalLahir);
    // console.log(bulan);
    switch (bulan) {
        case '01':
            bulan = 'Januari';
            break;
        case '02':
            bulan = 'Februari';
            break;
        case '03':
            bulan = 'Maret';
            break;
        case '04':
            bulan = 'April';
            break;
        case '05':
            bulan = 'Mei';
            break;
        case '06':
            bulan = 'Juni';
            break;
        case '07':
            bulan = 'Juli';
            break;
        case '08':
            bulan = 'Agustus';
            break;
        case '09':
            bulan = 'September';
            break;
        case '10':
            bulan = 'Oktober';
            break;
        case '11':
            bulan = 'November';
            break;
        case '12':
            bulan = 'Desember';
            break;
    }
    console.log(bulan);
    console.log(tanggalLahir.sort(function (a, b) {return b-a}));
    console.log(array[3].split('/').join('-'));
    console.log(array[1].slice(0,15));
}
var input = ["001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);