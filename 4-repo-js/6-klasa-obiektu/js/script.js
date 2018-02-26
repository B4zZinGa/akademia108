class Ogloszenie {
    constructor( tytul, opis, kontakt, cena) {
        this.tytul = tytul;
        this.opis = opis;
        this.kontakt = kontakt;
        this.cena = cena;
    }
    
    wyswietlOgloszenie () {                 // to jest metoda
        console.log( 'Ogłoszenie! Tytuł: ' + this.tytul + ' Opis; ' + this.opis + ' Kontakt: ' + this.kontakt + ' Cena: ' + this.cena);
    }
}


var ogloszenie1 = new Ogloszenie( 'Sprzedam Opla', 'Nowiutki, pachnący, nic nie stuka nic nie puka', '998898985', 52254);
ogloszenie1.wyswietlOgloszenie();

console.log(typeof ogloszenie1);