var dl = $('.list2 dl, .conduct dl');

$('.trigger').click(function(e){
  e.preventDefault();

  var myDl = $(this).parents('dl');

  if (myDl.hasClass('hide')) {
    dl.find('dd').slideUp(100);
    dl.removeClass('show').addClass('hide');

    myDl.removeClass('hide').addClass('show');
    myDl.find('dd').slideDown(100);

  } else {
    myDl.removeClass('show').addClass('hide');
    myDl.find('dd').slideUp(100);
  }
});