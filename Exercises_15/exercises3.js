function groupAnimals(animals) {
    var hasil = [];
    var kamusHewan = '';

    for (var i = 0; i <animals.length; i++){
        var currentAnimal = animals[i]
        var hurufPertama = currentAnimal[0]
        var indeksSementara = -1
        for (var j = 0; j<kamusHewan.length; j++){
            if(kamusHewan[j]===hurufPertama) {
                indeksSementara = j
            }
        }
        if (indeksSementara === -1) {
            kamusHewan += hurufPertama
            hasil.push([currentAnimal])
        } else {
            hasil[indeksSementara].push(currentAnimal)
        }

    }
    return hasil.sort(function(a,b){return a > b})
    
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]