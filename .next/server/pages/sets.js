"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/sets";
exports.ids = ["pages/sets"];
exports.modules = {

/***/ "./src/components/SetLIst.tsx":
/*!************************************!*\
  !*** ./src/components/SetLIst.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SetList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction SetList({ sets  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n        templateColumns: \"repeat(auto-fit, minmax(300px, 1fr))\",\n        gap: 4,\n        children: sets.map((set)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                borderWidth: \"1px\",\n                borderRadius: \"lg\",\n                overflow: \"hidden\",\n                maxHeight: \"400px\",\n                cursor: \"pointer\",\n                as: \"a\",\n                href: `/sets/${set.id}`,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: set.images.logo,\n                        alt: `${set.name} logo`,\n                        maxHeight: \"100%\",\n                        width: \"100%\",\n                        objectFit: \"cover\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parv/playground/play/src/components/SetLIst.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        p: \"6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                fontWeight: \"bold\",\n                                fontSize: \"xl\",\n                                mb: 2,\n                                children: set.name\n                            }, void 0, false, {\n                                fileName: \"/Users/parv/playground/play/src/components/SetLIst.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                fontSize: \"lg\",\n                                mb: 2,\n                                children: set.series\n                            }, void 0, false, {\n                                fileName: \"/Users/parv/playground/play/src/components/SetLIst.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                fontSize: \"md\",\n                                color: \"gray.500\",\n                                children: [\n                                    \"Released: \",\n                                    set.releaseDate\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/parv/playground/play/src/components/SetLIst.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/parv/playground/play/src/components/SetLIst.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, set.id, true, {\n                fileName: \"/Users/parv/playground/play/src/components/SetLIst.tsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/parv/playground/play/src/components/SetLIst.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZXRMSXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwRDtBQUczQyxTQUFTSSxRQUFRLEVBQUVDLEtBQUksRUFBbUIsRUFBRTtJQUN6RCxxQkFDRSw4REFBQ0osa0RBQUlBO1FBQUNLLGlCQUFnQjtRQUF1Q0MsS0FBSztrQkFDL0RGLEtBQUtHLEdBQUcsQ0FBQyxDQUFDQyxvQkFDVCw4REFBQ1QsaURBQUdBO2dCQUNGVSxhQUFZO2dCQUNaQyxjQUFhO2dCQUNiQyxVQUFTO2dCQUNUQyxXQUFVO2dCQUNWQyxRQUFPO2dCQUNQQyxJQUFHO2dCQUVIQyxNQUFNLENBQUMsTUFBTSxFQUFFUCxJQUFJUSxFQUFFLENBQUMsQ0FBQzs7a0NBRXZCLDhEQUFDZixtREFBS0E7d0JBQ0pnQixLQUFLVCxJQUFJVSxNQUFNLENBQUNDLElBQUk7d0JBQ3BCQyxLQUFLLENBQUMsRUFBRVosSUFBSWEsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDdkJULFdBQVU7d0JBQ1ZVLE9BQU07d0JBQ05DLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ3hCLGlEQUFHQTt3QkFBQ3lCLEdBQUU7OzBDQUNMLDhEQUFDdEIsa0RBQUlBO2dDQUFDdUIsWUFBVztnQ0FBT0MsVUFBUztnQ0FBS0MsSUFBSTswQ0FDdkNuQixJQUFJYSxJQUFJOzs7Ozs7MENBRVgsOERBQUNuQixrREFBSUE7Z0NBQUN3QixVQUFTO2dDQUFLQyxJQUFJOzBDQUNyQm5CLElBQUlvQixNQUFNOzs7Ozs7MENBRWIsOERBQUMxQixrREFBSUE7Z0NBQUN3QixVQUFTO2dDQUFLRyxPQUFNOztvQ0FBVztvQ0FDeEJyQixJQUFJc0IsV0FBVzs7Ozs7Ozs7Ozs7Ozs7ZUFsQnpCdEIsSUFBSVEsRUFBRTs7Ozs7Ozs7OztBQXlCckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9TZXRMSXN0LnRzeD9jNmQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgR3JpZCwgSW1hZ2UsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgU2V0IH0gZnJvbSBcIi4uL3N0b3JlL3NldHMvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0TGlzdCh7IHNldHMgfTogeyBzZXRzOiBTZXRbXSB9KSB7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgdGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpXCIgZ2FwPXs0fT5cbiAgICAgIHtzZXRzLm1hcCgoc2V0KSA9PiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBib3JkZXJXaWR0aD1cIjFweFwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwibGdcIlxuICAgICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgICBtYXhIZWlnaHQ9XCI0MDBweFwiXG4gICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgYXM9XCJhXCJcbiAgICAgICAgICBrZXk9e3NldC5pZH1cbiAgICAgICAgICBocmVmPXtgL3NldHMvJHtzZXQuaWR9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtzZXQuaW1hZ2VzLmxvZ299XG4gICAgICAgICAgICBhbHQ9e2Ake3NldC5uYW1lfSBsb2dvYH1cbiAgICAgICAgICAgIG1heEhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCb3ggcD1cIjZcIj5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgZm9udFNpemU9XCJ4bFwiIG1iPXsyfT5cbiAgICAgICAgICAgICAge3NldC5uYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIG1iPXsyfT5cbiAgICAgICAgICAgICAge3NldC5zZXJpZXN9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIm1kXCIgY29sb3I9XCJncmF5LjUwMFwiPlxuICAgICAgICAgICAgICBSZWxlYXNlZDoge3NldC5yZWxlYXNlRGF0ZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApKX1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQm94IiwiR3JpZCIsIkltYWdlIiwiVGV4dCIsIlNldExpc3QiLCJzZXRzIiwidGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwibWFwIiwic2V0IiwiYm9yZGVyV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsIm1heEhlaWdodCIsImN1cnNvciIsImFzIiwiaHJlZiIsImlkIiwic3JjIiwiaW1hZ2VzIiwibG9nbyIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsIm9iamVjdEZpdCIsInAiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJtYiIsInNlcmllcyIsImNvbG9yIiwicmVsZWFzZURhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SetLIst.tsx\n");

/***/ }),

/***/ "./src/pages/sets/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/sets/index.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sets),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SetLIst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SetLIst */ \"./src/components/SetLIst.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SetLIst__WEBPACK_IMPORTED_MODULE_1__]);\n_components_SetLIst__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Sets({ sets  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Pokemon TCG Sets\"\n            }, void 0, false, {\n                fileName: \"/Users/parv/playground/play/src/pages/sets/index.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            sets && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SetLIst__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                sets: sets\n            }, void 0, false, {\n                fileName: \"/Users/parv/playground/play/src/pages/sets/index.tsx\",\n                lineNumber: 8,\n                columnNumber: 16\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parv/playground/play/src/pages/sets/index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps() {\n    const response = await fetch(\"https://api.pokemontcg.io/v2/sets\");\n    const data = await response.json();\n    const sets = data.data;\n    return {\n        props: {\n            sets\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2V0cy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTJDO0FBRzVCLFNBQVNDLEtBQUssRUFBRUMsS0FBSSxFQUFtQixFQUFFO0lBQ3RELHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSEYsc0JBQVEsOERBQUNGLDJEQUFPQTtnQkFBQ0UsTUFBTUE7Ozs7Ozs7Ozs7OztBQUc5QixDQUFDO0FBRU0sZUFBZUcscUJBQXFCO0lBQ3pDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtJQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7SUFDaEMsTUFBTVAsT0FBT00sS0FBS0EsSUFBSTtJQUN0QixPQUFPO1FBQ0xFLE9BQU87WUFBRVI7UUFBSztJQUNoQjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZWN0Ly4vc3JjL3BhZ2VzL3NldHMvaW5kZXgudHN4PzA1ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNldExpc3QgZnJvbSBcIkAvY29tcG9uZW50cy9TZXRMSXN0XCI7XG5pbXBvcnQgeyBTZXQgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc2V0cy90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXRzKHsgc2V0cyB9OiB7IHNldHM6IFNldFtdIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlBva2Vtb24gVENHIFNldHM8L2gxPlxuICAgICAge3NldHMgJiYgPFNldExpc3Qgc2V0cz17c2V0c30gLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5wb2tlbW9udGNnLmlvL3YyL3NldHNcIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHNldHMgPSBkYXRhLmRhdGE7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgc2V0cyB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlNldExpc3QiLCJTZXRzIiwic2V0cyIsImRpdiIsImgxIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/sets/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/sets/index.tsx"));
module.exports = __webpack_exports__;

})();