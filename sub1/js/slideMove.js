// DONE: 각 .slideMenu 클릭 시 해당 history_list(con$)로 이동
$(".slideMenu li a").click(function (e) {
  e.preventDefault();

  $(".slideMenu li a").removeClass("spy");
  $(this).addClass("spy");

  const hisIdx = $(this).index(".slideMenu a"); // 0 1 2 3 4
  let value = 0;

  if ($(this).hasClass(`link${hisIdx + 1}`)) {
    value =
      $(`.con${hisIdx + 1}`).offset().top - $("#headerArea").outerHeight() - 20;
  }

  $("html, body").stop().animate({ scrollTop: value }, 500);
});

let slideMenuTop = $(".slideMenu").offset().top;

$(window).on("scroll", function () {
  let scroll = $(this).scrollTop(); // 현재 스크롤 위치
  let headerHeight = $("#headerArea").outerHeight();

  // DONE: 스크롤이 slideMenuTop 닿으면 .slideMenu.navOn & header 숨기기
  if (scroll >= slideMenuTop) {
    $(".slideMenu").addClass("navOn");
    $(".history_list:eq(0)").addClass("on");
    $("#headerArea").hide();
  } else {
    $(".slideMenu").removeClass("navOn");
    $(".history_list:eq(0)").removeClass("on");
    $("#headerArea").slideDown();
  }

  // DONE: Scroll Spy
  $(".history_list").each(function (idx) {
    let sectionTop = $(this).offset().top - headerHeight - 20;
    let sectionBottom = sectionTop + $(this).outerHeight();

    if (scroll >= sectionTop && scroll < sectionBottom) {
      $(".slideMenu li a").removeClass("spy");
      $(`.slideMenu li:eq(${idx}) a`).addClass("spy");
    }
  });
});
