$(document).ready(function() {
    $('.light').click(function() {
        $('body').removeClass('bg').addClass("bglight")
        $('#collapsibleNavbar').removeClass("bg-dark").addClass("navclr")
        $('.imm').removeClass('img1').addClass("img2")
        $('.n1').removeClass('name').addClass('n2')
        $('.navbar').removeClass('navbar-dark bg-dark').addClass('navbar-light navclr')
        $('.abt').removeClass('bg-dark').addClass('bg-light')
        $('.imm1').removeClass('imgabt').addClass("imgabt1")
    });
    $('.dark').click(function() {
        $('body').removeClass("bglight").addClass('bg')
        $('#collapsibleNavbar').addClass("bg-dark").removeClass("navclr")
        $('.n1').addClass('name').removeClass('n2')
        $('.imm').removeClass('img2').addClass("img1")
        $('.navbar').addClass('navbar-dark bg-dark').removeClass('bg-light navbar-light')
        $('.abt').addClass('bg-dark').removeClass('bg-light')
        $('.imm1').addClass('imgabt').removeClass("imgabt1")

    });
    $('.pt-trigger').click(function() {
        $('#home').fadeIn(1000);
        $('#aboutme').hide("slow");
        $('#resume').hide("slow");
        $('#portfolio').hide("slow");
        $('#contact').hide("slow");
    });
    $('.pt-trigger2').click(function() {
        $('#home').hide("slow");
        $('#aboutme').fadeIn(1000);
        $('#resume').hide("slow");
        $('#portfolio').hide("slow");
        $('#contact').hide("slow");
    });
    $('.pt-trigger3').click(function() {
        $('#home').hide("slow");
        $('#aboutme').hide("slow");
        $('#resume').fadeIn(1000);
        $('#portfolio').hide("slow");
        $('#contact').hide("slow");
    });
    $('.pt-trigger4').click(function() {
        $('#home').hide("slow");
        $('#aboutme').hide("slow");
        $('#resume').hide("slow");
        $('#portfolio').fadeIn(1000);
        $('#contact').hide("slow");
    });
    $('.pt-trigger5').click(function() {
        $('#home').hide("slow");
        $('#aboutme').hide("slow");
        $('#resume').hide("slow");
        $('#portfolio').hide("slow");
        $('#contact').fadeIn(1000);
        $('.collapsibleNavbar').fadeOut("slow");
    });
});