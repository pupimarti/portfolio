$(document).ready(function(){
    var elemento = document.getElementsByClassName("content-bar");
    if($(this).scrollTop() > 0){
        elemento[0].classList.add('content-bar-min');
    }
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            elemento[0].classList.add('content-bar-min');
        }else{
            elemento[0].classList.remove('content-bar-min');
        }
    })
});