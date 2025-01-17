
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