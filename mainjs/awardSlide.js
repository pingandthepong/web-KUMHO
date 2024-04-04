const movesize = 2;
let position = 0;
let timeonoff;


const ulWidth = $('.award_list').width(); // 2148
const listLength = $('.award_list li').length; // 4
const listOuterWidth = $('.award_list li').outerWidth(true); // 537

$('.award_list ul').after($('.award_list ul').clone()); // 4296

// 자동 슬라이드
function awardMove () {
  position -= movesize;
  $('.award_list').css({left: position});
  // if(position >= ) {

  // }


}

timeonoff = setInterval(awardMove,100);



// .award_
$('.award_list li').hover(
  function() {
    clearInterval(awardMove);
    
  },
  function() {
    timeonoff = setInterval(awardMove, 100);
    
  }
);
