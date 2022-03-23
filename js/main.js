const routeSight = document.querySelectorAll(".route__sight-more");
const routeModal = document.querySelectorAll(".route__modal");
const routeModalDesc = document.querySelectorAll(".route__modal-desc");
const body = document.querySelector("body");
const routeClose = document.querySelectorAll(".route__modal-link");
const routeModalWrapper = document.querySelectorAll(".route__modal-wrapper");
const option = document.querySelectorAll("option");
const title = document.querySelectorAll("h1");
const mediaScreen = window.matchMedia("(max-width: 575px)");


//Замена h1
title.forEach(titl => {
  const changeH1 = () => {
    if (mediaScreen.matches) {
      titl.innerHTML = "МАРШРУТЫ ГОРОДА ИЖЕВСК";
    } else {
      titl.innerHTML = "ТУРИСТИЧЕСКИЕ МАРШРУТЫ ГОРОДА ИЖЕВСК";
    }
  };
  changeH1();
  mediaScreen.addListener(changeH1);
})

// Modal windows
routeSight.forEach((el) => {
  routeModalWrapper.forEach((item) => {
    routeModal.forEach(elModal => {
      routeClose.forEach(element => {
        el.addEventListener("click", () => {
          if (el.dataset.more == "1" && item.dataset.modal == "1" && elModal.dataset.inner == '1') {
            showCloseModal(item, elModal, element);
          }

          else if (el.dataset.more == "2" && item.dataset.modal == "2" && elModal.dataset.inner == '2') {
            showCloseModal(item, elModal, element);
          }

          else if (el.dataset.more == "3" && item.dataset.modal == "3" && elModal.dataset.inner == '3') {
            showCloseModal(item, elModal, element);
          }

          else if (el.dataset.more == "4" && item.dataset.modal == "4" && elModal.dataset.inner == '4') {
            showCloseModal(item, elModal, element);
          }

          else if (el.dataset.more == "5" && item.dataset.modal == "5" && elModal.dataset.inner == '5') {
            showCloseModal(item, elModal, element);
          }

          else if (el.dataset.more == "6" && item.dataset.modal == "6" && elModal.dataset.inner == '6') {
            showCloseModal(item, elModal, element);
          }

          else if (el.dataset.more == "7" && item.dataset.modal == "7" && elModal.dataset.inner == '7') {
            showCloseModal(item, elModal, element);
          }
      })
      });
    })
  });
});

const showCloseModal = (item, elModal, element) => {
  item.classList.add("active");
  elModal.classList.add("active");
  body.classList.add('active');

  element.addEventListener("click", (e) => {
    e.preventDefault();
    item.classList.remove("active");
    body.classList.remove('active');

  });
  document.addEventListener("click", (e) => {
    if (e.target === item) {
      item.classList.remove("active");
      body.classList.remove('active');

    }
  });
}

// scroll behavior smooth
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// Burger
const headerBurger = document.querySelector(".header__burger");
const headerLine = document.querySelectorAll(".header__line");
const menu = document.querySelector(".header__top-center");
const menuItem = document.querySelector(".header__top-block");
const headerLinks = document.querySelectorAll(".header__link");
const headerTopRight = document.querySelector(".header__top-right");

headerBurger.addEventListener("click", () => {
  showBurger();
  clickLink();
});

const showBurger = () => {
  headerLine.forEach((el) => {
    el.classList.toggle("active");
  });
  menu.classList.toggle("active");
  body.classList.toggle("active");
  headerTopRight.classList.toggle("active");
};

const clickLink = () => {
  headerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      headerLine.forEach((el) => {
        el.classList.remove("active");
      });
      menu.classList.remove("active");
      body.classList.remove("active");
      headerTopRight.classList.remove("active");
    });
  });
};



