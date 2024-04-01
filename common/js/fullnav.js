
var smh = $(".visual").height();
var on_off = false; // true(오버) false(오버X)

$("#headerArea").mouseenter(function () {
  // var scroll = $(window).scrollTop();
  $(this).children(".on").show();
  $(this).css({
    "background": "#fff",
    "boxShadow":
      "0 0 5px 0 rgba(0, 0, 0, 0.5), 2px 2px 10px 0 rgba(0, 0, 0, 0.1)",
  });
  $("#headerArea .logo a").css({
    "background": "url('https://pingandthepong.mycafe24.com/common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",
  });
  $(".depth1, .signin a").css({ "color": "#111" });
  on_off = true;
});

$("#headerArea").mouseleave(function () {
  $(this).children(".on").hide();
  
  var scroll = $(window).scrollTop();

  if (scroll < smh - 105) {
    $(this).css({
      "background": "transparent",
      "boxShadow": "none",
    });
    $("#headerArea .logo a").css({
      "background": "url('https://pingandthepong.mycafe24.com/common/images/header-logo-pb20.png') no-repeat 0 0",
    });
    $(".depth1, .signin a").css({ "color": "#fff" });
  } else {
    $(this).css({
      "background": "#fff",
      "boxShadow":
        "0 0 5px 0 rgba(0, 0, 0, 0.5), 2px 2px 10px 0 rgba(0, 0, 0, 0.1)",
    });
    $(".depth1, .signin a").css({ "color": "#111" });
  }
  on_off = false;
});

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll > smh - 105) {
    $("#headerArea").css({
      "background": "#fff",
      "boxShadow":
        "0 0 5px 0 rgba(0, 0, 0, 0.5), 2px 2px 10px 0 rgba(0, 0, 0, 0.1)",
    });
    $("#headerArea .logo a").css({
      "background": "url('https://pingandthepong.mycafe24.com/common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",
    });
    $(".depth1, .signin a").css({ "color": "#111" });
  } else {
    if (on_off == false) {
      $("#headerArea").css({
        "background": "transparent",
        "boxShadow": "none",
      });
      $("#headerArea .logo a").css({
        "background": "url('https://pingandthepong.mycafe24.com/common/images/header-logo-pb20.png') no-repeat 0 0",
      });
      $(".depth1, .signin a").css({ "color": "#fff" });
    }
  }
});

//2depth 열기/닫기
$(".dropdownmenu").hover(
  function () {
    $(".dropdownmenu .menu ul").fadeIn("normal", function () { $(this).stop(); });
    $("#headerArea").animate({ height: 340 }, "fast").clearQueue();
  },
  function () {
    $(".dropdownmenu .menu ul").hide();
    $("#headerArea").animate({ height: 105 }, "fast").clearQueue();
  }
);

$(".dropdownmenu ul a ").hover(
  function () { $(this).css({ "color": "#ef0010" }) },
  function () { $(this).css({ "color": "#111" }) }
);

//1depth 효과
$(".dropdownmenu .menu").hover(
  function () {
    $(".depth1", this).css("color", "#ef0010").addClass("active");
  },
  function () {
    $(".depth1", this).css("color", "#111").removeClass("active");
  }
);

// tab 처리 (logo에 포커스 시)
$("#headerArea .logo a").focus(function () {
  $("#headerArea").children(".on").show();
  $("#headerArea").css({
    "background": "#fff",
    "boxShadow":
      "0 0 5px 0 rgba(0, 0, 0, 0.5), 2px 2px 10px 0 rgba(0, 0, 0, 0.1)",
  });
  $("#headerArea .logo a").css({
    "background": "url('https://pingandthepong.mycafe24.com/common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",
  });
  $(".depth1, .signin a").css({ "color": "#111" });
});

$("#headerArea .logo a").blur(function () {
  $("#headerArea").children(".on").hide();
  $("#headerArea").css({
    "background": "transparent",
    "boxShadow": "none",
  });
  $("#headerArea .logo a").css({
    "background": "url('https://pingandthepong.mycafe24.com/common/images/header-logo-pb20.png') no-repeat 0 0",
  });
  $(".depth1, .signin a").css({ "color": "#fff" });
});


// tab 처리 (depth1에 포커스 시)
$(".dropdownmenu .menu .depth1").focus(function () {
  $("#headerArea").children(".on").show();
  $(".dropdownmenu .menu ul").slideDown("normal");
  $("#headerArea").animate({ height: 340 }, "fast").clearQueue();
  $(this).css({ "color": "#f65742" }).addClass("active");
  $(this).parents(".menu").siblings().find(".depth1").css({ "color": "#111" }).removeClass("active");

  $("#headerArea").css({
    "background": "#fff",
    "boxShadow":
      "0 0 5px 0 rgba(0, 0, 0, 0.5), 2px 2px 10px 0 rgba(0, 0, 0, 0.1)",
  });
  $("#headerArea .logo a").css({
    "background": "url('https://pingandthepong.mycafe24.com/common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",
  });
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
  $("#headerArea").css({
    "background": "#fff",
    "boxShadow":
      "0 0 5px 0 rgba(0, 0, 0, 0.5), 2px 2px 10px 0 rgba(0, 0, 0, 0.1)",
  });
  $("#headerArea .logo a").css({
    "background": "url('https://pingandthepong.mycafe24.com/common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",
  });
  $(".depth1, .signin a").css({ "color": "#111" });
  $(".depth1:last").removeClass("active");

  $(".signup a").focus(function () {
    $(this).css({ "background": "#2c44fe" });
  });
  $(".signup a").blur(function () {
    $(this).css({ "background": "#ef0010" });
  });
});


// footer family site
$('.family_site .arrow').toggle(
  function () {
    $('.family_site ul').stop().slideDown();
    $(this).find('i').delay(150).animate({rotate: '-180deg'}, 1);
  },
  function () {
    $('.family_site ul').stop().slideUp('fast');
    $(this).find('i').animate({ rotate: '0deg' }, 100);
  });

// footer family site - tab 처리
$('.family_site .arrow').focus(function () {$('.family_site ul').slideDown();});
$('.family_site ul li:last a').blur(function () {$('.family_site ul').slideUp('fast');});


// move_top
$(window).on('scroll',function(){
  var scroll = $(window).scrollTop();
  
  if (scroll > 900) {
    $('.move_top').css('opacity', '1');
  } else {
    $('.move_top').css('opacity','0');
  }
});

$('.move_top').click(function(e){
  e.preventDefault();
  $("html,body").stop().animate({"scrollTop":0}, 1000);
});

