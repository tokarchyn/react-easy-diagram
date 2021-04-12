(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92);
/* harmony import */ var _theme_SkipToContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);
/* harmony import */ var _theme_AnnouncementBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(105);
/* harmony import */ var _theme_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(111);
/* harmony import */ var _theme_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(106);
/* harmony import */ var _theme_LayoutProviders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(112);
/* harmony import */ var _theme_LayoutHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(113);
/* harmony import */ var _theme_hooks_useKeyboardNavigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(107);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_9__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Layout(props){const{children,noFooter,wrapperClassName}=props;Object(_theme_hooks_useKeyboardNavigation__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_LayoutProviders__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_LayoutHead__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_SkipToContent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_AnnouncementBar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_Navbar__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('main-wrapper',wrapperClassName)},children),!noFooter&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_Footer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],null));}/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(101);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(100);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_7__);
const features=[{title:'Easy to Use',imageUrl:'img/undraw_docusaurus_mountain.svg',description:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.")},{title:'Focus on What Matters',imageUrl:'img/undraw_docusaurus_tree.svg',description:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,"Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code",null,"docs")," directory.")},{title:'Powered by React',imageUrl:'img/undraw_docusaurus_react.svg',description:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,"Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.")}];function Feature({imageUrl,title,description}){const imgUrl=Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(imageUrl);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('col col--4',_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.feature)},imgUrl&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"text--center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.featureImage,src:imgUrl,alt:title})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,description));}function Home(){const context=Object(_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_5__["default"])();const{siteConfig={}}=context;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],{title:`Build highly customazible React diagrams`,description:"Open source library to build highly customazible fast React diagrams."},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('hero hero--primary',_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.heroBanner)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('hero__title',_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.title)},siteConfig.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('hero__subtitle',_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.subtitle)},siteConfig.tagline),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.buttons},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],{className:Object(clsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('button button--primary',_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.getStarted),to:Object(_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])('docs/')},"Get Started")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main",null,features&&features.length>0&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.features},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"row"},features.map((props,idx)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Feature,Object(C_Users_tokar_Desktop_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({key:idx},props))))))));}/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

}]);