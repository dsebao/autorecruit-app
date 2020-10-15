var candidatesDraggable = function () {
  //Make draggable card candidates
  $('.js-candidates-group').sortable({
    group: 'candidates',
    draggable: '.card-app',
    animation: 300
  })

  $('.js-hired-group').sortable({
    group: 'candidates',
    draggable: '.card-app',
    animation: 300
  })

  $('.js-interviewing-group').sortable({
    group: 'candidates',
    draggable: '.card-app',
    animation: 300
  });
};

var selectedJob = function () {
  $('.card-job').on('click', function () {

    var t = $(this);

    //Id for the selected job
    var idjob = t.data('id-job');

    //Selected class for the card job
    $('.card-job').removeClass('js-selected-job').addClass('js-not-selected');
    t.addClass('js-selected-job').removeClass('js-not-selected');

    /* HERE POPULATE THE CARDS FOR THE JOBS */

  })
};


(function ($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).on('resize', function () {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };

    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  candidatesDraggable();

  selectedJob();


})(jQuery); // End of use strict
