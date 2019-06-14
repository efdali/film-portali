window.addEventListener('DOMContentLoaded', (event) => {
    $(".kind-container").hide();
});

$("#kinds").click(function(){
    $(".kind-container").toggle();
})                  