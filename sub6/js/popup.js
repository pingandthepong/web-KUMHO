$('.openBtn').click (function(e) {
  e.preventDefault();

  // var btn = $(this).index($('.openBtn')); // 0 -1 
  var btn = $(this).parent().index(); // 0 1
  console.log(btn);

  $('.box').fadeIn('slow');
  $(this).next('.big').fadeIn('slow');

});

$('.box').click (function() {
  $(this).fadeOut('fast');
  $('.big').fadeOut('fast');
  
});