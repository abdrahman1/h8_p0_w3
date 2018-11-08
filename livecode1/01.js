/**
 Dalam sebuah web user diwajibkan memiliki user dan roles
 terdapat beberapa role yang tesedia dimana setiap role dapat mengakses menu yang berbeda sebgai berikut
 1) Non-member
    - Home
    - Login
 2) Author
    - Home
    - Logout
    - Create Article
    - Edit Own Article
    - Delete Own Article
  3) Editor
    - Home
    - Logout
    - Edit Article

  Buatlah program yang menampilkan user dan menu yang di akses, dengan kriteria sebagi berikut
  - jika user atau role tidak diisi maka secara otomatis memiliki roles Non-meber
  - jika user dibawah 5 karakter tampilkan pesan "Login failed"
  - jika role tidak sesuai maka tampilkan pesan "Login failed"

  Contoh 1:
  -----------------
  var user = ''
  var role = ''

  Output
  -----
  'Guest user dapat mengakses menu'
  '- Home'
  '- Login'


  Contoh 2:
  -----------------
  var user = 'Hellios'
  var role = 'Editor'

  Output
  -----
  'Hellios dapat mengakses menu'
  '- Home'
  '- Logout'
  '- Edit Article'

  Contoh 3:
  -----------------
  var user = 'Hello'
  var role = 'Editor'

  Output
  -----
  'Guest user dapat mengakses menu'
  '- Home'
  '- Logout'
  '- Edit Article'


  Contoh 4:
  -----------------
  var user = 'Hello'
  var role = 'Editors'

  Output
  -----
  'Guest user dapat mengakses menu'
  '- Home'
  '- Logout'
  '- Edit Article'

  Wajib dilengkapi dengan alghoritma atau pseudocode
 */

var user = 'wahid';
var role = 'editor';
var userLength = 5;
var pesan;

if (user.length >= 5) {
  if (role == 'Author' || role == 'author') {
    pesan = user + ', kamu adalah Author dan dapat mengakses \n-Home \n-Logout \n-Edit Article \n-Create Article \n-Edit Own Article \n-Delete Own Character';
  } else if (role == 'Editor' || role == 'editor') {
    pesan = user + ', kamu adalah Editor dan dapat mengakses \n-Home \n-Logout \n-Edit Article';
  } else {
    pesan = 'anda non member, hanya dapat mengakses \n-home \n-logout';
  }
  console.log(pesan);

} else {
  console.log('login failed; panjang karaketer kurang dari lima');
}

/**
 * PSEUDOCODE
 * 
 * STORE 'user' with ''
 * STORE 'role' with ''
 * STORE 'pesan' without value
 * IF jumlah karakter dari 'user' kurang dari sama dengan lima  
 *  IF 'role' author
 *    SET 'pesan' dengan 'user' dan 'string: isi pesan untuk author'
 *  IF 'role' editor 
 *    SET 'pesan' dengan 'user' dan 'string: isi pesan untuk editor'
 *  ELSE 
 *    SET 'pesan' dengan 'user' dan 'string: isi pesan untuk selain editor dan author'
 * DISPLAY 'pesan'
 * ESLE
 *  DISPLAY 'string: login failer'
 */