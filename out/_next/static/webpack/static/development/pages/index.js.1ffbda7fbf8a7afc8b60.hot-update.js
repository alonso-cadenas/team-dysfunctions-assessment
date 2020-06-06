webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/question-list.js":
/*!*************************************!*\
  !*** ./components/question-list.js ***!
  \*************************************/
/*! exports provided: QuestionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QuestionList\", function() { return QuestionList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/acadenas/PhpstormProjects/team-dysfunctions-assessment/components/question-list.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction QuestionList(_ref) {\n  var _this = this;\n\n  var submitAnswers = _ref.submitAnswers,\n      updateAnswer = _ref.updateAnswer;\n  return __jsx(\"div\", {\n    id: 'instructions',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, \"Instructions\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, \"Use the scale below to indicate how each statement applies to your team. It is important to evaluate the statements honestly and without over-thinking your answers.\"), __jsx(\"form\", {\n    onSubmit: submitAnswers,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, __jsx(\"ol\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, _constants__WEBPACK_IMPORTED_MODULE_1__[\"questions\"].map(function (question, index) {\n    return __jsx(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 25\n      }\n    }, question, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 29\n      }\n    }), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 29\n      }\n    }), __jsx(\"input\", {\n      type: \"radio\",\n      id: \"usually\".concat(index),\n      name: \"answer\".concat(index),\n      value: _constants__WEBPACK_IMPORTED_MODULE_1__[\"Frequency\"].USUALLY,\n      onChange: updateAnswer,\n      required: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 29\n      }\n    }), __jsx(\"label\", {\n      htmlFor: \"usually\".concat(index),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 29\n      }\n    }, \"Usually\"), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 29\n      }\n    }), __jsx(\"input\", {\n      type: \"radio\",\n      id: \"sometimes\".concat(index),\n      name: \"answer\".concat(index),\n      value: _constants__WEBPACK_IMPORTED_MODULE_1__[\"Frequency\"].SOMETIMES,\n      onChange: updateAnswer,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 29\n      }\n    }), __jsx(\"label\", {\n      htmlFor: \"sometimes\".concat(index),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 29\n      }\n    }, \"Sometimes\"), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 29\n      }\n    }), __jsx(\"input\", {\n      type: \"radio\",\n      id: \"rarely\".concat(index),\n      name: \"answer\".concat(index),\n      value: _constants__WEBPACK_IMPORTED_MODULE_1__[\"Frequency\"].RARELY,\n      onChange: updateAnswer,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 29\n      }\n    }), __jsx(\"label\", {\n      htmlFor: \"rarely\".concat(index),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 29\n      }\n    }, \"Rarely\"), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 29\n      }\n    }), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 29\n      }\n    }));\n  })), __jsx(\"div\", {\n    className: \"buttonContainer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    as: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 21\n    }\n  }, __jsx(\"button\", {\n    type: 'button',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 25\n    }\n  }, \"Cancel\")), __jsx(\"button\", {\n    type: 'submit',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 21\n    }\n  }, \"Submit\"))));\n}\n_c = QuestionList;\n\nvar _c;\n\n$RefreshReg$(_c, \"QuestionList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3F1ZXN0aW9uLWxpc3QuanM/ZjEzMyJdLCJuYW1lcyI6WyJRdWVzdGlvbkxpc3QiLCJzdWJtaXRBbnN3ZXJzIiwidXBkYXRlQW5zd2VyIiwicXVlc3Rpb25zIiwibWFwIiwicXVlc3Rpb24iLCJpbmRleCIsIkZyZXF1ZW5jeSIsIlVTVUFMTFkiLCJTT01FVElNRVMiLCJSQVJFTFkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFlBQVQsT0FBcUQ7QUFBQTs7QUFBQSxNQUE5QkMsYUFBOEIsUUFBOUJBLGFBQThCO0FBQUEsTUFBZkMsWUFBZSxRQUFmQSxZQUFlO0FBQ3hELFNBQ0k7QUFBSyxNQUFFLEVBQUUsY0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEtBRkosRUFPSTtBQUFNLFlBQVEsRUFBRUQsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0Usb0RBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUNDLFFBQUQsRUFBV0MsS0FBWDtBQUFBLFdBQ1g7QUFBSSxTQUFHLEVBQUVBLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLRCxRQURMLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhKLEVBSUk7QUFDSSxVQUFJLEVBQUMsT0FEVDtBQUVJLFFBQUUsbUJBQVlDLEtBQVosQ0FGTjtBQUdJLFVBQUksa0JBQVdBLEtBQVgsQ0FIUjtBQUlJLFdBQUssRUFBRUMsb0RBQVMsQ0FBQ0MsT0FKckI7QUFLSSxjQUFRLEVBQUVOLFlBTGQ7QUFNSSxjQUFRLE1BTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpKLEVBWUk7QUFBTyxhQUFPLG1CQUFZSSxLQUFaLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaSixFQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFiSixFQWNJO0FBQ0ksVUFBSSxFQUFDLE9BRFQ7QUFFSSxRQUFFLHFCQUFjQSxLQUFkLENBRk47QUFHSSxVQUFJLGtCQUFXQSxLQUFYLENBSFI7QUFJSSxXQUFLLEVBQUVDLG9EQUFTLENBQUNFLFNBSnJCO0FBS0ksY0FBUSxFQUFFUCxZQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFkSixFQXFCSTtBQUFPLGFBQU8scUJBQWNJLEtBQWQsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJCSixFQXNCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdEJKLEVBdUJJO0FBQ0ksVUFBSSxFQUFDLE9BRFQ7QUFFSSxRQUFFLGtCQUFXQSxLQUFYLENBRk47QUFHSSxVQUFJLGtCQUFXQSxLQUFYLENBSFI7QUFJSSxXQUFLLEVBQUVDLG9EQUFTLENBQUNHLE1BSnJCO0FBS0ksY0FBUSxFQUFFUixZQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF2QkosRUE4Qkk7QUFBTyxhQUFPLGtCQUFXSSxLQUFYLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5QkosRUErQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQS9CSixFQWdDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BaENKLENBRFc7QUFBQSxHQUFkLENBREwsQ0FESixFQXdDSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQWUsTUFBRSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxRQUFJLEVBQUUsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosQ0FESixFQUlJO0FBQVEsUUFBSSxFQUFFLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLENBeENKLENBUEosQ0FESjtBQXlESDtLQTFEZU4sWSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0ZyZXF1ZW5jeSwgcXVlc3Rpb25zfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGZ1bmN0aW9uIFF1ZXN0aW9uTGlzdCh7c3VibWl0QW5zd2VycywgdXBkYXRlQW5zd2VyfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9eydpbnN0cnVjdGlvbnMnfT5cbiAgICAgICAgICAgIDxoMj5JbnN0cnVjdGlvbnM8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVXNlIHRoZSBzY2FsZSBiZWxvdyB0byBpbmRpY2F0ZSBob3cgZWFjaCBzdGF0ZW1lbnQgYXBwbGllcyB0byB5b3VyIHRlYW0uXG4gICAgICAgICAgICAgICAgSXQgaXMgaW1wb3J0YW50IHRvIGV2YWx1YXRlIHRoZSBzdGF0ZW1lbnRzIGhvbmVzdGx5IGFuZCB3aXRob3V0IG92ZXItdGhpbmtpbmcgeW91clxuICAgICAgICAgICAgICAgIGFuc3dlcnMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0QW5zd2Vyc30+XG4gICAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb25zLm1hcCgocXVlc3Rpb24sIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgdXN1YWxseSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YGFuc3dlciR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0ZyZXF1ZW5jeS5VU1VBTExZfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQW5zd2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2B1c3VhbGx5JHtpbmRleH1gfT5Vc3VhbGx5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHNvbWV0aW1lcyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YGFuc3dlciR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0ZyZXF1ZW5jeS5TT01FVElNRVN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBbnN3ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHNvbWV0aW1lcyR7aW5kZXh9YH0+U29tZXRpbWVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHJhcmVseSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YGFuc3dlciR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0ZyZXF1ZW5jeS5SQVJFTFl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVBbnN3ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHJhcmVseSR7aW5kZXh9YH0+UmFyZWx5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvb2w+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uQ29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnLyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXsnYnV0dG9uJ30+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXsnc3VibWl0J30+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/question-list.js\n");

/***/ })

})