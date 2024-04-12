
$('.trigger').click(function(e){
  e.preventDefault();
  
  var dl = $('.list2 dl, .conduct dl');
  var myDl = $(this).parents('dl');

  if (myDl.hasClass('hide')) {
    dl.find('dd').slideUp(100);
    dl.removeClass('show').addClass('hide');

    myDl.removeClass('hide').addClass('show');
    myDl.find('dd').slideDown(100);
    $(this).addClass('active');
    

  } else {
    myDl.removeClass('show').addClass('hide');
    myDl.find('dd').slideUp(100);
    $(this).removeClass('active');
  }
});