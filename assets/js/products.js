let hot = document.getElementById("hot");
let sale = document.getElementById("sale");
let img = document.getElementById("img");
let title = document.getElementById("title");
let originPrice = document.getElementById("originPrice");
let rate = document.getElementById("rate");
let vote = document.getElementById("vote");
let btn_create = document.getElementById("btn_create");

btn_create.addEventListener("click", function () {
  let nodeHot = hot.value;
  let nodeSale = sale.value;
  let nodeImg = img.value;
  let nodeTitle = title.value;
  let nodeOriginPrice = originPrice.value;
  let nodeRate = rate.value;
  let nodeVote = vote.value;

  let item = createProduct(
    nodeHot,
    nodeSale,
    nodeImg,
    nodeTitle,
    nodeOriginPrice,
    nodeRate,
    nodeVote
  );

  let listItems = new Array();
  listItems.push(item);
  console.log(listItems);
});

function createProduct(hot, sale, img, title, originPrice, rate, vote) {
  let newItem = new Object();

  newItem.hot = hot;
  newItem.sale = sale;
  newItem.img = img;
  newItem.title = title;
  newItem.originPrice = originPrice;
  newItem.rate = rate;
  newItem.vote = vote;

  newItem.salePrice = price();

  function price() {
    return originPrice * (1 - sale / 100);
  }

  return newItem;
}

let iphone = createProduct(
  "true",
  10,
  "img",
  "iphone 15 256Gb",
  29900000,
  4.5,
  545
);

console.log(iphone);
