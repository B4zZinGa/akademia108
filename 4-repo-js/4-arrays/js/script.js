//LICZY OD ZERA


var imiona = ['Paweł', 'Krzysztof', 'Kasia', 'Nicole', 'Kamil'];

//console.log(imiona[2]);      //tu wyświetliło kasie

/*console.log(imiona);

imiona[5] = 'Monika';
imiona[6] = 'Marcin';

console.log(imiona); */

//push dodaje elemnt na końcu tablicy i z automatu przypisze kolejny indeks

/*imiona.push('Mikołaj');
console.log(imiona);*/

//pop usuwa ostatni element z tablicy

imiona.pop();
console.log(imiona);

var usunietyElement = imiona.pop();
console.log(usunietyElement);

//wstawienie elementu na początku tablicy

imiona.unshift('Kajetan');
console.log(imiona);

//usuwanie pierwszego elementu z tablicy

imiona.shift();
console.log(imiona);

// sprawdzenie długości tablicy

console.log(imiona.length);

// metoda join - rozbijanie tablicy na ciąg tekstowy

var tablicaJakoTekst = imiona.join("--");
console.log(tablicaJakoTekst);

//revers - odwraca kolejnosc elemntów tablicy

var imionaReverse = imiona.reverse();
console.log(imionaReverse);

// sort- sortuje tablice

var posortowana = imiona.sort();
console.log(posortowana)