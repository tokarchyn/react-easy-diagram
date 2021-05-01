(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[195],{

/***/ 6562:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8944);
/* harmony import */ var _theme_SkipToContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8994);
/* harmony import */ var _theme_AnnouncementBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3263);
/* harmony import */ var _theme_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1269);
/* harmony import */ var _theme_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9781);
/* harmony import */ var _theme_LayoutProviders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3619);
/* harmony import */ var _theme_LayoutHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7707);
/* harmony import */ var _theme_hooks_useKeyboardNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3471);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Layout(props){var children=props.children,noFooter=props.noFooter,wrapperClassName=props.wrapperClassName;(0,_theme_hooks_useKeyboardNavigation__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_LayoutProviders__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_LayoutHead__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z,props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_SkipToContent__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_AnnouncementBar__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)('main-wrapper',wrapperClassName)},children),!noFooter&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Footer__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z,null));}/* harmony default export */ __webpack_exports__["Z"] = (Layout);

/***/ }),

/***/ 5305:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(9603);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(8944);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js
var Layout = __webpack_require__(6562);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(5638);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(1142);
;// CONCATENATED MODULE: ./src/pages/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"heroBanner":"heroBanner_3P7f","buttons":"buttons_1r9m","features":"features_3azU","featureImage":"featureImage_ZtzX","title":"title_3dbr","subtitle":"subtitle_3Hk7"});
;// CONCATENATED MODULE: ./src/pages/index.js
var features=[{title:'Easy to Use',imageUrl:'img/undraw_docusaurus_mountain.svg',description:/*#__PURE__*/react.createElement(react.Fragment,null,"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.")},{title:'Focus on What Matters',imageUrl:'img/undraw_docusaurus_tree.svg',description:/*#__PURE__*/react.createElement(react.Fragment,null,"Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the ",/*#__PURE__*/react.createElement("code",null,"docs")," directory.")},{title:'Powered by React',imageUrl:'img/undraw_docusaurus_react.svg',description:/*#__PURE__*/react.createElement(react.Fragment,null,"Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.")}];function Feature(_ref){var imageUrl=_ref.imageUrl,title=_ref.title,description=_ref.description;var imgUrl=(0,useBaseUrl/* default */.Z)(imageUrl);return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col col--4',styles_module.feature)},imgUrl&&/*#__PURE__*/react.createElement("div",{className:"text--center"},/*#__PURE__*/react.createElement("img",{className:styles_module.featureImage,src:imgUrl,alt:title})),/*#__PURE__*/react.createElement("h3",null,title),/*#__PURE__*/react.createElement("p",null,description));}function Home(){var context=(0,useDocusaurusContext.default)();var _context$siteConfig=context.siteConfig,siteConfig=_context$siteConfig===void 0?{}:_context$siteConfig;return/*#__PURE__*/react.createElement(Layout/* default */.Z,{title:"Build highly customazible React diagrams",description:"Open source library to build highly customazible fast React diagrams."},/*#__PURE__*/react.createElement("header",{className:(0,clsx_m/* default */.Z)('hero hero--primary',styles_module.heroBanner)},/*#__PURE__*/react.createElement("div",{className:"container"},/*#__PURE__*/react.createElement("h1",{className:(0,clsx_m/* default */.Z)('hero__title',styles_module.title)},siteConfig.title),/*#__PURE__*/react.createElement("p",{className:(0,clsx_m/* default */.Z)('hero__subtitle',styles_module.subtitle)},siteConfig.tagline),/*#__PURE__*/react.createElement("div",{className:styles_module.buttons},/*#__PURE__*/react.createElement(Link/* default */.Z,{className:(0,clsx_m/* default */.Z)('button button--primary',styles_module.getStarted),to:(0,useBaseUrl/* default */.Z)('docs/')},"Get Started")))),/*#__PURE__*/react.createElement("main",null,features&&features.length>0&&/*#__PURE__*/react.createElement("section",{className:styles_module.features},/*#__PURE__*/react.createElement("div",{className:"container"},/*#__PURE__*/react.createElement("div",{className:"row"},features.map(function(props,idx){return/*#__PURE__*/react.createElement(Feature,(0,esm_extends/* default */.Z)({key:idx},props));}))))));}/* harmony default export */ var pages = (Home);

/***/ })

}]);