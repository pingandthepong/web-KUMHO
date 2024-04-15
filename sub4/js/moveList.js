



// li 개당 너비
var liWidth = $('.move_list li').width();
// console.log(liWidth); // 238.6666

const moveSize = 4;
let position =0;
let timeOnOff;

// ul 너비
var ulWidth = $('.move_list').width(); // 1200

// $('가져다 놓을 태그').after('기준태그'); 에 복제
$('.move_list ul').after($('.move_list ul').clone());

function moveList() {
  position -= moveSize;
  $('.move_list_wrap').css({left: position});

  if (position < -ulWidth) {
  $('.move_list_wrap').css({left: 0});
  position = 0;
  }
}

timeOnOff = setInterval(moveList, 100);

$('.move_list_wrap').hover(
  function() {
    clearInterval(timeOnOff);
  },
  function() {
    timeOnOff = setInterval(moveList, 100);
  }
)