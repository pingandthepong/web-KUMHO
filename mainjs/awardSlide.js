export function awardSlide() {

// 전체를 감싸는 고정된 .award__container 너비
const slideContainer = $('.award__container').width(); // 2080

// ul 한 덩이의 너비
const ulWidth = $('.award_list ul').width(); //2600

// li 개수
const listLength = $('.award_list li').length; // 5

// li 개당 너비(margin 포함)
const listOuterWidth = $('.award_list li').outerWidth(true); // 520

// 전체를 감싸는 고정된 .award__container에서 빠져나간 .award_list를 더한 좌표값
const range = ulWidth + (ulWidth - slideContainer); // 4524
// 전체를 감싸는 고정된 .award__container에서 빠져나간 부분
const remaining = ulWidth - slideContainer; // 1302


const movesize = listOuterWidth;
let position = 0;


function awardMove () {
  position -= movesize;

  $('.award_list').css({left: position});
  
  if(position < -range ) {
    $('.award_list').css({ left : slideContainer - ulWidth});
    position = slideContainer - ulWidth;
  }
}


$('.award_list, .btn_box .btn').on('click', function(e) {
  e.preventDefault();
  
});

}