"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/ImageSlider/imageSlider.js":
/*!***********************************************!*\
  !*** ./components/ImageSlider/imageSlider.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_slideshow_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slideshow-image */ \"./node_modules/react-slideshow-image/dist/react-slideshow-image.min.js\");\n/* harmony import */ var react_slideshow_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slideshow_image__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction Home(param) {\n    var slideImages = param.slideImages;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SimpleGrid, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slideshow_image__WEBPACK_IMPORTED_MODULE_1__.Slide, {\n                    children: slideImages.map(function(slideImage, index) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"each-slide\"\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\ImageSlider\\\\imageSlider.js\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\ImageSlider\\\\imageSlider.js\",\n                    lineNumber: 13,\n                    columnNumber: 19\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\ImageSlider\\\\imageSlider.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\ImageSlider\\\\imageSlider.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\ImageSlider\\\\imageSlider.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlU2xpZGVyL2ltYWdlU2xpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1Y7QUFDSztBQUM5QixRQUFRLENBQUNJLElBQUksQ0FBQyxLQUFhLEVBQUUsQ0FBQztRQUFmQyxXQUFXLEdBQVosS0FBYSxDQUFaQSxXQUFXOztJQUN2QyxNQUFNLDZFQUNITCx3REFBVTs4RkFDUkMsaURBQUc7a0dBQ0hLLENBQUc7c0dBS1NILHdEQUFLOzhCQUNkRSxXQUFXLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQVBDLFVBQVUsRUFBRUMsS0FBSztzQ0FDaEMsTUFBTSwrREFBTEgsQ0FBRzs0QkFBQ0ksU0FBUyxFQUFDLENBQVk7MkJBQU1ELEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWWxELENBQUM7S0F2QnVCTCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW1hZ2VTbGlkZXIvaW1hZ2VTbGlkZXIuanM/ODcxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaW1wbGVHcmlkLCBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tICdyZWFjdC1zbGlkZXNob3ctaW1hZ2UnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtzbGlkZUltYWdlc30pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNpbXBsZUdyaWQgPlxyXG4gICAgICA8Qm94ID5cclxuICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICB7LyogPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgc3JjPScvTUFST09GX0FLUkFNX1Jlc3VtZS0xLmpwZydcclxuICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MDBweFwiXHJcbiAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxTbGlkZT5cclxuICAgICAgICAge3NsaWRlSW1hZ2VzLm1hcCgoc2xpZGVJbWFnZSwgaW5kZXgpPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVhY2gtc2xpZGVcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eydiYWNrZ3JvdW5kSW1hZ2UnOiBgdXJsKCR7c2xpZGVJbWFnZS51cmx9KWB9fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntzbGlkZUltYWdlLmNhcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX0gXHJcbiAgICAgICAgPC9TbGlkZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgXHJcbiAgICA8L1NpbXBsZUdyaWQ+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlNpbXBsZUdyaWQiLCJCb3giLCJJbWFnZSIsIlNsaWRlIiwiSG9tZSIsInNsaWRlSW1hZ2VzIiwiZGl2IiwibWFwIiwic2xpZGVJbWFnZSIsImluZGV4IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ImageSlider/imageSlider.js\n");

/***/ })

});