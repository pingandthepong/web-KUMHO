var origin = 226.666; // 처음 보여지는 크기
var min_width = 226.666; // 작아지는 놈 (max-width - origin / 작아지는 놈들의 개수)
var max_width = 906.664; // 커지는 놈

$('.landmark li:first').css({width: max_width,});
$('.landmark li:first .badge').show();


$(".landmark li").hover(
  function () {
    $(".landmark li").animate({ width: min_width }, 300).clearQueue();
    $(this).animate({ width: max_width }, 300).clearQueue();

    $(this).siblings().find('.badge').hide();
    $(this).find('.badge').show();
  },
  function () {
    $(".landmark li").animate({ width: origin }, 300).clearQueue();
    $(this).animate({ width: max_width }, 300).clearQueue();
    
    $(this).find('.badge').show();
  }
);