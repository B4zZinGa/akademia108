'use strict';

$(function () {

    /*    $('#first').hide(1000).show(1000);
        
        $('#second').fadeOut(2000).fadeIn(2000);
        
        $('#first').slideUp(2000).slideDown(2000);*/

    function callbackZwrotny() {
        $('#first').animate({
            'font-size': '1em',
            'margin-left': '0px'
        }, 3000);
        console.log('animacja jest super')
    };
    
    callbackZwrotny();

    $('#first').animate({
        'font-size': '54px',
        'margin-left': '250px',
        'transform': 'rotate (720deg)'
    }, 3000, callbackZwrotny);
    
    
});
