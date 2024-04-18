var progressBar1 = new ProgressBar.Circle('#progressBar1', {
  strokeWidth: 8, // 선 두께
  easing: 'easeInOut', // 애니메이션 이징
  duration: 1400, // 애니메이션 지속 시간 (밀리초)
  color: '#f65742', // 진행률 바 색상
  trailColor: '#f3f3f3', // 진행률 바 배경 색상
  trailWidth: 8, // 배경 선 두께
  svgStyle: {width: '235px', height: '235px'}, // SVG 스타일
  text: {
    style: {
      // 텍스트 스타일
      color: '#007bff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false // 텍스트 자동 스타일링 비활성화
  },
  step: function(state, bar) {
    // 진행률 변화에 따른 콜백 함수
    bar.setText(Math.round(bar.value() * 100) + ' %'); // 퍼센트 표시
  }
});

var progressBar2 = new ProgressBar.Circle('#progressBar2', {
  strokeWidth: 8, // 선 두께
  easing: 'easeInOut', // 애니메이션 이징
  duration: 1400, // 애니메이션 지속 시간 (밀리초)
  color: '#f65742', // 진행률 바 색상
  trailColor: '#f3f3f3', // 진행률 바 배경 색상
  trailWidth: 8, // 배경 선 두께
  svgStyle: {width: '235px', height: '235px'}, // SVG 스타일
  text: {
    style: {
      // 텍스트 스타일
      color: '#007bff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false // 텍스트 자동 스타일링 비활성화
  },
  step: function(state, bar) {
    // 진행률 변화에 따른 콜백 함수
    bar.setText(Math.round(bar.value() * 100) + ' %'); // 퍼센트 표시
  }
});

var progressBar3 = new ProgressBar.Circle('#progressBar3', {
  strokeWidth: 8, // 선 두께
  easing: 'easeInOut', // 애니메이션 이징
  duration: 1400, // 애니메이션 지속 시간 (밀리초)
  color: '#f65742', // 진행률 바 색상
  trailColor: '#f3f3f3', // 진행률 바 배경 색상
  trailWidth: 8, // 배경 선 두께
  svgStyle: {width: '235px', height: '235px'}, // SVG 스타일
  text: {
    style: {
      // 텍스트 스타일
      color: '#007bff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false // 텍스트 자동 스타일링 비활성화
  },
  step: function(state, bar) {
    // 진행률 변화에 따른 콜백 함수
    bar.setText(Math.round(bar.value() * 100) + ' %'); // 퍼센트 표시
  }
});

var progressBar4 = new ProgressBar.Circle('#progressBar4', {
  strokeWidth: 8, // 선 두께
  easing: 'easeInOut', // 애니메이션 이징
  duration: 1400, // 애니메이션 지속 시간 (밀리초)
  color: '#f65742', // 진행률 바 색상
  trailColor: '#f3f3f3', // 진행률 바 배경 색상
  trailWidth: 8, // 배경 선 두께
  svgStyle: {width: '235px', height: '235px'}, // SVG 스타일
  text: {
    style: {
      // 텍스트 스타일
      color: '#007bff',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false // 텍스트 자동 스타일링 비활성화
  },
  step: function(state, bar) {
    // 진행률 변화에 따른 콜백 함수
    bar.setText(Math.round(bar.value() * 100) + ' %'); // 퍼센트 표시
  }
});

// ProgressBar 시작
progressBar1.animate(0.25, 0); // 0부터 1까지 애니메이션 실행
progressBar2.animate(0.5, 0); // 0부터 1까지 애니메이션 실행
progressBar3.animate(0.75, 0); // 0부터 1까지 애니메이션 실행
progressBar4.animate(1, 0); // 0부터 1까지 애니메이션 실행