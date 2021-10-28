import getData from "./getAddress.js";
import Footer from "./footer.js";

const body = document.getElementsByTagName("tbody")[0];
const btn = document.getElementsByClassName("btn");
const grandtotal = document.getElementsByClassName("totalprice")[0];
const purchase = document.querySelector(".purchase");

for (let i = 0; i < JSON.parse(localStorage.getItem(`chosen`)).length; i++) {
  const row = document.createElement("tr");
  row.setAttribute("class", "input");
  row.innerHTML = `<td class="image">
<img
  src="${JSON.parse(localStorage.getItem(`chosen`))[i].image.front}"
  alt=""
  width="100"
  height="100"
/>
</td>
<td class="name">
<span style="width: fit-content">${
    JSON.parse(localStorage.getItem(`chosen`))[i].name
  }
  </br>
  <span class="price">
  ${JSON.parse(localStorage.getItem(`chosen`))[i].price}
  </span>
  
  </br>
  <button class="btn btn-danger" style="background:none; padding:0;border:none;color:red;cursor:pointer;margin-top:20px">Remove</button>
  </span>
</td>
<td class="quality">

<span>${JSON.parse(localStorage.getItem(`chosen`))[i].quantity}</span>
  
</td>
<td class="size">${JSON.parse(localStorage.getItem(`chosen`))[i].size}</td>
<td class="total">${
    parseInt(JSON.parse(localStorage.getItem(`chosen`))[i].price) *
    parseInt(JSON.parse(localStorage.getItem(`chosen`))[i].quantity)
  }$</td>

`;
  body.appendChild(row);
}
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", remove_btn);
}
function remove_btn(event) {
  let but = event.target;

  let but_parent = but.parentElement.parentElement.parentElement;
  console.log(but_parent);
  but_parent.remove();
  var x = JSON.parse(localStorage.getItem(`chosen`));
  x.splice(0, 1);
  localStorage.setItem(`chosen`, JSON.stringify(x));
  grand_total();
  $sum.innerText = document.querySelector(".totalprice").innerText;
}

function grand_total() {
  let tong = 0;
  grandtotal.innerText.replace("$", "");
  const total_chosen = document.getElementsByClassName("total");
  for (let i = 0; i < total_chosen.length; i++) {
    tong = tong + Number(total_chosen[i].innerText.replace("$", ""));
  }
  grandtotal.innerText = `${tong}$`;
}
grand_total();

async function AddressInfor() {
  const Cities = await getData();
  let $city = document.querySelector(".city");
  let $wards = document.querySelector(".wards");
  let $districts = document.querySelector(".district");

  let selectwards = $wards.querySelector("select");
  let selectdistricts = $districts.querySelector("select");
  let citychosen = `<option value="">Chọn tỉnh/ thành phố...</option>`;
  Cities.forEach((city, index) => {
    citychosen += ` <option  value="${index}" >${city.name}</option>`;
  });

  let selectcity = $city.querySelector("select");
  selectcity.innerHTML = citychosen;
  selectcity.onchange = (e) => {
    selectcity.name = Cities[e.target.value].name;
    selectwards.innerHTML = ` <option value="">Chọn xã/phường...</option>`;
    let districtsoption = `<option value="">Chọn quận/ huyện...</option>`;
    let districts = Cities[e.target.value].districts;
    districts.forEach((district, index) => {
      districtsoption += `<option value="${index}">${district.name}</option>`;
    });

    selectdistricts.innerHTML = `${districtsoption}`;
    selectdistricts.onchange = (e) => {
      selectdistricts.name = districts[e.target.value].name;
      let wards = `<option value="">Chọn xã/phường...</option>`;
      districts[e.target.value].wards.forEach((ward, index) => {
        wards += `<option value="${index}" >${ward.name}</option>`;
      });
      let wardss = districts[e.target.value].wards;
      selectwards.innerHTML = ` ${wards}`;
      selectwards.onchange = (e) => {
        selectwards.name = wardss[e.target.value].name;
      };
    };
  };
}
AddressInfor();
function Purchase() {
  let setData = {
    address: "",
    email: "",
    name: "",
    phonenumber: "",
    totalprice: "",
    products: [],
    subtotal: "",
  };
  purchase.onclick = (e) => {
    let products = setData.products;
    let isPassed = true;
    if (!JSON.parse(localStorage.getItem("chosen"))) {
      isPassed = false;
    } else {
      setData = {
        ...setData,
        products: [...JSON.parse(localStorage.getItem("chosen"))],
      };
    }

    let $selects = document.getElementsByTagName("select");
    let address = "";
    let $inputs = document
      .querySelector(".information")
      .querySelectorAll("input");
    for (let i = 0; i < $inputs.length; i++) {
      if (!$inputs[i].value) {
        isPassed = false;
      } else {
        if ($inputs[i].name == "address") {
          address = $inputs[i].value;
        } else {
          setData = { ...setData, [$inputs[i].name]: $inputs[i].value };
        }
      }
    }

    for (let i = 0; i < $selects.length; i++) {
      if (!$selects[i].name) {
        isPassed = false;
      } else {
        address += "-" + $selects[i].name;
      }
    }
    setData = {
      ...setData,
      address: address,
      totalprice: document.querySelector("#sum").innerText,
      subtotal: document.querySelector(".totalprice").innerText,
    };

    if (!isPassed) {
      alert("Thong tin nhap chua day du");
    } else {
      db.collection("customers").add({ ...setData });
      document.querySelector("body").style.opacity = "0.5";
      setTimeout(() => {
        alert("Mua hang thanh cong");
        localStorage.removeItem("chosen");
        window.location.href = "./index.html";
      }, 3000);
    }
  };
}
Purchase();
let $discount = document.querySelector("#discount");
let $sum = document.querySelector("#sum");
$sum.innerText = document.querySelector(".totalprice").innerText;
$discount.onchange = (e) => {
  let totalprice = parseInt(
    document.querySelector(".totalprice").innerText.replace("$", "")
  );

  let sum;
  let discount = "";
  console.log(totalprice);
  switch (e.target.value) {
    case "HN10":
      sum = totalprice * (1 - 0.01);
      discount = "-10%";
      break;
    case "HN20":
      sum = totalprice * (1 - 0.02);
      discount = "-20%";
      break;
    default:
      sum = totalprice;
  }
  $sum.innerHTML = sum + "$";
};
document.querySelector(".brand").append(Footer());
