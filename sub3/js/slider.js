const sliders = document.querySelectorAll(
  "#content .content_area .history .contlist",
);

sliders.forEach((slider) => {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절
    slider.scrollLeft = scrollLeft - walk;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
  });

  document.addEventListener("mouseup", (e) => {
    isDown = false;
  });
});
