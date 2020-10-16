
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