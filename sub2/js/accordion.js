var landmarks = [
  {
    imgsrc: `landmark1.jpg`,
    name: "아부다비 관제탑",
  },
  {
    imgsrc: `landmark2.jpg`,
    name: "두바이 신공항",
  },
  {
    imgsrc: `landmark3.jpg`,
    name: "인천국제공항",
  },
];


var origin = 226.666; // 처음 보여지는 크기
var min_width = 226.666; // 작아지는 놈 (max-width - origin / 작아지는 놈들의 개수)
var max_width = 906.664; // 커지는 놈

$('.landmark li:first').css({width: max_width,});
$('.landmark li:first .badge').show();
$('.landmark li:first .name').show();


$(".landmark li").hover(
  
  function () {
    const landInd = $(this).index('.landmark li'); // 0 1 2

    $(".landmark li").animate({ width: min_width }, 300).clearQueue();
    $(this).animate({ width: max_width }, 300).clearQueue();

    $(".landmark li").find('.badge').hide();
    $(this).find('.badge').show();

    $(".landmark li").find('.name').hide();
    $(this).find('.name').show();
  },
  function () {
    $(".landmark li").animate({ width: origin }, 300).clearQueue();
    $(this).animate({ width: max_width }, 300).clearQueue();
    
    $(this).find('.badge').show();
    $(this).find('.name').show();
  }
);


