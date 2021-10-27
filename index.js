import getProducts from "./getProducts.js";
async function main() {
  let products = await getProducts();
  let $featuredproduct = document.querySelector(".featuredproduct");
  let $lastestproduct = document.getElementsByClassName("featuredproduct")[1];
  products.forEach((productFeatured) => {
    if (productFeatured.product === "featured") {
      let $product = document.createElement("div");
      $product.className = "product";
      $product.style.width = "20%";
      $product.innerHTML = `<a href="#" style="text-decoration: none;"><img src="${productFeatured.image.front}" alt="" style="width: 100%;">
        <h4 style="font-weight: normal;
        color: #555;">${productFeatured.name}</h4></a>
        <div class="rating" style="color: #ff523b;">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p class="price" style="font-size: 14px;">${productFeatured.price}</p>`;
      $featuredproduct.appendChild($product);
      $product.onclick = (e) => {
        e.preventDefault();
        localStorage.setItem(
          "clickproduct",
          JSON.stringify({ ...productFeatured })
        );
        window.location.href = "./product_details.html";
      };
    } else if (productFeatured.product === "lastest") {
      let $product = document.createElement("div");
      $product.className = "product";
      $product.style.width = "20%";
      $product.innerHTML = `<a href="#" style="text-decoration: none;"><img src="${productFeatured.image.front}" alt="" style="width: 100%;">
        <h4 style="font-weight: normal;
        color: #555;">${productFeatured.name}</h4></a>
        <div class="rating" style="color: #ff523b;">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p class="price" style="font-size: 14px;">${productFeatured.price}</p>`;
      $lastestproduct.appendChild($product);
      $product.onclick = (e) => {
        e.preventDefault();
        localStorage.setItem(
          "clickproduct",
          JSON.stringify({ ...productFeatured })
        );
        window.location.href = "./product_details.html";
      };
    }
  });
}
main();
