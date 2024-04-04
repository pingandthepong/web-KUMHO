$('.slideMenu li:eq(0) a').addClass('spy');



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


// sub_nav 달라붙게 하기
var smh = $('.visual').height();
var headerHide = smh * 1 / $('#headerArea').height() + 100;
console.log(headerHide);

function subNavSticky() {

  var scroll = $(window).scrollTop();

  if (scroll >= 1 || scroll < headerHide) {
    $('#headerArea').addClass('white');
    $("#headerArea .logo a").css({"background": "url('https://pingandthepong.mycafe24.com/common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",});
    $(".depth1, .signin a").css({ "color": "#111" });
  
  } else {
    
    $('#headerArea').slideUp();

    
  }

  if (scroll >= smh) {
    $('.sub_nav').addClass('subNavOn').stop().animate({opacity: 1}, 100);
  } else {
    $('.sub_nav').removeClass('subNavOn').stop().animate({opacity: 1}, 100);
  }
}




// 스크롤이 .slideMenu를 넘어서면 .slideMenu의 위치 변경하기
// var slideMenuOffset = $('.slideMenu').offset().top - 200;
// var slideMenuOffset = $('.slideMenu').offset().top - $('.slideMenu').outerHeight();
var slideMenuOffset = 367;



var lastScrollTop = 0

function historyHeader() {
  var scroll = $(this).scrollTop(); // 현재 스크롤 위치
  

  if (scroll >= slideMenuOffset) {
    $('.slideMenu').addClass('navOn');
    $('#headerArea').hide();
  
  } else {
    $('.slideMenu').removeClass('navOn');
    $('#headerArea').slideDown();
  }
}

$(window).on('scroll', function() {
  // var scroll = $(this).scrollTop(); // 현재 스크롤 위치

  // if (scroll >= slideMenuOffset) {
  //   $('.slideMenu').addClass('navOn');
  //   $('#headerArea').hide();
  //   $('.sub_nav').addClass('subNavOn');
  
  // } else {
  //   $('.slideMenu').removeClass('navOn');
  //   $('#headerArea').show();
  //   $('.sub_nav').removeClass('subNavOn');
  // }
  requestAnimationFrame(historyHeader);
  requestAnimationFrame(subNavSticky);
});
