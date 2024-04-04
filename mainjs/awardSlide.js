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

// 전체를 감싸는 고정된 .award__container에서 빠져나간 .award_list를 더한 좌표값
const range = ulWidth + (ulWidth - slideContainer); // 4524
// 전체를 감싸는 고정된 .award__container에서 빠져나간 부분
const remaining = ulWidth - slideContainer; // 1302



$('.award_list ul').after($('.award_list ul').clone());


// 자동 슬라이드 함수
function awardMove () {
  position -= movesize;

  $('.award_list').css({left: position});
  
  
  // // 전체를 감싸는 고정된 .award__container에서 빠져나간 .award_list를 더한 좌표값
  // const range = ulWidth + (ulWidth - slideContainer); // 4524
  
  if(position < -range ) {
    $('.award_list').css({ left : slideContainer - ulWidth});
    position = slideContainer - ulWidth;
  }
}

// timeonoff = setInterval(awardMove, 100);


// .award_list & 좌우버튼 호버시 자동 슬라이드 멈춤
// $('.award_list, .btn_box a:not(:last)').hover(
//   function() {
//     clearInterval(timeonoff);
    
//   },
//   function() {
//     timeonoff = setInterval(awardMove, 100);
    
//   }
// );


// 위의 자동 슬라이드 기능은 사용하지 않을 예정
// 좌우버튼 클릭시 넘기기
$('.btn').click(function(e) {
  e.preventDefault();

  
  var direction = $(this).hasClass('leftBtn') ? 'left' : 'right';
  moveSlide(direction);
})


function moveSlide(direction) {

  if (direction == 'left') {

    position -= listOuterWidth;
    
    $('.award_list').animate({left: position}, 'fast', function() {

      if (position <= -range ) {
        position = -remaining;
        $('.award_list').css({left: -remaining});        
      }
    }).clearQueue();

  } else if (direction == 'right') {
    position += listOuterWidth;

    $('.award_list').animate({left: position}, 'fast', function() {
      
    }).clearQueue();
  }
}