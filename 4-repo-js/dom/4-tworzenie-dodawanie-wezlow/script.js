'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[3];

var paragraf = document.createElement('p');

console.log(paragraf);

var textParagraf = document.createTextNode('To  jest nowy paragraf');

paragraf.appendChild(textParagraf); // dodaje textP do paragrafu

istniejacyWezel.appendChild(paragraf);

istniejacyWezel.removeChild(paragraf);

var parFirstDiv = document.getElementById('parFirst');
parFirstDiv.replaceChild(paragraf, istniejacyWezel);

var allLinks = document.getElementsByTagName('a');

console.log(allLinks);

for (var i = 0; i < allLinks.length; i++) {
    var br = document.createElement('br');
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);
    
    allLinks[i].removeAttribute('class');
}