$(document).ready(function (){
    var eMenu  = $('#menu'),
        menuBtn = $(".navbar-toggle");

    menuBtn.click(function (){
        if(eMenu.hasClass('on')){
            eMenu.removeClass('on');
        }else{
            eMenu.addClass('on');
        }
    })

})