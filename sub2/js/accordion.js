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
var min_width = 226.666; // 작을 때
var max_width = 906.664; // 커졌을 때


$('.landmark li:first').css({width: max_width,});
$('.landmark li:first .badge').show();
$('.landmark li:first .name').show();

$(".landmark li:first .name").html(landmarks[0].name);

$(".landmark li:first .img_badge").css({
  background: `url(./images/content5/${landmarks[0].imgsrc}) no-repeat center`,
});


$('.landmark li').each(function(eachLiIdx, eachLi) {
  // console.log(eachLidx); // 0 1 2
  $(this).find('.img_badge').css('background', `url(./images/content5/${landmarks[eachLiIdx].imgsrc})`);
});


$(".landmark li").hover(
  
  function () {
    const landInd = $(this).index('.landmark li'); // 0 1 2

    $(".landmark li").animate({ width: min_width }, 300).clearQueue();
    $(this).animate({ width: max_width }, 300).clearQueue();

    $(this).find('.img_badge').css({
      background: `url(./images/content5/${landmarks[landInd].imgsrc}) no-repeat center`,
    });

    $(".landmark li").find('.badge').hide();
    $(this).find('.badge').show();

    $(".landmark li").find('.name').html(landmarks[landInd].name).end().find('.name').hide();
    $(this).find('.name').show();
  },
  function () {
    $(".landmark li").animate({ width: origin }, 300).clearQueue();
    $(this).animate({ width: max_width }, 300).clearQueue();
    
    $(this).find('.badge').show();
    $(this).find('.name').show();
  }
);