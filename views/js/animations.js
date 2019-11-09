
$(function() {
    setTimeout(function () {
        $('.sequenced.name')
        .transition({
            animation : 'fade',
            reverse   : 'false', // default setting
            duration: 3000, 
            interval  : 1000
        });
    }, 300); 
});


// $('.ui.sticky')
//   .sticky({
//     context: $(this.window)
//   }); 

$('#vision-card').on('click', function () {
    $('.ui.modal.vision')
        .modal('show'); 
})

$('#books-card').on('click', function () {
    $('.ui.modal.books')
        .modal('show'); 
})

$('#brew-card').on('click', function () {
    $('.ui.modal.brew')
        .modal('show'); 
})



