Highcharts.chart('fPosition', {
  chart: {
      type: 'column'
  },
  // 범례 설정
  legend: {
    align: 'right',
    verticalAlign: 'top',
    layout: 'horizontal',
    x: 0,
    y: -20,
    

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
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: ''
      }
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0,
         
          
      }
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

document.getElementById('legend-container').innerHTML = document.getElementById('container').innerHTML;