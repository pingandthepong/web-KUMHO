$(document).on('click', '.youtube_link', function(e) {
  e.preventDefault();
  
  var ind = $(this).index('.youtube_link');
  
  $('.modal_box').fadeIn();
  $('.popup_youtube').fadeIn();
});


$('.modal_box').click(function() {

  $(this).fadeOut();
  $('.popup_youtube').hide();
})