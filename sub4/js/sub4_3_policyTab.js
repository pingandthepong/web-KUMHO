// 초기 상태
$('.policy .tab:eq(0)').addClass('on');
$('.policy .contlist:eq(0)').show();

// .tab 클릭 이벤트 핸들러
$('.tab').on('click', function(e) {
  e.preventDefault();

  $('.policy .tab').removeClass('on');
  $(this).addClass('on');
})