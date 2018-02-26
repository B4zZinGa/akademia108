//funkcja bez parametrów



/*
var imie = "Adam";  // zmienna globalna widoczna wszędzie

function zmiennaLokalna() {
    var imieLokalna = "Zmienna lokalna Adam"; // zmienna lokalna widoczna tylko w funkcji
    var nazwiskoLokalna = "Zmienna lokalna widoczna tylko w funkcji";
console.log(nazwiskoLokalna);
}

zmiennaLokalna();
console.log(imie);
*/


//-----------------------------------------------


/*
function obliczWynik() {
    var wynik = 5 * 5 * 10;
    return wynik;
}

var rezultatObliczen = obliczWynik();
console.log(rezultatObliczen);
*/




//-----------------------------------------------------

function obliczWynik(parametr1, parametr2, parametr3) {
    var wynik = parametr1 * parametr2 * parametr3
    return wynik;
}

var rezultatObliczen1 = obliczWynik( 20, 10, 3)
console.log(rezultatObliczen1);

var rezultatObliczen2 = obliczWynik( 20, 0, 3)
console.log(rezultatObliczen2);

var rezultatObliczen3 = obliczWynik( 10, 10, 1)
console.log(rezultatObliczen3);