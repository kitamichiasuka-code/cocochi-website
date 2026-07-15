// 変数
let swiper;

function initSwiper() {
  if(window.innerWidth < 768) {
    if(!swiper){
      swiper = new Swiper(".machine-swiper",{

        slidesPerView: 1.1,
        spaceBetween: 20,

        navigation:{
          nextEl:".swiper-button-next",
          prevEl:".swiper-button-prev",
        },
      });
    }
  }else{
    if(swiper){
      swiper.destroy(true,true);

      swiper = undefined;
    }
  }
}

//　----------------------------
// ハンバーガーメニュー
// ----------------------------

const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".pc-view");

initSwiper();
window.addEventListener("resize",initSwiper);

hamb.addEventListener("click",()=>{
  hamb.classList.toggle("active");
  nav.classList.toggle("active");
});