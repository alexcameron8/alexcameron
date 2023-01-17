var particles = Particles.init({
    selector: '.background',
    sizeVariations: 2,
    color : ["#a2aebb"],
    connectParticles : true,
});

function startStop(x) {
    if ( document.getElementById("pausePlay").classList.contains("fa-play")){
        document.getElementById("pausePlay").classList.remove('fa-play');
        document.getElementById("pausePlay").classList.add('fa-pause');
        particles.resumeAnimation();
    }else{
        document.getElementById("pausePlay").classList.remove('fa-pause');
        document.getElementById("pausePlay").classList.add('fa-play');
        particles.pauseAnimation();
    }
}
$(function() {
    var navbar = $(".navbar");
    var tabs = $(".tabs");
    var rightEffect = $(".rightEffect");
    var downArrow = $(".down-arrow");

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        
        if (scroll >= 350) {
            navbar.removeClass('navbar').addClass('navbar-alt');
            tabs.removeClass('tab').addClass('tab-alt');
            rightEffect.removeClass('rightEffect').addClass('pullUp');
            downArrow.removeClass('.down-arrow').addClass('invisible');
        } else {
            navbar.removeClass("navbar-alt",'pullUp').addClass('navbar','rightEffect');
            tabs.removeClass('tab-alt').addClass('tab');
            rightEffect.removeClass('pullUp').addClass('rightEffect');
            downArrow.removeClass('.down-arrow').addClass('invisible');
        }
    });
});

$(window).on("load", function(){
    $(".loader-wrapper").fadeOut("slow");
})

window.addEventListener('scroll', function() {
    // var section1 = document.getElementById('section1');
    // var section2 = document.getElementById('section2');
    // var section3 = document.getElementById('section3');
    // var section4 = document.getElementById('section4');
    // var section5 = document.getElementById('section5');

    // if (section1.getBoundingClientRect().top <= window.innerHeight) {
    //     section1.classList.add('visible');
    // }
    // if (section2.getBoundingClientRect().top <= window.innerHeight) {
    //     section2.classList.add('visible');
    // }
    // if (section3.getBoundingClientRect().top <= window.innerHeight) {
    //     section3.classList.add('visible');
    // }
    // if (section4.getBoundingClientRect().top <= window.innerHeight) {
    //     section4.classList.add('visible');
    // }
    // if (section5.getBoundingClientRect().top <= window.innerHeight) {
    //     section5.classList.add('visible');
    // }
});