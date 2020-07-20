module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Component/css/ForgetPassward.module.scss":
/*!**************************************************!*\
  !*** ./Component/css/ForgetPassward.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "ForgetPassward_form__1sVPa",
	"layout": "ForgetPassward_layout__1Myw2",
	"button": "ForgetPassward_button__BDyrw"
};


/***/ }),

/***/ "./Component/graphalQurey.js":
/*!***********************************!*\
  !*** ./Component/graphalQurey.js ***!
  \***********************************/
/*! exports provided: POST_QUERY, POST_READ, POST_HEADER, default, POST_COMMENT, PAGE_QUERY, POST_SEARCH, SIGNUP_MUTATION, COMMENT_MUTATION, LOGIN_MUTATION, FORGET_PASSWARD_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_QUERY", function() { return POST_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_READ", function() { return POST_READ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_HEADER", function() { return POST_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_COMMENT", function() { return POST_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_QUERY", function() { return PAGE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_SEARCH", function() { return POST_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_MUTATION", function() { return SIGNUP_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENT_MUTATION", function() { return COMMENT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_MUTATION", function() { return LOGIN_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORGET_PASSWARD_MUTATION", function() { return FORGET_PASSWARD_MUTATION; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const POST_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query postData {
  generalSettings {
    url
    description
    timezone
    title
  }

  __typename
  posts{
  edges{
    node {
      id
      title
      slug
      excerpt
      categories {
        nodes {
          name
          id
        }
      }
      featuredImage {
          altText
          title
          sourceUrl        
      }
    }
    }
  }
}`;
const POST_READ = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query GET_POST($id: ID!) {
    post(id: $id) {
       id
       commentCount
       title
       content
       dateGmt
       modifiedGmt
       slug
       date
       excerpt
       commentStatus
       featuredImage {
         altText
         sourceUrl
         title
       }
       categories {
         edges {
           node {
             name
           }
         }
       }
       author {
         name
         avatar {
           url
         }
       }
       categories {
        nodes {
          posts {
            nodes {
              title
              id
              slug
              featuredImage{
                sourceUrl
                altText
              }
            }
          }
        }
      }
     }
   }`;
const POST_HEADER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query Menu {
  __typename
 menu(id:"TWVudToz") {
    id
    name
    slug
     menuItems {
        nodes {
          label
          menuItemId
          id
          url
          connectedObject {
            __typename
            ... on Page {
              id
              title
              slug
            }
            ... on Post {
              id
              title
            }
          }
        }
      }
  }
}`;
const POST_FOOTER = `{
 menu(id:"TWVudToyMw==") {
    id
    name
    slug
     menuItems {
        nodes {
          label
          menuItemId
          id
          url
          connectedObject {
            __typename
            ... on Page {
              id
              title
              slug
            }
            ... on Post {
              id
              title
            }
          }
        }
      }
  }
}`;
/* harmony default export */ __webpack_exports__["default"] = (POST_FOOTER);
const POST_COMMENT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query GET_POST($id: ID!) {
  post(id: $id) {
    id
    title
    slug
    date
    postId
    featuredImage {
      altText
      sourceUrl
    }
    author {
      userId
      name
    }
    comments {
      nodes {
        ...CommentFields
        replies: children {
          nodes {
            ...CommentFields
          }
        }
      }
    }
  }
}

fragment CommentFields on Comment {
  id
  approved
  content
  author {
    ... on CommentAuthor {
      name
    }
  }
}`;
const PAGE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`query GET_PAGE($id: ID!) {       
  page(id: $id) {
      content
      title
      featuredImage {
        altText
        sourceUrl(size: LARGE)
        id
      }
    }
  
 }`;
const POST_SEARCH = `query Search($search:String!) {
  posts(where: {search: $search}) {
  nodes {
      id
      slug
      title
      featuredImage {
      sourceUrl
      altText
      }
      author {
          name
      }
  }
  }
}`;
const SIGNUP_MUTATION = `mutation MyMutation($userData: RegisterUserInput!) {
  registerUser(input: $userData) {
    clientMutationId
    user {
      email
      id
      jwtAuthToken
      userId
      username
    }
  }
}`;
const COMMENT_MUTATION = `
mutation CREATE_COMMENT($input: CreateCommentInput!) {
    createComment(input: $input ) {
        success
        clientMutationId
    }
}
`;
const LOGIN_MUTATION = `mutation LoginUser($username : String!, $password : String!) {
  login( input: {
    clientMutationId:"uniqueId"
    username: $username
    password: $password
  } ) {
    authToken
    user {
      userId
      username
      name
    }
  }
}`;
const FORGET_PASSWARD_MUTATION = `
mutation MyMutation($getUserName:String!) {
  __typename
  sendPasswordResetEmail(input: {clientMutationId: "sendPassward", username: $getUserName}) {
    clientMutationId
  }
}
`;

/***/ }),

/***/ "./pages/ForgetPassward.js":
/*!*********************************!*\
  !*** ./pages/ForgetPassward.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForgetPassward; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Component_css_ForgetPassward_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Component/css/ForgetPassward.module.scss */ "./Component/css/ForgetPassward.module.scss");
/* harmony import */ var _Component_css_ForgetPassward_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Component_css_ForgetPassward_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Component_graphalQurey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Component/graphalQurey */ "./Component/graphalQurey.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const signIN = userData => {
  return Object(graphql_request__WEBPACK_IMPORTED_MODULE_8__["request"])('https://www.rajdeepsingh.dev/graphql', _Component_graphalQurey__WEBPACK_IMPORTED_MODULE_7__["FORGET_PASSWARD_MUTATION"], userData);
};

function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9___default.a, _extends({
    elevation: 6,
    variant: "filled"
  }, props), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: props.show
    }
  }));
}

function ForgetPassward(props) {
  const [gmail, setGmail] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({});
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({});
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const formSubmit = async event => {
    event.preventDefault();

    if (gmail) {
      const data = await signIN({
        "getUserName": gmail
      }).then(data => {
        setData(() => {
          return {
            data
          };
        });
      }).catch(error => {
        setError(() => {
          return {
            error
          };
        });
      });
    }

    setOpen(() => {
      return true;
    });
  };

  console.log(data, ' data ');
  console.log(error, ' error ');

  const passwardChange = event => {
    setGmail(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showError = error.error ? error.error.response.errors[0].message : " Send Email On Your Register Email ";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    onSubmit: formSubmit,
    className: _Component_css_ForgetPassward_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.form,
    noValidate: true,
    autoComplete: "on"
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: _Component_css_ForgetPassward_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.layout
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    htmlFor: "RestPassword"
  }, "Enter Register Gmail"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "RestPassword",
    type: "gmail",
    onChange: passwardChange,
    placeholder: "Enter your gamil",
    name: "gmail",
    autoComplete: "gmail"
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    type: "submit",
    className: _Component_css_ForgetPassward_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.button,
    size: "small"
  }, "Reset")), __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
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

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** multi ./pages/ForgetPassward.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Nextjs\old-app\pages\ForgetPassward.js */"./pages/ForgetPassward.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/lab/Alert":
/*!*****************************************!*\
  !*** external "@material-ui/lab/Alert" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50L2Nzcy9Gb3JnZXRQYXNzd2FyZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnQvZ3JhcGhhbFF1cmV5LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL0ZvcmdldFBhc3N3YXJkLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC1yZXF1ZXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlBPU1RfUVVFUlkiLCJncWwiLCJQT1NUX1JFQUQiLCJQT1NUX0hFQURFUiIsIlBPU1RfRk9PVEVSIiwiUE9TVF9DT01NRU5UIiwiUEFHRV9RVUVSWSIsIlBPU1RfU0VBUkNIIiwiU0lHTlVQX01VVEFUSU9OIiwiQ09NTUVOVF9NVVRBVElPTiIsIkxPR0lOX01VVEFUSU9OIiwiRk9SR0VUX1BBU1NXQVJEX01VVEFUSU9OIiwic2lnbklOIiwidXNlckRhdGEiLCJyZXF1ZXN0IiwiQWxlcnQiLCJwcm9wcyIsIl9faHRtbCIsInNob3ciLCJGb3JnZXRQYXNzd2FyZCIsImdtYWlsIiwic2V0R21haWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJlcnJvciIsInNldEVycm9yIiwib3BlbiIsInNldE9wZW4iLCJmb3JtU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJwYXNzd2FyZENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xvc2UiLCJzaG93RXJyb3IiLCJyZXNwb25zZSIsImVycm9ycyIsIm1lc3NhZ2UiLCJzdHlsZSIsImZvcm0iLCJsYXlvdXQiLCJidXR0b24iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFB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SVMsb0JBQWdCLEVBQUUsS0FKM0I7QUFJa0MsV0FBTyxFQUFFVjtBQUozQyxLQUtVLE1BQUMsS0FBRDtBQUFPLFdBQU8sRUFBRUEsV0FBaEI7QUFBOEIsUUFBSSxFQUFHQyxTQUFyQztBQUFpRCxZQUFRLEVBQUVmLEtBQUssQ0FBQ0EsS0FBTixHQUFhLE9BQWIsR0FBcUI7QUFBaEYsSUFMVixDQXJCQSxDQURKO0FBK0JILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdELHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxGb3JnZXRQYXNzd2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvcm1cIjogXCJGb3JnZXRQYXNzd2FyZF9mb3JtX18xc1ZQYVwiLFxuXHRcImxheW91dFwiOiBcIkZvcmdldFBhc3N3YXJkX2xheW91dF9fMU15dzJcIixcblx0XCJidXR0b25cIjogXCJGb3JnZXRQYXNzd2FyZF9idXR0b25fX0JEeXJ3XCJcbn07XG4iLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmV4cG9ydCAgY29uc3QgUE9TVF9RVUVSWSA9IGdxbGBxdWVyeSBwb3N0RGF0YSB7XHJcbiAgZ2VuZXJhbFNldHRpbmdzIHtcclxuICAgIHVybFxyXG4gICAgZGVzY3JpcHRpb25cclxuICAgIHRpbWV6b25lXHJcbiAgICB0aXRsZVxyXG4gIH1cclxuXHJcbiAgX190eXBlbmFtZVxyXG4gIHBvc3Rze1xyXG4gIGVkZ2Vze1xyXG4gICAgbm9kZSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIHNsdWdcclxuICAgICAgZXhjZXJwdFxyXG4gICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICBub2RlcyB7XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmZWF0dXJlZEltYWdlIHtcclxuICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICBzb3VyY2VVcmwgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YCBcclxuXHJcbmV4cG9ydCBjb25zdCBQT1NUX1JFQUQgPSBncWxgcXVlcnkgR0VUX1BPU1QoJGlkOiBJRCEpIHtcclxuICAgIHBvc3QoaWQ6ICRpZCkge1xyXG4gICAgICAgaWRcclxuICAgICAgIGNvbW1lbnRDb3VudFxyXG4gICAgICAgdGl0bGVcclxuICAgICAgIGNvbnRlbnRcclxuICAgICAgIGRhdGVHbXRcclxuICAgICAgIG1vZGlmaWVkR210XHJcbiAgICAgICBzbHVnXHJcbiAgICAgICBkYXRlXHJcbiAgICAgICBleGNlcnB0XHJcbiAgICAgICBjb21tZW50U3RhdHVzXHJcbiAgICAgICBmZWF0dXJlZEltYWdlIHtcclxuICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICBzb3VyY2VVcmxcclxuICAgICAgICAgdGl0bGVcclxuICAgICAgIH1cclxuICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgICBhdXRob3Ige1xyXG4gICAgICAgICBuYW1lXHJcbiAgICAgICAgIGF2YXRhciB7XHJcbiAgICAgICAgICAgdXJsXHJcbiAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgIG5vZGVzIHtcclxuICAgICAgICAgIHBvc3RzIHtcclxuICAgICAgICAgICAgbm9kZXMge1xyXG4gICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgZmVhdHVyZWRJbWFnZXtcclxuICAgICAgICAgICAgICAgIHNvdXJjZVVybFxyXG4gICAgICAgICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgIH1cclxuICAgfWBcclxuXHJcbmV4cG9ydCBjb25zdCBQT1NUX0hFQURFUj0gZ3FsYHF1ZXJ5IE1lbnUge1xyXG4gIF9fdHlwZW5hbWVcclxuIG1lbnUoaWQ6XCJUV1Z1ZFRvelwiKSB7XHJcbiAgICBpZFxyXG4gICAgbmFtZVxyXG4gICAgc2x1Z1xyXG4gICAgIG1lbnVJdGVtcyB7XHJcbiAgICAgICAgbm9kZXMge1xyXG4gICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIG1lbnVJdGVtSWRcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICAgIGNvbm5lY3RlZE9iamVjdCB7XHJcbiAgICAgICAgICAgIF9fdHlwZW5hbWVcclxuICAgICAgICAgICAgLi4uIG9uIFBhZ2Uge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLi4uIG9uIFBvc3Qge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxufWBcclxuXHJcbmNvbnN0IFBPU1RfRk9PVEVSPSBge1xyXG4gbWVudShpZDpcIlRXVnVkVG95TXc9PVwiKSB7XHJcbiAgICBpZFxyXG4gICAgbmFtZVxyXG4gICAgc2x1Z1xyXG4gICAgIG1lbnVJdGVtcyB7XHJcbiAgICAgICAgbm9kZXMge1xyXG4gICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIG1lbnVJdGVtSWRcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICAgIGNvbm5lY3RlZE9iamVjdCB7XHJcbiAgICAgICAgICAgIF9fdHlwZW5hbWVcclxuICAgICAgICAgICAgLi4uIG9uIFBhZ2Uge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLi4uIG9uIFBvc3Qge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxufWBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBPU1RfRk9PVEVSXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFBPU1RfQ09NTUVOVCA9IGdxbGBxdWVyeSBHRVRfUE9TVCgkaWQ6IElEISkge1xyXG4gIHBvc3QoaWQ6ICRpZCkge1xyXG4gICAgaWRcclxuICAgIHRpdGxlXHJcbiAgICBzbHVnXHJcbiAgICBkYXRlXHJcbiAgICBwb3N0SWRcclxuICAgIGZlYXR1cmVkSW1hZ2Uge1xyXG4gICAgICBhbHRUZXh0XHJcbiAgICAgIHNvdXJjZVVybFxyXG4gICAgfVxyXG4gICAgYXV0aG9yIHtcclxuICAgICAgdXNlcklkXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICAgIGNvbW1lbnRzIHtcclxuICAgICAgbm9kZXMge1xyXG4gICAgICAgIC4uLkNvbW1lbnRGaWVsZHNcclxuICAgICAgICByZXBsaWVzOiBjaGlsZHJlbiB7XHJcbiAgICAgICAgICBub2RlcyB7XHJcbiAgICAgICAgICAgIC4uLkNvbW1lbnRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZyYWdtZW50IENvbW1lbnRGaWVsZHMgb24gQ29tbWVudCB7XHJcbiAgaWRcclxuICBhcHByb3ZlZFxyXG4gIGNvbnRlbnRcclxuICBhdXRob3Ige1xyXG4gICAgLi4uIG9uIENvbW1lbnRBdXRob3Ige1xyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG59YFxyXG5cclxuZXhwb3J0IGNvbnN0IFBBR0VfUVVFUlkgPSBncWxgcXVlcnkgR0VUX1BBR0UoJGlkOiBJRCEpIHsgICAgICAgXHJcbiAgcGFnZShpZDogJGlkKSB7XHJcbiAgICAgIGNvbnRlbnRcclxuICAgICAgdGl0bGVcclxuICAgICAgZmVhdHVyZWRJbWFnZSB7XHJcbiAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgIHNvdXJjZVVybChzaXplOiBMQVJHRSlcclxuICAgICAgICBpZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiB9YFxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUE9TVF9TRUFSQ0ggPSBgcXVlcnkgU2VhcmNoKCRzZWFyY2g6U3RyaW5nISkge1xyXG4gIHBvc3RzKHdoZXJlOiB7c2VhcmNoOiAkc2VhcmNofSkge1xyXG4gIG5vZGVzIHtcclxuICAgICAgaWRcclxuICAgICAgc2x1Z1xyXG4gICAgICB0aXRsZVxyXG4gICAgICBmZWF0dXJlZEltYWdlIHtcclxuICAgICAgc291cmNlVXJsXHJcbiAgICAgIGFsdFRleHRcclxuICAgICAgfVxyXG4gICAgICBhdXRob3Ige1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIH1cclxufWBcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05VUF9NVVRBVElPTiA9YG11dGF0aW9uIE15TXV0YXRpb24oJHVzZXJEYXRhOiBSZWdpc3RlclVzZXJJbnB1dCEpIHtcclxuICByZWdpc3RlclVzZXIoaW5wdXQ6ICR1c2VyRGF0YSkge1xyXG4gICAgY2xpZW50TXV0YXRpb25JZFxyXG4gICAgdXNlciB7XHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIGlkXHJcbiAgICAgIGp3dEF1dGhUb2tlblxyXG4gICAgICB1c2VySWRcclxuICAgICAgdXNlcm5hbWVcclxuICAgIH1cclxuICB9XHJcbn1gXHJcblxyXG5cclxuXHJcbiAgIFxyXG5leHBvcnQgY29uc3QgQ09NTUVOVF9NVVRBVElPTiA9IGBcclxubXV0YXRpb24gQ1JFQVRFX0NPTU1FTlQoJGlucHV0OiBDcmVhdGVDb21tZW50SW5wdXQhKSB7XHJcbiAgICBjcmVhdGVDb21tZW50KGlucHV0OiAkaW5wdXQgKSB7XHJcbiAgICAgICAgc3VjY2Vzc1xyXG4gICAgICAgIGNsaWVudE11dGF0aW9uSWRcclxuICAgIH1cclxufVxyXG5gXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTl9NVVRBVElPTiA9YG11dGF0aW9uIExvZ2luVXNlcigkdXNlcm5hbWUgOiBTdHJpbmchLCAkcGFzc3dvcmQgOiBTdHJpbmchKSB7XHJcbiAgbG9naW4oIGlucHV0OiB7XHJcbiAgICBjbGllbnRNdXRhdGlvbklkOlwidW5pcXVlSWRcIlxyXG4gICAgdXNlcm5hbWU6ICR1c2VybmFtZVxyXG4gICAgcGFzc3dvcmQ6ICRwYXNzd29yZFxyXG4gIH0gKSB7XHJcbiAgICBhdXRoVG9rZW5cclxuICAgIHVzZXIge1xyXG4gICAgICB1c2VySWRcclxuICAgICAgdXNlcm5hbWVcclxuICAgICAgbmFtZVxyXG4gICAgfVxyXG4gIH1cclxufWBcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEZPUkdFVF9QQVNTV0FSRF9NVVRBVElPTiA9YFxyXG5tdXRhdGlvbiBNeU11dGF0aW9uKCRnZXRVc2VyTmFtZTpTdHJpbmchKSB7XHJcbiAgX190eXBlbmFtZVxyXG4gIHNlbmRQYXNzd29yZFJlc2V0RW1haWwoaW5wdXQ6IHtjbGllbnRNdXRhdGlvbklkOiBcInNlbmRQYXNzd2FyZFwiLCB1c2VybmFtZTogJGdldFVzZXJOYW1lfSkge1xyXG4gICAgY2xpZW50TXV0YXRpb25JZFxyXG4gIH1cclxufVxyXG5gIiwiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9Db21wb25lbnQvY3NzL0ZvcmdldFBhc3N3YXJkLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcclxuaW1wb3J0IHtGT1JHRVRfUEFTU1dBUkRfTVVUQVRJT059IGZyb20gXCIuLi9Db21wb25lbnQvZ3JhcGhhbFF1cmV5XCJcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XHJcblxyXG5pbXBvcnQgTXVpQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcblxyXG5cclxuY29uc3Qgc2lnbklOID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gIHJlcXVlc3QoJ2h0dHBzOi8vd3d3LnJhamRlZXBzaW5naC5kZXYvZ3JhcGhxbCcsIEZPUkdFVF9QQVNTV0FSRF9NVVRBVElPTiwgdXNlckRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIEFsZXJ0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gIHZhcmlhbnQ9XCJmaWxsZWRcIiB7Li4ucHJvcHN9ID4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMuc2hvdyB9fT48L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvTXVpQWxlcnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcmdldFBhc3N3YXJkKHByb3BzKSB7XHJcbiAgICBjb25zdCBbZ21haWwsIHNldEdtYWlsXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBmb3JtU3VibWl0PSBhc3luYyAoZXZlbnQpPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGlmKGdtYWlsKXtcclxuICAgICAgICAgICAgY29uc3QgZGF0YT0gYXdhaXQgc2lnbklOKHsgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXCJnZXRVc2VyTmFtZVwiOiBnbWFpbFxyXG4gICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKGRhdGEpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSgoKT0+eyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7ZGF0YX0gXHJcbiAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcigoKT0+eyAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtlcnJvcn0gXHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE9wZW4oKCk9PnsgIFxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZSBcclxuICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGRhdGEgLCAnIGRhdGEgJylcclxuICAgIGNvbnNvbGUubG9nKGVycm9yICwgJyBlcnJvciAnKVxyXG4gICAgY29uc3QgcGFzc3dhcmRDaGFuZ2U9KGV2ZW50KT0+e1xyXG4gICAgICAgIHNldEdtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgIGNvbnN0IGhhbmRsZUNsb3NlID0oKT0+e1xyXG4gICAgICAgICAgICBzZXRPcGVuKGZhbHNlKVxyXG4gICB9XHJcblxyXG4gICBjb25zdCBzaG93RXJyb3I9IGVycm9yLmVycm9yPyBlcnJvci5lcnJvci5yZXNwb25zZS5lcnJvcnNbMF0ubWVzc2FnZSA6IFwiIFNlbmQgRW1haWwgT24gWW91ciBSZWdpc3RlciBFbWFpbCBcIlxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlLmZvcm19IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib25cIj5cclxuICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e3N0eWxlLmxheW91dH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cIlJlc3RQYXNzd29yZFwiPkVudGVyIFJlZ2lzdGVyIEdtYWlsPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJSZXN0UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9ICdnbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cGFzc3dhcmRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgZ2FtaWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZ21haWxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259IHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFJlc2V0IFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPFNuYWNrYmFyIG9wZW49e29wZW59IGFuY2hvck9yaWdpbj17IFxyXG4gICAgICAgICAgICAgICAgICAgIHsgICAgdmVydGljYWw6ICd0b3AnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17NjAwMDB9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSAgc2hvdz17IHNob3dFcnJvciB9IHNldmVyaXR5PXtlcnJvci5lcnJvcj8gXCJlcnJvclwiOlwic3VjY2Vzc1wifT48L0FsZXJ0PlxyXG4gICAgICAgICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXJlcXVlc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==