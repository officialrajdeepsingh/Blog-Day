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
              _context.next = 3;
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

            case 3:
              data = _context.sent;
              setOpen(function () {
                return true;
              });

            case 5:
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

  var passwardChange = function passwardChange() {};

  var handleClose = function handleClose() {};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Gb3JnZXRQYXNzd2FyZC5qcyJdLCJuYW1lcyI6WyJzaWduSU4iLCJ1c2VyRGF0YSIsInJlcXVlc3QiLCJGT1JHRVRfUEFTU1dBUkRfTVVUQVRJT04iLCJBbGVydCIsInByb3BzIiwiRm9yZ2V0UGFzc3dhcmQiLCJSZWFjdCIsInVzZVN0YXRlIiwiZ21haWwiLCJzZXRHbWFpbCIsIm9wZW4iLCJzZXRPcGVuIiwiZm9ybVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiZGF0YSIsInNldEF1dGhUb2tlbiIsImVycm9yIiwicGFzc3dhcmRDaGFuZ2UiLCJoYW5kbGVDbG9zZSIsInN0eWxlIiwiZm9ybSIsImxheW91dCIsImJ1dHRvbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxRQUFELEVBQWM7QUFDekIsU0FBUUMsZ0VBQU8sQ0FBQyxzQ0FBRCxFQUF5Q0Msd0JBQXpDLEVBQW1FRixRQUFuRSxDQUFmO0FBQ0QsQ0FGSDs7QUFJRSxTQUFTRyxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDcEIsU0FBTyxNQUFDLCtEQUFEO0FBQVUsYUFBUyxFQUFFLENBQXJCO0FBQXlCLFdBQU8sRUFBQztBQUFqQyxLQUE4Q0EsS0FBOUMsRUFBUDtBQUdIOztLQUpVRCxLO0FBTUksU0FBU0UsY0FBVCxDQUF3QkQsS0FBeEIsRUFBK0I7QUFBQTs7QUFBQSx3QkFDaEJFLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRGdCO0FBQUE7QUFBQSxNQUNuQ0MsS0FEbUM7QUFBQSxNQUM1QkMsUUFENEI7O0FBQUEseUJBRWxCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUZrQjtBQUFBO0FBQUEsTUFFbkNHLElBRm1DO0FBQUEsTUFFN0JDLE9BRjZCOztBQUcxQyxNQUFNQyxVQUFVO0FBQUEsZ01BQUUsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RBLG1CQUFLLENBQUNDLGNBQU47QUFEYztBQUFBLHFCQUVJZixNQUFNLENBQUM7QUFDckIsK0JBQWVTO0FBRE0sZUFBRCxDQUFOLENBRWZPLElBRmUsQ0FHZCxVQUFDQyxJQUFELEVBQVE7QUFDSkMsNEJBQVksQ0FBQyxZQUFJO0FBQ2IseUJBQU87QUFBQ0Qsd0JBQUksRUFBSkE7QUFBRCxtQkFBUDtBQUNGLGlCQUZVLENBQVo7QUFHSCxlQVBhLFdBUVYsVUFBQ0UsS0FBRCxFQUFXO0FBQ2ZELDRCQUFZLENBQUMsWUFBSTtBQUNiLHlCQUFPO0FBQUNDLHlCQUFLLEVBQUxBO0FBQUQsbUJBQVA7QUFDRixpQkFGVSxDQUFaO0FBR0gsZUFaaUIsQ0FGSjs7QUFBQTtBQUVSRixrQkFGUTtBQWdCZEwscUJBQU8sQ0FBQyxZQUFJO0FBQ1IsdUJBQU8sSUFBUDtBQUNGLGVBRkssQ0FBUDs7QUFoQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQSxvQkFBVkMsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFxQkEsTUFBTU8sY0FBYyxHQUFDLFNBQWZBLGNBQWUsR0FBSSxDQUV4QixDQUZEOztBQUlELE1BQU1DLFdBQVcsR0FBRSxTQUFiQSxXQUFhLEdBQUksQ0FFdEIsQ0FGRDs7QUFHQyxTQUNJLG1FQUNDO0FBQU0sWUFBUSxFQUFFUixVQUFoQjtBQUE0QixhQUFTLEVBQUVTLGdGQUFLLENBQUNDLElBQTdDO0FBQW1ELGNBQVUsTUFBN0Q7QUFBOEQsZ0JBQVksRUFBQztBQUEzRSxLQUNJLE1BQUMscUVBQUQ7QUFBYSxhQUFTLEVBQUVELGdGQUFLLENBQUNFO0FBQTlCLEtBQzJCLE1BQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUM7QUFBcEIsNEJBRDNCLEVBRTJCLE1BQUMsK0RBQUQ7QUFDSSxNQUFFLEVBQUMsY0FEUDtBQUVJLFFBQUksRUFBRSxPQUZWO0FBR0ksWUFBUSxFQUFFSixjQUhkO0FBSUksZUFBVyxFQUFDLGtCQUpoQjtBQUtJLFFBQUksRUFBQyxPQUxUO0FBTUksZ0JBQVksRUFBQztBQU5qQixJQUYzQixDQURKLEVBZUssTUFBQyxnRUFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBRUUsZ0ZBQUssQ0FBQ0csTUFBdkM7QUFBK0MsUUFBSSxFQUFDO0FBQXBELGFBZkwsQ0FERCxFQXFCQSxNQUFDLG1FQUFEO0FBQVUsUUFBSSxFQUFFZCxJQUFoQjtBQUFzQixnQkFBWSxFQUN0QjtBQUFLZSxjQUFRLEVBQUUsS0FBZjtBQUNJQyxnQkFBVSxFQUFFO0FBRGhCLEtBRFo7QUFJUyxvQkFBZ0IsRUFBRSxLQUozQjtBQUlrQyxXQUFPLEVBQUVOO0FBSjNDLEtBS1UsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFQSxXQUFoQjtBQUErQixZQUFRLEVBQUM7QUFBeEMsSUFMVixDQXJCQSxDQURKO0FBK0JIOztHQTlEdUJmLGM7O01BQUFBLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXEZvcmdldFBhc3N3YXJkLmpzLmZmM2EyMzc0NjYwYjRhNWQ5NDBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL0NvbXBvbmVudC9jc3MvRm9yZ2V0UGFzc3dhcmQubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xyXG5pbXBvcnQge0xPR0lOX01VVEFUSU9OfSBmcm9tIFwiLi4vQ29tcG9uZW50L2dyYXBoYWxRdXJleVwiXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5cclxuaW1wb3J0IE11aUFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xyXG5cclxuXHJcbmNvbnN0IHNpZ25JTiA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuICByZXF1ZXN0KCdodHRwczovL3d3dy5yYWpkZWVwc2luZ2guZGV2L2dyYXBocWwnLCBGT1JHRVRfUEFTU1dBUkRfTVVUQVRJT04sIHVzZXJEYXRhKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG4gICAgcmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9ICB2YXJpYW50PVwiZmlsbGVkXCIgey4uLnByb3BzfSA+IFxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy5zaG93IH19PjwvZGl2PiAgKi99XHJcbiAgICAgICAgICAgIDwvTXVpQWxlcnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcmdldFBhc3N3YXJkKHByb3BzKSB7XHJcbiAgICBjb25zdCBbZ21haWwsIHNldEdtYWlsXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZm9ybVN1Ym1pdD0gYXN5bmMgKGV2ZW50KT0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCBkYXRhPSBhd2FpdCBzaWduSU4oeyAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFwiZ2V0VXNlck5hbWVcIjogZ21haWxcclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAoZGF0YSk9PntcclxuICAgICAgICAgICAgICAgIHNldEF1dGhUb2tlbigoKT0+eyAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtkYXRhfSBcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgc2V0QXV0aFRva2VuKCgpPT57ICBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9IFxyXG4gICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRPcGVuKCgpPT57ICBcclxuICAgICAgICAgICAgcmV0dXJuIHRydWUgXHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXNzd2FyZENoYW5nZT0oKT0+e1xyXG5cclxuICAgIH1cclxuXHJcbiAgIGNvbnN0IGhhbmRsZUNsb3NlID0oKT0+e1xyXG5cclxuICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZS5mb3JtfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9uXCI+XHJcbiAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtzdHlsZS5sYXlvdXR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJSZXN0UGFzc3dvcmRcIj5FbnRlciBSZWdpc3RlciBHbWFpbDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUmVzdFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSAnZ21haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Bhc3N3YXJkQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIGdhbWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImdtYWlsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICBSZXNldCBcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDxTbmFja2JhciBvcGVuPXtvcGVufSBhbmNob3JPcmlnaW49eyBcclxuICAgICAgICAgICAgICAgICAgICB7ICAgIHZlcnRpY2FsOiAndG9wJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInIH1cclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezYwMDAwfSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gICBzZXZlcml0eT1cImVycm9yXCI+PC9BbGVydD5cclxuICAgICAgICAgICAgICA8L1NuYWNrYmFyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=