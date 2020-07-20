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
  }, props), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: props.show
    }
  }));
}

_c = Alert;
function ForgetPassward(props) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      gmail = _React$useState2[0],
      setGmail = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({}),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      data = _React$useState4[0],
      setData = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({}),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      error = _React$useState6[0],
      setError = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      open = _React$useState8[0],
      setOpen = _React$useState8[1];

  var formSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var _data;

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
                setData(function () {
                  return {
                    data: data
                  };
                });
              })["catch"](function (error) {
                setError(function () {
                  return {
                    error: error
                  };
                });
              });

            case 4:
              _data = _context.sent;

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

  console.log(data, ' data ');
  console.log(error, ' error ');

  var passwardChange = function passwardChange(event) {
    setGmail(event.target.value);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var showError = error.error ? error.error.response.errors[0].message : " Send Email On Your Register Email ";
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
    show: showError,
    severity: error.error ? "error" : "success"
  })));
}

_s(ForgetPassward, "vhSftQG5PrEFQesXdI5ROgaDwXk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Gb3JnZXRQYXNzd2FyZC5qcyJdLCJuYW1lcyI6WyJzaWduSU4iLCJ1c2VyRGF0YSIsInJlcXVlc3QiLCJGT1JHRVRfUEFTU1dBUkRfTVVUQVRJT04iLCJBbGVydCIsInByb3BzIiwiX19odG1sIiwic2hvdyIsIkZvcmdldFBhc3N3YXJkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImdtYWlsIiwic2V0R21haWwiLCJkYXRhIiwic2V0RGF0YSIsImVycm9yIiwic2V0RXJyb3IiLCJvcGVuIiwic2V0T3BlbiIsImZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJwYXNzd2FyZENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xvc2UiLCJzaG93RXJyb3IiLCJyZXNwb25zZSIsImVycm9ycyIsIm1lc3NhZ2UiLCJzdHlsZSIsImZvcm0iLCJsYXlvdXQiLCJidXR0b24iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3pCLFNBQVFDLGdFQUFPLENBQUMsc0NBQUQsRUFBeUNDLGlGQUF6QyxFQUFtRUYsUUFBbkUsQ0FBZjtBQUNELENBRkg7O0FBSUUsU0FBU0csS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3BCLFNBQU8sTUFBQywrREFBRDtBQUFVLGFBQVMsRUFBRSxDQUFyQjtBQUF5QixXQUFPLEVBQUM7QUFBakMsS0FBOENBLEtBQTlDLEdBQ0s7QUFBSywyQkFBdUIsRUFBRTtBQUFFQyxZQUFNLEVBQUVELEtBQUssQ0FBQ0U7QUFBaEI7QUFBOUIsSUFETCxDQUFQO0FBR0g7O0tBSlVILEs7QUFN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QUksRUFBQztBQUFwRCxhQWZMLENBREQsRUFxQkEsTUFBQyxtRUFBRDtBQUFVLFFBQUksRUFBRW5CLElBQWhCO0FBQXNCLGdCQUFZLEVBQ3RCO0FBQUtvQixjQUFRLEVBQUUsS0FBZjtBQUNJQyxnQkFBVSxFQUFFO0FBRGhCLEtBRFo7QUFJUyxvQkFBZ0IsRUFBRSxLQUozQjtBQUlrQyxXQUFPLEVBQUVWO0FBSjNDLEtBS1UsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFQSxXQUFoQjtBQUE4QixRQUFJLEVBQUdDLFNBQXJDO0FBQWlELFlBQVEsRUFBRWQsS0FBSyxDQUFDQSxLQUFOLEdBQWEsT0FBYixHQUFxQjtBQUFoRixJQUxWLENBckJBLENBREo7QUErQkg7O0dBeEV1QlAsYzs7TUFBQUEsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcRm9yZ2V0UGFzc3dhcmQuanMuYWJkZTk1NDE3MzUyMzU5OGFlNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vQ29tcG9uZW50L2Nzcy9Gb3JnZXRQYXNzd2FyZC5tb2R1bGUuc2NzcydcclxuXHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCB7Rk9SR0VUX1BBU1NXQVJEX01VVEFUSU9OfSBmcm9tIFwiLi4vQ29tcG9uZW50L2dyYXBoYWxRdXJleVwiXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5cclxuaW1wb3J0IE11aUFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xyXG5cclxuXHJcbmNvbnN0IHNpZ25JTiA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuICByZXF1ZXN0KCdodHRwczovL3d3dy5yYWpkZWVwc2luZ2guZGV2L2dyYXBocWwnLCBGT1JHRVRfUEFTU1dBUkRfTVVUQVRJT04sIHVzZXJEYXRhKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG4gICAgcmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9ICB2YXJpYW50PVwiZmlsbGVkXCIgey4uLnByb3BzfSA+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb3BzLnNob3cgfX0+PC9kaXY+IFxyXG4gICAgICAgICAgICA8L011aUFsZXJ0PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JnZXRQYXNzd2FyZChwcm9wcykge1xyXG4gICAgY29uc3QgW2dtYWlsLCBzZXRHbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZm9ybVN1Ym1pdD0gYXN5bmMgKGV2ZW50KT0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZihnbWFpbCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGE9IGF3YWl0IHNpZ25JTih7ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFwiZ2V0VXNlck5hbWVcIjogZ21haWxcclxuICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgIChkYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoKCk9PnsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2RhdGF9IFxyXG4gICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoKCk9PnsgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9IFxyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRPcGVuKCgpPT57ICBcclxuICAgICAgICAgICAgcmV0dXJuIHRydWUgXHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhICwgJyBkYXRhICcpXHJcbiAgICBjb25zb2xlLmxvZyhlcnJvciAsICcgZXJyb3IgJylcclxuICAgIGNvbnN0IHBhc3N3YXJkQ2hhbmdlPShldmVudCk9PntcclxuICAgICAgICBzZXRHbWFpbChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICBjb25zdCBoYW5kbGVDbG9zZSA9KCk9PntcclxuICAgICAgICAgICAgc2V0T3BlbihmYWxzZSlcclxuICAgfVxyXG5cclxuICAgY29uc3Qgc2hvd0Vycm9yPSBlcnJvci5lcnJvcj8gZXJyb3IuZXJyb3IucmVzcG9uc2UuZXJyb3JzWzBdLm1lc3NhZ2UgOiBcIiBTZW5kIEVtYWlsIE9uIFlvdXIgUmVnaXN0ZXIgRW1haWwgXCJcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZS5mb3JtfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9uXCI+XHJcbiAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtzdHlsZS5sYXlvdXR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJSZXN0UGFzc3dvcmRcIj5FbnRlciBSZWdpc3RlciBHbWFpbDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUmVzdFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSAnZ21haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Bhc3N3YXJkQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIGdhbWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImdtYWlsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICBSZXNldCBcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDxTbmFja2JhciBvcGVuPXtvcGVufSBhbmNob3JPcmlnaW49eyBcclxuICAgICAgICAgICAgICAgICAgICB7ICAgIHZlcnRpY2FsOiAndG9wJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInIH1cclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezYwMDAwfSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gIHNob3c9eyBzaG93RXJyb3IgfSBzZXZlcml0eT17ZXJyb3IuZXJyb3I/IFwiZXJyb3JcIjpcInN1Y2Nlc3NcIn0+PC9BbGVydD5cclxuICAgICAgICAgICAgICA8L1NuYWNrYmFyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=