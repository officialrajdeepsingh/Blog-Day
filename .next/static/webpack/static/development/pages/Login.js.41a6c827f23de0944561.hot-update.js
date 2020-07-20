webpackHotUpdate("static\\development\\pages\\Login.js",{

/***/ "./Component/graphalQurey.js":
/*!***********************************!*\
  !*** ./Component/graphalQurey.js ***!
  \***********************************/
/*! exports provided: POST_QUERY, POST_READ, POST_HEADER, default, POST_COMMENT, PAGE_QUERY, POST_SEARCH, SIGNUP_MUTATION, COMMENT_MUTATION, LOGIN_MUTATION, FORGET_PASSWARD_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_QUERY", function() { return POST_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_READ", function() { return POST_READ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_HEADER", function() { return POST_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_COMMENT", function() { return POST_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_QUERY", function() { return PAGE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_SEARCH", function() { return POST_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_MUTATION", function() { return SIGNUP_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENT_MUTATION", function() { return COMMENT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_MUTATION", function() { return LOGIN_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORGET_PASSWARD_MUTATION", function() { return FORGET_PASSWARD_MUTATION; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["query GET_PAGE($id: ID!) {       \n  page(id: $id) {\n      content\n      title\n      featuredImage {\n        altText\n        sourceUrl(size: LARGE)\n        id\n      }\n    }\n  \n }"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["query GET_POST($id: ID!) {\n  post(id: $id) {\n    id\n    title\n    slug\n    date\n    postId\n    featuredImage {\n      altText\n      sourceUrl\n    }\n    author {\n      userId\n      name\n    }\n    comments {\n      nodes {\n        ...CommentFields\n        replies: children {\n          nodes {\n            ...CommentFields\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment CommentFields on Comment {\n  id\n  approved\n  content\n  author {\n    ... on CommentAuthor {\n      name\n    }\n  }\n}"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["query Menu {\n  __typename\n menu(id:\"TWVudToz\") {\n    id\n    name\n    slug\n     menuItems {\n        nodes {\n          label\n          menuItemId\n          id\n          url\n          connectedObject {\n            __typename\n            ... on Page {\n              id\n              title\n              slug\n            }\n            ... on Post {\n              id\n              title\n            }\n          }\n        }\n      }\n  }\n}"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["query GET_POST($id: ID!) {\n    post(id: $id) {\n       id\n       commentCount\n       title\n       content\n       dateGmt\n       modifiedGmt\n       slug\n       date\n       excerpt\n       commentStatus\n       featuredImage {\n         altText\n         sourceUrl\n         title\n       }\n       categories {\n         edges {\n           node {\n             name\n           }\n         }\n       }\n       author {\n         name\n         avatar {\n           url\n         }\n       }\n       categories {\n        nodes {\n          posts {\n            nodes {\n              title\n              id\n              slug\n              featuredImage{\n                sourceUrl\n                altText\n              }\n            }\n          }\n        }\n      }\n     }\n   }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["query postData {\n  generalSettings {\n    url\n    description\n    timezone\n    title\n  }\n\n  __typename\n  posts{\n  edges{\n    node {\n      id\n      title\n      slug\n      excerpt\n      categories {\n        nodes {\n          name\n          id\n        }\n      }\n      featuredImage {\n          altText\n          title\n          sourceUrl        \n      }\n    }\n    }\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var POST_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var POST_READ = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());
var POST_HEADER = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());
var POST_FOOTER = "{\n menu(id:\"TWVudToyMw==\") {\n    id\n    name\n    slug\n     menuItems {\n        nodes {\n          label\n          menuItemId\n          id\n          url\n          connectedObject {\n            __typename\n            ... on Page {\n              id\n              title\n              slug\n            }\n            ... on Post {\n              id\n              title\n            }\n          }\n        }\n      }\n  }\n}";
/* harmony default export */ __webpack_exports__["default"] = (POST_FOOTER);
var POST_COMMENT = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject4());
var PAGE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject5());
var POST_SEARCH = "query Search($search:String!) {\n  posts(where: {search: $search}) {\n  nodes {\n      id\n      slug\n      title\n      featuredImage {\n      sourceUrl\n      altText\n      }\n      author {\n          name\n      }\n  }\n  }\n}";
var SIGNUP_MUTATION = "mutation MyMutation($userData: RegisterUserInput!) {\n  registerUser(input: $userData) {\n    clientMutationId\n    user {\n      email\n      id\n      jwtAuthToken\n      userId\n      username\n    }\n  }\n}";
var COMMENT_MUTATION = "\nmutation CREATE_COMMENT($input: CreateCommentInput!) {\n    createComment(input: $input ) {\n        success\n        clientMutationId\n    }\n}\n";
var LOGIN_MUTATION = "mutation LoginUser($username : String!, $password : String!) {\n  login( input: {\n    clientMutationId:\"uniqueId\"\n    username: $username\n    password: $password\n  } ) {\n    authToken\n    user {\n      userId\n      username\n      name\n    }\n  }\n}";
var FORGET_PASSWARD_MUTATION = "\nmutation MyMutation($getUserName:String!) {\n  __typename\n  sendPasswordResetEmail(input: {clientMutationId: \"sendPassward\", username: $getUserName}) {\n    clientMutationId\n  }\n}\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnQvZ3JhcGhhbFF1cmV5LmpzIl0sIm5hbWVzIjpbIlBPU1RfUVVFUlkiLCJncWwiLCJQT1NUX1JFQUQiLCJQT1NUX0hFQURFUiIsIlBPU1RfRk9PVEVSIiwiUE9TVF9DT01NRU5UIiwiUEFHRV9RVUVSWSIsIlBPU1RfU0VBUkNIIiwiU0lHTlVQX01VVEFUSU9OIiwiQ09NTUVOVF9NVVRBVElPTiIsIkxPR0lOX01VVEFUSU9OIiwiRk9SR0VUX1BBU1NXQVJEX01VVEFUSU9OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFUSxJQUFNQSxVQUFVLEdBQUdDLGtEQUFILG1CQUFoQjtBQWdDRCxJQUFNQyxTQUFTLEdBQUdELGtEQUFILG9CQUFmO0FBZ0RBLElBQU1FLFdBQVcsR0FBRUYsa0RBQUYsb0JBQWpCO0FBNkJQLElBQU1HLFdBQVcsMmJBQWpCO0FBNEJlQSwwRUFBZjtBQUdPLElBQU1DLFlBQVksR0FBR0osa0RBQUgsb0JBQWxCO0FBdUNBLElBQU1LLFVBQVUsR0FBR0wsa0RBQUgsb0JBQWhCO0FBZUEsSUFBTU0sV0FBVyw2T0FBakI7QUFtQkEsSUFBTUMsZUFBZSx1TkFBckI7QUFnQkEsSUFBTUMsZ0JBQWdCLHlKQUF0QjtBQVdBLElBQU1DLGNBQWMsd1FBQXBCO0FBaUJBLElBQU1DLHdCQUF3QixpTUFBOUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXExvZ2luLmpzLjQxYTZjODI3ZjIzZGUwOTQ0NTYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmV4cG9ydCAgY29uc3QgUE9TVF9RVUVSWSA9IGdxbGBxdWVyeSBwb3N0RGF0YSB7XHJcbiAgZ2VuZXJhbFNldHRpbmdzIHtcclxuICAgIHVybFxyXG4gICAgZGVzY3JpcHRpb25cclxuICAgIHRpbWV6b25lXHJcbiAgICB0aXRsZVxyXG4gIH1cclxuXHJcbiAgX190eXBlbmFtZVxyXG4gIHBvc3Rze1xyXG4gIGVkZ2Vze1xyXG4gICAgbm9kZSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIHNsdWdcclxuICAgICAgZXhjZXJwdFxyXG4gICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICBub2RlcyB7XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmZWF0dXJlZEltYWdlIHtcclxuICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICBzb3VyY2VVcmwgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YCBcclxuXHJcbmV4cG9ydCBjb25zdCBQT1NUX1JFQUQgPSBncWxgcXVlcnkgR0VUX1BPU1QoJGlkOiBJRCEpIHtcclxuICAgIHBvc3QoaWQ6ICRpZCkge1xyXG4gICAgICAgaWRcclxuICAgICAgIGNvbW1lbnRDb3VudFxyXG4gICAgICAgdGl0bGVcclxuICAgICAgIGNvbnRlbnRcclxuICAgICAgIGRhdGVHbXRcclxuICAgICAgIG1vZGlmaWVkR210XHJcbiAgICAgICBzbHVnXHJcbiAgICAgICBkYXRlXHJcbiAgICAgICBleGNlcnB0XHJcbiAgICAgICBjb21tZW50U3RhdHVzXHJcbiAgICAgICBmZWF0dXJlZEltYWdlIHtcclxuICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICBzb3VyY2VVcmxcclxuICAgICAgICAgdGl0bGVcclxuICAgICAgIH1cclxuICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgICBhdXRob3Ige1xyXG4gICAgICAgICBuYW1lXHJcbiAgICAgICAgIGF2YXRhciB7XHJcbiAgICAgICAgICAgdXJsXHJcbiAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgIG5vZGVzIHtcclxuICAgICAgICAgIHBvc3RzIHtcclxuICAgICAgICAgICAgbm9kZXMge1xyXG4gICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgZmVhdHVyZWRJbWFnZXtcclxuICAgICAgICAgICAgICAgIHNvdXJjZVVybFxyXG4gICAgICAgICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgIH1cclxuICAgfWBcclxuXHJcbmV4cG9ydCBjb25zdCBQT1NUX0hFQURFUj0gZ3FsYHF1ZXJ5IE1lbnUge1xyXG4gIF9fdHlwZW5hbWVcclxuIG1lbnUoaWQ6XCJUV1Z1ZFRvelwiKSB7XHJcbiAgICBpZFxyXG4gICAgbmFtZVxyXG4gICAgc2x1Z1xyXG4gICAgIG1lbnVJdGVtcyB7XHJcbiAgICAgICAgbm9kZXMge1xyXG4gICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIG1lbnVJdGVtSWRcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICAgIGNvbm5lY3RlZE9iamVjdCB7XHJcbiAgICAgICAgICAgIF9fdHlwZW5hbWVcclxuICAgICAgICAgICAgLi4uIG9uIFBhZ2Uge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLi4uIG9uIFBvc3Qge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxufWBcclxuXHJcbmNvbnN0IFBPU1RfRk9PVEVSPSBge1xyXG4gbWVudShpZDpcIlRXVnVkVG95TXc9PVwiKSB7XHJcbiAgICBpZFxyXG4gICAgbmFtZVxyXG4gICAgc2x1Z1xyXG4gICAgIG1lbnVJdGVtcyB7XHJcbiAgICAgICAgbm9kZXMge1xyXG4gICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIG1lbnVJdGVtSWRcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICAgIGNvbm5lY3RlZE9iamVjdCB7XHJcbiAgICAgICAgICAgIF9fdHlwZW5hbWVcclxuICAgICAgICAgICAgLi4uIG9uIFBhZ2Uge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLi4uIG9uIFBvc3Qge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxufWBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBPU1RfRk9PVEVSXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFBPU1RfQ09NTUVOVCA9IGdxbGBxdWVyeSBHRVRfUE9TVCgkaWQ6IElEISkge1xyXG4gIHBvc3QoaWQ6ICRpZCkge1xyXG4gICAgaWRcclxuICAgIHRpdGxlXHJcbiAgICBzbHVnXHJcbiAgICBkYXRlXHJcbiAgICBwb3N0SWRcclxuICAgIGZlYXR1cmVkSW1hZ2Uge1xyXG4gICAgICBhbHRUZXh0XHJcbiAgICAgIHNvdXJjZVVybFxyXG4gICAgfVxyXG4gICAgYXV0aG9yIHtcclxuICAgICAgdXNlcklkXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICAgIGNvbW1lbnRzIHtcclxuICAgICAgbm9kZXMge1xyXG4gICAgICAgIC4uLkNvbW1lbnRGaWVsZHNcclxuICAgICAgICByZXBsaWVzOiBjaGlsZHJlbiB7XHJcbiAgICAgICAgICBub2RlcyB7XHJcbiAgICAgICAgICAgIC4uLkNvbW1lbnRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZyYWdtZW50IENvbW1lbnRGaWVsZHMgb24gQ29tbWVudCB7XHJcbiAgaWRcclxuICBhcHByb3ZlZFxyXG4gIGNvbnRlbnRcclxuICBhdXRob3Ige1xyXG4gICAgLi4uIG9uIENvbW1lbnRBdXRob3Ige1xyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IFBBR0VfUVVFUlkgPSBncWxgcXVlcnkgR0VUX1BBR0UoJGlkOiBJRCEpIHsgICAgICAgXHJcbiAgcGFnZShpZDogJGlkKSB7XHJcbiAgICAgIGNvbnRlbnRcclxuICAgICAgdGl0bGVcclxuICAgICAgZmVhdHVyZWRJbWFnZSB7XHJcbiAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgIHNvdXJjZVVybChzaXplOiBMQVJHRSlcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiB9YFxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUE9TVF9TRUFSQ0ggPSBgcXVlcnkgU2VhcmNoKCRzZWFyY2g6U3RyaW5nISkge1xyXG4gIHBvc3RzKHdoZXJlOiB7c2VhcmNoOiAkc2VhcmNofSkge1xyXG4gIG5vZGVzIHtcclxuICAgICAgaWRcclxuICAgICAgc2x1Z1xyXG4gICAgICB0aXRsZVxyXG4gICAgICBmZWF0dXJlZEltYWdlIHtcclxuICAgICAgc291cmNlVXJsXHJcbiAgICAgIGFsdFRleHRcclxuICAgICAgfVxyXG4gICAgICBhdXRob3Ige1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIH1cclxufWBcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05VUF9NVVRBVElPTiA9YG11dGF0aW9uIE15TXV0YXRpb24oJHVzZXJEYXRhOiBSZWdpc3RlclVzZXJJbnB1dCEpIHtcclxuICByZWdpc3RlclVzZXIoaW5wdXQ6ICR1c2VyRGF0YSkge1xyXG4gICAgY2xpZW50TXV0YXRpb25JZFxyXG4gICAgdXNlciB7XHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIGlkXHJcbiAgICAgIGp3dEF1dGhUb2tlblxyXG4gICAgICB1c2VySWRcclxuICAgICAgdXNlcm5hbWVcclxuICAgIH1cclxuICB9XHJcbn1gXHJcblxyXG5cclxuXHJcbiAgIFxyXG5leHBvcnQgY29uc3QgQ09NTUVOVF9NVVRBVElPTiA9IGBcclxubXV0YXRpb24gQ1JFQVRFX0NPTU1FTlQoJGlucHV0OiBDcmVhdGVDb21tZW50SW5wdXQhKSB7XHJcbiAgICBjcmVhdGVDb21tZW50KGlucHV0OiAkaW5wdXQgKSB7XHJcbiAgICAgICAgc3VjY2Vzc1xyXG4gICAgICAgIGNsaWVudE11dGF0aW9uSWRcclxuICAgIH1cclxufVxyXG5gXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTl9NVVRBVElPTiA9YG11dGF0aW9uIExvZ2luVXNlcigkdXNlcm5hbWUgOiBTdHJpbmchLCAkcGFzc3dvcmQgOiBTdHJpbmchKSB7XHJcbiAgbG9naW4oIGlucHV0OiB7XHJcbiAgICBjbGllbnRNdXRhdGlvbklkOlwidW5pcXVlSWRcIlxyXG4gICAgdXNlcm5hbWU6ICR1c2VybmFtZVxyXG4gICAgcGFzc3dvcmQ6ICRwYXNzd29yZFxyXG4gIH0gKSB7XHJcbiAgICBhdXRoVG9rZW5cclxuICAgIHVzZXIge1xyXG4gICAgICB1c2VySWRcclxuICAgICAgdXNlcm5hbWVcclxuICAgICAgbmFtZVxyXG4gICAgfVxyXG4gIH1cclxufWBcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEZPUkdFVF9QQVNTV0FSRF9NVVRBVElPTiA9YFxyXG5tdXRhdGlvbiBNeU11dGF0aW9uKCRnZXRVc2VyTmFtZTpTdHJpbmchKSB7XHJcbiAgX190eXBlbmFtZVxyXG4gIHNlbmRQYXNzd29yZFJlc2V0RW1haWwoaW5wdXQ6IHtjbGllbnRNdXRhdGlvbklkOiBcInNlbmRQYXNzd2FyZFwiLCB1c2VybmFtZTogJGdldFVzZXJOYW1lfSkge1xyXG4gICAgY2xpZW50TXV0YXRpb25JZFxyXG4gIH1cclxufVxyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==