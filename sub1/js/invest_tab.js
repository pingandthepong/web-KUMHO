$('.tab_com:eq(0)').show();

$('.sub_list a').click(function (e) {
  e.preventDefault();
  var tabInd = $(this).index('.sub_list a');
  
  $(this).parents('.sub_list').find('li').removeClass('current');
  $(this).parent().addClass('current');

  $('.tab_com').hide();
  $(`.tab${tabInd + 1}`).show();
  
})