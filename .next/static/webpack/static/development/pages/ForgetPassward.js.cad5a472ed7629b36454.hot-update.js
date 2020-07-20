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
  return Object(graphql_request__WEBPACK_IMPORTED_MODULE_12__["request"])('https://www.rajdeepsingh.dev/graphql', FORGET_PASSWARD_MUTATION, userData);
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

              if (!gamil) {
                _context.next = 5;
                break;
              }

              _context.next = 4;
              return signIN({
                "getUserName": gmail
              }).then(function (data) {
                setAuthToken(function () {
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
    set;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Gb3JnZXRQYXNzd2FyZC5qcyJdLCJuYW1lcyI6WyJzaWduSU4iLCJ1c2VyRGF0YSIsInJlcXVlc3QiLCJGT1JHRVRfUEFTU1dBUkRfTVVUQVRJT04iLCJBbGVydCIsInByb3BzIiwiRm9yZ2V0UGFzc3dhcmQiLCJSZWFjdCIsInVzZVN0YXRlIiwiZ21haWwiLCJzZXRHbWFpbCIsIm9wZW4iLCJzZXRPcGVuIiwiZm9ybVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJnYW1pbCIsInRoZW4iLCJkYXRhIiwic2V0QXV0aFRva2VuIiwiZXJyb3IiLCJwYXNzd2FyZENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xvc2UiLCJzZXQiLCJzdHlsZSIsImZvcm0iLCJsYXlvdXQiLCJidXR0b24iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3pCLFNBQVFDLGdFQUFPLENBQUMsc0NBQUQsRUFBeUNDLHdCQUF6QyxFQUFtRUYsUUFBbkUsQ0FBZjtBQUNELENBRkg7O0FBSUUsU0FBU0csS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3BCLFNBQU8sTUFBQywrREFBRDtBQUFVLGFBQVMsRUFBRSxDQUFyQjtBQUF5QixXQUFPLEVBQUM7QUFBakMsS0FBOENBLEtBQTlDLEVBQVA7QUFHSDs7S0FKVUQsSztBQU1JLFNBQVNFLGNBQVQsQ0FBd0JELEtBQXhCLEVBQStCO0FBQUE7O0FBQUEsd0JBQ2hCRSw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQURnQjtBQUFBO0FBQUEsTUFDbkNDLEtBRG1DO0FBQUEsTUFDNUJDLFFBRDRCOztBQUFBLHlCQUVsQkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FGa0I7QUFBQTtBQUFBLE1BRW5DRyxJQUZtQztBQUFBLE1BRTdCQyxPQUY2Qjs7QUFHMUMsTUFBTUMsVUFBVTtBQUFBLGdNQUFFLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQSxtQkFBSyxDQUFDQyxjQUFOOztBQURjLG1CQUVYQyxLQUZXO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBR1FoQixNQUFNLENBQUM7QUFDckIsK0JBQWVTO0FBRE0sZUFBRCxDQUFOLENBRWZRLElBRmUsQ0FHZCxVQUFDQyxJQUFELEVBQVE7QUFDSkMsNEJBQVksQ0FBQyxZQUFJO0FBQ2IseUJBQU87QUFBQ0Qsd0JBQUksRUFBSkE7QUFBRCxtQkFBUDtBQUNGLGlCQUZVLENBQVo7QUFHSCxlQVBhLFdBUVYsVUFBQ0UsS0FBRCxFQUFXO0FBQ2ZELDRCQUFZLENBQUMsWUFBSTtBQUNiLHlCQUFPO0FBQUNDLHlCQUFLLEVBQUxBO0FBQUQsbUJBQVA7QUFDRixpQkFGVSxDQUFaO0FBR0gsZUFaaUIsQ0FIUjs7QUFBQTtBQUdKRixrQkFISTs7QUFBQTtBQWtCZE4scUJBQU8sQ0FBQyxZQUFJO0FBQ1IsdUJBQU8sSUFBUDtBQUNGLGVBRkssQ0FBUDs7QUFsQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQSxvQkFBVkMsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUF1QkEsTUFBTVEsY0FBYyxHQUFDLFNBQWZBLGNBQWUsQ0FBQ1AsS0FBRCxFQUFTO0FBQzFCSixZQUFRLENBQUNJLEtBQUssQ0FBQ1EsTUFBTixDQUFhQyxLQUFkLENBQVI7QUFFSCxHQUhEOztBQUtELE1BQU1DLFdBQVcsR0FBRSxTQUFiQSxXQUFhLEdBQUk7QUFDZEMsT0FBRztBQUNYLEdBRkQ7O0FBR0MsU0FDSSxtRUFDQztBQUFNLFlBQVEsRUFBRVosVUFBaEI7QUFBNEIsYUFBUyxFQUFFYSxnRkFBSyxDQUFDQyxJQUE3QztBQUFtRCxjQUFVLE1BQTdEO0FBQThELGdCQUFZLEVBQUM7QUFBM0UsS0FDSSxNQUFDLHFFQUFEO0FBQWEsYUFBUyxFQUFFRCxnRkFBSyxDQUFDRTtBQUE5QixLQUMyQixNQUFDLG9FQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLDRCQUQzQixFQUUyQixNQUFDLCtEQUFEO0FBQ0ksTUFBRSxFQUFDLGNBRFA7QUFFSSxRQUFJLEVBQUUsT0FGVjtBQUdJLFlBQVEsRUFBRVAsY0FIZDtBQUlJLGVBQVcsRUFBQyxrQkFKaEI7QUFLSSxRQUFJLEVBQUMsT0FMVDtBQU1JLGdCQUFZLEVBQUM7QUFOakIsSUFGM0IsQ0FESixFQWVLLE1BQUMsZ0VBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUVLLGdGQUFLLENBQUNHLE1BQXZDO0FBQStDLFFBQUksRUFBQztBQUFwRCxhQWZMLENBREQsRUFxQkEsTUFBQyxtRUFBRDtBQUFVLFFBQUksRUFBRWxCLElBQWhCO0FBQXNCLGdCQUFZLEVBQ3RCO0FBQUttQixjQUFRLEVBQUUsS0FBZjtBQUNJQyxnQkFBVSxFQUFFO0FBRGhCLEtBRFo7QUFJUyxvQkFBZ0IsRUFBRSxLQUozQjtBQUlrQyxXQUFPLEVBQUVQO0FBSjNDLEtBS1UsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFQSxXQUFoQjtBQUErQixZQUFRLEVBQUM7QUFBeEMsSUFMVixDQXJCQSxDQURKO0FBK0JIOztHQWpFdUJsQixjOztNQUFBQSxjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxGb3JnZXRQYXNzd2FyZC5qcy5jYWQ1YTQ3MmVkNzYyOWIzNjQ1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9Db21wb25lbnQvY3NzL0ZvcmdldFBhc3N3YXJkLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcclxuaW1wb3J0IHtMT0dJTl9NVVRBVElPTn0gZnJvbSBcIi4uL0NvbXBvbmVudC9ncmFwaGFsUXVyZXlcIlxyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcclxuXHJcbmltcG9ydCBNdWlBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcclxuXHJcblxyXG5jb25zdCBzaWduSU4gPSAodXNlckRhdGEpID0+IHtcclxuICAgIHJldHVybiAgcmVxdWVzdCgnaHR0cHM6Ly93d3cucmFqZGVlcHNpbmdoLmRldi9ncmFwaHFsJywgRk9SR0VUX1BBU1NXQVJEX01VVEFUSU9OLCB1c2VyRGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gQWxlcnQocHJvcHMpIHtcclxuICAgIHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSAgdmFyaWFudD1cImZpbGxlZFwiIHsuLi5wcm9wc30gPiBcclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMuc2hvdyB9fT48L2Rpdj4gICovfVxyXG4gICAgICAgICAgICA8L011aUFsZXJ0PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JnZXRQYXNzd2FyZChwcm9wcykge1xyXG4gICAgY29uc3QgW2dtYWlsLCBzZXRHbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGZvcm1TdWJtaXQ9IGFzeW5jIChldmVudCk9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYoZ2FtaWwpe1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhPSBhd2FpdCBzaWduSU4oeyAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcImdldFVzZXJOYW1lXCI6IGdtYWlsXHJcbiAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoZGF0YSk9PntcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdXRoVG9rZW4oKCk9PnsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2RhdGF9IFxyXG4gICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QXV0aFRva2VuKCgpPT57ICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2Vycm9yfSBcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0T3BlbigoKT0+eyAgXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlIFxyXG4gICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY29uc3QgcGFzc3dhcmRDaGFuZ2U9KGV2ZW50KT0+e1xyXG4gICAgICAgIHNldEdtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuXHJcbiAgICB9XHJcblxyXG4gICBjb25zdCBoYW5kbGVDbG9zZSA9KCk9PntcclxuICAgICAgICAgICAgc2V0XHJcbiAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1TdWJtaXR9IGNsYXNzTmFtZT17c3R5bGUuZm9ybX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvblwiPlxyXG4gICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17c3R5bGUubGF5b3V0fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiUmVzdFBhc3N3b3JkXCI+RW50ZXIgUmVnaXN0ZXIgR21haWw8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlJlc3RQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0gJ2dtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXNzd2FyZENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBnYW1pbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ21haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJnbWFpbFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn0gc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgUmVzZXQgXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8U25hY2tiYXIgb3Blbj17b3Blbn0gYW5jaG9yT3JpZ2luPXsgXHJcbiAgICAgICAgICAgICAgICAgICAgeyAgICB2ZXJ0aWNhbDogJ3RvcCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwMH0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICA8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9ICAgc2V2ZXJpdHk9XCJlcnJvclwiPjwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9