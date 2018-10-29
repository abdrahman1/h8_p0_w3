/**
 * 
 */


var vacationSpots = ['jakarta', 'bangkok', 'manila'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

for (var i = 0; i < vacationSpots.length; i++) {
    console.log('I would love to visit '+vacationSpots[i]);
}

for (var i = vacationSpots.length - 1; i >= 0; i--) {
    console.log('I would love to visit ' + vacationSpots[i]);
}