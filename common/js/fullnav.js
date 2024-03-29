$(document).ready(function () {
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
      "background":
        "url('./common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",
    });
    $(".depth1, .signin a").css({ "color": "#111" });
    on_off = true;
  });

  $("#headerArea").mouseleave(function () {
    $(this).children(".on").hide();
    
    var scroll = $(window).scrollTop();

    if (scroll < smh - 100) {
      $(this).css({
        "background": "transparent",
        "boxShadow": "none",
      });
      $("#headerArea .logo a").css({
        "background": "url('./common/images/header-logo-pb20.png') no-repeat 0 0",
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

    if (scroll > smh - 100) {
      $("#headerArea").css({
        "background": "#fff",
        "boxShadow":
          "0 0 5px 0 rgba(0, 0, 0, 0.5), 2px 2px 10px 0 rgba(0, 0, 0, 0.1)",
      });
      $("#headerArea .logo a").css({
        "background":
          "url('./common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",
      });
      $(".depth1, .signin a").css({ "color": "#111" });
    } else {
      if (on_off == false) {
        $("#headerArea").css({
          "background": "transparent",
          "boxShadow": "none",
        });
        $("#headerArea .logo a").css({
          "background":
            "url('./common/images/header-logo-pb20.png') no-repeat 0 0",
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
      $("#headerArea").animate({ height: 100 }, "fast").clearQueue();
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
      "background":
        "url('./common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",
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
      "background": "url('./common/images/header-logo-pb20.png') no-repeat 0 0",
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
      "background":
        "url('./common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",
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
    $("#headerArea").animate({ height: 100 }, "normal").clearQueue();
  });
  

  // tab 처리 (top_menu 에 포커스 시)
  $(".top_menu a").focus(function () {
    $("#headerArea").css({
      "background": "#fff",
      "boxShadow":
        "0 0 5px 0 rgba(0, 0, 0, 0.5), 2px 2px 10px 0 rgba(0, 0, 0, 0.1)",
    });
    $("#headerArea .logo a").css({
      "background":
        "url('./common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",
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


      // 5. 현재 페이지에 해당하는 메뉴 글자 하이라이팅
      var getPath = window.location.href.split('/'); // 현재 url을 '/'기준으로 자름
      var getSplitIdx = getPath[getPath.length-1].indexOf('_') // 자른 패스에서 숫자를 뽑아낼 기준인 언더바의 인덱스 값을 반환한다.
      var depth1Num = getPath[getPath.length-1].charAt(getSplitIdx-1); // 언더바 앞에 ex)sub"1"_2 글자 반환
      var depth2Num = getPath[getPath.length-1].charAt(getSplitIdx+1); // 언더바 뒤에 ex)sub1_"2" 글자 반환
      var thisMenu = $('.depth1')[depth1Num-1]; // depth1 클래스를 가진 요소들 중 첫번째(인덱스라-1)요소 반환
      var thisMenu2 = $(thisMenu).parent().next().find('a')[depth2Num-1]; // 찾아놓은 depth1에서 부모(h3)의 다음(ul) 자식중 a를 찾고 현재num요소를 가져옴.
  
      $(thisMenu).css('color', '#11a691'); // 1depth 글자색
      $(thisMenu2).css('color', '#11a691'); // 2depth 글자색
});
