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

$('.tab').on('mouseenter focus', function () {
  const index = $(this).parent().index();
  const tabInfo = tabMemo[index];

  $('.tab').removeClass('active');
  $(this).addClass('active');

  $('.master_main_txt').hide();
  $('.master__inner').css({
    background: `url("./mainimages/${tabInfo.bgUrl}") no-repeat 0 0`,
    transition: 'all .1s',
  });

  $('.tab_title').text(tabInfo.title);
  $('.tab_desc').text(tabInfo.desc);

  $('.master_tab_conlist').css({'opacity': 0, left: 0}).stop().animate({'opacity': 1, left: '150px'});
});

$('.tab').on('mouseleave blur', function() {
  $('.tab').removeClass('active');

  $('.master_main_txt').show();
  $('.master__inner').css({
    background: `url("./mainimages/master0.jpg") no-repeat 0 0`,
    transition: 'all .1s',
  });

  $('.master_tab_conlist').css({'opacity': 0, left: 0}).stop().animate({'opacity': 0, left: '150px'});
})
