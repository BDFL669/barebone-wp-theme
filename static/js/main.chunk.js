(this["webpackJsonpbarebones"] = this["webpackJsonpbarebones"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _templates_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/Home */ "./src/templates/Home.js");
/* harmony import */ var _templates_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/About */ "./src/templates/About.js");
/* harmony import */ var _templates_Single__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/Single */ "./src/templates/Single.js");
/* harmony import */ var _styling_Navbar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styling/Navbar.css */ "./src/styling/Navbar.css");
/* harmony import */ var _styling_Navbar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styling_Navbar_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\barebones\\react-src\\src\\App.js";


// pages




function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "nav-link",
    to: "/wordpress/index.php/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "nav-link",
    to: "/wordpress/index.php/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "nav-link",
    to: "/wordpress/index.php/single/:slug",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "nav-link",
    to: "/wordpress/index.php/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Routes"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/wordpress/index.php/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 56
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/wordpress/index.php/about",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_About__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 61
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/wordpress/index.php/single/:slug",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_Single__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 68
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }))));
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/context/Context.js":
/*!********************************!*\
  !*** ./src/context/Context.js ***!
  \********************************/
/*! exports provided: Consumer, Provider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\barebones\\react-src\\src\\context\\Context.js";



const storeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
const Consumer = storeContext.Consumer;
const Provider = props => {
  const params = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  const [term, setTerm] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [slug, setSlug] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [restType, setRestType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [catid, setCatid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [route, setRoute] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [posts, setPosts] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [comments, setComments] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [currentPage, setCurrentPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const [totalPages, setTotalPages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [commentFields, setCommentFields] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    fullName: '',
    email: '',
    website: '',
    comment: ''
  });
  const [appError, setAppError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [commentErrors, setCommentErrors] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setRestType(getRestType(params.path));
    setRoute(params.path);
    setSlug(params.slug ? params.slug : '');
    setTerm(params.term ? params.term : '');
    setCatid(params.catid ? params.catid : '');
  }, [params]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getPosts(buildUrl());
  }, [restType, currentPage, catid]);
  const getRestType = path => {
    let restType = 'post';
    switch (path) {
      case '/page/:slug':
        restType = 'page';
        break;
      case '/search/:term':
        restType = 'search';
        break;
      case '/category/:catid':
        restType = 'category';
        break;
      case '/post/:slug':
      default:
        restType = 'post';
        break;
    }
    return restType;
  };
  const updateTerm = term => {
    setTerm(term);
  };
  const updateCommentErrors = errors => {
    setCommentErrors(errors);
  };
  const submitSearch = () => {
    setRestType('search');
    setCurrentPage(1);
    props.router.history.push('/search/' + term);
  };
  const updateCommentFields = (key, val) => {
    setCommentFields(prevFields => ({
      ...prevFields,
      [key]: val
    }));
  };
  const submitComment = () => {
    const postdata = {
      post: posts[0].id,
      author_name: commentFields.fullName,
      author_email: commentFields.email,
      author_url: commentFields.website,
      content: commentFields.comment
    };
    axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('index.php/wp-json/wp/v2/comments', postdata).then(response => {
      const cmnt = response.data;
      cmnt.waiting = 'Your comment is waiting approval';
      setComments(prevComments => [...prevComments, cmnt]);
    }).catch(error => {
      const err = [];
      err.push(error.message);
      setCommentErrors(err);
    });
  };
  const buildUrl = () => {
    let url = 'index.php/wp-json/wp/v2/';
    switch (restType) {
      case 'page':
        url += 'pages/?slug=';
        url += slug;
        break;
      case 'search':
        url += 'search/?s=';
        url += term;
        url += '&page=' + currentPage;
        break;
      case 'category':
        url += 'posts?categories=';
        url += catid;
        url += '&page=' + currentPage;
        break;
      case 'post':
      default:
        url += slug ? 'posts/?slug=' + slug : 'posts/?page=' + currentPage;
        break;
    }
    return url;
  };
  const getComments = id => {
    const url = 'index.php/wp-json/wp/v2/comments?post=' + id;
    axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(response => {
      setComments(response.data);
    }).catch(error => {
      console.log(error);
    });
  };
  const getPosts = url => {
    axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('http://localhost/wordpress/wp-json/wp/v2/posts').then(response => {
      setPosts(response.data);
      setTotalPages(response.headers['x-wp-totalpages']);
      if (route === '/post/:slug' && response.data[0]) {
        getComments(response.data[0].id);
      }
    }).catch(error => {
      console.log(error);
      setAppError('An unexpected error occurred');
    });
  };
  const nextClicked = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };
  const previousClicked = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(storeContext.Provider, {
    value: {
      term,
      slug,
      restType,
      catid,
      route,
      posts,
      comments,
      currentPage,
      totalPages,
      commentFields,
      appError,
      commentErrors,
      nextClicked,
      previousClicked,
      submitSearch,
      updateTerm,
      submitComment,
      updateCommentFields,
      updateCommentErrors
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "./src/context/WithConsumer.js":
/*!*************************************!*\
  !*** ./src/context/WithConsumer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./src/context/Context.js");
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\barebones\\react-src\\src\\context\\WithConsumer.js";


function WithConsumer(WrappedComponent) {
  return function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_1__["Consumer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    }, ctx => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, Object.assign({}, props, {
      context: ctx,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }
    })));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (WithConsumer);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _templates_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/Home */ "./src/templates/Home.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\barebones\\react-src\\src\\index.js";







const rootElement = document.getElementById('root');
react_dom_client__WEBPACK_IMPORTED_MODULE_1___default.a.createRoot(rootElement).render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
})));
_serviceWorker__WEBPACK_IMPORTED_MODULE_6__["unregister"]();

/***/ }),

/***/ "./src/partials/About.js":
/*!*******************************!*\
  !*** ./src/partials/About.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styling_About_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styling/About.css */ "./src/styling/About.css");
/* harmony import */ var _styling_About_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styling_About_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\barebones\\react-src\\src\\partials\\About.js";


const About = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "About Me!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Immersed in the world of full-stack development, I channel my passion into crafting captivating blogging sites. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 122
    }
  }), "My expertise spans React, enabling me to weave technical prowess with imaginative flair. Merging my front-end skills, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 249
    }
  }), "I sculpt intuitive UIs that enthrall users. Meanwhile, my backend proficiency and RESTful API knowledge ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 362
    }
  }), "ensure streamlined data management and flawless interactions... "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Read More"));
};
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/partials/Hero.js":
/*!******************************!*\
  !*** ./src/partials/Hero.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources_hero_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/hero.png */ "./src/resources/hero.png");
/* harmony import */ var _resources_hero_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_hero_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styling_Hero_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styling/Hero.css */ "./src/styling/Hero.css");
/* harmony import */ var _styling_Hero_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styling_Hero_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\barebones\\react-src\\src\\partials\\Hero.js";



const Hero = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _resources_hero_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "my-hero",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Wordpress Theme"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "A Chance to Express Myself"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "Visit Blog")));
};
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/partials/PostMeta.js":
/*!**********************************!*\
  !*** ./src/partials/PostMeta.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_WithConsumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/WithConsumer */ "./src/context/WithConsumer.js");
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\barebones\\react-src\\src\\partials\\PostMeta.js";




const PostMeta = _ref => {
  let {
    index,
    context
  } = _ref;
  const posts = () => context.posts;
  const item = posts()[index];
  let catLink = '';
  if (item.categories) {
    catLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 20
      }
    }, "Under ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: '/category/' + item.categories[0],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 19
      }
    }, item.category_name));
  }
  let theMeta = '';
  if (item.type === 'post') {
    theMeta = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post-meta",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 20
      }
    }, "Published:  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
      format: "MM/DD/YYYY",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, item.date), ", Written by ", item.author_name, ", ", catLink);
  }
  return theMeta;
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_context_WithConsumer__WEBPACK_IMPORTED_MODULE_3__["default"])(PostMeta));

/***/ }),

/***/ "./src/partials/TheLoop.js":
/*!*********************************!*\
  !*** ./src/partials/TheLoop.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_WithConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/WithConsumer */ "./src/context/WithConsumer.js");
/* harmony import */ var _ThePost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThePost */ "./src/partials/ThePost.js");
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\barebones\\react-src\\src\\partials\\TheLoop.js";



const TheLoop = _ref => {
  let {
    context
  } = _ref;
  const posts = () => context.posts;
  const pos = posts();
  let results = '';
  if (context.appError) {
    results = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app-error",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, context.appError);
  } else {
    if (pos.length === 0) {
      results = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "no-results",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 19
        }
      }, "no results");
    } else {
      if (Array.isArray(pos)) {
        results = pos.map(function (item, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ThePost__WEBPACK_IMPORTED_MODULE_2__["default"], {
            key: i,
            index: i,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 20
            }
          });
        });
      }
      ;
    }
  }
  return results;
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_context_WithConsumer__WEBPACK_IMPORTED_MODULE_1__["default"])(TheLoop));

/***/ }),

/***/ "./src/partials/ThePost.js":
/*!*********************************!*\
  !*** ./src/partials/ThePost.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _context_WithConsumer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/WithConsumer */ "./src/context/WithConsumer.js");
/* harmony import */ var _PostMeta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostMeta */ "./src/partials/PostMeta.js");
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\barebones\\react-src\\src\\partials\\ThePost.js";




const ThePost = _ref => {
  let {
    index,
    context
  } = _ref;
  const posts = () => context.posts;
  const item = posts()[index];
  let linkPrefix = item.type === 'page' ? '/page/' : '/post/';
  let theContent = '';
  switch (context.route) {
    case '/': //if homepage,
    case '/search/:term': //or if search
    case '/category/:catid':
      //or if search
      theContent = item.excerpt.rendered; //show excerpt only
      break;
    default:
      //for single, pages - show entire content
      theContent = item.content.rendered;
      break;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: 'post-id-' + item.id,
    className: 'post-item',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: linkPrefix + item.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, item.title.rendered)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "hhhoapy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostMeta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    index: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-content",
    dangerouslySetInnerHTML: {
      __html: theContent
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_context_WithConsumer__WEBPACK_IMPORTED_MODULE_2__["default"])(ThePost));

/***/ }),

/***/ "./src/resources/hero.png":
/*!********************************!*\
  !*** ./src/resources/hero.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/hero.f9c862ce.png";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
// [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' ||
// 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}
function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.');

            // Execute callback
            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');

            // Execute callback
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}
function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');
    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}
function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/styling/About.css":
/*!*******************************!*\
  !*** ./src/styling/About.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styling/Hero.css":
/*!******************************!*\
  !*** ./src/styling/Hero.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styling/Navbar.css":
/*!********************************!*\
  !*** ./src/styling/Navbar.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/templates/About.js":
/*!********************************!*\
  !*** ./src/templates/About.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\barebones\\react-src\\src\\templates\\About.js";

const About = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, "this is the page component");
};
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/templates/Home.js":
/*!*******************************!*\
  !*** ./src/templates/Home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/Hero */ "./src/partials/Hero.js");
/* harmony import */ var _partials_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/About */ "./src/partials/About.js");
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\barebones\\react-src\\src\\templates\\Home.js";



function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_About__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }));
}

/***/ }),

/***/ "./src/templates/Single.js":
/*!*********************************!*\
  !*** ./src/templates/Single.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _partials_TheLoop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/TheLoop */ "./src/partials/TheLoop.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/Context */ "./src/context/Context.js");
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\barebones\\react-src\\src\\templates\\Single.js";




const Single = props => {
  //let params = useParams();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_Context__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_TheLoop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Single);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\themes\barebones\react-src\src\index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map