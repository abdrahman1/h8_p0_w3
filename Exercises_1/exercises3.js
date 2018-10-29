var myPlace = ['Hongkong', 'Tokyo', 'barcelona'];
var friendPlaces = ['Hongkong', 'Hawai', 'Guam'];

for (var i=0; i<myPlace.length; i++) {
    console.log(i + '. '+myPlace[i]);
    for (var j = 0; j<friendPlaces.length; j++) {
        console.log('\t'+friendPlaces[j]);
        if (myPlace[i] === friendPlaces[j]) {
            console.log('\tMatch: '+myPlace[i]);
        }
    }
}