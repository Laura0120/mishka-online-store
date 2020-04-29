var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

function addScriptMenuListeners() {
  var closed = "main-nav--closed";
  var opened = "main-nav--opened";
  var nojs = "main-nav--nojs";

  var changeNavMainView = function (from, to) {
    navMain.classList.remove(from);
    navMain.classList.add(to);
  };

  navMain.classList.remove(nojs);
  changeNavMainView(opened, closed);

  navToggle.addEventListener("click", function () {
    if (navMain.classList.contains(closed)) {
      changeNavMainView(closed, opened);
    } else {
      changeNavMainView(opened, closed);
    }
  });
}

addScriptMenuListeners();
