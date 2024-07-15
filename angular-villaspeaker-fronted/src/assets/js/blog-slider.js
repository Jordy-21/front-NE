document.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    $(".owl-two").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      responsiveClass: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        480: {
          items: 1,
          nav: false,
        },
        667: {
          items: 2,
          nav: false,
        },
        992: {
          items: 3,
          nav: false,
        },
      },
    });
  });
});
