$.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function (data) {
    'use strict';
    console.log(data);
    
    console.log(data.userId);
});
