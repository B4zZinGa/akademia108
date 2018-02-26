'use strict';

var zgodaPierwsza = document.getElementById('zgoda-marketingowa-1');
var zgodaDruga = document.getElementById('zgoda-marketingowa-2');
var obieZgody = document.getElementById('wszystkie-zgody');


var wszystkieCheckboxy = document.querySelectorAll('input[type=checkbox]');

var inputImie = document.getElementById('name');
var inputEmail = document.getElementById('email');

var wyslijBtn = document.getElementById('wyslij');

var wiadomosc = document.getElementById('wiadomosc');

function stanCheckboxa() {
    zgodaPierwsza.checked = this.checked;
    zgodaDruga.checked = this.checked;

    zgodaDruga.disabled = this.checked;
    zgodaPierwsza.disabled = this.checked;

    console.log(this.checked);
}

obieZgody.onchange = stanCheckboxa;

function walidacjaPol(event) {
    event.preventDefault();
    wiadomosc.innerHTML('');
    
    if (inputImie.value == '') {
        var msgImie = document.createElement('li');
        msgImie.innerHTML = 'Wpisz imię!';
        wiadomosc.appendChild(msgImie);
        event.preventDefault();

    } if (inputEmail.value == '') {
        var msgEmail = document.createElement('li');
        msgEmail.innerHTML = 'Podaj Email!';
        wiadomosc.appendChild(msgEmail);
        event.preventDefault();

    } if (zgodaPierwsza.checked == false) {
        var msgMarketing = document.createElement('li');
        msgMarketing.innerHTML = 'Kolego, zaznacz zgode na spam';
        wiadomosc.appendChild(msgMarketing);
        event.preventDefault();
    }
    

}


wyslijBtn.onclick = walidacjaPol;
