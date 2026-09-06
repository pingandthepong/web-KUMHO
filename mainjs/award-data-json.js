import { awardSlide } from "./awardSlide.js";

// XMLHttpRequest 객체 생성
var xhr = new XMLHttpRequest();

// When readystate changes
xhr.onload = function () {
  // If server status was ok
  if (xhr.status === 200) {
    //서버로 부터 전달된 json 데이터(단순 텍스트)를 responseText 속성을 통해 가져올 수 있다.
    // ⭐️ parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
    // JSON.parse() :  모양만 갖고 있는 놈을 진짜 자바스크립트의 객체배열로 변형해줌
    var responseObject = JSON.parse(xhr.responseText);

    // console.log(responseObject.li[0].href);
    // console.log(responseObject.li[0].imgsrc);
    // console.log(responseObject.li[0].title);
    // console.log(responseObject.li[0].institution);
    // console.log(responseObject.li[0].date);

    var newContent = "";

    responseObject.li.forEach(function (item) {
      newContent += "<li>";
      newContent += `<a href="./sub3/sub3_3.html">`;
      newContent += `<div class="img_wrap"><img src="${item.imgsrc}" alt=""></div>`;
      newContent += `<dl class="award_txt">`;
      newContent += `<dt>${item.title}</dt>`;
      newContent += `<dd class="award_institution">${item.institution}</dd>`;
      newContent += `<dd class="date">${item.date}</dd>`;
      newContent += `</dl>`;
      newContent += `</a>`;
      newContent += "</li>";
    });

    document.getElementById("award-data").innerHTML = newContent;

    // awardSlide 모듈 함수 호출
    awardSlide();
  } else {
    console.error("Error loading data. Status code: " + xhr.status);
  }
};

// 요청 준비 및 전송
xhr.open("GET", "./data/award.json", true);
xhr.send(null);
