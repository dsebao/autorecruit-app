
//VALIDATE FORMS

$(function () {

    //This function will validate any form that contains the class 'needs-validation'
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

    validateForm();
});


//CANDIDATES DRAGGABLE

$(function () {

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


    candidatesDraggable();

    selectedJob();
});



//JOBS MODAL

$(function () {

    var finishEditJob = function () {
        $('.job-modal').on('click', function () {
            $(this).find('.editable-textarea').removeClass('js-editable');

            //HERE PUT THE ACTION TO SAVE THE TEXT
        });
    }

    var editabletextareaJob = function () {
        $('.job-modal .editable-textarea').on('click', function (e) {
            e.stopPropagation();
            var el = $(this);
            el.addClass('js-editable');

            //Make height of textarea
            var txta = el.find('textarea');
            txta.height(txta.prop('scrollHeight'));
        })

        $('.job-modal .editable-textarea__textarea').on('click', function (e) {
            e.stopPropagation();
        })

    }

    finishEditJob();
    editabletextareaJob();

})