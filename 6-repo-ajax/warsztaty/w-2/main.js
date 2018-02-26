'use strict';

$(function () {

    $('button').on('click', function () {
        $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function (data) {
            console.log(data);

            $('body').append('<p>' + 'ID użytkownika: ' + '<br>' + '<br>' + data.userId + '</p>').find('p').first('p').css('color', 'blue');
            $('body').append('<p>' + 'Nazwa użytkownika: ' + '<br>' + '<br>' + data.userName + '</p>').find('p:nth(1)').css('color', 'green');;
            $('body').append('<p>' + 'Adres internetowy użytkownika: ' + '<br>' + '<br>' + 'http://' + data.userURL + '</p>').find('p').last('p').css('color', 'orange');
            
            //wybranie p z body i nadanie koloru
            
//            $('body p:nth(1)').css('color', 'red');
            
        })


    });


});
