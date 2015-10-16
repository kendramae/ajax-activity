"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(results) {
    var fortune = results;
    // TODO: get the fortune and show it in the #fortune-text div
    $('#fortune-text').html(fortune);
}

function getFortune() {
    $.get('/fortune', showFortune);
}


$('#get-fortune-button').on('click', getFortune);





// PART 2: SHOW WEATHER
function showWeather(results){
    var weatherData = results;
    console.log(weatherData);
    var forecast = weatherData['forecast'];
    console.log(forecast);
    $('#weather-info').html(forecast);

}


function getWeather(evt) {
    evt.preventDefault(); // when you submit the from, don't call the default action, which is to go to a new page
    var zip = $("#zipcode-field").val();
    console.log(zip);
    var constructedUrl = "/weather.json?zipcode=" + zip;
    console.log(constructedUrl);
    // TODO: request weather with that URL and show the forecast in #weather-info

    $.get(constructedUrl, showWeather);
}


$("#weather-form").on('submit', getWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


