

convert.$(document).ready(function(){

convert.$("body").prepend(`

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.7/flipclock.css" integrity="sha512-UWqafCfAKZVD24WgqPnyBy7BM3hZ5UWRDZt7tE36saC7zu1wLUDNoafWVBhzUzP9wVQLhebfmJcnXVjkern/fQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<div id="ouibounce-modal" style="position: absolute;background-color: white;display: none;z-index: 100;left: 50%;width: 800px;transform: translate(-50%, 10%);box-shadow: 0 0 5px;">
<h2 id="city-text" class="modal-text" style="font-family: 'Lato', sans-serif;text-align: center;font-size: 30px;">WAIT! SPECIAL OFFER FOR <span id="city-name" style="color: red;">[CITY]</span> RESIDENTS...</h2>

<h1 id="instant-discount-text" class="modal-text" style="font-family: 'Lato', sans-serif;text-align: center;padding: 0 50px;font-weight: bold;font-size: 50px;">Claim your instant discount before the timer runs out!</h1>

<div class="countdown-wrapper">
    <div id="countdown" class="countdown" style="margin: 50px 0;transform: translateX(165px);"></div>
</div>

<button id="discount-button" style="background-color: red;color: white;font-family: 'Lato', sans-serif;font-size: 50px;border-radius: 15px;border: 1px solid black;padding: 30px;margin-bottom: 30px;transform: translateX(157px);">
    CLAIM DISCOUNT
</button>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<!-- ouibounce -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/ouibounce/0.0.12/ouibounce.js" integrity="sha512-jBbXdclmLsEjHr6brYhQEf22JqtYDPyUV4gl8AJ9u5HL1burqhMFD4x1gt3HF4alYm6uq5ujYFDTQ78743lyZw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<!-- flipclock -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.7/flipclock.js" integrity="sha512-PiEkdaTz2C1Qrzfq2lrwS1LlWjgimOCkRl8RyskvunVule2uwFdbQAKyrzPF7Xs325ciHKGOijEXoKIHsh0xKA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

`);

 
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
        sensitivity: 40,
        timer: 0,
        callback: function(){
            clock.start();
        }
    });
    
    $("#discount-button").on("click", (event) => {
        alert("discount received");
    });
});