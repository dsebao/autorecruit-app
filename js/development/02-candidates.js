

//CANDIDATES

$(function () {

    var changeInitials = function () {
        $('.initials').each(function (i) {
            var el = $(this);
            var initials = el.text().match(/\b\w/g) || [];
            initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
            el.text(initials);
        })
    }

    //Change username to initials
    changeInitials();

    var scoreGraph = function () {
        $('.card-score').each(function (i) {
            var el = $(this);
            var data = el.data('value');
            var svg = el.find('svg circle');
            var w = svg.css('stroke-dasharray', data + ' 100');
        })
    }

    //This function trigger the chart donnut values to the svg
    scoreGraph();

    var candidatesDraggable = function () {
        //Make draggable card candidates
        $('.js-candidates-group').sortable({
            group: 'candidates',
            draggable: '.card-app',
            animation: 300,

            onSort: function (event) {
                console.log('Position: ' + event.newIndex);
                var to = event.to;
                console.log(to);
            },
        })

        $('.js-hired-group').sortable({
            group: 'candidates',
            draggable: '.card-app',
            animation: 300,
            onSort: function (event) {
                console.log('Position: ' + event.newIndex);
                var to = event.to;
                console.log(to);
            },
        })

        $('.js-interviewing-group').sortable({
            group: 'candidates',
            draggable: '.card-app',
            animation: 300,
            onSort: function (event) {
                console.log('Position: ' + event.newIndex);
                var to = event.to;
                console.log(to);
            },
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

        })
    };

    candidatesDraggable();

    selectedJob();
});

