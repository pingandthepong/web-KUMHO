const investData = {
  labels: ['최대주주 및 그 특수 관계인', '국내기관', '자사주', '외국인', '국내개인 및 기타'],
  datasets: [{
    label: '보통주',
    data: [47.51, 13, 2.86, 3.96, 1],
    backgroundColor: [
      '#ef0010',
      '#56423D',
      '#BEA6A0',
      '#0097D7',
      '#00D0FF'
    ],
    hoverOffset: 10,
  }]
};
            
const investConfig = {
  type: 'doughnut',
  data: investData,
  options: {
    plugins: {
      legend: {
        display: false,
        onClick: function(event, legendItem) {
          // 클릭 이벤트 무시
          event.stopPropagation();
        }
      },
      tooltip: {
        bodyFont: {
          size: 16
        },
        titleFont: {
          size: 18
        }
      }
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    }
  }
};

const invest3Graph = new Chart(
      document.getElementById('invest3Graph'),
      investConfig
);