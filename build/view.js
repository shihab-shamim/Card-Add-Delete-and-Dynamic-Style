/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/Common/Style.js":
/*!****************************************!*\
  !*** ./src/Components/Common/Style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  id
}) => {
  const {
    colors,
    alignment,
    title,
    description
  } = attributes;
  const mainSl = `#${id}`;
  const cardBody = `${mainSl} .cardBody`;
  const cardContainer = `${cardBody} .cardContainer`;
  const profileCard = `${cardContainer} .profile-card`;
  const profileInfo = `${profileCard} .profile-info`;
  const cardTitle = `${profileInfo} .cardTitle`;
  const jobDescription = `${profileInfo} .job-title`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `
		${cardBody}{
		display: flex;
		justify-content:${alignment};
	}
	
	${jobDescription}{
		color:${description.color};
		background-color:${description.bg}
		}
	${cardTitle}{
		color:${title.color};
		background-color:${title.bg}
		}
	`
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/Components/Frontend/TagChange.js":
/*!**********************************************!*\
  !*** ./src/Components/Frontend/TagChange.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TagChange = ({
  tag: Tag,
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
    ...props
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagChange);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

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
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/Components/Common/Style.js");
/* harmony import */ var _Components_Frontend_TagChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Frontend/TagChange */ "./src/Components/Frontend/TagChange.js");





document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(".wp-block-b-blocks-test-purpose");
  blockNameEls.forEach(blockNameEl => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    const {
      cards,
      tagName
    } = attributes;
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(blockNameEl).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      id: blockNameEl.id
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cardBody"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cardContainer"
    }, cards.map((card, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: i,
      className: "profile-card"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "profile-header"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "profile-photo",
      src: card.img,
      alt: "Profile Photo"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "profile-info"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Frontend_TagChange__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "cardTitle",
      tag: tagName,
      dangerouslySetInnerHTML: {
        __html: card.name
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "job-title",
      dangerouslySetInnerHTML: {
        __html: card.passionate
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      dangerouslySetInnerHTML: {
        __html: card.company
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "about"
    }, card?.about && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      id: "about-title"
    }, "About"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      dangerouslySetInnerHTML: {
        __html: card.about
      }
    })))))))));
    blockNameEl?.removeAttribute("data-attributes");
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map