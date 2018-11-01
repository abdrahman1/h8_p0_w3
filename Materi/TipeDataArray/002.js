/**
 * Array Built-in function 
 */

var animalsArray = ["lion", "horse"];
animalsArray.push("duck"); // menambah 1 nilai ke array bagian paling belakang
console.log(animalsArray); // ["lion", "horese", "duck"]
animalsArray.pop(); // menghapus 1 nilai array terbelakang
console.log(animalsArray); // ["lion", "horse"]
animalsArray.unshift("dog");
console.log(animalsArray); // ["dog","lion", "horse"]
animalsArray.shift();
console.log(animalsArray); // ["lion", "horse"]
animalsArray.sort();
console.log(animalsArray); // ["horse", "lion"]
console.log(animalsArray.join(" and ")); // "horse and lion"

