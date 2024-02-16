document.querySelector(".banner__video-play").innerHTML = "СМОТРЕТЬ ВИДЕО"
  .split("")
  .map((e, i) => `<span style="--rot:${i * 12}deg">${e}</span>`)
  .join("");

$(document).ready(function () {
  $(".products__items").slick({
    slidesToShow: 3, // Количество отображаемых карточек
    slidesToScroll: 1, // Количество карточек, прокручиваемых за раз
    autoplay: false, // Автоматическое воспроизведение слайдов
    autoplaySpeed: 2000, // Интервал между слайдами в миллисекундах
    prevArrow: $(".products__prev-btn"),
    nextArrow: $(".products__next-btn"),
  });
});
