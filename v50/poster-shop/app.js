import { fetchData } from "./data.js";


async function init() {
  const products = await fetchData();
  displayProducts(products);
}



init();