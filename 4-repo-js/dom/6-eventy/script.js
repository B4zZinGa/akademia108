'use strict';

var secondLink = document.getElementsByTagName('a')[1];

function alarm(e) {
    e.preventDefault();
    console.log('kliknięto kolejny link');

    console.log(e.type);
}

//secondLink.onclick = alarm;

var thirdLink = document.getElementsByTagName('a')[2];
thirdLink.addEventListener('click', alarm);

//thirdLink.onclick = !alarm;   // też działa

thirdLink.removeEventListener('click', alarm);

var mainHeader = document.getElementById('main-header')

function resize(e) {
    if (e.type == 'mouseover') {
        mainHeader.style.fontSize = '70px';
    } else {
        mainHeader.style.fontSize = 'inherit';
    }
}

mainHeader.onmouseover = resize;
mainHeader.onmouseout = resize;

//-----------------------------------------------------------

function klikHeader () {
    console.log('kliknąłeś w header');
}

document.getElementsByTagName('header')[0].onclick = klikHeader;

function klikH1(e) {
    e.stopPropagation();
    console.log('kliknąłeś w h1');
}

document.getElementsByTagName('h1')[0].onclick = klikH1;