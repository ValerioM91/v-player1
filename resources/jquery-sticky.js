//////////////////////
// STICKY NAV
$(document).ready(function () {
  /* sticky nav */
  $(".js--section__articles").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
        $(".nav__icon")
          .removeClass("ion-close-round")
          .addClass("ion-navicon-round");
        $(".navbar__nav").removeClass("open");
        $(".nav--overlay").addClass("hidden");
      }
    },
    {
      offset: "52px;",
    }
  );
});
