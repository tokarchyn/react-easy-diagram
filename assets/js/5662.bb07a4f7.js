(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[5662],{

/***/ 4200:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_AnnouncementBar; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(8944);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(4801);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useUserPreferencesContext.js
var useUserPreferencesContext = __webpack_require__(4309);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1787);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/AnnouncementBar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"announcementBar":"announcementBar_2FrG","announcementBarClose":"announcementBarClose_QGKR","announcementBarContent":"announcementBarContent_1th2","announcementBarCloseable":"announcementBarCloseable_B17v"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/AnnouncementBar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBar(){var _clsx;var _useUserPreferencesCo=(0,useUserPreferencesContext/* default */.Z)(),isAnnouncementBarClosed=_useUserPreferencesCo.isAnnouncementBarClosed,closeAnnouncementBar=_useUserPreferencesCo.closeAnnouncementBar;var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),announcementBar=_useThemeConfig.announcementBar;if(!announcementBar){return null;}var content=announcementBar.content,backgroundColor=announcementBar.backgroundColor,textColor=announcementBar.textColor,isCloseable=announcementBar.isCloseable;if(!content||isCloseable&&isAnnouncementBarClosed){return null;}return/*#__PURE__*/react.createElement("div",{className:styles_module.announcementBar,style:{backgroundColor:backgroundColor,color:textColor},role:"banner"},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(styles_module.announcementBarContent,(_clsx={},_clsx[styles_module.announcementBarCloseable]=isCloseable,_clsx))// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:content}}),isCloseable?/*#__PURE__*/react.createElement("button",{type:"button",className:styles_module.announcementBarClose,onClick:closeAnnouncementBar,"aria-label":(0,Translate/* translate */.I)({id:'theme.AnnouncementBar.closeButtonAriaLabel',message:'Close',description:'The ARIA label for close button of announcement bar'})},/*#__PURE__*/react.createElement("span",{"aria-hidden":"true"},"\xD7")):null);}/* harmony default export */ var theme_AnnouncementBar = (AnnouncementBar);

/***/ }),

/***/ 2955:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_Footer; }
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(9603);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(120);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(8944);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(4142);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(4801);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(8948);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Footer/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"footerLogoLink":"footerLogoLink_1gX9"});
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/index.js + 1 modules
var ThemedImage = __webpack_require__(8167);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLink(_ref){var to=_ref.to,href=_ref.href,label=_ref.label,prependBaseUrlToHref=_ref.prependBaseUrlToHref,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,["to","href","label","prependBaseUrlToHref"]);var toUrl=(0,useBaseUrl/* default */.Z)(to);var normalizedHref=(0,useBaseUrl/* default */.Z)(href,{forcePrependBaseUrl:true});return/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({className:"footer__link-item"},href?{href:prependBaseUrlToHref?normalizedHref:href}:{to:toUrl},props),label);}var FooterLogo=function FooterLogo(_ref2){var sources=_ref2.sources,alt=_ref2.alt;return/*#__PURE__*/react.createElement(ThemedImage/* default */.Z,{className:"footer__logo",alt:alt,sources:sources});};function Footer(){var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),footer=_useThemeConfig.footer;var _ref3=footer||{},copyright=_ref3.copyright,_ref3$links=_ref3.links,links=_ref3$links===void 0?[]:_ref3$links,_ref3$logo=_ref3.logo,logo=_ref3$logo===void 0?{}:_ref3$logo;var sources={light:(0,useBaseUrl/* default */.Z)(logo.src),dark:(0,useBaseUrl/* default */.Z)(logo.srcDark||logo.src)};if(!footer){return null;}return/*#__PURE__*/react.createElement("footer",{className:(0,clsx_m/* default */.Z)('footer',{'footer--dark':footer.style==='dark'})},/*#__PURE__*/react.createElement("div",{className:"container"},links&&links.length>0&&/*#__PURE__*/react.createElement("div",{className:"row footer__links"},links.map(function(linkItem,i){return/*#__PURE__*/react.createElement("div",{key:i,className:"col footer__col"},linkItem.title!=null?/*#__PURE__*/react.createElement("h4",{className:"footer__title"},linkItem.title):null,linkItem.items!=null&&Array.isArray(linkItem.items)&&linkItem.items.length>0?/*#__PURE__*/react.createElement("ul",{className:"footer__items"},linkItem.items.map(function(item,key){return item.html?/*#__PURE__*/react.createElement("li",{key:key,className:"footer__item"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:item.html}}):/*#__PURE__*/react.createElement("li",{key:item.href||item.to,className:"footer__item"},/*#__PURE__*/react.createElement(FooterLink,item));})):null);})),(logo||copyright)&&/*#__PURE__*/react.createElement("div",{className:"footer__bottom text--center"},logo&&(logo.src||logo.srcDark)&&/*#__PURE__*/react.createElement("div",{className:"margin-bottom--sm"},logo.href?/*#__PURE__*/react.createElement(Link/* default */.Z,{href:logo.href,className:styles_module.footerLogoLink},/*#__PURE__*/react.createElement(FooterLogo,{alt:logo.alt,sources:sources})):/*#__PURE__*/react.createElement(FooterLogo,{alt:logo.alt,sources:sources})),copyright?/*#__PURE__*/react.createElement("div",{className:"footer__copyright"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:copyright}}):null)));}/* harmony default export */ var theme_Footer = (Footer);

/***/ }),

/***/ 3204:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9603);
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(120);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconMenu=function IconMenu(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?30:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?30:_ref$height,className=_ref.className,restProps=(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(_ref,["width","height","className"]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({"aria-label":"Menu",className:className,width:width,height:height,viewBox:"0 0 30 30",role:"img",focusable:"false"},restProps),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,"Menu"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}));};/* harmony default export */ __webpack_exports__["Z"] = (IconMenu);

/***/ }),

/***/ 7707:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ LayoutHead; }
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(9603);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Head.js + 1 modules
var Head = __webpack_require__(5361);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(353);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(8948);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/SearchMetadatas/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Note: we don't couple this to Algolia/DocSearch on purpose
// We may want to support other search engine plugins too
// Search plugins should swizzle/override this comp to add their behavior
function SearchMetadatas(_ref){var locale=_ref.locale,version=_ref.version,tag=_ref.tag;return/*#__PURE__*/react.createElement(Head/* default */.Z,null,locale&&/*#__PURE__*/react.createElement("meta",{name:"docusaurus_locale",content:""+locale}),version&&/*#__PURE__*/react.createElement("meta",{name:"docusaurus_version",content:version}),tag&&/*#__PURE__*/react.createElement("meta",{name:"docusaurus_tag",content:tag}));}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Seo/index.js
var Seo = __webpack_require__(1956);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(4801);
// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(9635);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/LayoutHead/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Useful for SEO
// See https://developers.google.com/search/docs/advanced/crawling/localized-versions
// See https://github.com/facebook/docusaurus/issues/3317
function AlternateLangHeaders(){var _useDocusaurusContext=(0,useDocusaurusContext.default)(),_useDocusaurusContext2=_useDocusaurusContext.i18n,defaultLocale=_useDocusaurusContext2.defaultLocale,locales=_useDocusaurusContext2.locales;var alternatePageUtils=(0,lib/* useAlternatePageUtils */.l5)();// Note: it is fine to use both "x-default" and "en" to target the same url
// See https://www.searchviu.com/en/multiple-hreflang-tags-one-url/
return/*#__PURE__*/react.createElement(Head/* default */.Z,null,locales.map(function(locale){return/*#__PURE__*/react.createElement("link",{key:locale,rel:"alternate",href:alternatePageUtils.createUrl({locale:locale,fullyQualified:true}),hrefLang:locale});}),/*#__PURE__*/react.createElement("link",{rel:"alternate",href:alternatePageUtils.createUrl({locale:defaultLocale,fullyQualified:true}),hrefLang:"x-default"}));}// Default canonical url inferred from current page location pathname
function useDefaultCanonicalUrl(){var _useDocusaurusContext3=(0,useDocusaurusContext.default)(),siteUrl=_useDocusaurusContext3.siteConfig.url;var _useLocation=(0,react_router/* useLocation */.TH)(),pathname=_useLocation.pathname;return siteUrl+(0,useBaseUrl/* default */.Z)(pathname);}function CanonicalUrlHeaders(_ref){var permalink=_ref.permalink;var _useDocusaurusContext4=(0,useDocusaurusContext.default)(),siteUrl=_useDocusaurusContext4.siteConfig.url;var defaultCanonicalUrl=useDefaultCanonicalUrl();var canonicalUrl=permalink?""+siteUrl+permalink:defaultCanonicalUrl;return/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("meta",{property:"og:url",content:canonicalUrl}),/*#__PURE__*/react.createElement("link",{rel:"canonical",href:canonicalUrl}));}function LayoutHead(props){var _useDocusaurusContext5=(0,useDocusaurusContext.default)(),_useDocusaurusContext6=_useDocusaurusContext5.siteConfig,favicon=_useDocusaurusContext6.favicon,metadatas=_useDocusaurusContext6.themeConfig.metadatas,_useDocusaurusContext7=_useDocusaurusContext5.i18n,currentLocale=_useDocusaurusContext7.currentLocale,localeConfigs=_useDocusaurusContext7.localeConfigs;var title=props.title,description=props.description,image=props.image,keywords=props.keywords,searchMetadatas=props.searchMetadatas;var faviconUrl=(0,useBaseUrl/* default */.Z)(favicon);var pageTitle=(0,lib/* useTitleFormatter */.pe)(title);// See https://github.com/facebook/docusaurus/issues/3317#issuecomment-754661855
// const htmlLang = currentLocale.split('-')[0];
var htmlLang=currentLocale;// should we allow the user to override htmlLang with localeConfig?
var htmlDir=localeConfigs[currentLocale].direction;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("html",{lang:htmlLang,dir:htmlDir}),favicon&&/*#__PURE__*/react.createElement("link",{rel:"shortcut icon",href:faviconUrl}),/*#__PURE__*/react.createElement("title",null,pageTitle),/*#__PURE__*/react.createElement("meta",{property:"og:title",content:pageTitle})),/*#__PURE__*/react.createElement(Seo/* default */.Z,{description:description,keywords:keywords,image:image}),/*#__PURE__*/react.createElement(CanonicalUrlHeaders,null),/*#__PURE__*/react.createElement(AlternateLangHeaders,null),/*#__PURE__*/react.createElement(SearchMetadatas,(0,esm_extends/* default */.Z)({tag:lib/* DEFAULT_SEARCH_TAG */.HX,locale:currentLocale},searchMetadatas)),/*#__PURE__*/react.createElement(Head/* default */.Z// it's important to have an additional <Head> element here,
// as it allows react-helmet to override values set in previous <Head>
// ie we can override default metadatas such as "twitter:card"
// In same Head, the same meta would appear twice instead of overriding
// See react-helmet doc
,null,metadatas.map(function(metadata,i){return/*#__PURE__*/react.createElement("meta",(0,esm_extends/* default */.Z)({key:"metadata_"+i},metadata));})));}

/***/ }),

/***/ 6395:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ LayoutProviders; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(161);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(4801);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ThemeStorage=(0,lib/* createStorageSlot */.WA)('theme');var themes={light:'light',dark:'dark'};// Ensure to always return a valid theme even if input is invalid
var coerceToTheme=function coerceToTheme(theme){return theme===themes.dark?themes.dark:themes.light;};var getInitialTheme=function getInitialTheme(defaultMode){if(!ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM){return coerceToTheme(defaultMode);}return coerceToTheme(document.documentElement.getAttribute('data-theme'));};var storeTheme=function storeTheme(newTheme){(0,lib/* createStorageSlot */.WA)('theme').set(coerceToTheme(newTheme));};var useTheme=function useTheme(){var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),_useThemeConfig$color=_useThemeConfig.colorMode,defaultMode=_useThemeConfig$color.defaultMode,disableSwitch=_useThemeConfig$color.disableSwitch,respectPrefersColorScheme=_useThemeConfig$color.respectPrefersColorScheme;var _useState=(0,react.useState)(getInitialTheme(defaultMode)),theme=_useState[0],setTheme=_useState[1];var setLightTheme=(0,react.useCallback)(function(){setTheme(themes.light);storeTheme(themes.light);},[]);var setDarkTheme=(0,react.useCallback)(function(){setTheme(themes.dark);storeTheme(themes.dark);},[]);(0,react.useEffect)(function(){document.documentElement.setAttribute('data-theme',coerceToTheme(theme));},[theme]);(0,react.useEffect)(function(){if(disableSwitch){return;}try{var storedTheme=ThemeStorage.get();if(storedTheme!==null){setTheme(coerceToTheme(storedTheme));}}catch(err){console.error(err);}},[setTheme]);(0,react.useEffect)(function(){if(disableSwitch&&!respectPrefersColorScheme){return;}window.matchMedia('(prefers-color-scheme: dark)').addListener(function(_ref){var matches=_ref.matches;setTheme(matches?themes.dark:themes.light);});},[]);return{isDarkTheme:theme===themes.dark,setLightTheme:setLightTheme,setDarkTheme:setDarkTheme};};/* harmony default export */ var hooks_useTheme = (useTheme);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/ThemeContext.js
var ThemeContext = __webpack_require__(579);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/ThemeProvider/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ThemeProvider(props){var _useTheme=hooks_useTheme(),isDarkTheme=_useTheme.isDarkTheme,setLightTheme=_useTheme.setLightTheme,setDarkTheme=_useTheme.setDarkTheme;return/*#__PURE__*/react.createElement(ThemeContext/* default.Provider */.Z.Provider,{value:{isDarkTheme:isDarkTheme,setLightTheme:setLightTheme,setDarkTheme:setDarkTheme}},props.children);}/* harmony default export */ var theme_ThemeProvider = (ThemeProvider);
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelperLoose.js

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useTabGroupChoice.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TAB_CHOICE_PREFIX='docusaurus.tab.';var useTabGroupChoice=function useTabGroupChoice(){var _useState=(0,react.useState)({}),tabGroupChoices=_useState[0],setChoices=_useState[1];var setChoiceSyncWithLocalStorage=(0,react.useCallback)(function(groupId,newChoice){(0,lib/* createStorageSlot */.WA)(""+TAB_CHOICE_PREFIX+groupId).set(newChoice);},[]);(0,react.useEffect)(function(){try{var localStorageChoices={};for(var _iterator=_createForOfIteratorHelperLoose((0,lib/* listStorageKeys */._f)()),_step;!(_step=_iterator()).done;){var storageKey=_step.value;if(storageKey.startsWith(TAB_CHOICE_PREFIX)){var groupId=storageKey.substring(TAB_CHOICE_PREFIX.length);localStorageChoices[groupId]=(0,lib/* createStorageSlot */.WA)(storageKey).get();}}setChoices(localStorageChoices);}catch(err){console.error(err);}},[]);return{tabGroupChoices:tabGroupChoices,setTabGroupChoices:function setTabGroupChoices(groupId,newChoice){setChoices(function(oldChoices){var _Object$assign;return Object.assign({},oldChoices,(_Object$assign={},_Object$assign[groupId]=newChoice,_Object$assign));});setChoiceSyncWithLocalStorage(groupId,newChoice);}};};/* harmony default export */ var hooks_useTabGroupChoice = (useTabGroupChoice);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useAnnouncementBar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DismissStorage=(0,lib/* createStorageSlot */.WA)('docusaurus.announcement.dismiss');var IdStorage=(0,lib/* createStorageSlot */.WA)('docusaurus.announcement.id');var useAnnouncementBar=function useAnnouncementBar(){var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),announcementBar=_useThemeConfig.announcementBar;var _useState=(0,react.useState)(true),isClosed=_useState[0],setClosed=_useState[1];var handleClose=(0,react.useCallback)(function(){DismissStorage.set('true');setClosed(true);},[]);(0,react.useEffect)(function(){if(!announcementBar){return;}var id=announcementBar.id;var viewedId=IdStorage.get();// retrocompatibility due to spelling mistake of default id
// see https://github.com/facebook/docusaurus/issues/3338
if(viewedId==='annoucement-bar'){viewedId='announcement-bar';}var isNewAnnouncement=id!==viewedId;IdStorage.set(id);if(isNewAnnouncement){DismissStorage.set('false');}if(isNewAnnouncement||DismissStorage.get()==='false'){setClosed(false);}},[]);return{isAnnouncementBarClosed:isClosed,closeAnnouncementBar:handleClose};};/* harmony default export */ var hooks_useAnnouncementBar = (useAnnouncementBar);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/UserPreferencesContext.js
var UserPreferencesContext = __webpack_require__(4956);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/UserPreferencesProvider/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UserPreferencesProvider(props){var _useTabGroupChoice=hooks_useTabGroupChoice(),tabGroupChoices=_useTabGroupChoice.tabGroupChoices,setTabGroupChoices=_useTabGroupChoice.setTabGroupChoices;var _useAnnouncementBar=hooks_useAnnouncementBar(),isAnnouncementBarClosed=_useAnnouncementBar.isAnnouncementBarClosed,closeAnnouncementBar=_useAnnouncementBar.closeAnnouncementBar;return/*#__PURE__*/react.createElement(UserPreferencesContext/* default.Provider */.Z.Provider,{value:{tabGroupChoices:tabGroupChoices,setTabGroupChoices:setTabGroupChoices,isAnnouncementBarClosed:isAnnouncementBarClosed,closeAnnouncementBar:closeAnnouncementBar}},props.children);}/* harmony default export */ var theme_UserPreferencesProvider = (UserPreferencesProvider);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/LayoutProviders/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LayoutProviders(_ref){var children=_ref.children;return/*#__PURE__*/react.createElement(theme_ThemeProvider,null,/*#__PURE__*/react.createElement(theme_UserPreferencesProvider,null,/*#__PURE__*/react.createElement(lib/* DocsPreferredVersionContextProvider */.L5,null,children)));}

/***/ }),

/***/ 3059:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9603);
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(120);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4142);
/* harmony import */ var _theme_ThemedImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8167);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8948);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(353);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4801);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Logo=function Logo(props){var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__.default)(),isClient=_useDocusaurusContext.isClient;var _useThemeConfig=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .useThemeConfig */ .LU)(),_useThemeConfig$navba=_useThemeConfig.navbar,title=_useThemeConfig$navba.title,_useThemeConfig$navba2=_useThemeConfig$navba.logo,logo=_useThemeConfig$navba2===void 0?{src:''}:_useThemeConfig$navba2;var imageClassName=props.imageClassName,titleClassName=props.titleClassName,propsRest=(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(props,["imageClassName","titleClassName"]);var logoLink=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(logo.href||'/');var sources={light:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(logo.src),dark:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(logo.srcDark||logo.src)};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z,(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({to:logoLink},propsRest,logo.target&&{target:logo.target}),logo.src&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_ThemedImage__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z,{key:isClient,className:imageClassName,sources:sources,alt:logo.alt||title||'Logo'}),title!=null&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",{className:titleClassName},title));};/* harmony default export */ __webpack_exports__["Z"] = (Logo);

/***/ }),

/***/ 9234:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_Navbar; }
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(9603);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(8944);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Noop.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//* harmony default export */ var Noop = (function(){return null;});
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(4801);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(353);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Toggle/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"toggle":"toggle_2wFP"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Toggle/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dark=function Dark(_ref){var icon=_ref.icon,style=_ref.style;return/*#__PURE__*/react.createElement("span",{className:(0,clsx_m/* default */.Z)(styles_module.toggle,styles_module.dark),style:style},icon);};var Light=function Light(_ref2){var icon=_ref2.icon,style=_ref2.style;return/*#__PURE__*/react.createElement("span",{className:(0,clsx_m/* default */.Z)(styles_module.toggle,styles_module.light),style:style},icon);};// Based on react-toggle (https://github.com/aaronshaf/react-toggle/).
var Toggle=/*#__PURE__*/(0,react.memo)(function(_ref3){var className=_ref3.className,icons=_ref3.icons,defaultChecked=_ref3.checked,disabled=_ref3.disabled,onChange=_ref3.onChange;var _useState=(0,react.useState)(defaultChecked),checked=_useState[0],setChecked=_useState[1];var _useState2=(0,react.useState)(false),focused=_useState2[0],setFocused=_useState2[1];var inputRef=(0,react.useRef)(null);var handleToggle=function handleToggle(e){var checkbox=inputRef.current;if(!checkbox){return;}if(e.target!==checkbox){e.preventDefault();checkbox.focus();checkbox.click();return;}setChecked(checkbox==null?void 0:checkbox.checked);};return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('react-toggle',className,{'react-toggle--checked':checked,'react-toggle--focus':focused,'react-toggle--disabled':disabled}),role:"button",tabIndex:-1,onClick:handleToggle},/*#__PURE__*/react.createElement("div",{className:"react-toggle-track"},/*#__PURE__*/react.createElement("div",{className:"react-toggle-track-check"},icons.checked),/*#__PURE__*/react.createElement("div",{className:"react-toggle-track-x"},icons.unchecked)),/*#__PURE__*/react.createElement("div",{className:"react-toggle-thumb"}),/*#__PURE__*/react.createElement("input",{ref:inputRef,checked:checked,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:onChange,onFocus:function onFocus(){return setFocused(true);},onBlur:function onBlur(){return setFocused(false);}}));});/* harmony default export */ function theme_Toggle(props){var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),_useThemeConfig$color=_useThemeConfig.colorMode.switchConfig,darkIcon=_useThemeConfig$color.darkIcon,darkIconStyle=_useThemeConfig$color.darkIconStyle,lightIcon=_useThemeConfig$color.lightIcon,lightIconStyle=_useThemeConfig$color.lightIconStyle;var _useDocusaurusContext=(0,useDocusaurusContext.default)(),isClient=_useDocusaurusContext.isClient;return/*#__PURE__*/react.createElement(Toggle,(0,esm_extends/* default */.Z)({disabled:!isClient,icons:{checked:/*#__PURE__*/react.createElement(Dark,{icon:darkIcon,style:darkIconStyle}),unchecked:/*#__PURE__*/react.createElement(Light,{icon:lightIcon,style:lightIconStyle})}},props));}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useThemeContext.js
var useThemeContext = __webpack_require__(9237);
// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(9635);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useScrollPosition.js
var useScrollPosition = __webpack_require__(5135);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useHideableNavbar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var useHideableNavbar=function useHideableNavbar(hideOnScroll){var location=(0,react_router/* useLocation */.TH)();var _useState=(0,react.useState)(hideOnScroll),isNavbarVisible=_useState[0],setIsNavbarVisible=_useState[1];var isFocusedAnchor=(0,react.useRef)(false);var _useState2=(0,react.useState)(0),navbarHeight=_useState2[0],setNavbarHeight=_useState2[1];var navbarRef=(0,react.useCallback)(function(node){if(node!==null){setNavbarHeight(node.getBoundingClientRect().height);}},[]);(0,useScrollPosition/* default */.Z)(function(_ref,_ref2){var scrollTop=_ref.scrollY;var lastScrollTop=_ref2.scrollY;if(!hideOnScroll){return;}if(scrollTop<navbarHeight){setIsNavbarVisible(true);return;}if(isFocusedAnchor.current){isFocusedAnchor.current=false;setIsNavbarVisible(false);return;}if(lastScrollTop&&scrollTop===0){setIsNavbarVisible(true);}var documentHeight=document.documentElement.scrollHeight-navbarHeight;var windowHeight=window.innerHeight;if(lastScrollTop&&scrollTop>=lastScrollTop){setIsNavbarVisible(false);}else if(scrollTop+windowHeight<documentHeight){setIsNavbarVisible(true);}},[navbarHeight,isFocusedAnchor]);(0,react.useEffect)(function(){if(!hideOnScroll){return;}setIsNavbarVisible(true);},[location.pathname]);(0,react.useEffect)(function(){if(!hideOnScroll){return;}if(!location.hash){return;}isFocusedAnchor.current=true;},[location.hash]);return{navbarRef:navbarRef,isNavbarVisible:isNavbarVisible};};/* harmony default export */ var hooks_useHideableNavbar = (useHideableNavbar);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useLockBodyScroll.js
var useLockBodyScroll = __webpack_require__(1080);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(8245);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(120);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/DefaultNavbarItem.js
var DefaultNavbarItem = __webpack_require__(9970);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/IconLanguage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconLanguage=function IconLanguage(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?20:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?20:_ref$height,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,["width","height"]);return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:width,height:height},props),/*#__PURE__*/react.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}));};/* harmony default export */ var theme_IconLanguage = (IconLanguage);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/LocaleDropdownNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LocaleDropdownNavbarItem(_ref){var mobile=_ref.mobile,dropdownItemsBefore=_ref.dropdownItemsBefore,dropdownItemsAfter=_ref.dropdownItemsAfter,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,["mobile","dropdownItemsBefore","dropdownItemsAfter"]);var _useDocusaurusContext=(0,useDocusaurusContext.default)(),_useDocusaurusContext2=_useDocusaurusContext.i18n,currentLocale=_useDocusaurusContext2.currentLocale,locales=_useDocusaurusContext2.locales,localeConfigs=_useDocusaurusContext2.localeConfigs;var alternatePageUtils=(0,lib/* useAlternatePageUtils */.l5)();function getLocaleLabel(locale){return localeConfigs[locale].label;}var localeItems=locales.map(function(locale){var to="pathname://"+alternatePageUtils.createUrl({locale:locale,fullyQualified:false});return{isNavLink:true,label:getLocaleLabel(locale),to:to,target:'_self',autoAddBaseUrl:false,className:locale===currentLocale?'dropdown__link--active':'',style:{textTransform:'capitalize'}};});var items=[].concat(dropdownItemsBefore,localeItems,dropdownItemsAfter);// Mobile is handled a bit differently
var dropdownLabel=mobile?'Languages':getLocaleLabel(currentLocale);return/*#__PURE__*/react.createElement(DefaultNavbarItem/* default */.Z,(0,esm_extends/* default */.Z)({},props,{href:"#",mobile:mobile,label:/*#__PURE__*/react.createElement("span",null,/*#__PURE__*/react.createElement(theme_IconLanguage,{style:{verticalAlign:'text-bottom',marginRight:5}}),/*#__PURE__*/react.createElement("span",null,dropdownLabel)),items:items}));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var NavbarItem_styles_module = ({"searchWrapper":"searchWrapper_36Ie"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/SearchNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SearchNavbarItem(_ref){var mobile=_ref.mobile;if(mobile){return null;}return/*#__PURE__*/react.createElement("div",{className:NavbarItem_styles_module.searchWrapper},/*#__PURE__*/react.createElement(Noop,null));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NavbarItemComponents={default:function _default(){return DefaultNavbarItem/* default */.Z;},localeDropdown:function localeDropdown(){return LocaleDropdownNavbarItem;},search:function search(){return SearchNavbarItem;},// Need to lazy load these items as we don't know for sure the docs plugin is loaded
// See https://github.com/facebook/docusaurus/issues/3360
docsVersion:function docsVersion(){return(// eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
__webpack_require__(1393)/* .default */ .Z);},docsVersionDropdown:function docsVersionDropdown(){return(// eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
__webpack_require__(8259)/* .default */ .Z);},doc:function doc(){return(// eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
__webpack_require__(5807)/* .default */ .Z);}};var getNavbarItemComponent=function getNavbarItemComponent(type){if(type===void 0){type='default';}var navbarItemComponent=NavbarItemComponents[type];if(!navbarItemComponent){throw new Error("No NavbarItem component found for type="+type+".");}return navbarItemComponent();};function NavbarItem(_ref){var type=_ref.type,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,["type"]);var NavbarItemComponent=getNavbarItemComponent(type);return/*#__PURE__*/react.createElement(NavbarItemComponent,props);}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Logo/index.js
var Logo = __webpack_require__(3059);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/IconMenu/index.js
var IconMenu = __webpack_require__(3204);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Navbar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Navbar_styles_module = ({"displayOnlyInLargeViewport":"displayOnlyInLargeViewport_2XYw","navbarHideable":"navbarHideable_z9Sw","navbarHidden":"navbarHidden_2kTK"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Navbar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// retrocompatible with v1
var DefaultNavItemPosition='right';// If split links by left/right
// if position is unspecified, fallback to right (as v1)
function splitNavItemsByPosition(items){var leftItems=items.filter(function(item){var _item$position;return((_item$position=item.position)!=null?_item$position:DefaultNavItemPosition)==='left';});var rightItems=items.filter(function(item){var _item$position2;return((_item$position2=item.position)!=null?_item$position2:DefaultNavItemPosition)==='right';});return{leftItems:leftItems,rightItems:rightItems};}function Navbar(){var _clsx;var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),_useThemeConfig$navba=_useThemeConfig.navbar,items=_useThemeConfig$navba.items,hideOnScroll=_useThemeConfig$navba.hideOnScroll,style=_useThemeConfig$navba.style,disableColorModeSwitch=_useThemeConfig.colorMode.disableSwitch;var _useState=(0,react.useState)(false),sidebarShown=_useState[0],setSidebarShown=_useState[1];var _useThemeContext=(0,useThemeContext/* default */.Z)(),isDarkTheme=_useThemeContext.isDarkTheme,setLightTheme=_useThemeContext.setLightTheme,setDarkTheme=_useThemeContext.setDarkTheme;var _useHideableNavbar=hooks_useHideableNavbar(hideOnScroll),navbarRef=_useHideableNavbar.navbarRef,isNavbarVisible=_useHideableNavbar.isNavbarVisible;(0,useLockBodyScroll/* default */.Z)(sidebarShown);var showSidebar=(0,react.useCallback)(function(){setSidebarShown(true);},[setSidebarShown]);var hideSidebar=(0,react.useCallback)(function(){setSidebarShown(false);},[setSidebarShown]);var onToggleChange=(0,react.useCallback)(function(e){return e.target.checked?setDarkTheme():setLightTheme();},[setLightTheme,setDarkTheme]);var windowSize=(0,useWindowSize/* default */.Z)();(0,react.useEffect)(function(){if(windowSize===useWindowSize/* windowSizes.desktop */.D.desktop){setSidebarShown(false);}},[windowSize]);var hasSearchNavbarItem=items.some(function(item){return item.type==='search';});var _splitNavItemsByPosit=splitNavItemsByPosition(items),leftItems=_splitNavItemsByPosit.leftItems,rightItems=_splitNavItemsByPosit.rightItems;return/*#__PURE__*/react.createElement("nav",{ref:navbarRef,className:(0,clsx_m/* default */.Z)('navbar','navbar--fixed-top',(_clsx={'navbar--dark':style==='dark','navbar--primary':style==='primary','navbar-sidebar--show':sidebarShown},_clsx[Navbar_styles_module.navbarHideable]=hideOnScroll,_clsx[Navbar_styles_module.navbarHidden]=hideOnScroll&&!isNavbarVisible,_clsx))},/*#__PURE__*/react.createElement("div",{className:"navbar__inner"},/*#__PURE__*/react.createElement("div",{className:"navbar__items"},items!=null&&items.length!==0&&/*#__PURE__*/react.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:showSidebar,onKeyDown:showSidebar},/*#__PURE__*/react.createElement(IconMenu/* default */.Z,null)),/*#__PURE__*/react.createElement(Logo/* default */.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:(0,clsx_m/* default */.Z)('navbar__title')}),leftItems.map(function(item,i){return/*#__PURE__*/react.createElement(NavbarItem,(0,esm_extends/* default */.Z)({},item,{key:i}));})),/*#__PURE__*/react.createElement("div",{className:"navbar__items navbar__items--right"},rightItems.map(function(item,i){return/*#__PURE__*/react.createElement(NavbarItem,(0,esm_extends/* default */.Z)({},item,{key:i}));}),!disableColorModeSwitch&&/*#__PURE__*/react.createElement(theme_Toggle,{className:Navbar_styles_module.displayOnlyInLargeViewport,checked:isDarkTheme,onChange:onToggleChange}),!hasSearchNavbarItem&&/*#__PURE__*/react.createElement(Noop,null))),/*#__PURE__*/react.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:hideSidebar}),/*#__PURE__*/react.createElement("div",{className:"navbar-sidebar"},/*#__PURE__*/react.createElement("div",{className:"navbar-sidebar__brand"},/*#__PURE__*/react.createElement(Logo/* default */.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:hideSidebar}),!disableColorModeSwitch&&sidebarShown&&/*#__PURE__*/react.createElement(theme_Toggle,{checked:isDarkTheme,onChange:onToggleChange})),/*#__PURE__*/react.createElement("div",{className:"navbar-sidebar__items"},/*#__PURE__*/react.createElement("div",{className:"menu"},/*#__PURE__*/react.createElement("ul",{className:"menu__list"},items.map(function(item,i){return/*#__PURE__*/react.createElement(NavbarItem,(0,esm_extends/* default */.Z)({mobile:true},item,{// TODO fix typing
onClick:hideSidebar,key:i}));}))))));}/* harmony default export */ var theme_Navbar = (Navbar);

/***/ }),

/***/ 9970:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9603);
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(120);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8944);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4142);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8948);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9635);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4801);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavLink(_ref){var activeBasePath=_ref.activeBasePath,activeBaseRegex=_ref.activeBaseRegex,to=_ref.to,href=_ref.href,label=_ref.label,_ref$activeClassName=_ref.activeClassName,activeClassName=_ref$activeClassName===void 0?'navbar__link--active':_ref$activeClassName,prependBaseUrlToHref=_ref.prependBaseUrlToHref,props=(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(_ref,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]);// TODO all this seems hacky
// {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
var toUrl=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(to);var activeBaseUrl=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(activeBasePath);var normalizedHref=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(href,{forcePrependBaseUrl:true});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z,(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({},href?{href:prependBaseUrlToHref?normalizedHref:href}:Object.assign({isNavLink:true,activeClassName:activeClassName,to:toUrl},activeBasePath||activeBaseRegex?{isActive:function isActive(_match,location){return activeBaseRegex?new RegExp(activeBaseRegex).test(location.pathname):location.pathname.startsWith(activeBaseUrl);}}:null),props),label);}function NavItemDesktop(_ref2){var _props$children;var items=_ref2.items,position=_ref2.position,className=_ref2.className,props=(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(_ref2,["items","position","className"]);var dropdownRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);var dropdownMenuRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),showDropdown=_useState[0],setShowDropdown=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var handleClickOutside=function handleClickOutside(event){if(!dropdownRef.current||dropdownRef.current.contains(event.target)){return;}setShowDropdown(false);};document.addEventListener('mousedown',handleClickOutside);document.addEventListener('touchstart',handleClickOutside);return function(){document.removeEventListener('mousedown',handleClickOutside);document.removeEventListener('touchstart',handleClickOutside);};},[dropdownRef]);var navLinkClassNames=function navLinkClassNames(extraClassName,isDropdownItem){if(isDropdownItem===void 0){isDropdownItem=false;}return (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({'navbar__item navbar__link':!isDropdownItem,dropdown__link:isDropdownItem},extraClassName);};if(!items){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLink,(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({className:navLinkClassNames(className)},props));}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:dropdownRef,className:(0,clsx__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)('navbar__item','dropdown','dropdown--hoverable',{'dropdown--left':position==='left','dropdown--right':position==='right','dropdown--show':showDropdown})},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLink,(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({className:navLinkClassNames(className)},props,{onClick:props.to?undefined:function(e){return e.preventDefault();},onKeyDown:function onKeyDown(e){if(e.key==='Enter'){e.preventDefault();setShowDropdown(!showDropdown);}}}),(_props$children=props.children)!=null?_props$children:props.label),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{ref:dropdownMenuRef,className:"dropdown__menu"},items.map(function(_ref3,i){var childItemClassName=_ref3.className,childItemProps=(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(_ref3,["className"]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLink,(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({onKeyDown:function onKeyDown(e){if(i===items.length-1&&e.key==='Tab'){e.preventDefault();setShowDropdown(false);var nextNavbarItem=dropdownRef.current.nextElementSibling;if(nextNavbarItem){nextNavbarItem.focus();}}},activeClassName:"dropdown__link--active",className:navLinkClassNames(childItemClassName,true)},childItemProps)));})));}function NavItemMobile(_ref4){var _menuListRef$current,_menuListRef$current2,_props$children2;var items=_ref4.items,className=_ref4.className,_position=_ref4.position,props=(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(_ref4,["items","className","position"]);var menuListRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);var _useLocation=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_7__/* .useLocation */ .TH)(),pathname=_useLocation.pathname;var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){var _items$some;return(_items$some=!(items!=null&&items.some(function(item){return (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .isSamePath */ .Mg)(item.to,pathname);})))!=null?_items$some:true;}),collapsed=_useState2[0],setCollapsed=_useState2[1];var navLinkClassNames=function navLinkClassNames(extraClassName,isSubList){if(isSubList===void 0){isSubList=false;}return (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)('menu__link',{'menu__link--sublist':isSubList},extraClassName);};if(!items){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{className:"menu__list-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLink,(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({className:navLinkClassNames(className)},props)));}var menuListHeight=(_menuListRef$current=menuListRef.current)!=null&&_menuListRef$current.scrollHeight?((_menuListRef$current2=menuListRef.current)==null?void 0:_menuListRef$current2.scrollHeight)+"px":undefined;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)('menu__list-item',{'menu__list-item--collapsed':collapsed})},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLink,(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({role:"button",className:navLinkClassNames(className,true)},props,{onClick:function onClick(e){e.preventDefault();setCollapsed(function(state){return!state;});}}),(_props$children2=props.children)!=null?_props$children2:props.label),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:"menu__list",ref:menuListRef,style:{height:!collapsed?menuListHeight:undefined}},items.map(function(_ref5,i){var childItemClassName=_ref5.className,childItemProps=(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(_ref5,["className"]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{className:"menu__list-item",key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLink,(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({activeClassName:"menu__link--active",className:navLinkClassNames(childItemClassName)},childItemProps,{onClick:props.onClick})));})));}function DefaultNavbarItem(_ref6){var _ref6$mobile=_ref6.mobile,mobile=_ref6$mobile===void 0?false:_ref6$mobile,props=(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(_ref6,["mobile"]);var Comp=mobile?NavItemMobile:NavItemDesktop;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp,props);}/* harmony default export */ __webpack_exports__["Z"] = (DefaultNavbarItem);

/***/ }),

/***/ 5807:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DocNavbarItem; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9603);
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(120);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9970);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6889);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8944);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4801);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocNavbarItem(_ref){var _ref2,_clsx;var docId=_ref.docId,activeSidebarClassName=_ref.activeSidebarClassName,staticLabel=_ref.label,docsPluginId=_ref.docsPluginId,props=(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(_ref,["docId","activeSidebarClassName","label","docsPluginId"]);var _useActiveDocContext=(0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__.useActiveDocContext)(docsPluginId),activeVersion=_useActiveDocContext.activeVersion,activeDoc=_useActiveDocContext.activeDoc;var _useDocsPreferredVers=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useDocsPreferredVersion */ .J)(docsPluginId),preferredVersion=_useDocsPreferredVers.preferredVersion;var latestVersion=(0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__.useLatestVersion)(docsPluginId);var version=(_ref2=activeVersion!=null?activeVersion:preferredVersion)!=null?_ref2:latestVersion;var doc=version.docs.find(function(versionDoc){return versionDoc.id===docId;});if(!doc){var docIds=version.docs.map(function(versionDoc){return versionDoc.id;}).join('\n- ');throw new Error("DocNavbarItem: couldn't find any doc with id="+docId+" in version "+version.name+".\nAvailable docIds=\n- "+docIds);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z,(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({exact:true},props,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(props.className,(_clsx={},_clsx[activeSidebarClassName]=activeDoc&&activeDoc.sidebar===doc.sidebar,_clsx)),label:staticLabel!=null?staticLabel:doc.id,to:doc.path}));}

/***/ }),

/***/ 8259:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DocsVersionDropdownNavbarItem; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9603);
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(120);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9970);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6889);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4801);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var getVersionMainDoc=function getVersionMainDoc(version){return version.docs.find(function(doc){return doc.id===version.mainDocId;});};function DocsVersionDropdownNavbarItem(_ref){var _ref2,_activeDocContext$act;var mobile=_ref.mobile,docsPluginId=_ref.docsPluginId,dropdownActiveClassDisabled=_ref.dropdownActiveClassDisabled,dropdownItemsBefore=_ref.dropdownItemsBefore,dropdownItemsAfter=_ref.dropdownItemsAfter,props=(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(_ref,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]);var activeDocContext=(0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__.useActiveDocContext)(docsPluginId);var versions=(0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__.useVersions)(docsPluginId);var latestVersion=(0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__.useLatestVersion)(docsPluginId);var _useDocsPreferredVers=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useDocsPreferredVersion */ .J)(docsPluginId),preferredVersion=_useDocsPreferredVers.preferredVersion,savePreferredVersionName=_useDocsPreferredVers.savePreferredVersionName;function getItems(){var versionLinks=versions.map(function(version){// We try to link to the same doc, in another version
// When not possible, fallback to the "main doc" of the version
var versionDoc=(activeDocContext==null?void 0:activeDocContext.alternateDocVersions[version.name])||getVersionMainDoc(version);return{isNavLink:true,label:version.label,to:versionDoc.path,isActive:function isActive(){return version===(activeDocContext==null?void 0:activeDocContext.activeVersion);},onClick:function onClick(){savePreferredVersionName(version.name);}};});var items=[].concat(dropdownItemsBefore,versionLinks,dropdownItemsAfter);// We don't want to render a version dropdown with 0 or 1 item
// If we build the site with a single docs version (onlyIncludeVersions: ['1.0.0'])
// We'd rather render a button instead of a dropdown
if(items.length<=1){return undefined;}return items;}var dropdownVersion=(_ref2=(_activeDocContext$act=activeDocContext.activeVersion)!=null?_activeDocContext$act:preferredVersion)!=null?_ref2:latestVersion;// Mobile is handled a bit differently
var dropdownLabel=mobile?'Versions':dropdownVersion.label;var dropdownTo=mobile?undefined:getVersionMainDoc(dropdownVersion).path;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z,(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({},props,{mobile:mobile,label:dropdownLabel,to:dropdownTo,items:getItems(),isActive:dropdownActiveClassDisabled?function(){return false;}:undefined}));}

/***/ }),

/***/ 1393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DocsVersionNavbarItem; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9603);
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(120);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9970);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6889);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4801);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var getVersionMainDoc=function getVersionMainDoc(version){return version.docs.find(function(doc){return doc.id===version.mainDocId;});};function DocsVersionNavbarItem(_ref){var _ref2;var staticLabel=_ref.label,staticTo=_ref.to,docsPluginId=_ref.docsPluginId,props=(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(_ref,["label","to","docsPluginId"]);var activeVersion=(0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__.useActiveVersion)(docsPluginId);var _useDocsPreferredVers=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useDocsPreferredVersion */ .J)(docsPluginId),preferredVersion=_useDocsPreferredVers.preferredVersion;var latestVersion=(0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__.useLatestVersion)(docsPluginId);var version=(_ref2=activeVersion!=null?activeVersion:preferredVersion)!=null?_ref2:latestVersion;var label=staticLabel!=null?staticLabel:version.label;var path=staticTo!=null?staticTo:getVersionMainDoc(version).path;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z,(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({},props,{label:label,to:path}));}

/***/ }),

/***/ 8608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_SkipToContent; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1787);
// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(9635);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/SkipToContent/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"skipToContent":"skipToContent_3wvD"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/SkipToContent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function programmaticFocus(el){el.setAttribute('tabindex','-1');el.focus();el.removeAttribute('tabindex');}function SkipToContent(){var containerRef=(0,react.useRef)(null);var location=(0,react_router/* useLocation */.TH)();var handleSkip=function handleSkip(e){e.preventDefault();var targetElement=document.querySelector('main:first-of-type')||document.querySelector('.main-wrapper');if(targetElement){programmaticFocus(targetElement);}};(0,react.useEffect)(function(){if(!location.hash&&containerRef.current){programmaticFocus(containerRef.current);}},[location.pathname]);return/*#__PURE__*/react.createElement("div",{ref:containerRef},/*#__PURE__*/react.createElement("a",{href:"#main",className:styles_module.skipToContent,onClick:handleSkip},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")));}/* harmony default export */ var theme_SkipToContent = (SkipToContent);

/***/ }),

/***/ 579:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ThemeContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);/* harmony default export */ __webpack_exports__["Z"] = (ThemeContext);

/***/ }),

/***/ 8167:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_ThemedImage; }
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(9603);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(120);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(8944);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(353);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useThemeContext.js
var useThemeContext = __webpack_require__(9237);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"themedImage":"themedImage_Ir0T","themedImage--light":"themedImage--light_2_E0","themedImage--dark":"themedImage--dark_2JiM"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ThemedImage=function ThemedImage(props){var _useDocusaurusContext=(0,useDocusaurusContext.default)(),isClient=_useDocusaurusContext.isClient;var _useThemeContext=(0,useThemeContext/* default */.Z)(),isDarkTheme=_useThemeContext.isDarkTheme;var sources=props.sources,className=props.className,_props$alt=props.alt,alt=_props$alt===void 0?'':_props$alt,propsRest=(0,objectWithoutPropertiesLoose/* default */.Z)(props,["sources","className","alt"]);var renderedSourceNames=isClient?isDarkTheme?['dark']:['light']// We need to render both images on the server to avoid flash
:// See https://github.com/facebook/docusaurus/pull/3730
['light','dark'];return/*#__PURE__*/react.createElement(react.Fragment,null,renderedSourceNames.map(function(sourceName){return/*#__PURE__*/react.createElement("img",(0,esm_extends/* default */.Z)({key:sourceName,src:sources[sourceName],alt:alt,className:(0,clsx_m/* default */.Z)(styles_module.themedImage,styles_module["themedImage--"+sourceName],className)},propsRest));}));};/* harmony default export */ var theme_ThemedImage = (ThemedImage);

/***/ }),

/***/ 4956:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UserPreferencesContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);/* harmony default export */ __webpack_exports__["Z"] = (UserPreferencesContext);

/***/ }),

/***/ 3471:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// This hook detect keyboard focus indicator to not show outline for mouse users
// Inspired by https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
function useKeyboardNavigation(){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var keyboardFocusedClassName='navigation-with-keyboard';function handleOutlineStyles(e){if(e.type==='keydown'&&e.key==='Tab'){document.body.classList.add(keyboardFocusedClassName);}if(e.type==='mousedown'){document.body.classList.remove(keyboardFocusedClassName);}}document.addEventListener('keydown',handleOutlineStyles);document.addEventListener('mousedown',handleOutlineStyles);return function(){document.body.classList.remove(keyboardFocusedClassName);document.removeEventListener('keydown',handleOutlineStyles);document.removeEventListener('mousedown',handleOutlineStyles);};},[]);}/* harmony default export */ __webpack_exports__["Z"] = (useKeyboardNavigation);

/***/ }),

/***/ 1080:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useLockBodyScroll(lock){if(lock===void 0){lock=true;}(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){document.body.style.overflow=lock?'hidden':'visible';return function(){document.body.style.overflow='visible';};},[lock]);}/* harmony default export */ __webpack_exports__["Z"] = (useLockBodyScroll);

/***/ }),

/***/ 5135:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(161);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var getScrollPosition=function getScrollPosition(){return{scrollX:_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* .default.canUseDOM */ .Z.canUseDOM?window.pageXOffset:0,scrollY:_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* .default.canUseDOM */ .Z.canUseDOM?window.pageYOffset:0};};var useScrollPosition=function useScrollPosition(effect,deps){if(deps===void 0){deps=[];}var scrollPosition=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(getScrollPosition());var handleScroll=function handleScroll(){var currentScrollPosition=getScrollPosition();if(effect){effect(currentScrollPosition,scrollPosition.current);}scrollPosition.current=currentScrollPosition;};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var opts={passive:true};handleScroll();window.addEventListener('scroll',handleScroll,opts);return function(){return window.removeEventListener('scroll',handleScroll,opts);};},deps);};/* harmony default export */ __webpack_exports__["Z"] = (useScrollPosition);

/***/ }),

/***/ 9237:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _theme_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(579);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useThemeContext(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_theme_ThemeContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z);if(context==null){throw new Error('`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');}return context;}/* harmony default export */ __webpack_exports__["Z"] = (useThemeContext);

/***/ }),

/***/ 4309:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _theme_UserPreferencesContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4956);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useUserPreferencesContext(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_theme_UserPreferencesContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z);if(context==null){throw new Error('`useUserPreferencesContext` is used outside of `Layout` Component.');}return context;}/* harmony default export */ __webpack_exports__["Z"] = (useUserPreferencesContext);

/***/ }),

/***/ 8245:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ windowSizes; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(161);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var desktopThresholdWidth=996;var windowSizes={desktop:'desktop',mobile:'mobile'};function useWindowSize(){var isClient=_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* .default.canUseDOM */ .Z.canUseDOM;function getSize(){if(!isClient){return undefined;}return window.innerWidth>desktopThresholdWidth?windowSizes.desktop:windowSizes.mobile;}var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getSize),windowSize=_useState[0],setWindowSize=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(!isClient){return undefined;}function handleResize(){setWindowSize(getSize());}window.addEventListener('resize',handleResize);return function(){return window.removeEventListener('resize',handleResize);};},[]);return windowSize;}/* harmony default export */ __webpack_exports__["Z"] = (useWindowSize);

/***/ })

}]);