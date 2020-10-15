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

var validateForm = function () {
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
};


(function ($) {
  "use strict"; // Start of use strict

  candidatesDraggable();

  selectedJob();

  validateForm();

})(jQuery); // End of use strict
