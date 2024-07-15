document.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    $(".owl-testimonial").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      responsiveClass: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        480: {
          items: 1,
          nav: true,
        },
        667: {
          items: 1,
          nav: true,
        },
        1000: {
          items: 1,
          nav: true,
        },
      },
    });
  });
});
