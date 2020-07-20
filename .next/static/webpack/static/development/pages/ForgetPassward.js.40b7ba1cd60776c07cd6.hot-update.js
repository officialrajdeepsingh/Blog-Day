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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Gb3JnZXRQYXNzd2FyZC5qcyJdLCJuYW1lcyI6WyJzaWduSU4iLCJ1c2VyRGF0YSIsInJlcXVlc3QiLCJGT1JHRVRfUEFTU1dBUkRfTVVUQVRJT04iLCJBbGVydCIsInByb3BzIiwiRm9yZ2V0UGFzc3dhcmQiLCJSZWFjdCIsInVzZVN0YXRlIiwiZ21haWwiLCJzZXRHbWFpbCIsImRhdGEiLCJzZXREYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9wZW4iLCJzZXRPcGVuIiwiZm9ybVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwicGFzc3dhcmRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsb3NlIiwic3R5bGUiLCJmb3JtIiwibGF5b3V0IiwiYnV0dG9uIiwidmVydGljYWwiLCJob3Jpem9udGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLFFBQUQsRUFBYztBQUN6QixTQUFRQyxnRUFBTyxDQUFDLHNDQUFELEVBQXlDQyxpRkFBekMsRUFBbUVGLFFBQW5FLENBQWY7QUFDRCxDQUZIOztBQUlFLFNBQVNHLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNwQixTQUFPLE1BQUMsK0RBQUQ7QUFBVSxhQUFTLEVBQUUsQ0FBckI7QUFBeUIsV0FBTyxFQUFDO0FBQWpDLEtBQThDQSxLQUE5QyxFQUFQO0FBR0g7O0tBSlVELEs7QUFNSSxTQUFTRSxjQUFULENBQXdCRCxLQUF4QixFQUErQjtBQUFBOztBQUFBLHdCQUNoQkUsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FEZ0I7QUFBQTtBQUFBLE1BQ25DQyxLQURtQztBQUFBLE1BQzVCQyxRQUQ0Qjs7QUFBQSx5QkFFbEJILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRmtCO0FBQUE7QUFBQSxNQUVuQ0csSUFGbUM7QUFBQSxNQUU3QkMsT0FGNkI7O0FBQUEseUJBR2hCTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUhnQjtBQUFBO0FBQUEsTUFHbkNLLEtBSG1DO0FBQUEsTUFHNUJDLFFBSDRCOztBQUFBLHlCQUlsQlAsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FKa0I7QUFBQTtBQUFBLE1BSW5DTyxJQUptQztBQUFBLE1BSTdCQyxPQUo2Qjs7QUFLMUMsTUFBTUMsVUFBVTtBQUFBLGdNQUFFLGlCQUFPQyxLQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEEsbUJBQUssQ0FBQ0MsY0FBTjs7QUFEYyxtQkFFWFYsS0FGVztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUdRVCxNQUFNLENBQUM7QUFDckIsK0JBQWVTO0FBRE0sZUFBRCxDQUFOLENBRWZXLElBRmUsQ0FHZCxVQUFDVCxJQUFELEVBQVE7QUFDSkMsdUJBQU8sQ0FBQyxZQUFJO0FBQ1IseUJBQU87QUFBQ0Qsd0JBQUksRUFBSkE7QUFBRCxtQkFBUDtBQUNGLGlCQUZLLENBQVA7QUFHSCxlQVBhLFdBUVYsVUFBQ0UsS0FBRCxFQUFXO0FBQ2ZDLHdCQUFRLENBQUMsWUFBSTtBQUNULHlCQUFPO0FBQUNELHlCQUFLLEVBQUxBO0FBQUQsbUJBQVA7QUFDRixpQkFGTSxDQUFSO0FBR0gsZUFaaUIsQ0FIUjs7QUFBQTtBQUdKRixtQkFISTs7QUFBQTtBQWtCZEsscUJBQU8sQ0FBQyxZQUFJO0FBQ1IsdUJBQU8sSUFBUDtBQUNGLGVBRkssQ0FBUDs7QUFsQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQSxvQkFBVkMsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUF1QkEsTUFBTUksY0FBYyxHQUFDLFNBQWZBLGNBQWUsQ0FBQ0gsS0FBRCxFQUFTO0FBQzFCUixZQUFRLENBQUNRLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxLQUFkLENBQVI7QUFFSCxHQUhEOztBQUtELE1BQU1DLFdBQVcsR0FBRSxTQUFiQSxXQUFhLEdBQUk7QUFDZFIsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNSLEdBRkQ7O0FBR0MsU0FDSSxtRUFDQztBQUFNLFlBQVEsRUFBRUMsVUFBaEI7QUFBNEIsYUFBUyxFQUFFUSxnRkFBSyxDQUFDQyxJQUE3QztBQUFtRCxjQUFVLE1BQTdEO0FBQThELGdCQUFZLEVBQUM7QUFBM0UsS0FDSSxNQUFDLHFFQUFEO0FBQWEsYUFBUyxFQUFFRCxnRkFBSyxDQUFDRTtBQUE5QixLQUMyQixNQUFDLG9FQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLDRCQUQzQixFQUUyQixNQUFDLCtEQUFEO0FBQ0ksTUFBRSxFQUFDLGNBRFA7QUFFSSxRQUFJLEVBQUUsT0FGVjtBQUdJLFlBQVEsRUFBRU4sY0FIZDtBQUlJLGVBQVcsRUFBQyxrQkFKaEI7QUFLSSxRQUFJLEVBQUMsT0FMVDtBQU1JLGdCQUFZLEVBQUM7QUFOakIsSUFGM0IsQ0FESixFQWVLLE1BQUMsZ0VBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUVJLGdGQUFLLENBQUNHLE1BQXZDO0FBQStDLFFBQUksRUFBQztBQUFwRCxhQWZMLENBREQsRUFxQkEsTUFBQyxtRUFBRDtBQUFVLFFBQUksRUFBRWIsSUFBaEI7QUFBc0IsZ0JBQVksRUFDdEI7QUFBS2MsY0FBUSxFQUFFLEtBQWY7QUFDSUMsZ0JBQVUsRUFBRTtBQURoQixLQURaO0FBSVMsb0JBQWdCLEVBQUUsS0FKM0I7QUFJa0MsV0FBTyxFQUFFTjtBQUozQyxLQUtVLE1BQUMsS0FBRDtBQUFPLFdBQU8sRUFBRUEsV0FBaEI7QUFBK0IsWUFBUSxFQUFDO0FBQXhDLElBTFYsQ0FyQkEsQ0FESjtBQStCSDs7R0FuRXVCbEIsYzs7TUFBQUEsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcRm9yZ2V0UGFzc3dhcmQuanMuNDBiN2JhMWNkNjA3NzZjMDdjZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vQ29tcG9uZW50L2Nzcy9Gb3JnZXRQYXNzd2FyZC5tb2R1bGUuc2NzcydcclxuXHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCB7Rk9SR0VUX1BBU1NXQVJEX01VVEFUSU9OfSBmcm9tIFwiLi4vQ29tcG9uZW50L2dyYXBoYWxRdXJleVwiXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5cclxuaW1wb3J0IE11aUFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xyXG5cclxuXHJcbmNvbnN0IHNpZ25JTiA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuICByZXF1ZXN0KCdodHRwczovL3d3dy5yYWpkZWVwc2luZ2guZGV2L2dyYXBocWwnLCBGT1JHRVRfUEFTU1dBUkRfTVVUQVRJT04sIHVzZXJEYXRhKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG4gICAgcmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9ICB2YXJpYW50PVwiZmlsbGVkXCIgey4uLnByb3BzfSA+IFxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy5zaG93IH19PjwvZGl2PiAgKi99XHJcbiAgICAgICAgICAgIDwvTXVpQWxlcnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcmdldFBhc3N3YXJkKHByb3BzKSB7XHJcbiAgICBjb25zdCBbZ21haWwsIHNldEdtYWlsXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBmb3JtU3VibWl0PSBhc3luYyAoZXZlbnQpPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGlmKGdtYWlsKXtcclxuICAgICAgICAgICAgY29uc3QgZGF0YT0gYXdhaXQgc2lnbklOKHsgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXCJnZXRVc2VyTmFtZVwiOiBnbWFpbFxyXG4gICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKGRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSgoKT0+eyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7ZGF0YX0gXHJcbiAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcigoKT0+eyAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtlcnJvcn0gXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE9wZW4oKCk9PnsgIFxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZSBcclxuICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbnN0IHBhc3N3YXJkQ2hhbmdlPShldmVudCk9PntcclxuICAgICAgICBzZXRHbWFpbChldmVudC50YXJnZXQudmFsdWUpXHJcblxyXG4gICAgfVxyXG5cclxuICAgY29uc3QgaGFuZGxlQ2xvc2UgPSgpPT57XHJcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1TdWJtaXR9IGNsYXNzTmFtZT17c3R5bGUuZm9ybX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvblwiPlxyXG4gICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17c3R5bGUubGF5b3V0fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiUmVzdFBhc3N3b3JkXCI+RW50ZXIgUmVnaXN0ZXIgR21haWw8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlJlc3RQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0gJ2dtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXNzd2FyZENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBnYW1pbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ21haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJnbWFpbFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn0gc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgUmVzZXQgXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8U25hY2tiYXIgb3Blbj17b3Blbn0gYW5jaG9yT3JpZ2luPXsgXHJcbiAgICAgICAgICAgICAgICAgICAgeyAgICB2ZXJ0aWNhbDogJ3RvcCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwMH0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICA8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9ICAgc2V2ZXJpdHk9XCJlcnJvclwiPjwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9