// 초기 상태
$('.policy .tab:eq(0)').addClass('on');
$('.policy .contlist:eq(0)').show();

// .tab 클릭 이벤트 핸들러
$('.tab').on('click', function(e) {
  e.preventDefault();

  $('.policy .tab').removeClass('on');
  $(this).addClass('on');

  var ind = $(this).index('.tab');

  $('.policy .contlist').hide();
  $(`.policy .contlist:eq(${ind})`).show();
});

// 스크롤 시 visual_img 너비 조정
$(window).on('scroll', function() {
  var wScroll = $(window).scrollTop();
  var viOffsetTop = $('.visual_img').offset().top - 650;

  if (wScroll >= viOffsetTop) {
    $('.visual_img').addClass('on');
  } else {
    $('.visual_img').removeClass('on');
  }
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