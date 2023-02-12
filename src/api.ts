import axios from "axios";

async function getProducts() {
  const response = await axios.get("https://myeasykart.codeyogi.io/products");
  return response.data.data;
}
export default getProducts;



















interface Ipost {
  id: number;
  name: string;
  price: number;
}

const data = async (path: string): Promise<Ipost[]> => {
  const res = await fetch(`https//example.com${path}`);
  return res.json();
};

(async () => {
  const Post = await data("/post");

  Post[0];
})();

interface Iuser {
  id: number;
  name: string;
  city: string;
}

const apicall = async <T>(path: string): Promise<T[]> => {
  const res = await fetch(`https//example.com${path}`);
  return res.json();
};

async () => {
  const user = await apicall<Ipost>("/user");
  user[0].id;
};
