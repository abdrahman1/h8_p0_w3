/**
Buatlah sebuah algoritma untuk kasus berikut:
Seorang pengajar sedang memeriksa ujian mahasiswa dan akan memberikan desc nilai dari A-E dengan ketentuan sebagai berikut:
 - Nilai 80 - 100: A
 - Nilai 65 - 79: B
 - Nilai 50 - 64: C
 - Nilai 35 - 49: D
 - Nilai 0 - 34: E
 Tampilkan desc nilai dan nama siswa saat pengajar tersebut memasukkan nilai dan nama yang dia inginkan.
NOTED:
Jika nilai mahasiswa kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
**/

/**
 * PSEUDOCODE
 * 
 * STORE 'nilai' with ''
 * STORE 'nama' with ''
 * SET 'desc'
 * SET 'ketNilai'
 * IF 'nilai' lebih dari sama dengan 80 dan 100
 *  SET 'ketNilai' dengan 'string: mendapatkan nilai A'
 * IF 'nilai' lebih dari ssma dengan 65 dna 79 
 *  SET 'ketNilai' dengan 'string: mendapatkan nilai B'
 * IF 'nilai' lebih dari sama dengan 50 dan 64
 *  SET 'ketNilai' dengan 'string: mendapatkan nilai C'
 * IF 'nilai' lebih dari sama dengan 35 dan 49
 *  SET 'ketNilai' dengan 'string: mendapatkan nilai D'
 * IF 'nilai lebih dari sama dengan 0 dan 34 
 *  SET 'ketNilai' dengan 'string: mendapatkan nilai E'
 * ELSE
 *  SET 'ketNilai' dengan 'String: nilai invalid'
 * SET 'desc' dengan 'nama' ditambah 'string: spasi' ditambah 'ketNilai'
 * DISPLAY 'desc' 
 */

var nama = 'Usman';
var nilai = 64;
var desc;
var ketNilai;
if (nilai >= 80 && nilai <= 100) {
    ketNilai = 'mendapatkan nilai A';
} else if (nilai >= 65 && nilai <= 79) {
    ketNilai = 'mendapatkan nilai B';
} else if (nilai >= 50 && nilai <= 64) {
    ketNilai = 'mendapatkan nilai C';
} else if (nilai >= 35 && nilai <= 49) {
    ketNilai = 'mendapatkan nilai D';
} else if (nilai >= 0 && nilai <= 34) {
    ketNilai = 'mendapatkan nilai E';
} else {
    ketNilai = 'nilai invalid';
}
desc = nama + ' ' + ketNilai;
console.log(desc);