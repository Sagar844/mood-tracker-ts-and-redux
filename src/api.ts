import axios from "axios";

async function getProducts() {
  const response=  await axios.get("https://myeasykart.codeyogi.io/products");
  return response.data.data;
  
}
export default getProducts;