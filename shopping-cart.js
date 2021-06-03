const body = document.getElementsByTagName("tbody")[0];
const btn = document.getElementsByClassName("btn");
const grandtotal = document.getElementsByClassName("totalprice")[0];
console.log(grandtotal);

for (let i = 0; i < JSON.parse(localStorage.getItem(`product`)).length; i++) {
  const row = document.createElement("tr");
  row.setAttribute("class", "input");
  row.innerHTML = `<td class="image">
<img
  src="${JSON.parse(localStorage.getItem(`product`))[i].img}"
  alt=""
  width="100"
  height="100"
/>
</td>
<td class="name">
<span style="width: fit-content">${
    JSON.parse(localStorage.getItem(`product`))[i].name
  }</span>
</td>
<td class="price" style="width: fit-content">${
    JSON.parse(localStorage.getItem(`product`))[i].price
  }</td>
<td class="quality">
<input type="number" class="number" value="1" />
</td>
<td class="total">${JSON.parse(localStorage.getItem(`product`))[i].price}</td>
<td><button class="btn btn-danger">Remove</button></td>`;
  body.appendChild(row);
}
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", remove_btn);
}
function remove_btn(event) {
  let but = event.target;

  let but_parent = but.parentElement.parentElement;
  console.log(but_parent);
  but_parent.remove();
  var x = JSON.parse(localStorage.getItem(`product`));
  x.splice(0, 1);
  localStorage.setItem(`product`, JSON.stringify(x));
  grand_total();
}
const quantily = document.getElementsByClassName("number");
for (let i = 0; i < quantily.length; i++) {
  quantily[i].addEventListener("change", update_price);
}
function update_price(event) {
  let update = event.target;
  let update_total = update.parentElement.parentElement;
  console.log(update_total.children[2].innerText);
  if (update.value <= 0) {
    update.value = 1;
  }

  let total_details_product =
    update_total.children[2].innerText.replace("$", "") * update.value;
  console.log(total_details_product);
  update_total.children[4].innerText = `${total_details_product}$`;
  grand_total();
}
function grand_total() {
  let tong = 0;
  grandtotal.innerText.replace("$", "");
  const total_product = document.getElementsByClassName("total");
  for (let i = 0; i < total_product.length; i++) {
    tong = tong + Number(total_product[i].innerText.replace("$", ""));
  }
  grandtotal.innerText = `${tong}$`;
}
grand_total();
