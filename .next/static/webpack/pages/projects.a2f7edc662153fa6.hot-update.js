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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home(param) {\n    var slideImages = param.slideImages;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index = ref[0], setActiveStep = ref[1];\n    var collectionSize = slideImages.length;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SimpleGrid, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                        src: slideImages[index].url\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\ImageSlider\\\\imageSlider.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        colorScheme: \"teal\",\n                        variant: \"outline\",\n                        onClick: function() {\n                            setActiveStep(index - 1);\n                        },\n                        disabled: index === 0,\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\ImageSlider\\\\imageSlider.js\",\n                        lineNumber: 17,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        colorScheme: \"teal\",\n                        variant: \"outline\",\n                        onClick: function() {\n                            setActiveStep(index + 1);\n                        },\n                        disabled: index === collectionSize - 1,\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\ImageSlider\\\\imageSlider.js\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\ImageSlider\\\\imageSlider.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\ImageSlider\\\\imageSlider.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\ImageSlider\\\\imageSlider.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlU2xpZGVyL2ltYWdlU2xpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1g7QUFDQztBQUNDO0FBQ0k7O0FBQzdCLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLEtBQWEsRUFBRSxDQUFDO1FBQWZDLFdBQVcsR0FBWixLQUFhLENBQVpBLFdBQVc7O0lBQ3RDLEdBQUssQ0FBeUJMLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQWpDTSxLQUFLLEdBQWtCTixHQUFXLEtBQTNCTyxhQUFhLEdBQUdQLEdBQVc7SUFDekMsR0FBSyxDQUFDUSxjQUFjLEdBQUdILFdBQVcsQ0FBQ0ksTUFBTTtJQUMzQyxNQUFNLDZFQUNIWix3REFBVTs4RkFDUkMsaURBQUc7a0dBRUhZLENBQUc7O2dHQUNDVCxtREFBSzt3QkFBQ1UsR0FBRyxFQUFFTixXQUFXLENBQUNDLEtBQUssRUFBRU0sR0FBRzs7Ozs7O2dHQUc3QlYsb0RBQU07d0JBQUVXLFdBQVcsRUFBQyxDQUFNO3dCQUFDQyxPQUFPLEVBQUMsQ0FBUzt3QkFBRUMsT0FBTyxFQUFFLFFBQVEsR0FBSixDQUFDUjs0QkFBQUEsYUFBYSxDQUFDRCxLQUFLLEdBQUMsQ0FBQzt3QkFBQyxDQUFDO3dCQUFJVSxRQUFRLEVBQUVWLEtBQUssS0FBSyxDQUFDO2tDQUFFLENBQUk7Ozs7OztnR0FDcEhKLG9EQUFNO3dCQUFFVyxXQUFXLEVBQUMsQ0FBTTt3QkFBQ0MsT0FBTyxFQUFDLENBQVM7d0JBQUNDLE9BQU8sRUFBRSxRQUFRLEdBQUosQ0FBQ1I7NEJBQUFBLGFBQWEsQ0FBQ0QsS0FBSyxHQUFDLENBQUM7d0JBQUMsQ0FBQzt3QkFBSVUsUUFBUSxFQUFFVixLQUFLLEtBQUtFLGNBQWMsR0FBQyxDQUFDO2tDQUFFLENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRN0ksQ0FBQztHQXBCd0JKLElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ltYWdlU2xpZGVyL2ltYWdlU2xpZGVyLmpzPzg3MTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2ltcGxlR3JpZCwgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbWFnZVNsaWRlci5tb2R1bGUuY3NzXCI7XHJcbiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtzbGlkZUltYWdlc30pIHtcclxuICAgIGNvbnN0IFtpbmRleCwgc2V0QWN0aXZlU3RlcF0gPXVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgY29sbGVjdGlvblNpemUgPSBzbGlkZUltYWdlcy5sZW5ndGg7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTaW1wbGVHcmlkID5cclxuICAgICAgPEJveCA+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2ID5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3NsaWRlSW1hZ2VzW2luZGV4XS51cmx9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gIGNvbG9yU2NoZW1lPSd0ZWFsJyB2YXJpYW50PSdvdXRsaW5lJyAgb25DbGljaz17KCk9PntzZXRBY3RpdmVTdGVwKGluZGV4LTEpfX0gICBkaXNhYmxlZD17aW5kZXggPT09IDB9PkJhY2s8L0J1dHRvbj4gIFxyXG4gICAgICAgICAgICA8QnV0dG9uICBjb2xvclNjaGVtZT0ndGVhbCcgdmFyaWFudD0nb3V0bGluZScgb25DbGljaz17KCk9PntzZXRBY3RpdmVTdGVwKGluZGV4KzEpfX0gICBkaXNhYmxlZD17aW5kZXggPT09IGNvbGxlY3Rpb25TaXplLTF9Pk5leHQ8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICBcclxuICAgICAgPC9Cb3g+XHJcbiAgICAgXHJcbiAgICA8L1NpbXBsZUdyaWQ+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlNpbXBsZUdyaWQiLCJCb3giLCJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJCdXR0b24iLCJzdHlsZXMiLCJIb21lIiwic2xpZGVJbWFnZXMiLCJpbmRleCIsInNldEFjdGl2ZVN0ZXAiLCJjb2xsZWN0aW9uU2l6ZSIsImxlbmd0aCIsImRpdiIsInNyYyIsInVybCIsImNvbG9yU2NoZW1lIiwidmFyaWFudCIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ImageSlider/imageSlider.js\n");

/***/ })

});