export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.dataSource = dataSource;
    }

    renderProductDetails(product) {
        document.querySelector("h2").textContent = product.Brand?.Name || "Unknown Brand";
        document.querySelector("h3").textContent = product.Name || "Unnamed Product";
        document.querySelector("#productImage").src = product.Images?.PrimaryLarge || "";
        document.querySelector("#productImage").alt = `Image of ${product.Name || "product"}`;
        document.querySelector("#productPrice").textContent = `$${product.FinalPrice?.toFixed(2) || "0.00"}`;
        document.querySelector("#productColor").textContent = product.Colors?.[0]?.ColorName || "N/A";
        document.querySelector("#productDesc").innerHTML = product.DescriptionHtmlSimple || "<p>No description available.</p>";
        document.querySelector("#addToCart").setAttribute("data-id", product.Id || "");
    }
}