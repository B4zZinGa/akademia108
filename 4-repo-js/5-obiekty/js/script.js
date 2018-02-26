var osoba = {
    imie: 'Adam',
    nazwisko: 'Nowacki',
    wzrost: 182,
    
    wyswietlSzczegoly: function() {
        console.log( 'Osoba to: ' + this.imie + ' ' + this.nazwisko + ' ' + this.wzrost+'cm');
    }
}

console.log(osoba.imie);
console.log(osoba['nazwisko']);

osoba.wyswietlSzczegoly();

//dodanie wieku do osoby

osoba.wiek = 36;

//dodanie nowej metody

osoba.wyswietlWiek = function () {
    console.log(this.wiek);
}

osoba.wyswietlWiek();