const baseURL = import.meta.env.VITE_SERVER_URL;
console.log("Base URL is:", baseURL); // ✅ Confirm if env variable is injected

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
    console.log("Fetching from:", fullURL); // ✅ Confirm full fetch URL
    const response = await fetch(fullURL);
    const data = await convertToJson(response);
    return data.Result;
  }

  async findProductById(id) {
    const fullURL = `${baseURL}product/${id}`;
    console.log("Fetching from:", fullURL); // ✅ Confirm full fetch URL
    const response = await fetch(fullURL);
    const data = await convertToJson(response);
    return data.Result;
  }
}