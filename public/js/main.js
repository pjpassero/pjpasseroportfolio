var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera());
    }
};

if (isMobile.iOS() || isMobile.Android()) {
   $('#forSmallScreen').addClass('w-100');
    $('.inPCard').addClass('w-100');
    $('.portfolioSection').addClass("h-auto");
};

$(function(){
    //your current click function
    $('.scroll').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top + 'px'
        },1000,'swing');
    });
    
    // if we have anchor on the url (calling from other page)
    if(window.location.hash){
        // smooth scroll to the anchor id
        $('html,body').animate({
            scrollTop:$(window.location.hash).offset().top + 'px'
            },1000,'swing');
        }
    });
