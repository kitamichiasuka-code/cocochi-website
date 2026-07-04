const swiper = new Swiper(".machine-swiper", {
  slidesPerView: 1.3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".pc-view");

hamb.addEventListener("click",()=>{
  hamb.classList.toggle("active");
  nav.classList.toggle("active");
});