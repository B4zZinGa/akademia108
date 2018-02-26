'use strict';

var mainHeader = document.getElementById('main-header');

mainHeader.innerText = 'Treść nagłówka';

mainHeader.outerHTML = '<p> Kurwa mac </p>'

var link = document.getElementsByClassName('link')[0];

link.href = 'http://akademia108.pl';

link.className = 'nowa-klasa';

link.classList.add('nowa-nowa-klasa');

link.style.color = 'yellow'