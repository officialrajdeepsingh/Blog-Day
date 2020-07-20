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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      data = _React$useState4[0],
      setData = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      open = _React$useState6[0],
      setOpen = _React$useState6[1];

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
                setData(function () {
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

_s(ForgetPassward, "G/lDPb16AlVaJcX5mXLvW74PrJs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Gb3JnZXRQYXNzd2FyZC5qcyJdLCJuYW1lcyI6WyJzaWduSU4iLCJ1c2VyRGF0YSIsInJlcXVlc3QiLCJGT1JHRVRfUEFTU1dBUkRfTVVUQVRJT04iLCJBbGVydCIsInByb3BzIiwiRm9yZ2V0UGFzc3dhcmQiLCJSZWFjdCIsInVzZVN0YXRlIiwiZ21haWwiLCJzZXRHbWFpbCIsImRhdGEiLCJzZXREYXRhIiwib3BlbiIsInNldE9wZW4iLCJmb3JtU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJlcnJvciIsInBhc3N3YXJkQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbG9zZSIsInN0eWxlIiwiZm9ybSIsImxheW91dCIsImJ1dHRvbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxRQUFELEVBQWM7QUFDekIsU0FBUUMsZ0VBQU8sQ0FBQyxzQ0FBRCxFQUF5Q0MsaUZBQXpDLEVBQW1FRixRQUFuRSxDQUFmO0FBQ0QsQ0FGSDs7QUFJRSxTQUFTRyxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDcEIsU0FBTyxNQUFDLCtEQUFEO0FBQVUsYUFBUyxFQUFFLENBQXJCO0FBQXlCLFdBQU8sRUFBQztBQUFqQyxLQUE4Q0EsS0FBOUMsRUFBUDtBQUdIOztLQUpVRCxLO0FBTUksU0FBU0UsY0FBVCxDQUF3QkQsS0FBeEIsRUFBK0I7QUFBQTs7QUFBQSx3QkFDaEJFLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRGdCO0FBQUE7QUFBQSxNQUNuQ0MsS0FEbUM7QUFBQSxNQUM1QkMsUUFENEI7O0FBQUEseUJBRWxCSCw0Q0FBSyxDQUFDQyxRQUFOLEVBRmtCO0FBQUE7QUFBQSxNQUVuQ0csSUFGbUM7QUFBQSxNQUU3QkMsT0FGNkI7O0FBQUEseUJBR2xCTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUhrQjtBQUFBO0FBQUEsTUFHbkNLLElBSG1DO0FBQUEsTUFHN0JDLE9BSDZCOztBQUkxQyxNQUFNQyxVQUFVO0FBQUEsZ01BQUUsaUJBQU9DLEtBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQSxtQkFBSyxDQUFDQyxjQUFOOztBQURjLG1CQUVYUixLQUZXO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBR1FULE1BQU0sQ0FBQztBQUNyQiwrQkFBZVM7QUFETSxlQUFELENBQU4sQ0FFZlMsSUFGZSxDQUdkLFVBQUNQLElBQUQsRUFBUTtBQUNKQyx1QkFBTyxDQUFDLFlBQUk7QUFDUix5QkFBTztBQUFDRCx3QkFBSSxFQUFKQTtBQUFELG1CQUFQO0FBQ0YsaUJBRkssQ0FBUDtBQUdILGVBUGEsV0FRVixVQUFDUSxLQUFELEVBQVc7QUFDZlAsdUJBQU8sQ0FBQyxZQUFJO0FBQ1IseUJBQU87QUFBQ08seUJBQUssRUFBTEE7QUFBRCxtQkFBUDtBQUNGLGlCQUZLLENBQVA7QUFHSCxlQVppQixDQUhSOztBQUFBO0FBR0pSLG1CQUhJOztBQUFBO0FBa0JkRyxxQkFBTyxDQUFDLFlBQUk7QUFDUix1QkFBTyxJQUFQO0FBQ0YsZUFGSyxDQUFQOztBQWxCYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBLG9CQUFWQyxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQXVCQSxNQUFNSyxjQUFjLEdBQUMsU0FBZkEsY0FBZSxDQUFDSixLQUFELEVBQVM7QUFDMUJOLFlBQVEsQ0FBQ00sS0FBSyxDQUFDSyxNQUFOLENBQWFDLEtBQWQsQ0FBUjtBQUVILEdBSEQ7O0FBS0QsTUFBTUMsV0FBVyxHQUFFLFNBQWJBLFdBQWEsR0FBSTtBQUNkVCxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ1IsR0FGRDs7QUFHQyxTQUNJLG1FQUNDO0FBQU0sWUFBUSxFQUFFQyxVQUFoQjtBQUE0QixhQUFTLEVBQUVTLGdGQUFLLENBQUNDLElBQTdDO0FBQW1ELGNBQVUsTUFBN0Q7QUFBOEQsZ0JBQVksRUFBQztBQUEzRSxLQUNJLE1BQUMscUVBQUQ7QUFBYSxhQUFTLEVBQUVELGdGQUFLLENBQUNFO0FBQTlCLEtBQzJCLE1BQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUM7QUFBcEIsNEJBRDNCLEVBRTJCLE1BQUMsK0RBQUQ7QUFDSSxNQUFFLEVBQUMsY0FEUDtBQUVJLFFBQUksRUFBRSxPQUZWO0FBR0ksWUFBUSxFQUFFTixjQUhkO0FBSUksZUFBVyxFQUFDLGtCQUpoQjtBQUtJLFFBQUksRUFBQyxPQUxUO0FBTUksZ0JBQVksRUFBQztBQU5qQixJQUYzQixDQURKLEVBZUssTUFBQyxnRUFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBRUksZ0ZBQUssQ0FBQ0csTUFBdkM7QUFBK0MsUUFBSSxFQUFDO0FBQXBELGFBZkwsQ0FERCxFQXFCQSxNQUFDLG1FQUFEO0FBQVUsUUFBSSxFQUFFZCxJQUFoQjtBQUFzQixnQkFBWSxFQUN0QjtBQUFLZSxjQUFRLEVBQUUsS0FBZjtBQUNJQyxnQkFBVSxFQUFFO0FBRGhCLEtBRFo7QUFJUyxvQkFBZ0IsRUFBRSxLQUozQjtBQUlrQyxXQUFPLEVBQUVOO0FBSjNDLEtBS1UsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFQSxXQUFoQjtBQUErQixZQUFRLEVBQUM7QUFBeEMsSUFMVixDQXJCQSxDQURKO0FBK0JIOztHQWxFdUJqQixjOztNQUFBQSxjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxGb3JnZXRQYXNzd2FyZC5qcy5hZDJkYjYwZTY2ZWFjNTNkYTkxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9Db21wb25lbnQvY3NzL0ZvcmdldFBhc3N3YXJkLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcclxuaW1wb3J0IHtGT1JHRVRfUEFTU1dBUkRfTVVUQVRJT059IGZyb20gXCIuLi9Db21wb25lbnQvZ3JhcGhhbFF1cmV5XCJcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XHJcblxyXG5pbXBvcnQgTXVpQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcblxyXG5cclxuY29uc3Qgc2lnbklOID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gIHJlcXVlc3QoJ2h0dHBzOi8vd3d3LnJhamRlZXBzaW5naC5kZXYvZ3JhcGhxbCcsIEZPUkdFVF9QQVNTV0FSRF9NVVRBVElPTiwgdXNlckRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIEFsZXJ0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gIHZhcmlhbnQ9XCJmaWxsZWRcIiB7Li4ucHJvcHN9ID4gXHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb3BzLnNob3cgfX0+PC9kaXY+ICAqL31cclxuICAgICAgICAgICAgPC9NdWlBbGVydD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9yZ2V0UGFzc3dhcmQocHJvcHMpIHtcclxuICAgIGNvbnN0IFtnbWFpbCwgc2V0R21haWxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZm9ybVN1Ym1pdD0gYXN5bmMgKGV2ZW50KT0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZihnbWFpbCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGE9IGF3YWl0IHNpZ25JTih7ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFwiZ2V0VXNlck5hbWVcIjogZ21haWxcclxuICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgIChkYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoKCk9PnsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2RhdGF9IFxyXG4gICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YSgoKT0+eyAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtlcnJvcn0gXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE9wZW4oKCk9PnsgIFxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZSBcclxuICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbnN0IHBhc3N3YXJkQ2hhbmdlPShldmVudCk9PntcclxuICAgICAgICBzZXRHbWFpbChldmVudC50YXJnZXQudmFsdWUpXHJcblxyXG4gICAgfVxyXG5cclxuICAgY29uc3QgaGFuZGxlQ2xvc2UgPSgpPT57XHJcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1TdWJtaXR9IGNsYXNzTmFtZT17c3R5bGUuZm9ybX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvblwiPlxyXG4gICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17c3R5bGUubGF5b3V0fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiUmVzdFBhc3N3b3JkXCI+RW50ZXIgUmVnaXN0ZXIgR21haWw8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlJlc3RQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0gJ2dtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXNzd2FyZENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBnYW1pbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ21haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJnbWFpbFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn0gc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgUmVzZXQgXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8U25hY2tiYXIgb3Blbj17b3Blbn0gYW5jaG9yT3JpZ2luPXsgXHJcbiAgICAgICAgICAgICAgICAgICAgeyAgICB2ZXJ0aWNhbDogJ3RvcCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwMH0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICA8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9ICAgc2V2ZXJpdHk9XCJlcnJvclwiPjwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9