$('.content li:first').show();
$('.tab_menu li:first').addClass('active');
$('.tab:first').css({color: '#f65742'}).addClass('active');

$('.tab').click(function (e) {
  e.preventDefault();

  var managInd = $(this).index('.tab'); // 0 1 2 3

  $(this).parent().siblings().removeClass('active');
  $(this).parent().addClass('active');

  $(this).parent().siblings().find('.tab').css({ color: '#999' }).removeClass('active');
  $(this).css({color: '#f65742'}).addClass('active')
  
  $('.content > li').hide();
  $(`.content li:eq(${managInd})`).show();
});