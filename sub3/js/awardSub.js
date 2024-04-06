$(function () {

  
  $(window).scroll(function() {
    
    var contentTop = $('#content').offset().top;
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= contentTop) {$('#award').focus();}
  });

  $.ajax({
    url: "../data/awardSub.json",

    dataType: "json",

    // 연결이 성공하면 자동으로 함수 계산됨
    // 매개변수 안에 자동으로 연결한 객체 배열이 들어감
    success: function (data) {
      var useData = data.li; // 전체 객체배열이 저장됨 (정확히는 객체인 것 같음)
      // console.log(useData); // Array(20)

      // 검색 기능을 위한 매개변수 arr
      function dataPrint(arr) {
        var txt = `<ul class="award_list">`;

        for (var i in arr) {

          txt += "<li>";
          txt += `<a href="${arr[i].href}">`;
          txt += `<div class="img_wrap"><img src="${arr[i].imgsrc}" alt=""></div>`;
          txt += `<dl class="award_txt">`;
          txt += `<dt>${arr[i].title}</dt>`;
          txt += `<dd class="award_institution">${arr[i].institution}</dd>`;
          txt += `<dd class="date">${arr[i].date}</dd>`;
          txt += `</dl>`;
          txt += `</a>`;
          txt += "</li>";
        }

        txt += "</ul>";

        $(".award__contents").html(txt);
      }

      // 초기실행 함수 호출
      dataPrint(useData);


      // 검색 버튼 클릭 시
      $('#searchBtn').click(function() {
        var value = $('#award').val();

        var newArray = useData.filter(function(element) {
          
          return element.title.includes(value) || element.institution.includes(value) || element.date.includes(value);
            
        });
      
        // 없는 값 검색 시 에러 문구
        if (newArray.length === 0) {
          $('.award__contents').html('<p>검색 결과가 없습니다.</p>');
        } else {
          dataPrint(newArray);
        };
      });


      // 검색어 입력 후 엔터를 누르면 검색 버튼이 클릭되도록
      $('#award').keypress(function(e) {
        if (e.keyCode === 13) {
          $('#searchBtn').click();
        }
      });

    },
  });
});
