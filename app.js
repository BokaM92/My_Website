//variables

const hamMenu = document.getElementById("ham_menu"),
  navClose = document.querySelectorAll(".sidenav a"),
  mySidenav = document.getElementById("sidenav");

//listeners

eventListeners();

function eventListeners() {
  hamMenu.addEventListener("click", clickOpenSideNav);
}

//side nav
function clickOpenSideNav(ev) {
  if (ev.target.tagName.toLowerCase() === "span") {
    mySidenav.append;
    mySidenav.style.width = "100%";
  }
}

for (const close of navClose) {
  close.addEventListener("click", function (ev) {
    if (ev.target.tagName.toLowerCase() === "a") {
      mySidenav.style.width = "0";
    }
  });
}
