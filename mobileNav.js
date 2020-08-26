(function ($, window, document, undefined) {
  var state = 0; //0 = sidebar closed; 1 = sidebar open.

  $(document).ready(function () {
    $(".submenu-expand").click(function () {
      toggleSubMenu(this);
    });
    $(".submenu-expand").on("touchstart", function () {
      toggleSubMenu(this);
    });
    $(".menuToggle").click(toggleNav);
    $(".mobileDarken").click(function () {
      if (state) {
        toggleNav();
      }
    });
  });

  function toggleSubMenu(elmt) {
    let parId = $(elmt).parent().attr("id");

    //Submenu is not closed
    if ($(`#${parId} .sub-menu`).css("display") != "block") {
      //Animated version:
      // $(`#${parId} .sub-menu`).css("right", "0px").css("height", "auto");
      //Static version:
      $(`#${parId} .sub-menu`).css("display", "block");
    } else {
      //Animated version:
      //$(`#${parId} .sub-menu`).css("right", "-300px").animate({ height: 0 });
      //Static version:
      $(`#${parId} .sub-menu`).css("display", "none");
    }
  }

  function toggleNav() {
    if (state) {
      //Close menu
      $(".mobileDarken")
        .css("z-index", "-1")
        .css("opacity", "0")
        .css("cursor", "initial");
      $(".sidebar").css("right", "-300px");
      $(".menuToggle").html("Menu");
      enableScroll();
      state = 0;
    } else {
      //Open menu
      $(".mobileDarken")
        .css("z-index", "20")
        .css("opacity", "1")
        .css("cursor", "pointer");
      $(".sidebar").css("right", "0");
      $(".menuToggle").html("X");
      disableScroll();
      state = 1;
    }
  }

  //Credit: https://www.geeksforgeeks.org/how-to-disable-scrolling-temporarily-using-javascript/
  function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
      // if any scroll is attempted, set this to the previous value
      (window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      });
  }
  function enableScroll() {
    window.onscroll = function () {};
  }
})(jQuery, window, window.document);
