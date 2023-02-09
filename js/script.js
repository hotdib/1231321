function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});


//=========swiper

new Swiper('.swiper', {
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	loop: true,
	speed:800,
	simulateTouch: true,
});


// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
// import Swiper, { Navigation} from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../scss/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
// function initSliders() {
// 	// Список слайдерів
// 	// Перевіряємо, чи є слайдер на сторінці
// 	if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
// 		// Створюємо слайдер
// 		new Swiper('.swiper', { // Вказуємо склас потрібного слайдера
// 			// Підключаємо модулі слайдера
// 			// для конкретного випадку
// 			modules: [Navigation],
// 			// observer: true,
// 			// observeParents: true,
// 			// slidesPerView: 1,
// 			// spaceBetween: 10,
// 			// autoHeight: false,
// 			speed: 800,
// 			// slideToClickedSlide:true,
// 			//touchRatio: 0,
// 			//simulateTouch: false,
// 			//loop: true,
// 			//preloadImages: false,
// 			//lazy: true,

// 			/*
// 			// Ефекти
// 			effect: 'fade',
// 			autoplay: {
// 				delay: 3000,
// 				disableOnInteraction: false,
// 			},
// 			*/

// 			// Пагінація
// 			/*
// 			pagination: {
// 				el: '.swiper-pagination',
// 				clickable: true,
// 			},
// 			*/

// 			// Скроллбар
// 			/*
// 			scrollbar: {
// 				el: '.swiper-scrollbar',
// 				draggable: true,
// 			},
// 			*/

// 			// Кнопки "вліво/вправо"
// 			navigation: {
// 				prevEl: '.swiper-button-prev',
// 				nextEl: '.swiper-button-next',
// 			},
// 			/*
// 			// Брейкпоінти
// 			breakpoints: {
// 				640: {
// 					slidesPerView: 1,
// 					spaceBetween: 0,
// 					autoHeight: true,
// 				},
// 				768: {
// 					slidesPerView: 2,
// 					spaceBetween: 20,
// 				},
// 				992: {
// 					slidesPerView: 3,
// 					spaceBetween: 20,
// 				},
// 				1268: {
// 					slidesPerView: 4,
// 					spaceBetween: 30,
// 				},
// 			},
// 			*/
// 			// Події
// 			on: {

// 			}
// 		});
// 	}
// }
// window.addEventListener("load", function () {
// 	// Запуск ініціалізації слайдерів
// 	initSliders();
// 	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
// 	//initSlidersScroll();
// });





















// parallax
document.addEventListener("mousemove", parallax);
const elem = document.querySelector("#parallax");
function parallax(e) {
	let _w = window.innerWidth / 2;
	let _h = window.innerHeight / 2;
	let _mouseX = e.clientX;
	let _mouseY = e.clientY;
	let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
	let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
	let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
	let x = `${_depth3}, ${_depth2}, ${_depth1}`;

	elem.style.backgroundPosition = x;
}

jQuery(document).ready(function ($) {

	//accordion
	$('.tm-accordion__text').hide();
	$('.tm-accordion > div').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active").find(".tm-accordion__text").slideUp();
		} else {
			$(".tm-accordion > div.active .tm-accordion__text").slideUp();
			$(".tm-accordion > div.active").removeClass("active");
			$(this).addClass("active").find(".tm-accordion__text").slideDown();
		}
		return false;
	});

	// header and top active
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			$('.tm-header').addClass('tm-header_active');
			$('.tm-to-top').addClass('tm-to-top_btn');
		} else {
			$('.tm-header').removeClass('tm-header_active');
			$('.tm-to-top').removeClass('tm-to-top_btn');
		}
	});

	// to top animation
	$("a[href='#top']").click(function () {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	//mobile submenu
	if ($(window).width() <= 1270) {
		$(".tm-menu .tm-submenu").hide();

		$(".tm-menu > li.tm-menu__item-has-children > a").after('<span><span></span></span>');
		$(".tm-menu > li.tm-menu__item-has-children > span").click(function () {


			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$(this).next(".tm-submenu").hide(150).removeClass('active');
			} else {
				$(this).closest('ul').children('li').each(function () {
					$(this).children('span.active').removeClass('active');
					$(this).children('ul.active').hide(150).removeClass('active');
				});

				$(this).addClass('active');
				$(this).next(".tm-submenu").show(150).addClass('active');
			}

		});


		let menuItem = $('.tm-menu > li.tm-menu__item-has-children > span');
		let menuList = $('.tm-submenu');

		$(document).click(function (e) {
			if (!menuItem.is(e.target) && menuItem.has(e.target).length === 0 && !menuList.is(e.target) && menuList.has(e.target).length === 0) {
				menuList.slideUp(500);
				menuItem.removeClass('active');
				menuList.removeClass('active');
			}
		});
	}

	// popup
	$('.tm-popup').magnificPopup({
		type: 'inline',
		midClick: true,
		closeOnBgClick: true
	});

	//step block animation

	if ($(window).width() >= 1180) {
		new WOW().init();
	}
	if ($(window).width() <= 1180) {
		$('.wow').each(function () {
			$(this).removeClass('animate__animated');
			$(this).removeClass('animate__slideInUp');
		});
	}
});