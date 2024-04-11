// 초기 상태
$('.policy .tab:eq(1)').addClass('on');
$('.policy .contlist:eq(0)').hide();
$('.policy .contlist:eq(1)').show();

// .tab 클릭 이벤트 핸들러
$('.tab').on('click', function(e) {
  e.preventDefault();

  $('.policy .tab').removeClass('on');
  $(this).addClass('on');

  var ind = $(this).index('.tab');

  $('.policy .contlist').hide();
  $(`.policy .contlist:eq(${ind})`).show();
});


// img 클릭 시 .darkbg
$('.openBtn').on('click', function(e) {
  e.preventDefault();

  $('.darkbg').fadeIn('slow');
  $(this).next('.big').fadeIn('slow');

})

$('.darkbg').click(function() {
  $(this).fadeOut('fast');
  $('.big').fadeOut('fast');
})