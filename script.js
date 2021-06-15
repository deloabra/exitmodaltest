//get city name
$.get("https://conversionfanatics.com/cf-test-task/geo-api/", (data) => {
    $("#city-name").html(data.city.toUpperCase());
});


//set up clock
var clock = $("#countdown").FlipClock(3600, {
    clockFace: 'HourCounter',
    countdown: true,
    autoStart: false
});


//set up model pop up
var _ouibounce = ouibounce(document.getElementById("ouibounce-modal"), 
{
    aggressive: true,
    timer: 0,
    callback: function(){
        clock.start();
    }
});

$("#discount-button").on("click", (event) => {
    alert("discount received");
});



