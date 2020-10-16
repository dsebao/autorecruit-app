
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

