"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Thumbnail.js":
/*!*********************************!*\
  !*** ./components/Thumbnail.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/esm/index.js\");\nvar _this = undefined;\n\n\n\nvar Thumbnail = function(param) {\n    var result = param.result;\n    var BASE_URL = \"https://image.tmdb.org/t/p/original\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"group cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                layout: \"responsive\",\n                src: \"\".concat(BASE_URL).concat(result.backdrop_path || result.poster_path) || \"\".concat(BASE_URL).concat(result.poster_path),\n                height: 1080,\n                width: 1920\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Felipe\\\\Documents\\\\CCP\\\\Projects\\\\hulu\\\\components\\\\Thumbnail.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"truncate max-w-md\",\n                        children: result.overview\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe\\\\Documents\\\\CCP\\\\Projects\\\\hulu\\\\components\\\\Thumbnail.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            result.title || result.original_name,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"flex items-center opacity-0 group-hover:opacity-100\",\n                                children: [\n                                    result.media_type && \"\".concat(result.media_type, \" .\"),\n                                    \" \",\n                                    result.release_date || result.first_air_date,\n                                    \" .\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.HandThumbUpIcon, {\n                                        className: \"h-5 mx-2\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Felipe\\\\Documents\\\\CCP\\\\Projects\\\\hulu\\\\components\\\\Thumbnail.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 25\n                                    }, _this),\n                                    \" \",\n                                    result.vote_count\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Felipe\\\\Documents\\\\CCP\\\\Projects\\\\hulu\\\\components\\\\Thumbnail.js\",\n                                lineNumber: 22,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Felipe\\\\Documents\\\\CCP\\\\Projects\\\\hulu\\\\components\\\\Thumbnail.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Felipe\\\\Documents\\\\CCP\\\\Projects\\\\hulu\\\\components\\\\Thumbnail.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Felipe\\\\Documents\\\\CCP\\\\Projects\\\\hulu\\\\components\\\\Thumbnail.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, _this);\n};\n_c = Thumbnail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thumbnail);\nvar _c;\n$RefreshReg$(_c, \"Thumbnail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RodW1ibmFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBK0I7QUFDK0I7QUFFOUQsSUFBTUUsU0FBUyxHQUFHLGdCQUFnQjtRQUFiQyxNQUFNLFNBQU5BLE1BQU07SUFDdkIsSUFBTUMsUUFBUSxHQUFHLHFDQUFxQztJQUV0RCxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsc0JBQXNCOzswQkFDakMsOERBQUNOLG1EQUFLO2dCQUNGTyxNQUFNLEVBQUMsWUFBWTtnQkFDbkJDLEdBQUcsRUFDQyxFQUFDLENBQWFMLE1BQTBDLENBQXJEQyxRQUFRLENBQThDLFFBQTNDRCxNQUFNLENBQUNNLGFBQWEsSUFBSU4sTUFBTSxDQUFDTyxXQUFXLENBQUUsSUFDMUQsRUFBQyxDQUFhUCxNQUFrQixDQUE3QkMsUUFBUSxDQUFzQixRQUFuQkQsTUFBTSxDQUFDTyxXQUFXLENBQUU7Z0JBRXRDQyxNQUFNLEVBQUUsSUFBSTtnQkFDWkMsS0FBSyxFQUFFLElBQUk7Ozs7O3FCQUNiOzBCQUNGLDhEQUFDUCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsS0FBSzs7a0NBQ2hCLDhEQUFDTyxHQUFDO3dCQUFDUCxTQUFTLEVBQUMsbUJBQW1CO2tDQUFFSCxNQUFNLENBQUNXLFFBQVE7Ozs7OzZCQUFLO2tDQUN0RCw4REFBQ0MsSUFBRTs7NEJBQ0VaLE1BQU0sQ0FBQ2EsS0FBSyxJQUFJYixNQUFNLENBQUNjLGFBQWE7MENBQ3JDLDhEQUFDSixHQUFDO2dDQUFDUCxTQUFTLEVBQUMscURBQXFEOztvQ0FDN0RILE1BQU0sQ0FBQ2UsVUFBVSxJQUFJLEVBQUMsQ0FBb0IsTUFBRSxDQUFwQmYsTUFBTSxDQUFDZSxVQUFVLEVBQUMsSUFBRSxDQUFDO29DQUFFLEdBQUc7b0NBQ2xEZixNQUFNLENBQUNnQixZQUFZLElBQUloQixNQUFNLENBQUNpQixjQUFjO29DQUFDLElBQUU7b0NBQUMsR0FBRztrREFDcEQsOERBQUNuQix3RUFBZTt3Q0FBQ0ssU0FBUyxFQUFDLFVBQVU7Ozs7OzZDQUFHO29DQUFBLEdBQUM7b0NBQUNILE1BQU0sQ0FBQ2tCLFVBQVU7Ozs7OztxQ0FDM0Q7Ozs7Ozs2QkFDSDs7Ozs7O3FCQUNIOzs7Ozs7YUFDSCxDQUNUO0FBQ04sQ0FBQztBQTNCS25CLEtBQUFBLFNBQVM7QUE2QmYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RodW1ibmFpbC5qcz85YThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBIYW5kVGh1bWJVcEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lXCI7XHJcblxyXG5jb25zdCBUaHVtYm5haWwgPSAoeyByZXN1bHQgfSkgPT4ge1xyXG4gICAgY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgbGF5b3V0PSdyZXNwb25zaXZlJ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICBgJHtCQVNFX1VSTH0ke3Jlc3VsdC5iYWNrZHJvcF9wYXRoIHx8IHJlc3VsdC5wb3N0ZXJfcGF0aH1gIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgYCR7QkFTRV9VUkx9JHtyZXN1bHQucG9zdGVyX3BhdGh9YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDgwfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezE5MjB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cnVuY2F0ZSBtYXgtdy1tZFwiPntyZXN1bHQub3ZlcnZpZXd9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXN1bHQudGl0bGUgfHwgcmVzdWx0Lm9yaWdpbmFsX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHQubWVkaWFfdHlwZSAmJiBgJHtyZXN1bHQubWVkaWFfdHlwZX0gLmB9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0LnJlbGVhc2VfZGF0ZSB8fCByZXN1bHQuZmlyc3RfYWlyX2RhdGV9IC57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIYW5kVGh1bWJVcEljb24gY2xhc3NOYW1lPVwiaC01IG14LTJcIiAvPiB7cmVzdWx0LnZvdGVfY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRodW1ibmFpbDsiXSwibmFtZXMiOlsiSW1hZ2UiLCJIYW5kVGh1bWJVcEljb24iLCJUaHVtYm5haWwiLCJyZXN1bHQiLCJCQVNFX1VSTCIsImRpdiIsImNsYXNzTmFtZSIsImxheW91dCIsInNyYyIsImJhY2tkcm9wX3BhdGgiLCJwb3N0ZXJfcGF0aCIsImhlaWdodCIsIndpZHRoIiwicCIsIm92ZXJ2aWV3IiwiaDIiLCJ0aXRsZSIsIm9yaWdpbmFsX25hbWUiLCJtZWRpYV90eXBlIiwicmVsZWFzZV9kYXRlIiwiZmlyc3RfYWlyX2RhdGUiLCJ2b3RlX2NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Thumbnail.js\n"));

/***/ })

});