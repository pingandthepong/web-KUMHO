// 초기 상태
$('.tabs .tab:eq(0)').addClass('on');
$('.tabs .contlist:eq(0)').show();

// .tab 클릭시 addClass('on')
$('.tab').on('click', function(e) {
  e.preventDefault();
  $('.tab').removeClass('on');
  $(this).addClass('on');
})

