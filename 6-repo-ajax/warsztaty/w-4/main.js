'use strict';

function porownanie () {

var buyArrow = $('#buy-arrow');
var currentBuyPrice = parseFloat($('#buy').html());

var sellArrow = $('#sell-arrow');
var currentSellPrice = parseFloat($('#sell').html());


$.getJSON('https://blockchain.info/pl/ticker', function (data) {
    console.log(data.PLN.buy);
    console.log(data.PLN.sell);

    $('#buy').html('  ' + data.PLN.buy + ' ' + data.PLN.symbol);
    $('#sell').html('  ' + data.PLN.sell + ' ' + data.PLN.symbol);

    if (currentBuyPrice > parseFloat(data.PLN.buy)) {
        buyArrow.removeAttr('class').addClass('fa fa-arrow-down');
    } else if (currentBuyPrice < parseFloat(data.PLN.buy)) {
        buyArrow.removeAttr('class').addClass('fa fa-arrow-up');
    } else {
        buyArrow.removeAttr('class').addClass('fa fa-minus-square-o');
    }

    if (currentSellPrice > parseFloat(data.PLN.sell)) {
        sellArrow.removeAttr('class').addClass('fa fa-arrow-down');
    } else if (currentBuyPrice < parseFloat(data.PLN.sell)) {
        sellArrow.removeAttr('class').addClass('fa fa-arrow-up');
    } else {
        sellArrow.removeAttr('class').addClass('fa fa-minus-square-o');
    }

});

    console.log('odświeżono');
    
}

porownanie();



var czasOdswiezania = setInterval(porownanie, 5000);
var czasOdswiezania15 = setInterval(porownanie, 5000);
var czasOdswiezania1 = setInterval(porownanie, 5000);
var czasOdswiezania1 = setInterval(porownanie, 5000);

$('#5sec').on('click', function(){
   clearInterval(czasOdswiezania);
    setInterval(porownanie, 5000);
});
$('#15sec').on('click', function(){
   clearInterval(czasOdswiezania);
    setInterval(porownanie, 15000);                   // to jeszcze nie działa
});
$('#30sec').on('click', function(){
   clearInterval(czasOdswiezania);
    setInterval(porownanie, 30000);
});
$('#60sec').on('click', function(){
   clearInterval(czasOdswiezania);
    setInterval(porownanie, 60000);
});






