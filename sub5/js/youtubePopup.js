$(document).ready(function() {
  // 링크가 동적으로 생성되기 때문에 비디오 정보 미리 가져오기
  $.ajax({
    url: "../data/youtubePopup.json",
    dataType: "json",
    success: function(data) {
      var useData = data.youtubePopup;

      // 팝업 비디오 정보를 변수에 저장
      var videos = useData.map(function(item) {
        return `<iframe src="${item.iframeSrc}" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
      });

      // 클릭 이벤트 핸들러를 한 번만 바인딩
      $('.youtube_link').click(function(e) {
        e.preventDefault();
        
        $('.modal_box').fadeIn();
        $('.popup_youtube').fadeIn();
        
        // 클릭된 링크의 인덱스를 가져와서 해당하는 비디오를 띄우기
        var index = $(this).index('.youtube_link');
        $(".youtube_init").html(videos[index]);
      });
    }
  });

  // 모달 박스 클릭 시 동작
  $('.modal_box').click(function() {
    $(this).fadeOut();
    $('.popup_youtube').fadeOut();

    // 비디오를 초기화
    $('.youtube_init iframe').each(function() {
      var videoSrc = $(this).attr("src");
      $(this).attr("src", "").attr("src", videoSrc);
    });
  });
});
