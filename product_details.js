const btn = document.getElementsByClassName("button")[0];
const under = document.getElementsByClassName("detail");
const main = document.getElementsByClassName("main-detail")[0];

function objproduct(name, price, img) {
  this.name = name;
  this.price = price;
  this.img = img;
}
var obj;

console.log(btn);
for (let i = 0; i < under.length; i++) {
  under[i].addEventListener("click", change);
}
function change(event) {
  const change_img = event.target.src;

  main.src = change_img;
}
btn.onclick = function (event) {
  let but = event.target;

  let but_parent = but.parentElement;
  let but_grand = but_parent.parentElement;
  let item_name = but_parent.children[1].innerText;
  let item_price = but_parent.children[2].innerText;

  let item_img = but_grand.children[0].children[0].children[0].src;
  obj = new objproduct(`${item_name}`, `${item_price}`, `${item_img}`);

  var x = JSON.parse(localStorage.getItem(`product`)) || [];
  x.push(obj);
  localStorage.setItem(`product`, JSON.stringify(x));

  alert("Da them san pham vao gio hang");
};
