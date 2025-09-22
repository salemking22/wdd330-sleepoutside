const baseURL = "https://corsproxy.io/?https://sleepoutside-api.onrender.com/";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor() { }

  async getData(category) {
    const fullURL = `${baseURL}products/search/${category}`;
    console.log("Fetching from:", fullURL);
    const response = await fetch(fullURL);
    const data = await convertToJson(response);
    return data.Result;
  }

  async findProductById(id) {
    const fullURL = `${baseURL}product/${id}`;
    console.log("Fetching from:", fullURL);
    const response = await fetch(fullURL);
    const data = await convertToJson(response);
    return data.Result;
  }
}