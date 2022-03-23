const headerLink = document.querySelectorAll(".header__link");
const select = document.querySelector("select");
const headerRu = document.querySelector(".header__ru");
const headerEn = document.querySelector(".header__en");
const h1 = document.querySelectorAll("h1");
const headerDeskInner = document.querySelectorAll(".header__desk-inner");
const headerBtnInner = document.querySelectorAll(".header__btn-inner");
const routeTitleInner = document.querySelector(".route__title-inner");
const routeSightTitle = document.querySelectorAll(".route__sight-title");
const routeSightItem = document.querySelectorAll(".route__sight-item");
const aboutTitle = document.querySelector(".about__title");
const aboutDesc = document.querySelector(".about__desc");
const contactTitle = document.querySelector(".contact__title");
const сontactLabel = document.querySelectorAll(".сontact__label");
const contactSubmitBtn = document.querySelector(".contact__submit-btn");
const footerLink = document.querySelectorAll(".footer__link");

let translate = {
  menu: {
    routes: {
      ru: "Маршруты",
      en: "Routes",
    },
    about: {
      ru: "О нас",
      en: "About us",
    },
    feedBack: {
      ru: "Обратная связь",
      en: "Feedback",
    },
  },

  headerContent: {
    h1: {
      ru: "ТУРИСТИЧЕСКИЕ МАРШРУТЫ ГОРОДА ИЖЕВСК",
      en: "TOURIST ROUTES OF THE CITY OF IZHEVSK",
    },
    headerDeskInner: {
      ru: "Любой турист хотел бы с пользой провести время. Здесь вы найдете лучшие труистические маршруты г. Ижевск.",
      en: "Any tourist would like to have a good time. Here you will find the best trekking trails in Izhevsk.",
    },
    headerBtnInner: {
      ru: "Смотреть",
      en: "Look",
    },
  },

  routesTitle: {
    routeTitleInner: {
      ru: "МАРШРУТЫ",
      en: "ROUTES",
    },
  },

  routesSight: {
    routeSightTitleOne: {
      ru: "Оружейный завод",
      en: "Armory",
    },
    routeSightTitleTwo: {
      ru: "Свято-Михайловский собор",
      en: "St. Michael's Cathedral",
    },
    routeSightTitleThree: {
      ru: "Памятник оружейникам",
      en: "Monument to gunsmiths",
    },
    routeSightTitleFour: {
      ru: "Памятник Царь пушке",
      en: "Monument to the Tsar Cannon",
    },
    routeSightTitleFive: {
      ru: "Вечный огонь",
      en: "Eternal flame",
    },
    routeSightTitleSix: {
      ru: "Музей Ижмаш",
      en: "Izhmash Museum",
    },
    routeSightTitleSeven: {
      ru: "Музей Калашникова",
      en: "Kalashnikov Museum",
    },
    routeSightItem: {
      ru: "Подробнее",
      en: "More",
    },
  },
  aboutDesc: {
    aboutDesciption: {
      ru: "Мы представители крупного промышленного, торгового, научно-образовательного и культурного центра Поволжья и Предуралья, столицы Удмуртской Республики г. Ижевска. Мы живем в этом городе уже 17 лет и нам точно есть, что рассказать! Все места, которые рекомендовано посетить, были уже хорошо изучены нами. Именно поэтому это одни из лучших туристических мест, которые мы рекомендуем",
      en: "We are representatives of a large industrial, commercial, scientific, educational and cultural center of the Volga and Cis-Urals, the capital of the Udmurt Republic, Izhevsk. We have been living in this city for 17 years and we definitely have something to tell! All the places that are recommended to visit have already been well studied by us. That is why it is one of the best tourist destinations that we recommend.",
    },
  },
  contact: {
    contactTitle: {
      ru: "Связаться с нами",
      en: "Connect with us",
    },
    сontactLabelOne: {
      ru: "Ваше имя",
      en: "Your name",
    },
    сontactLabelTwo: {
      ru: "Email",
      en: "Email",
    },
    сontactLabelThree: {
      ru: "Номер телефона",
      en: "Phone number",
    },
    contactSubmitBtn: {
      ru: "Отправить",
      en: "Send",
    },
  },
  footerLinks: {
    footerLinkOne: {
      ru: "Маршруты",
      en: "Routes",
    },
    footerLinkTwo: {
      ru: "О нас",
      en: "About us",
    },
    footerLinkThree: {
      ru: "Обратная связь",
      en: "Feedback",
    },
  },
};

let a = localStorage.setItem('translate', JSON.stringify(translate));

const translateForeighEn = () => {
  if (localStorage.getItem('translate', JSON.stringify(translate)) && select.value == "en") {
    headerLink[0].innerHTML = translate.menu.routes.en;
    headerLink[1].innerHTML = translate.menu.about.en;
    headerLink[2].innerHTML = translate.menu.feedBack.en;
    h1.forEach(h => {
      h.textContent = translate.headerContent.h1.en;
    })
    headerDeskInner.forEach(desc => {
      desc.textContent = translate.headerContent.headerDeskInner.en;
    })
    headerBtnInner.forEach(el => {
      el.textContent = translate.headerContent.headerBtnInner.en;
    })
    routeTitleInner.textContent = translate.routesTitle.routeTitleInner.en;
    routeSightTitle[0].textContent =
      translate.routesSight.routeSightTitleOne.en;
    routeSightTitle[1].textContent =
      translate.routesSight.routeSightTitleTwo.en;
    routeSightTitle[2].textContent =
      translate.routesSight.routeSightTitleThree.en;
    routeSightTitle[3].textContent =
      translate.routesSight.routeSightTitleFour.en;
    routeSightTitle[4].textContent =
      translate.routesSight.routeSightTitleFive.en;
    routeSightTitle[5].textContent =
      translate.routesSight.routeSightTitleSix.en;
    routeSightTitle[6].textContent =
      translate.routesSight.routeSightTitleSeven.en;
    routeSightItem.forEach((el) => {
      el.textContent = translate.routesSight.routeSightItem.en;
    });
    aboutTitle.textContent = translate.menu.about.en;
    aboutDesc.textContent = translate.aboutDesc.aboutDesciption.en;
    contactTitle.textContent = translate.contact.contactTitle.en;
    сontactLabel[0].textContent = translate.contact.сontactLabelOne.en;
    сontactLabel[1].textContent = translate.contact.сontactLabelTwo.en;
    сontactLabel[2].textContent = translate.contact.сontactLabelThree.en;
    contactSubmitBtn.textContent = translate.contact.contactSubmitBtn.en;
    footerLink[0].textContent = translate.footerLinks.footerLinkOne.en;
    footerLink[1].textContent = translate.footerLinks.footerLinkTwo.en;
    footerLink[2].textContent = translate.footerLinks.footerLinkThree.en;
    select.options[1].selected = true;
    localStorage.getItem('translate', JSON.stringify(translate));
  }
}

const translateForeighRu = () => {
  if (select.value == "ru" && localStorage.getItem('translate', JSON.stringify(translate))) {
    headerLink[0].innerHTML = translate.menu.routes.ru;
    headerLink[1].innerHTML = translate.menu.about.ru;
    headerLink[2].innerHTML = translate.menu.feedBack.ru;
    h1.forEach(h => {
      h.textContent = translate.headerContent.h1.ru;
    })
    headerDeskInner.forEach(desc => {
      desc.textContent = translate.headerContent.headerDeskInner.ru;
    })
    headerBtnInner.forEach(el => {
      el.textContent = translate.headerContent.headerBtnInner.ru;
    })
    routeTitleInner.textContent = translate.routesTitle.routeTitleInner.ru;
    routeSightTitle[0].textContent =
      translate.routesSight.routeSightTitleOne.ru;
    routeSightTitle[0].textContent =
      translate.routesSight.routeSightTitleOne.ru;
    routeSightTitle[1].textContent =
      translate.routesSight.routeSightTitleTwo.ru;
    routeSightTitle[2].textContent =
      translate.routesSight.routeSightTitleThree.ru;
    routeSightTitle[3].textContent =
      translate.routesSight.routeSightTitleFour.ru;
    routeSightTitle[4].textContent =
      translate.routesSight.routeSightTitleFive.ru;
    routeSightTitle[5].textContent =
      translate.routesSight.routeSightTitleSix.ru;
    routeSightTitle[6].textContent =
      translate.routesSight.routeSightTitleSeven.ru;
    routeSightItem.forEach((el) => {
      el.textContent = translate.routesSight.routeSightItem.ru;
    });
    aboutTitle.textContent = translate.menu.about.ru;
    aboutDesc.textContent = translate.aboutDesc.aboutDesciption.ru;
    contactTitle.textContent = translate.contact.contactTitle.ru;
    сontactLabel[0].textContent = translate.contact.сontactLabelOne.ru;
    сontactLabel[1].textContent = translate.contact.сontactLabelTwo.ru;
    сontactLabel[2].textContent = translate.contact.сontactLabelThree.ru;
    contactSubmitBtn.textContent = translate.contact.contactSubmitBtn.ru;
    footerLink[0].textContent = translate.footerLinks.footerLinkOne.ru;
    footerLink[1].textContent = translate.footerLinks.footerLinkTwo.ru;
    footerLink[2].textContent = translate.footerLinks.footerLinkThree.ru;
    localStorage.getItem('translate', JSON.stringify(translate));
  }
}

select.addEventListener("click", () => {
  translateForeighEn();
  translateForeighRu();
});
