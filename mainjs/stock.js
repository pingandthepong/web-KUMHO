// 주가 데이터를 받아 화면에 표시
document.addEventListener("DOMContentLoaded", () => {
  const stockPrice = document.querySelector(".stock-price");
  const stockChange = document.querySelector(".change span");
  const stockChangeRate = document.querySelector(".change-per span");

  const prevClose = document.querySelector(".prev-close");
  const high = document.querySelector(".high");
  const low = document.querySelector(".low");
  const volume = document.querySelector(".volume");

  if (!stockPrice) return;

  fetch("/api/stock.php")
    .then((response) => {
      if (!response.ok) {
        throw new Error("주가 정보를 불러오지 못했습니다.");
      }

      return response.json();
    })
    .then((data) => {
      if (!data.success) {
        throw new Error(data.message || "주가 조회에 실패했습니다.");
      }

      const stock = data.stock;

      const price = Math.abs(Number(stock.price));
      const change = Number(stock.change);
      const changeRate = Number(stock.changeRate);

      const basePrice = Math.abs(Number(stock.prevClose));
      const highPrice = Math.abs(Number(stock.high));
      const lowPrice = Math.abs(Number(stock.low));
      const tradingVolume = Math.abs(Number(stock.volume));

      // 현재가
      stockPrice.textContent = `${price.toLocaleString()}`;

      // 전일대비
      stockChange.textContent = `${Math.abs(change).toLocaleString()}`;

      // 등락률
      stockChangeRate.textContent = `${Math.abs(changeRate).toFixed(2)}%`;

      // 상승 / 하락 상태
      setState(stockPrice, change);
      setState(stockChange, change);
      setState(stockChangeRate, changeRate);

      // 하단 상세 정보
      prevClose.textContent = basePrice.toLocaleString();
      high.textContent = highPrice.toLocaleString();
      low.textContent = lowPrice.toLocaleString();
      volume.textContent = tradingVolume.toLocaleString();
    })
    .catch((error) => {
      console.error("주가 정보 조회 실패:", error);

      stockPrice.textContent = "-";
      stockChange.textContent = "-";
      stockChangeRate.textContent = "-";

      prevClose.textContent = "-";
      high.textContent = "-";
      low.textContent = "-";
      volume.textContent = "-";
    });
});

function setState(element, value) {
  if (!element) return;

  element.classList.add("state");

  if (value > 0) {
    element.classList.add("positive");
    element.classList.remove("negative");
  } else if (value < 0) {
    element.classList.add("negative");
    element.classList.remove("positive");
  } else {
    element.classList.remove("positive", "negative");
  }
}
