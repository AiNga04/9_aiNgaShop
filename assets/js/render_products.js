function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Hàm hiển thị sản phẩm
function renderProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  const listItemContainer = document.querySelector("#productList .list-item");

  if (!listItemContainer) {
    console.error(
      "Container '.list-item' không được tìm thấy trong '#productList'."
    );
    return;
  }

  listItemContainer.innerHTML = "";

  if (products.length === 0) {
    listItemContainer.innerHTML = "<p>Không có sản phẩm nào để hiển thị.</p>";
    return;
  }

  products.forEach((product, index) => {
    const productItem = document.createElement("div");
    productItem.classList.add("item");

    const iconDiv = document.createElement("div");
    iconDiv.classList.add("icon");

    if (product.hot) {
      const hotSticker = document.createElement("div");
      hotSticker.classList.add("sticker", "hot");
      hotSticker.textContent = "HOT";
      iconDiv.appendChild(hotSticker);
    }

    if (product.sale > 0) {
      const saleSticker = document.createElement("div");
      saleSticker.classList.add("sticker", "sale");
      saleSticker.textContent = `-${product.sale}%`;
      iconDiv.appendChild(saleSticker);
    }

    productItem.appendChild(iconDiv);

    const productLink = document.createElement("a");
    productLink.href = "#!";
    productLink.classList.add("main-contain");
    productLink.setAttribute("data-name", product.title);

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("item-img");

    const imgElement = document.createElement("img");
    imgElement.src = product.img;
    imgElement.alt = product.title;
    imgElement.loading = "lazy";
    imgDiv.appendChild(imgElement);

    productLink.appendChild(imgDiv);

    const detailDiv = document.createElement("div");
    detailDiv.classList.add("detail");

    const titleP = document.createElement("p");
    titleP.classList.add("title");
    titleP.textContent = product.title;
    detailDiv.appendChild(titleP);

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");

    const originPriceP = document.createElement("p");
    originPriceP.classList.add("origin-price");
    originPriceP.textContent = `${formatPrice(product.originPrice)} vnđ`;
    priceDiv.appendChild(originPriceP);

    const salePriceP = document.createElement("p");
    salePriceP.classList.add("sale-price");
    salePriceP.textContent = `${formatPrice(product.salePrice)} vnđ`;
    priceDiv.appendChild(salePriceP);

    detailDiv.appendChild(priceDiv);

    const ratingDiv = document.createElement("div");
    ratingDiv.classList.add("rating");

    const ratingSpan = document.createElement("span");
    ratingSpan.textContent = product.rate;
    ratingDiv.appendChild(ratingSpan);

    const starImg = document.createElement("img");
    starImg.src = "./icon/star.svg";
    starImg.alt = "star";
    ratingDiv.appendChild(starImg);

    const voteI = document.createElement("i");
    voteI.classList.add("iconnewglobal-vote");
    ratingDiv.appendChild(voteI);

    const voteText = document.createElement("span");
    voteText.textContent = `(${product.vote})`;
    ratingDiv.appendChild(voteText);

    detailDiv.appendChild(ratingDiv);

    productLink.appendChild(detailDiv);

    productItem.appendChild(productLink);

    listItemContainer.appendChild(productItem);
  });
}

renderProducts();

// Hàm hiển thị sản phẩm hot
function renderHotProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  const hotProducts = products.filter((product) => product.hot === true);

  const container = document.querySelector(".lr-item");

  if (!container) {
    console.error("Container '.lr-item' không được tìm thấy trong HTML.");
    return;
  }

  container.innerHTML = "";

  if (hotProducts.length === 0) {
    container.innerHTML = "<p>Không có sản phẩm HOT nào để hiển thị.</p>";
    return;
  }

  hotProducts.forEach((product) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const iconDiv = document.createElement("div");
    iconDiv.classList.add("icon");

    if (product.hot) {
      const hotSticker = document.createElement("div");
      hotSticker.classList.add("sticker", "hot");
      hotSticker.textContent = "HOT";
      iconDiv.appendChild(hotSticker);
    }

    if (product.sale > 0) {
      const saleSticker = document.createElement("div");
      saleSticker.classList.add("sticker", "sale");
      saleSticker.textContent = `-${product.sale}%`;
      iconDiv.appendChild(saleSticker);
    }

    itemDiv.appendChild(iconDiv);

    const productLink = document.createElement("a");
    productLink.href = "#!";
    productLink.classList.add("main-contain");
    productLink.setAttribute("data-name", product.title);

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("item-img");

    const imgElement = document.createElement("img");
    imgElement.src = product.img;
    imgElement.alt = product.title;
    imgElement.classList.add("lazyloaded");
    imgDiv.appendChild(imgElement);

    productLink.appendChild(imgDiv);

    const detailDiv = document.createElement("div");
    detailDiv.classList.add("detail");

    const titleP = document.createElement("p");
    titleP.classList.add("title");
    titleP.textContent = product.title;
    detailDiv.appendChild(titleP);

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");

    const originPriceP = document.createElement("p");
    originPriceP.classList.add("origin-price");
    originPriceP.textContent = `${formatPrice(product.originPrice)} vnđ`;
    priceDiv.appendChild(originPriceP);

    const salePriceP = document.createElement("p");
    salePriceP.classList.add("sale-price");
    salePriceP.textContent = `${formatPrice(product.salePrice)} vnđ`;
    priceDiv.appendChild(salePriceP);

    detailDiv.appendChild(priceDiv);

    const ratingDiv = document.createElement("div");
    ratingDiv.classList.add("rating");

    const ratingSpan = document.createElement("span");
    ratingSpan.textContent = product.rate;
    ratingDiv.appendChild(ratingSpan);

    const starImg = document.createElement("img");
    starImg.src = "./icon/star.svg";
    starImg.alt = "star";
    ratingDiv.appendChild(starImg);

    const voteI = document.createElement("i");
    voteI.classList.add("iconnewglobal-vote");
    ratingDiv.appendChild(voteI);

    const voteText = document.createElement("span");
    voteText.textContent = `(${product.vote})`;
    ratingDiv.appendChild(voteText);

    detailDiv.appendChild(ratingDiv);

    productLink.appendChild(detailDiv);

    itemDiv.appendChild(productLink);

    container.appendChild(itemDiv);
  });
}

renderHotProducts();
