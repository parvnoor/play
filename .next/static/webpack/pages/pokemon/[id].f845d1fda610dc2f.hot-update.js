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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst PokemonPage = (param)=>{\n    let { pokemon  } = param;\n    _s();\n    const { name , hp , types , images , attacks , weaknesses  } = pokemon;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleBack = ()=>{\n        router.back();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        maxW: \"6xl\",\n        my: 10,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleBack,\n                children: \"Back\"\n            }, void 0, false, {\n                fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                direction: {\n                    base: \"column\",\n                    lg: \"row\"\n                },\n                justify: \"space-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        w: {\n                            base: \"100%\",\n                            lg: \"50%\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                            src: images.large,\n                            alt: name,\n                            maxW: \"sm\"\n                        }, void 0, false, {\n                            fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        w: {\n                            base: \"100%\",\n                            lg: \"50%\"\n                        },\n                        mt: {\n                            base: 4,\n                            lg: 0\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                            spacing: 4,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                    children: name\n                                }, void 0, false, {\n                                    fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    fontWeight: \"bold\",\n                                    children: [\n                                        \"HP: \",\n                                        hp\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    fontWeight: \"bold\",\n                                    children: [\n                                        \"Type: \",\n                                        types.join(\", \")\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                            as: \"h3\",\n                                            size: \"md\",\n                                            mb: 2,\n                                            children: \"Attacks:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                                            spacing: 2,\n                                            children: attacks.map((attack)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                                            fontWeight: \"bold\",\n                                                            children: attack.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                                            lineNumber: 44,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                                            children: attack.text\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                                            lineNumber: 45,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, attack.name, true, {\n                                                    fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 19\n                                                }, undefined))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                                            as: \"h3\",\n                                            size: \"md\",\n                                            mb: 2,\n                                            children: \"Weaknesses:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                                            spacing: 2,\n                                            children: weaknesses.map((weakness)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                                            fontWeight: \"bold\",\n                                                            children: weakness.type\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                                            lineNumber: 57,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                                            children: weakness.value\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                                            lineNumber: 58,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, weakness.type, true, {\n                                                    fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 19\n                                                }, undefined))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    colorScheme: \"blue\",\n                                    children: \"Add to Cart\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parv/playground/play/src/pages/pokemon/[id]/index.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PokemonPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PokemonPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PokemonPage);\nvar _c;\n$RefreshReg$(_c, \"PokemonPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9rZW1vbi9baWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVMwQjtBQUVjO0FBTXhDLE1BQU1TLGNBQWMsU0FBd0I7UUFBdkIsRUFBRUMsUUFBTyxFQUFTOztJQUNyQyxNQUFNLEVBQUVDLEtBQUksRUFBRUMsR0FBRSxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsUUFBTyxFQUFFQyxXQUFVLEVBQUUsR0FBR047SUFDekQsTUFBTU8sU0FBU1Qsc0RBQVNBO0lBRXhCLE1BQU1VLGFBQWEsSUFBTTtRQUN2QkQsT0FBT0UsSUFBSTtJQUNiO0lBQ0EscUJBQ0UsOERBQUNqQix1REFBU0E7UUFBQ2tCLE1BQUs7UUFBTUMsSUFBSTs7MEJBQ3hCLDhEQUFDQztnQkFBT0MsU0FBU0w7MEJBQVk7Ozs7OzswQkFDN0IsOERBQUNmLGtEQUFJQTtnQkFBQ3FCLFdBQVc7b0JBQUVDLE1BQU07b0JBQVVDLElBQUk7Z0JBQU07Z0JBQUdDLFNBQVE7O2tDQUN0RCw4REFBQzNCLGlEQUFHQTt3QkFBQzRCLEdBQUc7NEJBQUVILE1BQU07NEJBQVFDLElBQUk7d0JBQU07a0NBQ2hDLDRFQUFDckIsbURBQUtBOzRCQUFDd0IsS0FBS2YsT0FBT2dCLEtBQUs7NEJBQUVDLEtBQUtwQjs0QkFBTVMsTUFBSzs7Ozs7Ozs7Ozs7a0NBRTVDLDhEQUFDcEIsaURBQUdBO3dCQUFDNEIsR0FBRzs0QkFBRUgsTUFBTTs0QkFBUUMsSUFBSTt3QkFBTTt3QkFBR00sSUFBSTs0QkFBRVAsTUFBTTs0QkFBR0MsSUFBSTt3QkFBRTtrQ0FDeEQsNEVBQUNwQixtREFBS0E7NEJBQUMyQixTQUFTOzs4Q0FDZCw4REFBQzdCLHFEQUFPQTs4Q0FBRU87Ozs7Ozs4Q0FDViw4REFBQ0osa0RBQUlBO29DQUFDMkIsWUFBVzs7d0NBQU87d0NBQUt0Qjs7Ozs7Ozs4Q0FDN0IsOERBQUNMLGtEQUFJQTtvQ0FBQzJCLFlBQVc7O3dDQUFPO3dDQUFPckIsTUFBTXNCLElBQUksQ0FBQzs7Ozs7Ozs4Q0FDMUMsOERBQUNuQyxpREFBR0E7O3NEQUNGLDhEQUFDSSxxREFBT0E7NENBQUNnQyxJQUFHOzRDQUFLQyxNQUFLOzRDQUFLQyxJQUFJO3NEQUFHOzs7Ozs7c0RBR2xDLDhEQUFDaEMsbURBQUtBOzRDQUFDMkIsU0FBUztzREFDYmxCLFFBQVF3QixHQUFHLENBQUMsQ0FBQ0MsdUJBQ1osOERBQUN4QyxpREFBR0E7O3NFQUNGLDhEQUFDTyxrREFBSUE7NERBQUMyQixZQUFXO3NFQUFRTSxPQUFPN0IsSUFBSTs7Ozs7O3NFQUNwQyw4REFBQ0osa0RBQUlBO3NFQUFFaUMsT0FBT0MsSUFBSTs7Ozs7OzttREFGVkQsT0FBTzdCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OENBTzNCLDhEQUFDWCxpREFBR0E7O3NEQUNGLDhEQUFDSSxxREFBT0E7NENBQUNnQyxJQUFHOzRDQUFLQyxNQUFLOzRDQUFLQyxJQUFJO3NEQUFHOzs7Ozs7c0RBR2xDLDhEQUFDaEMsbURBQUtBOzRDQUFDMkIsU0FBUztzREFDYmpCLFdBQVd1QixHQUFHLENBQUMsQ0FBQ0cseUJBQ2YsOERBQUMxQyxpREFBR0E7O3NFQUNGLDhEQUFDTyxrREFBSUE7NERBQUMyQixZQUFXO3NFQUFRUSxTQUFTQyxJQUFJOzs7Ozs7c0VBQ3RDLDhEQUFDcEMsa0RBQUlBO3NFQUFFbUMsU0FBU0UsS0FBSzs7Ozs7OzttREFGYkYsU0FBU0MsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FPN0IsOERBQUMxQyxvREFBTUE7b0NBQUM0QyxhQUFZOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12QztHQW5ETXBDOztRQUVXRCxrREFBU0E7OztLQUZwQkM7O0FBcUROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb2tlbW9uL1tpZF0vaW5kZXgudHN4PzljZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRmxleCxcbiAgSGVhZGluZyxcbiAgSW1hZ2UsXG4gIFN0YWNrLFxuICBUZXh0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gXCJAL3N0b3JlL3Bva2Vtb24vdHlwZXNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwb2tlbW9uOiBQb2tlbW9uO1xufVxuXG5jb25zdCBQb2tlbW9uUGFnZSA9ICh7IHBva2Vtb24gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBuYW1lLCBocCwgdHlwZXMsIGltYWdlcywgYXR0YWNrcywgd2Vha25lc3NlcyB9ID0gcG9rZW1vbjtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICByb3V0ZXIuYmFjaygpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4Vz1cIjZ4bFwiIG15PXsxMH0+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJhY2t9PkJhY2s8L2J1dHRvbj5cbiAgICAgIDxGbGV4IGRpcmVjdGlvbj17eyBiYXNlOiBcImNvbHVtblwiLCBsZzogXCJyb3dcIiB9fSBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICA8Qm94IHc9e3sgYmFzZTogXCIxMDAlXCIsIGxnOiBcIjUwJVwiIH19PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlcy5sYXJnZX0gYWx0PXtuYW1lfSBtYXhXPVwic21cIiAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCB3PXt7IGJhc2U6IFwiMTAwJVwiLCBsZzogXCI1MCVcIiB9fSBtdD17eyBiYXNlOiA0LCBsZzogMCB9fT5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17NH0+XG4gICAgICAgICAgICA8SGVhZGluZz57bmFtZX08L0hlYWRpbmc+XG4gICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiPkhQOiB7aHB9PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIj5UeXBlOiB7dHlwZXMuam9pbihcIiwgXCIpfTwvVGV4dD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzaXplPVwibWRcIiBtYj17Mn0+XG4gICAgICAgICAgICAgICAgQXR0YWNrczpcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAge2F0dGFja3MubWFwKChhdHRhY2spID0+IChcbiAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXthdHRhY2submFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCI+e2F0dGFjay5uYW1lfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+e2F0dGFjay50ZXh0fTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgc2l6ZT1cIm1kXCIgbWI9ezJ9PlxuICAgICAgICAgICAgICAgIFdlYWtuZXNzZXM6XG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgIHt3ZWFrbmVzc2VzLm1hcCgod2Vha25lc3MpID0+IChcbiAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXt3ZWFrbmVzcy50eXBlfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIj57d2Vha25lc3MudHlwZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Pnt3ZWFrbmVzcy52YWx1ZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIj5BZGQgdG8gQ2FydDwvQnV0dG9uPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9GbGV4PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9rZW1vblBhZ2U7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkucG9rZW1vbnRjZy5pby92Mi9jYXJkcy8ke2lkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc3QgcG9rZW1vbiA9IGRhdGEuZGF0YTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwb2tlbW9uIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRmxleCIsIkhlYWRpbmciLCJJbWFnZSIsIlN0YWNrIiwiVGV4dCIsInVzZVJvdXRlciIsIlBva2Vtb25QYWdlIiwicG9rZW1vbiIsIm5hbWUiLCJocCIsInR5cGVzIiwiaW1hZ2VzIiwiYXR0YWNrcyIsIndlYWtuZXNzZXMiLCJyb3V0ZXIiLCJoYW5kbGVCYWNrIiwiYmFjayIsIm1heFciLCJteSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXJlY3Rpb24iLCJiYXNlIiwibGciLCJqdXN0aWZ5IiwidyIsInNyYyIsImxhcmdlIiwiYWx0IiwibXQiLCJzcGFjaW5nIiwiZm9udFdlaWdodCIsImpvaW4iLCJhcyIsInNpemUiLCJtYiIsIm1hcCIsImF0dGFjayIsInRleHQiLCJ3ZWFrbmVzcyIsInR5cGUiLCJ2YWx1ZSIsImNvbG9yU2NoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/pokemon/[id]/index.tsx\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

});