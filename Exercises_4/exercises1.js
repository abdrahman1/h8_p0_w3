/**
 * H8_P0_W3_E4
 * Tantangan Array 3 - Array Join, Split, Slice, Splice, Sort
 */

function dataHandling2(input) { // fungsi untuk menampilkan data hasil akhir
    var data = editData(input);
    // var data6 = data.slice(0, 6);
    var bulan = menentukanNamaBulan(input);
    var nama = membatasiNama15Char(input);
    var tanggalLahir = joinTanggalLahir(input);
    console.log(data);
    console.log(bulan);
    console.log(sortingTanggalLahir(input));
    console.log(tanggalLahir);
    console.log(nama);
    // return ('\n'+bulan+'\n'+tanggalLahir+'\n'+nama);
}

function editData(input) { // edit data pada array menggunakan splice()
    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    input.splice(4, 0, 'Pria', 'SMA Internasional Metro');
    input.splice(6, 1);
    var cetak = input.slice(0, 6);
    return cetak;
}

function splitTanggalLahir(input) {
    var dataArr = editData(input);
    var tanggalLahir = dataArr[3].split("/");
    return tanggalLahir;
}

function sortingTanggalLahir(input) {
    var tanggalLahir = splitTanggalLahir(input);
    var sortTangalLahir = tanggalLahir.sort(function(a, b) {return a-b});
    return sortTangalLahir;
}

function joinTanggalLahir(input) {
    var tanggalLahir = splitTanggalLahir(input);
    return tanggalLahir.join('-');
}

function menentukanNamaBulan(input) {
    var tanggalLahir = splitTanggalLahir(input);
    var bulan = tanggalLahir[1];
    switch (bulan) { // menentukan bulan dari angka
        case ('01' || '1'):
            namaBulan = 'Januari';
            break;
        case ('02' || '2'):
            namaBulan = 'Februari';
            break;
        case ('03' || '3'):
            namaBulan = 'Maret';
            break;
        case ('04' || '4'):
            namaBulan = 'April';
            break;
        case ('05' || '5'):
            namaBulan = 'Mei';
            break;
        case ('06' || '6'):
            namaBulan = 'Juni';
            break;
        case ('07' || '7'):
            namaBulan = 'Juli';
            break;
        case ('08' || '8'):
            namaBulan = 'Agustus';
            break;
        case ('09' || '9'):
            namaBulan = 'September';
            break;
        case '10':
            namaBulan = 'Oktober';
            break;
        case '11':
            namaBulan = 'November';
            break;
        case '12':
            namaBulan = 'Desember';
            break;
        default:
            namaBulan = 'Tidak ada bulan!'
    }
    return namaBulan;
}

function membatasiNama15Char(input) {
    var dataArr = editData(input);
    var nama = dataArr[1]
    return nama.slice(0, 15);
}


var array = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/08/1989', 'Membaca'];
dataHandling2(array);

// console.log(splitTanggalLahir(array));
// console.log(sortTanggalLahir(array));
// console.log(joinTanggalLahir(array));
// console.log(menentukanNamaBulan(array));
// console.log(membatasiNama15Char(array));
// console.log('\n');
// console.log(dataHandling2(array));
// console.log(editData(array));
// sortingTanggalLahir(array);


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
