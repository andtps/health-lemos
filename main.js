const navEl = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    navEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 200) {
    navEl.classList.remove("navbar-scrolled");
  }
});

window.addEventListener("click", function(){
  let botao__mobile = document.getElementById('botao');
  let header = document.getElementsByTagName('header')[0]; // Get the first header element

  botao__mobile.addEventListener('click', function() {
    header.style.backgroundColor = 'pink';
  });
});


ScrollReveal({ reset: true }).reveal(".area-1", { duration: 1500 });
ScrollReveal({ reset: true }).reveal(".area-2", { duration: 1500 });
ScrollReveal({ reset: true }).reveal(".area-3", { duration: 1500 });
