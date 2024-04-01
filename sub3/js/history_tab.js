$('.history_contents:first').show();
$('.tab1').css({color: '#f65742',}).addClass('active');

$('.tab').click(function (e) {
  e.preventDefault();

  var hisInd = $(this).index('.tab'); // 0 1 2 3

  $(this).css({ color: '#f65742', }).addClass('active');
  $(this).parent().siblings().find('.tab').css({ color: '#c8c7c7' }).removeClass('active');

  $('.history_contents').hide();
  $(`.history_contents:eq(${hisInd})`).fadeIn('fast');
});