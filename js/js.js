$(document).ready(function() {
    $('.menu__icon').click(function(event){
        $('.menu__icon,.menu__leftpart,.menu__center,.menu__rightpart,.menu__content,.menu__center,.content').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
