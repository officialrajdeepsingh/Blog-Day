webpackHotUpdate("static\\development\\pages\\_app.js",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnQvZ3JhcGhhbFF1cmV5LmpzIl0sIm5hbWVzIjpbIlBPU1RfUVVFUlkiLCJncWwiLCJQT1NUX1JFQUQiLCJQT1NUX0hFQURFUiIsIlBPU1RfRk9PVEVSIiwiUE9TVF9DT01NRU5UIiwiUEFHRV9RVUVSWSIsIlBPU1RfU0VBUkNIIiwiU0lHTlVQX01VVEFUSU9OIiwiQ09NTUVOVF9NVVRBVElPTiIsIkxPR0lOX01VVEFUSU9OIiwiRk9SR0VUX1BBU1NXQVJEX01VVEFUSU9OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFUSxJQUFNQSxVQUFVLEdBQUdDLGtEQUFILG1CQUFoQjtBQWdDRCxJQUFNQyxTQUFTLEdBQUdELGtEQUFILG9CQUFmO0FBZ0RBLElBQU1FLFdBQVcsR0FBRUYsa0RBQUYsb0JBQWpCO0FBNkJQLElBQU1HLFdBQVcsMmJBQWpCO0FBNEJlQSwwRUFBZjtBQUdPLElBQU1DLFlBQVksR0FBR0osa0RBQUgsb0JBQWxCO0FBdUNBLElBQU1LLFVBQVUsR0FBR0wsa0RBQUgsb0JBQWhCO0FBZUEsSUFBTU0sV0FBVyw2T0FBakI7QUFtQkEsSUFBTUMsZUFBZSx1TkFBckI7QUFnQkEsSUFBTUMsZ0JBQWdCLHlKQUF0QjtBQVdBLElBQU1DLGNBQWMsd1FBQXBCO0FBaUJBLElBQU1DLHdCQUF3QixpTUFBOUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNDFhNmM4MjdmMjNkZTA5NDQ1NjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5cclxuZXhwb3J0ICBjb25zdCBQT1NUX1FVRVJZID0gZ3FsYHF1ZXJ5IHBvc3REYXRhIHtcclxuICBnZW5lcmFsU2V0dGluZ3Mge1xyXG4gICAgdXJsXHJcbiAgICBkZXNjcmlwdGlvblxyXG4gICAgdGltZXpvbmVcclxuICAgIHRpdGxlXHJcbiAgfVxyXG5cclxuICBfX3R5cGVuYW1lXHJcbiAgcG9zdHN7XHJcbiAgZWRnZXN7XHJcbiAgICBub2RlIHtcclxuICAgICAgaWRcclxuICAgICAgdGl0bGVcclxuICAgICAgc2x1Z1xyXG4gICAgICBleGNlcnB0XHJcbiAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgIG5vZGVzIHtcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZlYXR1cmVkSW1hZ2Uge1xyXG4gICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIHNvdXJjZVVybCAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1gIFxyXG5cclxuZXhwb3J0IGNvbnN0IFBPU1RfUkVBRCA9IGdxbGBxdWVyeSBHRVRfUE9TVCgkaWQ6IElEISkge1xyXG4gICAgcG9zdChpZDogJGlkKSB7XHJcbiAgICAgICBpZFxyXG4gICAgICAgY29tbWVudENvdW50XHJcbiAgICAgICB0aXRsZVxyXG4gICAgICAgY29udGVudFxyXG4gICAgICAgZGF0ZUdtdFxyXG4gICAgICAgbW9kaWZpZWRHbXRcclxuICAgICAgIHNsdWdcclxuICAgICAgIGRhdGVcclxuICAgICAgIGV4Y2VycHRcclxuICAgICAgIGNvbW1lbnRTdGF0dXNcclxuICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xyXG4gICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgIHNvdXJjZVVybFxyXG4gICAgICAgICB0aXRsZVxyXG4gICAgICAgfVxyXG4gICAgICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgICAgIGF1dGhvciB7XHJcbiAgICAgICAgIG5hbWVcclxuICAgICAgICAgYXZhdGFyIHtcclxuICAgICAgICAgICB1cmxcclxuICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgICAgY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgbm9kZXMge1xyXG4gICAgICAgICAgcG9zdHMge1xyXG4gICAgICAgICAgICBub2RlcyB7XHJcbiAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICBmZWF0dXJlZEltYWdle1xyXG4gICAgICAgICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgfVxyXG4gICB9YFxyXG5cclxuZXhwb3J0IGNvbnN0IFBPU1RfSEVBREVSPSBncWxgcXVlcnkgTWVudSB7XHJcbiAgX190eXBlbmFtZVxyXG4gbWVudShpZDpcIlRXVnVkVG96XCIpIHtcclxuICAgIGlkXHJcbiAgICBuYW1lXHJcbiAgICBzbHVnXHJcbiAgICAgbWVudUl0ZW1zIHtcclxuICAgICAgICBub2RlcyB7XHJcbiAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgbWVudUl0ZW1JZFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgICAgY29ubmVjdGVkT2JqZWN0IHtcclxuICAgICAgICAgICAgX190eXBlbmFtZVxyXG4gICAgICAgICAgICAuLi4gb24gUGFnZSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuLi4gb24gUG9zdCB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG59YFxyXG5cclxuY29uc3QgUE9TVF9GT09URVI9IGB7XHJcbiBtZW51KGlkOlwiVFdWdWRUb3lNdz09XCIpIHtcclxuICAgIGlkXHJcbiAgICBuYW1lXHJcbiAgICBzbHVnXHJcbiAgICAgbWVudUl0ZW1zIHtcclxuICAgICAgICBub2RlcyB7XHJcbiAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgbWVudUl0ZW1JZFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgICAgY29ubmVjdGVkT2JqZWN0IHtcclxuICAgICAgICAgICAgX190eXBlbmFtZVxyXG4gICAgICAgICAgICAuLi4gb24gUGFnZSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuLi4gb24gUG9zdCB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUE9TVF9GT09URVJcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUE9TVF9DT01NRU5UID0gZ3FsYHF1ZXJ5IEdFVF9QT1NUKCRpZDogSUQhKSB7XHJcbiAgcG9zdChpZDogJGlkKSB7XHJcbiAgICBpZFxyXG4gICAgdGl0bGVcclxuICAgIHNsdWdcclxuICAgIGRhdGVcclxuICAgIHBvc3RJZFxyXG4gICAgZmVhdHVyZWRJbWFnZSB7XHJcbiAgICAgIGFsdFRleHRcclxuICAgICAgc291cmNlVXJsXHJcbiAgICB9XHJcbiAgICBhdXRob3Ige1xyXG4gICAgICB1c2VySWRcclxuICAgICAgbmFtZVxyXG4gICAgfVxyXG4gICAgY29tbWVudHMge1xyXG4gICAgICBub2RlcyB7XHJcbiAgICAgICAgLi4uQ29tbWVudEZpZWxkc1xyXG4gICAgICAgIHJlcGxpZXM6IGNoaWxkcmVuIHtcclxuICAgICAgICAgIG5vZGVzIHtcclxuICAgICAgICAgICAgLi4uQ29tbWVudEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnJhZ21lbnQgQ29tbWVudEZpZWxkcyBvbiBDb21tZW50IHtcclxuICBpZFxyXG4gIGFwcHJvdmVkXHJcbiAgY29udGVudFxyXG4gIGF1dGhvciB7XHJcbiAgICAuLi4gb24gQ29tbWVudEF1dGhvciB7XHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgUEFHRV9RVUVSWSA9IGdxbGBxdWVyeSBHRVRfUEFHRSgkaWQ6IElEISkgeyAgICAgICBcclxuICBwYWdlKGlkOiAkaWQpIHtcclxuICAgICAgY29udGVudFxyXG4gICAgICB0aXRsZVxyXG4gICAgICBmZWF0dXJlZEltYWdlIHtcclxuICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgc291cmNlVXJsKHNpemU6IExBUkdFKVxyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuIH1gXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQT1NUX1NFQVJDSCA9IGBxdWVyeSBTZWFyY2goJHNlYXJjaDpTdHJpbmchKSB7XHJcbiAgcG9zdHMod2hlcmU6IHtzZWFyY2g6ICRzZWFyY2h9KSB7XHJcbiAgbm9kZXMge1xyXG4gICAgICBpZFxyXG4gICAgICBzbHVnXHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIGZlYXR1cmVkSW1hZ2Uge1xyXG4gICAgICBzb3VyY2VVcmxcclxuICAgICAgYWx0VGV4dFxyXG4gICAgICB9XHJcbiAgICAgIGF1dGhvciB7XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICB9XHJcbiAgfVxyXG59YFxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU0lHTlVQX01VVEFUSU9OID1gbXV0YXRpb24gTXlNdXRhdGlvbigkdXNlckRhdGE6IFJlZ2lzdGVyVXNlcklucHV0ISkge1xyXG4gIHJlZ2lzdGVyVXNlcihpbnB1dDogJHVzZXJEYXRhKSB7XHJcbiAgICBjbGllbnRNdXRhdGlvbklkXHJcbiAgICB1c2VyIHtcclxuICAgICAgZW1haWxcclxuICAgICAgaWRcclxuICAgICAgand0QXV0aFRva2VuXHJcbiAgICAgIHVzZXJJZFxyXG4gICAgICB1c2VybmFtZVxyXG4gICAgfVxyXG4gIH1cclxufWBcclxuXHJcblxyXG5cclxuICAgXHJcbmV4cG9ydCBjb25zdCBDT01NRU5UX01VVEFUSU9OID0gYFxyXG5tdXRhdGlvbiBDUkVBVEVfQ09NTUVOVCgkaW5wdXQ6IENyZWF0ZUNvbW1lbnRJbnB1dCEpIHtcclxuICAgIGNyZWF0ZUNvbW1lbnQoaW5wdXQ6ICRpbnB1dCApIHtcclxuICAgICAgICBzdWNjZXNzXHJcbiAgICAgICAgY2xpZW50TXV0YXRpb25JZFxyXG4gICAgfVxyXG59XHJcbmBcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOX01VVEFUSU9OID1gbXV0YXRpb24gTG9naW5Vc2VyKCR1c2VybmFtZSA6IFN0cmluZyEsICRwYXNzd29yZCA6IFN0cmluZyEpIHtcclxuICBsb2dpbiggaW5wdXQ6IHtcclxuICAgIGNsaWVudE11dGF0aW9uSWQ6XCJ1bmlxdWVJZFwiXHJcbiAgICB1c2VybmFtZTogJHVzZXJuYW1lXHJcbiAgICBwYXNzd29yZDogJHBhc3N3b3JkXHJcbiAgfSApIHtcclxuICAgIGF1dGhUb2tlblxyXG4gICAgdXNlciB7XHJcbiAgICAgIHVzZXJJZFxyXG4gICAgICB1c2VybmFtZVxyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG59YFxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRk9SR0VUX1BBU1NXQVJEX01VVEFUSU9OID1gXHJcbm11dGF0aW9uIE15TXV0YXRpb24oJGdldFVzZXJOYW1lOlN0cmluZyEpIHtcclxuICBfX3R5cGVuYW1lXHJcbiAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChpbnB1dDoge2NsaWVudE11dGF0aW9uSWQ6IFwic2VuZFBhc3N3YXJkXCIsIHVzZXJuYW1lOiAkZ2V0VXNlck5hbWV9KSB7XHJcbiAgICBjbGllbnRNdXRhdGlvbklkXHJcbiAgfVxyXG59XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9