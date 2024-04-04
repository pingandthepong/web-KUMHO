var smh = $(".visual").height();
var on_off = false; // true(오버) false(오버X)

$("#headerArea").on('mouseenter', function () {
  $(this).addClass('white');
  $("#headerArea .logo a").css("background", "url('https://pingandthepong.mycafe24.com/common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0");
  $(".depth1, .signin a").css("color", "#111");
  on_off = true;
});

$("#headerArea").on('mouseleave', function () {
  var scroll = $(window).scrollTop(); // 현재 스크롤 위치

  if (scroll < smh - 105) {
    $(this).removeClass('white');
    $("#headerArea .logo a").css({"background": "url('https://pingandthepong.mycafe24.com/common/images/header-logo-pb20.png') no-repeat 0 0",});
    $(".depth1, .signin a").css({ "color": "#fff" });
  
  } else {
    $(this).addClass('white');
    $(".depth1, .signin a").css({ "color": "#111" });
  }
  on_off = false;
});


$(window).on('scroll', function(event) {
  var scroll = $(window).scrollTop();

  if (scroll > smh - 105) {
    $('#headerArea').addClass('white');
    $("#headerArea .logo a").css({"background": "url('https://pingandthepong.mycafe24.com/common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",});
    $(".depth1, .signin a").css({ "color": "#111" });
  
  } else {
    if (on_off == false) {
      $('#headerArea').removeClass('white');
      $("#headerArea .logo a").css({"background": "url('https://pingandthepong.mycafe24.com/common/images/header-logo-pb20.png') no-repeat 0 0",});
      $(".depth1, .signin a").css({ "color": "#fff" });
    }
  }
});


// 2depth 열기/닫기
$(".dropdownmenu").hover(
  function () {
    $('#headerArea').children(".on").show();
    $(".dropdownmenu .menu ul").fadeIn("normal", function () { $(this).stop(); });
    $("#headerArea").animate({ height: 340 }, "fast").clearQueue();
  },
  function () {
    $('#headerArea').children(".on").hide();
    $(".dropdownmenu .menu ul").hide();
    $("#headerArea").animate({ height: 105 }, "fast").clearQueue();
  }
);

$(".dropdownmenu ul a ").hover(
  function () { $(this).css({ "color": "#ef0010" }) },
  function () { $(this).css({ "color": "#111" }) }
);

// 1depth 효과
$(".dropdownmenu .menu").hover(
  function () {
    $(".depth1", this).css("color", "#ef0010").addClass("active");
  },
  function () {
    $(".depth1", this).css("color", "#111").removeClass("active");
  }
);


// tab 처리 (logo에 포커스 시)
$("#headerArea .logo a").on('focus', function () {
  $("#headerArea").children(".on").show();
  $('#headerArea').addClass('white');
  $("#headerArea .logo a").css({"background": "url('https://pingandthepong.mycafe24.com/common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",});
  $(".depth1, .signin a").css({ "color": "#111" });
});

$("#headerArea .logo a").on('blur', function () {
  $("#headerArea").children(".on").hide();
  $('#headerArea').removeClass('white');
  $("#headerArea .logo a").css({"background": "url('https://pingandthepong.mycafe24.com/common/images/header-logo-pb20.png') no-repeat 0 0",});
  $(".depth1, .signin a").css({ "color": "#fff" });
});


// tab 처리 (depth1에 포커스 시)
$(".dropdownmenu .menu .depth1").focus(function () {
  $("#headerArea").children(".on").show();
  $(".dropdownmenu .menu ul").slideDown("normal");
  $("#headerArea").animate({ height: 340 }, "fast").clearQueue();
  $(this).css({ "color": "#f65742" }).addClass("active");
  $(this).parents(".menu").siblings().find(".depth1").css({ "color": "#111" }).removeClass("active");

  $('#headerArea').addClass('white');
  $("#headerArea .logo a").css({"background": "url('https://pingandthepong.mycafe24.com/common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",});
  $(".signin a").css({ "color": "#111" });
});


// tab 처리 (depth1 > ul li a에 포커스 시)
$(".dropdownmenu .menu ul a").focus(function () {

  $(this).css({ "color": "#f65742", });
  $(this).parents(".menu").find(".depth1").css({ "color": "#f65742" }).addClass("active");
  $(this).parents(".menu").siblings().find(".depth1").css("color", "#111").removeClass("active");
});
$(".dropdownmenu .menu ul a").blur(function () {
  $(this).css({ "color": "#111" });
});


// tab 처리 (마지막 depth1 > ul li a에 포커스 시)
$(".dropdownmenu .m6 li:last a").blur(function () {
  $(".dropdownmenu .menu ul").slideUp("fast");
  $("#headerArea").animate({ height: 105 }, "normal").clearQueue();
});


// tab 처리 (top_menu 에 포커스 시)
$(".top_menu a").focus(function () {
  $('#headerArea').addClass('white');
  $("#headerArea .logo a").css({"background": "url('https://pingandthepong.mycafe24.com/common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",});
  $(".depth1, .signin a").css({ "color": "#111" });
  $(".depth1:last").removeClass("active");

  $(".signup a").focus(function () {$(this).css({ "background": "#2c44fe" });});
  $(".signup a").blur(function () {$(this).css({ "background": "#ef0010" });});
});


// footer family site
$('.family_site .arrow').click(function (e) {
  e.preventDefault();

  var famOnOff = $(this).data('famOnOff');

  if (!famOnOff) {
    // 닫혀있다면 열기
    $('.family_site ul').stop().slideDown();
    $(this).find('i').animate({rotate: '-180deg'}, 100);
    $(this).data('famOnOff', true);
  } else {
    // 열려있다면 닫기
    $('.family_site ul').stop().slideUp('fast');
    $(this).find('i').animate({ rotate: '0deg' }, 100);
    $(this).data('famOnOff', false);
  }
});

// family_site가 열려있을 때, body 클릭 시 닫히게 하기
$('body').click(function(event) {
  famOnOff = $('.family_site .arrow').data('famOnOff');
  if (famOnOff) {
    if (!$(event.target).closest('.family_site').length) {
      $('.family_site ul').stop().slideUp('fast');
      $('.family_site .arrow').find('i').animate({ rotate: '0deg' }, 100);
      $('.family_site .arrow').data('famOnOff', false);
    }
  }
});

// footer family site - tab 처리
$('.family_site .arrow').focus(function () {$('.family_site ul').slideDown();});
$('.family_site ul li:last a').blur(function () {$('.family_site ul').slideUp('fast');});


// move_top
var lastScrollTop = 0; // 이전에 스크롤한 위치
var moveTopVisible = false; // 초기 상태는 보이지 않는 상태이기 때문에 false

function moveTop() {
  var scroll = $(window).scrollTop(); // 현재 스크롤 위치

  if (scroll > lastScrollTop && scroll > 300 && !moveTopVisible) {
    // 스크롤의 방향이 아래로 이동했을 때 && 현재 스크롤의 위치가 300 이상일 때 && 버튼이 보이는 상태일 때
    $('.move_top').stop().animate({ opacity: 1 }, 100);
    moveTopVisible = true;
  } else if (scroll <= 300 && moveTopVisible) {
    // 현재 스크롤의 위치가 300 이하일 때 && 버튼이 보이지 않는 상태일 때
    $('.move_top').stop().animate({ opacity: 0 }, 100);
    moveTopVisible = false;
  }

  // 현재 스크롤 위치 저장
  lastScrollTop = scroll;
}

$(window).on('scroll', function() {
  // 사용자가 스크롤할 때마다 호출되는 scroll 이벤트 핸들러의 특성상 성능에 부담일 줄 수 있어, 최적화하기 위해 requestAnimationFrame 사용
  requestAnimationFrame(moveTop);
});

$('.move_top').click(function(e) {
  e.preventDefault();
  $("html,body").stop().animate({ scrollTop: 0 }, 500);
});