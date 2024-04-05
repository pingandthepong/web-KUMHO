$(function () {

  $.ajax({
    url: "../data/awardSub.json",

    dataType: "json",

    // 연결이 성공하면 자동으로 함수 계산됨
    // 매개변수 안에 자동으로 연결한 객체 배열이 들어감
    success: function (data) {
      var useData = data.li; // 전체 객체배열이 저장됨 (정확히는 객체인 것 같음)
      console.log(useData); // Array(20)

      function dataPrint() {
        var txt = `<ul class="award_list">`;

        for (var i in useData) {

          txt += "<li>";
          txt += `<a href="${useData[i].href}">`;
          txt += `<div class="img_wrap"><img src="${useData[i].imgsrc}" alt=""></div>`;
          txt += `<dl class="award_txt">`;
          txt += `<dt>${useData[i].title}</dt>`;
          txt += `<dd class="award_institution">${useData[i].institution}</dd>`;
          txt += `<dd class="date">${useData[i].date}</dd>`;
          txt += `</dl>`;
          txt += `</a>`;
          txt += "</li>";
        }

        txt += "</ul>";

        $(".award__contents").html(txt);
      }

      //초기실행, 함수호출
      dataPrint();
    },
  });
});
