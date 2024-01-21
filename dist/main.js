/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './src/slider.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function(){\r\n    \r\n\r\n    const catNav = document.querySelector('.categories');\r\n    const dotCatItem = Array.from(catNav.querySelectorAll('li'));\r\n    let catIndex = 0;\r\n\r\n    const tabsNav = document.querySelector('.tabs-nav');\r\n    const tabsItem = Array.from(tabsNav.querySelectorAll('li'));\r\n    let tabsIndex = 0;\r\n\r\n    \r\n\r\n   \r\n   \r\n\r\n    dotCatItem.forEach((catItem, catIndex) => {\r\n        catItem.addEventListener('click', function() {\r\n        updateCatNav(catIndex);\r\n        });\r\n        })\r\n\r\n\r\n    tabsItem.forEach((tabsItem, tabsIndex) => {\r\n        tabsItem.addEventListener('click', function() {\r\n            updateTabsNav(tabsIndex);\r\n        });\r\n        })\r\n\r\n\r\n   \r\n\r\n    function navItemClick (){\r\n        updateSlider();\r\n        updateDotNav();\r\n    }\r\n\r\n    \r\n\r\n\r\n    \r\n\r\n\r\n    function updateCatNav(catIndex) {\r\n        dotCatItem.forEach((item, index) => {\r\n            if (index === catIndex) {\r\n                item.classList.add('categories-select-active');\r\n            } else {\r\n                item.classList.remove('categories-select-active');\r\n            }\r\n        }); \r\n    }\r\n\r\n    function updateTabsNav(tabsIndex) {\r\n        tabsItem.forEach((item2, index2) => {\r\n            if (index2 === tabsIndex) {\r\n                item2.classList.add('tabs-nav-active');\r\n            } else {\r\n                item2.classList.remove('tabs-nav-active');\r\n            }\r\n        }); \r\n    }\r\n\r\n// таймер\r\n\r\n    \r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://bookshop/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;