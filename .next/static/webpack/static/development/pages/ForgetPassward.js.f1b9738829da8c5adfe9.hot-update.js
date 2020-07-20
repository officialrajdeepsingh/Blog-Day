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

  var showError = error ? error.error.errors.message : " Some thing Worng ";
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
    severity: error ? "error" : "success"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Gb3JnZXRQYXNzd2FyZC5qcyJdLCJuYW1lcyI6WyJzaWduSU4iLCJ1c2VyRGF0YSIsInJlcXVlc3QiLCJGT1JHRVRfUEFTU1dBUkRfTVVUQVRJT04iLCJBbGVydCIsInByb3BzIiwiX19odG1sIiwic2hvdyIsIkZvcmdldFBhc3N3YXJkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImdtYWlsIiwic2V0R21haWwiLCJkYXRhIiwic2V0RGF0YSIsImVycm9yIiwic2V0RXJyb3IiLCJvcGVuIiwic2V0T3BlbiIsImZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJwYXNzd2FyZENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xvc2UiLCJzaG93RXJyb3IiLCJlcnJvcnMiLCJtZXNzYWdlIiwic3R5bGUiLCJmb3JtIiwibGF5b3V0IiwiYnV0dG9uIiwidmVydGljYWwiLCJob3Jpem9udGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLFFBQUQsRUFBYztBQUN6QixTQUFRQyxnRUFBTyxDQUFDLHNDQUFELEVBQXlDQyxpRkFBekMsRUFBbUVGLFFBQW5FLENBQWY7QUFDRCxDQUZIOztBQUlFLFNBQVNHLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNwQixTQUFPLE1BQUMsK0RBQUQ7QUFBVSxhQUFTLEVBQUUsQ0FBckI7QUFBeUIsV0FBTyxFQUFDO0FBQWpDLEtBQThDQSxLQUE5QyxHQUNLO0FBQUssMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFRCxLQUFLLENBQUNFO0FBQWhCO0FBQTlCLElBREwsQ0FBUDtBQUdIOztLQUpVSCxLO0FBTUksU0FBU0ksY0FBVCxDQUF3QkgsS0FBeEIsRUFBK0I7QUFBQTs7QUFBQSx3QkFDaEJJLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRGdCO0FBQUE7QUFBQSxNQUNuQ0MsS0FEbUM7QUFBQSxNQUM1QkMsUUFENEI7O0FBQUEseUJBRWxCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUZrQjtBQUFBO0FBQUEsTUFFbkNHLElBRm1DO0FBQUEsTUFFN0JDLE9BRjZCOztBQUFBLHlCQUdoQkwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FIZ0I7QUFBQTtBQUFBLE1BR25DSyxLQUhtQztBQUFBLE1BRzVCQyxRQUg0Qjs7QUFBQSx5QkFJbEJQLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSmtCO0FBQUE7QUFBQSxNQUluQ08sSUFKbUM7QUFBQSxNQUk3QkMsT0FKNkI7O0FBSzFDLE1BQU1DLFVBQVU7QUFBQSxnTUFBRSxpQkFBT0MsS0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RBLG1CQUFLLENBQUNDLGNBQU47O0FBRGMsbUJBRVhWLEtBRlc7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFHUVgsTUFBTSxDQUFDO0FBQ3JCLCtCQUFlVztBQURNLGVBQUQsQ0FBTixDQUVmVyxJQUZlLENBR2QsVUFBQ1QsSUFBRCxFQUFRO0FBQ0pDLHVCQUFPLENBQUMsWUFBSTtBQUNSLHlCQUFPO0FBQUNELHdCQUFJLEVBQUpBO0FBQUQsbUJBQVA7QUFDRixpQkFGSyxDQUFQO0FBR0gsZUFQYSxXQVFWLFVBQUNFLEtBQUQsRUFBVztBQUNmQyx3QkFBUSxDQUFDLFlBQUk7QUFDVCx5QkFBTztBQUFDRCx5QkFBSyxFQUFMQTtBQUFELG1CQUFQO0FBQ0YsaUJBRk0sQ0FBUjtBQUdILGVBWmlCLENBSFI7O0FBQUE7QUFHSkYsbUJBSEk7O0FBQUE7QUFrQmRLLHFCQUFPLENBQUMsWUFBSTtBQUNSLHVCQUFPLElBQVA7QUFDRixlQUZLLENBQVA7O0FBbEJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUEsb0JBQVZDLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBdUJBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWVgsSUFBWixFQUFtQixRQUFuQjtBQUNBVSxTQUFPLENBQUNDLEdBQVIsQ0FBWVQsS0FBWixFQUFvQixTQUFwQjs7QUFDQSxNQUFNVSxjQUFjLEdBQUMsU0FBZkEsY0FBZSxDQUFDTCxLQUFELEVBQVM7QUFDMUJSLFlBQVEsQ0FBQ1EsS0FBSyxDQUFDTSxNQUFOLENBQWFDLEtBQWQsQ0FBUjtBQUNILEdBRkQ7O0FBSUQsTUFBTUMsV0FBVyxHQUFFLFNBQWJBLFdBQWEsR0FBSTtBQUNkVixXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ1IsR0FGRDs7QUFJQSxNQUFNVyxTQUFTLEdBQUVkLEtBQUssR0FBRUEsS0FBSyxDQUFDQSxLQUFOLENBQVllLE1BQVosQ0FBbUJDLE9BQXJCLEdBQStCLG9CQUFyRDtBQUdDLFNBQ0ksbUVBQ0M7QUFBTSxZQUFRLEVBQUVaLFVBQWhCO0FBQTRCLGFBQVMsRUFBRWEsZ0ZBQUssQ0FBQ0MsSUFBN0M7QUFBbUQsY0FBVSxNQUE3RDtBQUE4RCxnQkFBWSxFQUFDO0FBQTNFLEtBQ0ksTUFBQyxxRUFBRDtBQUFhLGFBQVMsRUFBRUQsZ0ZBQUssQ0FBQ0U7QUFBOUIsS0FDMkIsTUFBQyxvRUFBRDtBQUFZLFdBQU8sRUFBQztBQUFwQiw0QkFEM0IsRUFFMkIsTUFBQywrREFBRDtBQUNJLE1BQUUsRUFBQyxjQURQO0FBRUksUUFBSSxFQUFFLE9BRlY7QUFHSSxZQUFRLEVBQUVULGNBSGQ7QUFJSSxlQUFXLEVBQUMsa0JBSmhCO0FBS0ksUUFBSSxFQUFDLE9BTFQ7QUFNSSxnQkFBWSxFQUFDO0FBTmpCLElBRjNCLENBREosRUFlSyxNQUFDLGdFQUFEO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFFTyxnRkFBSyxDQUFDRyxNQUF2QztBQUErQyxRQUFJLEVBQUM7QUFBcEQsYUFmTCxDQURELEVBcUJBLE1BQUMsbUVBQUQ7QUFBVSxRQUFJLEVBQUVsQixJQUFoQjtBQUFzQixnQkFBWSxFQUN0QjtBQUFLbUIsY0FBUSxFQUFFLEtBQWY7QUFDSUMsZ0JBQVUsRUFBRTtBQURoQixLQURaO0FBSVMsb0JBQWdCLEVBQUUsS0FKM0I7QUFJa0MsV0FBTyxFQUFFVDtBQUozQyxLQUtVLE1BQUMsS0FBRDtBQUFPLFdBQU8sRUFBRUEsV0FBaEI7QUFBOEIsUUFBSSxFQUFHQyxTQUFyQztBQUFpRCxZQUFRLEVBQUVkLEtBQUssR0FBRSxPQUFGLEdBQVU7QUFBMUUsSUFMVixDQXJCQSxDQURKO0FBK0JIOztHQXhFdUJQLGM7O01BQUFBLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXEZvcmdldFBhc3N3YXJkLmpzLmYxYjk3Mzg4MjlkYThjNWFkZmU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL0NvbXBvbmVudC9jc3MvRm9yZ2V0UGFzc3dhcmQubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xyXG5pbXBvcnQge0ZPUkdFVF9QQVNTV0FSRF9NVVRBVElPTn0gZnJvbSBcIi4uL0NvbXBvbmVudC9ncmFwaGFsUXVyZXlcIlxyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcclxuXHJcbmltcG9ydCBNdWlBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcclxuXHJcblxyXG5jb25zdCBzaWduSU4gPSAodXNlckRhdGEpID0+IHtcclxuICAgIHJldHVybiAgcmVxdWVzdCgnaHR0cHM6Ly93d3cucmFqZGVlcHNpbmdoLmRldi9ncmFwaHFsJywgRk9SR0VUX1BBU1NXQVJEX01VVEFUSU9OLCB1c2VyRGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gQWxlcnQocHJvcHMpIHtcclxuICAgIHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSAgdmFyaWFudD1cImZpbGxlZFwiIHsuLi5wcm9wc30gPiBcclxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy5zaG93IH19PjwvZGl2PiBcclxuICAgICAgICAgICAgPC9NdWlBbGVydD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9yZ2V0UGFzc3dhcmQocHJvcHMpIHtcclxuICAgIGNvbnN0IFtnbWFpbCwgc2V0R21haWxdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGZvcm1TdWJtaXQ9IGFzeW5jIChldmVudCk9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYoZ21haWwpe1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhPSBhd2FpdCBzaWduSU4oeyAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcImdldFVzZXJOYW1lXCI6IGdtYWlsXHJcbiAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoZGF0YSk9PntcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKCgpPT57ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtkYXRhfSBcclxuICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKCgpPT57ICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2Vycm9yfSBcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0T3BlbigoKT0+eyAgXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlIFxyXG4gICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZGF0YSAsICcgZGF0YSAnKVxyXG4gICAgY29uc29sZS5sb2coZXJyb3IgLCAnIGVycm9yICcpXHJcbiAgICBjb25zdCBwYXNzd2FyZENoYW5nZT0oZXZlbnQpPT57XHJcbiAgICAgICAgc2V0R21haWwoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgY29uc3QgaGFuZGxlQ2xvc2UgPSgpPT57XHJcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IHNob3dFcnJvcj0gZXJyb3I/IGVycm9yLmVycm9yLmVycm9ycy5tZXNzYWdlIDogXCIgU29tZSB0aGluZyBXb3JuZyBcIlxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlLmZvcm19IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib25cIj5cclxuICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e3N0eWxlLmxheW91dH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cIlJlc3RQYXNzd29yZFwiPkVudGVyIFJlZ2lzdGVyIEdtYWlsPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJSZXN0UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9ICdnbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFzc3dhcmRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgZ2FtaWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZ21haWxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259IHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFJlc2V0IFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPFNuYWNrYmFyIG9wZW49e29wZW59IGFuY2hvck9yaWdpbj17IFxyXG4gICAgICAgICAgICAgICAgICAgIHsgICAgdmVydGljYWw6ICd0b3AnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17NjAwMDB9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSAgc2hvdz17IHNob3dFcnJvciB9IHNldmVyaXR5PXtlcnJvcj8gXCJlcnJvclwiOlwic3VjY2Vzc1wifT48L0FsZXJ0PlxyXG4gICAgICAgICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==