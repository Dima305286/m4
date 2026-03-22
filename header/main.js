let burger = document.getElementById("burger");
let main = document.getElementById("main");

let active = false;
function activeMenu() {
  active = !active;
  if (active) {
    menu.style.right = "0%";
  } else {
    menu.style.right = "-100%";
  }
}

burger.addEventListener("click", activeMenu);
