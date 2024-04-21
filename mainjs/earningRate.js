const data = [];
const data2 = [];
let prev = 100;
let prev2 = 80;
for (let i = 0; i < 1000; i++) {
  prev += 5 - Math.random() * 10;
  data.push({x: i, y: prev});
  prev2 += 5 - Math.random() * 10;
  data2.push({x: i, y: prev2});
}

// Animation
const totalDuration = 10000;
const delayBetweenPoints = totalDuration / data.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  }
};

const config = {
  type: 'line',
  data: {
    datasets: [{
      borderColor: "#ef0010",
      borderWidth: 1,
      radius: 0,
      data: data,
    },
    {
      borderColor: "#f65742",
      borderWidth: 1,
      radius: 0,
      data: data2,
    }]
  },
  options: {
    animation,
    interaction: {
      intersect: false
    },
    plugins: {
      legend: false
    },
    // scales: {
    //   x: {
    //     type: 'linear'
    //   }
    // }
    scales: {
      x: {
        type: 'linear',
        grid: {
          color: 'rgba(255, 0, 0, 0)', // x축의 격자 라인 색상
          borderColor: 'rgba(255, 0, 0, 0.5)', // x축의 격자 라인 테두리 색상
          borderWidth: 1, // x축의 격자 라인 두께
        }
      },
      y: {
        type: 'linear',
        grid: {
          color: 'rgba(0, 0, 255, 0.1)', // y축의 격자 라인 색상
          borderColor: 'rgba(0, 0, 255, 0.1)', // y축의 격자 라인 테두리 색상
          borderWidth: 1, // y축의 격자 라인 두께
        }
      }
    }
  }
};

const earningRate = new Chart(
  document.getElementById("earningRate"),
  config
);