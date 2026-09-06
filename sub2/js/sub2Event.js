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

// TODO: intro3 move
let moveSize = (document.querySelector('.intro3_content li').offsetWidth / 2 + 20); // 20은 gap/2
let movePosition = 0;
let newCnt = 0;
let startX, endX;
const intro3 = document.querySelector(".intro3");
const intro3Content = document.querySelector(".intro3_content");

function touchMediaStart(e) {
  e.preventDefault();
  if (e.pageX == undefined) {
    // 모바일
    startX = e.touches[0].pageX;
  } else {
    // 데스크탑
    e.preventDefault();
    startX = e.pageX;
  }
}

function touchMediaEnd(e) {
  e.preventDefault();
  if (e.pageX == undefined) {
    endX = e.changedTouches[0].pageX;
  } else {
    e.preventDefault();
    endX = e.pageX;
  }

  if (startX > endX) {
    newCnt++;

    if (newCnt >= 5) {
      newCnt = newCnt - 1;
      intro3Content.style.left = "-980px";
    } else {
      movePosition += -moveSize;
      intro3Content.style.left = movePosition + "px";
    }
  } else {
    newCnt--;

    if (newCnt < 0) {
      newCnt = 0;
      intro3Content.style.left = 0;
    } else {
      movePosition -= -moveSize;
      intro3Content.style.left = movePosition + "px";
    }
  }
}
intro3.addEventListener("touchstart", touchMediaStart);
intro3.addEventListener("touchend", touchMediaEnd);
intro3.addEventListener("mousedown", touchMediaStart);
intro3.addEventListener("mouseup", touchMediaEnd);
