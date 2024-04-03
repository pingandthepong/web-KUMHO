$('.contlist:first').show();
$('.tab:first').addClass('on');


$('.tab').click(function(e) {
  e.preventDefault();

  var tabInd = $(this).index('.tab');
  
  $('.tab').removeClass('on');
  $(this).addClass('on');

  $('.contlist').hide();
  $(`.contlist:eq(${tabInd})`).show();
})