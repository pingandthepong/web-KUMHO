// XMLHttpRequest 객체 생성
var xhr = new XMLHttpRequest();                 

// When readystate changes
xhr.onload = function() {                       
 
  // If server status was ok
  //if(xhr.status === 200) {                      
    
  //서버로 부터 전달된 json 데이터(단순 텍스트)를 responseText 속성을 통해 가져올 수 있다.
  // ⭐️ parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
  // JSON.parse() :  모양만 갖고 있는 놈을 진짜 자바스크립트의 객체배열로 변형해줌
    responseObject = JSON.parse(xhr.responseText);


    // console.log(responseObject.events[1].map);
    // console.log(responseObject.events[2].location);
    
    // console.log(responseObject.li[0].href);
    // console.log(responseObject.li[0].imgsrc);
    // console.log(responseObject.li[0].title);
    // console.log(responseObject.li[0].institution);
    // console.log(responseObject.li[0].date);


    var newContent = '';
    for (var i = 0; i < responseObject.li.length; i++) { 
      newContent += '<li>';
      // newContent += '<img src="' + responseObject.events[i].map + '" ';
      // newContent += 'alt="' + responseObject.events[i].href + '" />';
      // newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
      // newContent += responseObject.events[i].date + '</p>';
      newContent += `<a href="${responseObject.li[i].href}">`;
      newContent += `<div class="img_wrap"><img src="${responseObject.li[i].imgsrc}" alt=""></div>`;
      newContent += `<dl class="award_txt">`;
      newContent += `<dt>${responseObject.li[i].title}</dt>`;
      newContent += `<dd class="award_institution">${responseObject.li[i].institution}</dd>`;
      newContent += `<dd class="date">${responseObject.li[i].date}</dd>`;
      newContent += `</dl>`;
      newContent += `</a>`;
      newContent += '</li>';
    }

 
    document.getElementById('award-data').innerHTML = newContent;

  //}
};

// 요청을 준비한다.
// xhr.open('GET', 'data/data.json', true);        
xhr.open('GET', './data/award.json', true);        

// 요청을 전송한다
xhr.send(null);