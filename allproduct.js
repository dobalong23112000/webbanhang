const allproduct = document.getElementsByClassName("featuredproduct")[0];

axios.get("https://sheetdb.io/api/v1/knnlu7c5v0ob5").then((response) => {
  const data = response.data;
  for (let i = 0; i < data.length; i++) {
    const new_product = document.createElement("div");
    new_product.setAttribute("class", "product");

    new_product.innerHTML = `<a href="./product_details.html" style="text-decoration: none;"><img src="${data[i].img}" alt="" style="width: 100%;">
    <h4 style="font-weight: normal;
    color: #555;">${data[i].name}</h4></a>
    <div class="rating" style="color: #ff523b;">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="far fa-star"></i>
    </div>
    <p class="price" style="font-size: 14px;">${data[i].price}</p>`;
    allproduct.appendChild(new_product);
  }
});
