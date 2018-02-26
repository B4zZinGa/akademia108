/*
var ileRazy = 30;

for (var i = 0; i < ileRazy; i++) {
    var iteracja = i + 1;
    console.log('Iteracja pętli nr ' + iteracja);
}
*/

//-----------

/*
var tablica = ['Audi', 'Opel', 'Honda', 'Mazda', 'Nissan'];

for( var i = 0; i < tablica.length; i++) {
    console.log( 'tablica! Index =' + i + ',wartość =' + tablica[i]);
}
*/

//------------

/*var tablica = ['Audi', 'Opel', 'Honda', 'Mazda', 'Nissan'];

tablica.forEach(function (elementTablicy, indexTablicy) {
    console.log('Index: ' + indexTablicy + ', wartość: ' + elementTablicy);
});*/

//-------------

/*
var tablica = ['Audi', 'Opel', 'Honda', 'Mazda', 'Nissan'];

tablica.forEach(function (elementTablicy, indexTablicy) {
    if (elementTablicy == 'Mazda') {
        console.log('Index: ' + indexTablicy + ', wartość: ' + elementTablicy);
    }
});
*/

//-------------

/*var tablica = ['Audi', 'Opel', 'Honda', 'Mazda', 'Nissan'];

for( var i = 0; i < tablica.length; i++ ) {
    if( i==2 || i==4){
        continue;
    }
    console.log( i, tablica[i]);
}*/

//-------------

/*
var iter = 0;
while( iter < 100 ) {
    console.log(iter);
    ++iter;
}
*/

//-------------

var iter = 20;
do {
    console.log(iter);
    ++iter;
} while (iter < 10);
