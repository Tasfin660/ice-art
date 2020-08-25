$(document).ready(function () {

    //Scrool on link
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    $('.js--wp--feature-box').waypoint(function () {
        $('.js--wp--feature-box').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '70%'
    });

    $('.js--wp--arrow').waypoint(function () {
        $('.js--wp--arrow').addClass('animate__animated animate__bounceInLeft');
    }, {
        offset: '80%'
    });


    var checked_val = "null";
    $(".commitment-1").on("click", function () {
        if ($(this).val() == checked_val) {
            $('input[name=commitment--1][value=null]').prop("checked", true);
            checked_val = "null";
        } else {
            checked_val = $(this).val();
            $('input[name=commitment--1][value=null]').propRemove("checked");
        }
    });

    var checked_val = "null";
    $(".commitment-2").on("click", function () {
        if ($(this).val() == checked_val) {
            $('input[name=commitment--2][value=null]').prop("checked", true);
            checked_val = "null";
        } else {
            checked_val = $(this).val();
            $('input[name=commitment--2][value=null]').propRemove("checked");
        }
    });
   
});