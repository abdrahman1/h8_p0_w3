/**
 * String pada JavaScript
 */

// More About String
var title = 'Your Name';
console.log(title[0]);

console.log(title[title.length-1]);

title[0] = 'T'; // tidak ada perubahan
console.log(title[0]);

title = 'My name'; // ada perubahan karen assign keseluruhan string
title = title + ' is Bento';
console.log(title); // 'My name is Bento'

// String Properties
var name = 'Uvuvwevwevwe Onyetenyevwe Ugwemubwem Ossas';
console.log(name.length + '\n'); // 42 

// String Methods
// .chartAt([indeks])
console.log('I am a string'.charAt(3) + '\n'); // 'm'

// .concat([string])
var string1 = 'good';
var string2 = 'luck';
console.log(string1.concat(string2) + '\n'); // goodluck

// .indexOf([strubg/karakter])
var text = 'dung dung ces!';
console.log(text.indexOf('dung')); // 0
console.log(text.indexOf('u')); // 1
console.log(text.indexOf('jreng')+'\n'); // -1

// .substr
var car1 = 'Lykan Hypersport';
var car2 = car1.substr();
console.log(car2); // Hypersport
var car3 = car1.substr(6, 5);
console.log(car3 + '\n');

// .toUpperCase()
var letter = 'This Letter Is For You';
var upper = letter.toUpperCase();
console.log(upper);

// .toLowerCase()
var letter = 'This Letter Is For You';
var lower = letter.toLowerCase();
console.log(lower + '\n');

// .trim
var username = ' administrator ';
var newUsername = username.trim(); // 'newUsernama = 'administrator'
console.log(username);
console.log(newUsername + '\n');