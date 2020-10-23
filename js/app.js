//Jquery plugin for markdown
jQuery.fn.parseAsMarkdown = function (window, jQuery) {
    jQuery = $;
    var text = $(this).val();
    var newval;
    text = text.split('\n');

    // console.log( text )

    for (var i = 0; i < text.length; i++) {

        var line = text[i];

        if (line.match(/#/)) {
            newval = line.replace(/^#/, '');
            text[i] = '<h1>' + newval + '</h1>';
        }
        if (line.match(/##/)) {
            newval = line.replace(/^##/, '');
            text[i] = '<h2>' + newval + '</h2>';
        }
        if (line.match(/###/)) {
            newval = line.replace(/^###/, '');
            text[i] = '<h2>' + newval + '</h2>';
        }
        if (line.match(/-\s/)) {
            newval = line;
            if (!text[i - 1].match(/-/)) {
                text[i] = '<ul><li>' + newval + '</li>';
            } else if (!text[i + 1].match(/-/)) {
                text[i] = '<li>' + newval + '</li></ul>';
            } else {
                text[i] = '<li>' + newval + '</li>';
            }
        }

    }
    // remove dashs from list items
    for (var i = 0; i < text.length; i++) {
        if (text[i].match(/<li>/)) {
            text[i] = text[i].replace('-', '');
        }
    }
    // Add spaces back
    for (var i = 0; i < text.length; i++) {

        var prev, next;
        // console.log( typeof(text[i-1]) )
        if (typeof (text[i - 1]) !== 'undefined') {
            prev = text[i - 1].match(/</) && text[i - 1].match('<h');
        } else {
            prev = true;
        }
        if (typeof (text[i + 1]) !== 'undefined') {
            next = text[i + 1].match(/</);
        } else {
            next = true;
        }

        if (!text[i].match('<') && (!prev || !next)) {
            text[i] = text[i] + '<br>';
        }
    }
    return text.join('\n');
}


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
            var wrap = $(this).find('.editable-textarea');
            wrap.removeClass('js-editable');

            var txta = wrap.find('.editable-textarea__textarea');

            var preview = wrap.find('.editable-textarea__preview');
            preview.html(txta.parseAsMarkdown());

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