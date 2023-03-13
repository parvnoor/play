"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pokemon/[id]",{

/***/ "./src/pages/pokemon/[id]/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/pokemon/[id]/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\nconst PokemonPage = (param)=>{\n    let { pokemon  } = param;\n    const { name , hp , types , images , attacks , weaknesses  } = pokemon;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        maxW: \"6xl\",\n        my: 10,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n            direction: {\n                base: \"column\",\n                lg: \"row\"\n            },\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    w: {\n                        base: \"100%\",\n                        lg: \"50%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: images.large,\n                        alt: name,\n                        maxW: \"sm\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    w: {\n                        base: \"100%\",\n                        lg: \"50%\"\n                    },\n                    mt: {\n                        base: 4,\n                        lg: 0\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                        spacing: 4,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                fontWeight: \"bold\",\n                                children: [\n                                    \"HP: \",\n                                    hp\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                fontWeight: \"bold\",\n                                children: [\n                                    \"Type: \",\n                                    types.join(\", \")\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                                        as: \"h3\",\n                                        size: \"md\",\n                                        mb: 2,\n                                        children: \"Attacks:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                                        spacing: 2,\n                                        children: attacks.map((attack)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                                        fontWeight: \"bold\",\n                                                        children: attack.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                                        lineNumber: 30,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                                        children: attack.text\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                                        lineNumber: 31,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, attack.name, true, {\n                                                fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                                        as: \"h3\",\n                                        size: \"md\",\n                                        mb: 2,\n                                        children: \"Weaknesses:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                                        spacing: 2,\n                                        children: weaknesses.map((weakness)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                                        fontWeight: \"bold\",\n                                                        children: weakness.type\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                                        children: weakness.value\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                                        lineNumber: 44,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, weakness.type, true, {\n                                                fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                colorScheme: \"blue\",\n                                children: \"Add to Cart\"\n                            }, void 0, false, {\n                                fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PokemonPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PokemonPage);\nvar _c;\n$RefreshReg$(_c, \"PokemonPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9rZW1vbi9baWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2RjtBQVE3RixNQUFNUSxjQUFjLFNBQXdCO1FBQXZCLEVBQUVDLFFBQU8sRUFBUztJQUNyQyxNQUFNLEVBQUVDLEtBQUksRUFBRUMsR0FBRSxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsUUFBTyxFQUFFQyxXQUFVLEVBQUUsR0FBR047SUFFekQscUJBQ0UsOERBQUNQLHVEQUFTQTtRQUFDYyxNQUFLO1FBQU1DLElBQUk7a0JBQ3hCLDRFQUFDZCxrREFBSUE7WUFBQ2UsV0FBVztnQkFBRUMsTUFBTTtnQkFBVUMsSUFBSTtZQUFNO1lBQUdDLFNBQVE7OzhCQUN0RCw4REFBQ3JCLGlEQUFHQTtvQkFBQ3NCLEdBQUc7d0JBQUVILE1BQU07d0JBQVFDLElBQUk7b0JBQU07OEJBQ2hDLDRFQUFDZixtREFBS0E7d0JBQUNrQixLQUFLVixPQUFPVyxLQUFLO3dCQUFFQyxLQUFLZjt3QkFBTU0sTUFBSzs7Ozs7Ozs7Ozs7OEJBRTVDLDhEQUFDaEIsaURBQUdBO29CQUFDc0IsR0FBRzt3QkFBRUgsTUFBTTt3QkFBUUMsSUFBSTtvQkFBTTtvQkFBR00sSUFBSTt3QkFBRVAsTUFBTTt3QkFBR0MsSUFBSTtvQkFBRTs4QkFDeEQsNEVBQUNkLG1EQUFLQTt3QkFBQ3FCLFNBQVM7OzBDQUNkLDhEQUFDdkIscURBQU9BOzBDQUFFTTs7Ozs7OzBDQUNWLDhEQUFDSCxrREFBSUE7Z0NBQUNxQixZQUFXOztvQ0FBTztvQ0FBS2pCOzs7Ozs7OzBDQUM3Qiw4REFBQ0osa0RBQUlBO2dDQUFDcUIsWUFBVzs7b0NBQU87b0NBQU9oQixNQUFNaUIsSUFBSSxDQUFDOzs7Ozs7OzBDQUMxQyw4REFBQzdCLGlEQUFHQTs7a0RBQ0YsOERBQUNJLHFEQUFPQTt3Q0FBQzBCLElBQUc7d0NBQUtDLE1BQUs7d0NBQUtDLElBQUk7a0RBQUc7Ozs7OztrREFHbEMsOERBQUMxQixtREFBS0E7d0NBQUNxQixTQUFTO2tEQUNiYixRQUFRbUIsR0FBRyxDQUFDLENBQUNDLHVCQUNaLDhEQUFDbEMsaURBQUdBOztrRUFDRiw4REFBQ08sa0RBQUlBO3dEQUFDcUIsWUFBVztrRUFBUU0sT0FBT3hCLElBQUk7Ozs7OztrRUFDcEMsOERBQUNILGtEQUFJQTtrRUFBRTJCLE9BQU9DLElBQUk7Ozs7Ozs7K0NBRlZELE9BQU94QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzBDQU8zQiw4REFBQ1YsaURBQUdBOztrREFDRiw4REFBQ0kscURBQU9BO3dDQUFDMEIsSUFBRzt3Q0FBS0MsTUFBSzt3Q0FBS0MsSUFBSTtrREFBRzs7Ozs7O2tEQUdsQyw4REFBQzFCLG1EQUFLQTt3Q0FBQ3FCLFNBQVM7a0RBQ2JaLFdBQVdrQixHQUFHLENBQUMsQ0FBQ0cseUJBQ2YsOERBQUNwQyxpREFBR0E7O2tFQUNGLDhEQUFDTyxrREFBSUE7d0RBQUNxQixZQUFXO2tFQUFRUSxTQUFTQyxJQUFJOzs7Ozs7a0VBQ3RDLDhEQUFDOUIsa0RBQUlBO2tFQUFFNkIsU0FBU0UsS0FBSzs7Ozs7OzsrQ0FGYkYsU0FBU0MsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OzswQ0FPN0IsOERBQUNwQyxvREFBTUE7Z0NBQUNzQyxhQUFZOzBDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZDO0tBOUNNL0I7O0FBZ0ROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb2tlbW9uL1tpZF0vaW5kZXgudHN4PzljZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIENvbnRhaW5lciwgRmxleCwgSGVhZGluZywgSW1hZ2UsIFN0YWNrLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSAnQC9zdG9yZS9wb2tlbW9uL3R5cGVzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcG9rZW1vbjogUG9rZW1vbjtcbn1cblxuY29uc3QgUG9rZW1vblBhZ2UgPSAoeyBwb2tlbW9uIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgaHAsIHR5cGVzLCBpbWFnZXMsIGF0dGFja3MsIHdlYWtuZXNzZXMgfSA9IHBva2Vtb247XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG1heFc9XCI2eGxcIiBteT17MTB9PlxuICAgICAgPEZsZXggZGlyZWN0aW9uPXt7IGJhc2U6ICdjb2x1bW4nLCBsZzogJ3JvdycgfX0ganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgPEJveCB3PXt7IGJhc2U6ICcxMDAlJywgbGc6ICc1MCUnIH19PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlcy5sYXJnZX0gYWx0PXtuYW1lfSBtYXhXPVwic21cIiAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCB3PXt7IGJhc2U6ICcxMDAlJywgbGc6ICc1MCUnIH19IG10PXt7IGJhc2U6IDQsIGxnOiAwIH19PlxuICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgIDxIZWFkaW5nPntuYW1lfTwvSGVhZGluZz5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCI+SFA6IHtocH08L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiPlR5cGU6IHt0eXBlcy5qb2luKCcsICcpfTwvVGV4dD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzaXplPVwibWRcIiBtYj17Mn0+XG4gICAgICAgICAgICAgICAgQXR0YWNrczpcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAge2F0dGFja3MubWFwKChhdHRhY2spID0+IChcbiAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXthdHRhY2submFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCI+e2F0dGFjay5uYW1lfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+e2F0dGFjay50ZXh0fTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgc2l6ZT1cIm1kXCIgbWI9ezJ9PlxuICAgICAgICAgICAgICAgIFdlYWtuZXNzZXM6XG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgIHt3ZWFrbmVzc2VzLm1hcCgod2Vha25lc3MpID0+IChcbiAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXt3ZWFrbmVzcy50eXBlfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIj57d2Vha25lc3MudHlwZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Pnt3ZWFrbmVzcy52YWx1ZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIj5BZGQgdG8gQ2FydDwvQnV0dG9uPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9GbGV4PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9rZW1vblBhZ2U7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkucG9rZW1vbnRjZy5pby92Mi9jYXJkcy8ke2lkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3QgcG9rZW1vbiA9IGRhdGEuZGF0YTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwb2tlbW9uIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRmxleCIsIkhlYWRpbmciLCJJbWFnZSIsIlN0YWNrIiwiVGV4dCIsIlBva2Vtb25QYWdlIiwicG9rZW1vbiIsIm5hbWUiLCJocCIsInR5cGVzIiwiaW1hZ2VzIiwiYXR0YWNrcyIsIndlYWtuZXNzZXMiLCJtYXhXIiwibXkiLCJkaXJlY3Rpb24iLCJiYXNlIiwibGciLCJqdXN0aWZ5IiwidyIsInNyYyIsImxhcmdlIiwiYWx0IiwibXQiLCJzcGFjaW5nIiwiZm9udFdlaWdodCIsImpvaW4iLCJhcyIsInNpemUiLCJtYiIsIm1hcCIsImF0dGFjayIsInRleHQiLCJ3ZWFrbmVzcyIsInR5cGUiLCJ2YWx1ZSIsImNvbG9yU2NoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/pokemon/[id]/index.tsx\n"));

/***/ })

});