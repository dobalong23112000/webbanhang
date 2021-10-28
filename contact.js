import Footer from "./footer.js";
function main() {
  let $inputs = document.querySelectorAll("input");
  let $send = document.querySelector("button");
  let $textarea = document.querySelector("textarea");

  $send.onclick = () => {
    let usercomment = {};

    let isPassed = true;
    for (let i = 0; i < $inputs.length; i++) {
      if (!$inputs[i].value) {
        isPassed = false;
      } else {
        usercomment = {
          ...usercomment,
          [$inputs[i].name]: $inputs[i].value,
        };
      }
    }
    if (!$textarea.value) {
      isPassed = false;
    } else {
      usercomment = { ...usercomment, [$textarea.name]: $textarea.value };
    }
    if (isPassed) {
      db.collection("comments").add({ ...usercomment });
      $send.disabled = true;
      document.querySelector("body").style.opacity = "0.5";
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      alert("Xem lai thong tin");
    }
  };
}
main();
document.querySelector(".brand").append(Footer());
