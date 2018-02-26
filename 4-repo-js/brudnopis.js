/*var tablica = [1, 2, 3, 4, 5, 6];

function licz() {
    var suma = 0;
    var iloczyn = 1;
    for (var i = 0; i < tablica.length; i++) {
        suma = suma + tablica[i];
        iloczyn = iloczyn * tablica[i];
    }
    console.log(suma);
    console.log(iloczyn);
}

licz();*/

var tablicax = [2, 2, 3, 4, 5, 6];

function liczx() {
    var suma = 0;
    var iloczyn = 1;
    tablicax.forEach(function (n) {
        suma = suma + n;
        iloczyn = iloczyn * n;
    })
    console.log(suma);
    console.log(iloczyn);
}

liczx();
