/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/sets"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fparv%2Fplayground%2Fplay%2Fsrc%2Fpages%2Fsets%2Findex.tsx&page=%2Fsets!":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fparv%2Fplayground%2Fplay%2Fsrc%2Fpages%2Fsets%2Findex.tsx&page=%2Fsets! ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/sets\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/sets/index.tsx */ \"./src/pages/sets/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/sets\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRnBhcnYlMkZwbGF5Z3JvdW5kJTJGcGxheSUyRnNyYyUyRnBhZ2VzJTJGc2V0cyUyRmluZGV4LnRzeCZwYWdlPSUyRnNldHMhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsOERBQTRCO0FBQ25EO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz84OTIzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvc2V0c1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vc3JjL3BhZ2VzL3NldHMvaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9zZXRzXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fparv%2Fplayground%2Fplay%2Fsrc%2Fpages%2Fsets%2Findex.tsx&page=%2Fsets!\n"));

/***/ }),

/***/ "./src/components/SetLIst.tsx":
/*!************************************!*\
  !*** ./src/components/SetLIst.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SetList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\nfunction SetList(param) {\n    let { sets  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n        templateColumns: \"repeat(auto-fit, minmax(300px, 1fr))\",\n        gap: 4,\n        children: sets.map((set)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                borderWidth: \"1px\",\n                borderRadius: \"lg\",\n                overflow: \"hidden\",\n                maxHeight: \"400px\",\n                cursor: \"pointer\",\n                as: \"a\",\n                href: \"/sets/\".concat(set.id),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: set.images.logo,\n                        alt: \"\".concat(set.name, \" logo\"),\n                        maxHeight: \"100%\",\n                        width: \"100%\",\n                        objectFit: \"cover\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parv/playground/play/src/components/SetLIst.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        p: \"6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                fontWeight: \"bold\",\n                                fontSize: \"xl\",\n                                mb: 2,\n                                children: set.name\n                            }, void 0, false, {\n                                fileName: \"/Users/parv/playground/play/src/components/SetLIst.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                fontSize: \"lg\",\n                                mb: 2,\n                                children: set.series\n                            }, void 0, false, {\n                                fileName: \"/Users/parv/playground/play/src/components/SetLIst.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                fontSize: \"md\",\n                                color: \"gray.500\",\n                                children: [\n                                    \"Released: \",\n                                    set.releaseDate\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/parv/playground/play/src/components/SetLIst.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/parv/playground/play/src/components/SetLIst.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, set.id, true, {\n                fileName: \"/Users/parv/playground/play/src/components/SetLIst.tsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/parv/playground/play/src/components/SetLIst.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = SetList;\nvar _c;\n$RefreshReg$(_c, \"SetList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZXRMSXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwRDtBQUczQyxTQUFTSSxRQUFRLEtBQXlCLEVBQUU7UUFBM0IsRUFBRUMsS0FBSSxFQUFtQixHQUF6QjtJQUM5QixxQkFDRSw4REFBQ0osa0RBQUlBO1FBQUNLLGlCQUFnQjtRQUF1Q0MsS0FBSztrQkFDL0RGLEtBQUtHLEdBQUcsQ0FBQyxDQUFDQyxvQkFDVCw4REFBQ1QsaURBQUdBO2dCQUNGVSxhQUFZO2dCQUNaQyxjQUFhO2dCQUNiQyxVQUFTO2dCQUNUQyxXQUFVO2dCQUNWQyxRQUFPO2dCQUNQQyxJQUFHO2dCQUVIQyxNQUFNLFNBQWdCLE9BQVBQLElBQUlRLEVBQUU7O2tDQUVyQiw4REFBQ2YsbURBQUtBO3dCQUNKZ0IsS0FBS1QsSUFBSVUsTUFBTSxDQUFDQyxJQUFJO3dCQUNwQkMsS0FBSyxHQUFZLE9BQVRaLElBQUlhLElBQUksRUFBQzt3QkFDakJULFdBQVU7d0JBQ1ZVLE9BQU07d0JBQ05DLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ3hCLGlEQUFHQTt3QkFBQ3lCLEdBQUU7OzBDQUNMLDhEQUFDdEIsa0RBQUlBO2dDQUFDdUIsWUFBVztnQ0FBT0MsVUFBUztnQ0FBS0MsSUFBSTswQ0FDdkNuQixJQUFJYSxJQUFJOzs7Ozs7MENBRVgsOERBQUNuQixrREFBSUE7Z0NBQUN3QixVQUFTO2dDQUFLQyxJQUFJOzBDQUNyQm5CLElBQUlvQixNQUFNOzs7Ozs7MENBRWIsOERBQUMxQixrREFBSUE7Z0NBQUN3QixVQUFTO2dDQUFLRyxPQUFNOztvQ0FBVztvQ0FDeEJyQixJQUFJc0IsV0FBVzs7Ozs7Ozs7Ozs7Ozs7ZUFsQnpCdEIsSUFBSVEsRUFBRTs7Ozs7Ozs7OztBQXlCckIsQ0FBQztLQXBDdUJiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NldExJc3QudHN4P2M2ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBHcmlkLCBJbWFnZSwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBTZXQgfSBmcm9tIFwiLi4vc3RvcmUvc2V0cy90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXRMaXN0KHsgc2V0cyB9OiB7IHNldHM6IFNldFtdIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSlcIiBnYXA9ezR9PlxuICAgICAge3NldHMubWFwKChzZXQpID0+IChcbiAgICAgICAgPEJveFxuICAgICAgICAgIGJvcmRlcldpZHRoPVwiMXB4XCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICAgIG1heEhlaWdodD1cIjQwMHB4XCJcbiAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcbiAgICAgICAgICBhcz1cImFcIlxuICAgICAgICAgIGtleT17c2V0LmlkfVxuICAgICAgICAgIGhyZWY9e2Avc2V0cy8ke3NldC5pZH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e3NldC5pbWFnZXMubG9nb31cbiAgICAgICAgICAgIGFsdD17YCR7c2V0Lm5hbWV9IGxvZ29gfVxuICAgICAgICAgICAgbWF4SGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJveCBwPVwiNlwiPlxuICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBmb250U2l6ZT1cInhsXCIgbWI9ezJ9PlxuICAgICAgICAgICAgICB7c2V0Lm5hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCIgbWI9ezJ9PlxuICAgICAgICAgICAgICB7c2V0LnNlcmllc31cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibWRcIiBjb2xvcj1cImdyYXkuNTAwXCI+XG4gICAgICAgICAgICAgIFJlbGVhc2VkOiB7c2V0LnJlbGVhc2VEYXRlfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICkpfVxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJHcmlkIiwiSW1hZ2UiLCJUZXh0IiwiU2V0TGlzdCIsInNldHMiLCJ0ZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJtYXAiLCJzZXQiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwibWF4SGVpZ2h0IiwiY3Vyc29yIiwiYXMiLCJocmVmIiwiaWQiLCJzcmMiLCJpbWFnZXMiLCJsb2dvIiwiYWx0IiwibmFtZSIsIndpZHRoIiwib2JqZWN0Rml0IiwicCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1iIiwic2VyaWVzIiwiY29sb3IiLCJyZWxlYXNlRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SetLIst.tsx\n"));

/***/ }),

/***/ "./src/pages/sets/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/sets/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Sets; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SetLIst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SetLIst */ \"./src/components/SetLIst.tsx\");\n\n\nvar __N_SSP = true;\nfunction Sets(param) {\n    let { sets  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Pokemon TCG Sets\"\n            }, void 0, false, {\n                fileName: \"/Users/parv/playground/play/src/pages/sets/index.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            sets && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SetLIst__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                sets: sets\n            }, void 0, false, {\n                fileName: \"/Users/parv/playground/play/src/pages/sets/index.tsx\",\n                lineNumber: 8,\n                columnNumber: 16\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parv/playground/play/src/pages/sets/index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Sets;\nvar _c;\n$RefreshReg$(_c, \"Sets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2V0cy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDOztBQUc1QixTQUFTQyxLQUFLLEtBQXlCLEVBQUU7UUFBM0IsRUFBRUMsS0FBSSxFQUFtQixHQUF6QjtJQUMzQixxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0hGLHNCQUFRLDhEQUFDRiwyREFBT0E7Z0JBQUNFLE1BQU1BOzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztLQVB1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NldHMvaW5kZXgudHN4PzA1ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNldExpc3QgZnJvbSBcIkAvY29tcG9uZW50cy9TZXRMSXN0XCI7XG5pbXBvcnQgeyBTZXQgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc2V0cy90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXRzKHsgc2V0cyB9OiB7IHNldHM6IFNldFtdIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlBva2Vtb24gVENHIFNldHM8L2gxPlxuICAgICAge3NldHMgJiYgPFNldExpc3Qgc2V0cz17c2V0c30gLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5wb2tlbW9udGNnLmlvL3YyL3NldHNcIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHNldHMgPSBkYXRhLmRhdGE7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgc2V0cyB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlNldExpc3QiLCJTZXRzIiwic2V0cyIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/sets/index.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fparv%2Fplayground%2Fplay%2Fsrc%2Fpages%2Fsets%2Findex.tsx&page=%2Fsets!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);