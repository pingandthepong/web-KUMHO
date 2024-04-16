// javaScript AJAX
// XMLHttpRequest 객체 생성
var xhr = new XMLHttpRequest();
var responseObject;


xhr.onload = function() {
  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
  // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
  responseObject = JSON.parse(xhr.responseText);

};

// 요청 준비 및 전송
xhr.open('GET', '../../data/popupJob.json', true);
xhr.send(null);



// 모달 (jQuery)
$(document).ready(function(){
 
  var newContent='';

  $('.job_info_list a').click(function(e){
      e.preventDefault();

      // 클릭 시 인덱스 번호만 빼내면 끝남!
      var ind = $(this).index('.job_info_list a');

      $('.modal_box2').fadeIn('fast');
      $('.popup_job').fadeIn('slow');

      newContent=''; // 이전 데이터가 비워지도록 초기화
      newContent+=`<div class="popup_job modal2">`;
      newContent+=`<h5>${responseObject.popupJob[ind].title}<span>${responseObject.popupJob[ind].category}</span></h5>`;
      newContent+=`<dl class="introduce">`;
      newContent+=`<dt>직무특성 및 소개</dt>`;
      newContent+=`<dd class="strong">${responseObject.popupJob[ind].introStrong}</dd>`;
      newContent+=`<dd>${responseObject.popupJob[ind].introDes}</dd>`;
      newContent+=`</dl>`;
      newContent+=`<dl class="condition">`;
      newContent+=`<dt>필요역량 및 우대조건</dt>`;
      newContent+=`<dd><span class="category">전공 :  </span>${responseObject.popupJob[ind].condition1}</dd>`;
      newContent+=`<dd><span class="category">학위 :  </span>${responseObject.popupJob[ind].condition2}</dd>`;
      newContent+=`<dd><span class="category">knowledge :  </span>${responseObject.popupJob[ind].condition3}</dd>`;
      newContent+=`<dd><span class="category">Skill :  </span>${responseObject.popupJob[ind].condition4}</dd>`;
      newContent+=`</dl>`;
      newContent+=`<dl class="direction">`;
      newContent+=`<dt>Career Path 및 발전 방향</dt>`;
      newContent+=`<dd>${responseObject.popupJob[ind].direction}</dd>`;
      newContent+=`</dl>`;
      newContent+=`<div class="popupjob_close">`;
      newContent+=`<a href="#">닫기</a>`;
      newContent+=`</div>`;
      newContent+=`</div>`;




      $('.popup_job').html(newContent);
      // console.log(responseObject);
  });
 

  $('.popupjob_close, .modal_box2').click(function(e){
    e.preventDefault();
      
    $('.modal_box2').hide();
    $('.popup_job').hide();
  });
});
