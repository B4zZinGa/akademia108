'use strict';

/*var tekst = 'jakis tekst';

var paragraf = document.createElement('p');

document.getElementById('kontener').appendChild(paragraf);

paragraf.innerHTML = tekst;*/

console.log(document.getElementById('string').innerHTML);

console.log(document.getElementById('string').outerHTML);

console.log(document.getElementById('string'));


console.log(document.getElementById('string').innerText);

console.log('x');
console.log('x');

var paragraf2 = document.createElement('p');

document.body.appendChild(paragraf2);

paragraf2.innerHTML = document.getElementById('string').innerHTML;