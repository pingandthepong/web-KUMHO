$(document).ready(function () {
  var smh = $(".visual").height();
  var on_off = false;

  $("#headerArea").mouseenter(function () {
    // var scroll = $(window).scrollTop();
    $(this).css({
      "backgroundColor": "#fff",
      "boxShadow": "0 0 5px 0 rgba(0, 0, 0, 0.5), 2px 2px 10px 0 rgba(0, 0, 0, 0.1)",
    });
    $("#headerArea .logo a").css({
      "background": "url('./common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",
    });
    $(".depth1, .signin a").css({
      "color": "#111",
    });
    on_off = true;
  });

  $("#headerArea").mouseleave(function () {
    var scroll = $(window).scrollTop();

    if (scroll < smh - 100) {
      $(this).css({
        "backgroundColor": "transparent",
        "boxShadow": "none",
      });
      $("#headerArea .logo a").css({
        "background": "url('./common/images/header-logo-pb20.png') no-repeat 0 0",
      });
      $(".depth1, .signin a").css({
        "color": "#fff",
      });
    } else {
      $(this).css({
        "backgroundColor": "#fff",
        "boxShadow": "0 0 5px 0 rgba(0, 0, 0, 0.5), 2px 2px 10px 0 rgba(0, 0, 0, 0.1)",
      });
      $(".depth1, .signin a").css({
        "color": "#111"
      });
    }
    on_off = false;
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll > smh - 100) {
      $("#headerArea")
        .css({
          "backgroundColor": "#fff",
          "boxShadow": "0 0 5px 0 rgba(0, 0, 0, 0.5), 2px 2px 10px 0 rgba(0, 0, 0, 0.1)",
        });
      $("#headerArea .logo a").css({
        "background": "url('./common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",
      });
      $(".depth1, .signin a").css({
        "color": "#111"
      });
    } else {
      //스크롤 내리기 전 디폴트(마우스올리지않음)
      if (on_off == false) {
        
        $("#headerArea").css({
          "background": "transparent",
          "boxShadow": "none",
        });
        $("#headerArea .logo a").css({
          "background": "url('./common/images/header-logo-pb20.png') no-repeat 0 0",
        });
        $(".depth1, .signin a").css({
          "color": "#fff",
        });
      }
    }
  });

  //2depth 열기/닫기
  $(".dropdownmenu").hover(
    function () {
      $(".dropdownmenu .menu ul").fadeIn("normal", function () {
        $(this).stop();
      });
      $("#headerArea").animate({ height: 340 }, "fast").clearQueue();
    },
    function () {
      $(".dropdownmenu .menu ul").hide();
      $("#headerArea").animate({ height: 100 }, "fast").clearQueue();
    }
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

  //tab 처리
  $(".dropdownmenu .menu .depth1").on("focus", function () {
    $(this).addClass("active");
    $(this).parents(".menu").siblings().find(".depth1").removeClass("active");
    $("#headerArea").css({
      "backgroundColor": "#fff",
      "boxShadow": "0 0 5px 0 rgba(0, 0, 0, 0.5), 2px 2px 10px 0 rgba(0, 0, 0, 0.1)",
    }).animate({ height: 340 }, "fast").clearQueue();
    
    $(".dropdownmenu .menu ul").slideDown("normal");
    
    $("#headerArea .logo a").css({
      "background": "url('./common/images/KUMHO_Logo_KJH_txtblack_pb20.png') no-repeat 0 0",
    });

    $(".depth1, .signin a").css({
      "color": "#111",
    });
    
  });


  $("ul.dropdownmenu li.m6 li:last")
    .find("a")
    .on("blur", function () {
      $("ul.dropdownmenu li.menu ul").slideUp("fast");
      $("#headerArea").animate({ height: 100 }, "normal").clearQueue();
    });
});
