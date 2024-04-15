$('.manage_accordion .trigger').on('click', function(e) {
  e.preventDefault();
  
  var list = $('.manage_list')
  var myList = $(this).parents('.manage_list');


  // 닫혀있다면
  if(myList.hasClass('hide')) {
    // 모두 다 닫고
    list.find('.a').slideUp('fast');
    list.removeClass('show').addClass('hide');

    // 클래스 바꾸기
    myList.removeClass('hide').addClass('show');
    myList.find('.a').slideDown('slow');
    

    // 열려있다면
  } else {

    // 다른 list show 지우기
    list.removeClass('show').addClass('hide');
    // 클래스 바꾸기
    myList.removeClass('show').addClass('hide');
    myList.find('.a').slideUp('fast');
  }
});