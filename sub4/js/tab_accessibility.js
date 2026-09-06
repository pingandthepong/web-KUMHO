// 초기 상태
$(".tabs .tab:eq(0)").addClass("on");
$(".tabs .contlist:eq(0)").show();

// .tab 클릭시 addClass('on')
$(".tab").on("click", function (e) {
  e.preventDefault();
  $(".tab").removeClass("on");
  $(this).addClass("on");

  var index = $(this).index('.tab');
  $('.contlist').hide();
  $(`.contlist:eq(${index})`).show();
});


// tab2
Highcharts.chart("system", {
  chart: {
    height: 300,
    inverted: false,
  },

  title: {
    text: "",
  },

  plotOptions: {
    series: {
      nodeWidth: "22%",
    },
  },

  credits: {
    enabled: false,
  },

  series: [
    {
      type: "organization",
      name: "",
      keys: ["from", "to"],
      data: [
        ["그룹 경영 비전", "경영기획"],
        ["경영기획", "지원관리"],
        ["경영기획", "경영지원"],
        ["경영기획", "측정&middot;분석&middot;개선"],
        ["경영지원", "사업운영"],
        ["지원관리", "사업운영"],
        ["측정&middot;분석&middot;개선", "사업운영"],
      ],
      levels: [
        {
          level: 0,
          color: "#ef0010",
          dataLabels: {
            color: "white",
          },
        },
        {
          level: 1,
          color: "#f65742",
          dataLabels: {
            color: "white",
          },
        },
        {
          level: 2,
          color: "#bfb1a3",
          dataLabels: {
            color: "white",
          },
        },
        {
          level: 3,
          color: "#2c44fe",
          dataLabels: {
            color: "white",
          },
        },
      ],
      colorByPoint: false,
      borderColor: "",
      borderWidth: 2,
    },
  ],

  tooltip: {
    outside: true,
    style: {
      display: "none",
    },
  },
});


