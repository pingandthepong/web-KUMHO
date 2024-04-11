$('.activity li').each(function() {
  var des = $(this).find('.des');
  var titleSpan = $(this).find('.title > span');

  // 초기 상태
  des.hide();
  titleSpan.html('<i class="fa-solid fa-plus"></i>');

  // 첫 번째 요소(show)만 열림
  if($(this).hasClass('show')) {
    des.slideDown();
    titleSpan.html('<i class="fa-solid fa-minus"></i>');
  };
});

// 트리거 클릭 핸들러
$('.trigger').on('click', function(e) {
  e.preventDefault();

  var myList = $(this).parents('li');

  // 내가 닫혀있다면
  if(myList.hasClass('hide')) {
    // 다 닫고
    $('.activity li').removeClass('show').addClass('hide').find('.des').slideUp();
    $('.activity li').find('.title > span').html('<i class="fa-solid fa-plus"></i>');

    // 나만 열기
    myList.removeClass('hide').addClass('show').find('.des').slideDown();
    myList.find('.title > span').html('<i class="fa-solid fa-minus"></i>');

  } else {
    // 내가 열려있다면 닫기
    myList.removeClass('show').addClass('hide').find('.des').slideUp();
    myList.find('.title > span').html('<i class="fa-solid fa-plus"></i>');
  }

});

// 전체보기 클릭 핸들러
$('.all').on('click', function(e) {
  e.preventDefault();

  // hide가 하나라도 있다면
  if($('.activity li.hide').length) {
    // 다 열기
    $('.activity li').removeClass('hide').addClass('show').find('.des').slideDown();
    $('.activity li').find('.title > span').html('<i class="fa-solid fa-minus"></i>')
    $(this).find('i').css({transform: 'rotate(180deg)'});

  } else {
    // 다 닫기
    $('.activity li').removeClass('show').addClass('hide').find('.des').slideUp();
    $('.activity li').find('.title > span').html('<i class="fa-solid fa-plus"></i>')
    $(this).find('i').css({transform: 'rotate(0deg)'});
  }

});
