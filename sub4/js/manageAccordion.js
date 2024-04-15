// 클릭 이벤트 핸들러
var list = $('.manage_accordion .manage_list')

$('.manage_accordion .trigger').on('click', function(e) {
  e.preventDefault();

  var myList = $(this).parents('.manage_list');


  // 닫혀있다면
  if(myList.hasClass('hide')) {
    // 모두 다 닫고
    list.removeClass('show').addClass('hide')
    list.find('.a').slideUp(100);

    // 클래스 바꾸기
    myList.removeClass('hide').addClass('show').find('.a').slideDown(100);
    

    // 열려있다면
  } else {
    // 클래스 바꾸기
    myList.removeClass('show').addClass('hide').find('.a').slideUp(100);
  }
})