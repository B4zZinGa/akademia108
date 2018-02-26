'use strict';

var paragrafy = document.getElementsByTagName('p');

function ustawTlo() {
    paragrafy[0].style.backgroundColor = "red";
    paragrafy[1].style.backgroundColor = "yellow";
}

document.getElementsByTagName('button')[0].onclick = ustawTlo;