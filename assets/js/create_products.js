class Product {
  constructor(hot, sale, img, title, originPrice, rate, vote) {
    this.hot = hot;
    this.sale = sale;
    this.img = img;
    this.title = title;
    this.originPrice = originPrice;
    this.rate = rate;
    this.vote = vote;
    this.salePrice = this.calculateSalePrice();
  }

  calculateSalePrice() {
    return this.originPrice * (1 - this.sale / 100);
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(json) {
    const data = JSON.parse(json);
    return new Product(
      data.hot,
      data.sale,
      data.img,
      data.title,
      data.originPrice,
      data.rate,
      data.vote
    );
  }
}

const hot = document.getElementById("hot");
const sale = document.getElementById("sale");
const img = document.getElementById("img");
const title = document.getElementById("title");
const originPrice = document.getElementById("originPrice");
const rate = document.getElementById("rate");
const vote = document.getElementById("vote");
const btnCreate = document.getElementById("btn_create");

let listItems = JSON.parse(localStorage.getItem("products")) || [];

btnCreate.addEventListener("click", function () {
  const nodeHot = hot.checked;
  const nodeSale = Number(sale.value);
  const nodeImg = img.value.trim();
  const nodeTitle = title.value.trim();
  const nodeOriginPrice = Number(originPrice.value);
  const nodeRate = Number(rate.value);
  const nodeVote = Number(vote.value);

  if (
    nodeImg === "" ||
    nodeTitle === "" ||
    isNaN(nodeSale) ||
    isNaN(nodeOriginPrice) ||
    isNaN(nodeRate) ||
    isNaN(nodeVote)
  ) {
    alert("Vui lòng nhập đầy đủ và chính xác thông tin sản phẩm.");
    return;
  }

  const newProduct = new Product(
    nodeHot,
    nodeSale,
    nodeImg,
    nodeTitle,
    nodeOriginPrice,
    nodeRate,
    nodeVote
  );

  listItems.push(newProduct);
  localStorage.setItem("products", JSON.stringify(listItems));

  console.log("Đã thêm sản phẩm:", newProduct);
  console.log("Tất cả sản phẩm:", listItems);

  sale.value = "";
  img.value = "";
  title.value = "";
  originPrice.value = "";
  rate.value = "";
  vote.value = "";
  hot.checked = false;
});

// localStorage.removeItem("products");
