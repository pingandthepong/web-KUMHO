export function awardSlide() {
  // li 개당 너비(margin 포함)
  const listOuterWidth = $(".award_list li").outerWidth(true); // 520

  // 전체를 감싸는 고정된 .award__container에서 빠져나간 부분
  const remaining = listOuterWidth * 5;

  const movesize = listOuterWidth;
  let position = 0;

  // leftBtn
  function awardMoveL() {
    position -= movesize;

    $(".award_list").stop().animate({ left: position }, { duration: 200, easing: "easeInOutQuad" });

    if (position <= -remaining) {
      $(".btn_box .leftBtn").addClass("disabled");
    } else {
      $(".btn_box .leftBtn").removeClass("disabled");
    }
  }

  // rightBtn
  function awardMoveR() {
    position += movesize;
    $(".award_list").stop().animate({ left: position }, { duration: 200, easing: "easeInOutQuad" });

    if (position >= 0) {
      $(".btn_box .rightBtn").addClass("disabled");
    } else {
      $(".btn_box .rightBtn").removeClass("disabled");
    }
  }

  
  // 최초 우측 버튼 비활성화
  $(document).ready(function () {
    $(".btn_box .rightBtn").addClass("disabled");
  });


  $(".btn_box .btn").on("click", function (e) {
    e.preventDefault();

    if ($(this).hasClass("leftBtn")) {
      awardMoveL();
      $(".btn_box .rightBtn").removeClass("disabled");
    } else if ($(this).hasClass("rightBtn")) {
      awardMoveR();
      $(".btn_box .leftBtn").removeClass("disabled");
    }
  });
}
