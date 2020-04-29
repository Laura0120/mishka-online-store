var buyButtons = document.querySelectorAll(".catalog-item__button");
var modal = document.querySelector(".modal");
var form = modal.querySelector(".form-add-cart");
var close = form.querySelector(".form-add-cart__button");

var onCloseModal = (evt) => {
  evt.preventDefault();
  modal.classList.remove("modal--show");
};

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    modal.classList.add("modal--show");
  });
});

document.addEventListener(
  "click",
  (evt) =>
    !evt.target.closest(".form-add-cart") &&
    !evt.target.closest(".catalog-item__button") &&
    onCloseModal(evt),
  false
);

close.addEventListener("click", onCloseModal);

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
      form.classList.remove("modal--show");
    }
  }
});
