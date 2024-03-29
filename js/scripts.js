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

$(".production__items").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  prevArrow: $(".production__prev-btn"),
  nextArrow: $(".production__next-btn"),
});
$(".infocenter__items").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
  gap: 30,
  prevArrow: $(".infocenter__prev-btn"),
  nextArrow: $(".infocenter__next-btn"),
});

document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".header__burger-button");
  const mobileMenu = document.querySelector(".header__mobile-menu");
  const mainMenu = document.querySelector(".header__menu");
  const search = document.querySelector(".header__search");

  // Обработчик клика по бургер-иконке
  burgerButton.addEventListener("click", function () {
    // Переключаем видимость основного меню
    mainMenu.style.display =
      mainMenu.style.display === "none" ? "block" : "none";
    // Переключаем видимость поиска
    search.style.display = search.style.display === "none" ? "block" : "none";
  });
});
