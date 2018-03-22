$(document).ready(function(){
    $("#myCarousel").carousel({interval: 3000});

    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
});