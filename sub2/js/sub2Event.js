const eventArea = 500;
let sec2LastScrollTop = 0;

// DONE: 각 section의 높이값 - 300 때 각 섹션에 .slideUp
const sections = document.querySelectorAll("section");
const intro2Lists = document.querySelectorAll(".intro2 .intro2__container li");

// DONE: 각 section offsetTop 미리 계산 (이벤트가 필요 이상으로 많이 등록되지 않도록 하기 위함)
const sectionOffsets = Array.from(sections).map((section) => section.offsetTop);

// DONE: scroll에 따라 animation
window.addEventListener("scroll", function () {
  let scroll = window.scrollY || document.scrollTop; // 현재스크롤

  sections.forEach((section, idx) => {
    if (scroll >= sectionOffsets[idx] - eventArea) {
      section.classList.add("slideEvent");
    }

    // DONE: .intro2(sections[1])) 각 li에 animation-delay(setTimeout ??)
    intro2Lists.forEach((intro2List, idx) => {
      intro2List.style.animationDelay = `${200 * idx}ms`;
    });
    sec2LastScrollTop = scroll;
  });
});
