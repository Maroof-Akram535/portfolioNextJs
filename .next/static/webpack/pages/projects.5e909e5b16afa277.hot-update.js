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

/***/ "./components/Modal/modal.js":
/*!***********************************!*\
  !*** ./components/Modal/modal.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.module.css */ \"./components/Modal/modal.module.css\");\n/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ProjectModal(param) {\n    var openModal = param.openModal, onClose = param.onClose, children = param.children;\n    // const { isOpen, onOpen, onClose } = useDisclosure()\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n                isOpen: openModal,\n                onClose: function() {\n                    return onClose();\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, {\n                            color: \"white\",\n                            className: (_modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modal),\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\Modal\\\\modal.js\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\Modal\\\\modal.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\Modal\\\\modal.js\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\Modal\\\\modal.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\next\\\\components\\\\Modal\\\\modal.js\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, this)\n    }, void 0, false));\n};\n_c = ProjectModal;\nvar _c;\n$RefreshReg$(_c, \"ProjectModal\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGFsL21vZGFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUzJCO0FBQ2M7QUFDMUIsUUFBUSxDQUFDUyxZQUFZLENBQUMsS0FBNEIsRUFBRSxDQUFDO1FBQTlCQyxTQUFTLEdBQVYsS0FBNEIsQ0FBM0JBLFNBQVMsRUFBQ0MsT0FBTyxHQUFsQixLQUE0QixDQUFqQkEsT0FBTyxFQUFDQyxRQUFRLEdBQTNCLEtBQTRCLENBQVRBLFFBQVE7SUFDNUQsRUFBc0Q7SUFDdEQsTUFBTTs4RkFFREMsQ0FBRztrR0FDSGIsbURBQUs7Z0JBQUNjLE1BQU0sRUFBRUosU0FBUztnQkFBRUMsT0FBTyxFQUFFLFFBQVE7b0JBQUpBLE1BQU0sQ0FBTkEsT0FBTzs7c0dBRTNDVCwwREFBWTs7b0dBR1ZHLHVEQUFTOzRCQUFDVSxLQUFLLEVBQUMsQ0FBTzs0QkFBRUMsU0FBUyxFQUFFUixnRUFBWTtzQ0FDOUNJLFFBQVE7Ozs7OztvR0FHVlIseURBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEIsQ0FBQztLQXRCcUJLLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9tb2RhbC5qcz9mYWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBNb2RhbCxcclxuICAgIE1vZGFsT3ZlcmxheSxcclxuICAgIE1vZGFsQ29udGVudCxcclxuICAgIE1vZGFsSGVhZGVyLFxyXG4gICAgTW9kYWxGb290ZXIsXHJcbiAgICBNb2RhbEJvZHksXHJcbiAgICBNb2RhbENsb3NlQnV0dG9uLFxyXG4gICAgQnV0dG9uLFxyXG4gIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuICBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL21vZGFsLm1vZHVsZS5jc3NcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE1vZGFsKHtvcGVuTW9kYWwsb25DbG9zZSxjaGlsZHJlbn0pIHtcclxuICAgIC8vIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICA8PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPE1vZGFsIGlzT3Blbj17b3Blbk1vZGFsfSBvbkNsb3NlPXsoKT0+b25DbG9zZSgpfSA+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8TW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICB7LyogPE1vZGFsSGVhZGVyPk1vZGFsIFRpdGxlPC9Nb2RhbEhlYWRlcj4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8TW9kYWxDbG9zZUJ1dHRvbiAvPiAqL31cclxuICAgICAgICAgICAgPE1vZGFsQm9keSBjb2xvcj1cIndoaXRlXCIgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gIFxyXG4gICAgICAgICAgICA8TW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgfSJdLCJuYW1lcyI6WyJNb2RhbCIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiTW9kYWxGb290ZXIiLCJNb2RhbEJvZHkiLCJNb2RhbENsb3NlQnV0dG9uIiwiQnV0dG9uIiwic3R5bGVzIiwiUHJvamVjdE1vZGFsIiwib3Blbk1vZGFsIiwib25DbG9zZSIsImNoaWxkcmVuIiwiZGl2IiwiaXNPcGVuIiwiY29sb3IiLCJjbGFzc05hbWUiLCJtb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Modal/modal.js\n");

/***/ })

});