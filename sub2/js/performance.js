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
      // console.log(useData); // Array(15)

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

      // 배경 사진 설정 함수
      function setBackgroundImage (arr) {
        $('.performance_list ul li').each(function(idx) {
          $(this).find($('.all_img_container')).css({
            background: `url(${arr[idx].bgUrl}) no-repeat center`,
          });
        });
      }
  
      // 초기실행 함수 호출
      dataPrint(useData);
      setBackgroundImage(useData);



      
      // .suggestion span 클릭 시 검색
      $('.suggestion a').click(function(e) {
        e.preventDefault();
        var txtVal = $(this).find('span').text();
        var newArray = useData.filter(function(element) {
          return element.state01.includes(txtVal) || element.state02.includes(txtVal) || element.name.includes(txtVal);
        });
        dataPrint(newArray);
        setBackgroundImage(newArray);
      })


      // 검색 버튼 클릭 시
      $('#searchBtn').click(function() {
        var value = $('#performance').val();
        var newArray = useData.filter(function(element) {
          return element.state01.includes(value) || element.state02.includes(value) || element.name.includes(value);
        });

        // 없는 값 검색 시 에러 문구
        if(newArray.length === 0) {
          $('.performance_list').html('<p>검색 결과가 없습니다.</p>');
        } else {
          dataPrint(newArray);
          setBackgroundImage(newArray);
        }
      });

      // 검색어 입력 후 엔터를 누르면 검색 버튼이 클릭되도록
      $('#performance').keypress(function(e) {
        if (e.keyCode === 13) {
          $('#searchBtn').click();
        }
      });
      
      }
    });
  });
