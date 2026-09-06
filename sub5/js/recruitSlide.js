// 초기 상태
let cnt = 1;
let slideTotal = $(".swiper-slide").length;

$(".num").text(cnt);
$(".max").text(slideTotal);

// function slideTotalChange(target) {
//   if ($(target).is($("#next"))) {
//     // next를 누르면
//     cnt++;
//     if (cnt > slideTotal) {
//       cnt = 1;
//     }
//   } else if ($(target).is($("#prev"))) {
//     cnt--;
//     if (cnt == 0) {
//       cnt = slideTotal;
//     }
//   }

//   $(".num").text(cnt);
// }

// 버튼 이벤트 핸들러 (아래의 방법으로 하니 버튼 이벤트 필요 없어짐)
// $(".slide_btn").on("click", function (e) {
//   e.preventDefault();
//   slideTotalChange(this);
//   $(".swiper-slide").index(this).addClass("on");
// });

// 방법1) swiper-slide의 aria-label 속성을 가져와 .num, .max에 담기 (안담아짐.. 일단 담아보자.. 성공!)
$(document).ready(function () {
  function updateAriaNum() {
    let ariaNum = $(".swiper-slide")
      .map(function () {
        if ($(this).hasClass("swiper-slide-active")) {
          return $(this).attr("aria-label").split(" / ")[0];
        }
      })
      .get();
    // console.log(ariaNum); // ['1']
    $(".num").text(ariaNum);
  }

  const observer = new MutationObserver(updateAriaNum);

  $(".swiper-slide").each(function () {
    observer.observe(this, { attributes: true, attributeFilter: ["class"] });
  });
});
