$.ajax ({
  url: "../data/youtubePopup.json",
  dataType: "json",
  success: function(data) {
    var useData = data.youtubePopup;

    let txt = ``;

    function dataPrint() {

      for (let i in useData) {
        txt += `<iframe width="560" height="315" `,
        txt += `src="${useData[i].iframeSrc}" `
        txt += `title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>`,
        txt += `</iframe>`
      }
      
      $('.youtube_init').html(txt);
    }
    dataPrint();
  }
});



// 동적으로 생성된 링크이기 때문에 이벤트 위임 사용
$(document).on('click', '.youtube_link', function(e) {
  e.preventDefault();
  
  $('.modal_box').fadeIn();
  $('.popup_youtube').fadeIn();
});


$('.modal_box').click(function(e){
  e.preventDefault();
  
  $(this).fadeOut();
  $('.popup_youtube').fadeOut();
  
  let video = $('.youtube_init').find('iframe').attr("src");
  $('.youtube_init').find('iframe').attr("src", "");
  $('.youtube_init').find('iframe').attr("src", video);
});

