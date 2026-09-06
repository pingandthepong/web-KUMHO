$(document).ready(function () {
  var key, value;

  function getParams() {
    // 현재 페이지의 url
    var url = decodeURIComponent(location.href);

    // url이 encodeURIComponent 로 인코딩 되었을 때 다시 디코딩
    url = decodeURIComponent(url);

    var params = "";
    params = url.substring(url.indexOf("?") + 1, url.length);

    key = params.split("=")[0];
    value = params.split("=")[1];
    value = Number(value);
  }

  getParams();

  // 일반 경로로 넘어왔을 때 페이지가 안보이는 것을 방지
  if (!value) {
    value = 1;
  }

  $(".contlist").hide();
  $('.tabs .tab').removeClass('current');
  
  $(".contlist:eq(" + (value - 1) + ")").show();
  $(".tabs .tab:eq(" + (value - 1) + ")").addClass('current');
  //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
});
