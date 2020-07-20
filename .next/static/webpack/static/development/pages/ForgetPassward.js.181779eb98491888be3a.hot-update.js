webpackHotUpdate("static\\development\\pages\\ForgetPassward.js",{

/***/ "./pages/ForgetPassward.js":
/*!*********************************!*\
  !*** ./pages/ForgetPassward.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForgetPassward; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _Component_css_ForgetPassward_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Component/css/ForgetPassward.module.scss */ "./Component/css/ForgetPassward.module.scss");
/* harmony import */ var _Component_css_ForgetPassward_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Component_css_ForgetPassward_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _Component_graphalQurey__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Component/graphalQurey */ "./Component/graphalQurey.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql-request */ "./node_modules/graphql-request/dist/src/index.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");





var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;











var signIN = function signIN(userData) {
  return Object(graphql_request__WEBPACK_IMPORTED_MODULE_12__["request"])('https://www.rajdeepsingh.dev/graphql', _Component_graphalQurey__WEBPACK_IMPORTED_MODULE_11__["FORGET_PASSWARD_MUTATION"], userData);
};

function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    elevation: 6,
    variant: "filled"
  }, props));
}

_c = Alert;
function ForgetPassward(props) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      gmail = _React$useState2[0],
      setGmail = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      open = _React$useState4[0],
      setOpen = _React$useState4[1];

  var formSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();

              if (!gmail) {
                _context.next = 5;
                break;
              }

              _context.next = 4;
              return signIN({
                "getUserName": gmail
              }).then(function (data) {
                setGmail(function () {
                  return {
                    data: data
                  };
                });
              })["catch"](function (error) {
                setAuthToken(function () {
                  return {
                    error: error
                  };
                });
              });

            case 4:
              data = _context.sent;

            case 5:
              setOpen(function () {
                return true;
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function formSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var passwardChange = function passwardChange(event) {
    setGmail(event.target.value);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("form", {
    onSubmit: formSubmit,
    className: _Component_css_ForgetPassward_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.form,
    noValidate: true,
    autoComplete: "on"
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _Component_css_ForgetPassward_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.layout
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    htmlFor: "RestPassword"
  }, "Enter Register Gmail"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "RestPassword",
    type: "gmail",
    onChange: passwardChange,
    placeholder: "Enter your gamil",
    name: "gmail",
    autoComplete: "gmail"
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "submit",
    className: _Component_css_ForgetPassward_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.button,
    size: "small"
  }, "Reset")), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: open,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    autoHideDuration: 60000,
    onClose: handleClose
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error"
  })));
}

_s(ForgetPassward, "TychKW4R+lHs9fG9yMcHDfdiue8=");

_c2 = ForgetPassward;

var _c, _c2;

$RefreshReg$(_c, "Alert");
$RefreshReg$(_c2, "ForgetPassward");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Gb3JnZXRQYXNzd2FyZC5qcyJdLCJuYW1lcyI6WyJzaWduSU4iLCJ1c2VyRGF0YSIsInJlcXVlc3QiLCJGT1JHRVRfUEFTU1dBUkRfTVVUQVRJT04iLCJBbGVydCIsInByb3BzIiwiRm9yZ2V0UGFzc3dhcmQiLCJSZWFjdCIsInVzZVN0YXRlIiwiZ21haWwiLCJzZXRHbWFpbCIsIm9wZW4iLCJzZXRPcGVuIiwiZm9ybVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwic2V0QXV0aFRva2VuIiwicGFzc3dhcmRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsb3NlIiwic3R5bGUiLCJmb3JtIiwibGF5b3V0IiwiYnV0dG9uIiwidmVydGljYWwiLCJob3Jpem9udGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLFFBQUQsRUFBYztBQUN6QixTQUFRQyxnRUFBTyxDQUFDLHNDQUFELEVBQXlDQyxpRkFBekMsRUFBbUVGLFFBQW5FLENBQWY7QUFDRCxDQUZIOztBQUlFLFNBQVNHLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNwQixTQUFPLE1BQUMsK0RBQUQ7QUFBVSxhQUFTLEVBQUUsQ0FBckI7QUFBeUIsV0FBTyxFQUFDO0FBQWpDLEtBQThDQSxLQUE5QyxFQUFQO0FBR0g7O0tBSlVELEs7QUFNSSxTQUFTRSxjQUFULENBQXdCRCxLQUF4QixFQUErQjtBQUFBOztBQUFBLHdCQUNoQkUsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FEZ0I7QUFBQTtBQUFBLE1BQ25DQyxLQURtQztBQUFBLE1BQzVCQyxRQUQ0Qjs7QUFBQSx5QkFFbEJILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRmtCO0FBQUE7QUFBQSxNQUVuQ0csSUFGbUM7QUFBQSxNQUU3QkMsT0FGNkI7O0FBRzFDLE1BQU1DLFVBQVU7QUFBQSxnTUFBRSxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEEsbUJBQUssQ0FBQ0MsY0FBTjs7QUFEYyxtQkFFWE4sS0FGVztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUdRVCxNQUFNLENBQUM7QUFDckIsK0JBQWVTO0FBRE0sZUFBRCxDQUFOLENBRWZPLElBRmUsQ0FHZCxVQUFDQyxJQUFELEVBQVE7QUFDSlAsd0JBQVEsQ0FBQyxZQUFJO0FBQ1QseUJBQU87QUFBQ08sd0JBQUksRUFBSkE7QUFBRCxtQkFBUDtBQUNGLGlCQUZNLENBQVI7QUFHSCxlQVBhLFdBUVYsVUFBQ0MsS0FBRCxFQUFXO0FBQ2ZDLDRCQUFZLENBQUMsWUFBSTtBQUNiLHlCQUFPO0FBQUNELHlCQUFLLEVBQUxBO0FBQUQsbUJBQVA7QUFDRixpQkFGVSxDQUFaO0FBR0gsZUFaaUIsQ0FIUjs7QUFBQTtBQUdKRCxrQkFISTs7QUFBQTtBQWtCZEwscUJBQU8sQ0FBQyxZQUFJO0FBQ1IsdUJBQU8sSUFBUDtBQUNGLGVBRkssQ0FBUDs7QUFsQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQSxvQkFBVkMsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUF1QkEsTUFBTU8sY0FBYyxHQUFDLFNBQWZBLGNBQWUsQ0FBQ04sS0FBRCxFQUFTO0FBQzFCSixZQUFRLENBQUNJLEtBQUssQ0FBQ08sTUFBTixDQUFhQyxLQUFkLENBQVI7QUFFSCxHQUhEOztBQUtELE1BQU1DLFdBQVcsR0FBRSxTQUFiQSxXQUFhLEdBQUk7QUFDZFgsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNSLEdBRkQ7O0FBR0MsU0FDSSxtRUFDQztBQUFNLFlBQVEsRUFBRUMsVUFBaEI7QUFBNEIsYUFBUyxFQUFFVyxnRkFBSyxDQUFDQyxJQUE3QztBQUFtRCxjQUFVLE1BQTdEO0FBQThELGdCQUFZLEVBQUM7QUFBM0UsS0FDSSxNQUFDLHFFQUFEO0FBQWEsYUFBUyxFQUFFRCxnRkFBSyxDQUFDRTtBQUE5QixLQUMyQixNQUFDLG9FQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLDRCQUQzQixFQUUyQixNQUFDLCtEQUFEO0FBQ0ksTUFBRSxFQUFDLGNBRFA7QUFFSSxRQUFJLEVBQUUsT0FGVjtBQUdJLFlBQVEsRUFBRU4sY0FIZDtBQUlJLGVBQVcsRUFBQyxrQkFKaEI7QUFLSSxRQUFJLEVBQUMsT0FMVDtBQU1JLGdCQUFZLEVBQUM7QUFOakIsSUFGM0IsQ0FESixFQWVLLE1BQUMsZ0VBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUVJLGdGQUFLLENBQUNHLE1BQXZDO0FBQStDLFFBQUksRUFBQztBQUFwRCxhQWZMLENBREQsRUFxQkEsTUFBQyxtRUFBRDtBQUFVLFFBQUksRUFBRWhCLElBQWhCO0FBQXNCLGdCQUFZLEVBQ3RCO0FBQUtpQixjQUFRLEVBQUUsS0FBZjtBQUNJQyxnQkFBVSxFQUFFO0FBRGhCLEtBRFo7QUFJUyxvQkFBZ0IsRUFBRSxLQUozQjtBQUlrQyxXQUFPLEVBQUVOO0FBSjNDLEtBS1UsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFQSxXQUFoQjtBQUErQixZQUFRLEVBQUM7QUFBeEMsSUFMVixDQXJCQSxDQURKO0FBK0JIOztHQWpFdUJqQixjOztNQUFBQSxjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxGb3JnZXRQYXNzd2FyZC5qcy4xODE3NzllYjk4NDkxODg4YmUzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9Db21wb25lbnQvY3NzL0ZvcmdldFBhc3N3YXJkLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcclxuaW1wb3J0IHtGT1JHRVRfUEFTU1dBUkRfTVVUQVRJT059IGZyb20gXCIuLi9Db21wb25lbnQvZ3JhcGhhbFF1cmV5XCJcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XHJcblxyXG5pbXBvcnQgTXVpQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcblxyXG5cclxuY29uc3Qgc2lnbklOID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gIHJlcXVlc3QoJ2h0dHBzOi8vd3d3LnJhamRlZXBzaW5naC5kZXYvZ3JhcGhxbCcsIEZPUkdFVF9QQVNTV0FSRF9NVVRBVElPTiwgdXNlckRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIEFsZXJ0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gIHZhcmlhbnQ9XCJmaWxsZWRcIiB7Li4ucHJvcHN9ID4gXHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb3BzLnNob3cgfX0+PC9kaXY+ICAqL31cclxuICAgICAgICAgICAgPC9NdWlBbGVydD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9yZ2V0UGFzc3dhcmQocHJvcHMpIHtcclxuICAgIGNvbnN0IFtnbWFpbCwgc2V0R21haWxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBmb3JtU3VibWl0PSBhc3luYyAoZXZlbnQpPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGlmKGdtYWlsKXtcclxuICAgICAgICAgICAgY29uc3QgZGF0YT0gYXdhaXQgc2lnbklOKHsgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXCJnZXRVc2VyTmFtZVwiOiBnbWFpbFxyXG4gICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKGRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R21haWwoKCk9PnsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2RhdGF9IFxyXG4gICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QXV0aFRva2VuKCgpPT57ICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2Vycm9yfSBcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0T3BlbigoKT0+eyAgXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlIFxyXG4gICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY29uc3QgcGFzc3dhcmRDaGFuZ2U9KGV2ZW50KT0+e1xyXG4gICAgICAgIHNldEdtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuXHJcbiAgICB9XHJcblxyXG4gICBjb25zdCBoYW5kbGVDbG9zZSA9KCk9PntcclxuICAgICAgICAgICAgc2V0T3BlbihmYWxzZSlcclxuICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZS5mb3JtfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9uXCI+XHJcbiAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtzdHlsZS5sYXlvdXR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJSZXN0UGFzc3dvcmRcIj5FbnRlciBSZWdpc3RlciBHbWFpbDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUmVzdFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSAnZ21haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Bhc3N3YXJkQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIGdhbWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImdtYWlsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICBSZXNldCBcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDxTbmFja2JhciBvcGVuPXtvcGVufSBhbmNob3JPcmlnaW49eyBcclxuICAgICAgICAgICAgICAgICAgICB7ICAgIHZlcnRpY2FsOiAndG9wJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInIH1cclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezYwMDAwfSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gICBzZXZlcml0eT1cImVycm9yXCI+PC9BbGVydD5cclxuICAgICAgICAgICAgICA8L1NuYWNrYmFyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=