$('.slideMenu li:eq(0) a').addClass('on');



$('.slideMenu a').click(function(e) {
  e.preventDefault();
  
  $('.slideMenu a').removeClass('on');
  $(this).addClass('on');
  
  var hisInd = $(this).index('.slideMenu a');
  var value = 0;

  if ($(this).hasClass(`link${hisInd + 1}`)) {

    value = $(`.con${hisInd + 1}`).offset().top;
  }

  $('html,body').stop().animate({scrollTop: value}, 500);

});

// 1417 => 1524 (107 의 차이는 어디에서 나는ㄴ걸까? #headerArea ??)

// 스크롤이 .slideMenu를 넘어서면 .slideMenu의 위치 변경하기
// var smh = $('.intro__title').height();
// console.log(`.height() = ${smh}`);


$(window).on('scroll',function() {
  var scroll = Math.ceil($(window).scrollTop());
  console.log(scroll);

  if (scroll > 1300) {
    $('.slideMenu')
      .css({
        position: 'fixed',
        left: '50%',
        // bottom: 0,
        transform: 'translateX(-50%)',
        marginBottom: 0,
      })
    .animate({
      bottom: 0,
    })
    
  } else {
    // $('.slideMenu').animate({bottom: 0,});
  }
})