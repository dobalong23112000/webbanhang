export default function Footer() {
  let $row = document.createElement("div");
  $row.className = "rowfooter";
  $row.style = `margin-top: 20px;
      display: flex;
      justify-content: space-around;`;
  $row.innerHTML = ` <!-- logo -->
  
    <!-- address -->
    <div id="address">
      <h3 style="border-bottom: 1px solid black;padding-bottom: 15px;color: blue; font-size:20px">Address</h3>
      <p> 207 Giải Phóng, Đồng Tâm, Hai Bà Trưng, Hà Nội</p>
      <p>Số 9, Nguyễn Tử Nha, P.12, Q.Tân Bình, Hồ Chí Minh</p>
    </div>
    <!-- policy -->
    <div id="service">
      <h3 style="font-size:20px;border-bottom: 1px solid black;padding-bottom: 15px;color: blue;">Customer Service Policy</h3>
      <p>Chính sách giao hàng</p>
      <p>Chính sách bảo hàng, đổi trả</p>
      <p>Mua hàng-Thanh toán</p>
      <p>Chính sách bảo hàng</p>
      <p>Bảo mật thông tin</p>
      <p>Hướng dẫn đặt hàng</p>
    </div>
    <!-- hotline -->
    <div id="hotline">
      <h3 style="font-size:20px;border-bottom: 1px solid black;padding-bottom: 15px;color: blue;">Contact us</h3>
      <p>Phone Sale: 0912.051.299</p>
      <p>Email: mail@gmail.com</p>
      <div>
        <ul style="padding:0;width:100%;display:flex; list-style:none;justify-content: space-around;">
          <li>
            <a href="#"
              ><img
                class="icon-address"
                src="./images/facebook.png"
                alt
                style="width: 40px"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                class="icon-address"
                src="./images/insta.jpg"
                alt
                style="width: 40px"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                class="icon-address"
                src="./images/shoppe.png"
                alt
                style="width: 40px"
            /></a>
          </li>
        </ul>
      </div>
    </div>
    `;
  return $row;
}
