// 초기 상태
let cnt = 1;
let slideTotal = $('.swiper-slide').length;

$('.num').text(cnt);
$('.max').text(slideTotal);


// 버튼 이벤트 핸들러
$('.slide_btn').click(function(e) {
  e.preventDefault();


  if ($(this).is($('#next'))) {
    // next를 누르면
    cnt++;
    if(cnt > slideTotal) {
      cnt = 1;
    }

  } else if($(this).is($('#prev'))) {
    cnt--;
    if(cnt == 0) {
      cnt = slideTotal;
    }
  }

  $('.num').text(cnt);

})
