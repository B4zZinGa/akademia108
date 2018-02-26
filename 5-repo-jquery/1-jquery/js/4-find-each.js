'use strict';
 
$(function() {
//    $('body').find('p.paragraf').css('backgroundColor', 'red');
    
    var paragrafy = $('.paragraf');
//    paragrafy.css('backgroundColor', 'blue');
//    console.log(paragrafy);
    
    var pobranyPoEq = paragrafy.eq(1).css('color)', 'red');
    console.log(pobranyPoEq);
    
    paragrafy.eq(1).css('color', 'red');
    
    
    $('.paragraf').each(function(index, element) {
//        console.log('Element: '+ element, index)
        if (index !=0) {
            $(this).css('backgroundColor', 'purple');
            
        }
    })
    

});