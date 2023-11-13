'use strict';
import burger from '../components/blocks/header/top/burger/burger.js';
import order from '../components/blocks/header/order/_order.js';
import navProduct from '../components/blocks/header/nav-product/_nav-product.js';
import seeds from '../components/blocks/main/seeds/_seeds.js';
import carousel from './modules/carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    carousel();
  // burger();
  // order();
  // navProduct();
  // seeds();
  // novelties();
});

// /**
//  * !(i)
//  * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
//  * Или когда импортирован весь файл, например import "files/script.js";
//  * Неиспользуемый код в итоговый файл не попадает.

//  * Если мы хотим добавить модуль следует его раскомментировать
//  */
// // import MousePRLX from './libs/parallaxMouse'
// // import AOS from 'aos'
// // import Swiper, { Navigation, Pagination } from 'swiper';

// import BaseHelpers from './helpers/BaseHelpers';
// import PopupManager from './modules/PopupManager';
// import BurgerMenu from './modules/BurgerMenu';
// import Tabs from './modules/Tabs';
// import Accordion from './modules/Accordion';

// BaseHelpers.checkWebpSupport();

// BaseHelpers.addTouchClass();

// BaseHelpers.addLoadedClass();

// BaseHelpers.headerFixed();

// /**
//  * Открытие/закрытие модальных окон
//  * Чтобы модальное окно открывалось и закрывалось
//  * На окно повешай атрибут data-popup="<название окна>"
//  * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

//  * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
//  * На кнопку для закрытия окна добавь класс '.button-close'
//  * */
// new PopupManager();

// /**
//  *  Модуль для работы с меню (Бургер)
//  * */
// new BurgerMenu().init();

// /**
//  *  Библиотека для анимаций
//  *  документация: https://michalsnik.github.io/aos
//  * */
// // AOS.init();

// /**
//  * Параллакс мышей
//  * */
// // new MousePRLX();

// new Tabs('tabs-example', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });

// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });
