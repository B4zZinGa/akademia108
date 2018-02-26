/*
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.sin(20));
console.log(Math.pow(4,2));
console.log(Math.random());
//zaokrągla w góre do całkowitej
console.log(Math.ceil(1.75)); 
//zaokrąga w dół do całkowitej
console.log(Math.floor(1.75));
console.log(Math.round(1.5));
*/


//-----------------
//operatory

//var x = 4;
//var y = 5;

/*console.log(x*y);
console.log(x/y);
console.log(x+y);
console.log(x-y);
console.log(x%y);*/

//-------------------

/*x++;
console.log(x)

y--;
console.log(y);

console.log(x++) //tu plusy dodają 1 po wyswietleniu x

console.log(x) // tu juz ++ są brane pod uwage ponieważ zostały dodane

console.log(--y)*/

//------------------

/*x +=2;
console.log(x);

x -=2;
console.log(x);

x *=2;
console.log(x);

x /=2;
console.log(x);

x %=2;
console.log(x);*/

//-------------------

/*var wynik = (x >= y) ? 'x jest większy od y' : 'x jest mniejszy od y';

console.log(wynik)*/

//--------------------

//var pietro = 14;
//
//if (x > y && pietro == 14) {
//    console.log('Spełnione zostały dwa warunki, także TRUE');
//}
//
//if (x > y || pietro == 14) {
//    console.log('Spełnione zostały dwa warunki, także TRUE');
//}
//
//if (x == y) {
//    console.log('Liczby są równe');
//} else if (x < y) {
//    console.log('x mniejszy od y');
//} else if (x == 'smog') {
//    console.log('liczba równa się smog');
//} else {
//    console.log('żadna opcja nie dziala idź spać');
//}

//-----------------------

var grupa = 24;

switch (grupa) {
    case 10:
        console.log('Liczba osób w grupie = 10');
        break;
    case 14:
        console.log('Liczba osób w grupie = 14');
        break;
    case 18:
        console.log('Liczba osób w grupie = 18');
        break;
    case 22:
        console.log('Liczba osób w grupie = 22');
        break;
    default:
        console.log('Do spania gnoju');
}
