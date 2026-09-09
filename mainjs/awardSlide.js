export function awardSlide() {
  // li 개당 너비(margin 포함)
  const listOuterWidth = $(".award_list li").outerWidth(true); // 520

  // 전체를 감싸는 고정된 .award__container에서 빠져나간 부분
  const remaining = listOuterWidth * 5;

  const movesize = listOuterWidth;
  let position = 0;

  // left-btn
  function awardMoveL() {
    position -= movesize;

    $(".award_list")
      .stop()
      .animate({ left: position }, { duration: 200, easing: "easeInOutQuad" });

    if (position <= -remaining) {
      $(".btn-box .left-btn").addClass("disabled");
    } else {
      $(".btn-box .left-btn").removeClass("disabled");
    }
  }

  // right-btn
  function awardMoveR() {
    position += movesize;
    $(".award_list")
      .stop()
      .animate({ left: position }, { duration: 200, easing: "easeInOutQuad" });

    if (position >= 0) {
      $(".btn-box .right-btn").addClass("disabled");
    } else {
      $(".btn-box .right-btn").removeClass("disabled");
    }
  }

  // 최초 우측 버튼 비활성화
  $(document).ready(function () {
    $(".btn-box .right-btn").addClass("disabled");
  });

  $(".btn-box .btn").on("click", function (e) {
    e.preventDefault();

    if ($(this).hasClass("left-btn")) {
      awardMoveL();
      $(".btn-box .right-btn").removeClass("disabled");
    } else if ($(this).hasClass("right-btn")) {
      awardMoveR();
      $(".btn-box .left-btn").removeClass("disabled");
    }
  });
}
