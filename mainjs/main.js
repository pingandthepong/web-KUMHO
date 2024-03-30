// JavaScript Document

$(document).ready(function () {
  var timeonoff; //타이머 처리  홍길동 정보
  var imageCount = $(".gallery ul li").size(); //이미지 총개수
  var cnt = 1; //이미지 순서 1 2 3 4 1 2 3 4 ....(주인공!!=>현재 이미지 순서)
  var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때

  $(".btn1").css({
    background: "#fff",
    width: "100px",
  });

  $(".gallery .link1").fadeIn("slow"); //첫번째 이미지 보인다..
  $('.gallery .link1 .slogan__lg .up').delay(650).animate({"top":0, opacity:1},'slow');

  $(".dock_progress .num").text(`${cnt}`);
  $(".dock_progress .max").text(`${imageCount}`);

  function moveg() {
    if (cnt == imageCount + 1) cnt = 1;
    if (cnt == imageCount) cnt = 0; //카운트 초기화

    cnt++; //카운트 1씩 증가.. 4가되면 다시 초기화 0  1 2 3 4 1 2 3 4 ..

    $(".dock_progress .num").text(`${cnt}`);

    $(".gallery li").fadeOut("slow");
    $(`.gallery .link${cnt}`).fadeIn("slow");

    $(`.mbutton`).css({
      background: "rgba(255, 255, 255, 0.5)",
      width: "24px",
    });

    $(`.btn${cnt}`).css({
      background: "#fff",
      width: "100px",
    });
    
    $(`.gallery .link${cnt} .slogan__lg .up`).delay(650).animate({"top":0, opacity:1},'slow');

    if (cnt == imageCount) cnt = 0;
  }

  timeonoff = setInterval(moveg, 5000);

  $(".mbutton").click(function (event) {
    var $target = $(event.target); //클릭한 버튼 $target == $(this)
    clearInterval(timeonoff);
    $(".gallery li").fadeOut("slow");

    if ($target.is(".btn1")) {
      //첫번째 버튼 클릭??
      cnt = 1; //클릭한 해당 카운트를 담아놓는다
    } else if ($target.is(".btn2")) {
      cnt = 2;
    } else if ($target.is(".btn3")) {
      cnt = 3;
    } else if ($target.is(".btn4")) {
      cnt = 4;
    }

    $(".dock_progress .num").text(`${cnt}`);

    $(`.gallery .link${cnt}`).fadeIn("slow");

    $(`.mbutton`).css({
      background: "rgba(255, 255, 255, 0.5)",
      width: "24px",
    });

    $(`.btn${cnt}`).css({
      background: "#fff",
      width: "100px",
    });

    $(`.gallery li .slogan__lg .up`).css({'top': '50px', 'opacity': 0,});
    $(`.gallery .link${cnt} .slogan__lg .up`).delay(650).animate({"top":0, opacity:1},'slow');

    if (cnt == imageCount) cnt = 0;

    timeonoff = setInterval(moveg, 5000);

    if (onoff == false) {
      onoff = true;
      $(".ps").css({
        background:
          '#ef0010 url("../mainimages/stop_icon.png") no-repeat center',
        backdropFilter: "none",
        border: "1px solid #ef0010",
      });
    }
  });

  //stop/play 버튼 클릭시 타이머 동작/중지
  $(".ps").click(function () {
    if (onoff == true) {
      // 타이머가 동작 중이라면
      clearInterval(timeonoff);
      $(this).css({
        background:
          'rgba(255,255,255,.2) url("../mainimages/play_icon.png") no-repeat center',
        backdropFilter: "blur(2px)",
        border: "1px solid #fff",
      });
      $(".btn_wrap").css({
        background: "#ef0010",
        backdropFilter: "none",
        border: "1px solid #ef0010",
      });
      onoff = false;
    } else {
      timeonoff = setInterval(moveg, 5000);
      $(this).css({
        background:
          '#ef0010 url("../mainimages/stop_icon.png") no-repeat center',
        backdropFilter: "1px solid #ef0010",
        border: "none",
      });
      $(".btn_wrap").css({
        background: "rgba(255,255,255,.2)",
        backdropFilter: "blur(5px)",
        border: "1px solid #fff",
      });
      onoff = true;
    }
  });

  // 좌우 버튼 처리
  $(".visual .btn").click(function () {
    clearInterval(timeonoff);
    if ($(this).is(".btnRight")) {
      if (cnt == imageCount) cnt = 0;
      cnt++;
      $(".dock_progress .num").text(`${cnt}`);
      $(".btn_wrap").css({
        background: "rgba(255,255,255,.2)",
        backdropFilter: "blur(5px)",
        border: "1px solid #fff",
      });
    } else if ($(this).is(".btnLeft")) {
      if (cnt == 1) cnt = imageCount + 1; // 1->5  최초..
      if (cnt == 0) cnt = imageCount;
      cnt--;
      $(".dock_progress .num").text(`${cnt}`);
      $(".btn_wrap").css({
        background: "rgba(255,255,255,.2)",
        backdropFilter: "blur(5px)",
        border: "1px solid #fff",
      });
    }

    $(".gallery li").hide();
    $(`.gallery .link${cnt}`).fadeIn("slow");

    $(`.mbutton`).css({
      background: "rgba(255, 255, 255, 0.5)",
      width: "24px",
    });

    $(`.btn${cnt}`).css({
      background: "#fff",
      width: "100px",
    });

    $(`.gallery li .slogan__lg .up`).css({'top': '50px', 'opacity': 0,});
    $(`.gallery .link${cnt} .slogan__lg .up`).delay(650).animate({"top":0, opacity:1},'slow');

    timeonoff = setInterval(moveg, 5000);

    if (onoff == false) {
      onoff = true;

      $(".ps").css({
        background:
          '#ef0010 url("../mainimages/stop_icon.png") no-repeat center',
        backdropFilter: "none",
        border: "1px solid #ef0010",
      });
    }
  });

});
