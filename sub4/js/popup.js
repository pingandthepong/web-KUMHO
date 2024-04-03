$('.openBtn').click (function(e) {
  e.preventDefault();

  var btn = $(this).index($('.openBtn')); // 0 -1 ???

  $('.box').fadeIn('slow');
  $(this).next('.big').fadeIn('slow');

});

$('.box').click (function() {
  $(this).fadeOut('fast');
  $('.big').fadeOut('fast');
  
});