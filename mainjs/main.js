var tabMemo = [
  {
    bgUrl: 'master1.jpg',
    title: '아부다비 관제탑',
    desc: '삼각형의 큰 돛을 단 다우(Dhow)선 모양을 형상화한 독특한 외관',
  },
  {
    bgUrl: 'master2.jpg',
    title: '두바이 신공항',
    desc: '세계 최대 규모로 두바이를 대표하는 신 아이콘',
  },
  {
    bgUrl: 'master3.jpg',
    title: '인천국제공항',
    desc: '한국을 대표하는 창문, 세계를 연결하는 문',
  },
  {
    bgUrl: 'master4.jpg',
    title: '신공항 관제탑',
    desc: '하늘을 지키는 눈, 세계를 이어주는 심장',
  },
  {
    bgUrl: 'master5.jpg',
    title: '어울림',
    desc: '가족과 이웃을 연결하는 편안한 삶의 시작',
  }
];

var tab = $('.master_tab_menu .tab');
var cnt = tab.size(); // 5

// tab에 hover 시
tab.hover(
  function () {
    var ind = $(this).index('.master_tab_menu .tab'); // 0 1 2 3 4
    
    tab.css({ background: 'rgba(0,0,0,.4' });
    $(this).css({ background: '#ef0010', });
    
    $('.master__inner').hide();
    $('.master__inner').show().css({
      background: `url("./mainimages/${tabMemo[ind].bgUrl}") no-repeat 0 0`,
      transition: 'all .1s',
    });

    $('.master_main_txt').hide();
      
    $('.master_tab_conlist h4').html(tabMemo[ind].title);
    $('.master_tab_conlist p').html(tabMemo[ind].desc);
  
    $('.master_tab_conlist').css({'opacity': 0, left: 0}).stop().animate({'opacity': 1, left: '150px'});
  },
  function () {
    $(this).css({ background: 'rgba(0,0,0,.4)' });

    $('.master__inner').css({
      background: 'url("./mainimages/master0.jpg") no-repeat 0 0',
      transition: 'all .1s',
    });

    $('.master_main_txt').show();
    
    $('.master_tab_conlist').css({'opacity': 0, left: 0}).stop().animate({'opacity': 0, left: '150px'});
  }  
);

// tab에 focus 시
tab.focus(function () {
  var ind = $(this).index('.master_tab_menu .tab'); // 0 1 2 3 4
  
  tab.css({ background: 'rgba(0,0,0,.4' });
  $(this).css({ background: '#ef0010', });
  
  $('.master_main_txt').hide();
  $('.master__inner').css({
    background: `url("./mainimages/${tabMemo[ind].bgUrl}") no-repeat 0 0`,
    transition: 'all .1s ease-out',
  });
  $('.master_tab_conlist h4').text(`${tabMemo[ind].title}`);
  $('.master_tab_conlist p').text(`${tabMemo[ind].desc}`);

  $('.master_tab_conlist').show().animate({ left: '150px', opacity: 1, });
});

// tab:last blur 시
$('.master_tab_menu .tab:last').blur(function () {
  $(this).css({ background: 'rgba(0, 0, 0, 0.4)', });
  
  $('.master_main_txt').show();
  $('.master__inner').css({
    background: 'url("./mainimages/master0.jpg") no-repeat 0 0',
  });
  $('.master_tab_conlist').hide();
});

