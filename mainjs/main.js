var tab = $('.master_tab .tab');
var cnt = tab.size(); // 5

// tabList에 hover했을 때
// 1. master_main_txt hide(), master__inner의 bg 변경
// 2. .master__inner_txt show()

// tab.hover(
//   function () {
//     var ind = $(this).index('.master_tab .tab'); // 0 1 2 3 4

//     $('.master_main_txt').hide();
//     $('.master__inner').css({
//       background: `url("../mainimages/${tabMemo[ind].bgUrl}") no-repeat 0 0`,
//       transition: 'all .5s ease-out',
//     });
//     $('.master_tab_list').animate({left: '150px', opacity: 0,});
//     $('.master_tab_list').fadeIn('500').animate({left: '100px', opacity: 1,}, 'slow');

//   },
//   function () {
//     $('.master_main_txt').show();
//     $('.master__inner').css({
//       background: 'url("../mainimages/master0.jpg") no-repeat 0 0',
//       transition: 'all .5s ease-out',
//     });
//     $('.master_tab_list').fadeOut('500');
//   }  
// );
var ind = $(this).index('.master_tab .tab'); // 0 1 2 3 4

tab.mouseenter(function () {
  $('.master_main_txt').hide();
  $('.master__inner').css({
    background: `url("../mainimages/${tabMemo[ind].bgUrl}") no-repeat 0 0`,
    transition: 'all .5s ease-out',
  });
  $('.master_tab_list').animate({ left: '150px', opacity: 0, });
  $('.master_tab_list').fadeIn('500').animate({ left: '100px', opacity: 1, }, 'slow');
});

tab.mouseleave(function () { 
  $('.master_main_txt').show();
  $('.master__inner').css({
    background: 'url("../mainimages/master0.jpg") no-repeat 0 0',
    transition: 'all .5s ease-out',
  });
  $('.master_tab_list').fadeOut('500');
  
  );
});



var tabMemo = [
  {
    bgUrl: 'master1.jpg',
    title: '아부다비 관제탑',
    desc: '삼각형의 큰 돛을 단 다우(Dhow)선 모양을 형상화한 독특한 외관',
  },
  {
    bgUrl: 'master2.jpg',
    title: '두바이 신공항',
    desc: '세계 최대의 규모로 두바이를 대표하는 신 아이콘',
  },
  {
    bgUrl: 'master3.jpg',
    title: '인천국제공항',
    desc: '한국을 대표하는 창문, 세계를 연결하는 문. 인천국제공항. 금호건설이 함께한 현대적인 설계와 첨단 시설로 구성된 인천국제공항은 세계적인 허브공항으로서의 역할을 자랑합니다.',
  },
  {
    bgUrl: 'master4.jpg',
    title: '신공항 관제탑',
    desc: '하늘을 지키는 눈, 세계를 이어주는 심장. 금호건설이 세계적인 항공 교통을 관리하는 신공항 관제탑을 세웠습니다. 안전과 혁신이 어우러진 공간에서 세계 각지를 연결하는 새로운 미래를 만들어나갑니다.',
  },
  {
    bgUrl: 'master5.jpg',
    title: '어울림',
    desc: '가족과 이웃이 어울리는 공간, 어울림 아파트. 금호건설이 디자인과 편의를 모두 충족시킨 고급스러운 주거환경으로 여러분을 초대합니다. 편안한 삶의 시작, 어울림 아파트에서 만나보세요.',
  }
];
