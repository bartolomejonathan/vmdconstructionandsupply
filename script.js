$(document).ready(function(){
    
    // Activate Carousel
    $("#carouselExampleIndicators").carousel({
        interval: 3000,
        pause: false, // Pause on mouse hover
        wrap: true // Enable continuous loop of slides
    });
    
    // Enable Carousel Indicators
    $(".carousel-indicators li").click(function(){
        $(".carousel-indicators li").removeClass("active");
        $(this).addClass("active");
    });
    
    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
        $("#carouselExampleIndicators").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
        $("#carouselExampleIndicators").carousel("next");
    });
    $(document).ready(function() {
        $('#carouselExampleIndicators').carousel({
            interval: true,  // Disable auto sliding
            touch: true  // Enable mouse drag
        });
    });
});

// back to top
window.onscroll = function() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Smooth scroll to top
document.getElementById('backToTopBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// contact us
$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
            dataType: 'json',
            success: function(response) {
                $('#formMessage').removeClass('text-danger').addClass('text-success').text(response.message);
                $('#contactForm')[0].reset();
            },
            error: function(response) {
                $('#formMessage').removeClass('text-success').addClass('text-danger').text(response.responseJSON.message);
            }
        });
    });
});

// home swiper
var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If pagination is needed
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});