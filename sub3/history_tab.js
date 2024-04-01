$('.history_contents:first').show();
$('.tab1').css({color: '#f65742',}).addClass('active');

$('.tab').click(function (e) {
  e.preventDefault();

  var hisInd = $(this).index('.tab'); // 0 1 2 3

  $(this).css({ color: '#f65742', }).addClass('active');
  $(this).parent().siblings().find('.tab').css({ color: '#c8c7c7' }).removeClass('active');
    
  // $(this).parent().siblings().find('.tab').css({
  //   color: '#c8c7c7',
  // });
  // $(this).parent().siblings().removeClass('active');
  // $(this).addClass('active');

  $('.history_contents').hide();
  $(`.history_contents${hisInd}`).show();
});