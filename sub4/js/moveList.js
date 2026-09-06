const moveSize = 4;
let position =0;
let timeOnOff;

var ulWidth = $('.move_list_wrap ul').width(); // 1200

$('.move_list_wrap ul').after($('.move_list_wrap ul').clone());

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