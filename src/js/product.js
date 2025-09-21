import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const productID = getParam("product");
const dataSource = new ProductData();

async function loadProduct() {
    try {
        const productData = await dataSource.findProductById(productID);
        console.log("Fetched product data:", productData);
        const product = new ProductDetails(productID, dataSource);
        product.renderProductDetails(productData);
    } catch (error) {
        console.error("Error loading product:", error);
        document.querySelector("main").innerHTML = `<p>Sorry, product not found.</p>`;
    }
}

loadProduct();