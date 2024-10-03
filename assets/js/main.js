document.addEventListener("DOMContentLoaded", function () {
  const leftButton = document.querySelector(".scroll-button.left");
  const rightButton = document.querySelector(".scroll-button.right");
  const quickSales = document.querySelector(".quick-sales");

  const scrollAmount = 300;

  leftButton.addEventListener("click", function () {
    quickSales.scrollBy({
      top: 0,
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  rightButton.addEventListener("click", function () {
    quickSales.scrollBy({
      top: 0,
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  function updateScrollButtons() {
    const maxScrollLeft = quickSales.scrollWidth - quickSales.clientWidth;
    leftButton.style.display = quickSales.scrollLeft > 0 ? "flex" : "none";
    rightButton.style.display =
      quickSales.scrollLeft < maxScrollLeft ? "flex" : "none";
  }

  updateScrollButtons();
  quickSales.addEventListener("scroll", updateScrollButtons);
  window.addEventListener("resize", updateScrollButtons);

  // Chức năng kéo bằng chuột
  let isDown = false;
  let startX;
  let scrollLeftStart;

  quickSales.addEventListener("mousedown", (e) => {
    isDown = true;
    quickSales.classList.add("active");
    startX = e.pageX - quickSales.offsetLeft;
    scrollLeftStart = quickSales.scrollLeft;
  });

  quickSales.addEventListener("mouseleave", () => {
    isDown = false;
    quickSales.classList.remove("active");
  });

  quickSales.addEventListener("mouseup", () => {
    isDown = false;
    quickSales.classList.remove("active");
  });

  quickSales.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - quickSales.offsetLeft;
    const walk = (x - startX) * 2; // Điều chỉnh tốc độ cuộn
    quickSales.scrollLeft = scrollLeftStart - walk;
  });

  // Chức năng kéo bằng cử chỉ trên thiết bị cảm ứng
  let touchStartX = 0;
  let touchScrollLeftStart = 0;

  quickSales.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].pageX - quickSales.offsetLeft;
    touchScrollLeftStart = quickSales.scrollLeft;
  });

  quickSales.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX - quickSales.offsetLeft;
    const walk = (x - touchStartX) * 2; // Điều chỉnh tốc độ cuộn
    quickSales.scrollLeft = touchScrollLeftStart - walk;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const flashSaleLeftButton = document.querySelector(
    ".scroll-button.scroll-left"
  );
  const flashSaleRightButton = document.querySelector(
    ".scroll-button.scroll-right"
  );
  const flashSaleContainer = document.querySelector(
    ".flash-sales .body .lr-item"
  );

  const scrollAmount = 300;

  // Cuộn khi bấm nút
  flashSaleLeftButton.addEventListener("click", function () {
    flashSaleContainer.scrollBy({
      top: 0,
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  flashSaleRightButton.addEventListener("click", function () {
    flashSaleContainer.scrollBy({
      top: 0,
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  // Cập nhật trạng thái hiển thị của các nút cuộn
  function updateScrollButtons() {
    const maxScrollLeft =
      flashSaleContainer.scrollWidth - flashSaleContainer.clientWidth;
    flashSaleLeftButton.style.display =
      flashSaleContainer.scrollLeft > 0 ? "flex" : "none";
    flashSaleRightButton.style.display =
      flashSaleContainer.scrollLeft < maxScrollLeft ? "flex" : "none";
  }

  updateScrollButtons();
  flashSaleContainer.addEventListener("scroll", updateScrollButtons);
  window.addEventListener("resize", updateScrollButtons);

  // Chức năng kéo bằng chuột
  let isDown = false;
  let startX;
  let scrollLeftStart;

  flashSaleContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    flashSaleContainer.classList.add("active");
    startX = e.pageX - flashSaleContainer.offsetLeft;
    scrollLeftStart = flashSaleContainer.scrollLeft;
  });

  flashSaleContainer.addEventListener("mouseleave", () => {
    isDown = false;
    flashSaleContainer.classList.remove("active");
  });

  flashSaleContainer.addEventListener("mouseup", () => {
    isDown = false;
    flashSaleContainer.classList.remove("active");
  });

  flashSaleContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - flashSaleContainer.offsetLeft;
    const walk = (x - startX) * 2; // Điều chỉnh tốc độ cuộn
    flashSaleContainer.scrollLeft = scrollLeftStart - walk;
  });

  // Chức năng kéo bằng cử chỉ trên thiết bị cảm ứng
  let touchStartX = 0;
  let touchScrollLeftStart = 0;

  flashSaleContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].pageX - flashSaleContainer.offsetLeft;
    touchScrollLeftStart = flashSaleContainer.scrollLeft;
  });

  flashSaleContainer.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX - flashSaleContainer.offsetLeft;
    const walk = (x - touchStartX) * 2; // Điều chỉnh tốc độ cuộn
    flashSaleContainer.scrollLeft = touchScrollLeftStart - walk;
  });
});
