webpackHotUpdate("static\\development\\pages\\Login.js",{

/***/ "./pages/Login.js":
/*!************************!*\
  !*** ./pages/Login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core_FilledInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/index.js");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "./node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../Component/css/Login.module.scss */ "./Component/css/Login.module.scss");
/* harmony import */ var _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! graphql-request */ "./node_modules/graphql-request/dist/src/index.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _Component_asset_loginImage_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../Component/asset/loginImage.png */ "./Component/asset/loginImage.png");
/* harmony import */ var _Component_asset_loginImage_png__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_Component_asset_loginImage_png__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _Component_graphalQurey__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../Component/graphalQurey */ "./Component/graphalQurey.js");





var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



























 // with SWR and graphql-request





var signIN = function signIN(userData) {
  return Object(graphql_request__WEBPACK_IMPORTED_MODULE_32__["request"])('https://www.rajdeepsingh.dev/graphql', _Component_graphalQurey__WEBPACK_IMPORTED_MODULE_34__["LOGIN_MUTATION"], userData);
};

function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    elevation: 6,
    variant: "filled"
  }, props), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: props.show
    }
  }));
}

_c = Alert;
function Login(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_29__["useRouter"])(); // signIN

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      passward = _React$useState2[0],
      setPassward = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      open = _React$useState4[0],
      setOpen = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      userName = _React$useState6[0],
      setUserName = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({}),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      authdata = _React$useState8[0],
      setAuthToken = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState9, 2),
      showPassword = _React$useState10[0],
      setShowPassword = _React$useState10[1];

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
                "username": userName,
                "password": passward
              }).then(function (data) {
                setAuthToken(function () {
                  return {
                    data: data
                  };
                });
                localStorage.setItem("authToken", data.login.authToken);
                localStorage.setItem("userId", data.login.user.userId);
                localStorage.setItem("displayName", data.login.user.username);
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

              if (!data === "undefined") {
                router.push("/");
              }

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
    setPassward(event.target.value);
  };

  var userNameChange = function userNameChange(event) {
    setUserName(event.target.value);
  };

  var handleClickShowPassword = function handleClickShowPassword() {
    setShowPassword(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var ShowAlertError = authdata.error ? authdata.error.response.errors[0].message : 'submit';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_30__["NextSeo"], {
    title: "Login -- Welcome Back ",
    description: "Login  page "
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.containerBox
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.root
  }, __jsx("div", {
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.innerCard
  }, __jsx("div", {
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.details
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.cardContentInner
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.typeH5,
    component: "h6",
    variant: "h6"
  }, "Welcome Back!"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.typeH3,
    component: "h3",
    variant: "h2"
  }, "Join With Me"), __jsx("form", {
    onSubmit: formSubmit,
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.form,
    noValidate: true,
    autoComplete: "on"
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22__["default"], {
    onChange: userNameChange,
    autoComplete: "username",
    id: "userField",
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.textControl,
    placeholder: "Enter Your Email Or User Name   ",
    label: " Email Or User Name "
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.textControl
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_18__["default"], {
    htmlFor: "LoginPassword"
  }, "Password"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "LoginPassword",
    type: showPassword ? 'text' : 'password',
    value: passward,
    onChange: passwardChange,
    placeholder: "Enter your Passward",
    name: "password",
    autoComplete: "current-password",
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_19__["default"], {
      position: "end"
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
      "aria-label": "toggle password visibility",
      onClick: handleClickShowPassword
    }, showPassword ? __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_23___default.a, null) : __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_24___default.a, null)))
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "submit",
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.productButton,
    size: "small"
  }, "Submit")))), __jsx("div", {
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.typeLogin
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.anchorLink,
    component: "h6",
    variant: "h6"
  }, "Signup With Me"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_27___default.a, {
    href: "/signup"
  }, __jsx("a", null, " Click Here "))), __jsx("div", {
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.typeLogin
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.anchorLink,
    component: "h6",
    variant: "h6"
  }, "Forget Passward"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_27___default.a, {
    href: "/ForgetPassward"
  }, __jsx("a", null, " Click   ")))), __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "img",
    alt: "Login",
    image: _Component_asset_loginImage_png__WEBPACK_IMPORTED_MODULE_33___default.a,
    title: "Login with me",
    className: _Component_css_Login_module_scss__WEBPACK_IMPORTED_MODULE_31___default.a.cardImage
  })))), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_28__["default"], {
    open: open,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    autoHideDuration: 60000,
    onClose: handleClose
  }, __jsx(Alert, {
    onClose: handleClose,
    show: ShowAlertError,
    severity: authdata.error ? "error" : 'success'
  })));
}

_s(Login, "FVgC9fthhHFHydaG+/S5R/asP+I=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_29__["useRouter"]];
});

_c2 = Login;

var _c, _c2;

$RefreshReg$(_c, "Alert");
$RefreshReg$(_c2, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Mb2dpbi5qcyJdLCJuYW1lcyI6WyJzaWduSU4iLCJ1c2VyRGF0YSIsInJlcXVlc3QiLCJMT0dJTl9NVVRBVElPTiIsIkFsZXJ0IiwicHJvcHMiLCJfX2h0bWwiLCJzaG93IiwiTG9naW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwicGFzc3dhcmQiLCJzZXRQYXNzd2FyZCIsIm9wZW4iLCJzZXRPcGVuIiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsImF1dGhkYXRhIiwic2V0QXV0aFRva2VuIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiZm9ybVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2dpbiIsImF1dGhUb2tlbiIsInVzZXIiLCJ1c2VySWQiLCJ1c2VybmFtZSIsImVycm9yIiwicHVzaCIsInBhc3N3YXJkQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJ1c2VyTmFtZUNoYW5nZSIsImhhbmRsZUNsaWNrU2hvd1Bhc3N3b3JkIiwiaGFuZGxlQ2xvc2UiLCJTaG93QWxlcnRFcnJvciIsInJlc3BvbnNlIiwiZXJyb3JzIiwibWVzc2FnZSIsInN0eWxlIiwiY29udGFpbmVyQm94Iiwicm9vdCIsImlubmVyQ2FyZCIsImRldGFpbHMiLCJjYXJkQ29udGVudElubmVyIiwidHlwZUg1IiwidHlwZUgzIiwiZm9ybSIsInRleHRDb250cm9sIiwicHJvZHVjdEJ1dHRvbiIsInR5cGVMb2dpbiIsImFuY2hvckxpbmsiLCJsb2dpbkltYWdlIiwiY2FyZEltYWdlIiwidmVydGljYWwiLCJob3Jpem9udGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QixPQUFsQixHQUEwQjtBQUF6RixJQUxOLENBbkZKLENBREo7QUE2Rkg7O0dBckp1QjNCLEs7VUFDTkUsc0Q7OztNQURNRixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxMb2dpbi5qcy5jMzFiMjQxODE3OWY0MTJlNTkxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnO1xyXG5pbXBvcnQgTXVpQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcbmltcG9ydCBGaWxsZWRJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GaWxsZWRJbnB1dCc7XHJcbmltcG9ydCBPdXRsaW5lZElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL091dGxpbmVkSW5wdXQnO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0JztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eSc7XHJcbmltcG9ydCBWaXNpYmlsaXR5T2ZmIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaXNpYmlsaXR5T2ZmJztcclxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vQ29tcG9uZW50L2Nzcy9Mb2dpbi5tb2R1bGUuc2NzcydcclxuXHJcbi8vIHdpdGggU1dSIGFuZCBncmFwaHFsLXJlcXVlc3RcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XHJcbmltcG9ydCBsb2dpbkltYWdlIGZyb20gJy4uL0NvbXBvbmVudC9hc3NldC9sb2dpbkltYWdlLnBuZydcclxuIFxyXG5pbXBvcnQge0xPR0lOX01VVEFUSU9OfSBmcm9tIFwiLi4vQ29tcG9uZW50L2dyYXBoYWxRdXJleVwiXHJcblxyXG4gIGNvbnN0IHNpZ25JTiA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuICByZXF1ZXN0KCdodHRwczovL3d3dy5yYWpkZWVwc2luZ2guZGV2L2dyYXBocWwnLCBMT0dJTl9NVVRBVElPTiwgdXNlckRhdGEpO1xyXG4gIH07XHJcblxyXG5mdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG4gICAgcmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9ICB2YXJpYW50PVwiZmlsbGVkXCIgey4uLnByb3BzfSA+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb3BzLnNob3cgfX0+PC9kaXY+IFxyXG4gICAgICAgICAgICA8L011aUFsZXJ0PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbihwcm9wcykge1xyXG4gICAgY29uc3Qgcm91dGVyPSB1c2VSb3V0ZXIoKVxyXG4gICAgLy8gc2lnbklOXHJcbiAgICBjb25zdCBbcGFzc3dhcmQsIHNldFBhc3N3YXJkXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFthdXRoZGF0YSwgc2V0QXV0aFRva2VuXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YT0gYXdhaXQgc2lnbklOKHsgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJuYW1lXCI6IHVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IHBhc3N3YXJkXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBdXRoVG9rZW4oKCk9PnsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7ZGF0YX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhUb2tlblwiLCBkYXRhLmxvZ2luLmF1dGhUb2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgZGF0YS5sb2dpbi51c2VyLnVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkaXNwbGF5TmFtZVwiLGRhdGEubG9naW4udXNlci51c2VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBdXRoVG9rZW4oKCk9PnsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtlcnJvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIHNldE9wZW4oKCk9PnsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZSBcclxuICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKCFkYXRhPT09XCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcGFzc3dhcmRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFBhc3N3YXJkKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgdXNlck5hbWVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJOYW1lKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlQ2xpY2tTaG93UGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93UGFzc3dvcmQodHJ1ZSkgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHsgICAgICBcclxuICAgICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICBjb25zdCBTaG93QWxlcnRFcnJvcj0gKGF1dGhkYXRhLmVycm9yKT8gYXV0aGRhdGEuZXJyb3IucmVzcG9uc2UuZXJyb3JzWzBdLm1lc3NhZ2U6J3N1Ym1pdCdcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8TmV4dFNlb1xyXG4gICAgICAgICAgICB0aXRsZT1cIkxvZ2luIC0tIFdlbGNvbWUgQmFjayBcIlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxvZ2luICBwYWdlIFwiXHJcbiAgICAvPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyQm94fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17c3R5bGUucm9vdH0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbm5lckNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZGV0YWlsc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtzdHlsZS5jYXJkQ29udGVudElubmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlLnR5cGVINX0gY29tcG9uZW50PVwiaDZcIiB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2VsY29tZSBCYWNrIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlLnR5cGVIM30gY29tcG9uZW50PVwiaDNcIiB2YXJpYW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSm9pbiBXaXRoIE1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlLmZvcm19IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIG9uQ2hhbmdlPXt1c2VyTmFtZUNoYW5nZX0gIGF1dG9Db21wbGV0ZT1cInVzZXJuYW1lXCIgaWQ9XCJ1c2VyRmllbGRcIiBjbGFzc05hbWU9e3N0eWxlLnRleHRDb250cm9sfSBwbGFjZWhvbGRlcj0nRW50ZXIgWW91ciBFbWFpbCBPciBVc2VyIE5hbWUgICAnIGxhYmVsPVwiIEVtYWlsIE9yIFVzZXIgTmFtZSBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtzdHlsZS50ZXh0Q29udHJvbH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cIkxvZ2luUGFzc3dvcmRcIj5QYXNzd29yZDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiTG9naW5QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ge3Nob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3YXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwYXNzd2FyZENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBQYXNzd2FyZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInRvZ2dsZSBwYXNzd29yZCB2aXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja1Nob3dQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gPFZpc2liaWxpdHkgLz4gOiA8VmlzaWJpbGl0eU9mZiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUucHJvZHVjdEJ1dHRvbn0gc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnR5cGVMb2dpbn0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGUuYW5jaG9yTGlua30gIGNvbXBvbmVudD1cImg2XCIgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWdudXAgV2l0aCBNZSAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgIGhyZWY9Jy9zaWdudXAnPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBDbGljayBIZXJlIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudHlwZUxvZ2lufT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtzdHlsZS5hbmNob3JMaW5rfSAgY29tcG9uZW50PVwiaDZcIiB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yZ2V0IFBhc3N3YXJkICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgaHJlZj0nL0ZvcmdldFBhc3N3YXJkJz4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gQ2xpY2sgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17bG9naW5JbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTG9naW4gd2l0aCBtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmNhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPFNuYWNrYmFyIG9wZW49e29wZW59IGFuY2hvck9yaWdpbj17IFxyXG4gICAgICAgICAgICAgICAgICAgIHsgICAgdmVydGljYWw6ICd0b3AnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17NjAwMDB9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSAgc2hvdz17U2hvd0FsZXJ0RXJyb3J9IHNldmVyaXR5PSB7KGF1dGhkYXRhLmVycm9yKT8gXCJlcnJvclwiOidzdWNjZXNzJ30+PC9BbGVydD5cclxuICAgICAgICAgICAgICA8L1NuYWNrYmFyPiBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==