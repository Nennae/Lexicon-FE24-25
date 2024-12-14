import { fetchData } from "./data.js";

async function init() {
  const products = await fetchData();
  displayProducts(products);
}

function displayProducts(products) {
  const shopContent = document.getElementById("shop-content");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("img-container");
        
    productDiv.innerHTML = `
      <img class="char-img" src="${product.image.desktop}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>Price: ${product.price.toFixed(2)} SEK</p>
      <button class="add-to-cart-btn" data-name="${product.name}" data-price="${
      product.price
    }">Add to Cart</button>
      <div class="quantity-controls" style="display: none;">
        <button class="decrease-btn">-</button>
        <span class="quantity" data-name="${product.name}">1</span>
        <button class="increase-btn">+</button>
      </div>
    `;
    shopContent.appendChild(productDiv);
  });
}

init();
