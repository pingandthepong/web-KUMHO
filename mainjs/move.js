// JavaScript Document

$(document).ready(function () {
  var timeonoff; // 타이머 처리
  var imageCount = $(".gallery ul li").size(); // 이미지 총 개수
  var cnt = 1; //이미지 순서
  var onoff = true; // true:타이머 동작중 , false:동작하지 않을 때

  $('.btn1').css({
    background: '#fff',
    width: '100px',
  });

  $('.gallery .link1').fadeIn('normal');
  $('.gallery .link1 .slogan__lg .up').delay(350).animate({top: 0, opacity: 1},'slow');

  $('.dock_progress .num').text(`${cnt}`);
  $('.dock_progress .max').text(`${imageCount}`);


  function moveg() {
    if (cnt == imageCount + 1) cnt = 1;
    if (cnt == imageCount) cnt = 0;
    cnt++;

    
    $('.gallery li').hide();
    $(`.gallery .link${cnt}`).fadeIn('normal');
    
    
    $('.mbutton').css({
      background: 'rgba(255, 255, 255, 0.5)',
      width: '24px',
    });
    
    $(`.btn${cnt}`).css({
      background: '#fff',
      width: '100px',
    });
    
    $('.gallery li .slogan__lg .up').css({ top: "30px", opacity: 0 });
    $(`.gallery .link${cnt} .slogan__lg .up`).delay(350).animate({top: 0, opacity: 1},'slow');
    $('.dock_progress .num').text(`${cnt}`);

    if (cnt == imageCount) cnt = 0;
  }

  timeonoff = setInterval(moveg, 4000);

  $('.mbutton').click(function (event) {
    var $target = $(event.target); // 클릭한 버튼 $target == $(this)
    clearInterval(timeonoff);

    $('.gallery li').hide();

    if ($target.is('.btn1')) {
      cnt = 1;
    } else if ($target.is('.btn2')) {
      cnt = 2;
    } else if ($target.is('.btn3')) {
      cnt = 3;
    } else if ($target.is('.btn4')) {
      cnt = 4;
    }

    $(`.gallery .link${cnt}`).fadeIn('normal');

    $('.dock_progress .num').text(`${cnt}`);

    $('.mbutton').css({
      background: 'rgba(255, 255, 255, 0.5)',
      width: '24px',
    });

    $(`.btn${cnt}`).css({
      background: '#fff',
      width: '100px',
    });

    $(`.gallery li .slogan__lg .up`).css({top: '30px', opacity: 0,});
    $(`.gallery .link${cnt} .slogan__lg .up`).delay(350).animate({top: 0, opacity: 1},'slow');

    if (cnt == imageCount) cnt = 0;

    timeonoff = setInterval(moveg, 4000);

    if (onoff == false) {
      onoff = true;
      $('.ps').css({
        background:
          '#ef0010 url("../mainimages/stop_icon.png") no-repeat center',
        backdropFilter: 'none',
        border: '1px solid #ef0010',
      });
    }
  });

  // stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function () {
    if (onoff == true) {
      clearInterval(timeonoff);
      $(this).css({
        background:
          'rgba(255,255,255,.2) url("../mainimages/play_icon.png") no-repeat center',
        backdropFilter: 'blur(2px)',
        border: '1px solid #fff',
      });
      $('.btn_wrap').css({
        background: '#ef0010',
        backdropFilter: 'none',
        border: '1px solid #ef0010',
      });
      onoff = false;
    } else {
      timeonoff = setInterval(moveg, 4000);
      $(this).css({
        background:
          '#ef0010 url("../mainimages/stop_icon.png") no-repeat center',
        backdropFilter: '1px solid #ef0010',
        border: 'none',
      });
      $('.btn_wrap').css({
        background: 'rgba(255,255,255,.2)',
        backdropFilter: 'blur(5px)',
        border: '1px solid #fff',
      });
      onoff = true;
    }
  });

  // 좌우 버튼 처리
  $('.visual .btn').click(function () {
    clearInterval(timeonoff);
    if ($(this).is('.btnRight')) {
      if (cnt == imageCount) cnt = 0;
      cnt++;
      $('.dock_progress .num').text(`${cnt}`);
      $('.btn_wrap').css({
        background: 'rgba(255,255,255,.2)',
        backdropFilter: 'blur(5px)',
        border: '1px solid #fff',
      });
    } else if ($(this).is('.btnLeft')) {
      if (cnt == 1) cnt = imageCount + 1;
      if (cnt == 0) cnt = imageCount;
      cnt--;
      $('.dock_progress .num').text(`${cnt}`);
      $('.btn_wrap').css({
        background: 'rgba(255,255,255,.2)',
        backdropFilter: 'blur(5px)',
        border: '1px solid #fff',
      });
    }

    $('.gallery li').hide();
    $(`.gallery .link${cnt}`).fadeIn('normal');

    $('.mbutton').css({
      background: 'rgba(255, 255, 255, 0.5)',
      width: '24px',
    });

    $(`.btn${cnt}`).css({
      background: '#fff',
      width:'100px',
    });

    $(`.gallery li .slogan__lg .up`).css({top: '30px', opacity: 0,});
    $(`.gallery .link${cnt} .slogan__lg .up`).delay(350).animate({top: 0, opacity: 1},'slow');

    timeonoff = setInterval(moveg, 4000);

    if (onoff == false) {
      onoff = true;

      $('.ps').css({
        background:
          '#ef0010 url("../mainimages/stop_icon.png") no-repeat center',
        backdropFilter: 'none',
        border: '1px solid #ef0010',
      });
    }
  });

});
