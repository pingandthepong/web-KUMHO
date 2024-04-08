export function awardSlide() {

// 전체를 감싸는 고정된 .award__container 너비
const slideContainer = $('.award__container').width();

// ul 한 덩이의 너비
const ulWidth = $('.award_list ul').width();


// li 개수
const listLength = $('.award_list li').length; // 8

// li 개당 너비(margin 포함)
const listOuterWidth = $('.award_list li').outerWidth(true); // 520

// 전체를 감싸는 고정된 .award__container에서 빠져나간 .award_list를 더한 좌표값
const range = ulWidth - slideContainer; // 2080

// 전체를 감싸는 고정된 .award__container에서 빠져나간 부분
const remaining = listOuterWidth * 5




const movesize = listOuterWidth;
let position = 0;


function awardMove () {
  position -= movesize;

  $('.award_list').animate({left: position}, {duration: 200, easing: 'easeInOutQuad'});
  
  if(position <= -remaining ) {
    $('.btn_box .leftBtn').addClass('disabled');
  }
}


$('.award_list, .btn_box .btn').on('click', function(e) {
  e.preventDefault();
  awardMove();
  
});

}