var buyButtons = document.querySelectorAll(".button--buy");
var modal = document.querySelector(".modal");
var form = modal.querySelector(".form-add-cart");
var close = form.querySelector(".form-add-cart__button");

for (var i = 0; i < buyButtons.length; i += 1) {
  var buyButton = buyButtons[i];
  buyButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
  });
}

document.addEventListener(
  "click",
  function (evt) {
    !evt.target.closest(".form-add-cart") &&
      !evt.target.closest(".button--buy") &&
      modal.classList.remove("modal--show");
  },
  false
);

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
    }
  }
});
