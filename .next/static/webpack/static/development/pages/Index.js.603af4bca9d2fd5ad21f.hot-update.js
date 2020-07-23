webpackHotUpdate("static\\development\\pages\\Index.js",{

/***/ "./Component/Artical/Menu.js":
/*!***********************************!*\
  !*** ./Component/Artical/Menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui-popup-state/hooks */ "./node_modules/material-ui-popup-state/hooks.js");
/* harmony import */ var material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clipboard-copy */ "./node_modules/clipboard-copy/index.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(clipboard_copy__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_Menu_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/Menu.module.scss */ "./Component/css/Menu.module.scss");
/* harmony import */ var _css_Menu_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_Menu_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);



var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];












function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    elevation: 6,
    variant: "filled"
  }, props));
}

_c = Alert;

var TriggerMenu = function TriggerMenu(props) {
  _s();

  var popupState = Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_6__["usePopupState"])({
    variant: 'popover',
    popupId: 'demoMenu'
  });

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleClick = function handleClick(_ref) {
    var close = _ref.close;
    clipboard_copy__WEBPACK_IMPORTED_MODULE_8___default()("".concat(props.slug));
    setOpen(true);
    close();
  };

  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  var passHref = function passHref(event) {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdtJKTuJ3t_mjbkm0VKBFKyvLe_Kvho5oeKyLI0DT9_ujRPxA/viewform?usp=sf_link", "_blank");
  };

  return __jsx("div", null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    variant: "contained",
    className: _css_Menu_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.buttonMenu
  }, Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_6__["bindTrigger"])(popupState)), __jsx(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "54",
    height: "48",
    viewBox: "0 0 54 48"
  }, __jsx("g", {
    filter: "url(#filter0_d)"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 24C4 21.2386 6.47176 19 9.52083 19C12.5699 19 15.0417 21.2386 15.0417 24C15.0417 26.7614 12.5699 29 9.52083 29C6.47176 29 4 26.7614 4 24ZM12.8333 24C12.8333 22.3431 11.3503 21 9.52083 21C7.69139 21 6.20833 22.3431 6.20833 24C6.20833 25.6569 7.69139 27 9.52083 27C11.3503 27 12.8333 25.6569 12.8333 24ZM21.0417 24C21.0417 21.2386 23.5135 19 26.5626 19C29.6117 19 32.0834 21.2386 32.0834 24C32.0834 26.7614 29.6117 29 26.5626 29C23.5135 29 21.0417 26.7614 21.0417 24ZM29.8751 24C29.8751 22.3431 28.392 21 26.5626 21C24.7331 21 23.2501 22.3431 23.2501 24C23.2501 25.6569 24.7331 27 26.5626 27C28.392 27 29.8751 25.6569 29.8751 24ZM43.6043 19C40.5553 19 38.0835 21.2386 38.0835 24C38.0835 26.7614 40.5553 29 43.6043 29C46.6534 29 49.1252 26.7614 49.1252 24C49.1252 21.2386 46.6534 19 43.6043 19ZM43.6043 21C45.4338 21 46.9168 22.3431 46.9168 24C46.9168 25.6569 45.4338 27 43.6043 27C41.7749 27 40.2918 25.6569 40.2918 24C40.2918 22.3431 41.7749 21 43.6043 21Z",
    fill: "black"
  })), __jsx("defs", null, __jsx("filter", {
    id: "filter0_d",
    x: "-3",
    y: "0",
    width: "61",
    height: "56",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, __jsx("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), __jsx("feColorMatrix", {
    "in": "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), __jsx("feOffset", {
    dy: "4"
  }), __jsx("feGaussianBlur", {
    stdDeviation: "2"
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow"
  }), __jsx("feBlend", {
    mode: "normal",
    "in": "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape"
  }))))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_6__["bindMenu"])(popupState), {
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    className: _css_Menu_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.menu
  }), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: function onClick() {
      return handleClick(popupState);
    }
  }, __jsx("a", {
    className: _css_Menu_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.anchorLink
  }, " Share ")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/Comment/?slug=".concat(props.slug, "-").concat(props.postId),
    as: "/Comment/".concat(props.slug, "-").concat(props.postId)
  }, __jsx("a", {
    className: _css_Menu_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.anchorLink,
    target: "_blank"
  }, "  Write Comment"))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "#"
  }, __jsx("a", {
    className: _css_Menu_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.anchorLink,
    rel: "noreferrer",
    onClick: passHref,
    target: "_blank"
  }, " Report ")))), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: open,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    autoHideDuration: 6000,
    onClose: handleClose
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success"
  }, "You success the copy url and Now Share with your friend!")));
};

_s(TriggerMenu, "c1QX+A3jW+cPBV7EtIq/whCy9HY=", false, function () {
  return [material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_6__["usePopupState"]];
});

_c2 = TriggerMenu;
/* harmony default export */ __webpack_exports__["default"] = (TriggerMenu);

var _c, _c2;

$RefreshReg$(_c, "Alert");
$RefreshReg$(_c2, "TriggerMenu");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnQvQXJ0aWNhbC9NZW51LmpzIl0sIm5hbWVzIjpbIkFsZXJ0IiwicHJvcHMiLCJUcmlnZ2VyTWVudSIsInBvcHVwU3RhdGUiLCJ1c2VQb3B1cFN0YXRlIiwidmFyaWFudCIsInBvcHVwSWQiLCJSZWFjdCIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xpY2siLCJjbG9zZSIsImNvcHkiLCJzbHVnIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsInJlYXNvbiIsInBhc3NIcmVmIiwid2luZG93Iiwic3R5bGUiLCJidXR0b25NZW51IiwiYmluZFRyaWdnZXIiLCJiaW5kTWVudSIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIm1lbnUiLCJhbmNob3JMaW5rIiwicG9zdElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBSUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3BCLFNBQU8sTUFBQywrREFBRDtBQUFVLGFBQVMsRUFBRSxDQUFyQjtBQUF3QixXQUFPLEVBQUM7QUFBaEMsS0FBNkNBLEtBQTdDLEVBQVA7QUFDRDs7S0FGUUQsSzs7QUFJVCxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDRCxLQUFELEVBQVc7QUFBQTs7QUFDN0IsTUFBTUUsVUFBVSxHQUFHQyxtRkFBYSxDQUFDO0FBQUVDLFdBQU8sRUFBRSxTQUFYO0FBQXNCQyxXQUFPLEVBQUU7QUFBL0IsR0FBRCxDQUFoQzs7QUFENkIsd0JBR0xDLDhDQUFBLENBQWUsS0FBZixDQUhLO0FBQUE7QUFBQSxNQUd0QkMsSUFIc0I7QUFBQSxNQUdoQkMsT0FIZ0I7O0FBSzdCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWE7QUFBQSxRQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDN0JDLHlEQUFJLFdB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VUFBcEI7QUFBZ0MsVUFBTSxFQUFDO0FBQXZDLHVCQURELENBREYsQ0FaRixFQWtCRSxNQUFDLGtFQUFELFFBQ0UsTUFBQyxpREFBRDtBQUFPLFFBQUksRUFBQztBQUFaLEtBQ0c7QUFBRyxhQUFTLEVBQUVQLDREQUFLLENBQUNPLFVBQXBCO0FBQWdDLE9BQUcsRUFBQyxZQUFwQztBQUFpRCxXQUFPLEVBQUVULFFBQTFEO0FBQW9FLFVBQU0sRUFBQztBQUEzRSxnQkFESCxDQURGLENBbEJGLENBcEJGLEVBOENJLE1BQUMsbUVBQUQ7QUFBVSxRQUFJLEVBQUVULElBQWhCO0FBQXNCLGdCQUFZLEVBQzVCO0FBQUtlLGNBQVEsRUFBRSxLQUFmO0FBQ0lDLGdCQUFVLEVBQUU7QUFEaEIsS0FETjtBQUlNLG9CQUFnQixFQUFFLElBSnhCO0FBSThCLFdBQU8sRUFBRVY7QUFKdkMsS0FLUSxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUVBLFdBQWhCO0FBQTZCLFlBQVEsRUFBQztBQUF0QyxnRUFMUixDQTlDSixDQURGO0FBMERELENBbEZEOztHQUFNWixXO1VBQ2VFLDJFOzs7TUFEZkYsVztBQXNGU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXEluZGV4LmpzLjYwM2FmNGJjYTlkMmZkNWFkMjFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnXHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSdcclxuaW1wb3J0IHtcclxuICB1c2VQb3B1cFN0YXRlLFxyXG4gIGJpbmRUcmlnZ2VyLFxyXG4gIGJpbmRNZW51LFxyXG59IGZyb20gJ21hdGVyaWFsLXVpLXBvcHVwLXN0YXRlL2hvb2tzJztcclxuaW1wb3J0IFN2Z0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvbic7XHJcbmltcG9ydCBjb3B5IGZyb20gJ2NsaXBib2FyZC1jb3B5JztcclxuXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9jc3MvTWVudS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XHJcbmltcG9ydCBNdWlBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEFsZXJ0KHByb3BzKSB7XHJcbiAgcmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9IHZhcmlhbnQ9XCJmaWxsZWRcIiB7Li4ucHJvcHN9IC8+O1xyXG59XHJcblxyXG5jb25zdCBUcmlnZ2VyTWVudSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHBvcHVwU3RhdGUgPSB1c2VQb3B1cFN0YXRlKHsgdmFyaWFudDogJ3BvcG92ZXInLCBwb3B1cElkOiAnZGVtb01lbnUnIH0pXHJcbiAgXHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHtjbG9zZX0pID0+IHtcclxuICAgICAgY29weShgJHtwcm9wcy5zbHVnfWApXHJcbiAgICAgICBzZXRPcGVuKHRydWUpXHJcbiAgICAgICBjbG9zZSgpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xyXG4gICAgaWYgKHJlYXNvbiA9PT0gJ2NsaWNrYXdheScpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhc3NIcmVmID0oZXZlbnQpPT57XHJcbiAgXHJcbiAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvZS8xRkFJcFFMU2R0SktUdUozdF9tamJrbTBWS0JGS3l2TGVfS3ZobzVvZUt5TEkwRFQ5X3VqUlB4QS92aWV3Zm9ybT91c3A9c2ZfbGlua1wiICAsIFwiX2JsYW5rXCIpXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbk1lbnV9IHsuLi5iaW5kVHJpZ2dlcihwb3B1cFN0YXRlKX0+XHJcbiAgICAgICAgPFN2Z0ljb24gd2lkdGg9XCI1NFwiIGhlaWdodD1cIjQ4XCIgdmlld0JveD1cIjAgMCA1NCA0OFwiID5cclxuICAgICAgICAgICAgICAgIDxnIGZpbHRlcj1cInVybCgjZmlsdGVyMF9kKVwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk00IDI0QzQgMjEuMjM4NiA2LjQ3MTc2IDE5IDkuNTIwODMgMTlDMTIuNTY5OSAxOSAxNS4wNDE3IDIxLjIzODYgMTUuMDQxNyAyNEMxNS4wNDE3IDI2Ljc2MTQgMTIuNTY5OSAyOSA5LjUyMDgzIDI5QzYuNDcxNzYgMjkgNCAyNi43NjE0IDQgMjRaTTEyLjgzMzMgMjRDMTIuODMzMyAyMi4zNDMxIDExLjM1MDMgMjEgOS41MjA4MyAyMUM3LjY5MTM5IDIxIDYuMjA4MzMgMjIuMzQzMSA2LjIwODMzIDI0QzYuMjA4MzMgMjUuNjU2OSA3LjY5MTM5IDI3IDkuNTIwODMgMjdDMTEuMzUwMyAyNyAxMi44MzMzIDI1LjY1NjkgMTIuODMzMyAyNFpNMjEuMDQxNyAyNEMyMS4wNDE3IDIxLjIzODYgMjMuNTEzNSAxOSAyNi41NjI2IDE5QzI5LjYxMTcgMTkgMzIuMDgzNCAyMS4yMzg2IDMyLjA4MzQgMjRDMzIuMDgzNCAyNi43NjE0IDI5LjYxMTcgMjkgMjYuNTYyNiAyOUMyMy41MTM1IDI5IDIxLjA0MTcgMjYuNzYxNCAyMS4wNDE3IDI0Wk0yOS44NzUxIDI0QzI5Ljg3NTEgMjIuMzQzMSAyOC4zOTIgMjEgMjYuNTYyNiAyMUMyNC43MzMxIDIxIDIzLjI1MDEgMjIuMzQzMSAyMy4yNTAxIDI0QzIzLjI1MDEgMjUuNjU2OSAyNC43MzMxIDI3IDI2LjU2MjYgMjdDMjguMzkyIDI3IDI5Ljg3NTEgMjUuNjU2OSAyOS44NzUxIDI0Wk00My42MDQzIDE5QzQwLjU1NTMgMTkgMzguMDgzNSAyMS4yMzg2IDM4LjA4MzUgMjRDMzguMDgzNSAyNi43NjE0IDQwLjU1NTMgMjkgNDMuNjA0MyAyOUM0Ni42NTM0IDI5IDQ5LjEyNTIgMjYuNzYxNCA0OS4xMjUyIDI0QzQ5LjEyNTIgMjEuMjM4NiA0Ni42NTM0IDE5IDQzLjYwNDMgMTlaTTQzLjYwNDMgMjFDNDUuNDMzOCAyMSA0Ni45MTY4IDIyLjM0MzEgNDYuOTE2OCAyNEM0Ni45MTY4IDI1LjY1NjkgNDUuNDMzOCAyNyA0My42MDQzIDI3QzQxLjc3NDkgMjcgNDAuMjkxOCAyNS42NTY5IDQwLjI5MTggMjRDNDAuMjkxOCAyMi4zNDMxIDQxLjc3NDkgMjEgNDMuNjA0MyAyMVpcIiBmaWxsPVwiYmxhY2tcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJmaWx0ZXIwX2RcIiB4PVwiLTNcIiB5PVwiMFwiIHdpZHRoPVwiNjFcIiBoZWlnaHQ9XCI1NlwiIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzPVwic1JHQlwiPlxyXG4gICAgICAgICAgICAgICAgPGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMFwiIHJlc3VsdD1cIkJhY2tncm91bmRJbWFnZUZpeFwiLz5cclxuICAgICAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IGluPVwiU291cmNlQWxwaGFcIiB0eXBlPVwibWF0cml4XCIgdmFsdWVzPVwiMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDBcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVPZmZzZXQgZHk9XCI0XCIvPlxyXG4gICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjJcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPVwibWF0cml4XCIgdmFsdWVzPVwiMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwXCIvPlxyXG4gICAgICAgICAgICAgICAgPGZlQmxlbmQgbW9kZT1cIm5vcm1hbFwiIGluMj1cIkJhY2tncm91bmRJbWFnZUZpeFwiIHJlc3VsdD1cImVmZmVjdDFfZHJvcFNoYWRvd1wiLz5cclxuICAgICAgICAgICAgICAgIDxmZUJsZW5kIG1vZGU9XCJub3JtYWxcIiBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJlZmZlY3QxX2Ryb3BTaGFkb3dcIiByZXN1bHQ9XCJzaGFwZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZmlsdGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kZWZzPiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9TdmdJY29uPlxyXG5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgICB7Li4uYmluZE1lbnUocG9wdXBTdGF0ZSl9XHJcbiAgICAgICAgICBnZXRDb250ZW50QW5jaG9yRWw9e251bGx9XHJcbiAgICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6ICdib3R0b20nLCBob3Jpem9udGFsOiAnbGVmdCcgfX1cclxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdsZWZ0JyB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5tZW51fVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpPT5oYW5kbGVDbGljayhwb3B1cFN0YXRlKX0gPiBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZS5hbmNob3JMaW5rfT4gU2hhcmUgPC9hPlxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgPE1lbnVJdGVtID4gICBcclxuICAgICAgICAgIDxMaW5rICBocmVmPXtgL0NvbW1lbnQvP3NsdWc9JHtwcm9wcy5zbHVnfS0ke3Byb3BzLnBvc3RJZH1gfSBhcz17IGAvQ29tbWVudC8ke3Byb3BzLnNsdWd9LSR7cHJvcHMucG9zdElkfWB9PlxyXG4gICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGUuYW5jaG9yTGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+ICBXcml0ZSBDb21tZW50PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPiAgXHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICBcclxuICAgICAgICA8TWVudUl0ZW0gPiAgXHJcbiAgICAgICAgICA8TGluayAgaHJlZj1cIiNcIiAgID4gXHJcbiAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlLmFuY2hvckxpbmt9IHJlbD1cIm5vcmVmZXJyZXJcIiBvbkNsaWNrPXtwYXNzSHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCI+IFJlcG9ydCA8L2E+IFxyXG4gICAgICAgICAgPC9MaW5rPiBcclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgIFxyXG4gICAgICA8L01lbnU+XHJcbiAgICBcclxuICAgICAgICA8U25hY2tiYXIgb3Blbj17b3Blbn0gYW5jaG9yT3JpZ2luPXsgXHJcbiAgICAgICAgICAgICAgeyAgICB2ZXJ0aWNhbDogJ3RvcCcsIFxyXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyB9XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICA8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICBZb3Ugc3VjY2VzcyB0aGUgY29weSB1cmwgYW5kIE5vdyBTaGFyZSB3aXRoIHlvdXIgZnJpZW5kIVxyXG4gICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmlnZ2VyTWVudSJdLCJzb3VyY2VSb290IjoiIn0=