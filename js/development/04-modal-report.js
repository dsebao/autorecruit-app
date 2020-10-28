$(function () {

    var createChartReport = function (canva) {
        var myChart = new Chart(canva, {
            responsive: true,
            type: 'line',
            data: {
                labels: [0, 100, 200, 300],
                datasets: [{
                    data: [178],
                    label: "Pecentile",
                    borderColor: "#3e95cd",
                    fill: false
                }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });
    }

    var openCandidatesModal = function () {

        $('.card-usercard').on('click', function () {
            var userid = $(this).data('id');
            var $modal = $('#modal-reportCandidates');
            var $body = $modal.find('.modal-body');

            //Create ajax call in the backend

            $.ajax({
                type: "get",
                url: "https://jsonplaceholder.typicode.com/todos/" + userid,
                dataType: "json",
                success: function (data) {
                    $body.find('.js-userid').html(data.id);
                    $body.find('.js-demo').html(data.title);
                }
            });
            $modal.modal('show');

            $modal.on('shown.bs.modal', function (event) {
                var chart = $(this).find('.modal-body canvas');
                var ctx = chart[0].getContext("2d");
                createChartReport(ctx, [12, 19, 2, 4, 3, 2]);
            })

        });
    }

    openCandidatesModal();
})