/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {

    (0, _jquery2.default)('.preloader').fadeOut().end().delay(400).fadeOut('slow');

    (0, _jquery2.default)("a.scroll").click(function () {
        (0, _jquery2.default)("html, body").animate({
            scrollTop: (0, _jquery2.default)((0, _jquery2.default)(this).attr("href")).offset().top - 120 + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    // Input mask
    if ((0, _jquery2.default)('.phone').length > 0) {
        (0, _jquery2.default)(".phone").inputmask({
            mask: "8 999 999 99 99",
            placeholder: " ",
            showMaskOnHover: true,
            onincomplete: function onincomplete() {
                (0, _jquery2.default)(this).closest("form").addClass('error-phone');
                (0, _jquery2.default)(this).addClass('error');
                (0, _jquery2.default)(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер');
            },
            oncomplete: function oncomplete() {
                (0, _jquery2.default)(this).closest("form").removeClass('error-phone');
                (0, _jquery2.default)(this).removeClass('error');
                (0, _jquery2.default)(this).siblings(".error_phone").removeClass('error').html('');
            }
        });
    }
    (0, _jquery2.default)('input.phone').on('keydown', function (event) {
        if (event.keyCode === 13 && !(0, _jquery2.default)(this).inputmask("isComplete")) {
            event.preventDefault();
            (0, _jquery2.default)(this).blur();
            return false;
        }
    });

    // Slider
    if ((0, _jquery2.default)('.slider_license').length > 0) {
        var $status = (0, _jquery2.default)('.slider-numeric');
        var $slickElementIndex = (0, _jquery2.default)('.slider_license#index-slider');

        $slickElementIndex.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + '/' + slick.slideCount);
        });
        $slickElementIndex.slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false
        });

        var $slickElementStudy = (0, _jquery2.default)('.slider_license#study-slider');
        $slickElementStudy.slick({
            slidesToShow: 4,
            arrows: false,
            responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            }]
        });
    }

    // Navbar
    (0, _jquery2.default)(".nav__item_has-child .nav__link.nav__link_parent").on("click", function (e) {
        e.preventDefault();
        var href = (0, _jquery2.default)(this).data("href");

        if (!(0, _jquery2.default)(this).hasClass("nav__link--active")) {
            // remove active

            var hrefActive = (0, _jquery2.default)(".nav__item_has-child .nav__link.nav__link--active").data("href");
            (0, _jquery2.default)(hrefActive).removeClass("nav__dropdown--active");
            (0, _jquery2.default)(hrefActive).slideUp();
            (0, _jquery2.default)(".nav__item_has-child .nav__link.nav__link--active").removeClass("nav__link--active");

            // add active status
            (0, _jquery2.default)(this).addClass("nav__link--active");
            (0, _jquery2.default)(href).addClass("nav__dropdown--active");
            (0, _jquery2.default)(href).slideDown();
        } else {
            (0, _jquery2.default)(this).removeClass("nav__link--active");
            (0, _jquery2.default)(href).removeClass("nav__dropdown--active");
            (0, _jquery2.default)(href).slideUp();
        }
    });

    // Navbar Mobile
    (0, _jquery2.default)(".header__nav#mobile-nav").on("click", function (e) {
        (0, _jquery2.default)(".header .nav.nav_mobile").slideToggle();
    });
    (0, _jquery2.default)(".header .nav.nav_mobile .nav__title").on("click", function (e) {
        var href = (0, _jquery2.default)(this).data("href");

        if ((0, _jquery2.default)(this).hasClass("nav__title--active")) {
            (0, _jquery2.default)(this).removeClass("nav__title--active");
            (0, _jquery2.default)(href).removeClass("nav__hidden--active");
            (0, _jquery2.default)(href).slideUp();
        } else {
            // remove active    
            var hrefActive = (0, _jquery2.default)(".header .nav.nav_mobile .nav__title.nav__title--active").data("href");
            (0, _jquery2.default)(hrefActive).removeClass("nav__hidden--active");
            (0, _jquery2.default)(hrefActive).slideUp();
            (0, _jquery2.default)(".header .nav.nav_mobile .nav__title.nav__title--active").removeClass("nav__title--active");
            // add active status
            (0, _jquery2.default)(this).addClass("nav__title--active");
            (0, _jquery2.default)(href).addClass("nav__hidden--active");
            (0, _jquery2.default)(href).slideDown();
        }
    });

    (0, _jquery2.default)(document).mouseup(function (e) {
        // событие клика по веб-документу
        var dropdownNavActive = (0, _jquery2.default)(".nav__item_has-child .nav__link.nav__link--active"); // пункт меню
        var dropdownActive = (0, _jquery2.default)(".nav__dropdown.nav__dropdown--active"); // элемент
        var mobileActive = (0, _jquery2.default)(".header .nav.nav_mobile");

        if (!dropdownActive.is(e.target) // клик был не по блоку
        && !dropdownNavActive.is(e.target) // и не по активному пункту меню
        && dropdownActive.has(e.target).length === 0) {
            // и не по его дочерним элементам
            (0, _jquery2.default)(".nav__item_has-child .nav__link.nav__link--active").removeClass("nav__link--active");
            dropdownActive.removeClass("nav__dropdown--active");
            dropdownActive.slideUp();
        }

        if (!mobileActive.is(e.target) && mobileActive.has(e.target).length === 0 && !(0, _jquery2.default)(".header__nav#mobile-nav").is(e.target)) {
            mobileActive.slideUp();
        }
    });
    // Hide Navigation on Desktop
    (0, _jquery2.default)(window).resize(function () {
        if ((0, _jquery2.default)(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches) {
            (0, _jquery2.default)(".header .nav.nav_mobile").slideUp();
            var hrefActive = (0, _jquery2.default)(".header .nav.nav_mobile .nav__title.nav__title--active").data("href");
            (0, _jquery2.default)(hrefActive).removeClass("nav__hidden--active");
            (0, _jquery2.default)(hrefActive).slideUp();
            (0, _jquery2.default)(".header .nav.nav_mobile .nav__title.nav__title--active").removeClass("nav__title--active");
        }
    });

    (0, _jquery2.default)(".navigation-block .navigation-block__scroll").on("click", function () {
        (0, _jquery2.default)(".navigation-block .nav").animate({ scrollLeft: "+=" + 150 + "px" });
    });

    // Timer

    function countDown() {
        var seconds = 70997;
        var timer = setInterval(function () {
            if (seconds > 0) {
                seconds--;
                var h = seconds / 3600 ^ 0,
                    m = (seconds - h * 3600) / 60 ^ 0,
                    s = seconds - h * 3600 - m * 60,
                    time = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
                (0, _jquery2.default)("#timer").text(time);
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    countDown();

    var start = new Date();
    var time;

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    // проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
    var alertwin2 = getCookie("alertwin2");
    if (alertwin2 != "no" && (0, _jquery2.default)(window).width() > 991) {
        (0, _jquery2.default)(document).mouseleave(function (e) {
            time = new Date();
            var timeCheck = Math.round((time - start) / 1000);
            // console.log( timeCheck );

            if (e.clientY < -1 && !(0, _jquery2.default)("#modalOut").hasClass("open") && timeCheck > 40) {

                _jquery2.default.fancybox.open({
                    src: '#modalOut'
                });
                (0, _jquery2.default)("#modalOut").addClass("open");

                // записываем cookie
                var date = new Date();
                date.setDate(date.getDate() + 1);
                document.cookie = "alertwin2=no; path=/; expires=" + date.toUTCString();
            }
        });
    }

    // Change Value Poll
    (0, _jquery2.default)(".poll__input").on("change", function () {
        var programmId = (0, _jquery2.default)(this).data("id");
        var programmName = (0, _jquery2.default)(programmId).data("value");
        var programmVal = (0, _jquery2.default)(this).val();

        // console.log( programmName + ' ' + programmVal);

        (0, _jquery2.default)(programmId).val(programmName + ' (' + programmVal + ');');
    });

    // Review Open Full
    (0, _jquery2.default)(".reviews-item .reviews-item__link").on("click", function (e) {
        e.preventDefault();

        (0, _jquery2.default)(this).toggleClass("reviews-item__link--active");

        var review = (0, _jquery2.default)(this).closest(".reviews-item");
        review.find(".reviews-item__full").slideToggle();

        if ((0, _jquery2.default)(this).hasClass("reviews-item__link--active")) {
            (0, _jquery2.default)(this).html("Скрыть");
        } else {
            (0, _jquery2.default)(this).html("Читать полностью");
        }
    });

    // Toggle

    (0, _jquery2.default)(".toggle.toggle_with-content").on("click", function (e) {
        (0, _jquery2.default)(this).toggleClass("toggle--active");
        (0, _jquery2.default)(this).find(".toggle__content").slideToggle();
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);