//----------------------------
//変数
let swiper;

function initSwiper() {
  if (window.innerWidth < 768) {
    if (!swiper) {
      swiper = new Swiper(".machine-swiper", {
        slidesPerView: 1.1,
        spaceBetween: 20,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);

      swiper = undefined;
    }
  }
}

//　----------------------------
//　スライダー
//　----------------------------
const conceptSwiper = new Swiper(".concept-swiper", {

  loop: true,

  slidesPerView: "auto",

  spaceBetween: 0,

  speed: 6000,

  allowTouchMove: true,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

});

//　----------------------------
// ハンバーガーメニュー
// ----------------------------

const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".pc-view");

initSwiper();
window.addEventListener("resize", initSwiper);

hamb.addEventListener("click", () => {
  hamb.classList.toggle("active");
  nav.classList.toggle("active");
});

//　----------------------------
// voice Model
// ----------------------------
//モーダル
const voiceModal = document.querySelector(".voice-modal");

//続きを読むボタン
const voiceLinks = document.querySelectorAll(".voice-link");

//閉じるボタン
const closeButton = document.querySelector(".voice-modal-close");

const modalText = document.querySelector(".voice-modal-text");

voiceLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const card = link.closest(".voice-card");

    const fullText = card.querySelector(".voice-full");

    modalText.innerHTML = fullText.innerHTML;

    voiceModal.classList.add("show");
  });
});

// xボタンを押したら閉じる
closeButton.addEventListener("click", () => {
  voiceModal.classList.remove("show");
});

// 背景をクリックしたら閉じる
voiceModal.addEventListener("click", (event) => {
  if (event.target === voiceModal) {
    voiceModal.classList.remove("show");
  }
});
