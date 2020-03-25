$(window).on('load', function () {
    $('#myModal').modal('show');
});

$(window).on('load', function () {
    setTimeout(function () {
        $("#myModal").modal('hide')
    }, 3000);
});
