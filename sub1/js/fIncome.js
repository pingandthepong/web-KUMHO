Highcharts.chart("fIncome", {
  chart: {
    type: "column",
  },
  title: {
    text: "",
    align: "center",
  },
  xAxis: {
    categories: ["2021년", "2022년", "2023년"],
    crosshair: true,
    accessibility: {
      description: "Years",
    },
    labels: {
      style: {
        fontSize: "19px",
        color: "#666",
      },
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "",
    },
    labels: {
      formatter: function() {
        return Highcharts.numberFormat(this.value, 0, "", ",");
      },
      style: {
        fontSize: "15px",
      },
    },
  },
  credits: {
    enabled: false,
  },
  tooltip: {
    style: {
      fontSize: "19px",
      padding: "10px",
    },
    // tooltip의 formatter 함수 수정
    formatter: function () {
      return `<span style="font-size: 19px">${this.x}</span><br/><span style="color:${this.series.color}">\u25CF</span>${this.series.name}: <b>${Highcharts.numberFormat(this.y, 0, "'", ",")}</b>`;
    },
  },
  plotOptions: {
    column: {
      series: {
        borderWidth: 0,
        groupPadding: 0.1,
      },
      // pointPadding: 0.2,
      dataLabels: {
        enabled: true,
        inside: false, // 레이블을 열 안쪽에 표시
        color: "#333", // 레이블 색상 설정
        style: {
          fontSize: "15px",
          fontWeight: "600",
          textOutline: "none", // 텍스트 외곽선 제거
        },
        formatter: function () {
          return Highcharts.numberFormat(this.y, 0, "", ","); // 데이터 값 포맷팅
        },
      },
    },
  },
  legend: {
    align: "right",
    verticalAlign: "top",
    layout: "horizontal",
    x: 0,
    y: 0,
    symbolRadius: 1,
    symbolWidth: 18,
    symbolHeight: 18,
    symbol: function () {
      return "rect";
    },
    itemStyle: {
      fontSize: "16px",
    },
    itemMarginTop: 0,
    itemMarginBottom: 50,
    backgroundColor:
      (Highcharts.theme && Highcharts.theme.background2) || "white",
  },
  series: [
    {
      name: "매출",
      data: [20650, 20485, 22176],
      color: "#f65742",
    },
    {
      name: "매출총이익",
      data: [1916, 1381, 970],
      color: "#56423e",
    },
    {
      name: "영업이익",
      data: [1115, 559, 218],
      color: "#bfb1a3",
    },
    {
      name: "세전이익",
      data: [1099, 602, 58],
      color: "#00aacb",
    },
    {
      name: "순이익",
      data: [1495, 240, 66],
      color: "#f0cc89",
    },
  ],
});
