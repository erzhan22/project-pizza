$(document).ready(function () {
  $(".banner__controls-slider").slick({
    slidesToShow: 3,
    prevArrow: $(".btn-prev"),
    nextArrow: $(".btn-next"),
    asNavFor: ".banner__slider",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
        },
      },
    ],
  });

  $(".banner__slider").slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: ".banner__controls-slider",
  });
  $(".hit-sale__slide").slick({
    slidesToShow: 3,
    prevArrow: $(".hit-sale__arrows-prev"),
    nextArrow: $(".hit-sale__arrows-next"),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".reviews__slider").slick({
    slidesToShow: 3,
    prevArrow: $(".reviews__arrows-prev"),
    nextArrow: $(".reviews__arrows-next"),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

let burger = document.querySelector(".navbar__burger");
let navbar = document.querySelector(".navbar__nav ");
let overlay = document.querySelector(".main__overlay");
let navItems = Array.from(document.querySelectorAll(".navbar__item"));
burger.addEventListener("click", () => {
  burger.classList.toggle("showMenu");
  showMenu();
});
overlay.addEventListener("click", () => {
  burger.classList.toggle("showMenu");
  showMenu();
});
navItems.forEach((a) => {
  if (window.innerWidth > 990) return;
  if (
    [...a.children].some((b) => {
      if (b.classList.contains("sub-menu")) return true;
      return false;
    })
  ) {
    a.addEventListener("click", (e) => {
      let subMenu = a.querySelector(".sub-menu");
      let chek = getComputedStyle(subMenu).display;
      if (chek == "flex") {
        subMenu.style.display = "none";
      } else {
        subMenu.style.display = "flex";
      }
    });
  }
});
function showMenu() {
  if (burger.classList.contains("showMenu")) {
    navbar.style.transform = "translateX(0rem)";
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "all";
  } else {
    navbar.style.transform = "";
    overlay.style.opacity = "";
    overlay.style.pointerEvents = "";
  }
}

console.log(window.innerWidth > 940);
