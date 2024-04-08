Highcharts.chart('fPosition', {
  chart: {
      type: 'column'
  },
  title: {
      text: '',
      align: 'center'
  },
  xAxis: {
      categories: ['2021년', '2022년', '2023년'],
      crosshair: true,
      accessibility: {
          description: 'Years'
      },
      labels: {
        style: {
            fontSize: '19px',
            color: '#666',
        }
    }
  },
  yAxis: {
      min: 0,
      title: {
          text: ''
      },
      labels: {
        format: '{value:,.0f}',
        style: {
            fontSize: '15px',
        }
    }
  },
  credits: {
    enabled: false
  },
  plotOptions: {
      column: {
          series: {
            borderWidth: 0,
            groupPadding: 0.1,
          },
          pointPadding: 0.2,
          dataLabels: {
            enabled: true,
            inside: false, // 레이블을 열 안쪽에 표시
            color: '#333', // 레이블 색상 설정
            style: {
                fontSize: '15px',
                fontWeight: '600',
                textOutline: 'none' // 텍스트 외곽선 제거
            },
            formatter: function() {
              return Highcharts.numberFormat(this.y, 0, '', ','); // 데이터 값 포맷팅
          }
        }
      },
  },
  tooltip: {
    style: {
      fontSize: '19px',
      padding: '10px'
    }
  },
  // 범례 설정
  legend: {
    align: 'right',
    verticalAlign: 'top',
    layout: 'horizontal',
    x: 0,
    y: 0,
    symbolRadius: 1,
    symbolWidth: 24,
    symbolHeight: 24,
    symbol: function() {
      return 'rect';
    },
    itemStyle: {
      fontSize: '19px'
    },
    itemMarginTop: 0,
    itemMarginBottom: 50,
    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white'
  },
  series: [
      {
          name: '자산',
          data: [17359, 16911, 16923],
          color: '#f65742'
      },
      {
          name: '부채',
          data: [10831, 11478, 12225],
          color: '#bfb1a3'
      },
      {
          name: '자본',
          data: [6528, 5433, 4698],
          color: '#f0cc89'
      }
  ]
});