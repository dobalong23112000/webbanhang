import getProducts from "../getProducts.js";
let handeOnclick = (product) => {
  localStorage.setItem("clickproduct", JSON.stringify({ ...product }));
  window.location.href = "./product_details.html";
};
async function AllProducts() {
  let products = await getProducts();
  let $featuredproducts = document.querySelector(".featuredproduct");
  let $select = document.querySelector("select");

  products.forEach((product) => {
    let $product = document.createElement("div");
    $product.className = "product";
    $product.style.width = "20%";
    $product.innerHTML = `<a href="#" style="text-decoration: none;"><img src="${product.image.front}" alt="" style="width: 100%;">
        <h4 style="font-weight: normal;
        color: #555;">${product.name}</h4></a>
        <div class="rating" style="color: #ff523b;">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p class="price" style="font-size: 14px;">${product.price}</p>`;
    $product.onclick = (e) => {
      e.preventDefault();
      handeOnclick(product);
    };
    $featuredproducts.appendChild($product);
  });

  $select.onchange = (e) => {
    $featuredproducts.innerHTML = "";
    products.forEach((product) => {
      if (product.clothing === e.target.value) {
        let $product = document.createElement("div");
        $product.className = "product";
        $product.style.width = "20%";
        $product.innerHTML = `<a href="#" style="text-decoration: none;"><img src="${product.image.front}" alt="" style="width: 100%;">
        <h4 style="font-weight: normal;
        color: #555;">${product.name}</h4></a>
        <div class="rating" style="color: #ff523b;">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p class="price" style="font-size: 14px;">${product.price}</p>`;
        $product.onclick = (e) => {
          e.preventDefault();
          handeOnclick(product);
        };
        $featuredproducts.appendChild($product);
      } else if (e.target.value === "all") {
        let $product = document.createElement("div");
        $product.className = "product";
        $product.style.width = "20%";
        $product.innerHTML = `<a href="#" style="text-decoration: none;"><img src="${product.image.front}" alt="" style="width: 100%;">
        <h4 style="font-weight: normal;
        color: #555;">${product.name}</h4></a>
        <div class="rating" style="color: #ff523b;">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p class="price" style="font-size: 14px;">${product.price}</p>`;
        $product.onclick = (e) => {
          e.preventDefault();
          handeOnclick(product);
        };
        $featuredproducts.appendChild($product);
      }
    });
  };
}
AllProducts();
