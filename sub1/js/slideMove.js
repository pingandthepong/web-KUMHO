$('.slideMenu li:eq(0) a').addClass('on');



$('.slideMenu a').click(function(e) {
  e.preventDefault();
  
  $('.slideMenu a').removeClass('on');
  $(this).addClass('on');
  
  var hisInd = $(this).index('.slideMenu a');
  var value = 0;

  if ($(this).hasClass(`link${hisInd + 1}`)) {

    // #headerArea 기능 추가 전까지 빼기 값 추가
    value = $(`.con${hisInd + 1}`).offset().top - $('#headerArea').outerHeight() - 20;
  }

  $('html,body').stop().animate({scrollTop: value}, 500);

});


// 스크롤이 .slideMenu를 넘어서면 .slideMenu의 위치 변경하기
