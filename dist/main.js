/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/script.js */ \"./src/script.js\");\n/* harmony import */ var _src_script_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_script_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/style.scss */ \"./src/style.scss\");\n/* harmony import */ var _src_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/slider.js */ \"./src/slider.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://bookshop/./index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bookshop/./src/style.scss?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("\r\n\r\ndocument.addEventListener('DOMContentLoaded', function(){\r\n    \r\n\r\n    const catNav = document.querySelector('.categories');\r\n    const dotCatItem = Array.from(catNav.querySelectorAll('li'));\r\n    let catIndex = 0;\r\n\r\n    const tabsNav = document.querySelector('.tabs-nav');\r\n    const tabsItem = Array.from(tabsNav.querySelectorAll('li'));\r\n    let tabsIndex = 0;\r\n\r\n    \r\n\r\n   \r\n   \r\n\r\n    dotCatItem.forEach((catItem, catIndex) => {\r\n        catItem.addEventListener('click', function() {\r\n        updateCatNav(catIndex);\r\n        });\r\n        })\r\n\r\n\r\n    tabsItem.forEach((tabsItem, tabsIndex) => {\r\n        tabsItem.addEventListener('click', function() {\r\n            updateTabsNav(tabsIndex);\r\n        });\r\n        })\r\n\r\n\r\n   \r\n\r\n    function navItemClick (){\r\n        updateSlider();\r\n        updateDotNav();\r\n    }\r\n\r\n    \r\n\r\n\r\n    \r\n\r\n\r\n    function updateCatNav(catIndex) {\r\n        dotCatItem.forEach((item, index) => {\r\n            if (index === catIndex) {\r\n                item.classList.add('categories-select-active');\r\n            } else {\r\n                item.classList.remove('categories-select-active');\r\n            }\r\n        }); \r\n    }\r\n\r\n    function updateTabsNav(tabsIndex) {\r\n        tabsItem.forEach((item2, index2) => {\r\n            if (index2 === tabsIndex) {\r\n                item2.classList.add('tabs-nav-active');\r\n            } else {\r\n                item2.classList.remove('tabs-nav-active');\r\n            }\r\n        }); \r\n    }\r\n\r\n// таймер\r\n\r\n    \r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookshop/./src/script.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateDotNav: () => (/* binding */ updateDotNav)\n/* harmony export */ });\nconst slider = document.querySelector('.slider');\r\nconst slides = Array.from(slider.querySelectorAll('img'));\r\n\r\nconst dotNav = document.querySelector('.slyder-dots');\r\nconst dotNavItem = Array.from(dotNav.querySelectorAll('.dot'));\r\n\r\nconst slideCount = slides.length;\r\nlet slideIndex = 0;\r\n\r\ndotNavItem.forEach((navItem, navIndex) => {\r\n    navItem.addEventListener('click', function() {\r\n        slideIndex = navIndex;\r\n        navItemClick(slideIndex);\r\n    });\r\n\r\n})\r\n\r\nfunction showPreviousSlide() {\r\n    slideIndex = (slideIndex - 1 + slideCount) % slideCount;\r\n    updateSlider();\r\n    updateDotNav();\r\n}\r\n\r\nfunction showNextSlide() {\r\n    slideIndex = (slideIndex + 1) % slideCount;\r\n    updateSlider();\r\n    updateDotNav();\r\n}\r\n\r\nfunction updateSlider() {\r\n    slides.forEach((slide, index) => {\r\n        if (index === slideIndex) {\r\n        slide.style.display = 'block';\r\n        } else {\r\n        slide.style.display = 'none';\r\n        }\r\n    });\r\n}\r\n\r\nfunction updateDotNav() {\r\n    dotNavItem.forEach((item, index) => {\r\n        if (index === slideIndex) {\r\n            item.classList.add('active');\r\n        } else {\r\n            item.classList.remove('active');\r\n        }\r\n    }); \r\n}\r\nupdateSlider();\r\nupdateDotNav();\r\n\r\nsetInterval(function() {\r\n    showNextSlide();\r\n}, 5000);\r\n\n\n//# sourceURL=webpack://bookshop/./src/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;