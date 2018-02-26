'use strict';

window.addEventListener('scroll', function () {

    var y = window.pageYOffset;
    var headerHeight = document.getElementById('main-header').offsetHeight;
    var navHeight = document.getElementById('main-nav');

    if (y >= navHeight) {
        document.getElementById('main-nav').classList.add('transparent')
    } else {
        document.getElementById('main-nav').classList.remove('transparent');
    }

    if (y >= headerHeight / 2) {
        var bgPos = (y / 5);

        document.getElementById('background').style.backgroundPosition = '0 ' + bgPos + 'px' ;
    }

});
