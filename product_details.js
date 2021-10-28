import getProducts from "./getProducts.js";
import Footer from "./footer.js";

const product = JSON.parse(localStorage.getItem("clickproduct"));

localStorage.removeItem("clickproduct");
console.log(document.querySelector(".details"));
let $leftdetails = document.querySelector(".left");

$leftdetails.innerHTML = `
<div class="main"><img src="${product.image.front}" alt="" style="width:100%;height: 500px;" class="main-detail"> </div>
                
<div class="under" style="width: 100%; display: flex;">
    <div><img src="${product.image.front}" alt="" class="detail"></div>
    <div><img src="${product.image.left}" alt="" class="detail"></div>
    <div><img src="${product.image.right}" alt="" class="detail"></div>
    <div><img src="${product.image.back}" alt="" class="detail"></div>

</div>`;
let $size = "";
for (const key of product.size) {
  $size += `<option value="${key}">${key}</option>`;
}
let $rightdetails = document.querySelector(".right");

$rightdetails.innerHTML = `
<p style="margin-top: auto;">Home / ${product.clothing} </p>
                <h1>${product.name}</h1>
                <h4>${product.price}</h4>
                <select name="" id="">
                    ${$size}
                </select>
                <br>
                <input type="number" value="1" style="width: 30px;">
                <button class="button" href="" type="button" id="btnn" style="    margin: 20px;
                text-decoration: none;
                border: 1px solid black;
                border-radius: 10px;
                padding: 6px;
                background: coral;
                color: white; 
            ">Add to Cart</button>
                <h3>Product Details</h3>
                <p>${product.description}</p>
`;
document.querySelector(".details").append($leftdetails, $rightdetails);
document.querySelector("button").onclick = (e) => {
  if (localStorage.getItem("chosen")) {
    let chosens = JSON.parse(localStorage.getItem("chosen"));
    chosens.push({
      ...product,
      size: `${document.querySelector("select").value}`,
      quantity: `${document.querySelector("input").value}`,
    });
    localStorage.setItem("chosen", JSON.stringify(chosens));
  } else {
    localStorage.setItem(
      "chosen",
      JSON.stringify([
        {
          ...product,
          size: `${document.querySelector("select").value}`,
          quantity: `${document.querySelector("input").value}`,
        },
      ])
    );
  }
  alert("Them san pham thanh cong");
};
async function getData() {
  let products = await getProducts();
  let $featuredproduct = document.querySelector(".featuredproduct");
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
    }
  });
}
getData();
document.querySelector(".brand").append(Footer());
