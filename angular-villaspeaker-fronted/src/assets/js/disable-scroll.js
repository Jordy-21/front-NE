document.addEventListener("DOMContentLoaded", function () {
  $(function () {
    $(".navbar-toggler").click(function () {
      $("body").toggleClass("noscroll");
    });
  });
});
