window.addEventListener('DOMContentLoaded', (event) => {
    $(".kind-container").hide();
});

$("#kinds").click(function(){
    $(".kind-container").toggle();
});          
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:6,
            nav:true,
            loop:true
        }
    }
});

$("#search").focus(function(){
    $(".search-film-list").css("display","block");
});
$("#search").blur(function(){
    $(".search-film-list").css("display","none");
});

$("#watch").click(function(){
    $("#source").toggle();
});