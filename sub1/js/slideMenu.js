$('.slideMenu li:eq(0) a').addClass('on');
$('.history_list:eq(0)').addClass('on');


$('.slideMenu a').click(function(e) {
  e.preventDefault();

  var hisInd = $(this).index('.slideMenu a');

  $('.slideMenu a').removeClass('on');
  $(this).addClass('on');

  $('.history_list').removeClass('on');
  $(`.history_list:eq(${hisInd})`).addClass('on');

});