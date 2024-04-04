const movesize = 2;
let position = 0;
let timeonoff;

// 전체를 감싸는 고정된 .award__container 너비
const slideContainer = $('.award__container').width(); // 1920

// ul 한 덩이의 너비
const ulWidth = $('.award_list ul').width(); // 3222

// li 개수
const listLength = $('.award_list li').length; // 6

// li 개당 너비(margin 포함)
const listOuterWidth = $('.award_list li').outerWidth(true); // 537



$('.award_list ul').after($('.award_list ul').clone());


// 자동 슬라이드 함수
function awardMove () {
  position -= movesize;

  $('.award_list').css({left: position});
  
  
  // 전체를 감싸는 고정된 .award__container에서 빠져나간 .award_list를 더한 좌표값
  const range = ulWidth + (ulWidth - slideContainer); // 4524
  
  if(position < -range ) {
    $('.award_list').css({ left : slideContainer - ulWidth});
    position = slideContainer - ulWidth;
  }
}

timeonoff = setInterval(awardMove, 100);



$('.award_list').hover(
  function() {
    clearInterval(timeonoff);
    
  },
  function() {
    timeonoff = setInterval(awardMove, 100);
    
  }
);
