'use strict';

function pobierzDane(e) {
    e.preventDefault();
    console.log(document.getElementsByTagName('input')[0].value);
    console.log(document.getElementsByTagName('input')[1].value);
}