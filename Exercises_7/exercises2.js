function hitungJumlahKata(kalimat) {
    var newKalimat = [];
    var newKata = '';
    for(var i = 0; i < kalimat.length; i++){
      if(kalimat[i] != ' '){
        newKata += kalimat[i];
      } else {
        newKalimat.push(newKata);
        newKata = '';
      }
    }
    newKalimat.push(newKata);
    return newKalimat.length;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
  