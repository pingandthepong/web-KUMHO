$.ajax({
  url: "../data/youtube.json",
  dataType: "json",
  success: function(data) {
    var useData = data.youtube;

    function dataPrint() {
      var txt = "<ul>"

      for (var i in useData) {
        txt += `<li>`,
        txt += `<a href="#">`,
        txt += `<div class="img_box">`,
        txt += `<div class="img">`
        txt += `<img src="${useData[i].imgSrc}" alt="${useData[i].imgAlt}">`,
        txt += `</div>`,
        txt += `</div>`,
        txt += `<div class="txt_box">`,
        txt += `<p class="tit">${useData[i].tit}</p>`
        txt += `<p class="txt">${useData[i].txt}</p>`
        txt += `</div>`,
        txt += `</a>`,
        txt += `</li>`
      }

      txt += "</ul>"
      $('.contlist ul').html(txt);
    }
    dataPrint();

  }
});