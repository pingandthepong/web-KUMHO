// 초기 상태
$('.tab_menu:eq(0) .tab').addClass('current');
$('.contlist:eq(0)').show();

// 클릭 이벤트 핸들러
$('.tab').on('click focus', function(e) {
  e.preventDefault();
  
  $('.tab_menu .tab').removeClass('current');
  $(this).addClass('current');
  
  let ind = $(this).index('.tab');
  $('.contlist').hide();
  $(`.contlist:eq(${ind})`).show();
});