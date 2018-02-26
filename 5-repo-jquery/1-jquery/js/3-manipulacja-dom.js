'use strict';

$(function () {
    var pobierzText = $('#second');
    console.log(pobierzText.text);

    pobierzText.text('Zmieniony Tekst');
    console.log(pobierzText.text());

    $('#first').html('<p>Nowy paragraf</p>');

    var przykladAppend = $('.paragrafnext');
    przykladAppend.append('Append text');

    var przykladAfter = $('.paragrafnext');
    przykladAfter.after('<span id=\'spanText\'> After Text </span>');


    var przykladPrepend = $('.paragrafnext');
    przykladPrepend.prepend('Prepend text |')

    var przykladBefore = $('.paragrafnext');
    przykladBefore.before('Before text |').css('color', 'red')

    var emptyPrzyklad = $('.paragrafnext');
    emptyPrzyklad.empty();

    var removePrzyklad = $('.paragrafnext');
    emptyPrzyklad.remove();

    var cytatKrystiana = 'Krystian powiedział coś mądrego';
    console.log(cytatKrystiana);

    var zmienKolor = $('#first')
    zmienKolor.css('color', 'red');
    zmienKolor.css({
        'color': 'green',
        'font-size': '4em'
    })

    var inputValue = $('#inputValue');
    inputValue.val('To jest tekst');
    console.log(inputValue.val());
    
    var drugiNaglowek = $('#second');
    drugiNaglowek.addClass('blue');
    
//    drugiNaglowek.removeClass('blue');
    
    drugiNaglowek.addClass('backgroundColor')









});
