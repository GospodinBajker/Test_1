/* Napisati program koji kreira niz od 10 elemenata popunjen nasumicnim brojevima u range-u -20 do 20. Zatim na konzolu ispisati apsolutnu sumu svih elemenata */

let niz10 = [];
let niz10_2 = [];

for (let i = 0; i<5; i++) {
    niz10[i]=Math.floor(-Math.random()*20);
}

console.log(niz10);

for (let j = 0; j<5; j++) {
    niz10_2[j]=Math.floor(Math.random()*20);
  
}

console.log(niz10_2);

niz10 = niz10.concat(niz10_2);

console.log(niz10);

let apsolutnaSuma = 0;

for (let k=0; k<niz10.length; k++) {
    apsolutnaSuma+=niz10[k];
}
console.log('Apsolutna suma je: ' + apsolutnaSuma);