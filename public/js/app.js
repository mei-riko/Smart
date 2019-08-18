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
    (0, _jquery2.default)("a.scroll").click(function () {
        (0, _jquery2.default)("html, body").animate({
            scrollTop: (0, _jquery2.default)((0, _jquery2.default)(this).attr("href")).offset().top + "px"
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

    // Index Slider
    if ((0, _jquery2.default)('.slider_license').length > 0) {
        var $status = (0, _jquery2.default)('.slider-numeric');
        var $slickElement = (0, _jquery2.default)('.slider_license');

        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + '/' + slick.slideCount);
        });
        $slickElement.slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false
        });
    }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);