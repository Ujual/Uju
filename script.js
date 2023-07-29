$(document).ready(function() {
    $('.light').click(function() {
        $('body').removeClass('bg').addClass("bglight")
        $('#collapsibleNavbar').removeClass("bg-dark").addClass("navclr")
        $('.img-thumbnail').removeClass('img1').addClass("img2")
        $('.n1').removeClass('name').addClass('n2')
        $('.navbar').removeClass('navbar-dark bg-dark').addClass('navbar-light navclr')
    });
    $('.dark').click(function() {
        $('body').removeClass("bglight").addClass('bg')
        $('#collapsibleNavbar').addClass("bg-dark").removeClass("navclr")
        $('.n1').addClass('name').removeClass('n2')
        $('.img-thumbnail').removeClass('img2').addClass("img1")
        $('.navbar').addClass('navbar-dark bg-dark').removeClass('bg-light navbar-light')
    });
});