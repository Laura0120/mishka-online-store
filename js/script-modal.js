var buyButtons=document.querySelectorAll(".button--buy"),modal=document.querySelector(".modal"),form=modal.querySelector(".form-add-cart"),close=form.querySelector(".form-add-cart__button");buyButtons.forEach(function(o){o.addEventListener("click",function(o){o.preventDefault(),modal.classList.add("modal--show")})}),document.addEventListener("click",function(o){o.target.closest(".form-add-cart")||o.target.closest(".button--buy")||modal.classList.remove("modal--show")},!1),close.addEventListener("click",function(o){o.preventDefault(),modal.classList.remove("modal--show")}),window.addEventListener("keydown",function(o){27===o.keyCode&&(o.preventDefault(),modal.classList.contains("modal--show")&&modal.classList.remove("modal--show"))});