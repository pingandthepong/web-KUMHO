$('.contlist:eq(0)').show();
$('.tab_menu li:eq(0)').addClass('on');
$('.tab:eq(0)').addClass('on');

$('.tab').click(function (e) {
  e.preventDefault();

  var manageInd = $(this).index('.tab');

  $('.tab_menu li').removeClass('on');
  $(this).parent('li').addClass('on');

  $('.tab').removeClass('on');
  $(this).addClass('on');

  $('.contlist').hide();
  $(`.contlist:eq(${manageInd})`).show();
});