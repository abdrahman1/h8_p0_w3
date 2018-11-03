function groupAnimals(animals) {
    var groupAnimals = [];
    var abjad = '';
    for (var i = 0; i < animals.length; i++) {
        var currentAnimals = animals[i];
        var hurufPertama = currentAnimals[0];
        var tempIndex = -1;
        
        for (var j = 0; j < abjad.length; j++) {
            if (hurufPertama === abjad[j]) {
                tempIndex = j;
            }
        }
        
        if (tempIndex === -1) {
            abjad += hurufPertama;
            groupAnimals.push([currentAnimals]);
        } else {
            groupAnimals[tempIndex].push(currentAnimals);
        }
    }
    return groupAnimals.sort(function(a, b){return(b>a)});
}


console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
