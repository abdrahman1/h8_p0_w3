function groupAnimals(animals) {
    var groupHewan = []; // untuk menampung array dari array animals
    var kamusHewan = ''; // untuk menampung abjad pertama di setiap element atau nilai di array animals
    for (var i = 0; i < animals.length; i++) {
        var currentAnimal = animals[i]; // nilai dari animal di setiap index[i] pada aray animal
        var hurufPertama = currentAnimal[0]; // abjad pertama untuk setiap animal
        var tempIndex = -1 // untuk acuan offset banding array hewan dan abjad hewan
        for (j = 0; j < kamusHewan.length; j++) {
            if (hurufPertama === kamusHewan[j]) {
                tempIndex = j;
            } 
        }
        if (tempIndex === -1) { // kondisi jika indeks sementar masih -1
            kamusHewan += hurufPertama; //menambah value kamus dengan hurufPertama
            groupHewan.push([currentAnimal]) // menambah array groupHewan dengan currentAnimal yang di set menggunakan array bukan string
        } else {
            groupHewan[tempIndex].push(currentAnimal);
        }
    }
    return groupHewan.sort(function(a, b) {return a > b});
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]