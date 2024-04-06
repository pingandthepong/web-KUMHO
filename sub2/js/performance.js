$(function() {

  $(window).scroll(function() {
    var contentTop = $('#content').offset().top;
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= contentTop) {
      $('#performance').focus();
    }
  });


  $.ajax({
    url: "../data/performanceSub.json",
    dataType: "json",

    // 매개변수로 연결한 객체 배열 전달
    success: function(data) {
      // 전체 배열 안 객체 저장
      var useData = data.performance;
      // console.log(useData); // Array(12)

      // 검색 기능을 위한 매개변수 arr
      function dataPrint(arr) {
        var txt = `<ul>`;

        for (var i in arr) {

          txt += `<li>`;
          txt += `<a href="${arr[i].href}">`;
          txt += `<div class="all_img_container"></div>`;
          txt += `<div class="badge_list">`;
          txt += `<span class="state01">${arr[i].state01}</span>`;
          txt += `<span class="state02">${arr[i].state02}</span>`;
          txt += `</div>`;
          txt += `<p class="name">${arr[i].name}</p>`;
          txt += `</a>`;
          txt += `</li>`;

        }

        txt += `</ul>`;

        $('.performance_list').html(txt);
      }

      dataPrint(useData);
      

      $('.performance_list ul li').each(function(idx, list) {
        console.log(idx); // 0 ~ 11

        $(this).find($('.all_img_container')).css({
          background: `url(${useData[idx].bgUrl}) no-repeat center`,
        });
      });
    }
  })

});
