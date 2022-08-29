(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[179],{

/***/ 3427:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ Context; },
/* harmony export */   "t": function() { return /* binding */ BrowserContextProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Encapsulate the logic to avoid React hydration problems
// See https://www.joshwcomeau.com/react/the-perils-of-rehydration/
// On first client-side render, we need to render exactly as the server rendered
// isBrowser is set to true only after a successful hydration
// Note, isBrowser is not part of useDocusaurusContext() for perf reasons
// Using useDocusaurusContext() (much more common need) should not trigger
// re-rendering after a successful hydration
var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);function BrowserContextProvider(_ref){var children=_ref.children;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),isBrowser=_useState[0],setIsBrowser=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){setIsBrowser(true);},[]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:isBrowser},children);}

/***/ }),

/***/ 3375:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__(1542);
// EXTERNAL MODULE: ../node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(4289);
// EXTERNAL MODULE: ../node_modules/react-helmet-async/lib/index.module.js
var index_module = __webpack_require__(2883);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(161);
;// CONCATENATED MODULE: ./.docusaurus/client-modules.js
/* harmony default export */ var client_modules = ([__webpack_require__(142),__webpack_require__(3815),__webpack_require__(6733),__webpack_require__(4374),__webpack_require__(6222)]);
// EXTERNAL MODULE: ./.docusaurus/routes.js + 3 modules
var routes = __webpack_require__(6623);
// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5331);
// EXTERNAL MODULE: ../node_modules/react-router-config/esm/react-router-config.js
var react_router_config = __webpack_require__(5473);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/theme-fallback/Root/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Wrapper at the very top of the app, that is applied constantly
// and does not depend on current route (unlike the layout)
//
// Gives the opportunity to add stateful providers on top of the app
// and these providers won't reset state when we navigate
//
// See https://github.com/facebook/docusaurus/issues/3919
function Root(_ref){var children=_ref.children;return/*#__PURE__*/react.createElement(react.Fragment,null,children);}
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(5773);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(7092);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(353);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(8948);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/useAlternatePageUtils.js
var useAlternatePageUtils = __webpack_require__(3714);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(624);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/hooks/useKeyboardNavigation.js + 1 modules
var useKeyboardNavigation = __webpack_require__(174);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(8831);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/searchUtils.js
var searchUtils = __webpack_require__(3149);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(505);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/SiteMetadata/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO move to SiteMetadataDefaults or theme-common ?
// Useful for i18n/SEO
// See https://developers.google.com/search/docs/advanced/crawling/localized-versions
// See https://github.com/facebook/docusaurus/issues/3317
function AlternateLangHeaders(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),_useDocusaurusContext2=_useDocusaurusContext.i18n,defaultLocale=_useDocusaurusContext2.defaultLocale,localeConfigs=_useDocusaurusContext2.localeConfigs;var alternatePageUtils=(0,useAlternatePageUtils/* useAlternatePageUtils */.l)();// Note: it is fine to use both "x-default" and "en" to target the same url
// See https://www.searchviu.com/en/multiple-hreflang-tags-one-url/
return/*#__PURE__*/react.createElement(Head/* default */.Z,null,Object.entries(localeConfigs).map(function(_ref){var locale=_ref[0],htmlLang=_ref[1].htmlLang;return/*#__PURE__*/react.createElement("link",{key:locale,rel:"alternate",href:alternatePageUtils.createUrl({locale:locale,fullyQualified:true}),hrefLang:htmlLang});}),/*#__PURE__*/react.createElement("link",{rel:"alternate",href:alternatePageUtils.createUrl({locale:defaultLocale,fullyQualified:true}),hrefLang:"x-default"}));}// Default canonical url inferred from current page location pathname
function useDefaultCanonicalUrl(){var _useDocusaurusContext3=(0,useDocusaurusContext/* default */.Z)(),siteUrl=_useDocusaurusContext3.siteConfig.url;var _useLocation=(0,react_router/* useLocation */.TH)(),pathname=_useLocation.pathname;return siteUrl+(0,useBaseUrl/* default */.Z)(pathname);}// TODO move to SiteMetadataDefaults or theme-common ?
function CanonicalUrlHeaders(_ref2){var permalink=_ref2.permalink;var _useDocusaurusContext4=(0,useDocusaurusContext/* default */.Z)(),siteUrl=_useDocusaurusContext4.siteConfig.url;var defaultCanonicalUrl=useDefaultCanonicalUrl();var canonicalUrl=permalink?""+siteUrl+permalink:defaultCanonicalUrl;return/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("meta",{property:"og:url",content:canonicalUrl}),/*#__PURE__*/react.createElement("link",{rel:"canonical",href:canonicalUrl}));}function SiteMetadata(){var _useDocusaurusContext5=(0,useDocusaurusContext/* default */.Z)(),currentLocale=_useDocusaurusContext5.i18n.currentLocale;// TODO maybe move these 2 themeConfig to siteConfig?
// These seems useful for other themes as well
var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.L)(),metadata=_useThemeConfig.metadata,defaultImage=_useThemeConfig.image;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/react.createElement("body",{className:useKeyboardNavigation/* keyboardFocusedClassName */.h})),defaultImage&&/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,{image:defaultImage}),/*#__PURE__*/react.createElement(CanonicalUrlHeaders,null),/*#__PURE__*/react.createElement(AlternateLangHeaders,null),/*#__PURE__*/react.createElement(SearchMetadata/* default */.Z,{tag:searchUtils/* DEFAULT_SEARCH_TAG */.HX,locale:currentLocale}),/*#__PURE__*/react.createElement(Head/* default */.Z,null,metadata.map(function(metadatum,i){return/*#__PURE__*/react.createElement("meta",(0,esm_extends/* default */.Z)({key:i},metadatum));})));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/normalizeLocation.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Memoize previously normalized pathnames.
var pathnames=new Map();function normalizeLocation(location){if(pathnames.has(location.pathname)){return Object.assign({},location,{pathname:pathnames.get(location.pathname)});}// If the location was registered with an `.html` extension, we don't strip it
// away, or it will render to a 404 page.
var matchedRoutes=(0,react_router_config/* matchRoutes */.f)(routes/* default */.Z,location.pathname);if(matchedRoutes.some(function(_ref){var route=_ref.route;return route.exact===true;})){pathnames.set(location.pathname,location.pathname);return location;}var pathname=location.pathname.trim().replace(/(?:\/index)?\.html$/,'')||'/';pathnames.set(location.pathname,pathname);return Object.assign({},location,{pathname:pathname});}
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/browserContext.js
var browserContext = __webpack_require__(3427);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/docusaurusContext.js + 3 modules
var docusaurusContext = __webpack_require__(3340);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(3219);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/ClientLifecyclesDispatcher.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function dispatchLifecycleAction(lifecycleAction){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var callbacks=client_modules.map(function(clientModule){var _clientModule$default,_clientModule$default2;var lifecycleFunction=(_clientModule$default=(_clientModule$default2=clientModule.default)==null?void 0:_clientModule$default2[lifecycleAction])!=null?_clientModule$default:clientModule[lifecycleAction];return lifecycleFunction==null?void 0:lifecycleFunction.apply(void 0,args);});return function(){return callbacks.forEach(function(cb){return cb==null?void 0:cb();});};}function scrollAfterNavigation(location){var hash=location.hash;if(!hash){window.scrollTo(0,0);}else{var id=decodeURIComponent(hash.substring(1));var element=document.getElementById(id);element==null?void 0:element.scrollIntoView();}}function ClientLifecyclesDispatcher(_ref){var children=_ref.children,location=_ref.location,previousLocation=_ref.previousLocation;(0,react.useLayoutEffect)(function(){if(previousLocation!==location){if(previousLocation){scrollAfterNavigation(location);}dispatchLifecycleAction('onRouteDidUpdate',{previousLocation:previousLocation,location:location});}},[previousLocation,location]);return children;}/* harmony default export */ var client_ClientLifecyclesDispatcher = (ClientLifecyclesDispatcher);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/preload.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Helper function to make sure all async components for that particular route
 * is preloaded before rendering. This is especially useful to avoid loading
 * screens.
 *
 * @param pathname the route pathname, example: /docs/installation
 * @returns Promise object represents whether pathname has been preloaded
 */function preload_preload(pathname){var matches=(0,react_router_config/* matchRoutes */.f)(routes/* default */.Z,pathname);return Promise.all(matches.map(function(match){return match.route.component.preload==null?void 0:match.route.component.preload();}));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/PendingNavigation.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PendingNavigation=/*#__PURE__*/function(_React$Component){(0,inheritsLoose/* default */.Z)(PendingNavigation,_React$Component);function PendingNavigation(props){var _this;_this=_React$Component.call(this,props)||this;// previousLocation doesn't affect rendering, hence not stored in state.
_this.previousLocation=void 0;_this.routeUpdateCleanupCb=void 0;_this.previousLocation=null;_this.routeUpdateCleanupCb=ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM?dispatchLifecycleAction('onRouteUpdate',{previousLocation:null,location:_this.props.location}):function(){};_this.state={nextRouteHasLoaded:true};return _this;}// Intercept location update and still show current route until next route
// is done loading.
var _proto=PendingNavigation.prototype;_proto.shouldComponentUpdate=function shouldComponentUpdate(nextProps,nextState){var _this2=this;if(nextProps.location===this.props.location){// `nextRouteHasLoaded` is false means there's a pending route transition.
// Don't update until it's done.
return nextState.nextRouteHasLoaded;}// props.location being different means the router is trying to navigate to
// a new route. We will preload the new route.
var nextLocation=nextProps.location;// Save the location first.
this.previousLocation=this.props.location;this.setState({nextRouteHasLoaded:false});this.routeUpdateCleanupCb=dispatchLifecycleAction('onRouteUpdate',{previousLocation:this.previousLocation,location:nextLocation});// Load data while the old screen remains. Force preload instead of using
// `window.docusaurus`, because we want to avoid loading screen even when
// user is on saveData
preload_preload(nextLocation.pathname).then(function(){_this2.routeUpdateCleanupCb();_this2.setState({nextRouteHasLoaded:true});}).catch(function(e){return console.warn(e);});return false;};_proto.render=function render(){var _this$props=this.props,children=_this$props.children,location=_this$props.location;// Use a controlled <Route> to trick all descendants into rendering the old
// location.
return/*#__PURE__*/react.createElement(client_ClientLifecyclesDispatcher,{previousLocation:this.previousLocation,location:location},/*#__PURE__*/react.createElement(react_router/* Route */.AW,{location:location,render:function render(){return children;}}));};return PendingNavigation;}(react.Component);/* harmony default export */ var client_PendingNavigation = (PendingNavigation);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/BaseUrlIssueBanner/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/BaseUrlIssueBanner/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Double-security: critical CSS will hide the banner if CSS can load!
var BannerContainerId='docusaurus-base-url-issue-banner-container';var BannerId='docusaurus-base-url-issue-banner';var SuggestionContainerId='docusaurus-base-url-issue-banner-suggestion-container';var InsertBannerWindowAttribute='__DOCUSAURUS_INSERT_BASEURL_BANNER';// It is important to not use React to render this banner
// otherwise Google would index it, even if it's hidden with some critical CSS!
// See https://github.com/facebook/docusaurus/issues/4028
// - We can't SSR (or it would be indexed)
// - We can't CSR (as it means the baseurl is correct)
function createInlineHtmlBanner(baseUrl){return"\n<div id=\""+BannerId+"\" style=\"border: thick solid red; background-color: rgb(255, 230, 179); margin: 20px; padding: 20px; font-size: 20px;\">\n   <p style=\"font-weight: bold; font-size: 30px;\">Your Docusaurus site did not load properly.</p>\n   <p>A very common reason is a wrong site <a href=\"https://docusaurus.io/docs/docusaurus.config.js/#baseurl\" style=\"font-weight: bold;\">baseUrl configuration</a>.</p>\n   <p>Current configured baseUrl = <span style=\"font-weight: bold; color: red;\">"+baseUrl+"</span> "+(baseUrl==='/'?' (default value)':'')+"</p>\n   <p>We suggest trying baseUrl = <span id=\""+SuggestionContainerId+"\" style=\"font-weight: bold; color: green;\"></span></p>\n</div>\n";}// Needs to work for older browsers!
function createInlineScript(baseUrl){return"\nwindow['"+InsertBannerWindowAttribute+"'] = true;\n\ndocument.addEventListener('DOMContentLoaded', maybeInsertBanner);\n\nfunction maybeInsertBanner() {\n  var shouldInsert = window['"+InsertBannerWindowAttribute+"'];\n  shouldInsert && insertBanner();\n}\n\nfunction insertBanner() {\n  var bannerContainer = document.getElementById('"+BannerContainerId+"');\n  if (!bannerContainer) {\n    return;\n  }\n  var bannerHtml = "+JSON.stringify(createInlineHtmlBanner(baseUrl))// See https://redux.js.org/recipes/server-rendering/#security-considerations
.replace(/</g,"\\<")+";\n  bannerContainer.innerHTML = bannerHtml;\n  var suggestionContainer = document.getElementById('"+SuggestionContainerId+"');\n  var actualHomePagePath = window.location.pathname;\n  var suggestedBaseUrl = actualHomePagePath.substr(-1) === '/'\n        ? actualHomePagePath\n        : actualHomePagePath + '/';\n  suggestionContainer.innerHTML = suggestedBaseUrl;\n}\n";}function BaseUrlIssueBanner(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),baseUrl=_useDocusaurusContext.siteConfig.baseUrl;// useLayoutEffect fires before DOMContentLoaded.
// It gives the opportunity to avoid inserting the banner in the first place
(0,react.useLayoutEffect)(function(){window[InsertBannerWindowAttribute]=false;},[]);return/*#__PURE__*/react.createElement(react.Fragment,null,!ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM&&/*#__PURE__*/ // Safe to use `ExecutionEnvironment`, because `Head` is purely
// side-effect and doesn't affect hydration
react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("script",null,createInlineScript(baseUrl))),/*#__PURE__*/react.createElement("div",{id:BannerContainerId}));}/**
 * We want to help the users with a bad baseUrl configuration (very common
 * error). Help message is inlined, and hidden if JS or CSS is able to load.
 *
 * This component only inserts the base URL banner for the homepage, to avoid
 * polluting every statically rendered page.
 *
 * Note: it might create false positives (ie network failures): not a big deal
 *
 * @see https://github.com/facebook/docusaurus/pull/3621
 */function MaybeBaseUrlIssueBanner(){var _useDocusaurusContext2=(0,useDocusaurusContext/* default */.Z)(),_useDocusaurusContext3=_useDocusaurusContext2.siteConfig,baseUrl=_useDocusaurusContext3.baseUrl,baseUrlIssueBanner=_useDocusaurusContext3.baseUrlIssueBanner;var _useLocation=(0,react_router/* useLocation */.TH)(),pathname=_useLocation.pathname;var isHomePage=pathname===baseUrl;var enabled=baseUrlIssueBanner&&isHomePage;return enabled?/*#__PURE__*/react.createElement(BaseUrlIssueBanner,null):null;}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/SiteMetadataDefaults.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SiteMetadataDefaults(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig,favicon=_useDocusaurusContext2.favicon,title=_useDocusaurusContext2.title,_useDocusaurusContext3=_useDocusaurusContext.i18n,currentLocale=_useDocusaurusContext3.currentLocale,localeConfigs=_useDocusaurusContext3.localeConfigs;var faviconUrl=(0,useBaseUrl/* default */.Z)(favicon);var _localeConfigs$curren=localeConfigs[currentLocale],htmlLang=_localeConfigs$curren.htmlLang,htmlDir=_localeConfigs$curren.direction;return/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("html",{lang:htmlLang,dir:htmlDir}),/*#__PURE__*/react.createElement("title",null,title),/*#__PURE__*/react.createElement("meta",{property:"og:title",content:title}),favicon&&/*#__PURE__*/react.createElement("link",{rel:"icon",href:faviconUrl}));}
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/ErrorBoundary.js + 1 modules
var ErrorBoundary = __webpack_require__(6293);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/App.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO, quick fix for CSS insertion order
// eslint-disable-next-line import/order
function App(){var routeElement=(0,react_router_config/* renderRoutes */.H)(routes/* default */.Z);var location=(0,react_router/* useLocation */.TH)();return/*#__PURE__*/react.createElement(ErrorBoundary/* default */.Z,null,/*#__PURE__*/react.createElement(docusaurusContext/* DocusaurusContextProvider */.M,null,/*#__PURE__*/react.createElement(browserContext/* BrowserContextProvider */.t,null,/*#__PURE__*/react.createElement(Root,null,/*#__PURE__*/react.createElement(SiteMetadataDefaults,null),/*#__PURE__*/react.createElement(SiteMetadata,null),/*#__PURE__*/react.createElement(MaybeBaseUrlIssueBanner,null),/*#__PURE__*/react.createElement(client_PendingNavigation,{location:normalizeLocation(location)},routeElement)))));}
// EXTERNAL MODULE: ./.docusaurus/routesChunkNames.json
var routesChunkNames = __webpack_require__(6887);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/prefetch.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function supports(feature){try{var fakeLink=document.createElement('link');return fakeLink.relList.supports(feature);}catch(_unused){return false;}}function linkPrefetchStrategy(url){return new Promise(function(resolve,reject){var _document$getElements,_document$getElements2;if(typeof document==='undefined'){reject();return;}var link=document.createElement('link');link.setAttribute('rel','prefetch');link.setAttribute('href',url);link.onload=function(){return resolve();};link.onerror=function(){return reject();};var parentElement=(_document$getElements=document.getElementsByTagName('head')[0])!=null?_document$getElements:(_document$getElements2=document.getElementsByName('script')[0])==null?void 0:_document$getElements2.parentNode;parentElement==null?void 0:parentElement.appendChild(link);});}function xhrPrefetchStrategy(url){return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open('GET',url,true);req.withCredentials=true;req.onload=function(){if(req.status===200){resolve();}else{reject();}};req.send(null);});}var supportedPrefetchStrategy=supports('prefetch')?linkPrefetchStrategy:xhrPrefetchStrategy;function prefetch_prefetch(url){return supportedPrefetchStrategy(url).catch(function(){});// 404s are logged to the console anyway.
}
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/flat.js
var flat = __webpack_require__(3361);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/docusaurus.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fetched=new Set();var loaded=new Set();// If user is on slow or constrained connection.
var isSlowConnection=function isSlowConnection(){var _navigator$connection,_navigator$connection2;return((_navigator$connection=navigator.connection)==null?void 0:_navigator$connection.effectiveType.includes('2g'))||((_navigator$connection2=navigator.connection)==null?void 0:_navigator$connection2.saveData);};var canPrefetch=function canPrefetch(routePath){return!isSlowConnection()&&!loaded.has(routePath)&&!fetched.has(routePath);};var canPreload=function canPreload(routePath){return!isSlowConnection()&&!loaded.has(routePath);};var getChunkNamesToLoad=function getChunkNamesToLoad(path){return Object.entries(routesChunkNames).filter(// Remove the last part containing the route hash
// input: /blog/2018/12/14/Happy-First-Birthday-Slash-fe9
// output: /blog/2018/12/14/Happy-First-Birthday-Slash
function(_ref){var routeNameWithHash=_ref[0];return routeNameWithHash.replace(/-[^-]+$/,'')===path;}).flatMap(function(_ref2){var routeChunks=_ref2[1];return Object.values((0,flat/* default */.Z)(routeChunks));});};var docusaurus={prefetch:function prefetch(routePath){if(!canPrefetch(routePath)){return false;}fetched.add(routePath);// Find all webpack chunk names needed.
var matches=(0,react_router_config/* matchRoutes */.f)(routes/* default */.Z,routePath);var chunkNamesNeeded=matches.flatMap(function(match){return getChunkNamesToLoad(match.route.path);});// Prefetch all webpack chunk assets file needed.
return Promise.all(chunkNamesNeeded.map(function(chunkName){// "__webpack_require__.gca" is injected by ChunkAssetPlugin. Pass it
// the name of the chunk you want to load and it will return its URL.
// eslint-disable-next-line camelcase
var chunkAsset=__webpack_require__.gca(chunkName);// In some cases, webpack might decide to optimize further, leading to
// the chunk assets being merged to another chunk. In this case, we can
// safely filter it out and don't need to load it.
if(chunkAsset&&!chunkAsset.includes('undefined')){return prefetch_prefetch(chunkAsset);}return Promise.resolve();}));},preload:function preload(routePath){if(!canPreload(routePath)){return false;}loaded.add(routePath);return preload_preload(routePath);}};// This object is directly mounted onto window, better freeze it
/* harmony default export */ var client_docusaurus = (Object.freeze(docusaurus));
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/clientEntry.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Client-side render (e.g: running in browser) to become single-page
// application (SPA).
if(ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM){window.docusaurus=client_docusaurus;// For production, attempt to hydrate existing markup for performant
// first-load experience.
// For development, there is no existing markup so we had to render it.
// We also preload async component to avoid first-load loading screen.
var renderMethod= true?react_dom.hydrate:0;preload_preload(window.location.pathname).then(function(){renderMethod(/*#__PURE__*/react.createElement(index_module/* HelmetProvider */.B6,null,/*#__PURE__*/react.createElement(react_router_dom/* BrowserRouter */.VK,null,/*#__PURE__*/react.createElement(App,null))),document.getElementById('__docusaurus'));});// Webpack Hot Module Replacement API
if(false){}}

/***/ }),

/***/ 3340:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": function() { return /* binding */ Context; },
  "M": function() { return /* binding */ DocusaurusContextProvider; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ./.docusaurus/docusaurus.config.mjs
var docusaurus_config = __webpack_require__(6809);
;// CONCATENATED MODULE: ./.docusaurus/globalData.json
var globalData_namespaceObject = JSON.parse('{"docusaurus-plugin-content-docs":{"default":{"path":"/react-easy-diagram/docs","versions":[{"name":"current","label":"Next","isLast":true,"path":"/react-easy-diagram/docs","mainDocId":"introduction","docs":[{"id":"api/classes/Callbacks","path":"/react-easy-diagram/docs/api/classes/Callbacks","sidebar":"docs"},{"id":"api/classes/CommandExecutor","path":"/react-easy-diagram/docs/api/classes/CommandExecutor","sidebar":"docs"},{"id":"api/classes/DiagramSettings","path":"/react-easy-diagram/docs/api/classes/DiagramSettings","sidebar":"docs"},{"id":"api/classes/DiagramState","path":"/react-easy-diagram/docs/api/classes/DiagramState","sidebar":"docs"},{"id":"api/classes/DragState","path":"/react-easy-diagram/docs/api/classes/DragState","sidebar":"docs"},{"id":"api/classes/HtmlElementRefState","path":"/react-easy-diagram/docs/api/classes/HtmlElementRefState","sidebar":"docs"},{"id":"api/classes/LinkCreationState","path":"/react-easy-diagram/docs/api/classes/LinkCreationState","sidebar":"docs"},{"id":"api/classes/LinkPointEndpointState","path":"/react-easy-diagram/docs/api/classes/LinkPointEndpointState","sidebar":"docs"},{"id":"api/classes/LinkPortEndpointState","path":"/react-easy-diagram/docs/api/classes/LinkPortEndpointState","sidebar":"docs"},{"id":"api/classes/LinksSettings","path":"/react-easy-diagram/docs/api/classes/LinksSettings","sidebar":"docs"},{"id":"api/classes/LinksStore","path":"/react-easy-diagram/docs/api/classes/LinksStore","sidebar":"docs"},{"id":"api/classes/LinkState","path":"/react-easy-diagram/docs/api/classes/LinkState","sidebar":"docs"},{"id":"api/classes/NodesSettings","path":"/react-easy-diagram/docs/api/classes/NodesSettings","sidebar":"docs"},{"id":"api/classes/NodesStore","path":"/react-easy-diagram/docs/api/classes/NodesStore","sidebar":"docs"},{"id":"api/classes/NodeState","path":"/react-easy-diagram/docs/api/classes/NodeState","sidebar":"docs"},{"id":"api/classes/PortsSettings","path":"/react-easy-diagram/docs/api/classes/PortsSettings","sidebar":"docs"},{"id":"api/classes/PortState","path":"/react-easy-diagram/docs/api/classes/PortState","sidebar":"docs"},{"id":"api/classes/RootStore","path":"/react-easy-diagram/docs/api/classes/RootStore","sidebar":"docs"},{"id":"api/classes/SelectionState","path":"/react-easy-diagram/docs/api/classes/SelectionState","sidebar":"docs"},{"id":"api/classes/UserInteractionSettings","path":"/react-easy-diagram/docs/api/classes/UserInteractionSettings","sidebar":"docs"},{"id":"api/classes/VisualComponents","path":"/react-easy-diagram/docs/api/classes/VisualComponents","sidebar":"docs"},{"id":"api/classes/VisualComponentState","path":"/react-easy-diagram/docs/api/classes/VisualComponentState","sidebar":"docs"},{"id":"api/classes/VisualComponentWithDefault","path":"/react-easy-diagram/docs/api/classes/VisualComponentWithDefault","sidebar":"docs"},{"id":"api/index","path":"/react-easy-diagram/docs/api/","sidebar":"docs"},{"id":"api/interfaces/Dictionary","path":"/react-easy-diagram/docs/api/interfaces/Dictionary","sidebar":"docs"},{"id":"api/interfaces/DragAndDropContainerProps","path":"/react-easy-diagram/docs/api/interfaces/DragAndDropContainerProps","sidebar":"docs"},{"id":"api/interfaces/DragAndDropEvent","path":"/react-easy-diagram/docs/api/interfaces/DragAndDropEvent","sidebar":"docs"},{"id":"api/interfaces/DragAndDropItemProps","path":"/react-easy-diagram/docs/api/interfaces/DragAndDropItemProps","sidebar":"docs"},{"id":"api/interfaces/DragAndDropStartEvent","path":"/react-easy-diagram/docs/api/interfaces/DragAndDropStartEvent","sidebar":"docs"},{"id":"api/interfaces/IBackgroundComponentProps","path":"/react-easy-diagram/docs/api/interfaces/IBackgroundComponentProps","sidebar":"docs"},{"id":"api/interfaces/ICallbacks","path":"/react-easy-diagram/docs/api/interfaces/ICallbacks","sidebar":"docs"},{"id":"api/interfaces/ICommand","path":"/react-easy-diagram/docs/api/interfaces/ICommand","sidebar":"docs"},{"id":"api/interfaces/IComponentDefinition","path":"/react-easy-diagram/docs/api/interfaces/IComponentDefinition","sidebar":"docs"},{"id":"api/interfaces/ICurvedLinkPathConstructorSettings","path":"/react-easy-diagram/docs/api/interfaces/ICurvedLinkPathConstructorSettings","sidebar":"docs"},{"id":"api/interfaces/IDiagramInitState","path":"/react-easy-diagram/docs/api/interfaces/IDiagramInitState","sidebar":"docs"},{"id":"api/interfaces/IDiagramInnerProps","path":"/react-easy-diagram/docs/api/interfaces/IDiagramInnerProps","sidebar":"docs"},{"id":"api/interfaces/IDiagramSettings","path":"/react-easy-diagram/docs/api/interfaces/IDiagramSettings","sidebar":"docs"},{"id":"api/interfaces/IDiagramState","path":"/react-easy-diagram/docs/api/interfaces/IDiagramState","sidebar":"docs"},{"id":"api/interfaces/IDragHandlers","path":"/react-easy-diagram/docs/api/interfaces/IDragHandlers","sidebar":"docs"},{"id":"api/interfaces/IHtmlElementRect","path":"/react-easy-diagram/docs/api/interfaces/IHtmlElementRect","sidebar":"docs"},{"id":"api/interfaces/ILineStyling","path":"/react-easy-diagram/docs/api/interfaces/ILineStyling","sidebar":"docs"},{"id":"api/interfaces/ILinkDefaultSettings","path":"/react-easy-diagram/docs/api/interfaces/ILinkDefaultSettings","sidebar":"docs"},{"id":"api/interfaces/ILinkInteractionState","path":"/react-easy-diagram/docs/api/interfaces/ILinkInteractionState","sidebar":"docs"},{"id":"api/interfaces/ILinkPath","path":"/react-easy-diagram/docs/api/interfaces/ILinkPath","sidebar":"docs"},{"id":"api/interfaces/ILinkPathConstructorEndpointInfo","path":"/react-easy-diagram/docs/api/interfaces/ILinkPathConstructorEndpointInfo","sidebar":"docs"},{"id":"api/interfaces/ILinkPortEndpoint","path":"/react-easy-diagram/docs/api/interfaces/ILinkPortEndpoint","sidebar":"docs"},{"id":"api/interfaces/ILinkSegment","path":"/react-easy-diagram/docs/api/interfaces/ILinkSegment","sidebar":"docs"},{"id":"api/interfaces/ILinksSettings","path":"/react-easy-diagram/docs/api/interfaces/ILinksSettings","sidebar":"docs"},{"id":"api/interfaces/ILinkState","path":"/react-easy-diagram/docs/api/interfaces/ILinkState","sidebar":"docs"},{"id":"api/interfaces/ILinkStateWithId","path":"/react-easy-diagram/docs/api/interfaces/ILinkStateWithId","sidebar":"docs"},{"id":"api/interfaces/ILinkStateWithoutId","path":"/react-easy-diagram/docs/api/interfaces/ILinkStateWithoutId","sidebar":"docs"},{"id":"api/interfaces/ILinkVisualComponentProps","path":"/react-easy-diagram/docs/api/interfaces/ILinkVisualComponentProps","sidebar":"docs"},{"id":"api/interfaces/IMiniControlComponentProps","path":"/react-easy-diagram/docs/api/interfaces/IMiniControlComponentProps","sidebar":"docs"},{"id":"api/interfaces/IMiniControlDefaultSettings","path":"/react-easy-diagram/docs/api/interfaces/IMiniControlDefaultSettings","sidebar":"docs"},{"id":"api/interfaces/INodeComponentSettings","path":"/react-easy-diagram/docs/api/interfaces/INodeComponentSettings","sidebar":"docs"},{"id":"api/interfaces/INodeDefaultSettings","path":"/react-easy-diagram/docs/api/interfaces/INodeDefaultSettings","sidebar":"docs"},{"id":"api/interfaces/INodeExport","path":"/react-easy-diagram/docs/api/interfaces/INodeExport","sidebar":"docs"},{"id":"api/interfaces/INodePortState","path":"/react-easy-diagram/docs/api/interfaces/INodePortState","sidebar":"docs"},{"id":"api/interfaces/INodesSettings","path":"/react-easy-diagram/docs/api/interfaces/INodesSettings","sidebar":"docs"},{"id":"api/interfaces/INodeState","path":"/react-easy-diagram/docs/api/interfaces/INodeState","sidebar":"docs"},{"id":"api/interfaces/INodeStateWithId","path":"/react-easy-diagram/docs/api/interfaces/INodeStateWithId","sidebar":"docs"},{"id":"api/interfaces/INodeStateWithoutId","path":"/react-easy-diagram/docs/api/interfaces/INodeStateWithoutId","sidebar":"docs"},{"id":"api/interfaces/INodeVisualComponentProps","path":"/react-easy-diagram/docs/api/interfaces/INodeVisualComponentProps","sidebar":"docs"},{"id":"api/interfaces/IPortExport","path":"/react-easy-diagram/docs/api/interfaces/IPortExport","sidebar":"docs"},{"id":"api/interfaces/IPortFinalState","path":"/react-easy-diagram/docs/api/interfaces/IPortFinalState","sidebar":"docs"},{"id":"api/interfaces/IPortInnerDefaultSettings","path":"/react-easy-diagram/docs/api/interfaces/IPortInnerDefaultSettings","sidebar":"docs"},{"id":"api/interfaces/IPortProps","path":"/react-easy-diagram/docs/api/interfaces/IPortProps","sidebar":"docs"},{"id":"api/interfaces/IPortsContainerProps","path":"/react-easy-diagram/docs/api/interfaces/IPortsContainerProps","sidebar":"docs"},{"id":"api/interfaces/IPortsContainerSettings","path":"/react-easy-diagram/docs/api/interfaces/IPortsContainerSettings","sidebar":"docs"},{"id":"api/interfaces/IPortsSettings","path":"/react-easy-diagram/docs/api/interfaces/IPortsSettings","sidebar":"docs"},{"id":"api/interfaces/IPortState","path":"/react-easy-diagram/docs/api/interfaces/IPortState","sidebar":"docs"},{"id":"api/interfaces/IPortStateWithIds","path":"/react-easy-diagram/docs/api/interfaces/IPortStateWithIds","sidebar":"docs"},{"id":"api/interfaces/IPortStateWithoutIds","path":"/react-easy-diagram/docs/api/interfaces/IPortStateWithoutIds","sidebar":"docs"},{"id":"api/interfaces/IPortVisualComponentProps","path":"/react-easy-diagram/docs/api/interfaces/IPortVisualComponentProps","sidebar":"docs"},{"id":"api/interfaces/ISettings","path":"/react-easy-diagram/docs/api/interfaces/ISettings","sidebar":"docs"},{"id":"api/interfaces/ISvgArrowMarkerSettings","path":"/react-easy-diagram/docs/api/interfaces/ISvgArrowMarkerSettings","sidebar":"docs"},{"id":"api/interfaces/ISvgBackgroundSettings","path":"/react-easy-diagram/docs/api/interfaces/ISvgBackgroundSettings","sidebar":"docs"},{"id":"api/interfaces/ISvgCircleMarkerSettings","path":"/react-easy-diagram/docs/api/interfaces/ISvgCircleMarkerSettings","sidebar":"docs"},{"id":"api/interfaces/ISvgMarkerSettings","path":"/react-easy-diagram/docs/api/interfaces/ISvgMarkerSettings","sidebar":"docs"},{"id":"api/interfaces/ITransformation","path":"/react-easy-diagram/docs/api/interfaces/ITransformation","sidebar":"docs"},{"id":"api/interfaces/IUseLinkUserInteractionResult","path":"/react-easy-diagram/docs/api/interfaces/IUseLinkUserInteractionResult","sidebar":"docs"},{"id":"api/interfaces/IUsePortUserInteractionResult","path":"/react-easy-diagram/docs/api/interfaces/IUsePortUserInteractionResult","sidebar":"docs"},{"id":"api/interfaces/IUserInteraction","path":"/react-easy-diagram/docs/api/interfaces/IUserInteraction","sidebar":"docs"},{"id":"api/interfaces/IUserInteractionTranslate","path":"/react-easy-diagram/docs/api/interfaces/IUserInteractionTranslate","sidebar":"docs"},{"id":"api/interfaces/IUserInteractionTranslateAndZoom","path":"/react-easy-diagram/docs/api/interfaces/IUserInteractionTranslateAndZoom","sidebar":"docs"},{"id":"api/interfaces/IUseStylingOptions","path":"/react-easy-diagram/docs/api/interfaces/IUseStylingOptions","sidebar":"docs"},{"id":"api/interfaces/IVisualComponentProps","path":"/react-easy-diagram/docs/api/interfaces/IVisualComponentProps","sidebar":"docs"},{"id":"api/interfaces/IVisualComponentsObject","path":"/react-easy-diagram/docs/api/interfaces/IVisualComponentsObject","sidebar":"docs"},{"id":"api/interfaces/IZoomToFitSettings","path":"/react-easy-diagram/docs/api/interfaces/IZoomToFitSettings","sidebar":"docs"},{"id":"componentsCustomization/introduction","path":"/react-easy-diagram/docs/componentsCustomization/introduction","sidebar":"docs"},{"id":"componentsCustomization/link","path":"/react-easy-diagram/docs/componentsCustomization/link","sidebar":"docs"},{"id":"componentsCustomization/node","path":"/react-easy-diagram/docs/componentsCustomization/node","sidebar":"docs"},{"id":"componentsCustomization/port","path":"/react-easy-diagram/docs/componentsCustomization/port","sidebar":"docs"},{"id":"dragAndDrop","path":"/react-easy-diagram/docs/dragAndDrop","sidebar":"docs"},{"id":"introduction","path":"/react-easy-diagram/docs/","sidebar":"docs"},{"id":"stateManagement","path":"/react-easy-diagram/docs/stateManagement","sidebar":"docs"},{"id":"userInteraction","path":"/react-easy-diagram/docs/userInteraction","sidebar":"docs"}],"draftIds":[],"sidebars":{"docs":{"link":{"path":"/react-easy-diagram/docs/","label":"introduction"}}}}],"breadcrumbs":true}}}');
;// CONCATENATED MODULE: ./.docusaurus/i18n.json
var i18n_namespaceObject = JSON.parse('{"defaultLocale":"en","locales":["en"],"currentLocale":"en","localeConfigs":{"en":{"label":"English","direction":"ltr","htmlLang":"en","calendar":"gregory"}}}');
// EXTERNAL MODULE: ./.docusaurus/codeTranslations.json
var codeTranslations = __webpack_require__(7529);
;// CONCATENATED MODULE: ./.docusaurus/site-metadata.json
var site_metadata_namespaceObject = JSON.parse('{"docusaurusVersion":"2.0.0-beta.21","siteVersion":"0.0.0","pluginVersions":{"docusaurus-plugin-content-docs":{"type":"package","name":"@docusaurus/plugin-content-docs","version":"2.0.0-beta.21"},"docusaurus-plugin-content-blog":{"type":"package","name":"@docusaurus/plugin-content-blog","version":"2.0.0-beta.21"},"docusaurus-plugin-content-pages":{"type":"package","name":"@docusaurus/plugin-content-pages","version":"2.0.0-beta.21"},"docusaurus-plugin-sitemap":{"type":"package","name":"@docusaurus/plugin-sitemap","version":"2.0.0-beta.21"},"docusaurus-theme-classic":{"type":"package","name":"@docusaurus/theme-classic","version":"2.0.0-beta.21"},"docusaurus-plugin-typedoc":{"type":"package","name":"docusaurus-plugin-typedoc","version":"0.17.5"},"docusaurus-theme-live-codeblock":{"type":"package","name":"@docusaurus/theme-live-codeblock","version":"2.0.0-beta.21"}}}');
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/docusaurusContext.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Static value on purpose: don't make it dynamic!
// Using context is still useful for testability reasons.
var contextValue={siteConfig:docusaurus_config["default"],siteMetadata:site_metadata_namespaceObject,globalData:globalData_namespaceObject,i18n:i18n_namespaceObject,codeTranslations:codeTranslations};var Context=/*#__PURE__*/react.createContext(contextValue);function DocusaurusContextProvider(_ref){var children=_ref.children;return/*#__PURE__*/react.createElement(Context.Provider,{value:contextValue},children);}

/***/ }),

/***/ 6293:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ErrorBoundary; }
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(3219);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(161);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(7092);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 1 modules
var Layout = __webpack_require__(3250);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/theme-fallback/Error/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Should we translate theme-fallback?
/* eslint-disable @docusaurus/no-untranslated-text */function ErrorDisplay(_ref){var error=_ref.error,tryAgain=_ref.tryAgain;return/*#__PURE__*/react.createElement("div",{style:{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'50vh',width:'100%',fontSize:'20px'}},/*#__PURE__*/react.createElement("h1",null,"This page crashed."),/*#__PURE__*/react.createElement("p",null,error.message),/*#__PURE__*/react.createElement("button",{type:"button",onClick:tryAgain},"Try again"));}function Error(_ref2){var error=_ref2.error,tryAgain=_ref2.tryAgain;// We wrap the error in its own error boundary because the layout can actually
// throw too... Only the ErrorDisplay component is simple enough to be
// considered safe to never throw
return/*#__PURE__*/react.createElement(ErrorBoundary// Note: we display the original error here, not the error that we
// captured in this extra error boundary
,{fallback:function fallback(){return/*#__PURE__*/react.createElement(ErrorDisplay,{error:error,tryAgain:tryAgain});}},/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("title",null,"Page Error")),/*#__PURE__*/react.createElement(Layout/* default */.Z,null,/*#__PURE__*/react.createElement(ErrorDisplay,{error:error,tryAgain:tryAgain})));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/exports/ErrorBoundary.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DefaultFallback=function DefaultFallback(params){return/*#__PURE__*/react.createElement(Error,params);};var ErrorBoundary=/*#__PURE__*/function(_React$Component){(0,inheritsLoose/* default */.Z)(ErrorBoundary,_React$Component);function ErrorBoundary(props){var _this;_this=_React$Component.call(this,props)||this;_this.state={error:null};return _this;}var _proto=ErrorBoundary.prototype;_proto.componentDidCatch=function componentDidCatch(error){// Catch errors in any components below and re-render with error message
if(ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM){this.setState({error:error});}};_proto.render=function render(){var _this2=this;var children=this.props.children;var error=this.state.error;if(error){var _this$props$fallback;var fallbackParams={error:error,tryAgain:function tryAgain(){return _this2.setState({error:null});}};var fallback=(_this$props$fallback=this.props.fallback)!=null?_this$props$fallback:DefaultFallback;return fallback(fallbackParams);}// See https://github.com/facebook/docusaurus/issues/6337#issuecomment-1012913647
return children!=null?children:null;};return ErrorBoundary;}(react.Component);

/***/ }),

/***/ 161:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var canUseDOM=!!(typeof window!=='undefined'&&window.document&&window.document.createElement);var ExecutionEnvironment={canUseDOM:canUseDOM,canUseEventListeners:// @ts-expect-error: window.attachEvent is IE specific.
// See https://github.com/Microsoft/TypeScript/issues/3953#issuecomment-123396830
canUseDOM&&!!(window.addEventListener||window.attachEvent),canUseIntersectionObserver:canUseDOM&&'IntersectionObserver'in window,canUseViewport:canUseDOM&&!!window.screen};/* harmony default export */ __webpack_exports__["Z"] = (ExecutionEnvironment);

/***/ }),

/***/ 7092:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Head; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2883);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Head(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__/* .Helmet */ .ql,props);}

/***/ }),

/***/ 1884:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ exports_Link; }
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(5773);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(808);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(4289);
// EXTERNAL MODULE: ../node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(1721);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(353);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(5626);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(161);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/LinksCollector.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var createStatefulLinksCollector=function createStatefulLinksCollector(){// Set to dedup, as it's not useful to collect multiple times the same link
var allLinks=new Set();return{collectLink:function collectLink(link){allLinks.add(link);},getCollectedLinks:function getCollectedLinks(){return[].concat(allLinks);}};};var Context=/*#__PURE__*/react.createContext({collectLink:function collectLink(){// No-op for client. We only use the broken links checker server-side.
}});var useLinksCollector=function useLinksCollector(){return (0,react.useContext)(Context);};function LinksCollectorProvider(_ref){var children=_ref.children,linksCollector=_ref.linksCollector;return/*#__PURE__*/React.createElement(Context.Provider,{value:linksCollector},children);}
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(8948);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Link.js
var _excluded=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO all this wouldn't be necessary if we used ReactRouter basename feature
// We don't automatically add base urls to all links,
// only the "safe" ones, starting with / (like /docs/introduction)
// this is because useBaseUrl() actually transforms relative links
// like "introduction" to "/baseUrl/introduction" => bad behavior to fix
var shouldAddBaseUrlAutomatically=function shouldAddBaseUrlAutomatically(to){return to.startsWith('/');};function Link(_ref,forwardedRef){var _targetLink$startsWit,_targetLink;var isNavLink=_ref.isNavLink,to=_ref.to,href=_ref.href,activeClassName=_ref.activeClassName,isActive=_ref.isActive,noBrokenLinkCheck=_ref['data-noBrokenLinkCheck'],_ref$autoAddBaseUrl=_ref.autoAddBaseUrl,autoAddBaseUrl=_ref$autoAddBaseUrl===void 0?true:_ref$autoAddBaseUrl,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig,trailingSlash=_useDocusaurusContext2.trailingSlash,baseUrl=_useDocusaurusContext2.baseUrl;var _useBaseUrlUtils=(0,useBaseUrl/* useBaseUrlUtils */.C)(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;var linksCollector=useLinksCollector();var innerRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(forwardedRef,function(){return innerRef.current;});// IMPORTANT: using to or href should not change anything
// For example, MDX links will ALWAYS give us the href props
// Using one prop or the other should not be used to distinguish
// internal links (/docs/myDoc) from external links (https://github.com)
var targetLinkUnprefixed=to||href;function maybeAddBaseUrl(str){return autoAddBaseUrl&&shouldAddBaseUrlAutomatically(str)?withBaseUrl(str):str;}var isInternal=(0,isInternalUrl/* default */.Z)(targetLinkUnprefixed);// pathname:// is a special "protocol" we use to tell Docusaurus link
// that a link is not "internal" and that we shouldn't use history.push()
// this is not ideal but a good enough escape hatch for now
// see https://github.com/facebook/docusaurus/issues/3309
// note: we want baseUrl to be appended (see issue for details)
// TODO read routes and automatically detect internal/external links?
var targetLinkWithoutPathnameProtocol=targetLinkUnprefixed==null?void 0:targetLinkUnprefixed.replace('pathname://','');// TODO we should use ReactRouter basename feature instead!
// Automatically apply base url in links that start with /
var targetLink=typeof targetLinkWithoutPathnameProtocol!=='undefined'?maybeAddBaseUrl(targetLinkWithoutPathnameProtocol):undefined;if(targetLink&&isInternal){targetLink=(0,lib.applyTrailingSlash)(targetLink,{trailingSlash:trailingSlash,baseUrl:baseUrl});}var preloaded=(0,react.useRef)(false);var LinkComponent=isNavLink?react_router_dom/* NavLink */.OL:react_router_dom/* Link */.rU;var IOSupported=ExecutionEnvironment/* default.canUseIntersectionObserver */.Z.canUseIntersectionObserver;var ioRef=(0,react.useRef)();var handleRef=function handleRef(el){innerRef.current=el;if(IOSupported&&el&&isInternal){// If IO supported and element reference found, set up Observer.
ioRef.current=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(el===entry.target){// If element is in viewport, stop observing and run callback.
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
if(entry.isIntersecting||entry.intersectionRatio>0){ioRef.current.unobserve(el);ioRef.current.disconnect();if(targetLink!=null){window.docusaurus.prefetch(targetLink);}}}});});// Add element to the observer.
ioRef.current.observe(el);}};var onMouseEnter=function onMouseEnter(){if(!preloaded.current&&targetLink!=null){window.docusaurus.preload(targetLink);preloaded.current=true;}};(0,react.useEffect)(function(){// If IO is not supported. We prefetch by default (only once).
if(!IOSupported&&isInternal){if(targetLink!=null){window.docusaurus.prefetch(targetLink);}}// When unmounting, stop intersection observer from watching.
return function(){if(IOSupported&&ioRef.current){ioRef.current.disconnect();}};},[ioRef,targetLink,IOSupported,isInternal]);var isAnchorLink=(_targetLink$startsWit=(_targetLink=targetLink)==null?void 0:_targetLink.startsWith('#'))!=null?_targetLink$startsWit:false;var isRegularHtmlLink=!targetLink||!isInternal||isAnchorLink;if(!isRegularHtmlLink&&!noBrokenLinkCheck){linksCollector.collectLink(targetLink);}return isRegularHtmlLink?/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
react.createElement("a",(0,esm_extends/* default */.Z)({ref:innerRef,href:targetLink},targetLinkUnprefixed&&!isInternal&&{target:'_blank',rel:'noopener noreferrer'},props)):/*#__PURE__*/react.createElement(LinkComponent,(0,esm_extends/* default */.Z)({},props,{onMouseEnter:onMouseEnter,innerRef:handleRef,to:targetLink// Avoid "React does not recognize the `activeClassName` prop on a DOM
// element"
},isNavLink&&{isActive:isActive,activeClassName:activeClassName}));}/* harmony default export */ var exports_Link = (/*#__PURE__*/react.forwardRef(Link));

/***/ }),

/***/ 9213:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Translate; },
  "I": function() { return /* binding */ translate; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Interpolate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function interpolate(text,values){// eslint-disable-next-line prefer-named-capture-group
var segments=text.split(/(\{\w+\})/).map(function(seg,index){// Odd indices (1, 3, 5...) of the segments are (potentially) interpolatable
if(index%2===1){var value=values==null?void 0:values[seg.slice(1,-1)];if(value!==undefined){return value;}// No match: add warning? There's no way to "escape" interpolation though
}return seg;});if(segments.some(function(seg){return/*#__PURE__*/(0,react.isValidElement)(seg);})){return segments.map(function(seg,index){return/*#__PURE__*/(0,react.isValidElement)(seg)?/*#__PURE__*/react.cloneElement(seg,{key:index}):seg;}).filter(function(seg){return seg!=='';});}return segments.join('');}function Interpolate(_ref){var children=_ref.children,values=_ref.values;if(typeof children!=='string'){throw new Error("The Docusaurus <Interpolate> component only accept simple string values. Received: "+(/*#__PURE__*/isValidElement(children)?'React element':typeof children));}return/*#__PURE__*/React.createElement(React.Fragment,null,interpolate(children,values));}
// EXTERNAL MODULE: ./.docusaurus/codeTranslations.json
var codeTranslations = __webpack_require__(7529);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Translate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Can't read it from context, due to exposing imperative API
function getLocalizedMessage(_ref){var _ref2,_codeTranslations;var id=_ref.id,message=_ref.message;if(typeof id==='undefined'&&typeof message==='undefined'){throw new Error('Docusaurus translation declarations must have at least a translation id or a default translation message');}return(_ref2=(_codeTranslations=codeTranslations[id!=null?id:message])!=null?_codeTranslations:message)!=null?_ref2:id;}// Imperative translation API is useful for some edge-cases:
// - translating page titles (meta)
// - translating string props (input placeholders, image alt, aria labels...)
function translate(_ref3,values){var message=_ref3.message,id=_ref3.id;var localizedMessage=getLocalizedMessage({message:message,id:id});return interpolate(localizedMessage,values);}// Maybe we'll want to improve this component with additional features
// Like toggling a translation mode that adds a little translation button near
// the text?
function Translate(_ref4){var children=_ref4.children,id=_ref4.id,values=_ref4.values;if(children&&typeof children!=='string'){console.warn('Illegal <Translate> children',children);throw new Error('The Docusaurus <Translate> component only accept simple string values');}var localizedMessage=getLocalizedMessage({message:children,id:id});return/*#__PURE__*/react.createElement(react.Fragment,null,interpolate(localizedMessage,values));}

/***/ }),

/***/ 5688:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": function() { return /* binding */ DEFAULT_PLUGIN_ID; }
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Constants used on the client-side: duplicated from server-side code
var DEFAULT_PLUGIN_ID='default';

/***/ }),

/***/ 5626:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ isInternalUrl; },
/* harmony export */   "b": function() { return /* binding */ hasProtocol; }
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function hasProtocol(url){return /^(?:\w*:|\/\/)/.test(url);}function isInternalUrl(url){return typeof url!=='undefined'&&!hasProtocol(url);}

/***/ }),

/***/ 8948:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ useBaseUrlUtils; },
/* harmony export */   "Z": function() { return /* binding */ useBaseUrl; }
/* harmony export */ });
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(353);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5626);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function addBaseUrl(siteUrl,baseUrl,url,_temp){var _ref=_temp===void 0?{}:_temp,_ref$forcePrependBase=_ref.forcePrependBaseUrl,forcePrependBaseUrl=_ref$forcePrependBase===void 0?false:_ref$forcePrependBase,_ref$absolute=_ref.absolute,absolute=_ref$absolute===void 0?false:_ref$absolute;// It never makes sense to add base url to a local anchor url, or one with a
// protocol
if(!url||url.startsWith('#')||(0,_isInternalUrl__WEBPACK_IMPORTED_MODULE_1__/* .hasProtocol */ .b)(url)){return url;}if(forcePrependBaseUrl){return baseUrl+url.replace(/^\//,'');}// /baseUrl -> /baseUrl/
// https://github.com/facebook/docusaurus/issues/6315
if(url===baseUrl.replace(/\/$/,'')){return baseUrl;}// We should avoid adding the baseurl twice if it's already there
var shouldAddBaseUrl=!url.startsWith(baseUrl);var basePath=shouldAddBaseUrl?baseUrl+url.replace(/^\//,''):url;return absolute?siteUrl+basePath:basePath;}function useBaseUrlUtils(){var _useDocusaurusContext=(0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig,baseUrl=_useDocusaurusContext2.baseUrl,siteUrl=_useDocusaurusContext2.url;return{withBaseUrl:function withBaseUrl(url,options){return addBaseUrl(siteUrl,baseUrl,url,options);}};}function useBaseUrl(url,options){if(options===void 0){options={};}var _useBaseUrlUtils=useBaseUrlUtils(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;return withBaseUrl(url,options);}

/***/ }),

/***/ 353:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDocusaurusContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _docusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3340);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useDocusaurusContext(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_docusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ ._);}

/***/ }),

/***/ 6457:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useIsBrowser; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _browserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3427);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useIsBrowser(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_browserContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ ._);}

/***/ }),

/***/ 3361:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ flat; }
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var isTree=function isTree(x){return typeof x==='object'&&!!x&&Object.keys(x).length>0;};/**
 * Takes a tree, and flattens it into a map of keyPath -> value.
 *
 * ```js
 * flat({ a: { b: 1 } }) === { "a.b": 1 };
 * flat({ a: [1, 2] }) === { "a.0": 1, "a.1": 2 };
 * ```
 */function flat(target){var delimiter='.';var output={};function dfs(object,prefix){Object.entries(object).forEach(function(_ref){var key=_ref[0],value=_ref[1];var newKey=prefix?""+prefix+delimiter+key:key;if(isTree(value)){dfs(value,newKey);}else{output[newKey]=value;}});}dfs(target);return output;}

/***/ }),

/***/ 6881:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ Context; },
/* harmony export */   "z": function() { return /* binding */ RouteContextProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function mergeContexts(_ref){var parent=_ref.parent,value=_ref.value;if(!parent){if(!value){throw new Error('Unexpected: no Docusaurus route context found');}else if(!('plugin'in value)){throw new Error('Unexpected: Docusaurus topmost route context has no `plugin` attribute');}return value;}// TODO deep merge this
var data=Object.assign({},parent.data,value==null?void 0:value.data);return{// Nested routes are not supposed to override plugin attribute
plugin:parent.plugin,data:data};}function RouteContextProvider(_ref2){var children=_ref2.children,value=_ref2.value;var parent=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);var mergedValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return mergeContexts({parent:parent,value:value});},[parent,value]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:mergedValue},children);}

/***/ }),

/***/ 2935:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Iw": function() { return /* binding */ useActiveDocContext; },
  "gA": function() { return /* binding */ useActivePlugin; },
  "_r": function() { return /* binding */ useAllDocsData; },
  "Jo": function() { return /* binding */ useDocVersionSuggestions; },
  "zh": function() { return /* binding */ useDocsData; },
  "yW": function() { return /* binding */ useLatestVersion; },
  "gB": function() { return /* binding */ useVersions; }
});

// UNUSED EXPORTS: useActivePluginAndVersion, useActiveVersion

// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5331);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(353);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/constants.js
var constants = __webpack_require__(5688);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useGlobalData.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useGlobalData(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),globalData=_useDocusaurusContext.globalData;return globalData;}function useAllPluginInstancesData(pluginName,options){if(options===void 0){options={};}var globalData=useGlobalData();var pluginGlobalData=globalData[pluginName];if(!pluginGlobalData&&options.failfast){throw new Error("Docusaurus plugin global data not found for \""+pluginName+"\" plugin.");}return pluginGlobalData;}function usePluginData(pluginName,pluginId,options){if(pluginId===void 0){pluginId=constants/* DEFAULT_PLUGIN_ID */.m;}if(options===void 0){options={};}var pluginGlobalData=useAllPluginInstancesData(pluginName);var pluginInstanceGlobalData=pluginGlobalData==null?void 0:pluginGlobalData[pluginId];if(!pluginInstanceGlobalData&&options.failfast){throw new Error("Docusaurus plugin global data not found for \""+pluginName+"\" plugin with id \""+pluginId+"\".");}return pluginInstanceGlobalData;}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/plugin-content-docs/lib/client/docsClientUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// This code is not part of the api surface, not in ./theme on purpose
// get the data of the plugin that is currently "active"
// ie the docs of that plugin are currently browsed
// it is useful to support multiple docs plugin instances
function getActivePlugin(allPluginData,pathname,options){if(options===void 0){options={};}var activeEntry=Object.entries(allPluginData)// Route sorting: '/android/foo' should match '/android' instead of '/'
.sort(function(a,b){return b[1].path.localeCompare(a[1].path);}).find(function(_ref){var pluginData=_ref[1];return!!(0,react_router/* matchPath */.LX)(pathname,{path:pluginData.path,exact:false,strict:false});});var activePlugin=activeEntry?{pluginId:activeEntry[0],pluginData:activeEntry[1]}:undefined;if(!activePlugin&&options.failfast){throw new Error("Can't find active docs plugin for \""+pathname+"\" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(allPluginData).map(function(plugin){return plugin.path;}).join(', '));}return activePlugin;}var getLatestVersion=function getLatestVersion(data){return data.versions.find(function(version){return version.isLast;});};function docsClientUtils_getActiveVersion(data,pathname){var lastVersion=getLatestVersion(data);// Last version is a route like /docs/*,
// we need to match it last or it would match /docs/version-1.0/* as well
var orderedVersionsMetadata=[].concat(data.versions.filter(function(version){return version!==lastVersion;}),[lastVersion]);return orderedVersionsMetadata.find(function(version){return!!(0,react_router/* matchPath */.LX)(pathname,{path:version.path,exact:false,strict:false});});}function getActiveDocContext(data,pathname){var activeVersion=docsClientUtils_getActiveVersion(data,pathname);var activeDoc=activeVersion==null?void 0:activeVersion.docs.find(function(doc){return!!(0,react_router/* matchPath */.LX)(pathname,{path:doc.path,exact:true,strict:false});});function getAlternateVersionDocs(docId){var result={};data.versions.forEach(function(version){version.docs.forEach(function(doc){if(doc.id===docId){result[version.name]=doc;}});});return result;}var alternateVersionDocs=activeDoc?getAlternateVersionDocs(activeDoc.id):{};return{activeVersion:activeVersion,activeDoc:activeDoc,alternateDocVersions:alternateVersionDocs};}function getDocVersionSuggestions(data,pathname){var latestVersion=getLatestVersion(data);var activeDocContext=getActiveDocContext(data,pathname);var latestDocSuggestion=activeDocContext.alternateDocVersions[latestVersion.name];return{latestDocSuggestion:latestDocSuggestion,latestVersionSuggestion:latestVersion};}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/plugin-content-docs/lib/client/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Important to use a constant object to avoid React useEffect executions etc.
// see https://github.com/facebook/docusaurus/issues/5089
var StableEmptyObject={};// In blog-only mode, docs hooks are still used by the theme. We need a fail-
// safe fallback when the docs plugin is not in use
var useAllDocsData=function useAllDocsData(){var _useAllPluginInstance;return(_useAllPluginInstance=useAllPluginInstancesData('docusaurus-plugin-content-docs'))!=null?_useAllPluginInstance:StableEmptyObject;};var useDocsData=function useDocsData(pluginId){return usePluginData('docusaurus-plugin-content-docs',pluginId,{failfast:true});};// TODO this feature should be provided by docusaurus core
function useActivePlugin(options){if(options===void 0){options={};}var data=useAllDocsData();var _useLocation=(0,react_router/* useLocation */.TH)(),pathname=_useLocation.pathname;return getActivePlugin(data,pathname,options);}function useActivePluginAndVersion(options){if(options===void 0){options={};}var activePlugin=useActivePlugin(options);var _useLocation2=useLocation(),pathname=_useLocation2.pathname;if(!activePlugin){return undefined;}var activeVersion=getActiveVersion(activePlugin.pluginData,pathname);return{activePlugin:activePlugin,activeVersion:activeVersion};}function useVersions(pluginId){var data=useDocsData(pluginId);return data.versions;}function useLatestVersion(pluginId){var data=useDocsData(pluginId);return getLatestVersion(data);}function useActiveVersion(pluginId){var data=useDocsData(pluginId);var _useLocation3=useLocation(),pathname=_useLocation3.pathname;return getActiveVersion(data,pathname);}function useActiveDocContext(pluginId){var data=useDocsData(pluginId);var _useLocation4=(0,react_router/* useLocation */.TH)(),pathname=_useLocation4.pathname;return getActiveDocContext(data,pathname);}function useDocVersionSuggestions(pluginId){var data=useDocsData(pluginId);var _useLocation5=(0,react_router/* useLocation */.TH)(),pathname=_useLocation5.pathname;return getDocVersionSuggestions(data,pathname);}

/***/ }),

/***/ 4374:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8504);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */nprogress__WEBPACK_IMPORTED_MODULE_0___default().configure({showSpinner:false});var delay=200;var clientModule={onRouteUpdate:function onRouteUpdate(_ref){var location=_ref.location,previousLocation=_ref.previousLocation;if(previousLocation&&location.pathname!==previousLocation.pathname){var progressBarTimeout=window.setTimeout(function(){nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();},delay);return function(){return window.clearTimeout(progressBarTimeout);};}return undefined;},onRouteDidUpdate:function onRouteDidUpdate(){nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();}};/* harmony default export */ __webpack_exports__["default"] = (clientModule);

/***/ }),

/***/ 3815:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(2349);
// EXTERNAL MODULE: ./.docusaurus/docusaurus.config.mjs
var docusaurus_config = __webpack_require__(6809);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/prism-include-languages.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function prismIncludeLanguages(PrismObject){var prism=docusaurus_config["default"].themeConfig.prism;var additionalLanguages=prism.additionalLanguages;// Prism components work on the Prism instance on the window, while prism-
// react-renderer uses its own Prism instance. We temporarily mount the
// instance onto window, import components to enhance it, then remove it to
// avoid polluting global namespace.
// You can mutate PrismObject: registering plugins, deleting languages... As
// long as you don't re-assign it
globalThis.Prism=PrismObject;additionalLanguages.forEach(function(lang){// eslint-disable-next-line global-require, import/no-dynamic-require
__webpack_require__(3392)("./prism-"+lang);});delete globalThis.Prism;}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/prism-include-languages.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */prismIncludeLanguages(prism/* default */.Z);

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ AnnouncementBar; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(8944);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/announcementBar.js
var contexts_announcementBar = __webpack_require__(10);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(624);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(9213);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/IconClose/index.js
var IconClose = __webpack_require__(1579);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"announcementBar":"announcementBar_zJRd","announcementBarPlaceholder":"announcementBarPlaceholder_NpUd","announcementBarClose":"announcementBarClose_Jjdj","announcementBarContent":"announcementBarContent_t7IR"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBar(){var _useAnnouncementBar=(0,contexts_announcementBar/* useAnnouncementBar */.nT)(),isActive=_useAnnouncementBar.isActive,close=_useAnnouncementBar.close;var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.L)(),announcementBar=_useThemeConfig.announcementBar;if(!isActive){return null;}var content=announcementBar.content,backgroundColor=announcementBar.backgroundColor,textColor=announcementBar.textColor,isCloseable=announcementBar.isCloseable;return/*#__PURE__*/react.createElement("div",{className:styles_module.announcementBar,style:{backgroundColor:backgroundColor,color:textColor},role:"banner"},isCloseable&&/*#__PURE__*/react.createElement("div",{className:styles_module.announcementBarPlaceholder}),/*#__PURE__*/react.createElement("div",{className:styles_module.announcementBarContent// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:content}}),isCloseable?/*#__PURE__*/react.createElement("button",{type:"button",className:(0,clsx_m/* default */.Z)('clean-btn close',styles_module.announcementBarClose),onClick:close,"aria-label":(0,Translate/* translate */.I)({id:'theme.AnnouncementBar.closeButtonAriaLabel',message:'Close',description:'The ARIA label for close button of announcement bar'})},/*#__PURE__*/react.createElement(IconClose/* default */.Z,{width:14,height:14,strokeWidth:3.1})):null);}

/***/ }),

/***/ 1124:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_Footer; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(624);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/footerUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * A rough duck-typing about whether the `footer.links` is intended to be multi-
 * column.
 */function isMultiColumnFooterLinks(links){return'title'in links[0];}
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(5773);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(808);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(1884);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(8948);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(5626);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/IconExternalLink/index.js + 1 modules
var IconExternalLink = __webpack_require__(7618);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Footer/LinkItem/index.js
var _excluded=["to","href","label","prependBaseUrlToHref"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLinkItem(_ref){var item=_ref.item;var to=item.to,href=item.href,label=item.label,prependBaseUrlToHref=item.prependBaseUrlToHref,props=(0,objectWithoutPropertiesLoose/* default */.Z)(item,_excluded);var toUrl=(0,useBaseUrl/* default */.Z)(to);var normalizedHref=(0,useBaseUrl/* default */.Z)(href,{forcePrependBaseUrl:true});return/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({className:"footer__link-item"},href?{href:prependBaseUrlToHref?normalizedHref:href}:{to:toUrl},props),label,href&&!(0,isInternalUrl/* default */.Z)(href)&&/*#__PURE__*/react.createElement(IconExternalLink/* default */.Z,null));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Footer/Links/MultiColumn/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ColumnLinkItem(_ref){var _item$href;var item=_ref.item;return item.html?/*#__PURE__*/react.createElement("li",{className:"footer__item"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:item.html}}):/*#__PURE__*/react.createElement("li",{key:(_item$href=item.href)!=null?_item$href:item.to,className:"footer__item"},/*#__PURE__*/react.createElement(FooterLinkItem,{item:item}));}function Column(_ref2){var column=_ref2.column;return/*#__PURE__*/react.createElement("div",{className:"col footer__col"},/*#__PURE__*/react.createElement("div",{className:"footer__title"},column.title),/*#__PURE__*/react.createElement("ul",{className:"footer__items clean-list"},column.items.map(function(item,i){return/*#__PURE__*/react.createElement(ColumnLinkItem,{key:i,item:item});})));}function FooterLinksMultiColumn(_ref3){var columns=_ref3.columns;return/*#__PURE__*/react.createElement("div",{className:"row footer__links"},columns.map(function(column,i){return/*#__PURE__*/react.createElement(Column,{key:i,column:column});}));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Footer/Links/Simple/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Separator(){return/*#__PURE__*/react.createElement("span",{className:"footer__link-separator"},"\xB7");}function SimpleLinkItem(_ref){var item=_ref.item;return item.html?/*#__PURE__*/react.createElement("span",{className:"footer__link-item"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:item.html}}):/*#__PURE__*/react.createElement(FooterLinkItem,{item:item});}function FooterLinksSimple(_ref2){var links=_ref2.links;return/*#__PURE__*/react.createElement("div",{className:"footer__links text--center"},/*#__PURE__*/react.createElement("div",{className:"footer__links"},links.map(function(item,i){return/*#__PURE__*/react.createElement(react.Fragment,{key:i},/*#__PURE__*/react.createElement(SimpleLinkItem,{item:item}),links.length!==i+1&&/*#__PURE__*/react.createElement(Separator,null));})));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Footer/Links/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLinks(_ref){var links=_ref.links;return isMultiColumnFooterLinks(links)?/*#__PURE__*/react.createElement(FooterLinksMultiColumn,{columns:links}):/*#__PURE__*/react.createElement(FooterLinksSimple,{links:links});}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/index.js + 1 modules
var ThemedImage = __webpack_require__(4034);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Footer/Logo/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"footerLogoLink":"footerLogoLink_tutC"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Footer/Logo/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LogoImage(_ref){var _logo$srcDark;var logo=_ref.logo;var _useBaseUrlUtils=(0,useBaseUrl/* useBaseUrlUtils */.C)(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;var sources={light:withBaseUrl(logo.src),dark:withBaseUrl((_logo$srcDark=logo.srcDark)!=null?_logo$srcDark:logo.src)};return/*#__PURE__*/react.createElement(ThemedImage/* default */.Z,{className:"footer__logo",alt:logo.alt,sources:sources,width:logo.width,height:logo.height});}function FooterLogo(_ref2){var logo=_ref2.logo;return logo.href?/*#__PURE__*/react.createElement(Link/* default */.Z,{href:logo.href,className:styles_module.footerLogoLink},/*#__PURE__*/react.createElement(LogoImage,{logo:logo})):/*#__PURE__*/react.createElement(LogoImage,{logo:logo});}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Footer/Copyright/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterCopyright(_ref){var copyright=_ref.copyright;return/*#__PURE__*/react.createElement("div",{className:"footer__copyright"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:copyright}});}
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(8944);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Footer/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLayout(_ref){var style=_ref.style,links=_ref.links,logo=_ref.logo,copyright=_ref.copyright;return/*#__PURE__*/react.createElement("footer",{className:(0,clsx_m/* default */.Z)('footer',{'footer--dark':style==='dark'})},/*#__PURE__*/react.createElement("div",{className:"container container-fluid"},links,(logo||copyright)&&/*#__PURE__*/react.createElement("div",{className:"footer__bottom text--center"},logo&&/*#__PURE__*/react.createElement("div",{className:"margin-bottom--sm"},logo),copyright)));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Footer(){var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.L)(),footer=_useThemeConfig.footer;if(!footer){return null;}var copyright=footer.copyright,links=footer.links,logo=footer.logo,style=footer.style;return/*#__PURE__*/react.createElement(FooterLayout,{style:style,links:links&&links.length>0&&/*#__PURE__*/react.createElement(FooterLinks,{links:links}),logo:logo&&/*#__PURE__*/react.createElement(FooterLogo,{logo:logo}),copyright:copyright&&/*#__PURE__*/react.createElement(FooterCopyright,{copyright:copyright})});}/* harmony default export */ var theme_Footer = (/*#__PURE__*/react.memo(Footer));

/***/ }),

/***/ 1579:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ IconClose; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5773);
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(808);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
var _excluded=["width","height","color","strokeWidth","className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconClose(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?21:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?21:_ref$height,_ref$color=_ref.color,color=_ref$color===void 0?'currentColor':_ref$color,_ref$strokeWidth=_ref.strokeWidth,strokeWidth=_ref$strokeWidth===void 0?1.2:_ref$strokeWidth,className=_ref.className,restProps=(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_ref,_excluded);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({viewBox:"0 0 15 15",width:width,height:height},restProps),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{stroke:color,strokeWidth:strokeWidth},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})));}

/***/ }),

/***/ 7618:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ IconExternalLink; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/IconExternalLink/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"iconExternalLink":"iconExternalLink_TTUJ"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/IconExternalLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconExternalLink(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?13.5:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?13.5:_ref$height;return/*#__PURE__*/react.createElement("svg",{width:width,height:height,"aria-hidden":"true",viewBox:"0 0 24 24",className:styles_module.iconExternalLink},/*#__PURE__*/react.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}));}

/***/ }),

/***/ 3250:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Layout; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(8944);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/ErrorBoundary.js + 1 modules
var ErrorBoundary = __webpack_require__(6293);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/hooks/useKeyboardNavigation.js + 1 modules
var useKeyboardNavigation = __webpack_require__(174);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(8831);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(5484);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/SkipToContent/index.js + 2 modules
var SkipToContent = __webpack_require__(6076);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/index.js + 1 modules
var AnnouncementBar = __webpack_require__(717);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/index.js + 38 modules
var Navbar = __webpack_require__(9033);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Footer/index.js + 9 modules
var Footer = __webpack_require__(1124);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/LayoutProviders/index.js + 1 modules
var LayoutProviders = __webpack_require__(2801);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(9213);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/ErrorPageContent.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ErrorPageContent(_ref){var error=_ref.error,tryAgain=_ref.tryAgain;return/*#__PURE__*/react.createElement("main",{className:"container margin-vert--xl"},/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("div",{className:"col col--6 col--offset-3"},/*#__PURE__*/react.createElement("h1",{className:"hero__title"},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.ErrorPageContent.title",description:"The title of the fallback page when the page crashed"},"This page crashed.")),/*#__PURE__*/react.createElement("p",null,error.message),/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("button",{type:"button",onClick:tryAgain},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.ErrorPageContent.tryAgain",description:"The label of the button to try again when the page crashed"},"Try again"))))));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Layout(props){var children=props.children,noFooter=props.noFooter,wrapperClassName=props.wrapperClassName,title=props.title,description=props.description;(0,useKeyboardNavigation/* useKeyboardNavigation */.t)();return/*#__PURE__*/react.createElement(LayoutProviders/* default */.Z,null,/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,{title:title,description:description}),/*#__PURE__*/react.createElement(SkipToContent/* default */.Z,null),/*#__PURE__*/react.createElement(AnnouncementBar/* default */.Z,null),/*#__PURE__*/react.createElement(Navbar/* default */.Z,null),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.wrapper.main */.k.wrapper.main,wrapperClassName)},/*#__PURE__*/react.createElement(ErrorBoundary/* default */.Z,{fallback:function fallback(params){return/*#__PURE__*/react.createElement(ErrorPageContent,params);}},children)),!noFooter&&/*#__PURE__*/react.createElement(Footer/* default */.Z,null));}

/***/ }),

/***/ 2801:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ LayoutProviders; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js
var storageUtils = __webpack_require__(1819);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/tabGroupChoice.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TAB_CHOICE_PREFIX='docusaurus.tab.';var Context=/*#__PURE__*/react.createContext(undefined);function useContextValue(){var _useState=(0,react.useState)({}),tabGroupChoices=_useState[0],setChoices=_useState[1];var setChoiceSyncWithLocalStorage=(0,react.useCallback)(function(groupId,newChoice){(0,storageUtils/* createStorageSlot */.W)(""+TAB_CHOICE_PREFIX+groupId).set(newChoice);},[]);(0,react.useEffect)(function(){try{var localStorageChoices={};(0,storageUtils/* listStorageKeys */._)().forEach(function(storageKey){if(storageKey.startsWith(TAB_CHOICE_PREFIX)){var groupId=storageKey.substring(TAB_CHOICE_PREFIX.length);localStorageChoices[groupId]=(0,storageUtils/* createStorageSlot */.W)(storageKey).get();}});setChoices(localStorageChoices);}catch(err){console.error(err);}},[]);var setTabGroupChoices=(0,react.useCallback)(function(groupId,newChoice){setChoices(function(oldChoices){var _Object$assign;return Object.assign({},oldChoices,(_Object$assign={},_Object$assign[groupId]=newChoice,_Object$assign));});setChoiceSyncWithLocalStorage(groupId,newChoice);},[setChoiceSyncWithLocalStorage]);return (0,react.useMemo)(function(){return{tabGroupChoices:tabGroupChoices,setTabGroupChoices:setTabGroupChoices};},[tabGroupChoices,setTabGroupChoices]);}function TabGroupChoiceProvider(_ref){var children=_ref.children;var value=useContextValue();return/*#__PURE__*/react.createElement(Context.Provider,{value:value},children);}function useTabGroupChoice(){var context=useContext(Context);if(context==null){throw new ReactContextError('TabGroupChoiceProvider');}return context;}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var colorMode = __webpack_require__(5421);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/announcementBar.js
var announcementBar = __webpack_require__(10);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(3457);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/docsPreferredVersion.js
var docsPreferredVersion = __webpack_require__(4453);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(8831);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/navbarUtils.js
var navbarUtils = __webpack_require__(3211);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/LayoutProviders/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LayoutProviders(_ref){var children=_ref.children;return/*#__PURE__*/react.createElement(colorMode/* ColorModeProvider */.S,null,/*#__PURE__*/react.createElement(announcementBar/* AnnouncementBarProvider */.pl,null,/*#__PURE__*/react.createElement(TabGroupChoiceProvider,null,/*#__PURE__*/react.createElement(scrollUtils/* ScrollControllerProvider */.OC,null,/*#__PURE__*/react.createElement(docsPreferredVersion/* DocsPreferredVersionContextProvider */.L5,null,/*#__PURE__*/react.createElement(metadataUtils/* PluginHtmlClassNameProvider */.VC,null,/*#__PURE__*/react.createElement(navbarUtils/* NavbarProvider */.V,null,children)))))));}

/***/ }),

/***/ 898:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Logo; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5773);
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(808);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1884);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8948);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(353);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(624);
/* harmony import */ var _theme_ThemedImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4034);
var _excluded=["imageClassName","titleClassName"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Logo(props){var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(),title=_useDocusaurusContext.siteConfig.title;var _useThemeConfig=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .useThemeConfig */ .L)(),_useThemeConfig$navba=_useThemeConfig.navbar,navbarTitle=_useThemeConfig$navba.title,_useThemeConfig$navba2=_useThemeConfig$navba.logo,logo=_useThemeConfig$navba2===void 0?{src:''}:_useThemeConfig$navba2;var imageClassName=props.imageClassName,titleClassName=props.titleClassName,propsRest=(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(props,_excluded);var logoLink=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(logo.href||'/');var sources={light:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(logo.src),dark:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(logo.srcDark||logo.src)};var themedImage=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_ThemedImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{sources:sources,height:logo.height,width:logo.width,alt:logo.alt||navbarTitle||title});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({to:logoLink},propsRest,logo.target&&{target:logo.target}),logo.src&&(imageClassName?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:imageClassName},themedImage):themedImage),navbarTitle!=null&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",{className:titleClassName},navbarTitle));}

/***/ }),

/***/ 9033:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Navbar; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(5773);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(8944);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(624);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js + 1 modules
var navbarMobileSidebar = __webpack_require__(2335);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
var useLocationChange = __webpack_require__(4993);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(3457);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/hooks/useHideableNavbar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Wires the imperative logic of a hideable navbar.
 * @param hideOnScroll If `false`, this hook is basically a no-op.
 */function useHideableNavbar(hideOnScroll){var _useState=(0,react.useState)(hideOnScroll),isNavbarVisible=_useState[0],setIsNavbarVisible=_useState[1];var isFocusedAnchor=(0,react.useRef)(false);var navbarHeight=(0,react.useRef)(0);var navbarRef=(0,react.useCallback)(function(node){if(node!==null){navbarHeight.current=node.getBoundingClientRect().height;}},[]);(0,scrollUtils/* useScrollPosition */.RF)(function(_ref,lastPosition){var scrollTop=_ref.scrollY;if(!hideOnScroll){return;}// Needed mostly for handling rubber band scrolling.
// See https://github.com/facebook/docusaurus/pull/5721
if(scrollTop<navbarHeight.current){setIsNavbarVisible(true);return;}if(isFocusedAnchor.current){isFocusedAnchor.current=false;return;}var lastScrollTop=lastPosition==null?void 0:lastPosition.scrollY;var documentHeight=document.documentElement.scrollHeight-navbarHeight.current;var windowHeight=window.innerHeight;if(lastScrollTop&&scrollTop>=lastScrollTop){setIsNavbarVisible(false);}else if(scrollTop+windowHeight<documentHeight){setIsNavbarVisible(true);}});(0,useLocationChange/* useLocationChange */.S)(function(locationChangeEvent){if(!hideOnScroll){return;}if(locationChangeEvent.location.hash){isFocusedAnchor.current=true;setIsNavbarVisible(false);return;}setIsNavbarVisible(true);});return{navbarRef:navbarRef,isNavbarVisible:isNavbarVisible};}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/hooks/useLockBodyScroll.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Side-effect that locks the document body's scroll throughout the lifetime of
 * the containing component. e.g. when the mobile sidebar is expanded.
 */function useLockBodyScroll(lock){if(lock===void 0){lock=true;}(0,react.useEffect)(function(){document.body.style.overflow=lock?'hidden':'visible';return function(){document.body.style.overflow='visible';};},[lock]);}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/display.js
var display = __webpack_require__(5530);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarMobileSidebarLayout(_ref){var header=_ref.header,primaryMenu=_ref.primaryMenu,secondaryMenu=_ref.secondaryMenu;var _useNavbarSecondaryMe=(0,display/* useNavbarSecondaryMenu */.Y)(),secondaryMenuShown=_useNavbarSecondaryMe.shown;return/*#__PURE__*/react.createElement("div",{className:"navbar-sidebar"},header,/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('navbar-sidebar__items',{'navbar-sidebar__items--show-secondary':secondaryMenuShown})},/*#__PURE__*/react.createElement("div",{className:"navbar-sidebar__item menu"},primaryMenu),/*#__PURE__*/react.createElement("div",{className:"navbar-sidebar__item menu"},secondaryMenu)));}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(5421);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(6457);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(9213);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/IconLightMode/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconLightMode(props){return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({viewBox:"0 0 24 24",width:24,height:24},props),/*#__PURE__*/react.createElement("path",{fill:"currentColor",d:"M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"}));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/IconDarkMode/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconDarkMode(props){return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({viewBox:"0 0 24 24",width:24,height:24},props),/*#__PURE__*/react.createElement("path",{fill:"currentColor",d:"M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"}));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/ColorModeToggle/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"toggle":"toggle_ki11","toggleButton":"toggleButton_MMFG","darkToggleIcon":"darkToggleIcon_U96C","lightToggleIcon":"lightToggleIcon_lgto","toggleButtonDisabled":"toggleButtonDisabled_Uw7m"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/ColorModeToggle/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ColorModeToggle(_ref){var className=_ref.className,value=_ref.value,onChange=_ref.onChange;var isBrowser=(0,useIsBrowser/* default */.Z)();var title=(0,Translate/* translate */.I)({message:'Switch between dark and light mode (currently {mode})',id:'theme.colorToggle.ariaLabel',description:'The ARIA label for the navbar color mode toggle'},{mode:value==='dark'?(0,Translate/* translate */.I)({message:'dark mode',id:'theme.colorToggle.ariaLabel.mode.dark',description:'The name for the dark color mode'}):(0,Translate/* translate */.I)({message:'light mode',id:'theme.colorToggle.ariaLabel.mode.light',description:'The name for the light color mode'})});return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(styles_module.toggle,className)},/*#__PURE__*/react.createElement("button",{className:(0,clsx_m/* default */.Z)('clean-btn',styles_module.toggleButton,!isBrowser&&styles_module.toggleButtonDisabled),type:"button",onClick:function onClick(){return onChange(value==='dark'?'light':'dark');},disabled:!isBrowser,title:title,"aria-label":title},/*#__PURE__*/react.createElement(IconLightMode,{className:(0,clsx_m/* default */.Z)(styles_module.toggleIcon,styles_module.lightToggleIcon)}),/*#__PURE__*/react.createElement(IconDarkMode,{className:(0,clsx_m/* default */.Z)(styles_module.toggleIcon,styles_module.darkToggleIcon)})));}/* harmony default export */ var theme_ColorModeToggle = (/*#__PURE__*/react.memo(ColorModeToggle));
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/ColorModeToggle/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarColorModeToggle(_ref){var className=_ref.className;var disabled=(0,useThemeConfig/* useThemeConfig */.L)().colorMode.disableSwitch;var _useColorMode=(0,contexts_colorMode/* useColorMode */.I)(),colorMode=_useColorMode.colorMode,setColorMode=_useColorMode.setColorMode;if(disabled){return null;}return/*#__PURE__*/react.createElement(theme_ColorModeToggle,{className:className,value:colorMode,onChange:setColorMode});}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/IconClose/index.js
var IconClose = __webpack_require__(1579);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Logo/index.js
var Logo = __webpack_require__(898);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Logo/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarLogo(){return/*#__PURE__*/react.createElement(Logo/* default */.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title text--truncate"});}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/Header/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CloseButton(){var mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.e)();return/*#__PURE__*/react.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:function onClick(){return mobileSidebar.toggle();}},/*#__PURE__*/react.createElement(IconClose/* default */.Z,{color:"var(--ifm-color-emphasis-600)"}));}function NavbarMobileSidebarHeader(){return/*#__PURE__*/react.createElement("div",{className:"navbar-sidebar__brand"},/*#__PURE__*/react.createElement(NavbarLogo,null),/*#__PURE__*/react.createElement(NavbarColorModeToggle,{className:"margin-right--md"}),/*#__PURE__*/react.createElement(CloseButton,null));}
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(808);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(1884);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(8948);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(5626);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/regexpUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Matches a string regex (as provided from the config) against a target in a
 * null-safe fashion, case insensitive and global.
 */function isRegexpStringMatch(regexAsString,valueToTest){if(typeof regexAsString==='undefined'||typeof valueToTest==='undefined'){return false;}return new RegExp(regexAsString,'gi').test(valueToTest);}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/IconExternalLink/index.js + 1 modules
var IconExternalLink = __webpack_require__(7618);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/NavbarNavLink.js
var _excluded=["activeBasePath","activeBaseRegex","to","href","label","html","isDropdownLink","prependBaseUrlToHref"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarNavLink(_ref){var activeBasePath=_ref.activeBasePath,activeBaseRegex=_ref.activeBaseRegex,to=_ref.to,href=_ref.href,label=_ref.label,html=_ref.html,isDropdownLink=_ref.isDropdownLink,prependBaseUrlToHref=_ref.prependBaseUrlToHref,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);// TODO all this seems hacky
// {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
var toUrl=(0,useBaseUrl/* default */.Z)(to);var activeBaseUrl=(0,useBaseUrl/* default */.Z)(activeBasePath);var normalizedHref=(0,useBaseUrl/* default */.Z)(href,{forcePrependBaseUrl:true});var isExternalLink=label&&href&&!(0,isInternalUrl/* default */.Z)(href);// Link content is set through html XOR label
var linkContentProps=html?{dangerouslySetInnerHTML:{__html:html}}:{children:/*#__PURE__*/react.createElement(react.Fragment,null,label,isExternalLink&&/*#__PURE__*/react.createElement(IconExternalLink/* default */.Z,isDropdownLink&&{width:12,height:12}))};if(href){return/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({href:prependBaseUrlToHref?normalizedHref:href},props,linkContentProps));}return/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({to:toUrl,isNavLink:true},(activeBasePath||activeBaseRegex)&&{isActive:function isActive(_match,location){return activeBaseRegex?isRegexpStringMatch(activeBaseRegex,location.pathname):location.pathname.startsWith(activeBaseUrl);}},props,linkContentProps));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DefaultNavbarItem.js
var DefaultNavbarItem_excluded=["className","isDropdownItem"],_excluded2=["className","isDropdownItem"],_excluded3=["mobile","position"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DefaultNavbarItemDesktop(_ref){var className=_ref.className,_ref$isDropdownItem=_ref.isDropdownItem,isDropdownItem=_ref$isDropdownItem===void 0?false:_ref$isDropdownItem,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,DefaultNavbarItem_excluded);var element=/*#__PURE__*/react.createElement(NavbarNavLink,(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)(isDropdownItem?'dropdown__link':'navbar__item navbar__link',className),isDropdownLink:isDropdownItem},props));if(isDropdownItem){return/*#__PURE__*/react.createElement("li",null,element);}return element;}function DefaultNavbarItemMobile(_ref2){var className=_ref2.className,isDropdownItem=_ref2.isDropdownItem,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref2,_excluded2);return/*#__PURE__*/react.createElement("li",{className:"menu__list-item"},/*#__PURE__*/react.createElement(NavbarNavLink,(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)('menu__link',className)},props)));}function DefaultNavbarItem(_ref3){var _props$activeClassNam;var _ref3$mobile=_ref3.mobile,mobile=_ref3$mobile===void 0?false:_ref3$mobile,position=_ref3.position,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref3,_excluded3);var Comp=mobile?DefaultNavbarItemMobile:DefaultNavbarItemDesktop;return/*#__PURE__*/react.createElement(Comp,(0,esm_extends/* default */.Z)({},props,{activeClassName:(_props$activeClassNam=props.activeClassName)!=null?_props$activeClassNam:mobile?'menu__link--active':'navbar__link--active'}));}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(8862);
// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5331);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(353);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/useLocalPathname.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Get the pathname of current route, without the optional site baseUrl.
 * - `/docs/myDoc` => `/docs/myDoc`
 * - `/baseUrl/docs/myDoc` => `/docs/myDoc`
 */function useLocalPathname(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),baseUrl=_useDocusaurusContext.siteConfig.baseUrl;var _useLocation=(0,react_router/* useLocation */.TH)(),pathname=_useLocation.pathname;return pathname.replace(baseUrl,'/');}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(376);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DropdownNavbarItem.js
var DropdownNavbarItem_excluded=["items","position","className","onClick"],DropdownNavbarItem_excluded2=["items","className","position","onClick"],DropdownNavbarItem_excluded3=["mobile"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isItemActive(item,localPathname){if((0,routesUtils/* isSamePath */.Mg)(item.to,localPathname)){return true;}if(isRegexpStringMatch(item.activeBaseRegex,localPathname)){return true;}if(item.activeBasePath&&localPathname.startsWith(item.activeBasePath)){return true;}return false;}function containsActiveItems(items,localPathname){return items.some(function(item){return isItemActive(item,localPathname);});}function DropdownNavbarItemDesktop(_ref){var _props$children;var items=_ref.items,position=_ref.position,className=_ref.className,onClick=_ref.onClick,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,DropdownNavbarItem_excluded);var dropdownRef=(0,react.useRef)(null);var _useState=(0,react.useState)(false),showDropdown=_useState[0],setShowDropdown=_useState[1];(0,react.useEffect)(function(){var handleClickOutside=function handleClickOutside(event){if(!dropdownRef.current||dropdownRef.current.contains(event.target)){return;}setShowDropdown(false);};document.addEventListener('mousedown',handleClickOutside);document.addEventListener('touchstart',handleClickOutside);return function(){document.removeEventListener('mousedown',handleClickOutside);document.removeEventListener('touchstart',handleClickOutside);};},[dropdownRef]);return/*#__PURE__*/react.createElement("div",{ref:dropdownRef,className:(0,clsx_m/* default */.Z)('navbar__item','dropdown','dropdown--hoverable',{'dropdown--right':position==='right','dropdown--show':showDropdown})},/*#__PURE__*/react.createElement(NavbarNavLink,(0,esm_extends/* default */.Z)({"aria-haspopup":"true","aria-expanded":showDropdown,role:"button",href:props.to?undefined:'#',className:(0,clsx_m/* default */.Z)('navbar__link',className)},props,{onClick:props.to?undefined:function(e){return e.preventDefault();},onKeyDown:function onKeyDown(e){if(e.key==='Enter'){e.preventDefault();setShowDropdown(!showDropdown);}}}),(_props$children=props.children)!=null?_props$children:props.label),/*#__PURE__*/react.createElement("ul",{className:"dropdown__menu"},items.map(function(childItemProps,i){return/*#__PURE__*/react.createElement(NavbarItem,(0,esm_extends/* default */.Z)({isDropdownItem:true,onKeyDown:function onKeyDown(e){if(i===items.length-1&&e.key==='Tab'){e.preventDefault();setShowDropdown(false);var nextNavbarItem=dropdownRef.current.nextElementSibling;if(nextNavbarItem){var targetItem=nextNavbarItem instanceof HTMLAnchorElement?nextNavbarItem:// Next item is another dropdown; focus on the inner
// anchor element instead so there's outline
nextNavbarItem.querySelector('a');targetItem.focus();}}},activeClassName:"dropdown__link--active"},childItemProps,{key:i}));})));}function DropdownNavbarItemMobile(_ref2){var _props$children2;var items=_ref2.items,className=_ref2.className,position=_ref2.position,onClick=_ref2.onClick,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref2,DropdownNavbarItem_excluded2);var localPathname=useLocalPathname();var containsActive=containsActiveItems(items,localPathname);var _useCollapsible=(0,Collapsible/* useCollapsible */.u)({initialState:function initialState(){return!containsActive;}}),collapsed=_useCollapsible.collapsed,toggleCollapsed=_useCollapsible.toggleCollapsed,setCollapsed=_useCollapsible.setCollapsed;// Expand/collapse if any item active after a navigation
(0,react.useEffect)(function(){if(containsActive){setCollapsed(!containsActive);}},[localPathname,containsActive,setCollapsed]);return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)('menu__list-item',{'menu__list-item--collapsed':collapsed})},/*#__PURE__*/react.createElement(NavbarNavLink,(0,esm_extends/* default */.Z)({role:"button",className:(0,clsx_m/* default */.Z)('menu__link menu__link--sublist menu__link--sublist-caret',className)},props,{onClick:function onClick(e){e.preventDefault();toggleCollapsed();}}),(_props$children2=props.children)!=null?_props$children2:props.label),/*#__PURE__*/react.createElement(Collapsible/* Collapsible */.z,{lazy:true,as:"ul",className:"menu__list",collapsed:collapsed},items.map(function(childItemProps,i){return/*#__PURE__*/react.createElement(NavbarItem,(0,esm_extends/* default */.Z)({mobile:true,isDropdownItem:true,onClick:onClick,activeClassName:"menu__link--active"},childItemProps,{key:i}));})));}function DropdownNavbarItem(_ref3){var _ref3$mobile=_ref3.mobile,mobile=_ref3$mobile===void 0?false:_ref3$mobile,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref3,DropdownNavbarItem_excluded3);var Comp=mobile?DropdownNavbarItemMobile:DropdownNavbarItemDesktop;return/*#__PURE__*/react.createElement(Comp,props);}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/useAlternatePageUtils.js
var useAlternatePageUtils = __webpack_require__(3714);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/IconLanguage/index.js
var IconLanguage_excluded=["width","height"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconLanguage(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?20:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?20:_ref$height,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,IconLanguage_excluded);return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({viewBox:"0 0 24 24",width:width,height:height,"aria-hidden":true},props),/*#__PURE__*/react.createElement("path",{fill:"currentColor",d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"}));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/LocaleDropdownNavbarItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var LocaleDropdownNavbarItem_styles_module = ({"iconLanguage":"iconLanguage_kvP7"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/LocaleDropdownNavbarItem/index.js
var LocaleDropdownNavbarItem_excluded=["mobile","dropdownItemsBefore","dropdownItemsAfter"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LocaleDropdownNavbarItem(_ref){var mobile=_ref.mobile,dropdownItemsBefore=_ref.dropdownItemsBefore,dropdownItemsAfter=_ref.dropdownItemsAfter,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,LocaleDropdownNavbarItem_excluded);var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),_useDocusaurusContext2=_useDocusaurusContext.i18n,currentLocale=_useDocusaurusContext2.currentLocale,locales=_useDocusaurusContext2.locales,localeConfigs=_useDocusaurusContext2.localeConfigs;var alternatePageUtils=(0,useAlternatePageUtils/* useAlternatePageUtils */.l)();var localeItems=locales.map(function(locale){var to="pathname://"+alternatePageUtils.createUrl({locale:locale,fullyQualified:false});return{label:localeConfigs[locale].label,to:to,target:'_self',autoAddBaseUrl:false,className:// eslint-disable-next-line no-nested-ternary
locale===currentLocale?// Similar idea as DefaultNavbarItem: select the right Infima active
// class name. This cannot be substituted with isActive, because the
// target URLs contain `pathname://` and therefore are not NavLinks!
mobile?'menu__link--active':'dropdown__link--active':''};});var items=[].concat(dropdownItemsBefore,localeItems,dropdownItemsAfter);// Mobile is handled a bit differently
var dropdownLabel=mobile?(0,Translate/* translate */.I)({message:'Languages',id:'theme.navbar.mobileLanguageDropdown.label',description:'The label for the mobile language switcher dropdown'}):localeConfigs[currentLocale].label;return/*#__PURE__*/react.createElement(DropdownNavbarItem,(0,esm_extends/* default */.Z)({},props,{mobile:mobile,label:/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(IconLanguage,{className:LocaleDropdownNavbarItem_styles_module.iconLanguage}),dropdownLabel),items:items}));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Noop.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//* harmony default export */ var Noop = (function(){return null;});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Search/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Search_styles_module = ({"searchBox":"searchBox_WqAV"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Search/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarSearch(_ref){var children=_ref.children,className=_ref.className;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(className,Search_styles_module.searchBox)},children);}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/SearchNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SearchNavbarItem(_ref){var mobile=_ref.mobile,className=_ref.className;if(mobile){return null;}return/*#__PURE__*/react.createElement(NavbarSearch,{className:className},/*#__PURE__*/react.createElement(Noop,null));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/HtmlNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function HtmlNavbarItem(_ref){var value=_ref.value,className=_ref.className,_ref$mobile=_ref.mobile,mobile=_ref$mobile===void 0?false:_ref$mobile,_ref$isDropdownItem=_ref.isDropdownItem,isDropdownItem=_ref$isDropdownItem===void 0?false:_ref$isDropdownItem;var Comp=isDropdownItem?'li':'div';return/*#__PURE__*/react.createElement(Comp,{className:(0,clsx_m/* default */.Z)({navbar__item:!mobile&&!isDropdownItem,'menu__list-item':mobile},className),dangerouslySetInnerHTML:{__html:value}});}
// EXTERNAL MODULE: ../node_modules/@docusaurus/plugin-content-docs/lib/client/index.js + 2 modules
var client = __webpack_require__(2935);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 4 modules
var docsUtils = __webpack_require__(9380);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DocNavbarItem.js
var DocNavbarItem_excluded=["docId","label","docsPluginId"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocNavbarItem(_ref){var docId=_ref.docId,staticLabel=_ref.label,docsPluginId=_ref.docsPluginId,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,DocNavbarItem_excluded);var _useActiveDocContext=(0,client/* useActiveDocContext */.Iw)(docsPluginId),activeDoc=_useActiveDocContext.activeDoc;var doc=(0,docsUtils/* useLayoutDoc */.vY)(docId,docsPluginId);// Draft items are not displayed in the navbar.
if(doc===null){return null;}return/*#__PURE__*/react.createElement(DefaultNavbarItem,(0,esm_extends/* default */.Z)({exact:true},props,{isActive:function isActive(){return(activeDoc==null?void 0:activeDoc.path)===doc.path||!!(activeDoc!=null&&activeDoc.sidebar)&&activeDoc.sidebar===doc.sidebar;},label:staticLabel!=null?staticLabel:doc.id,to:doc.path}));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DocSidebarNavbarItem.js
var DocSidebarNavbarItem_excluded=["sidebarId","label","docsPluginId"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarNavbarItem(_ref){var sidebarId=_ref.sidebarId,label=_ref.label,docsPluginId=_ref.docsPluginId,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,DocSidebarNavbarItem_excluded);var _useActiveDocContext=(0,client/* useActiveDocContext */.Iw)(docsPluginId),activeDoc=_useActiveDocContext.activeDoc;var sidebarLink=(0,docsUtils/* useLayoutDocsSidebar */.oz)(sidebarId,docsPluginId).link;if(!sidebarLink){throw new Error("DocSidebarNavbarItem: Sidebar with ID \""+sidebarId+"\" doesn't have anything to be linked to.");}return/*#__PURE__*/react.createElement(DefaultNavbarItem,(0,esm_extends/* default */.Z)({exact:true},props,{isActive:function isActive(){return(activeDoc==null?void 0:activeDoc.sidebar)===sidebarId;},label:label!=null?label:sidebarLink.label,to:sidebarLink.path}));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DocsVersionNavbarItem.js
var DocsVersionNavbarItem_excluded=["label","to","docsPluginId"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var getVersionMainDoc=function getVersionMainDoc(version){return version.docs.find(function(doc){return doc.id===version.mainDocId;});};function DocsVersionNavbarItem(_ref){var staticLabel=_ref.label,staticTo=_ref.to,docsPluginId=_ref.docsPluginId,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,DocsVersionNavbarItem_excluded);var version=(0,docsUtils/* useDocsVersionCandidates */.lO)(docsPluginId)[0];var label=staticLabel!=null?staticLabel:version.label;var path=staticTo!=null?staticTo:getVersionMainDoc(version).path;return/*#__PURE__*/react.createElement(DefaultNavbarItem,(0,esm_extends/* default */.Z)({},props,{label:label,to:path}));}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/docsPreferredVersion.js
var docsPreferredVersion = __webpack_require__(4453);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/DocsVersionDropdownNavbarItem.js
var DocsVersionDropdownNavbarItem_excluded=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DocsVersionDropdownNavbarItem_getVersionMainDoc=function getVersionMainDoc(version){return version.docs.find(function(doc){return doc.id===version.mainDocId;});};function DocsVersionDropdownNavbarItem(_ref){var mobile=_ref.mobile,docsPluginId=_ref.docsPluginId,dropdownActiveClassDisabled=_ref.dropdownActiveClassDisabled,dropdownItemsBefore=_ref.dropdownItemsBefore,dropdownItemsAfter=_ref.dropdownItemsAfter,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,DocsVersionDropdownNavbarItem_excluded);var activeDocContext=(0,client/* useActiveDocContext */.Iw)(docsPluginId);var versions=(0,client/* useVersions */.gB)(docsPluginId);var _useDocsPreferredVers=(0,docsPreferredVersion/* useDocsPreferredVersion */.J)(docsPluginId),savePreferredVersionName=_useDocsPreferredVers.savePreferredVersionName;var versionLinks=versions.map(function(version){var _activeDocContext$alt;// We try to link to the same doc, in another version
// When not possible, fallback to the "main doc" of the version
var versionDoc=(_activeDocContext$alt=activeDocContext.alternateDocVersions[version.name])!=null?_activeDocContext$alt:DocsVersionDropdownNavbarItem_getVersionMainDoc(version);return{label:version.label,to:versionDoc.path,isActive:function isActive(){return version===activeDocContext.activeVersion;},onClick:function onClick(){return savePreferredVersionName(version.name);}};});var items=[].concat(dropdownItemsBefore,versionLinks,dropdownItemsAfter);var dropdownVersion=(0,docsUtils/* useDocsVersionCandidates */.lO)(docsPluginId)[0];// Mobile dropdown is handled a bit differently
var dropdownLabel=mobile&&items.length>1?(0,Translate/* translate */.I)({id:'theme.navbar.mobileVersionsDropdown.label',message:'Versions',description:'The label for the navbar versions dropdown on mobile view'}):dropdownVersion.label;var dropdownTo=mobile&&items.length>1?undefined:DocsVersionDropdownNavbarItem_getVersionMainDoc(dropdownVersion).path;// We don't want to render a version dropdown with 0 or 1 item. If we build
// the site with a single docs version (onlyIncludeVersions: ['1.0.0']),
// We'd rather render a button instead of a dropdown
if(items.length<=1){return/*#__PURE__*/react.createElement(DefaultNavbarItem,(0,esm_extends/* default */.Z)({},props,{mobile:mobile,label:dropdownLabel,to:dropdownTo,isActive:dropdownActiveClassDisabled?function(){return false;}:undefined}));}return/*#__PURE__*/react.createElement(DropdownNavbarItem,(0,esm_extends/* default */.Z)({},props,{mobile:mobile,label:dropdownLabel,to:dropdownTo,items:items,isActive:dropdownActiveClassDisabled?function(){return false;}:undefined}));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/ComponentTypes.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ComponentTypes={default:DefaultNavbarItem,localeDropdown:LocaleDropdownNavbarItem,search:SearchNavbarItem,dropdown:DropdownNavbarItem,html:HtmlNavbarItem,doc:DocNavbarItem,docSidebar:DocSidebarNavbarItem,docsVersion:DocsVersionNavbarItem,docsVersionDropdown:DocsVersionDropdownNavbarItem};/* harmony default export */ var NavbarItem_ComponentTypes = (ComponentTypes);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/NavbarItem/index.js
var NavbarItem_excluded=["type"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function normalizeComponentType(type,props){// Backward compatibility: navbar item with no type set
// but containing dropdown items should use the type "dropdown"
if(!type||type==='default'){return'items'in props?'dropdown':'default';}return type;}function NavbarItem(_ref){var type=_ref.type,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,NavbarItem_excluded);var componentType=normalizeComponentType(type,props);var NavbarItemComponent=NavbarItem_ComponentTypes[componentType];if(!NavbarItemComponent){throw new Error("No NavbarItem component found for type \""+type+"\".");}return/*#__PURE__*/react.createElement(NavbarItemComponent,props);}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/PrimaryMenu/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useNavbarItems(){// TODO temporary casting until ThemeConfig type is improved
return (0,useThemeConfig/* useThemeConfig */.L)().navbar.items;}// The primary menu displays the navbar items
function NavbarMobilePrimaryMenu(){var mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.e)();// TODO how can the order be defined for mobile?
// Should we allow providing a different list of items?
var items=useNavbarItems();return/*#__PURE__*/react.createElement("ul",{className:"menu__list"},items.map(function(item,i){return/*#__PURE__*/react.createElement(NavbarItem,(0,esm_extends/* default */.Z)({mobile:true},item,{onClick:function onClick(){return mobileSidebar.toggle();},key:i}));}));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/SecondaryMenu/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SecondaryMenuBackButton(props){return/*#__PURE__*/react.createElement("button",(0,esm_extends/* default */.Z)({},props,{type:"button",className:"clean-btn navbar-sidebar__back"}),/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu"));}// The secondary menu slides from the right and shows contextual information
// such as the docs sidebar
function NavbarMobileSidebarSecondaryMenu(){var isPrimaryMenuEmpty=(0,useThemeConfig/* useThemeConfig */.L)().navbar.items.length===0;var secondaryMenu=(0,display/* useNavbarSecondaryMenu */.Y)();return/*#__PURE__*/react.createElement(react.Fragment,null,!isPrimaryMenuEmpty&&/*#__PURE__*/react.createElement(SecondaryMenuBackButton,{onClick:function onClick(){return secondaryMenu.hide();}}),secondaryMenu.content);}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarMobileSidebar(){var mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.e)();useLockBodyScroll(mobileSidebar.shown);if(!mobileSidebar.shouldRender){return null;}return/*#__PURE__*/react.createElement(NavbarMobileSidebarLayout,{header:/*#__PURE__*/react.createElement(NavbarMobileSidebarHeader,null),primaryMenu:/*#__PURE__*/react.createElement(NavbarMobilePrimaryMenu,null),secondaryMenu:/*#__PURE__*/react.createElement(NavbarMobileSidebarSecondaryMenu,null)});}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Layout_styles_module = ({"navbarHideable":"navbarHideable_hhpl","navbarHidden":"navbarHidden_nmcs"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarBackdrop(props){return/*#__PURE__*/react.createElement("div",(0,esm_extends/* default */.Z)({role:"presentation"},props,{className:(0,clsx_m/* default */.Z)('navbar-sidebar__backdrop',props.className)}));}function NavbarLayout(_ref){var children=_ref.children;var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.L)(),_useThemeConfig$navba=_useThemeConfig.navbar,hideOnScroll=_useThemeConfig$navba.hideOnScroll,style=_useThemeConfig$navba.style;var mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.e)();var _useHideableNavbar=useHideableNavbar(hideOnScroll),navbarRef=_useHideableNavbar.navbarRef,isNavbarVisible=_useHideableNavbar.isNavbarVisible;return/*#__PURE__*/react.createElement("nav",{ref:navbarRef,className:(0,clsx_m/* default */.Z)('navbar','navbar--fixed-top',hideOnScroll&&[Layout_styles_module.navbarHideable,!isNavbarVisible&&Layout_styles_module.navbarHidden],{'navbar--dark':style==='dark','navbar--primary':style==='primary','navbar-sidebar--show':mobileSidebar.shown})},children,/*#__PURE__*/react.createElement(NavbarBackdrop,{onClick:mobileSidebar.toggle}),/*#__PURE__*/react.createElement(NavbarMobileSidebar,null));}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/navbarUtils.js
var navbarUtils = __webpack_require__(3211);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/IconMenu/index.js
var IconMenu_excluded=["width","height","className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconMenu(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?30:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?30:_ref$height,className=_ref.className,restProps=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,IconMenu_excluded);return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({className:className,width:width,height:height,viewBox:"0 0 30 30","aria-hidden":"true"},restProps),/*#__PURE__*/react.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/MobileSidebar/Toggle/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MobileSidebarToggle(){var mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.e)();return/*#__PURE__*/react.createElement("button",{onClick:mobileSidebar.toggle,onKeyDown:mobileSidebar.toggle,"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0},/*#__PURE__*/react.createElement(IconMenu,null));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Content_styles_module = ({"colorModeToggle":"colorModeToggle_Hewu"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Content_useNavbarItems(){// TODO temporary casting until ThemeConfig type is improved
return (0,useThemeConfig/* useThemeConfig */.L)().navbar.items;}function NavbarItems(_ref){var items=_ref.items;return/*#__PURE__*/react.createElement(react.Fragment,null,items.map(function(item,i){return/*#__PURE__*/react.createElement(NavbarItem,(0,esm_extends/* default */.Z)({},item,{key:i}));}));}function NavbarContentLayout(_ref2){var left=_ref2.left,right=_ref2.right;return/*#__PURE__*/react.createElement("div",{className:"navbar__inner"},/*#__PURE__*/react.createElement("div",{className:"navbar__items"},left),/*#__PURE__*/react.createElement("div",{className:"navbar__items navbar__items--right"},right));}function NavbarContent(){var mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.e)();var items=Content_useNavbarItems();var _splitNavbarItems=(0,navbarUtils/* splitNavbarItems */.A)(items),leftItems=_splitNavbarItems[0],rightItems=_splitNavbarItems[1];var searchBarItem=items.find(function(item){return item.type==='search';});return/*#__PURE__*/react.createElement(NavbarContentLayout,{left:/*#__PURE__*/ // TODO stop hardcoding items?
react.createElement(react.Fragment,null,!mobileSidebar.disabled&&/*#__PURE__*/react.createElement(MobileSidebarToggle,null),/*#__PURE__*/react.createElement(NavbarLogo,null),/*#__PURE__*/react.createElement(NavbarItems,{items:leftItems})),right:/*#__PURE__*/ // TODO stop hardcoding items?
// Ask the user to add the respective navbar items => more flexible
react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(NavbarItems,{items:rightItems}),/*#__PURE__*/react.createElement(NavbarColorModeToggle,{className:Content_styles_module.colorModeToggle}),!searchBarItem&&/*#__PURE__*/react.createElement(NavbarSearch,null,/*#__PURE__*/react.createElement(Noop,null)))});}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/Navbar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Navbar(){return/*#__PURE__*/react.createElement(NavbarLayout,null,/*#__PURE__*/react.createElement(NavbarContent,null));}

/***/ }),

/***/ 505:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SearchMetadata; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7092);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Note: we bias toward using Algolia metadata on purpose
// Not doing so leads to confusion in the community,
// as it requires to first crawl the site with the Algolia plugin enabled first
// - https://github.com/facebook/docusaurus/issues/6693
// - https://github.com/facebook/docusaurus/issues/4555
function SearchMetadata(_ref){var locale=_ref.locale,version=_ref.version,tag=_ref.tag;// Seems safe to consider here the locale is the language, as the existing
// docsearch:language filter is afaik a regular string-based filter
var language=locale;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,locale&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"docusaurus_locale",content:locale}),version&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"docusaurus_version",content:version}),tag&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"docusaurus_tag",content:tag}),language&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"docsearch:language",content:language}),version&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"docsearch:version",content:version}),tag&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"docsearch:docusaurus_tag",content:tag}));}

/***/ }),

/***/ 6076:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ SkipToContent; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(9213);
// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5331);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
var useLocationChange = __webpack_require__(4993);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(5484);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/hooks/useSkipToContent.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function programmaticFocus(el){el.setAttribute('tabindex','-1');el.focus();el.removeAttribute('tabindex');}/** This hook wires the logic for a skip-to-content link. */function useSkipToContent(){var containerRef=(0,react.useRef)(null);var _useHistory=(0,react_router/* useHistory */.k6)(),action=_useHistory.action;var handleSkip=(0,react.useCallback)(function(e){var _document$querySelect;e.preventDefault();var targetElement=(_document$querySelect=document.querySelector('main:first-of-type'))!=null?_document$querySelect:document.querySelector("."+ThemeClassNames/* ThemeClassNames.wrapper.main */.k.wrapper.main);if(targetElement){programmaticFocus(targetElement);}},[]);(0,useLocationChange/* useLocationChange */.S)(function(_ref){var location=_ref.location;if(containerRef.current&&!location.hash&&action==='PUSH'){programmaticFocus(containerRef.current);}});return{containerRef:containerRef,handleSkip:handleSkip};}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/SkipToContent/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"skipToContent":"skipToContent_oPtH"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/SkipToContent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SkipToContent(){var _useSkipToContent=useSkipToContent(),containerRef=_useSkipToContent.containerRef,handleSkip=_useSkipToContent.handleSkip;return/*#__PURE__*/react.createElement("div",{ref:containerRef,role:"region"},/*#__PURE__*/react.createElement("a",{href:"#",className:styles_module.skipToContent,onClick:handleSkip},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")));}

/***/ }),

/***/ 4034:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ThemedImage; }
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(5773);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(808);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(8944);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(6457);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(5421);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"themedImage":"themedImage_BQGR","themedImage--light":"themedImage--light_HAxW","themedImage--dark":"themedImage--dark_bGx0"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/index.js
var _excluded=["sources","className","alt"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ThemedImage(props){var isBrowser=(0,useIsBrowser/* default */.Z)();var _useColorMode=(0,contexts_colorMode/* useColorMode */.I)(),colorMode=_useColorMode.colorMode;var sources=props.sources,className=props.className,alt=props.alt,propsRest=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded);var clientThemes=colorMode==='dark'?['dark']:['light'];var renderedSourceNames=isBrowser?clientThemes:// We need to render both images on the server to avoid flash
// See https://github.com/facebook/docusaurus/pull/3730
['light','dark'];return/*#__PURE__*/react.createElement(react.Fragment,null,renderedSourceNames.map(function(sourceName){return/*#__PURE__*/react.createElement("img",(0,esm_extends/* default */.Z)({key:sourceName,src:sources[sourceName],alt:alt,className:(0,clsx_m/* default */.Z)(styles_module.themedImage,styles_module["themedImage--"+sourceName],className)},propsRest));}));}

/***/ }),

/***/ 376:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": function() { return /* binding */ useCollapsible; },
/* harmony export */   "z": function() { return /* binding */ Collapsible; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5773);
/* harmony import */ var _home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(808);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(161);
var _excluded=["collapsed"],_excluded2=["lazy"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DefaultAnimationEasing='ease-in-out';/**
 * This hook is a very thin wrapper around a `useState`.
 */function useCollapsible(_ref){var initialState=_ref.initialState;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState!=null?initialState:false),collapsed=_useState[0],setCollapsed=_useState[1];var toggleCollapsed=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){setCollapsed(function(expanded){return!expanded;});},[]);return{collapsed:collapsed,setCollapsed:setCollapsed,toggleCollapsed:toggleCollapsed};}var CollapsedStyles={display:'none',overflow:'hidden',height:'0px'};var ExpandedStyles={display:'block',overflow:'visible',height:'auto'};function applyCollapsedStyle(el,collapsed){var collapsedStyles=collapsed?CollapsedStyles:ExpandedStyles;el.style.display=collapsedStyles.display;el.style.overflow=collapsedStyles.overflow;el.style.height=collapsedStyles.height;}/*
Lex111: Dynamic transition duration is used in Material design, this technique
is good for a large number of items.
https://material.io/archive/guidelines/motion/duration-easing.html#duration-easing-dynamic-durations
https://github.com/mui-org/material-ui/blob/e724d98eba018e55e1a684236a2037e24bcf050c/packages/material-ui/src/styles/createTransitions.js#L40-L43
 */function getAutoHeightDuration(height){var constant=height/36;return Math.round((4+15*Math.pow(constant,0.25)+constant/5)*10);}function useCollapseAnimation(_ref2){var collapsibleRef=_ref2.collapsibleRef,collapsed=_ref2.collapsed,animation=_ref2.animation;var mounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var el=collapsibleRef.current;function getTransitionStyles(){var _animation$duration,_animation$easing;var height=el.scrollHeight;var duration=(_animation$duration=animation==null?void 0:animation.duration)!=null?_animation$duration:getAutoHeightDuration(height);var easing=(_animation$easing=animation==null?void 0:animation.easing)!=null?_animation$easing:DefaultAnimationEasing;return{transition:"height "+duration+"ms "+easing,height:height+"px"};}function applyTransitionStyles(){var transitionStyles=getTransitionStyles();el.style.transition=transitionStyles.transition;el.style.height=transitionStyles.height;}// On mount, we just apply styles, no animated transition
if(!mounted.current){applyCollapsedStyle(el,collapsed);mounted.current=true;return undefined;}el.style.willChange='height';function startAnimation(){var animationFrame=requestAnimationFrame(function(){// When collapsing
if(collapsed){applyTransitionStyles();requestAnimationFrame(function(){el.style.height=CollapsedStyles.height;el.style.overflow=CollapsedStyles.overflow;});}// When expanding
else{el.style.display='block';requestAnimationFrame(function(){applyTransitionStyles();});}});return function(){return cancelAnimationFrame(animationFrame);};}return startAnimation();},[collapsibleRef,collapsed,animation]);}/**
 * Prevent hydration layout shift before animations are handled imperatively
 * with JS
 */function getSSRStyle(collapsed){if(_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"].canUseDOM */ .Z.canUseDOM){return undefined;}return collapsed?CollapsedStyles:ExpandedStyles;}function CollapsibleBase(_ref3){var _ref3$as=_ref3.as,As=_ref3$as===void 0?'div':_ref3$as,collapsed=_ref3.collapsed,children=_ref3.children,animation=_ref3.animation,onCollapseTransitionEnd=_ref3.onCollapseTransitionEnd,className=_ref3.className,disableSSRStyle=_ref3.disableSSRStyle;var collapsibleRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);useCollapseAnimation({collapsibleRef:collapsibleRef,collapsed:collapsed,animation:animation});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(As// @ts-expect-error: the "too complicated type" is produced from
// "CollapsibleElementType" being a huge union
,{ref:collapsibleRef// Refs are contravariant, which is not expressible in TS
,style:disableSSRStyle?undefined:getSSRStyle(collapsed),onTransitionEnd:function onTransitionEnd(e){if(e.propertyName!=='height'){return;}applyCollapsedStyle(collapsibleRef.current,collapsed);onCollapseTransitionEnd==null?void 0:onCollapseTransitionEnd(collapsed);},className:className},children);}function CollapsibleLazy(_ref4){var collapsed=_ref4.collapsed,props=(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref4,_excluded);var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!collapsed),mounted=_useState2[0],setMounted=_useState2[1];// Updated in effect so that first expansion transition can work
var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(collapsed),lazyCollapsed=_useState3[0],setLazyCollapsed=_useState3[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function(){if(!collapsed){setMounted(true);}},[collapsed]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function(){if(mounted){setLazyCollapsed(collapsed);}},[mounted,collapsed]);return mounted?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CollapsibleBase,(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},props,{collapsed:lazyCollapsed})):null;}/**
 * A headless component providing smooth and uniform collapsing behavior. The
 * component will be invisible (zero height) when collapsed. Doesn't provide
 * interactivity by itself: collapse state is toggled through props.
 */function Collapsible(_ref5){var lazy=_ref5.lazy,props=(0,_home_runner_work_react_easy_diagram_react_easy_diagram_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref5,_excluded2);var Comp=lazy?CollapsibleLazy:CollapsibleBase;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp,props);}

/***/ }),

/***/ 10:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nT": function() { return /* binding */ useAnnouncementBar; },
/* harmony export */   "pl": function() { return /* binding */ AnnouncementBarProvider; }
/* harmony export */ });
/* unused harmony export AnnouncementBarDismissStorageKey */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6457);
/* harmony import */ var _utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1819);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8215);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(624);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AnnouncementBarDismissStorageKey='docusaurus.announcement.dismiss';var AnnouncementBarIdStorageKey='docusaurus.announcement.id';var AnnouncementBarDismissStorage=(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__/* .createStorageSlot */ .W)(AnnouncementBarDismissStorageKey);var IdStorage=(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__/* .createStorageSlot */ .W)(AnnouncementBarIdStorageKey);var isDismissedInStorage=function isDismissedInStorage(){return AnnouncementBarDismissStorage.get()==='true';};var setDismissedInStorage=function setDismissedInStorage(bool){return AnnouncementBarDismissStorage.set(String(bool));};var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function useContextValue(){var _useThemeConfig=(0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_3__/* .useThemeConfig */ .L)(),announcementBar=_useThemeConfig.announcementBar;var isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){return isBrowser?// On client navigation: init with local storage value
isDismissedInStorage():// On server/hydration: always visible to prevent layout shifts (will be hidden with css if needed)
false;}),isClosed=_useState[0],setClosed=_useState[1];// Update state after hydration
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){setClosed(isDismissedInStorage());},[]);var handleClose=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){setDismissedInStorage(true);setClosed(true);},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(!announcementBar){return;}var id=announcementBar.id;var viewedId=IdStorage.get();// Retrocompatibility due to spelling mistake of default id
// see https://github.com/facebook/docusaurus/issues/3338
// cSpell:ignore annoucement
if(viewedId==='annoucement-bar'){viewedId='announcement-bar';}var isNewAnnouncement=id!==viewedId;IdStorage.set(id);if(isNewAnnouncement){setDismissedInStorage(false);}if(isNewAnnouncement||!isDismissedInStorage()){setClosed(false);}},[announcementBar]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{isActive:!!announcementBar&&!isClosed,close:handleClose};},[announcementBar,isClosed,handleClose]);}function AnnouncementBarProvider(_ref){var children=_ref.children;var value=useContextValue();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:value},children);}function useAnnouncementBar(){var api=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!api){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_4__/* .ReactContextError */ .i6('AnnouncementBarProvider');}return api;}

/***/ }),

/***/ 5421:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": function() { return /* binding */ useColorMode; },
/* harmony export */   "S": function() { return /* binding */ ColorModeProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(161);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8215);
/* harmony import */ var _utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1819);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(624);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);var ColorModeStorageKey='theme';var ColorModeStorage=(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__/* .createStorageSlot */ .W)(ColorModeStorageKey);var ColorModes={light:'light',dark:'dark'};// Ensure to always return a valid colorMode even if input is invalid
var coerceToColorMode=function coerceToColorMode(colorMode){return colorMode===ColorModes.dark?ColorModes.dark:ColorModes.light;};var getInitialColorMode=function getInitialColorMode(defaultMode){return _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"].canUseDOM */ .Z.canUseDOM?coerceToColorMode(document.documentElement.getAttribute('data-theme')):coerceToColorMode(defaultMode);};var storeColorMode=function storeColorMode(newColorMode){ColorModeStorage.set(coerceToColorMode(newColorMode));};function useContextValue(){var _useThemeConfig=(0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_3__/* .useThemeConfig */ .L)(),_useThemeConfig$color=_useThemeConfig.colorMode,defaultMode=_useThemeConfig$color.defaultMode,disableSwitch=_useThemeConfig$color.disableSwitch,respectPrefersColorScheme=_useThemeConfig$color.respectPrefersColorScheme;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialColorMode(defaultMode)),colorMode=_useState[0],setColorModeState=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){// A site is deployed without disableSwitch
// => User visits the site and has a persisted value
// => Site later enabled disableSwitch
// => Clear the previously stored value to apply the site's setting
if(disableSwitch){ColorModeStorage.del();}},[disableSwitch]);var setColorMode=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(newColorMode,options){if(options===void 0){options={};}var _options=options,_options$persist=_options.persist,persist=_options$persist===void 0?true:_options$persist;if(newColorMode){setColorModeState(newColorMode);if(persist){storeColorMode(newColorMode);}}else{if(respectPrefersColorScheme){setColorModeState(window.matchMedia('(prefers-color-scheme: dark)').matches?ColorModes.dark:ColorModes.light);}else{setColorModeState(defaultMode);}ColorModeStorage.del();}},[respectPrefersColorScheme,defaultMode]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){document.documentElement.setAttribute('data-theme',coerceToColorMode(colorMode));},[colorMode]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(disableSwitch){return undefined;}var onChange=function onChange(e){if(e.key!==ColorModeStorageKey){return;}var storedColorMode=ColorModeStorage.get();if(storedColorMode!==null){setColorMode(coerceToColorMode(storedColorMode));}};window.addEventListener('storage',onChange);return function(){return window.removeEventListener('storage',onChange);};},[disableSwitch,setColorMode]);// PCS is coerced to light mode when printing, which causes the color mode to
// be reset to dark when exiting print mode, disregarding user settings. When
// the listener fires only because of a print/screen switch, we don't change
// color mode. See https://github.com/facebook/docusaurus/pull/6490
var previousMediaIsPrint=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(disableSwitch&&!respectPrefersColorScheme){return undefined;}var mql=window.matchMedia('(prefers-color-scheme: dark)');var onChange=function onChange(){if(window.matchMedia('print').matches||previousMediaIsPrint.current){previousMediaIsPrint.current=window.matchMedia('print').matches;return;}setColorMode(null);};mql.addListener(onChange);return function(){return mql.removeListener(onChange);};},[setColorMode,disableSwitch,respectPrefersColorScheme]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{colorMode:colorMode,setColorMode:setColorMode,get isDarkTheme(){if(false){}return colorMode===ColorModes.dark;},setLightTheme:function setLightTheme(){if(false){}setColorMode(ColorModes.light);},setDarkTheme:function setDarkTheme(){if(false){}setColorMode(ColorModes.dark);}};},[colorMode,setColorMode]);}function ColorModeProvider(_ref){var children=_ref.children;var value=useContextValue();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:value},children);}function useColorMode(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context==null){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_4__/* .ReactContextError */ .i6('ColorModeProvider','Please see https://docusaurus.io/docs/api/themes/configuration#use-color-mode.');}return context;}

/***/ }),

/***/ 4453:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ useDocsPreferredVersion; },
/* harmony export */   "L5": function() { return /* binding */ DocsPreferredVersionContextProvider; }
/* harmony export */ });
/* unused harmony export useDocsPreferredVersionByPluginId */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2935);
/* harmony import */ var _docusaurus_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5688);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(624);
/* harmony import */ var _utils_docsUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9380);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8215);
/* harmony import */ var _utils_storageUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1819);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var storageKey=function storageKey(pluginId){return"docs-preferred-version-"+pluginId;};var DocsPreferredVersionStorage={save:function save(pluginId,persistence,versionName){(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_1__/* .createStorageSlot */ .W)(storageKey(pluginId),{persistence:persistence}).set(versionName);},read:function read(pluginId,persistence){return (0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_1__/* .createStorageSlot */ .W)(storageKey(pluginId),{persistence:persistence}).get();},clear:function clear(pluginId,persistence){(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_1__/* .createStorageSlot */ .W)(storageKey(pluginId),{persistence:persistence}).del();}};/**
 * Initial state is always null as we can't read local storage from node SSR
 */var getInitialState=function getInitialState(pluginIds){return Object.fromEntries(pluginIds.map(function(id){return[id,{preferredVersionName:null}];}));};/**
 * Read storage for all docs plugins, assigning each doc plugin a preferred
 * version (if found)
 */function readStorageState(_ref){var pluginIds=_ref.pluginIds,versionPersistence=_ref.versionPersistence,allDocsData=_ref.allDocsData;/**
     * The storage value we read might be stale, and belong to a version that does
     * not exist in the site anymore. In such case, we remove the storage value to
     * avoid downstream errors.
     */function restorePluginState(pluginId){var preferredVersionNameUnsafe=DocsPreferredVersionStorage.read(pluginId,versionPersistence);var pluginData=allDocsData[pluginId];var versionExists=pluginData.versions.some(function(version){return version.name===preferredVersionNameUnsafe;});if(versionExists){return{preferredVersionName:preferredVersionNameUnsafe};}DocsPreferredVersionStorage.clear(pluginId,versionPersistence);return{preferredVersionName:null};}return Object.fromEntries(pluginIds.map(function(id){return[id,restorePluginState(id)];}));}function useVersionPersistence(){return (0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .L)().docs.versionPersistence;}var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function useContextValue(){var allDocsData=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useAllDocsData */ ._r)();var versionPersistence=useVersionPersistence();var pluginIds=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return Object.keys(allDocsData);},[allDocsData]);// Initial state is empty, as we can't read browser storage in node/SSR
var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){return getInitialState(pluginIds);}),state=_useState[0],setState=_useState[1];// On mount, we set the state read from browser storage
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){setState(readStorageState({allDocsData:allDocsData,versionPersistence:versionPersistence,pluginIds:pluginIds}));},[allDocsData,versionPersistence,pluginIds]);// The API that we expose to consumer hooks (memo for constant object)
var api=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){function savePreferredVersion(pluginId,versionName){DocsPreferredVersionStorage.save(pluginId,versionPersistence,versionName);setState(function(s){var _Object$assign;return Object.assign({},s,(_Object$assign={},_Object$assign[pluginId]={preferredVersionName:versionName},_Object$assign));});}return{savePreferredVersion:savePreferredVersion};},[versionPersistence]);return[state,api];}function DocsPreferredVersionContextProviderUnsafe(_ref2){var children=_ref2.children;var value=useContextValue();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:value},children);}/**
 * This is a maybe-layer. If the docs plugin is not enabled, this provider is a
 * simple pass-through.
 */function DocsPreferredVersionContextProvider(_ref3){var children=_ref3.children;if(_utils_docsUtils__WEBPACK_IMPORTED_MODULE_4__/* .isDocsPluginEnabled */ .cE){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DocsPreferredVersionContextProviderUnsafe,null,children);}return children;}function useDocsPreferredVersionContext(){var value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!value){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__/* .ReactContextError */ .i6('DocsPreferredVersionContextProvider');}return value;}/**
 * Returns a read-write interface to a plugin's preferred version. The
 * "preferred version" is defined as the last version that the user visited.
 * For example, if a user is using v3, even when v4 is later published, the user
 * would still be browsing v3 docs when she opens the website next time. Note,
 * the `preferredVersion` attribute will always be `null` before mount.
 */function useDocsPreferredVersion(pluginId){var _docsData$versions$fi;if(pluginId===void 0){pluginId=_docusaurus_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_PLUGIN_ID */ .m;}var docsData=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useDocsData */ .zh)(pluginId);var _useDocsPreferredVers=useDocsPreferredVersionContext(),state=_useDocsPreferredVers[0],api=_useDocsPreferredVers[1];var preferredVersionName=state[pluginId].preferredVersionName;var preferredVersion=(_docsData$versions$fi=docsData.versions.find(function(version){return version.name===preferredVersionName;}))!=null?_docsData$versions$fi:null;var savePreferredVersionName=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(versionName){api.savePreferredVersion(pluginId,versionName);},[api,pluginId]);return{preferredVersion:preferredVersion,savePreferredVersionName:savePreferredVersionName};}function useDocsPreferredVersionByPluginId(){var allDocsData=useAllDocsData();var _useDocsPreferredVers2=useDocsPreferredVersionContext(),state=_useDocsPreferredVers2[0];function getPluginIdPreferredVersion(pluginId){var _docsData$versions$fi2;var docsData=allDocsData[pluginId];var preferredVersionName=state[pluginId].preferredVersionName;return(_docsData$versions$fi2=docsData.versions.find(function(version){return version.name===preferredVersionName;}))!=null?_docsData$versions$fi2:null;}var pluginIds=Object.keys(allDocsData);return Object.fromEntries(pluginIds.map(function(id){return[id,getPluginIdPreferredVersion(id)];}));}

/***/ }),

/***/ 2095:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": function() { return /* binding */ useDocsSidebar; },
/* harmony export */   "b": function() { return /* binding */ DocsSidebarProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8215);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Using a Symbol because null is a valid context value (a doc with no sidebar)
// Inspired by https://github.com/jamiebuilds/unstated-next/blob/master/src/unstated-next.tsx
var EmptyContext=Symbol('EmptyContext');var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(EmptyContext);/**
 * Provide the current sidebar to your children.
 */function DocsSidebarProvider(_ref){var children=_ref.children,name=_ref.name,items=_ref.items;var stableValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return name&&items?{name:name,items:items}:null;},[name,items]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:stableValue},children);}/**
 * Gets the sidebar that's currently displayed, or `null` if there isn't one
 */function useDocsSidebar(){var value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(value===EmptyContext){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .i6('DocsSidebarProvider');}return value;}

/***/ }),

/***/ 2335:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": function() { return /* binding */ NavbarMobileSidebarProvider; },
  "e": function() { return /* binding */ useNavbarMobileSidebar; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(3471);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(8357);
// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5331);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js + 5 modules
var reactUtils = __webpack_require__(8215);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Permits to register a handler that will be called on history actions (pop,
 * push, replace). If the handler returns `false`, the navigation transition
 * will be blocked/cancelled.
 */function useHistoryActionHandler(handler){var _useHistory=(0,react_router/* useHistory */.k6)(),block=_useHistory.block;var stableHandler=(0,reactUtils/* useDynamicCallback */.ed)(handler);(0,react.useEffect)(// See https://github.com/remix-run/history/blob/main/docs/blocking-transitions.md
function(){return block(function(location,action){return stableHandler(location,action);});},[block,stableHandler]);}/**
 * Permits to register a handler that will be called on history pop navigation
 * (backward/forward). If the handler returns `false`, the backward/forward
 * transition will be blocked. Unfortunately there's no good way to detect the
 * "direction" (backward/forward) of the POP event.
 */function useHistoryPopHandler(handler){useHistoryActionHandler(function(location,action){if(action==='POP'){// Maybe block navigation if handler returns false
return handler(location,action);}// Don't block other navigation actions
return undefined;});}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(624);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Context=/*#__PURE__*/react.createContext(undefined);function useIsNavbarMobileSidebarDisabled(){var secondaryMenuContent=(0,content/* useNavbarSecondaryMenuContent */.HY)();var items=(0,useThemeConfig/* useThemeConfig */.L)().navbar.items;return items.length===0&&!secondaryMenuContent.component;}function useContextValue(){var disabled=useIsNavbarMobileSidebarDisabled();var windowSize=(0,useWindowSize/* useWindowSize */.i)();var shouldRender=!disabled&&windowSize==='mobile';var _useState=(0,react.useState)(false),shown=_useState[0],setShown=_useState[1];// Close mobile sidebar on navigation pop
// Most likely firing when using the Android back button (but not only)
useHistoryPopHandler(function(){if(shown){setShown(false);// Prevent pop navigation; seems desirable enough
// See https://github.com/facebook/docusaurus/pull/5462#issuecomment-911699846
return false;}return undefined;});var toggle=(0,react.useCallback)(function(){setShown(function(s){return!s;});},[]);(0,react.useEffect)(function(){if(windowSize==='desktop'){setShown(false);}},[windowSize]);return (0,react.useMemo)(function(){return{disabled:disabled,shouldRender:shouldRender,toggle:toggle,shown:shown};},[disabled,shouldRender,toggle,shown]);}function NavbarMobileSidebarProvider(_ref){var children=_ref.children;var value=useContextValue();return/*#__PURE__*/react.createElement(Context.Provider,{value:value},children);}function useNavbarMobileSidebar(){var context=react.useContext(Context);if(context===undefined){throw new reactUtils/* ReactContextError */.i6('NavbarMobileSidebarProvider');}return context;}

/***/ }),

/***/ 3471:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HY": function() { return /* binding */ useNavbarSecondaryMenuContent; },
/* harmony export */   "Zo": function() { return /* binding */ NavbarSecondaryMenuFiller; },
/* harmony export */   "n2": function() { return /* binding */ NavbarSecondaryMenuContentProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8215);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);/** @internal */function NavbarSecondaryMenuContentProvider(_ref){var children=_ref.children;var value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({component:null,props:null});return/*#__PURE__*/ (// @ts-expect-error: this context is hard to type
react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:value},children));}/** @internal */function useNavbarSecondaryMenuContent(){var value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!value){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .i6('NavbarSecondaryMenuContentProvider');}return value[0];}function useShallowMemoizedObject(obj){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return obj;},// Is this safe?
// eslint-disable-next-line react-hooks/exhaustive-deps
[].concat(Object.keys(obj),Object.values(obj)));}/**
 * This component renders nothing by itself, but it fills the placeholder in the
 * generic secondary menu layout. This reduces coupling between the main layout
 * and the specific page.
 *
 * This kind of feature is often called portal/teleport/gateway/outlet...
 * Various unmaintained React libs exist. Most up-to-date one:
 * https://github.com/gregberge/react-teleporter
 * Not sure any of those is safe regarding concurrent mode.
 */function NavbarSecondaryMenuFiller(_ref2){var component=_ref2.component,props=_ref2.props;var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!context){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .i6('NavbarSecondaryMenuContentProvider');}var setContent=context[1];// To avoid useless context re-renders, props are memoized shallowly
var memoizedProps=useShallowMemoizedObject(props);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){// @ts-expect-error: this context is hard to type
setContent({component:component,props:memoizedProps});},[setContent,component,memoizedProps]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){return function(){return setContent({component:null,props:null});};},[setContent]);return null;}

/***/ }),

/***/ 5530:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": function() { return /* binding */ NavbarSecondaryMenuDisplayProvider; },
/* harmony export */   "Y": function() { return /* binding */ useNavbarSecondaryMenu; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8215);
/* harmony import */ var _navbarMobileSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2335);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3471);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function useContextValue(){var mobileSidebar=(0,_navbarMobileSidebar__WEBPACK_IMPORTED_MODULE_1__/* .useNavbarMobileSidebar */ .e)();var content=(0,_content__WEBPACK_IMPORTED_MODULE_2__/* .useNavbarSecondaryMenuContent */ .HY)();var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),shown=_useState[0],setShown=_useState[1];var hasContent=content.component!==null;var previousHasContent=(0,_utils_reactUtils__WEBPACK_IMPORTED_MODULE_3__/* .usePrevious */ .D9)(hasContent);// When content is become available for the first time (set in useEffect)
// we set this content to be shown!
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var contentBecameAvailable=hasContent&&!previousHasContent;if(contentBecameAvailable){setShown(true);}},[hasContent,previousHasContent]);// On sidebar close, secondary menu is set to be shown on next re-opening
// (if any secondary menu content available)
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(!hasContent){setShown(false);return;}if(!mobileSidebar.shown){setShown(true);}},[mobileSidebar.shown,hasContent]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return[shown,setShown];},[shown]);}/** @internal */function NavbarSecondaryMenuDisplayProvider(_ref){var children=_ref.children;var value=useContextValue();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:value},children);}function renderElement(content){if(content.component){var Comp=content.component;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp,content.props);}return undefined;}/** Wires the logic for rendering the mobile navbar secondary menu. */function useNavbarSecondaryMenu(){var value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!value){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_3__/* .ReactContextError */ .i6('NavbarSecondaryMenuDisplayProvider');}var shown=value[0],setShown=value[1];var hide=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){return setShown(false);},[setShown]);var content=(0,_content__WEBPACK_IMPORTED_MODULE_2__/* .useNavbarSecondaryMenuContent */ .HY)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{shown:shown,hide:hide,content:renderElement(content)};},[hide,content,shown]);}

/***/ }),

/***/ 174:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": function() { return /* binding */ keyboardFocusedClassName; },
  "t": function() { return /* binding */ useKeyboardNavigation; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/hooks/styles.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/hooks/useKeyboardNavigation.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var keyboardFocusedClassName='navigation-with-keyboard';/**
 * Side-effect that adds the `keyboardFocusedClassName` to the body element when
 * the keyboard has been pressed, or removes it when the mouse is clicked.
 *
 * The presence of this class name signals that the user may be using keyboard
 * for navigation, and the theme **must** add focus outline when this class name
 * is present. (And optionally not if it's absent, for design purposes)
 *
 * Inspired by https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
 */function useKeyboardNavigation(){(0,react.useEffect)(function(){function handleOutlineStyles(e){if(e.type==='keydown'&&e.key==='Tab'){document.body.classList.add(keyboardFocusedClassName);}if(e.type==='mousedown'){document.body.classList.remove(keyboardFocusedClassName);}}document.addEventListener('keydown',handleOutlineStyles);document.addEventListener('mousedown',handleOutlineStyles);return function(){document.body.classList.remove(keyboardFocusedClassName);document.removeEventListener('keydown',handleOutlineStyles);document.removeEventListener('mousedown',handleOutlineStyles);};},[]);}

/***/ }),

/***/ 8357:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": function() { return /* binding */ useWindowSize; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(161);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var windowSizes={desktop:'desktop',mobile:'mobile',ssr:'ssr'};var DesktopThresholdWidth=996;function getWindowSize(){if(!_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"].canUseDOM */ .Z.canUseDOM){return windowSizes.ssr;}return window.innerWidth>DesktopThresholdWidth?windowSizes.desktop:windowSizes.mobile;}var DevSimulateSSR= false&&0;/**
 * Gets the current window size as an enum value. We don't want it to return the
 * actual width value, so that it only re-renders once a breakpoint is crossed.
 *
 * It may return `"ssr"`, which is very important to handle hydration FOUC or
 * layout shifts. You have to handle it explicitly upfront. On the server, you
 * may need to render BOTH the mobile/desktop elements (and hide one of them
 * with mediaquery). We don't return `undefined` on purpose, to make it more
 * explicit.
 *
 * In development mode, this hook will still return `"ssr"` for one second, to
 * catch potential layout shifts, similar to strict mode calling effects twice.
 */function useWindowSize(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){if(DevSimulateSSR){return'ssr';}return getWindowSize();}),windowSize=_useState[0],setWindowSize=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){function updateWindowSize(){setWindowSize(getWindowSize());}var timeout=DevSimulateSSR?window.setTimeout(updateWindowSize,1000):undefined;window.addEventListener('resize',updateWindowSize);return function(){window.removeEventListener('resize',updateWindowSize);clearTimeout(timeout);};},[]);return windowSize;}

/***/ }),

/***/ 5484:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* binding */ ThemeClassNames; }
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Please do not modify the classnames! This is a breaking change, and annoying
// for users!
/**
 * These class names are used to style page layouts in Docusaurus, meant to be
 * targeted by user-provided custom CSS selectors.
 */var ThemeClassNames={page:{blogListPage:'blog-list-page',blogPostPage:'blog-post-page',blogTagsListPage:'blog-tags-list-page',blogTagPostListPage:'blog-tags-post-list-page',docsDocPage:'docs-doc-page',docsTagsListPage:'docs-tags-list-page',docsTagDocListPage:'docs-tags-doc-list-page',mdxPage:'mdx-page'},wrapper:{main:'main-wrapper',blogPages:'blog-wrapper',docsPages:'docs-wrapper',mdxPages:'mdx-wrapper'},/**
     * Follows the naming convention "theme-{blog,doc,version,page}?-<suffix>"
     */common:{editThisPage:'theme-edit-this-page',lastUpdated:'theme-last-updated',backToTopButton:'theme-back-to-top-button',codeBlock:'theme-code-block'},layout:{// TODO add other stable classNames here
},docs:{docVersionBanner:'theme-doc-version-banner',docVersionBadge:'theme-doc-version-badge',docBreadcrumbs:'theme-doc-breadcrumbs',docMarkdown:'theme-doc-markdown',docTocMobile:'theme-doc-toc-mobile',docTocDesktop:'theme-doc-toc-desktop',docFooter:'theme-doc-footer',docFooterTagsRow:'theme-doc-footer-tags-row',docFooterEditMetaRow:'theme-doc-footer-edit-meta-row',docSidebarContainer:'theme-doc-sidebar-container',docSidebarMenu:'theme-doc-sidebar-menu',docSidebarItemCategory:'theme-doc-sidebar-item-category',docSidebarItemLink:'theme-doc-sidebar-item-link',docSidebarItemCategoryLevel:function docSidebarItemCategoryLevel(level){return"theme-doc-sidebar-item-category-level-"+level;},docSidebarItemLinkLevel:function docSidebarItemLinkLevel(level){return"theme-doc-sidebar-item-link-level-"+level;}// TODO add other stable classNames here
},blog:{// TODO add other stable classNames here
}};

/***/ }),

/***/ 9380:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Wl": function() { return /* binding */ findFirstCategoryLink; },
  "_F": function() { return /* binding */ isActiveSidebarItem; },
  "cE": function() { return /* binding */ isDocsPluginEnabled; },
  "hI": function() { return /* binding */ useDocRouteMetadata; },
  "lO": function() { return /* binding */ useDocsVersionCandidates; },
  "vY": function() { return /* binding */ useLayoutDoc; },
  "oz": function() { return /* binding */ useLayoutDocsSidebar; },
  "s1": function() { return /* binding */ useSidebarBreadcrumbs; }
});

// UNUSED EXPORTS: findSidebarCategory, useCurrentSidebarCategory, useDocById

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

function createForOfIteratorHelperLoose_createForOfIteratorHelperLoose(o, allowArrayLike) {
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
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5331);
// EXTERNAL MODULE: ../node_modules/react-router-config/esm/react-router-config.js
var react_router_config = __webpack_require__(5473);
// EXTERNAL MODULE: ../node_modules/@docusaurus/plugin-content-docs/lib/client/index.js + 2 modules
var client = __webpack_require__(2935);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/docsPreferredVersion.js
var docsPreferredVersion = __webpack_require__(4453);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/docsSidebar.js
var docsSidebar = __webpack_require__(2095);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // A replacement of lodash in client code
/**
 * Gets the duplicate values in an array.
 * @param arr The array.
 * @param comparator Compares two values and returns `true` if they are equal
 * (duplicated).
 * @returns Value of the elements `v` that have a preceding element `u` where
 * `comparator(u, v) === true`. Values within the returned array are not
 * guaranteed to be unique.
 */function duplicates(arr,comparator){if(comparator===void 0){comparator=function comparator(a,b){return a===b;};}return arr.filter(function(v,vIndex){return arr.findIndex(function(u){return comparator(u,v);})!==vIndex;});}/**
 * Remove duplicate array items (similar to `_.uniq`)
 * @param arr The array.
 * @returns An array with duplicate elements removed by reference comparison.
 */function uniq(arr){// Note: had problems with [...new Set()]: https://github.com/facebook/docusaurus/issues/4972#issuecomment-863895061
return Array.from(new Set(arr));}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(8862);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO not ideal, see also "useDocs"
var isDocsPluginEnabled=!!client/* useAllDocsData */._r;function useDocById(id){var version=useDocsVersion();if(!id){return undefined;}var doc=version.docs[id];if(!doc){throw new Error("no version doc found by id="+id);}return doc;}/**
 * Pure function, similar to `Array#find`, but works on the sidebar tree.
 */function findSidebarCategory(sidebar,predicate){for(var _iterator=_createForOfIteratorHelperLoose(sidebar),_step;!(_step=_iterator()).done;){var item=_step.value;if(item.type==='category'){if(predicate(item)){return item;}var subItem=findSidebarCategory(item.items,predicate);if(subItem){return subItem;}}}return undefined;}/**
 * Best effort to assign a link to a sidebar category. If the category doesn't
 * have a link itself, we link to the first sub item with a link.
 */function findFirstCategoryLink(item){if(item.href){return item.href;}for(var _iterator2=createForOfIteratorHelperLoose_createForOfIteratorHelperLoose(item.items),_step2;!(_step2=_iterator2()).done;){var subItem=_step2.value;if(subItem.type==='link'){return subItem.href;}else if(subItem.type==='category'){var categoryLink=findFirstCategoryLink(subItem);if(categoryLink){return categoryLink;}}// Could be "html" items
}return undefined;}/**
 * Gets the category associated with the current location. Should only be used
 * on category index pages.
 */function useCurrentSidebarCategory(){var _useLocation=useLocation(),pathname=_useLocation.pathname;var sidebar=useDocsSidebar();if(!sidebar){throw new Error('Unexpected: cant find current sidebar in context');}var category=findSidebarCategory(sidebar.items,function(item){return isSamePath(item.href,pathname);});if(!category){throw new Error(pathname+" is not associated with a category. useCurrentSidebarCategory() should only be used on category index pages.");}return category;}var isActive=function isActive(testedPath,activePath){return typeof testedPath!=='undefined'&&(0,routesUtils/* isSamePath */.Mg)(testedPath,activePath);};var containsActiveSidebarItem=function containsActiveSidebarItem(items,activePath){return items.some(function(subItem){return isActiveSidebarItem(subItem,activePath);});};/**
 * Checks if a sidebar item should be active, based on the active path.
 */function isActiveSidebarItem(item,activePath){if(item.type==='link'){return isActive(item.href,activePath);}if(item.type==='category'){return isActive(item.href,activePath)||containsActiveSidebarItem(item.items,activePath);}return false;}/**
 * Gets the breadcrumbs of the current doc page, based on its sidebar location.
 * Returns `null` if there's no sidebar or breadcrumbs are disabled.
 */function useSidebarBreadcrumbs(){var _useActivePlugin;var sidebar=(0,docsSidebar/* useDocsSidebar */.V)();var _useLocation2=(0,react_router/* useLocation */.TH)(),pathname=_useLocation2.pathname;var breadcrumbsOption=(_useActivePlugin=(0,client/* useActivePlugin */.gA)())==null?void 0:_useActivePlugin.pluginData.breadcrumbs;if(breadcrumbsOption===false||!sidebar){return null;}var breadcrumbs=[];function extract(items){for(var _iterator3=createForOfIteratorHelperLoose_createForOfIteratorHelperLoose(items),_step3;!(_step3=_iterator3()).done;){var item=_step3.value;if(item.type==='category'&&((0,routesUtils/* isSamePath */.Mg)(item.href,pathname)||extract(item.items))||item.type==='link'&&(0,routesUtils/* isSamePath */.Mg)(item.href,pathname)){breadcrumbs.push(item);return true;}}return false;}extract(sidebar.items);return breadcrumbs.reverse();}/**
 * "Version candidates" are mostly useful for the layout components, which must
 * be able to work on all pages. For example, if a user has `{ type: "doc",
 * docId: "intro" }` as a navbar item, which version does that refer to? We
 * believe that it could refer to at most three version candidates:
 *
 * 1. The **active version**, the one that the user is currently browsing. See
 * {@link useActiveDocContext}.
 * 2. The **preferred version**, the one that the user last visited. See
 * {@link useDocsPreferredVersion}.
 * 3. The **latest version**, the "default". See {@link useLatestVersion}.
 *
 * @param docsPluginId The plugin ID to get versions from.
 * @returns An array of 1~3 versions with priorities defined above, guaranteed
 * to be unique and non-sparse. Will be memoized, hence stable for deps array.
 */function useDocsVersionCandidates(docsPluginId){var _useActiveDocContext=(0,client/* useActiveDocContext */.Iw)(docsPluginId),activeVersion=_useActiveDocContext.activeVersion;var _useDocsPreferredVers=(0,docsPreferredVersion/* useDocsPreferredVersion */.J)(docsPluginId),preferredVersion=_useDocsPreferredVers.preferredVersion;var latestVersion=(0,client/* useLatestVersion */.yW)(docsPluginId);return (0,react.useMemo)(function(){return uniq([activeVersion,preferredVersion,latestVersion].filter(Boolean));},[activeVersion,preferredVersion,latestVersion]);}/**
 * The layout components, like navbar items, must be able to work on all pages,
 * even on non-doc ones where there's no version context, so a sidebar ID could
 * be ambiguous. This hook would always return a sidebar to be linked to. See
 * also {@link useDocsVersionCandidates} for how this selection is done.
 *
 * @throws This hook throws if a sidebar with said ID is not found.
 */function useLayoutDocsSidebar(sidebarId,docsPluginId){var versions=useDocsVersionCandidates(docsPluginId);return (0,react.useMemo)(function(){var allSidebars=versions.flatMap(function(version){return version.sidebars?Object.entries(version.sidebars):[];});var sidebarEntry=allSidebars.find(function(sidebar){return sidebar[0]===sidebarId;});if(!sidebarEntry){throw new Error("Can't find any sidebar with id \""+sidebarId+"\" in version"+(versions.length>1?'s':'')+" "+versions.map(function(version){return version.name;}).join(', ')+"\".\n  Available sidebar ids are:\n  - "+Object.keys(allSidebars).join('\n- '));}return sidebarEntry[1];},[sidebarId,versions]);}/**
 * The layout components, like navbar items, must be able to work on all pages,
 * even on non-doc ones where there's no version context, so a doc ID could be
 * ambiguous. This hook would always return a doc to be linked to. See also
 * {@link useDocsVersionCandidates} for how this selection is done.
 *
 * @throws This hook throws if a doc with said ID is not found.
 */function useLayoutDoc(docId,docsPluginId){var versions=useDocsVersionCandidates(docsPluginId);return (0,react.useMemo)(function(){var allDocs=versions.flatMap(function(version){return version.docs;});var doc=allDocs.find(function(versionDoc){return versionDoc.id===docId;});if(!doc){var isDraft=versions.flatMap(function(version){return version.draftIds;}).includes(docId);// Drafts should be silently filtered instead of throwing
if(isDraft){return null;}throw new Error("DocNavbarItem: couldn't find any doc with id \""+docId+"\" in version"+(versions.length>1?'s':'')+" "+versions.map(function(version){return version.name;}).join(', ')+"\".\nAvailable doc ids are:\n- "+uniq(allDocs.map(function(versionDoc){return versionDoc.id;})).join('\n- '));}return doc;},[docId,versions]);}// TODO later read version/route directly from context
/**
 * The docs plugin creates nested routes, with the top-level route providing the
 * version metadata, and the subroutes creating individual doc pages. This hook
 * will match the current location against all known sub-routes.
 *
 * @param props The props received by `@theme/DocPage`
 * @returns The data of the relevant document at the current location, or `null`
 * if no document associated with the current location can be found.
 */function useDocRouteMetadata(_ref){var route=_ref.route,versionMetadata=_ref.versionMetadata;var location=(0,react_router/* useLocation */.TH)();var docRoutes=route.routes;var currentDocRoute=docRoutes.find(function(docRoute){return (0,react_router/* matchPath */.LX)(location.pathname,docRoute);});if(!currentDocRoute){return null;}// For now, the sidebarName is added as route config: not ideal!
var sidebarName=currentDocRoute.sidebar;var sidebarItems=sidebarName?versionMetadata.docsSidebars[sidebarName]:undefined;var docElement=(0,react_router_config/* renderRoutes */.H)(docRoutes,{versionMetadata:versionMetadata});return{docElement:docElement,sidebarName:sidebarName,sidebarItems:sidebarItems};}

/***/ }),

/***/ 8831:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FG": function() { return /* binding */ HtmlClassNameProvider; },
  "d": function() { return /* binding */ PageMetadata; },
  "VC": function() { return /* binding */ PluginHtmlClassNameProvider; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(8944);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(7092);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/routeContext.js
var routeContext = __webpack_require__(6881);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useRouteContext.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useRouteContext(){var context=react.useContext(routeContext/* Context */._);if(!context){throw new Error('Unexpected: no Docusaurus route context found');}return context;}
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(8948);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(353);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/generalUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Formats the page's title based on relevant site config and other contexts.
 */function useTitleFormatter(title){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),siteConfig=_useDocusaurusContext.siteConfig;var siteTitle=siteConfig.title,titleDelimiter=siteConfig.titleDelimiter;return title!=null&&title.trim().length?title.trim()+" "+titleDelimiter+" "+siteTitle:siteTitle;}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Helper component to manipulate page metadata and override site defaults.
 * Works in the same way as Helmet.
 */function PageMetadata(_ref){var title=_ref.title,description=_ref.description,keywords=_ref.keywords,image=_ref.image,children=_ref.children;var pageTitle=useTitleFormatter(title);var _useBaseUrlUtils=(0,useBaseUrl/* useBaseUrlUtils */.C)(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;var pageImage=image?withBaseUrl(image,{absolute:true}):undefined;return/*#__PURE__*/react.createElement(Head/* default */.Z,null,title&&/*#__PURE__*/react.createElement("title",null,pageTitle),title&&/*#__PURE__*/react.createElement("meta",{property:"og:title",content:pageTitle}),description&&/*#__PURE__*/react.createElement("meta",{name:"description",content:description}),description&&/*#__PURE__*/react.createElement("meta",{property:"og:description",content:description}),keywords&&/*#__PURE__*/react.createElement("meta",{name:"keywords",content:// https://github.com/microsoft/TypeScript/issues/17002
Array.isArray(keywords)?keywords.join(','):keywords}),pageImage&&/*#__PURE__*/react.createElement("meta",{property:"og:image",content:pageImage}),pageImage&&/*#__PURE__*/react.createElement("meta",{name:"twitter:image",content:pageImage}),children);}var HtmlClassNameContext=/*#__PURE__*/react.createContext(undefined);/**
 * Every layer of this provider will append a class name to the HTML element.
 * There's no consumer for this hook: it's side-effect-only. This wrapper is
 * necessary because Helmet does not "merge" classes.
 * @see https://github.com/staylor/react-helmet-async/issues/161
 */function HtmlClassNameProvider(_ref2){var classNameProp=_ref2.className,children=_ref2.children;var classNameContext=react.useContext(HtmlClassNameContext);var className=(0,clsx_m/* default */.Z)(classNameContext,classNameProp);return/*#__PURE__*/react.createElement(HtmlClassNameContext.Provider,{value:className},/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("html",{className:className})),children);}function pluginNameToClassName(pluginName){return"plugin-"+pluginName.replace(/docusaurus-(?:plugin|theme)-(?:content-)?/gi,'');}/**
 * A very thin wrapper around `HtmlClassNameProvider` that adds the plugin ID +
 * name to the HTML class name.
 */function PluginHtmlClassNameProvider(_ref3){var children=_ref3.children;var routeContext=useRouteContext();var nameClass=pluginNameToClassName(routeContext.plugin.name);var idClass="plugin-id-"+routeContext.plugin.id;return/*#__PURE__*/react.createElement(HtmlClassNameProvider,{className:(0,clsx_m/* default */.Z)(nameClass,idClass)},children);}

/***/ }),

/***/ 3211:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": function() { return /* binding */ splitNavbarItems; },
/* harmony export */   "V": function() { return /* binding */ NavbarProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _contexts_navbarMobileSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2335);
/* harmony import */ var _contexts_navbarSecondaryMenu_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3471);
/* harmony import */ var _contexts_navbarSecondaryMenu_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5530);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DefaultNavItemPosition='right';/**
 * Split links by left/right. If position is unspecified, fallback to right.
 */function splitNavbarItems(items){function isLeft(item){var _item$position;return((_item$position=item.position)!=null?_item$position:DefaultNavItemPosition)==='left';}var leftItems=items.filter(isLeft);var rightItems=items.filter(function(item){return!isLeft(item);});return[leftItems,rightItems];}/**
 * Composes multiple navbar state providers that are mutually dependent and
 * hence can't be re-ordered.
 */function NavbarProvider(_ref){var children=_ref.children;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts_navbarSecondaryMenu_content__WEBPACK_IMPORTED_MODULE_1__/* .NavbarSecondaryMenuContentProvider */ .n2,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts_navbarMobileSidebar__WEBPACK_IMPORTED_MODULE_2__/* .NavbarMobileSidebarProvider */ .M,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts_navbarSecondaryMenu_display__WEBPACK_IMPORTED_MODULE_3__/* .NavbarSecondaryMenuDisplayProvider */ .P,null,children)));}

/***/ }),

/***/ 8215:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i6": function() { return /* binding */ ReactContextError; },
  "ed": function() { return /* binding */ useDynamicCallback; },
  "D9": function() { return /* binding */ usePrevious; }
});

// UNUSED EXPORTS: useIsomorphicLayoutEffect

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/wrapRegExp.js + 2 modules
var wrapRegExp = __webpack_require__(9616);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(3219);
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__(6983);
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/construct.js


function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,setPrototypeOf/* default */.Z)(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0,setPrototypeOf/* default */.Z)(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(161);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * This hook is like `useLayoutEffect`, but without the SSR warning.
 * It seems hacky but it's used in many React libs (Redux, Formik...).
 * Also mentioned here: https://github.com/facebook/react/issues/16956
 *
 * It is useful when you need to update a ref as soon as possible after a React
 * render (before `useEffect`).
 */var useIsomorphicLayoutEffect=ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM?react.useLayoutEffect:react.useEffect;/**
 * Permits to transform an unstable callback (like an arrow function provided as
 * props) to a "stable" callback that is safe to use in a `useEffect` dependency
 * array. Useful to avoid React stale closure problems + avoid useless effect
 * re-executions.
 *
 * Workaround until the React team recommends a good solution, see
 * https://github.com/facebook/react/issues/16956
 *
 * This generally works but has some potential drawbacks, such as
 * https://github.com/facebook/react/issues/16956#issuecomment-536636418
 */function useDynamicCallback(callback){var ref=(0,react.useRef)(callback);useIsomorphicLayoutEffect(function(){ref.current=callback;},[callback]);// @ts-expect-error: TS is right that this callback may be a supertype of T,
// but good enough for our use
return (0,react.useCallback)(function(){return ref.current.apply(ref,arguments);},[]);}/**
 * Gets `value` from the last render.
 */function usePrevious(value){var ref=(0,react.useRef)();useIsomorphicLayoutEffect(function(){ref.current=value;});return ref.current;}/**
 * This error is thrown when a context is consumed outside its provider. Allows
 * reusing a generic error message format and reduces bundle size. The hook's
 * name will be extracted from its stack, so only the provider's name is needed.
 */var ReactContextError=/*#__PURE__*/function(_Error){(0,inheritsLoose/* default */.Z)(ReactContextError,_Error);function ReactContextError(providerName,additionalInfo){var _this$stack$split$1$m,_this$stack,_this$stack$split$,_this$stack$split$$ma;var _this;_this=_Error.call(this)||this;_this.name='ReactContextError';_this.message="Hook "+((_this$stack$split$1$m=(_this$stack=_this.stack)==null?void 0:(_this$stack$split$=_this$stack.split('\n')[1])==null?void 0:(_this$stack$split$$ma=_this$stack$split$.match(/*#__PURE__*/(0,wrapRegExp/* default */.Z)(/at (?:\w+\.)?(\w+)/,{name:1})))==null?void 0:_this$stack$split$$ma.groups.name)!=null?_this$stack$split$1$m:'')+" is called outside the <"+providerName+">. "+(additionalInfo!=null?additionalInfo:'');return _this;}return ReactContextError;}(/*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),

/***/ 8862:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mg": function() { return /* binding */ isSamePath; },
/* harmony export */   "Ns": function() { return /* binding */ useHomePageRoute; }
/* harmony export */ });
/* unused harmony export findHomePageRoute */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _generated_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6623);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(353);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Compare the 2 paths, case insensitive and ignoring trailing slash
 */function isSamePath(path1,path2){var normalize=function normalize(pathname){var _ref;return(_ref=!pathname||pathname.endsWith('/')?pathname:pathname+"/")==null?void 0:_ref.toLowerCase();};return normalize(path1)===normalize(path2);}/**
 * Note that sites don't always have a homepage in practice, so we can't assume
 * that linking to '/' is always safe.
 * @see https://github.com/facebook/docusaurus/pull/6517#issuecomment-1048709116
 */function findHomePageRoute(_ref2){var baseUrl=_ref2.baseUrl,initialRoutes=_ref2.routes;function isHomePageRoute(route){return route.path===baseUrl&&route.exact===true;}function isHomeParentRoute(route){return route.path===baseUrl&&!route.exact;}function doFindHomePageRoute(routes){if(routes.length===0){return undefined;}var homePage=routes.find(isHomePageRoute);if(homePage){return homePage;}var indexSubRoutes=routes.filter(isHomeParentRoute).flatMap(function(route){var _route$routes;return(_route$routes=route.routes)!=null?_route$routes:[];});return doFindHomePageRoute(indexSubRoutes);}return doFindHomePageRoute(initialRoutes);}/**
 * Fetches the route that points to "/". Use this instead of the naive "/",
 * because the homepage may not exist.
 */function useHomePageRoute(){var baseUrl=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)().siteConfig.baseUrl;return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return findHomePageRoute({routes:_generated_routes__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,baseUrl:baseUrl});},[baseUrl]);}

/***/ }),

/***/ 3457:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ct": function() { return /* binding */ useSmoothScrollTo; },
/* harmony export */   "OC": function() { return /* binding */ ScrollControllerProvider; },
/* harmony export */   "RF": function() { return /* binding */ useScrollPosition; }
/* harmony export */ });
/* unused harmony exports useScrollController, useScrollPositionBlocker */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(161);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6457);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8215);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useScrollControllerContextValue(){var scrollEventsEnabledRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{scrollEventsEnabledRef:scrollEventsEnabledRef,enableScrollEvents:function enableScrollEvents(){scrollEventsEnabledRef.current=true;},disableScrollEvents:function disableScrollEvents(){scrollEventsEnabledRef.current=false;}};},[]);}var ScrollMonitorContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);function ScrollControllerProvider(_ref){var children=_ref.children;var value=useScrollControllerContextValue();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ScrollMonitorContext.Provider,{value:value},children);}/**
 * We need a way to update the scroll position while ignoring scroll events
 * so as not to toggle Navbar/BackToTop visibility.
 *
 * This API permits to temporarily disable/ignore scroll events. Motivated by
 * https://github.com/facebook/docusaurus/pull/5618
 */function useScrollController(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ScrollMonitorContext);if(context==null){throw new _reactUtils__WEBPACK_IMPORTED_MODULE_3__/* .ReactContextError */ .i6('ScrollControllerProvider');}return context;}var getScrollPosition=function getScrollPosition(){return _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"].canUseDOM */ .Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null;};/**
 * This hook fires an effect when the scroll position changes. The effect will
 * be provided with the before/after scroll positions. Note that the effect may
 * not be always run: if scrolling is disabled through `useScrollController`, it
 * will be a no-op.
 *
 * @see {@link useScrollController}
 */function useScrollPosition(effect,deps){if(deps===void 0){deps=[];}var _useScrollController=useScrollController(),scrollEventsEnabledRef=_useScrollController.scrollEventsEnabledRef;var lastPositionRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(getScrollPosition());var dynamicEffect=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_3__/* .useDynamicCallback */ .ed)(effect);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var handleScroll=function handleScroll(){if(!scrollEventsEnabledRef.current){return;}var currentPosition=getScrollPosition();dynamicEffect(currentPosition,lastPositionRef.current);lastPositionRef.current=currentPosition;};var opts={passive:true};handleScroll();window.addEventListener('scroll',handleScroll,opts);return function(){return window.removeEventListener('scroll',handleScroll,opts);};// eslint-disable-next-line react-hooks/exhaustive-deps
},[dynamicEffect,scrollEventsEnabledRef].concat(deps));}function useScrollPositionSaver(){var lastElementRef=useRef({elem:null,top:0});var save=useCallback(function(elem){lastElementRef.current={elem:elem,top:elem.getBoundingClientRect().top};},[]);var restore=useCallback(function(){var _lastElementRef$curre=lastElementRef.current,elem=_lastElementRef$curre.elem,top=_lastElementRef$curre.top;if(!elem){return{restored:false};}var newTop=elem.getBoundingClientRect().top;var heightDiff=newTop-top;if(heightDiff){window.scrollBy({left:0,top:heightDiff});}lastElementRef.current={elem:null,top:0};return{restored:heightDiff!==0};},[]);return useMemo(function(){return{save:save,restore:restore};},[restore,save]);}/**
 * This hook permits to "block" the scroll position of a DOM element.
 * The idea is that we should be able to update DOM content above this element
 * but the screen position of this element should not change.
 *
 * Feature motivated by the Tabs groups: clicking on a tab may affect tabs of
 * the same group upper in the tree, yet to avoid a bad UX, the clicked tab must
 * remain under the user mouse.
 *
 * @see https://github.com/facebook/docusaurus/pull/5618
 */function useScrollPositionBlocker(){var scrollController=useScrollController();var scrollPositionSaver=useScrollPositionSaver();var nextLayoutEffectCallbackRef=useRef(undefined);var blockElementScrollPositionUntilNextRender=useCallback(function(el){scrollPositionSaver.save(el);scrollController.disableScrollEvents();nextLayoutEffectCallbackRef.current=function(){var _scrollPositionSaver$=scrollPositionSaver.restore(),restored=_scrollPositionSaver$.restored;nextLayoutEffectCallbackRef.current=undefined;// Restoring the former scroll position will trigger a scroll event. We
// need to wait for next scroll event to happen before enabling the
// scrollController events again.
if(restored){var handleScrollRestoreEvent=function handleScrollRestoreEvent(){scrollController.enableScrollEvents();window.removeEventListener('scroll',handleScrollRestoreEvent);};window.addEventListener('scroll',handleScrollRestoreEvent);}else{scrollController.enableScrollEvents();}};},[scrollController,scrollPositionSaver]);useLayoutEffect(function(){nextLayoutEffectCallbackRef.current==null?void 0:nextLayoutEffectCallbackRef.current();});return{blockElementScrollPositionUntilNextRender:blockElementScrollPositionUntilNextRender};}function smoothScrollNative(top){window.scrollTo({top:top,behavior:'smooth'});return function(){// Nothing to cancel, it's natively cancelled if user tries to scroll down
};}function smoothScrollPolyfill(top){var raf=null;var isUpScroll=document.documentElement.scrollTop>top;function rafRecursion(){var currentScroll=document.documentElement.scrollTop;if(isUpScroll&&currentScroll>top||!isUpScroll&&currentScroll<top){raf=requestAnimationFrame(rafRecursion);window.scrollTo(0,Math.floor((currentScroll-top)*0.85)+top);}}rafRecursion();// Break the recursion. Prevents the user from "fighting" against that
// recursion producing a weird UX
return function(){return raf&&cancelAnimationFrame(raf);};}/**
 * A "smart polyfill" of `window.scrollTo({ top, behavior: "smooth" })`.
 * This currently always uses a polyfilled implementation unless
 * `scroll-behavior: smooth` has been set in CSS, because native support
 * detection for scroll behavior seems unreliable.
 *
 * This hook does not do anything by itself: it returns a start and a stop
 * handle. You can execute either handle at any time.
 */function useSmoothScrollTo(){var cancelRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);var isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();// Not all have support for smooth scrolling (particularly Safari mobile iOS)
// TODO proper detection is currently unreliable!
// see https://github.com/wessberg/scroll-behavior-polyfill/issues/16
// For now, we only use native scroll behavior if smooth is already set,
// because otherwise the polyfill produces a weird UX when both CSS and JS try
// to scroll a page, and they cancel each other.
var supportsNativeSmoothScrolling=isBrowser&&getComputedStyle(document.documentElement).scrollBehavior==='smooth';return{startScroll:function startScroll(top){cancelRef.current=supportsNativeSmoothScrolling?smoothScrollNative(top):smoothScrollPolyfill(top);},cancelScroll:function cancelScroll(){return cancelRef.current==null?void 0:cancelRef.current();}};}

/***/ }),

/***/ 3149:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HX": function() { return /* binding */ DEFAULT_SEARCH_TAG; },
/* harmony export */   "os": function() { return /* binding */ docVersionSearchTag; }
/* harmony export */ });
/* unused harmony export useContextualSearchFilters */
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(353);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DEFAULT_SEARCH_TAG='default';/** The search tag to append as each doc's metadata. */function docVersionSearchTag(pluginId,versionName){return"docs-"+pluginId+"-"+versionName;}/**
 * Gets the relevant context information for contextual search.
 *
 * The value is generic and not coupled to Algolia/DocSearch, since we may want
 * to support multiple search engines, or allowing users to use their own search
 * engine solution.
 */function useContextualSearchFilters(){var _useDocusaurusContext=useDocusaurusContext(),i18n=_useDocusaurusContext.i18n;var allDocsData=useAllDocsData();var activePluginAndVersion=useActivePluginAndVersion();var docsPreferredVersionByPluginId=useDocsPreferredVersionByPluginId();// This can't use more specialized hooks because we are mapping over all
// plugin instances.
function getDocPluginTags(pluginId){var _ref;var activeVersion=(activePluginAndVersion==null?void 0:activePluginAndVersion.activePlugin.pluginId)===pluginId?activePluginAndVersion.activeVersion:undefined;var preferredVersion=docsPreferredVersionByPluginId[pluginId];var latestVersion=allDocsData[pluginId].versions.find(function(v){return v.isLast;});var version=(_ref=activeVersion!=null?activeVersion:preferredVersion)!=null?_ref:latestVersion;return docVersionSearchTag(pluginId,version.name);}var tags=[DEFAULT_SEARCH_TAG].concat(Object.keys(allDocsData).map(getDocPluginTags));return{locale:i18n.currentLocale,tags:tags};}

/***/ }),

/***/ 1819:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ createStorageSlot; },
/* harmony export */   "_": function() { return /* binding */ listStorageKeys; }
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var StorageTypes=(/* unused pure expression or super */ null && (['localStorage','sessionStorage','none']));var DefaultStorageType='localStorage';/**
 * Will return `null` if browser storage is unavailable (like running Docusaurus
 * in an iframe). This should NOT be called in SSR.
 *
 * @see https://github.com/facebook/docusaurus/pull/4501
 */function getBrowserStorage(storageType){if(storageType===void 0){storageType=DefaultStorageType;}if(typeof window==='undefined'){throw new Error('Browser storage is not available on Node.js/Docusaurus SSR process.');}if(storageType==='none'){return null;}try{return window[storageType];}catch(err){logOnceBrowserStorageNotAvailableWarning(err);return null;}}var hasLoggedBrowserStorageNotAvailableWarning=false;/**
 * Poor man's memoization to avoid logging multiple times the same warning.
 * Sometimes, `localStorage`/`sessionStorage` is unavailable due to browser
 * policies.
 */function logOnceBrowserStorageNotAvailableWarning(error){if(!hasLoggedBrowserStorageNotAvailableWarning){console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",error);hasLoggedBrowserStorageNotAvailableWarning=true;}}var NoopStorageSlot={get:function get(){return null;},set:function set(){},del:function del(){}};// Fail-fast, as storage APIs should not be used during the SSR process
function createServerStorageSlot(key){function throwError(){throw new Error("Illegal storage API usage for storage key \""+key+"\".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.");}return{get:throwError,set:throwError,del:throwError};}/**
 * Creates an interface to work on a particular key in the storage model.
 * Note that this function only initializes the interface, but doesn't allocate
 * anything by itself (i.e. no side-effects).
 *
 * The API is fail-safe, since usage of browser storage should be considered
 * unreliable. Local storage might simply be unavailable (iframe + browser
 * security) or operations might fail individually. Please assume that using
 * this API can be a no-op. See also https://github.com/facebook/docusaurus/issues/6036
 */function createStorageSlot(key,options){if(typeof window==='undefined'){return createServerStorageSlot(key);}var browserStorage=getBrowserStorage(options==null?void 0:options.persistence);if(browserStorage===null){return NoopStorageSlot;}return{get:function get(){try{return browserStorage.getItem(key);}catch(err){console.error("Docusaurus storage error, can't get key="+key,err);return null;}},set:function set(value){try{browserStorage.setItem(key,value);}catch(err){console.error("Docusaurus storage error, can't set "+key+"="+value,err);}},del:function del(){try{browserStorage.removeItem(key);}catch(err){console.error("Docusaurus storage error, can't delete key="+key,err);}}};}/**
 * Returns a list of all the keys currently stored in browser storage,
 * or an empty list if browser storage can't be accessed.
 */function listStorageKeys(storageType){if(storageType===void 0){storageType=DefaultStorageType;}var browserStorage=getBrowserStorage(storageType);if(!browserStorage){return[];}var keys=[];for(var i=0;i<browserStorage.length;i+=1){var key=browserStorage.key(i);if(key!==null){keys.push(key);}}return keys;}

/***/ }),

/***/ 3714:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": function() { return /* binding */ useAlternatePageUtils; }
/* harmony export */ });
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(353);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5331);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Permits to obtain the url of the current page in another locale, useful to
 * generate hreflang meta headers etc...
 *
 * @see https://developers.google.com/search/docs/advanced/crawling/localized-versions
 */function useAlternatePageUtils(){var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),_useDocusaurusContext2=_useDocusaurusContext.siteConfig,baseUrl=_useDocusaurusContext2.baseUrl,url=_useDocusaurusContext2.url,_useDocusaurusContext3=_useDocusaurusContext.i18n,defaultLocale=_useDocusaurusContext3.defaultLocale,currentLocale=_useDocusaurusContext3.currentLocale;var _useLocation=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .TH)(),pathname=_useLocation.pathname;var baseUrlUnlocalized=currentLocale===defaultLocale?baseUrl:baseUrl.replace("/"+currentLocale+"/",'/');var pathnameSuffix=pathname.replace(baseUrl,'');function getLocalizedBaseUrl(locale){return locale===defaultLocale?""+baseUrlUnlocalized:""+baseUrlUnlocalized+locale+"/";}// TODO support correct alternate url when localized site is deployed on
// another domain
function createUrl(_ref){var locale=_ref.locale,fullyQualified=_ref.fullyQualified;return""+(fullyQualified?url:'')+getLocalizedBaseUrl(locale)+pathnameSuffix;}return{createUrl:createUrl};}

/***/ }),

/***/ 4993:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ useLocationChange; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5331);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8215);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Fires an effect when the location changes (which includes hash, query, etc.).
 * Importantly, doesn't fire when there's no previous location: see
 * https://github.com/facebook/docusaurus/pull/6696
 */function useLocationChange(onLocationChange){var location=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .TH)();var previousLocation=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .usePrevious */ .D9)(location);var onLocationChangeDynamic=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .useDynamicCallback */ .ed)(onLocationChange);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(!previousLocation){return;}if(location!==previousLocation){onLocationChangeDynamic({location:location,previousLocation:previousLocation});}},[onLocationChangeDynamic,location,previousLocation]);}

/***/ }),

/***/ 624:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": function() { return /* binding */ useThemeConfig; }
/* harmony export */ });
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(353);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * A convenient/more semantic way to get theme config from context.
 */function useThemeConfig(){return (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().siteConfig.themeConfig;}

/***/ }),

/***/ 2520:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports, "__esModule", ({value:true}));// Trailing slash handling depends in some site configuration options
function applyTrailingSlash(path,options){var trailingSlash=options.trailingSlash,baseUrl=options.baseUrl;if(path.startsWith('#')){// Never apply trailing slash to an anchor link
return path;}// TODO deduplicate: also present in @docusaurus/utils
function addTrailingSlash(str){return str.endsWith('/')?str:str+"/";}function removeTrailingSlash(str){return str.endsWith('/')?str.slice(0,-1):str;}function handleTrailingSlash(str,trailing){return trailing?addTrailingSlash(str):removeTrailingSlash(str);}// undefined = legacy retrocompatible behavior
if(typeof trailingSlash==='undefined'){return path;}// The trailing slash should be handled before the ?search#hash !
var _path$split=path.split(/[#?]/),pathname=_path$split[0];// Never transform '/' to ''
// Never remove the baseUrl trailing slash!
// If baseUrl = /myBase/, we want to emit /myBase/index.html and not
// /myBase.html! See https://github.com/facebook/docusaurus/issues/5077
var shouldNotApply=pathname==='/'||pathname===baseUrl;var newPathname=shouldNotApply?pathname:handleTrailingSlash(pathname,trailingSlash);return path.replace(pathname,newPathname);}exports["default"]=applyTrailingSlash;

/***/ }),

/***/ 1721:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports, "__esModule", ({value:true}));exports.applyTrailingSlash=exports.blogPostContainerID=void 0;exports.blogPostContainerID='post-content';var applyTrailingSlash_1=__webpack_require__(2520);Object.defineProperty(exports, "applyTrailingSlash", ({enumerable:true,get:function get(){return __importDefault(applyTrailingSlash_1).default;}}));

/***/ }),

/***/ 6623:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ routes; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(5773);
// EXTERNAL MODULE: ../node_modules/react-loadable/lib/index.js
var lib = __webpack_require__(1237);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./.docusaurus/routesChunkNames.json
var routesChunkNames = __webpack_require__(6887);
;// CONCATENATED MODULE: ./.docusaurus/registry.js
/* harmony default export */ var registry = ({'01387d82':[function(){return __webpack_require__.e(/* import() | 01387d82 */ 4450).then(__webpack_require__.bind(__webpack_require__, 3468));},'@site/docs/api/interfaces/IPortFinalState.md',/*require.resolve*/(3468)],'07aeaa11':[function(){return __webpack_require__.e(/* import() | 07aeaa11 */ 9357).then(__webpack_require__.bind(__webpack_require__, 59));},'@site/docs/api/interfaces/IPortExport.md',/*require.resolve*/(59)],'116352d3':[function(){return __webpack_require__.e(/* import() | 116352d3 */ 6050).then(__webpack_require__.bind(__webpack_require__, 7854));},'@site/docs/api/interfaces/INodePortState.md',/*require.resolve*/(7854)],'12b11b9f':[function(){return __webpack_require__.e(/* import() | 12b11b9f */ 8720).then(__webpack_require__.bind(__webpack_require__, 4142));},'@site/docs/api/classes/RootStore.md',/*require.resolve*/(4142)],'17896441':[function(){return Promise.all(/* import() | 17896441 */[__webpack_require__.e(532), __webpack_require__.e(7748), __webpack_require__.e(7075), __webpack_require__.e(7918)]).then(__webpack_require__.bind(__webpack_require__, 7075));},'@theme/DocItem',/*require.resolve*/(7075)],'1920c4e6':[function(){return __webpack_require__.e(/* import() | 1920c4e6 */ 4232).then(__webpack_require__.bind(__webpack_require__, 6681));},'@site/docs/api/interfaces/ILineStyling.md',/*require.resolve*/(6681)],'1b9e7c79':[function(){return __webpack_require__.e(/* import() | 1b9e7c79 */ 732).then(__webpack_require__.bind(__webpack_require__, 3257));},'@site/docs/api/interfaces/DragAndDropEvent.md',/*require.resolve*/(3257)],'1be78505':[function(){return Promise.all(/* import() | 1be78505 */[__webpack_require__.e(532), __webpack_require__.e(9514)]).then(__webpack_require__.bind(__webpack_require__, 5085));},'@theme/DocPage',/*require.resolve*/(5085)],'228a8de0':[function(){return __webpack_require__.e(/* import() | 228a8de0 */ 5051).then(__webpack_require__.bind(__webpack_require__, 5353));},'@site/docs/api/classes/LinkPortEndpointState.md',/*require.resolve*/(5353)],'235d3851':[function(){return __webpack_require__.e(/* import() | 235d3851 */ 6715).then(__webpack_require__.bind(__webpack_require__, 7753));},'@site/docs/api/interfaces/ILinkStateWithoutId.md',/*require.resolve*/(7753)],'24c5f504':[function(){return __webpack_require__.e(/* import() | 24c5f504 */ 2523).then(__webpack_require__.bind(__webpack_require__, 6692));},'@site/docs/api/interfaces/IPortsContainerSettings.md',/*require.resolve*/(6692)],'2692539f':[function(){return __webpack_require__.e(/* import() | 2692539f */ 5018).then(__webpack_require__.bind(__webpack_require__, 9755));},'@site/docs/componentsCustomization/port.mdx',/*require.resolve*/(9755)],'299eae8c':[function(){return __webpack_require__.e(/* import() | 299eae8c */ 4024).then(__webpack_require__.bind(__webpack_require__, 9697));},'@site/docs/componentsCustomization/node.mdx',/*require.resolve*/(9697)],'29d0b7b6':[function(){return __webpack_require__.e(/* import() | 29d0b7b6 */ 802).then(__webpack_require__.bind(__webpack_require__, 4819));},'@site/docs/api/classes/VisualComponents.md',/*require.resolve*/(4819)],'2b3f87df':[function(){return __webpack_require__.e(/* import() | 2b3f87df */ 2659).then(__webpack_require__.bind(__webpack_require__, 4244));},'@site/docs/api/interfaces/IPortVisualComponentProps.md',/*require.resolve*/(4244)],'2db0ba82':[function(){return __webpack_require__.e(/* import() | 2db0ba82 */ 6874).then(__webpack_require__.bind(__webpack_require__, 5549));},'@site/docs/api/classes/PortState.md',/*require.resolve*/(5549)],'2e3f7b1e':[function(){return __webpack_require__.e(/* import() | 2e3f7b1e */ 9204).then(__webpack_require__.bind(__webpack_require__, 2056));},'@site/docs/api/interfaces/IPortState.md',/*require.resolve*/(2056)],'307b857d':[function(){return __webpack_require__.e(/* import() | 307b857d */ 4631).then(__webpack_require__.bind(__webpack_require__, 7859));},'@site/docs/api/interfaces/INodesSettings.md',/*require.resolve*/(7859)],'312105d1':[function(){return __webpack_require__.e(/* import() | 312105d1 */ 8753).then(__webpack_require__.bind(__webpack_require__, 4099));},'@site/docs/api/interfaces/INodeComponentSettings.md',/*require.resolve*/(4099)],'315cfba4':[function(){return Promise.all(/* import() | 315cfba4 */[__webpack_require__.e(532), __webpack_require__.e(7748), __webpack_require__.e(8915)]).then(__webpack_require__.bind(__webpack_require__, 4500));},'@site/src/pages/examples/calculator.jsx',/*require.resolve*/(4500)],'3229ceca':[function(){return Promise.all(/* import() | 3229ceca */[__webpack_require__.e(532), __webpack_require__.e(7748), __webpack_require__.e(9799), __webpack_require__.e(4317)]).then(__webpack_require__.bind(__webpack_require__, 5285));},'@site/src/pages/examples/dragAndDrop.jsx',/*require.resolve*/(5285)],'32327e54':[function(){return __webpack_require__.e(/* import() | 32327e54 */ 6046).then(__webpack_require__.bind(__webpack_require__, 3235));},'@site/docs/api/interfaces/IUserInteraction.md',/*require.resolve*/(3235)],'336602c1':[function(){return __webpack_require__.e(/* import() | 336602c1 */ 5845).then(__webpack_require__.bind(__webpack_require__, 2508));},'@site/docs/api/interfaces/DragAndDropStartEvent.md',/*require.resolve*/(2508)],'3521215b':[function(){return __webpack_require__.e(/* import() | 3521215b */ 5456).then(__webpack_require__.bind(__webpack_require__, 3760));},'@site/docs/componentsCustomization/link.mdx',/*require.resolve*/(3760)],'37cdcd52':[function(){return __webpack_require__.e(/* import() | 37cdcd52 */ 5939).then(__webpack_require__.t.bind(__webpack_require__, 5745, 19));},'/home/runner/work/react-easy-diagram/react-easy-diagram/website/.docusaurus/docusaurus-plugin-content-pages/default/plugin-route-context-module-100.json',/*require.resolve*/(5745)],'3b5b1066':[function(){return __webpack_require__.e(/* import() | 3b5b1066 */ 6903).then(__webpack_require__.bind(__webpack_require__, 8962));},'@site/docs/api/classes/HtmlElementRefState.md',/*require.resolve*/(8962)],'3be1f5b9':[function(){return __webpack_require__.e(/* import() | 3be1f5b9 */ 303).then(__webpack_require__.bind(__webpack_require__, 8946));},'@site/docs/api/interfaces/IZoomToFitSettings.md',/*require.resolve*/(8946)],'3d4d768c':[function(){return __webpack_require__.e(/* import() | 3d4d768c */ 1535).then(__webpack_require__.bind(__webpack_require__, 2478));},'@site/docs/api/interfaces/IUseLinkUserInteractionResult.md',/*require.resolve*/(2478)],'3eb2aded':[function(){return __webpack_require__.e(/* import() | 3eb2aded */ 8880).then(__webpack_require__.bind(__webpack_require__, 7308));},'@site/docs/api/interfaces/IMiniControlDefaultSettings.md',/*require.resolve*/(7308)],'401d8b43':[function(){return __webpack_require__.e(/* import() | 401d8b43 */ 4255).then(__webpack_require__.bind(__webpack_require__, 8779));},'@site/docs/api/interfaces/ICurvedLinkPathConstructorSettings.md',/*require.resolve*/(8779)],'40f48482':[function(){return __webpack_require__.e(/* import() | 40f48482 */ 1958).then(__webpack_require__.bind(__webpack_require__, 2533));},'@site/docs/api/classes/CommandExecutor.md',/*require.resolve*/(2533)],'433d41a3':[function(){return Promise.all(/* import() | 433d41a3 */[__webpack_require__.e(532), __webpack_require__.e(7748), __webpack_require__.e(9799), __webpack_require__.e(4342)]).then(__webpack_require__.bind(__webpack_require__, 8341));},'@site/src/pages/examples/customizePortDiagram.jsx',/*require.resolve*/(8341)],'442cf82c':[function(){return __webpack_require__.e(/* import() | 442cf82c */ 9111).then(__webpack_require__.bind(__webpack_require__, 4));},'@site/docs/api/interfaces/IComponentDefinition.md',/*require.resolve*/(4)],'44f8dd4c':[function(){return __webpack_require__.e(/* import() | 44f8dd4c */ 3424).then(__webpack_require__.bind(__webpack_require__, 6858));},'@site/docs/api/interfaces/IDiagramInnerProps.md',/*require.resolve*/(6858)],'489ae690':[function(){return __webpack_require__.e(/* import() | 489ae690 */ 3869).then(__webpack_require__.bind(__webpack_require__, 5436));},'@site/docs/api/interfaces/ILinkDefaultSettings.md',/*require.resolve*/(5436)],'4dfb37ac':[function(){return __webpack_require__.e(/* import() | 4dfb37ac */ 3122).then(__webpack_require__.bind(__webpack_require__, 6178));},'@site/docs/api/interfaces/IDiagramState.md',/*require.resolve*/(6178)],'50af8da1':[function(){return __webpack_require__.e(/* import() | 50af8da1 */ 5700).then(__webpack_require__.bind(__webpack_require__, 8484));},'@site/docs/api/classes/PortsSettings.md',/*require.resolve*/(8484)],'52d1cebf':[function(){return __webpack_require__.e(/* import() | 52d1cebf */ 3261).then(__webpack_require__.bind(__webpack_require__, 9656));},'@site/docs/api/interfaces/ILinkPath.md',/*require.resolve*/(9656)],'5735c2b9':[function(){return __webpack_require__.e(/* import() | 5735c2b9 */ 4134).then(__webpack_require__.bind(__webpack_require__, 2930));},'@site/docs/api/interfaces/ILinkSegment.md',/*require.resolve*/(2930)],'58508f90':[function(){return __webpack_require__.e(/* import() | 58508f90 */ 2946).then(__webpack_require__.bind(__webpack_require__, 8663));},'@site/docs/api/classes/UserInteractionSettings.md',/*require.resolve*/(8663)],'5b1ce5e3':[function(){return __webpack_require__.e(/* import() | 5b1ce5e3 */ 9828).then(__webpack_require__.bind(__webpack_require__, 9128));},'@site/docs/api/interfaces/ISettings.md',/*require.resolve*/(9128)],'5bd1257b':[function(){return __webpack_require__.e(/* import() | 5bd1257b */ 7062).then(__webpack_require__.bind(__webpack_require__, 7875));},'@site/docs/api/interfaces/ITransformation.md',/*require.resolve*/(7875)],'5c0cd74b':[function(){return __webpack_require__.e(/* import() | 5c0cd74b */ 4658).then(__webpack_require__.bind(__webpack_require__, 9850));},'@site/docs/api/interfaces/INodeDefaultSettings.md',/*require.resolve*/(9850)],'5e8c322a':[function(){return __webpack_require__.e(/* import() | 5e8c322a */ 7597).then(__webpack_require__.bind(__webpack_require__, 5966));},'@site/docs/api/index.md',/*require.resolve*/(5966)],'5e9f5e1a':[function(){return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 6809));},'@generated/docusaurus.config',/*require.resolve*/(6809)],'61ae1ca8':[function(){return __webpack_require__.e(/* import() | 61ae1ca8 */ 1085).then(__webpack_require__.bind(__webpack_require__, 3768));},'@site/docs/api/interfaces/ISvgBackgroundSettings.md',/*require.resolve*/(3768)],'630caeaa':[function(){return __webpack_require__.e(/* import() | 630caeaa */ 8955).then(__webpack_require__.bind(__webpack_require__, 8591));},'@site/docs/api/classes/DragState.md',/*require.resolve*/(8591)],'636ef741':[function(){return __webpack_require__.e(/* import() | 636ef741 */ 8917).then(__webpack_require__.bind(__webpack_require__, 1962));},'@site/docs/api/classes/LinksStore.md',/*require.resolve*/(1962)],'65f3459c':[function(){return __webpack_require__.e(/* import() | 65f3459c */ 3518).then(__webpack_require__.bind(__webpack_require__, 1961));},'@site/docs/userInteraction.mdx',/*require.resolve*/(1961)],'66accb38':[function(){return Promise.all(/* import() | 66accb38 */[__webpack_require__.e(532), __webpack_require__.e(7748), __webpack_require__.e(9150)]).then(__webpack_require__.bind(__webpack_require__, 7704));},'@site/src/pages/examples/linkMarkers.jsx',/*require.resolve*/(7704)],'66c968f6':[function(){return __webpack_require__.e(/* import() | 66c968f6 */ 8049).then(__webpack_require__.bind(__webpack_require__, 9023));},'@site/docs/api/interfaces/INodeExport.md',/*require.resolve*/(9023)],'687a2a40':[function(){return __webpack_require__.e(/* import() | 687a2a40 */ 1387).then(__webpack_require__.bind(__webpack_require__, 7435));},'@site/docs/api/interfaces/ICallbacks.md',/*require.resolve*/(7435)],'69d36dff':[function(){return __webpack_require__.e(/* import() | 69d36dff */ 9504).then(__webpack_require__.bind(__webpack_require__, 4956));},'@site/docs/api/classes/LinkState.md',/*require.resolve*/(4956)],'6f8de287':[function(){return __webpack_require__.e(/* import() | 6f8de287 */ 7696).then(__webpack_require__.bind(__webpack_require__, 3703));},'@site/docs/api/interfaces/IVisualComponentsObject.md',/*require.resolve*/(3703)],'6ff6fd8a':[function(){return __webpack_require__.e(/* import() | 6ff6fd8a */ 2654).then(__webpack_require__.bind(__webpack_require__, 9747));},'@site/docs/api/interfaces/IMiniControlComponentProps.md',/*require.resolve*/(9747)],'71bae565':[function(){return __webpack_require__.e(/* import() | 71bae565 */ 4755).then(__webpack_require__.bind(__webpack_require__, 7896));},'@site/docs/api/interfaces/ISvgArrowMarkerSettings.md',/*require.resolve*/(7896)],'74eaa3a9':[function(){return __webpack_require__.e(/* import() | 74eaa3a9 */ 1228).then(__webpack_require__.bind(__webpack_require__, 7668));},'@site/docs/api/interfaces/IUseStylingOptions.md',/*require.resolve*/(7668)],'76cda8ea':[function(){return __webpack_require__.e(/* import() | 76cda8ea */ 4189).then(__webpack_require__.bind(__webpack_require__, 3477));},'@site/docs/api/classes/VisualComponentWithDefault.md',/*require.resolve*/(3477)],'78bfeeec':[function(){return Promise.all(/* import() | 78bfeeec */[__webpack_require__.e(532), __webpack_require__.e(7748), __webpack_require__.e(8763)]).then(__webpack_require__.bind(__webpack_require__, 3730));},'@site/src/pages/examples/callbacks.jsx',/*require.resolve*/(3730)],'7a63f82f':[function(){return __webpack_require__.e(/* import() | 7a63f82f */ 4213).then(__webpack_require__.bind(__webpack_require__, 6908));},'@site/docs/api/interfaces/INodeStateWithId.md',/*require.resolve*/(6908)],'812c8586':[function(){return Promise.all(/* import() | 812c8586 */[__webpack_require__.e(532), __webpack_require__.e(7748), __webpack_require__.e(1542)]).then(__webpack_require__.bind(__webpack_require__, 5131));},'@site/src/pages/examples/configureUserInteraction.jsx',/*require.resolve*/(5131)],'8268b811':[function(){return __webpack_require__.e(/* import() | 8268b811 */ 7725).then(__webpack_require__.bind(__webpack_require__, 8207));},'@site/docs/api/interfaces/DragAndDropItemProps.md',/*require.resolve*/(8207)],'83e5247a':[function(){return __webpack_require__.e(/* import() | 83e5247a */ 7519).then(__webpack_require__.bind(__webpack_require__, 7909));},'@site/docs/api/interfaces/IDiagramInitState.md',/*require.resolve*/(7909)],'84b18c29':[function(){return __webpack_require__.e(/* import() | 84b18c29 */ 465).then(__webpack_require__.bind(__webpack_require__, 6532));},'@site/docs/dragAndDrop.mdx',/*require.resolve*/(6532)],'875054f9':[function(){return __webpack_require__.e(/* import() | 875054f9 */ 3259).then(__webpack_require__.bind(__webpack_require__, 4570));},'@site/docs/api/interfaces/INodeVisualComponentProps.md',/*require.resolve*/(4570)],'895edbb2':[function(){return __webpack_require__.e(/* import() | 895edbb2 */ 1628).then(__webpack_require__.bind(__webpack_require__, 6890));},'@site/docs/componentsCustomization/introduction.mdx',/*require.resolve*/(6890)],'89f48b69':[function(){return __webpack_require__.e(/* import() | 89f48b69 */ 7094).then(__webpack_require__.bind(__webpack_require__, 5641));},'@site/docs/api/interfaces/IPortProps.md',/*require.resolve*/(5641)],'8d1f52b3':[function(){return __webpack_require__.e(/* import() | 8d1f52b3 */ 5790).then(__webpack_require__.bind(__webpack_require__, 9563));},'@site/docs/api/interfaces/ILinkPathConstructorEndpointInfo.md',/*require.resolve*/(9563)],'8df92a11':[function(){return __webpack_require__.e(/* import() | 8df92a11 */ 3023).then(__webpack_require__.bind(__webpack_require__, 6819));},'@site/docs/api/interfaces/IUsePortUserInteractionResult.md',/*require.resolve*/(6819)],'935f2afb':[function(){return __webpack_require__.e(/* import() | 935f2afb */ 53).then(__webpack_require__.t.bind(__webpack_require__, 1109, 19));},'~docs/default/version-current-metadata-prop-751.json',/*require.resolve*/(1109)],'955cdec7':[function(){return __webpack_require__.e(/* import() | 955cdec7 */ 7793).then(__webpack_require__.bind(__webpack_require__, 9784));},'@site/docs/api/classes/LinksSettings.md',/*require.resolve*/(9784)],'972d9d57':[function(){return __webpack_require__.e(/* import() | 972d9d57 */ 937).then(__webpack_require__.bind(__webpack_require__, 9795));},'@site/docs/introduction.mdx',/*require.resolve*/(9795)],'97f7c156':[function(){return __webpack_require__.e(/* import() | 97f7c156 */ 5893).then(__webpack_require__.bind(__webpack_require__, 2825));},'@site/docs/api/interfaces/IPortInnerDefaultSettings.md',/*require.resolve*/(2825)],'98ff0432':[function(){return __webpack_require__.e(/* import() | 98ff0432 */ 7060).then(__webpack_require__.bind(__webpack_require__, 7730));},'@site/docs/api/interfaces/ILinkVisualComponentProps.md',/*require.resolve*/(7730)],'99dd505c':[function(){return __webpack_require__.e(/* import() | 99dd505c */ 2001).then(__webpack_require__.bind(__webpack_require__, 5760));},'@site/docs/api/interfaces/IDragHandlers.md',/*require.resolve*/(5760)],'9cd322d0':[function(){return __webpack_require__.e(/* import() | 9cd322d0 */ 2235).then(__webpack_require__.bind(__webpack_require__, 6508));},'@site/docs/api/classes/SelectionState.md',/*require.resolve*/(6508)],'9ef8d1bc':[function(){return __webpack_require__.e(/* import() | 9ef8d1bc */ 518).then(__webpack_require__.bind(__webpack_require__, 1518));},'@site/docs/api/interfaces/IUserInteractionTranslate.md',/*require.resolve*/(1518)],'a081921c':[function(){return __webpack_require__.e(/* import() | a081921c */ 9598).then(__webpack_require__.t.bind(__webpack_require__, 3769, 19));},'/home/runner/work/react-easy-diagram/react-easy-diagram/website/.docusaurus/docusaurus-plugin-content-docs/default/plugin-route-context-module-100.json',/*require.resolve*/(3769)],'a10b0601':[function(){return __webpack_require__.e(/* import() | a10b0601 */ 9776).then(__webpack_require__.bind(__webpack_require__, 6271));},'@site/docs/api/interfaces/ILinkStateWithId.md',/*require.resolve*/(6271)],'a2da613c':[function(){return __webpack_require__.e(/* import() | a2da613c */ 2035).then(__webpack_require__.bind(__webpack_require__, 9990));},'@site/docs/api/interfaces/ILinkInteractionState.md',/*require.resolve*/(9990)],'a5d28b63':[function(){return __webpack_require__.e(/* import() | a5d28b63 */ 9966).then(__webpack_require__.bind(__webpack_require__, 9208));},'@site/docs/api/interfaces/ISvgMarkerSettings.md',/*require.resolve*/(9208)],'a74c7b06':[function(){return __webpack_require__.e(/* import() | a74c7b06 */ 9925).then(__webpack_require__.bind(__webpack_require__, 4857));},'@site/docs/api/classes/LinkCreationState.md',/*require.resolve*/(4857)],'a838186a':[function(){return __webpack_require__.e(/* import() | a838186a */ 7286).then(__webpack_require__.bind(__webpack_require__, 3861));},'@site/docs/api/interfaces/IPortsSettings.md',/*require.resolve*/(3861)],'aa3c789d':[function(){return Promise.all(/* import() | aa3c789d */[__webpack_require__.e(532), __webpack_require__.e(7748), __webpack_require__.e(5829)]).then(__webpack_require__.bind(__webpack_require__, 834));},'@site/src/pages/examples/basic.jsx',/*require.resolve*/(834)],'af39baa3':[function(){return __webpack_require__.e(/* import() | af39baa3 */ 362).then(__webpack_require__.bind(__webpack_require__, 7892));},'@site/docs/api/interfaces/INodeStateWithoutId.md',/*require.resolve*/(7892)],'af557546':[function(){return Promise.all(/* import() | af557546 */[__webpack_require__.e(532), __webpack_require__.e(7748), __webpack_require__.e(1976)]).then(__webpack_require__.bind(__webpack_require__, 6113));},'@site/src/pages/examples/performance.jsx',/*require.resolve*/(6113)],'afdeda04':[function(){return __webpack_require__.e(/* import() | afdeda04 */ 4596).then(__webpack_require__.bind(__webpack_require__, 5933));},'@site/docs/api/classes/NodesStore.md',/*require.resolve*/(5933)],'b23d75c0':[function(){return __webpack_require__.e(/* import() | b23d75c0 */ 144).then(__webpack_require__.bind(__webpack_require__, 6781));},'@site/docs/api/classes/NodesSettings.md',/*require.resolve*/(6781)],'b2ec8c1d':[function(){return __webpack_require__.e(/* import() | b2ec8c1d */ 767).then(__webpack_require__.bind(__webpack_require__, 8900));},'@site/docs/api/interfaces/ILinkState.md',/*require.resolve*/(8900)],'b8f7a87d':[function(){return __webpack_require__.e(/* import() | b8f7a87d */ 2768).then(__webpack_require__.bind(__webpack_require__, 2560));},'@site/docs/api/interfaces/ILinkPortEndpoint.md',/*require.resolve*/(2560)],'bd0bfe9a':[function(){return __webpack_require__.e(/* import() | bd0bfe9a */ 3692).then(__webpack_require__.bind(__webpack_require__, 4089));},'@site/docs/api/interfaces/IPortStateWithoutIds.md',/*require.resolve*/(4089)],'bd8cd49d':[function(){return __webpack_require__.e(/* import() | bd8cd49d */ 1187).then(__webpack_require__.bind(__webpack_require__, 4058));},'@site/docs/api/interfaces/ICommand.md',/*require.resolve*/(4058)],'beab9ec7':[function(){return __webpack_require__.e(/* import() | beab9ec7 */ 1422).then(__webpack_require__.bind(__webpack_require__, 5691));},'@site/docs/api/classes/NodeState.md',/*require.resolve*/(5691)],'c21e4ab5':[function(){return __webpack_require__.e(/* import() | c21e4ab5 */ 2339).then(__webpack_require__.bind(__webpack_require__, 3296));},'@site/docs/api/interfaces/INodeState.md',/*require.resolve*/(3296)],'c25aca17':[function(){return __webpack_require__.e(/* import() | c25aca17 */ 4373).then(__webpack_require__.bind(__webpack_require__, 9145));},'@site/docs/api/interfaces/Dictionary.md',/*require.resolve*/(9145)],'c2a627a4':[function(){return Promise.all(/* import() | c2a627a4 */[__webpack_require__.e(532), __webpack_require__.e(7748), __webpack_require__.e(2409)]).then(__webpack_require__.bind(__webpack_require__, 8304));},'@site/src/pages/examples/portPosition.jsx',/*require.resolve*/(8304)],'c4f5d8e4':[function(){return Promise.all(/* import() | c4f5d8e4 */[__webpack_require__.e(532), __webpack_require__.e(4195)]).then(__webpack_require__.bind(__webpack_require__, 8598));},'@site/src/pages/index.js',/*require.resolve*/(8598)],'c5c23f20':[function(){return __webpack_require__.e(/* import() | c5c23f20 */ 4392).then(__webpack_require__.bind(__webpack_require__, 7866));},'@site/docs/api/interfaces/IVisualComponentProps.md',/*require.resolve*/(7866)],'ca8d3fd8':[function(){return __webpack_require__.e(/* import() | ca8d3fd8 */ 2325).then(__webpack_require__.bind(__webpack_require__, 1188));},'@site/docs/stateManagement.mdx',/*require.resolve*/(1188)],'cc4c535a':[function(){return __webpack_require__.e(/* import() | cc4c535a */ 4120).then(__webpack_require__.bind(__webpack_require__, 184));},'@site/docs/api/interfaces/ISvgCircleMarkerSettings.md',/*require.resolve*/(184)],'ce59fbe4':[function(){return Promise.all(/* import() | ce59fbe4 */[__webpack_require__.e(532), __webpack_require__.e(7748), __webpack_require__.e(5132)]).then(__webpack_require__.bind(__webpack_require__, 1325));},'@site/src/pages/examples/updatePortsPosition.jsx',/*require.resolve*/(1325)],'cf959e9c':[function(){return Promise.all(/* import() | cf959e9c */[__webpack_require__.e(532), __webpack_require__.e(7748), __webpack_require__.e(6317)]).then(__webpack_require__.bind(__webpack_require__, 7958));},'@site/src/pages/examples/dynamicPorts.jsx',/*require.resolve*/(7958)],'d02074d9':[function(){return __webpack_require__.e(/* import() | d02074d9 */ 2462).then(__webpack_require__.bind(__webpack_require__, 7600));},'@site/docs/api/interfaces/IHtmlElementRect.md',/*require.resolve*/(7600)],'d034e2e7':[function(){return __webpack_require__.e(/* import() | d034e2e7 */ 9825).then(__webpack_require__.bind(__webpack_require__, 2023));},'@site/docs/api/classes/DiagramSettings.md',/*require.resolve*/(2023)],'de301305':[function(){return __webpack_require__.e(/* import() | de301305 */ 1652).then(__webpack_require__.bind(__webpack_require__, 4676));},'@site/docs/api/interfaces/IPortsContainerProps.md',/*require.resolve*/(4676)],'e4b253d3':[function(){return __webpack_require__.e(/* import() | e4b253d3 */ 7652).then(__webpack_require__.bind(__webpack_require__, 7936));},'@site/docs/api/classes/Callbacks.md',/*require.resolve*/(7936)],'ee1a77ac':[function(){return __webpack_require__.e(/* import() | ee1a77ac */ 1596).then(__webpack_require__.bind(__webpack_require__, 3846));},'@site/docs/api/classes/VisualComponentState.md',/*require.resolve*/(3846)],'f1eeb769':[function(){return __webpack_require__.e(/* import() | f1eeb769 */ 4775).then(__webpack_require__.bind(__webpack_require__, 6614));},'@site/docs/api/interfaces/IBackgroundComponentProps.md',/*require.resolve*/(6614)],'f5978b58':[function(){return __webpack_require__.e(/* import() | f5978b58 */ 9887).then(__webpack_require__.bind(__webpack_require__, 6842));},'@site/docs/api/interfaces/IUserInteractionTranslateAndZoom.md',/*require.resolve*/(6842)],'f5a580a6':[function(){return __webpack_require__.e(/* import() | f5a580a6 */ 6328).then(__webpack_require__.bind(__webpack_require__, 5906));},'@site/docs/api/interfaces/IPortStateWithIds.md',/*require.resolve*/(5906)],'f6c71fb8':[function(){return __webpack_require__.e(/* import() | f6c71fb8 */ 4351).then(__webpack_require__.bind(__webpack_require__, 2698));},'@site/docs/api/interfaces/ILinksSettings.md',/*require.resolve*/(2698)],'f8fc711c':[function(){return __webpack_require__.e(/* import() | f8fc711c */ 9494).then(__webpack_require__.bind(__webpack_require__, 9202));},'@site/docs/api/classes/LinkPointEndpointState.md',/*require.resolve*/(9202)],'f9022ab0':[function(){return __webpack_require__.e(/* import() | f9022ab0 */ 3142).then(__webpack_require__.bind(__webpack_require__, 2431));},'@site/docs/api/interfaces/IDiagramSettings.md',/*require.resolve*/(2431)],'f9677936':[function(){return __webpack_require__.e(/* import() | f9677936 */ 1531).then(__webpack_require__.bind(__webpack_require__, 2934));},'@site/docs/api/classes/DiagramState.md',/*require.resolve*/(2934)],'fb72e560':[function(){return Promise.all(/* import() | fb72e560 */[__webpack_require__.e(532), __webpack_require__.e(7748), __webpack_require__.e(9799), __webpack_require__.e(2099)]).then(__webpack_require__.bind(__webpack_require__, 3611));},'@site/src/pages/examples/configureDefaultLink.jsx',/*require.resolve*/(3611)],'fbee2183':[function(){return __webpack_require__.e(/* import() | fbee2183 */ 1310).then(__webpack_require__.bind(__webpack_require__, 2162));},'@site/docs/api/interfaces/DragAndDropContainerProps.md',/*require.resolve*/(2162)],'fcdae9f6':[function(){return Promise.all(/* import() | fcdae9f6 */[__webpack_require__.e(532), __webpack_require__.e(7748), __webpack_require__.e(2651)]).then(__webpack_require__.bind(__webpack_require__, 7883));},'@site/src/pages/examples/positionSnapping.jsx',/*require.resolve*/(7883)]});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/theme-fallback/Loading/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Should we translate theme-fallback?
/* eslint-disable @docusaurus/no-untranslated-text */function Loading(_ref){var error=_ref.error,retry=_ref.retry,pastDelay=_ref.pastDelay;if(error){return/*#__PURE__*/react.createElement("div",{style:{textAlign:'center',color:'#fff',backgroundColor:'#fa383e',borderColor:'#fa383e',borderStyle:'solid',borderRadius:'0.25rem',borderWidth:'1px',boxSizing:'border-box',display:'block',padding:'1rem',flex:'0 0 50%',marginLeft:'25%',marginRight:'25%',marginTop:'5rem',maxWidth:'50%',width:'100%'}},/*#__PURE__*/react.createElement("p",null,String(error)),/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("button",{type:"button",onClick:retry},"Retry")));}if(pastDelay){return/*#__PURE__*/react.createElement("div",{style:{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}},/*#__PURE__*/react.createElement("svg",{id:"loader",style:{width:128,height:110,position:'absolute',top:'calc(100vh - 64%)'},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#61dafb"},/*#__PURE__*/react.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2"},/*#__PURE__*/react.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},/*#__PURE__*/react.createElement("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/react.createElement("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/react.createElement("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),/*#__PURE__*/react.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},/*#__PURE__*/react.createElement("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/react.createElement("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/react.createElement("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),/*#__PURE__*/react.createElement("circle",{cx:"22",cy:"22",r:"8"},/*#__PURE__*/react.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})))));}return null;}
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/flat.js
var flat = __webpack_require__(3361);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/routeContext.js
var client_routeContext = __webpack_require__(6881);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/core/lib/client/exports/ComponentCreator.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ComponentCreator(path,hash){// 404 page
if(path==='*'){return lib_default()({loading:Loading,loader:function loader(){return __webpack_require__.e(/* import() */ 3893).then(__webpack_require__.bind(__webpack_require__, 3893));},modules:['@theme/NotFound'],webpack:function webpack(){return[/*require.resolve*/(3893)];},render:function render(loaded,props){var NotFound=loaded.default;return/*#__PURE__*/react.createElement(client_routeContext/* RouteContextProvider */.z// Do we want a better name than native-default?
,{value:{plugin:{name:'native',id:'default'}}},/*#__PURE__*/react.createElement(NotFound,props));}});}var chunkNames=routesChunkNames[path+"-"+hash];// eslint-disable-next-line @typescript-eslint/no-explicit-any
var loader={};var modules=[];var optsWebpack=[];// A map from prop names to chunk names.
// e.g. Suppose the plugin added this as route:
//   { __comp: "...", prop: { foo: "..." }, items: ["...", "..."] }
// It will become:
//   { __comp: "...", "prop.foo": "...", "items.0": "...", "items.1": ... }
// Loadable.Map will _map_ over `loader` and load each key.
var flatChunkNames=(0,flat/* default */.Z)(chunkNames);Object.entries(flatChunkNames).forEach(function(_ref){var keyPath=_ref[0],chunkName=_ref[1];var chunkRegistry=registry[chunkName];if(chunkRegistry){// eslint-disable-next-line prefer-destructuring
loader[keyPath]=chunkRegistry[0];modules.push(chunkRegistry[1]);optsWebpack.push(chunkRegistry[2]);}});return lib_default().Map({loading:Loading,loader:loader,modules:modules,webpack:function webpack(){return optsWebpack;},render:function render(loaded,props){// `loaded` will be a map from key path (as returned from the flattened
// chunk names) to the modules loaded from the loaders. We now have to
// restore the chunk names' previous shape from this flat record.
// We do so by taking advantage of the existing `chunkNames` and replacing
// each chunk name with its loaded module, so we don't create another
// object from scratch.
var loadedModules=JSON.parse(JSON.stringify(chunkNames));Object.entries(loaded).forEach(function(_ref2){var keyPath=_ref2[0],loadedModule=_ref2[1];// JSON modules are also loaded as `{ default: ... }` (`import()`
// semantics) but we just want to pass the actual value to props.
var chunk=loadedModule.default;// One loaded chunk can only be one of two things: a module (props) or a
// component. Modules are always JSON, so `default` always exists. This
// could only happen with a user-defined component.
if(!chunk){throw new Error("The page component at "+path+" doesn't have a default export. This makes it impossible to render anything. Consider default-exporting a React component.");}// A module can be a primitive, for example, if the user stored a string
// as a prop. However, there seems to be a bug with swc-loader's CJS
// logic, in that it would load a JSON module with content "foo" as
// `{ default: "foo", 0: "f", 1: "o", 2: "o" }`. Just to be safe, we
// first make sure that the chunk is non-primitive.
if(typeof chunk==='object'||typeof chunk==='function'){Object.keys(loadedModule).filter(function(k){return k!=='default';}).forEach(function(nonDefaultKey){chunk[nonDefaultKey]=loadedModule[nonDefaultKey];});}// We now have this chunk prepared. Go down the key path and replace the
// chunk name with the actual chunk.
var val=loadedModules;var keyPaths=keyPath.split('.');keyPaths.slice(0,-1).forEach(function(k){val=val[k];});val[keyPaths[keyPaths.length-1]]=chunk;});/* eslint-disable no-underscore-dangle */var Component=loadedModules.__comp;delete loadedModules.__comp;var routeContext=loadedModules.__context;delete loadedModules.__context;/* eslint-enable no-underscore-dangle */ // Is there any way to put this RouteContextProvider upper in the tree?
return/*#__PURE__*/react.createElement(client_routeContext/* RouteContextProvider */.z,{value:routeContext},/*#__PURE__*/react.createElement(Component,(0,esm_extends/* default */.Z)({},loadedModules,props)));}});}
;// CONCATENATED MODULE: ./.docusaurus/routes.js
/* harmony default export */ var routes = ([{path:'/react-easy-diagram/examples/basic',component:ComponentCreator('/react-easy-diagram/examples/basic','aed'),exact:true},{path:'/react-easy-diagram/examples/calculator',component:ComponentCreator('/react-easy-diagram/examples/calculator','7c4'),exact:true},{path:'/react-easy-diagram/examples/callbacks',component:ComponentCreator('/react-easy-diagram/examples/callbacks','5ac'),exact:true},{path:'/react-easy-diagram/examples/configureDefaultLink',component:ComponentCreator('/react-easy-diagram/examples/configureDefaultLink','8c1'),exact:true},{path:'/react-easy-diagram/examples/configureUserInteraction',component:ComponentCreator('/react-easy-diagram/examples/configureUserInteraction','9ec'),exact:true},{path:'/react-easy-diagram/examples/customizePortDiagram',component:ComponentCreator('/react-easy-diagram/examples/customizePortDiagram','35f'),exact:true},{path:'/react-easy-diagram/examples/dragAndDrop',component:ComponentCreator('/react-easy-diagram/examples/dragAndDrop','29d'),exact:true},{path:'/react-easy-diagram/examples/dynamicPorts',component:ComponentCreator('/react-easy-diagram/examples/dynamicPorts','111'),exact:true},{path:'/react-easy-diagram/examples/linkMarkers',component:ComponentCreator('/react-easy-diagram/examples/linkMarkers','3f5'),exact:true},{path:'/react-easy-diagram/examples/performance',component:ComponentCreator('/react-easy-diagram/examples/performance','b90'),exact:true},{path:'/react-easy-diagram/examples/portPosition',component:ComponentCreator('/react-easy-diagram/examples/portPosition','255'),exact:true},{path:'/react-easy-diagram/examples/positionSnapping',component:ComponentCreator('/react-easy-diagram/examples/positionSnapping','ab6'),exact:true},{path:'/react-easy-diagram/examples/updatePortsPosition',component:ComponentCreator('/react-easy-diagram/examples/updatePortsPosition','baa'),exact:true},{path:'/react-easy-diagram/docs',component:ComponentCreator('/react-easy-diagram/docs','f22'),routes:[{path:'/react-easy-diagram/docs/',component:ComponentCreator('/react-easy-diagram/docs/','fa5'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/',component:ComponentCreator('/react-easy-diagram/docs/api/','282'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/Callbacks',component:ComponentCreator('/react-easy-diagram/docs/api/classes/Callbacks','dee'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/CommandExecutor',component:ComponentCreator('/react-easy-diagram/docs/api/classes/CommandExecutor','766'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/DiagramSettings',component:ComponentCreator('/react-easy-diagram/docs/api/classes/DiagramSettings','1f5'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/DiagramState',component:ComponentCreator('/react-easy-diagram/docs/api/classes/DiagramState','a8d'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/DragState',component:ComponentCreator('/react-easy-diagram/docs/api/classes/DragState','0ac'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/HtmlElementRefState',component:ComponentCreator('/react-easy-diagram/docs/api/classes/HtmlElementRefState','677'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/LinkCreationState',component:ComponentCreator('/react-easy-diagram/docs/api/classes/LinkCreationState','c0f'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/LinkPointEndpointState',component:ComponentCreator('/react-easy-diagram/docs/api/classes/LinkPointEndpointState','c16'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/LinkPortEndpointState',component:ComponentCreator('/react-easy-diagram/docs/api/classes/LinkPortEndpointState','98d'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/LinksSettings',component:ComponentCreator('/react-easy-diagram/docs/api/classes/LinksSettings','1f6'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/LinksStore',component:ComponentCreator('/react-easy-diagram/docs/api/classes/LinksStore','15e'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/LinkState',component:ComponentCreator('/react-easy-diagram/docs/api/classes/LinkState','e9f'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/NodesSettings',component:ComponentCreator('/react-easy-diagram/docs/api/classes/NodesSettings','5b4'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/NodesStore',component:ComponentCreator('/react-easy-diagram/docs/api/classes/NodesStore','582'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/NodeState',component:ComponentCreator('/react-easy-diagram/docs/api/classes/NodeState','a26'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/PortsSettings',component:ComponentCreator('/react-easy-diagram/docs/api/classes/PortsSettings','1d3'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/PortState',component:ComponentCreator('/react-easy-diagram/docs/api/classes/PortState','fd1'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/RootStore',component:ComponentCreator('/react-easy-diagram/docs/api/classes/RootStore','332'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/SelectionState',component:ComponentCreator('/react-easy-diagram/docs/api/classes/SelectionState','5a4'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/UserInteractionSettings',component:ComponentCreator('/react-easy-diagram/docs/api/classes/UserInteractionSettings','35a'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/VisualComponents',component:ComponentCreator('/react-easy-diagram/docs/api/classes/VisualComponents','cfe'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/VisualComponentState',component:ComponentCreator('/react-easy-diagram/docs/api/classes/VisualComponentState','8a2'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/classes/VisualComponentWithDefault',component:ComponentCreator('/react-easy-diagram/docs/api/classes/VisualComponentWithDefault','c09'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/Dictionary',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/Dictionary','625'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/DragAndDropContainerProps',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/DragAndDropContainerProps','cd0'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/DragAndDropEvent',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/DragAndDropEvent','8f6'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/DragAndDropItemProps',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/DragAndDropItemProps','b34'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/DragAndDropStartEvent',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/DragAndDropStartEvent','12e'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IBackgroundComponentProps',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IBackgroundComponentProps','5de'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ICallbacks',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ICallbacks','55f'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ICommand',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ICommand','2e5'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IComponentDefinition',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IComponentDefinition','806'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ICurvedLinkPathConstructorSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ICurvedLinkPathConstructorSettings','be3'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IDiagramInitState',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IDiagramInitState','669'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IDiagramInnerProps',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IDiagramInnerProps','a33'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IDiagramSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IDiagramSettings','461'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IDiagramState',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IDiagramState','e83'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IDragHandlers',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IDragHandlers','22c'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IHtmlElementRect',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IHtmlElementRect','e89'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ILineStyling',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ILineStyling','5c3'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ILinkDefaultSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ILinkDefaultSettings','107'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ILinkInteractionState',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ILinkInteractionState','430'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ILinkPath',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ILinkPath','55b'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ILinkPathConstructorEndpointInfo',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ILinkPathConstructorEndpointInfo','5a3'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ILinkPortEndpoint',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ILinkPortEndpoint','4a4'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ILinkSegment',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ILinkSegment','3f2'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ILinksSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ILinksSettings','57e'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ILinkState',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ILinkState','f3d'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ILinkStateWithId',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ILinkStateWithId','aef'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ILinkStateWithoutId',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ILinkStateWithoutId','ce0'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ILinkVisualComponentProps',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ILinkVisualComponentProps','b7d'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IMiniControlComponentProps',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IMiniControlComponentProps','ef5'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IMiniControlDefaultSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IMiniControlDefaultSettings','ee4'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/INodeComponentSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/INodeComponentSettings','e24'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/INodeDefaultSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/INodeDefaultSettings','9cf'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/INodeExport',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/INodeExport','649'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/INodePortState',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/INodePortState','4f4'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/INodesSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/INodesSettings','d82'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/INodeState',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/INodeState','2a6'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/INodeStateWithId',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/INodeStateWithId','e03'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/INodeStateWithoutId',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/INodeStateWithoutId','5ec'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/INodeVisualComponentProps',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/INodeVisualComponentProps','c82'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IPortExport',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IPortExport','dc2'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IPortFinalState',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IPortFinalState','980'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IPortInnerDefaultSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IPortInnerDefaultSettings','51d'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IPortProps',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IPortProps','af6'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IPortsContainerProps',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IPortsContainerProps','143'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IPortsContainerSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IPortsContainerSettings','21c'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IPortsSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IPortsSettings','4da'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IPortState',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IPortState','442'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IPortStateWithIds',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IPortStateWithIds','338'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IPortStateWithoutIds',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IPortStateWithoutIds','c08'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IPortVisualComponentProps',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IPortVisualComponentProps','db1'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ISettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ISettings','5a1'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ISvgArrowMarkerSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ISvgArrowMarkerSettings','fa2'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ISvgBackgroundSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ISvgBackgroundSettings','a83'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ISvgCircleMarkerSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ISvgCircleMarkerSettings','bce'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ISvgMarkerSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ISvgMarkerSettings','764'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/ITransformation',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/ITransformation','e15'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IUseLinkUserInteractionResult',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IUseLinkUserInteractionResult','6fd'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IUsePortUserInteractionResult',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IUsePortUserInteractionResult','9c1'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IUserInteraction',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IUserInteraction','e2e'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IUserInteractionTranslate',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IUserInteractionTranslate','50a'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IUserInteractionTranslateAndZoom',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IUserInteractionTranslateAndZoom','172'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IUseStylingOptions',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IUseStylingOptions','dee'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IVisualComponentProps',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IVisualComponentProps','b65'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IVisualComponentsObject',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IVisualComponentsObject','5df'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/api/interfaces/IZoomToFitSettings',component:ComponentCreator('/react-easy-diagram/docs/api/interfaces/IZoomToFitSettings','5c0'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/componentsCustomization/introduction',component:ComponentCreator('/react-easy-diagram/docs/componentsCustomization/introduction','020'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/componentsCustomization/link',component:ComponentCreator('/react-easy-diagram/docs/componentsCustomization/link','34f'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/componentsCustomization/node',component:ComponentCreator('/react-easy-diagram/docs/componentsCustomization/node','e6c'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/componentsCustomization/port',component:ComponentCreator('/react-easy-diagram/docs/componentsCustomization/port','8f9'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/dragAndDrop',component:ComponentCreator('/react-easy-diagram/docs/dragAndDrop','6af'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/stateManagement',component:ComponentCreator('/react-easy-diagram/docs/stateManagement','091'),exact:true,sidebar:"docs"},{path:'/react-easy-diagram/docs/userInteraction',component:ComponentCreator('/react-easy-diagram/docs/userInteraction','95a'),exact:true,sidebar:"docs"}]},{path:'/react-easy-diagram/',component:ComponentCreator('/react-easy-diagram/','beb'),exact:true},{path:'*',component:ComponentCreator('*')}]);

/***/ }),

/***/ 8944:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}


/***/ }),

/***/ 5036:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "lX": function() { return /* binding */ createBrowserHistory; },
  "q_": function() { return /* binding */ createHashHistory; },
  "ob": function() { return /* binding */ createLocation; },
  "PP": function() { return /* binding */ createMemoryHistory; },
  "Ep": function() { return /* binding */ createPath; }
});

// UNUSED EXPORTS: locationsAreEqual, parsePath

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(5773);
;// CONCATENATED MODULE: ../node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);

// EXTERNAL MODULE: ../node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var tiny_invariant_esm = __webpack_require__(1115);
;// CONCATENATED MODULE: ../node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,esm_extends/* default */.Z)({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? 0 : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? 0 : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : (0,tiny_invariant_esm/* default */.Z)(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.Z)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : (0,tiny_invariant_esm/* default */.Z)(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.Z)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? 0 : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? 0 : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.Z)(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ 5839:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(9185);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 3996:
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 5182:
/***/ (function(module) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 6733:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 142:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 6222:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 8504:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ 2525:
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 2349:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
/**
 * prism-react-renderer:
 * This file has been modified to remove:
 * - globals and window dependency
 * - worker support
 * - highlightAll and other element dependent methods
 * - _.hooks helpers
 * - UMD/node-specific hacks
 * It has also been run through prettier
 */

 var Prism = (function () {

	// Private helper vars
	var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element) {
					var m = lang.exec(element.className);
					if (m) {
						return m[1].toLowerCase();
					}
					element = element.parentElement;
				}
				return 'none';
			},

			/**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */
			setLanguage: function (element, language) {
				// remove all `language-xxxx` classes
				// (this might leave behind a leading space)
				element.className = element.className.replace(RegExp(lang, 'gi'), '');

				// add the new `language-xxxx` class
				// (using `classList` will automatically clean up spaces for us)
				element.classList.add('language-' + language);
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},


		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match || match.index >= text.length) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}

	return _;

}());

var prism = Prism;
Prism.default = Prism;

/* This content is auto-generated to include some prismjs language components: */

/* "prismjs/components/prism-markup" */

prism.languages.markup = {
  'comment': {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  'prolog': {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  'doctype': {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      'internal-subset': {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null // see below

      },
      'string': {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      'punctuation': /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/i,
      'name': /[^\s<>'"]+/
    }
  },
  'cdata': {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'special-attr': [],
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          'punctuation': [{
            pattern: /^=/,
            alias: 'attr-equals'
          }, /"|'/]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': [{
    pattern: /&[\da-z]{1,8};/i,
    alias: 'named-entity'
  }, /&#x?[\da-f]{1,8};/i]
};
prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = prism.languages.markup['entity'];
prism.languages.markup['doctype'].inside['internal-subset'].inside = prism.languages.markup; // Plugin to make entity title show the real entity, idea by Roman Komarov

prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Object.defineProperty(prism.languages.markup.tag, 'addAttribute', {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function (attrName, lang) {
    prism.languages.markup.tag.inside['special-attr'].push({
      pattern: RegExp(/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
      lookbehind: true,
      inside: {
        'attr-name': /^[^\s=]+/,
        'attr-value': {
          pattern: /=[\s\S]+/,
          inside: {
            'value': {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [lang, 'language-' + lang],
              inside: prism.languages[lang]
            },
            'punctuation': [{
              pattern: /^=/,
              alias: 'attr-equals'
            }, /"|'/]
          }
        }
      }
    });
  }
});
prism.languages.html = prism.languages.markup;
prism.languages.mathml = prism.languages.markup;
prism.languages.svg = prism.languages.markup;
prism.languages.xml = prism.languages.extend('markup', {});
prism.languages.ssml = prism.languages.xml;
prism.languages.atom = prism.languages.xml;
prism.languages.rss = prism.languages.xml;
/* "prismjs/components/prism-bash" */

(function (Prism) {
  // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
  // + LC_ALL, RANDOM, REPLY, SECONDS.
  // + make sure PS1..4 are here as they are not always set,
  // - some useless things.
  var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: 'punctuation',
    // this looks reasonably well in all themes
    inside: null // see below

  };
  var insideString = {
    'bash': commandAfterHeredoc,
    'environment': {
      pattern: RegExp('\\$' + envVars),
      alias: 'constant'
    },
    'variable': [// [0]: Arithmetic Environment
    {
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: true,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        'variable': [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        'operator': /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        'punctuation': /\(\(?|\)\)?|,|;/
      }
    }, // [1]: Command Substitution
    {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: true,
      inside: {
        'variable': /^\$\(|^`|\)$|`$/
      }
    }, // [2]: Brace expansion
    {
      pattern: /\$\{[^}]+\}/,
      greedy: true,
      inside: {
        'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        'punctuation': /[\[\]]/,
        'environment': {
          pattern: RegExp('(\\{)' + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  Prism.languages.bash = {
    'shebang': {
      pattern: /^#!\s*\/.*/,
      alias: 'important'
    },
    'comment': {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    'function-name': [// a) function foo {
    // b) foo() {
    // c) function foo() {
    // but not “foo {”
    {
      // a) and c)
      pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: true,
      alias: 'function'
    }, {
      // b)
      pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
      alias: 'function'
    }],
    // Highlight variable names as variables in for and select beginnings.
    'for-or-select': {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: 'variable',
      lookbehind: true
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    'assign-left': {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        'environment': {
          pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      },
      alias: 'variable',
      lookbehind: true
    },
    'string': [// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, // Here-document with quotes around the tag
    // → No expansion (so no “inside”).
    {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
      lookbehind: true,
      greedy: true,
      inside: {
        'bash': commandAfterHeredoc
      }
    }, // “Normal” string
    {
      // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
      pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, {
      // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
      pattern: /(^|[^$\\])'[^']*'/,
      lookbehind: true,
      greedy: true
    }, {
      // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
      pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
      greedy: true,
      inside: {
        'entity': insideString.entity
      }
    }],
    'environment': {
      pattern: RegExp('\\$?' + envVars),
      alias: 'constant'
    },
    'variable': insideString.variable,
    'function': {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'keyword': {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    'builtin': {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: true,
      // Alias added to make those easier to distinguish from strings.
      alias: 'class-name'
    },
    'boolean': {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'file-descriptor': {
      pattern: /\B&\d\b/,
      alias: 'important'
    },
    'operator': {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        'file-descriptor': {
          pattern: /^\d/,
          alias: 'important'
        }
      }
    },
    'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    'number': {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism.languages.bash;
  /* Patterns in command substitution. */

  var toBeCopied = ['comment', 'function-name', 'for-or-select', 'assign-left', 'string', 'environment', 'function', 'keyword', 'builtin', 'boolean', 'file-descriptor', 'operator', 'punctuation', 'number'];
  var inside = insideString.variable[1].inside;

  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
  }

  Prism.languages.shell = Prism.languages.bash;
})(prism);
/* "prismjs/components/prism-clike" */


prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      'punctuation': /[.\\]/
    }
  },
  'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  'boolean': /\b(?:false|true)\b/,
  'function': /\b\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  'punctuation': /[{}[\];(),.:]/
};
/* "prismjs/components/prism-c" */

prism.languages.c = prism.languages.extend('clike', {
  'comment': {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'string': {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: true
  },
  'keyword': /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  'function': /\b[a-z_]\w*(?=\s*\()/i,
  'number': /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
prism.languages.insertBefore('c', 'string', {
  'char': {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: true
  }
});
prism.languages.insertBefore('c', 'string', {
  'macro': {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    greedy: true,
    alias: 'property',
    inside: {
      'string': [{
        // highlight the path of the include statement as a string
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: true
      }, prism.languages.c['string']],
      'char': prism.languages.c['char'],
      'comment': prism.languages.c['comment'],
      'macro-name': [{
        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
        lookbehind: true
      }, {
        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
        lookbehind: true,
        alias: 'function'
      }],
      // highlight macro directives as keywords
      'directive': {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: true,
        alias: 'keyword'
      },
      'directive-hash': /^#/,
      'punctuation': /##|\\(?=[\r\n])/,
      'expression': {
        pattern: /\S[\s\S]*/,
        inside: prism.languages.c
      }
    }
  }
});
prism.languages.insertBefore('c', 'function', {
  // highlight predefined macros as constants
  'constant': /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete prism.languages.c['boolean'];
/* "prismjs/components/prism-cpp" */

(function (Prism) {
  var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
  var modName = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
    return keyword.source;
  });
  Prism.languages.cpp = Prism.languages.extend('c', {
    'class-name': [{
      pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function () {
        return keyword.source;
      })),
      lookbehind: true
    }, // This is intended to capture the class name of method implementations like:
    //   void foo::bar() const {}
    // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
    // it starts with an uppercase letter. This approximation should give decent results.
    /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, // This will capture the class name before destructors like:
    //   Foo::~Foo() {}
    /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, // This also intends to capture the class name of method implementations but here the class has template
    // parameters, so it can't be a namespace (until C++ adds generic namespaces).
    /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
    'keyword': keyword,
    'number': {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: true
    },
    'operator': />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    'boolean': /\b(?:false|true)\b/
  });
  Prism.languages.insertBefore('cpp', 'string', {
    'module': {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(/(\b(?:import|module)\s+)/.source + '(?:' + // header-name
      /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + '|' + // module name or partition or both
      /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
        return modName;
      }) + ')'),
      lookbehind: true,
      greedy: true,
      inside: {
        'string': /^[<"][\s\S]+/,
        'operator': /:/,
        'punctuation': /\./
      }
    },
    'raw-string': {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: 'string',
      greedy: true
    }
  });
  Prism.languages.insertBefore('cpp', 'keyword', {
    'generic-function': {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        'function': /^\w+/,
        'generic': {
          pattern: /<[\s\S]+/,
          alias: 'class-name',
          inside: Prism.languages.cpp
        }
      }
    }
  });
  Prism.languages.insertBefore('cpp', 'operator', {
    'double-colon': {
      pattern: /::/,
      alias: 'punctuation'
    }
  });
  Prism.languages.insertBefore('cpp', 'class-name', {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    'base-clause': {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: true,
      greedy: true,
      inside: Prism.languages.extend('cpp', {})
    }
  });
  Prism.languages.insertBefore('inside', 'double-colon', {
    // All untokenized words that are not namespaces should be class names
    'class-name': /\b[a-z_]\w*\b(?!\s*::)/i
  }, Prism.languages.cpp['base-clause']);
})(prism);
/* "prismjs/components/prism-css" */


(function (Prism) {
  var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        'rule': /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: 'selector'
        },
        'keyword': {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        } // See rest below

      }
    },
    'url': {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
      greedy: true,
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/,
        'string': {
          pattern: RegExp('^' + string.source + '$'),
          alias: 'url'
        }
      }
    },
    'selector': {
      pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
      lookbehind: true
    },
    'string': {
      pattern: string,
      greedy: true
    },
    'property': {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    'important': /!important\b/i,
    'function': {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;

  if (markup) {
    markup.tag.addInlined('style', 'css');
    markup.tag.addAttribute('style', 'css');
  }
})(prism);
/* "prismjs/components/prism-css-extras" */


(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  var selectorInside;
  Prism.languages.css.selector = {
    pattern: Prism.languages.css.selector.pattern,
    lookbehind: true,
    inside: selectorInside = {
      'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      'pseudo-class': /:[-\w]+/,
      'class': /\.[-\w]+/,
      'id': /#[-\w]+/,
      'attribute': {
        pattern: RegExp('\\[(?:[^[\\]"\']|' + string.source + ')*\\]'),
        greedy: true,
        inside: {
          'punctuation': /^\[|\]$/,
          'case-sensitivity': {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: 'keyword'
          },
          'namespace': {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: true,
            inside: {
              'punctuation': /\|$/
            }
          },
          'attr-name': {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: true
          },
          'attr-value': [string, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: true
          }],
          'operator': /[|~*^$]?=/
        }
      },
      'n-th': [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: true,
        inside: {
          'number': /[\dn]+/,
          'operator': /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: true
      }],
      'combinator': />|\+|~|\|\|/,
      // the `tag` token has been existed and removed.
      // because we can't find a perfect tokenize to match it.
      // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.
      'punctuation': /[(),]/
    }
  };
  Prism.languages.css['atrule'].inside['selector-function-argument'].inside = selectorInside;
  Prism.languages.insertBefore('css', 'property', {
    'variable': {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: true
    }
  });
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  Prism.languages.insertBefore('css', 'function', {
    'operator': {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    // CAREFUL!
    // Previewers and Inline color use hexcode and color.
    'hexcode': {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: 'color'
    },
    'color': [{
      pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
      lookbehind: true
    }, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\w-]+(?=\()/,
        'punctuation': /[(),]/
      }
    }],
    // it's important that there is no boundary assertion after the hex digits
    'entity': /\\[\da-f]{1,8}/i,
    'unit': unit,
    'number': number
  });
})(prism);
/* "prismjs/components/prism-javascript" */


prism.languages.javascript = prism.languages.extend('clike', {
  'class-name': [prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'number': {
    pattern: RegExp(/(^|[^\w$])/.source + '(?:' + ( // constant
    /NaN|Infinity/.source + '|' + // binary integer
    /0[bB][01]+(?:_[01]+)*n?/.source + '|' + // octal integer
    /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' + // hexadecimal integer
    /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' + // decimal bigint
    /\d+(?:_\d+)*n/.source + '|' + // decimal number (integer or float) but no bigint
    /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ')' + /(?![\w$])/.source),
    lookbehind: true
  },
  'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    // eslint-disable-next-line regexp/no-dupe-characters-character-class
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true,
    inside: {
      'regex-source': {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: 'language-regex',
        inside: prism.languages.regex
      },
      'regex-delimiter': /^\/|\/$/,
      'regex-flags': /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
prism.languages.insertBefore('javascript', 'string', {
  'hashbang': {
    pattern: /^#!.*/,
    greedy: true,
    alias: 'comment'
  },
  'template-string': {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\$\{|\}$/,
            alias: 'punctuation'
          },
          rest: prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  },
  'string-property': {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: 'property'
  }
});
prism.languages.insertBefore('javascript', 'operator', {
  'literal-property': {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: 'property'
  }
});

if (prism.languages.markup) {
  prism.languages.markup.tag.addInlined('script', 'javascript'); // add attribute support for all DOM events.
  // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events

  prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript');
}

prism.languages.js = prism.languages.javascript;
/* "prismjs/components/prism-coffeescript" */

(function (Prism) {
  // Ignore comments starting with { to privilege string interpolation highlighting
  var comment = /#(?!\{).+/;
  var interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: 'variable'
  };
  Prism.languages.coffeescript = Prism.languages.extend('javascript', {
    'comment': comment,
    'string': [// Strings are multiline
    {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true
    }, {
      // Strings are multiline
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }],
    'keyword': /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    'class-member': {
      pattern: /@(?!\d)\w+/,
      alias: 'variable'
    }
  });
  Prism.languages.insertBefore('coffeescript', 'comment', {
    'multiline-comment': {
      pattern: /###[\s\S]+?###/,
      alias: 'comment'
    },
    // Block regexp can contain comments and interpolation
    'block-regex': {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: 'regex',
      inside: {
        'comment': comment,
        'interpolation': interpolation
      }
    }
  });
  Prism.languages.insertBefore('coffeescript', 'string', {
    'inline-javascript': {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        'delimiter': {
          pattern: /^`|`$/,
          alias: 'punctuation'
        },
        'script': {
          pattern: /[\s\S]+/,
          alias: 'language-javascript',
          inside: Prism.languages.javascript
        }
      }
    },
    // Block strings
    'multiline-string': [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: 'string'
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: 'string',
      inside: {
        interpolation: interpolation
      }
    }]
  });
  Prism.languages.insertBefore('coffeescript', 'keyword', {
    // Object property
    'property': /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism.languages.coffeescript['template-string'];
  Prism.languages.coffee = Prism.languages.coffeescript;
})(prism);
/* "prismjs/components/prism-yaml" */


(function (Prism) {
  // https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
  // https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
  var anchorOrAlias = /[*&][^\s[\]{},]+/; // https://yaml.org/spec/1.2/spec.html#c-ns-tag-property

  var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/; // https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)

  var properties = '(?:' + tag.source + '(?:[ \t]+' + anchorOrAlias.source + ')?|' + anchorOrAlias.source + '(?:[ \t]+' + tag.source + ')?)'; // https://yaml.org/spec/1.2/spec.html#ns-plain(n,c)
  // This is a simplified version that doesn't support "#" and multiline keys
  // All these long scarry character classes are simplified versions of YAML's characters

  var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  });
  var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  /**
   *
   * @param {string} value
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function createValuePattern(value, flags) {
    flags = (flags || '').replace(/m/g, '') + 'm'; // add m flag

    var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function () {
      return properties;
    }).replace(/<<value>>/g, function () {
      return value;
    });
    return RegExp(pattern, flags);
  }

  Prism.languages.yaml = {
    'scalar': {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
        return properties;
      })),
      lookbehind: true,
      alias: 'string'
    },
    'comment': /#.*/,
    'key': {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function () {
        return properties;
      }).replace(/<<key>>/g, function () {
        return '(?:' + plainKey + '|' + string + ')';
      })),
      lookbehind: true,
      greedy: true,
      alias: 'atrule'
    },
    'directive': {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: 'important'
    },
    'datetime': {
      pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: true,
      alias: 'number'
    },
    'boolean': {
      pattern: createValuePattern(/false|true/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'null': {
      pattern: createValuePattern(/null|~/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'string': {
      pattern: createValuePattern(string),
      lookbehind: true,
      greedy: true
    },
    'number': {
      pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
      lookbehind: true
    },
    'tag': tag,
    'important': anchorOrAlias,
    'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
  };
  Prism.languages.yml = Prism.languages.yaml;
})(prism);
/* "prismjs/components/prism-markdown" */


(function (Prism) {
  // Allow only one line break
  var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  /**
   * This function is intended for the creation of the bold or italic pattern.
   *
   * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
   *
   * _Note:_ Keep in mind that this adds a capturing group.
   *
   * @param {string} pattern
   * @returns {RegExp}
   */

  function createInline(pattern) {
    pattern = pattern.replace(/<inner>/g, function () {
      return inner;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')');
  }

  var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
    return tableCell;
  });
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  Prism.languages.markdown = Prism.languages.extend('markup', {});
  Prism.languages.insertBefore('markdown', 'prolog', {
    'front-matter-block': {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        'punctuation': /^---|---$/,
        'front-matter': {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ['yaml', 'language-yaml'],
          inside: Prism.languages.yaml
        }
      }
    },
    'blockquote': {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: 'punctuation'
    },
    'table': {
      pattern: RegExp('^' + tableRow + tableLine + '(?:' + tableRow + ')*', 'm'),
      inside: {
        'table-data-rows': {
          pattern: RegExp('^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'),
          lookbehind: true,
          inside: {
            'table-data': {
              pattern: RegExp(tableCell),
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        },
        'table-line': {
          pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
          lookbehind: true,
          inside: {
            'punctuation': /\||:?-{3,}:?/
          }
        },
        'table-header-row': {
          pattern: RegExp('^' + tableRow + '$'),
          inside: {
            'table-header': {
              pattern: RegExp(tableCell),
              alias: 'important',
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        }
      }
    },
    'code': [{
      // Prefixed by 4 spaces or 1 tab and preceded by an empty line
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: true,
      alias: 'keyword'
    }, {
      // ```optional language
      // code block
      // ```
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        'code-block': {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: true
        },
        'code-language': {
          pattern: /^(```).+/,
          lookbehind: true
        },
        'punctuation': /```/
      }
    }],
    'title': [{
      // title 1
      // =======
      // title 2
      // -------
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: 'important',
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      // # title 1
      // ###### title 6
      pattern: /(^\s*)#.+/m,
      lookbehind: true,
      alias: 'important',
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    'hr': {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'list': {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'url-reference': {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        'variable': {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        'punctuation': /^[\[\]!:]|[<>]/
      },
      alias: 'url'
    },
    'bold': {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /\*\*|__/
      }
    },
    'italic': {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /[*_]/
      }
    },
    'strike': {
      // ~~strike through~~
      // ~strike~
      // eslint-disable-next-line regexp/strict
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /~~?/
      }
    },
    'code-snippet': {
      // `code`
      // ``code``
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: true,
      greedy: true,
      alias: ['code', 'keyword']
    },
    'url': {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'operator': /^!/,
        'content': {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {} // see below

        },
        'variable': {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        'url': {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: true
        },
        'string': {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: true
        }
      }
    }
  });
  ['url', 'bold', 'italic', 'strike'].forEach(function (token) {
    ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (inside) {
      if (token !== inside) {
        Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
      }
    });
  });
  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'markdown' && env.language !== 'md') {
      return;
    }

    function walkTokens(tokens) {
      if (!tokens || typeof tokens === 'string') {
        return;
      }

      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (token.type !== 'code') {
          walkTokens(token.content);
          continue;
        }
        /*
         * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
         * is optional. But the grammar is defined so that there is only one case we have to handle:
         *
         * token.content = [
         *     <span class="punctuation">```</span>,
         *     <span class="code-language">xxxx</span>,
         *     '\n', // exactly one new lines (\r or \n or \r\n)
         *     <span class="code-block">...</span>,
         *     '\n', // exactly one new lines again
         *     <span class="punctuation">```</span>
         * ];
         */


        var codeLang = token.content[1];
        var codeBlock = token.content[3];

        if (codeLang && codeBlock && codeLang.type === 'code-language' && codeBlock.type === 'code-block' && typeof codeLang.content === 'string') {
          // this might be a language that Prism does not support
          // do some replacements to support C++, C#, and F#
          var lang = codeLang.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp'); // only use the first word

          lang = (/[a-z][\w-]*/i.exec(lang) || [''])[0].toLowerCase();
          var alias = 'language-' + lang; // add alias

          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === 'string') {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }

    walkTokens(env.tokens);
  });
  Prism.hooks.add('wrap', function (env) {
    if (env.type !== 'code-block') {
      return;
    }

    var codeLang = '';

    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);

      if (match) {
        codeLang = match[1];
        break;
      }
    }

    var grammar = Prism.languages[codeLang];

    if (!grammar) {
      if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
        var id = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
        env.attributes['id'] = id;
        Prism.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);

          if (ele) {
            ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      env.content = Prism.highlight(textContent(env.content), grammar, codeLang);
    }
  });
  var tagPattern = RegExp(Prism.languages.markup.tag.pattern.source, 'gi');
  /**
   * A list of known entity names.
   *
   * This will always be incomplete to save space. The current list is the one used by lowdash's unescape function.
   *
   * @see {@link https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/unescape.js#L2}
   */

  var KNOWN_ENTITY_NAMES = {
    'amp': '&',
    'lt': '<',
    'gt': '>',
    'quot': '"'
  }; // IE 11 doesn't support `String.fromCodePoint`

  var fromCodePoint = String.fromCodePoint || String.fromCharCode;
  /**
   * Returns the text content of a given HTML source code string.
   *
   * @param {string} html
   * @returns {string}
   */

  function textContent(html) {
    // remove all tags
    var text = html.replace(tagPattern, ''); // decode known entities

    text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (m, code) {
      code = code.toLowerCase();

      if (code[0] === '#') {
        var value;

        if (code[1] === 'x') {
          value = parseInt(code.slice(2), 16);
        } else {
          value = Number(code.slice(1));
        }

        return fromCodePoint(value);
      } else {
        var known = KNOWN_ENTITY_NAMES[code];

        if (known) {
          return known;
        } // unable to decode


        return m;
      }
    });
    return text;
  }

  Prism.languages.md = Prism.languages.markdown;
})(prism);
/* "prismjs/components/prism-graphql" */


prism.languages.graphql = {
  'comment': /#.*/,
  'description': {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: true,
    alias: 'string',
    inside: {
      'language-markdown': {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: true,
        inside: prism.languages.markdown
      }
    }
  },
  'string': {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'boolean': /\b(?:false|true)\b/,
  'variable': /\$[a-z_]\w*/i,
  'directive': {
    pattern: /@[a-z_]\w*/i,
    alias: 'function'
  },
  'attr-name': {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  'atom-input': {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: 'class-name'
  },
  'scalar': /\b(?:Boolean|Float|ID|Int|String)\b/,
  'constant': /\b[A-Z][A-Z_\d]*\b/,
  'class-name': {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: true
  },
  'fragment': {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'definition-mutation': {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'definition-query': {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'keyword': /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  'operator': /[!=|&]|\.{3}/,
  'property-query': /\w+(?=\s*\()/,
  'object': /\w+(?=\s*\{)/,
  'punctuation': /[!(){}\[\]:=,]/,
  'property': /\w+/
};
prism.hooks.add('after-tokenize', function afterTokenizeGraphql(env) {
  if (env.language !== 'graphql') {
    return;
  }
  /**
   * get the graphql token stream that we want to customize
   *
   * @typedef {InstanceType<import("./prism-core")["Token"]>} Token
   * @type {Token[]}
   */


  var validTokens = env.tokens.filter(function (token) {
    return typeof token !== 'string' && token.type !== 'comment' && token.type !== 'scalar';
  });
  var currentIndex = 0;
  /**
   * Returns whether the token relative to the current index has the given type.
   *
   * @param {number} offset
   * @returns {Token | undefined}
   */

  function getToken(offset) {
    return validTokens[currentIndex + offset];
  }
  /**
   * Returns whether the token relative to the current index has the given type.
   *
   * @param {readonly string[]} types
   * @param {number} [offset=0]
   * @returns {boolean}
   */


  function isTokenType(types, offset) {
    offset = offset || 0;

    for (var i = 0; i < types.length; i++) {
      var token = getToken(i + offset);

      if (!token || token.type !== types[i]) {
        return false;
      }
    }

    return true;
  }
  /**
   * Returns the index of the closing bracket to an opening bracket.
   *
   * It is assumed that `token[currentIndex - 1]` is an opening bracket.
   *
   * If no closing bracket could be found, `-1` will be returned.
   *
   * @param {RegExp} open
   * @param {RegExp} close
   * @returns {number}
   */


  function findClosingBracket(open, close) {
    var stackHeight = 1;

    for (var i = currentIndex; i < validTokens.length; i++) {
      var token = validTokens[i];
      var content = token.content;

      if (token.type === 'punctuation' && typeof content === 'string') {
        if (open.test(content)) {
          stackHeight++;
        } else if (close.test(content)) {
          stackHeight--;

          if (stackHeight === 0) {
            return i;
          }
        }
      }
    }

    return -1;
  }
  /**
   * Adds an alias to the given token.
   *
   * @param {Token} token
   * @param {string} alias
   * @returns {void}
   */


  function addAlias(token, alias) {
    var aliases = token.alias;

    if (!aliases) {
      token.alias = aliases = [];
    } else if (!Array.isArray(aliases)) {
      token.alias = aliases = [aliases];
    }

    aliases.push(alias);
  }

  for (; currentIndex < validTokens.length;) {
    var startToken = validTokens[currentIndex++]; // add special aliases for mutation tokens

    if (startToken.type === 'keyword' && startToken.content === 'mutation') {
      // any array of the names of all input variables (if any)
      var inputVariables = [];

      if (isTokenType(['definition-mutation', 'punctuation']) && getToken(1).content === '(') {
        // definition
        currentIndex += 2; // skip 'definition-mutation' and 'punctuation'

        var definitionEnd = findClosingBracket(/^\($/, /^\)$/);

        if (definitionEnd === -1) {
          continue;
        } // find all input variables


        for (; currentIndex < definitionEnd; currentIndex++) {
          var t = getToken(0);

          if (t.type === 'variable') {
            addAlias(t, 'variable-input');
            inputVariables.push(t.content);
          }
        }

        currentIndex = definitionEnd + 1;
      }

      if (isTokenType(['punctuation', 'property-query']) && getToken(0).content === '{') {
        currentIndex++; // skip opening bracket

        addAlias(getToken(0), 'property-mutation');

        if (inputVariables.length > 0) {
          var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);

          if (mutationEnd === -1) {
            continue;
          } // give references to input variables a special alias


          for (var i = currentIndex; i < mutationEnd; i++) {
            var varToken = validTokens[i];

            if (varToken.type === 'variable' && inputVariables.indexOf(varToken.content) >= 0) {
              addAlias(varToken, 'variable-input');
            }
          }
        }
      }
    }
  }
});
/* "prismjs/components/prism-sql" */

prism.languages.sql = {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  'variable': [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  'string': {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  'identifier': {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: true,
    lookbehind: true,
    inside: {
      'punctuation': /^`|`$/
    }
  },
  'function': /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  'keyword': /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  'boolean': /\b(?:FALSE|NULL|TRUE)\b/i,
  'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  'operator': /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  'punctuation': /[;[\]()`,.]/
};
/* "prismjs/components/prism-js-templates" */

(function (Prism) {
  var templateString = Prism.languages.javascript['template-string']; // see the pattern in prism-javascript.js

  var templateLiteralPattern = templateString.pattern.source;
  var interpolationObject = templateString.inside['interpolation'];
  var interpolationPunctuationObject = interpolationObject.inside['interpolation-punctuation'];
  var interpolationPattern = interpolationObject.pattern.source;
  /**
   * Creates a new pattern to match a template string with a special tag.
   *
   * This will return `undefined` if there is no grammar with the given language id.
   *
   * @param {string} language The language id of the embedded language. E.g. `markdown`.
   * @param {string} tag The regex pattern to match the tag.
   * @returns {object | undefined}
   * @example
   * createTemplate('css', /\bcss/.source);
   */

  function createTemplate(language, tag) {
    if (!Prism.languages[language]) {
      return undefined;
    }

    return {
      pattern: RegExp('((?:' + tag + ')\\s*)' + templateLiteralPattern),
      lookbehind: true,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        'embedded-code': {
          pattern: /[\s\S]+/,
          alias: language
        }
      }
    };
  }

  Prism.languages.javascript['template-string'] = [// styled-jsx:
  //   css`a { color: #25F; }`
  // styled-components:
  //   styled.h1`color: red;`
  createTemplate('css', /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), // html`<p></p>`
  // div.innerHTML = `<p></p>`
  createTemplate('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), // svg`<path fill="#fff" d="M55.37 ..."/>`
  createTemplate('svg', /\bsvg/.source), // md`# h1`, markdown`## h2`
  createTemplate('markdown', /\b(?:markdown|md)/.source), // gql`...`, graphql`...`, graphql.experimental`...`
  createTemplate('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), // sql`...`
  createTemplate('sql', /\bsql/.source), // vanilla template string
  templateString].filter(Boolean);
  /**
   * Returns a specific placeholder literal for the given language.
   *
   * @param {number} counter
   * @param {string} language
   * @returns {string}
   */

  function getPlaceholder(counter, language) {
    return '___' + language.toUpperCase() + '_' + counter + '___';
  }
  /**
   * Returns the tokens of `Prism.tokenize` but also runs the `before-tokenize` and `after-tokenize` hooks.
   *
   * @param {string} code
   * @param {any} grammar
   * @param {string} language
   * @returns {(string|Token)[]}
   */


  function tokenizeWithHooks(code, grammar, language) {
    var env = {
      code: code,
      grammar: grammar,
      language: language
    };
    Prism.hooks.run('before-tokenize', env);
    env.tokens = Prism.tokenize(env.code, env.grammar);
    Prism.hooks.run('after-tokenize', env);
    return env.tokens;
  }
  /**
   * Returns the token of the given JavaScript interpolation expression.
   *
   * @param {string} expression The code of the expression. E.g. `"${42}"`
   * @returns {Token}
   */


  function tokenizeInterpolationExpression(expression) {
    var tempGrammar = {};
    tempGrammar['interpolation-punctuation'] = interpolationPunctuationObject;
    /** @type {Array} */

    var tokens = Prism.tokenize(expression, tempGrammar);

    if (tokens.length === 3) {
      /**
       * The token array will look like this
       * [
       *     ["interpolation-punctuation", "${"]
       *     "..." // JavaScript expression of the interpolation
       *     ["interpolation-punctuation", "}"]
       * ]
       */
      var args = [1, 1];
      args.push.apply(args, tokenizeWithHooks(tokens[1], Prism.languages.javascript, 'javascript'));
      tokens.splice.apply(tokens, args);
    }

    return new Prism.Token('interpolation', tokens, interpolationObject.alias, expression);
  }
  /**
   * Tokenizes the given code with support for JavaScript interpolation expressions mixed in.
   *
   * This function has 3 phases:
   *
   * 1. Replace all JavaScript interpolation expression with a placeholder.
   *    The placeholder will have the syntax of a identify of the target language.
   * 2. Tokenize the code with placeholders.
   * 3. Tokenize the interpolation expressions and re-insert them into the tokenize code.
   *    The insertion only works if a placeholder hasn't been "ripped apart" meaning that the placeholder has been
   *    tokenized as two tokens by the grammar of the embedded language.
   *
   * @param {string} code
   * @param {object} grammar
   * @param {string} language
   * @returns {Token}
   */


  function tokenizeEmbedded(code, grammar, language) {
    // 1. First filter out all interpolations
    // because they might be escaped, we need a lookbehind, so we use Prism

    /** @type {(Token|string)[]} */
    var _tokens = Prism.tokenize(code, {
      'interpolation': {
        pattern: RegExp(interpolationPattern),
        lookbehind: true
      }
    }); // replace all interpolations with a placeholder which is not in the code already


    var placeholderCounter = 0;
    /** @type {Object<string, string>} */

    var placeholderMap = {};

    var embeddedCode = _tokens.map(function (token) {
      if (typeof token === 'string') {
        return token;
      } else {
        var interpolationExpression = token.content;
        var placeholder;

        while (code.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) {
          /* noop */
        }

        placeholderMap[placeholder] = interpolationExpression;
        return placeholder;
      }
    }).join(''); // 2. Tokenize the embedded code


    var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language); // 3. Re-insert the interpolation

    var placeholders = Object.keys(placeholderMap);
    placeholderCounter = 0;
    /**
     *
     * @param {(Token|string)[]} tokens
     * @returns {void}
     */

    function walkTokens(tokens) {
      for (var i = 0; i < tokens.length; i++) {
        if (placeholderCounter >= placeholders.length) {
          return;
        }

        var token = tokens[i];

        if (typeof token === 'string' || typeof token.content === 'string') {
          var placeholder = placeholders[placeholderCounter];
          var s = typeof token === 'string' ? token :
          /** @type {string} */
          token.content;
          var index = s.indexOf(placeholder);

          if (index !== -1) {
            ++placeholderCounter;
            var before = s.substring(0, index);
            var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
            var after = s.substring(index + placeholder.length);
            var replacement = [];

            if (before) {
              replacement.push(before);
            }

            replacement.push(middle);

            if (after) {
              var afterTokens = [after];
              walkTokens(afterTokens);
              replacement.push.apply(replacement, afterTokens);
            }

            if (typeof token === 'string') {
              tokens.splice.apply(tokens, [i, 1].concat(replacement));
              i += replacement.length - 1;
            } else {
              token.content = replacement;
            }
          }
        } else {
          var content = token.content;

          if (Array.isArray(content)) {
            walkTokens(content);
          } else {
            walkTokens([content]);
          }
        }
      }
    }

    walkTokens(embeddedTokens);
    return new Prism.Token(language, embeddedTokens, 'language-' + language, code);
  }
  /**
   * The languages for which JS templating will handle tagged template literals.
   *
   * JS templating isn't active for only JavaScript but also related languages like TypeScript, JSX, and TSX.
   */


  var supportedLanguages = {
    'javascript': true,
    'js': true,
    'typescript': true,
    'ts': true,
    'jsx': true,
    'tsx': true
  };
  Prism.hooks.add('after-tokenize', function (env) {
    if (!(env.language in supportedLanguages)) {
      return;
    }
    /**
     * Finds and tokenizes all template strings with an embedded languages.
     *
     * @param {(Token | string)[]} tokens
     * @returns {void}
     */


    function findTemplateStrings(tokens) {
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          continue;
        }

        var content = token.content;

        if (!Array.isArray(content)) {
          if (typeof content !== 'string') {
            findTemplateStrings([content]);
          }

          continue;
        }

        if (token.type === 'template-string') {
          /**
           * A JavaScript template-string token will look like this:
           *
           * ["template-string", [
           *     ["template-punctuation", "`"],
           *     (
           *         An array of "string" and "interpolation" tokens. This is the simple string case.
           *         or
           *         ["embedded-code", "..."] This is the token containing the embedded code.
           *                                  It also has an alias which is the language of the embedded code.
           *     ),
           *     ["template-punctuation", "`"]
           * ]]
           */
          var embedded = content[1];

          if (content.length === 3 && typeof embedded !== 'string' && embedded.type === 'embedded-code') {
            // get string content
            var code = stringContent(embedded);
            var alias = embedded.alias;
            var language = Array.isArray(alias) ? alias[0] : alias;
            var grammar = Prism.languages[language];

            if (!grammar) {
              // the embedded language isn't registered.
              continue;
            }

            content[1] = tokenizeEmbedded(code, grammar, language);
          }
        } else {
          findTemplateStrings(content);
        }
      }
    }

    findTemplateStrings(env.tokens);
  });
  /**
   * Returns the string content of a token or token stream.
   *
   * @param {string | Token | (string | Token)[]} value
   * @returns {string}
   */

  function stringContent(value) {
    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(stringContent).join('');
    } else {
      return stringContent(value.content);
    }
  }
})(prism);
/* "prismjs/components/prism-typescript" */


(function (Prism) {
  Prism.languages.typescript = Prism.languages.extend('javascript', {
    'class-name': {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null // see below

    },
    'builtin': /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }); // The keywords TypeScript adds to JavaScript

  Prism.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, // keywords that have to be followed by an identifier
  /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, // This is for `import type *, {}`
  /\btype\b(?=\s*(?:[\{*]|$))/); // doesn't work with TS because TS is too complex

  delete Prism.languages.typescript['parameter'];
  delete Prism.languages.typescript['literal-property']; // a version of typescript specifically for highlighting types

  var typeInside = Prism.languages.extend('typescript', {});
  delete typeInside['class-name'];
  Prism.languages.typescript['class-name'].inside = typeInside;
  Prism.languages.insertBefore('typescript', 'function', {
    'decorator': {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        'at': {
          pattern: /^@/,
          alias: 'operator'
        },
        'function': /^[\s\S]+/
      }
    },
    'generic-function': {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        'function': /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        'generic': {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: 'class-name',
          inside: typeInside
        }
      }
    }
  });
  Prism.languages.ts = Prism.languages.typescript;
})(prism);
/* "prismjs/components/prism-js-extras" */


(function (Prism) {
  Prism.languages.insertBefore('javascript', 'function-variable', {
    'method-variable': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function-variable'].pattern.source),
      lookbehind: true,
      alias: ['function-variable', 'method', 'function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'function', {
    'method': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function'].source),
      lookbehind: true,
      alias: ['function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'constant', {
    'known-class-name': [{
      // standard built-ins
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
      pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
      alias: 'class-name'
    }, {
      // errors
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: 'class-name'
    }]
  });
  /**
   * Replaces the `<ID>` placeholder in the given pattern with a pattern for general JS identifiers.
   *
   * @param {string} source
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function withId(source, flags) {
    return RegExp(source.replace(/<ID>/g, function () {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), flags);
  }

  Prism.languages.insertBefore('javascript', 'keyword', {
    'imports': {
      // https://tc39.es/ecma262/#sec-imports
      pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    'exports': {
      // https://tc39.es/ecma262/#sec-exports
      pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    }
  });
  Prism.languages.javascript['keyword'].unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: 'module'
  }, {
    pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
    alias: 'control-flow'
  }, {
    pattern: /\bnull\b/,
    alias: ['null', 'nil']
  }, {
    pattern: /\bundefined\b/,
    alias: 'nil'
  });
  Prism.languages.insertBefore('javascript', 'operator', {
    'spread': {
      pattern: /\.{3}/,
      alias: 'operator'
    },
    'arrow': {
      pattern: /=>/,
      alias: 'operator'
    }
  });
  Prism.languages.insertBefore('javascript', 'punctuation', {
    'property-access': {
      pattern: withId(/(\.\s*)#?<ID>/.source),
      lookbehind: true
    },
    'maybe-class-name': {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    'dom': {
      // this contains only a few commonly used DOM variables
      pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
      alias: 'variable'
    },
    'console': {
      pattern: /\bconsole(?=\s*\.)/,
      alias: 'class-name'
    }
  }); // add 'maybe-class-name' to tokens which might be a class name

  var maybeClassNameTokens = ['function', 'function-variable', 'method', 'method-variable', 'property-access'];

  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism.languages.javascript[token]; // convert regex to object

    if (Prism.util.type(value) === 'RegExp') {
      value = Prism.languages.javascript[token] = {
        pattern: value
      };
    } // keep in mind that we don't support arrays


    var inside = value.inside || {};
    value.inside = inside;
    inside['maybe-class-name'] = /^[A-Z][\s\S]*/;
  }
})(prism);
/* "prismjs/components/prism-jsx" */


(function (Prism) {
  var javascript = Prism.util.clone(Prism.languages.javascript);
  var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  /**
   * @param {string} source
   * @param {string} [flags]
   */

  function re(source, flags) {
    source = source.replace(/<S>/g, function () {
      return space;
    }).replace(/<BRACES>/g, function () {
      return braces;
    }).replace(/<SPREAD>/g, function () {
      return spread;
    });
    return RegExp(source, flags);
  }

  spread = re(spread).source;
  Prism.languages.jsx = Prism.languages.extend('markup', javascript);
  Prism.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
  Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/;
  Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism.languages.jsx.tag.inside['comment'] = javascript['comment'];
  Prism.languages.insertBefore('inside', 'attr-name', {
    'spread': {
      pattern: re(/<SPREAD>/.source),
      inside: Prism.languages.jsx
    }
  }, Prism.languages.jsx.tag);
  Prism.languages.insertBefore('inside', 'special-attr', {
    'script': {
      // Allow for two levels of nesting
      pattern: re(/=<BRACES>/.source),
      alias: 'language-javascript',
      inside: {
        'script-punctuation': {
          pattern: /^=(?=\{)/,
          alias: 'punctuation'
        },
        rest: Prism.languages.jsx
      }
    }
  }, Prism.languages.jsx.tag); // The following will handle plain text inside tags

  var stringifyToken = function (token) {
    if (!token) {
      return '';
    }

    if (typeof token === 'string') {
      return token;
    }

    if (typeof token.content === 'string') {
      return token.content;
    }

    return token.content.map(stringifyToken).join('');
  };

  var walkTokens = function (tokens) {
    var openedTags = [];

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;

      if (typeof token !== 'string') {
        if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
          // We found a tag, now find its kind
          if (token.content[0].content[0].content === '</') {
            // Closing tag
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              // Pop matching opening tag
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === '/>') ; else {
              // Opening tag
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
          // Here we might have entered a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
          // Here we might have left a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }

      if (notTagNorBrace || typeof token === 'string') {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          // Here we are inside a tag, and not inside a JSX context.
          // That's plain text: drop any tokens matched.
          var plainText = stringifyToken(token); // And merge text with adjacent text

          if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }

          if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }

          tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
        }
      }

      if (token.content && typeof token.content !== 'string') {
        walkTokens(token.content);
      }
    }
  };

  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'jsx' && env.language !== 'tsx') {
      return;
    }

    walkTokens(env.tokens);
  });
})(prism);
/* "prismjs/components/prism-diff" */


(function (Prism) {
  Prism.languages.diff = {
    'coord': [// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
    /^(?:\*{3}|-{3}|\+{3}).*$/m, // Match "@@ ... @@" coord lines in unified diff.
    /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).
    /^\d.*$/m] // deleted, inserted, unchanged, diff

  };
  /**
   * A map from the name of a block to its line prefix.
   *
   * @type {Object<string, string>}
   */

  var PREFIXES = {
    'deleted-sign': '-',
    'deleted-arrow': '<',
    'inserted-sign': '+',
    'inserted-arrow': '>',
    'unchanged': ' ',
    'diff': '!'
  }; // add a token for each prefix

  Object.keys(PREFIXES).forEach(function (name) {
    var prefix = PREFIXES[name];
    var alias = [];

    if (!/^\w+$/.test(name)) {
      // "deleted-sign" -> "deleted"
      alias.push(/\w+/.exec(name)[0]);
    }

    if (name === 'diff') {
      alias.push('bold');
    }

    Prism.languages.diff[name] = {
      pattern: RegExp('^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
      alias: alias,
      inside: {
        'line': {
          pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
          lookbehind: true
        },
        'prefix': {
          pattern: /[\s\S]/,
          alias: /\w+/.exec(name)[0]
        }
      }
    };
  }); // make prefixes available to Diff plugin

  Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
    value: PREFIXES
  });
})(prism);
/* "prismjs/components/prism-git" */


prism.languages.git = {
  /*
   * A simple one line comment like in a git status command
   * For instance:
   * $ git status
   * # On branch infinite-scroll
   * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
   * # and have 1 and 2 different commits each, respectively.
   * nothing to commit (working directory clean)
   */
  'comment': /^#.*/m,

  /*
   * Regexp to match the changed lines in a git diff output. Check the example below.
   */
  'deleted': /^[-–].*/m,
  'inserted': /^\+.*/m,

  /*
   * a string (double and simple quote)
   */
  'string': /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,

  /*
   * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
   * For instance:
   * $ git add file.txt
   */
  'command': {
    pattern: /^.*\$ git .*$/m,
    inside: {
      /*
       * A git command can contain a parameter starting by a single or a double dash followed by a string
       * For instance:
       * $ git diff --cached
       * $ git log -p
       */
      'parameter': /\s--?\w+/
    }
  },

  /*
   * Coordinates displayed in a git diff command
   * For instance:
   * $ git diff
   * diff --git file.txt file.txt
   * index 6214953..1d54a52 100644
   * --- file.txt
   * +++ file.txt
   * @@ -1 +1,2 @@
   * -Here's my tetx file
   * +Here's my text file
   * +And this is the second line
   */
  'coord': /^@@.*@@$/m,

  /*
   * Match a "commit [SHA1]" line in a git log output.
   * For instance:
   * $ git log
   * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
   * Author: lgiraudel
   * Date:   Mon Feb 17 11:18:34 2014 +0100
   *
   *     Add of a new line
   */
  'commit-sha1': /^commit \w{40}$/m
};
/* "prismjs/components/prism-go" */

prism.languages.go = prism.languages.extend('clike', {
  'string': {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: true,
    greedy: true
  },
  'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  'boolean': /\b(?:_|false|iota|nil|true)\b/,
  'number': [// binary and octal integers
  /\b0(?:b[01_]+|o[0-7_]+)i?\b/i, // hexadecimal integers and floats
  /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, // decimal integers and floats
  /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
  'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  'builtin': /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
prism.languages.insertBefore('go', 'string', {
  'char': {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: true
  }
});
delete prism.languages.go['class-name'];
/* "prismjs/components/prism-markup-templating" */

(function (Prism) {
  /**
   * Returns the placeholder for the given language id and index.
   *
   * @param {string} language
   * @param {string|number} index
   * @returns {string}
   */
  function getPlaceholder(language, index) {
    return '___' + language.toUpperCase() + index + '___';
  }

  Object.defineProperties(Prism.languages['markup-templating'] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function (env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }

        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function (match) {
          if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
            return match;
          }

          var i = tokenStack.length;
          var placeholder; // Check for existing strings

          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          } // Create a sparse array


          tokenStack[i] = match;
          return placeholder;
        }); // Switch the grammar to markup

        env.grammar = Prism.languages.markup;
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function (env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        } // Switch the grammar back


        env.grammar = Prism.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);

        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            // all placeholders are replaced already
            if (j >= keys.length) {
              break;
            }

            var token = tokens[i];

            if (typeof token === 'string' || token.content && typeof token.content === 'string') {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === 'string' ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);

              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];

                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }

                replacement.push(middle);

                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }

                if (typeof token === 'string') {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content
            /* && typeof token.content !== 'string' */
            ) {
                walkTokens(token.content);
              }
          }

          return tokens;
        }

        walkTokens(env.tokens);
      }
    }
  });
})(prism);
/* "prismjs/components/prism-handlebars" */


(function (Prism) {
  Prism.languages.handlebars = {
    'comment': /\{\{![\s\S]*?\}\}/,
    'delimiter': {
      pattern: /^\{\{\{?|\}\}\}?$/,
      alias: 'punctuation'
    },
    'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    'boolean': /\b(?:false|true)\b/,
    'block': {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: true,
      alias: 'keyword'
    },
    'brackets': {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    'punctuation': /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    'variable': /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism.hooks.add('before-tokenize', function (env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'handlebars', handlebarsPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'handlebars');
  });
  Prism.languages.hbs = Prism.languages.handlebars;
})(prism);
/* "prismjs/components/prism-json" */
// https://www.json.org/json-en.html


prism.languages.json = {
  'property': {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true
  },
  'string': {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true
  },
  'comment': {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'punctuation': /[{}[\],]/,
  'operator': /:/,
  'boolean': /\b(?:false|true)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  }
};
prism.languages.webmanifest = prism.languages.json;
/* "prismjs/components/prism-less" */

/* FIXME :
 :extend() is not handled specifically : its highlighting is buggy.
 Mixin usage must be inside a ruleset to be highlighted.
 At-rules (e.g. import) containing interpolations are buggy.
 Detached rulesets are highlighted as at-rules.
 A comment before a mixin usage prevents the latter to be properly highlighted.
 */

prism.languages.less = prism.languages.extend('css', {
  'comment': [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  'atrule': {
    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      'punctuation': /[:()]/
    }
  },
  // selectors and mixins are considered the same
  'selector': {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      // mixin parameters
      'variable': /@+[\w-]+/
    }
  },
  'property': /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
  'operator': /[+\-*\/]/
});
prism.languages.insertBefore('less', 'property', {
  'variable': [// Variable declaration (the colon must be consumed!)
  {
    pattern: /@[\w-]+\s*:/,
    inside: {
      'punctuation': /:/
    }
  }, // Variable usage
  /@@?[\w-]+/],
  'mixin-usage': {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: true,
    alias: 'function'
  }
});
/* "prismjs/components/prism-makefile" */

prism.languages.makefile = {
  'comment': {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'builtin-target': {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: 'builtin'
  },
  'target': {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: 'symbol',
    inside: {
      'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  // Directives
  'keyword': /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
  'function': {
    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: true
  },
  'operator': /(?:::|[?:+!])?=|[|@]/,
  'punctuation': /[:;(){}]/
};
/* "prismjs/components/prism-objectivec" */

prism.languages.objectivec = prism.languages.extend('c', {
  'string': {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  'keyword': /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  'operator': /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete prism.languages.objectivec['class-name'];
prism.languages.objc = prism.languages.objectivec;
/* "prismjs/components/prism-ocaml" */
// https://ocaml.org/manual/lex.html

prism.languages.ocaml = {
  'comment': {
    pattern: /\(\*[\s\S]*?\*\)/,
    greedy: true
  },
  'char': {
    pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
    greedy: true
  },
  'string': [{
    pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/,
    greedy: true
  }],
  'number': [// binary and octal
  /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i, // hexadecimal
  /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i, // decimal
  /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],
  'directive': {
    pattern: /\B#\w+/,
    alias: 'property'
  },
  'label': {
    pattern: /\B~\w+/,
    alias: 'property'
  },
  'type-variable': {
    pattern: /\B'\w+/,
    alias: 'function'
  },
  'variant': {
    pattern: /`\w+/,
    alias: 'symbol'
  },
  // For the list of keywords and operators,
  // see: http://caml.inria.fr/pub/docs/manual-ocaml/lex.html#sec84
  'keyword': /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  'boolean': /\b(?:false|true)\b/,
  'operator-like-punctuation': {
    pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
    alias: 'punctuation'
  },
  // Custom operators are allowed
  'operator': /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  'punctuation': /;;|::|[(){}\[\].,:;#]|\b_\b/
};
/* "prismjs/components/prism-python" */

prism.languages.python = {
  'comment': {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true,
    greedy: true
  },
  'string-interpolation': {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      'interpolation': {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: true,
        inside: {
          'format-spec': {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: true
          },
          'conversion-option': {
            pattern: /![sra](?=[:}]$)/,
            alias: 'punctuation'
          },
          rest: null
        }
      },
      'string': /[\s\S]+/
    }
  },
  'triple-quoted-string': {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: true,
    alias: 'string'
  },
  'string': {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  'function': {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  'class-name': {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  'decorator': {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: true,
    alias: ['annotation', 'punctuation'],
    inside: {
      'punctuation': /\./
    }
  },
  'keyword': /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  'boolean': /\b(?:False|None|True)\b/,
  'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  'punctuation': /[{}[\];(),.:]/
};
prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = prism.languages.python;
prism.languages.py = prism.languages.python;
/* "prismjs/components/prism-reason" */

prism.languages.reason = prism.languages.extend('clike', {
  'string': {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  // 'class-name' must be matched *after* 'constructor' defined below
  'class-name': /\b[A-Z]\w*/,
  'keyword': /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  'operator': /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
});
prism.languages.insertBefore('reason', 'class-name', {
  'char': {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    greedy: true
  },
  // Negative look-ahead prevents from matching things like String.capitalize
  'constructor': /\b[A-Z]\w*\b(?!\s*\.)/,
  'label': {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: 'symbol'
  }
}); // We can't match functions property, so let's not even try.

delete prism.languages.reason.function;
/* "prismjs/components/prism-sass" */

(function (Prism) {
  Prism.languages.sass = Prism.languages.extend('css', {
    // Sass comments don't need to be closed, only indented
    'comment': {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: true,
      greedy: true
    }
  });
  Prism.languages.insertBefore('sass', 'atrule', {
    // We want to consume the whole line
    'atrule-line': {
      // Includes support for = and + shortcuts
      pattern: /^(?:[ \t]*)[@+=].+/m,
      greedy: true,
      inside: {
        'atrule': /(?:@[\w-]+|[+=])/
      }
    }
  });
  delete Prism.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
    pattern: /(\s)-(?=\s)/,
    lookbehind: true
  }];
  Prism.languages.insertBefore('sass', 'property', {
    // We want to consume the whole line
    'variable-line': {
      pattern: /^[ \t]*\$.+/m,
      greedy: true,
      inside: {
        'punctuation': /:/,
        'variable': variable,
        'operator': operator
      }
    },
    // We want to consume the whole line
    'property-line': {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: true,
      inside: {
        'property': [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        'punctuation': /:/,
        'variable': variable,
        'operator': operator,
        'important': Prism.languages.sass.important
      }
    }
  });
  delete Prism.languages.sass.property;
  delete Prism.languages.sass.important; // Now that whole lines for other patterns are consumed,
  // what's left should be selectors

  Prism.languages.insertBefore('sass', 'punctuation', {
    'selector': {
      pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
      lookbehind: true,
      greedy: true
    }
  });
})(prism);
/* "prismjs/components/prism-scss" */


prism.languages.scss = prism.languages.extend('css', {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  'atrule': {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      'rule': /@[\w-]+/ // See rest below

    }
  },
  // url, compassified
  'url': /(?:[-a-z]+-)?url(?=\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  'selector': {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      'parent': {
        pattern: /&/,
        alias: 'important'
      },
      'placeholder': /%[-\w]+/,
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  'property': {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
prism.languages.insertBefore('scss', 'atrule', {
  'keyword': [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
    pattern: /( )(?:from|through)(?= )/,
    lookbehind: true
  }]
});
prism.languages.insertBefore('scss', 'important', {
  // var and interpolated vars
  'variable': /\$[-\w]+|#\{\$[-\w]+\}/
});
prism.languages.insertBefore('scss', 'function', {
  'module-modifier': {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: 'keyword'
  },
  'placeholder': {
    pattern: /%[-\w]+/,
    alias: 'selector'
  },
  'statement': {
    pattern: /\B!(?:default|optional)\b/i,
    alias: 'keyword'
  },
  'boolean': /\b(?:false|true)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  },
  'operator': {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
    lookbehind: true
  }
});
prism.languages.scss['atrule'].inside.rest = prism.languages.scss;
/* "prismjs/components/prism-stylus" */

(function (Prism) {
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+)/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  var inside = {
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    'url': {
      pattern: /\burl\((["']?).*?\1\)/i,
      greedy: true
    },
    'string': {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    'interpolation': null,
    // See below
    'func': null,
    // See below
    'important': /\B!(?:important|optional)\b/i,
    'keyword': {
      pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
      lookbehind: true
    },
    'hexcode': /#[\da-f]{3,6}/i,
    'color': [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\w-]+(?=\()/,
        'punctuation': /[(),]/
      }
    }],
    'entity': /\\[\da-f]{1,8}/i,
    'unit': unit,
    'boolean': /\b(?:false|true)\b/,
    'operator': [// We want non-word chars around "-" because it is
    // accepted in property names.
    /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
    'number': number,
    'punctuation': /[{}()\[\];:,]/
  };
  inside['interpolation'] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: 'variable',
    inside: {
      'delimiter': {
        pattern: /^\{|\}$/,
        alias: 'punctuation'
      },
      rest: inside
    }
  };
  inside['func'] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      'function': /^[^(]+/,
      rest: inside
    }
  };
  Prism.languages.stylus = {
    'atrule-declaration': {
      pattern: /(^[ \t]*)@.+/m,
      lookbehind: true,
      inside: {
        'atrule': /^@[\w-]+/,
        rest: inside
      }
    },
    'variable-declaration': {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
      lookbehind: true,
      inside: {
        'variable': /^\S+/,
        rest: inside
      }
    },
    'statement': {
      pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
      lookbehind: true,
      inside: {
        'keyword': /^\S+/,
        rest: inside
      }
    },
    // A property/value pair cannot end with a comma or a brace
    // It cannot have indented content unless it ended with a semicolon
    'property-declaration': {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
      lookbehind: true,
      inside: {
        'property': {
          pattern: /^[^\s:]+/,
          inside: {
            'interpolation': inside.interpolation
          }
        },
        rest: inside
      }
    },
    // A selector can contain parentheses only as part of a pseudo-element
    // It can span multiple lines.
    // It must end with a comma or an accolade or have indented content.
    'selector': {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
      lookbehind: true,
      inside: {
        'interpolation': inside.interpolation,
        'comment': inside.comment,
        'punctuation': /[{},]/
      }
    },
    'func': inside.func,
    'string': inside.string,
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true,
      greedy: true
    },
    'interpolation': inside.interpolation,
    'punctuation': /[{}()\[\];:.]/
  };
})(prism);
/* "prismjs/components/prism-tsx" */


(function (Prism) {
  var typescript = Prism.util.clone(Prism.languages.typescript);
  Prism.languages.tsx = Prism.languages.extend('jsx', typescript); // doesn't work with TS because TS is too complex

  delete Prism.languages.tsx['parameter'];
  delete Prism.languages.tsx['literal-property']; // This will prevent collisions between TSX tags and TS generic types.
  // Idea by https://github.com/karlhorky
  // Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928

  var tag = Prism.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + tag.pattern.source + ')', tag.pattern.flags);
  tag.lookbehind = true;
})(prism);
/* "prismjs/components/prism-wasm" */


prism.languages.wasm = {
  'comment': [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  'string': {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: true
  },
  'keyword': [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      'operator': /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      'punctuation': /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  'variable': /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
  'number': /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  'punctuation': /[()]/
};

/* harmony default export */ __webpack_exports__["Z"] = (prism);


/***/ }),

/***/ 9911:
/***/ (function(module) {

var components = {"core":{"meta":{"path":"components/prism-core.js","option":"mandatory"},"core":"Core"},"themes":{"meta":{"path":"themes/{id}.css","link":"index.html?theme={id}","exclusive":true},"prism":{"title":"Default","option":"default"},"prism-dark":"Dark","prism-funky":"Funky","prism-okaidia":{"title":"Okaidia","owner":"ocodia"},"prism-twilight":{"title":"Twilight","owner":"remybach"},"prism-coy":{"title":"Coy","owner":"tshedor"},"prism-solarizedlight":{"title":"Solarized Light","owner":"hectormatos2011 "},"prism-tomorrow":{"title":"Tomorrow Night","owner":"Rosey"}},"languages":{"meta":{"path":"components/prism-{id}","noCSS":true,"examplesPath":"examples/prism-{id}","addCheckAll":true},"markup":{"title":"Markup","alias":["html","xml","svg","mathml","ssml","atom","rss"],"aliasTitles":{"html":"HTML","xml":"XML","svg":"SVG","mathml":"MathML","ssml":"SSML","atom":"Atom","rss":"RSS"},"option":"default"},"css":{"title":"CSS","option":"default","modify":"markup"},"clike":{"title":"C-like","option":"default"},"javascript":{"title":"JavaScript","require":"clike","modify":"markup","optional":"regex","alias":"js","option":"default"},"abap":{"title":"ABAP","owner":"dellagustin"},"abnf":{"title":"ABNF","owner":"RunDevelopment"},"actionscript":{"title":"ActionScript","require":"javascript","modify":"markup","owner":"Golmote"},"ada":{"title":"Ada","owner":"Lucretia"},"agda":{"title":"Agda","owner":"xy-ren"},"al":{"title":"AL","owner":"RunDevelopment"},"antlr4":{"title":"ANTLR4","alias":"g4","owner":"RunDevelopment"},"apacheconf":{"title":"Apache Configuration","owner":"GuiTeK"},"apex":{"title":"Apex","require":["clike","sql"],"owner":"RunDevelopment"},"apl":{"title":"APL","owner":"ngn"},"applescript":{"title":"AppleScript","owner":"Golmote"},"aql":{"title":"AQL","owner":"RunDevelopment"},"arduino":{"title":"Arduino","require":"cpp","alias":"ino","owner":"dkern"},"arff":{"title":"ARFF","owner":"Golmote"},"armasm":{"title":"ARM Assembly","alias":"arm-asm","owner":"RunDevelopment"},"arturo":{"title":"Arturo","alias":"art","optional":["bash","css","javascript","markup","markdown","sql"],"owner":"drkameleon"},"asciidoc":{"alias":"adoc","title":"AsciiDoc","owner":"Golmote"},"aspnet":{"title":"ASP.NET (C#)","require":["markup","csharp"],"owner":"nauzilus"},"asm6502":{"title":"6502 Assembly","owner":"kzurawel"},"asmatmel":{"title":"Atmel AVR Assembly","owner":"cerkit"},"autohotkey":{"title":"AutoHotkey","owner":"aviaryan"},"autoit":{"title":"AutoIt","owner":"Golmote"},"avisynth":{"title":"AviSynth","alias":"avs","owner":"Zinfidel"},"avro-idl":{"title":"Avro IDL","alias":"avdl","owner":"RunDevelopment"},"awk":{"title":"AWK","alias":"gawk","aliasTitles":{"gawk":"GAWK"},"owner":"RunDevelopment"},"bash":{"title":"Bash","alias":"shell","aliasTitles":{"shell":"Shell"},"owner":"zeitgeist87"},"basic":{"title":"BASIC","owner":"Golmote"},"batch":{"title":"Batch","owner":"Golmote"},"bbcode":{"title":"BBcode","alias":"shortcode","aliasTitles":{"shortcode":"Shortcode"},"owner":"RunDevelopment"},"bicep":{"title":"Bicep","owner":"johnnyreilly"},"birb":{"title":"Birb","require":"clike","owner":"Calamity210"},"bison":{"title":"Bison","require":"c","owner":"Golmote"},"bnf":{"title":"BNF","alias":"rbnf","aliasTitles":{"rbnf":"RBNF"},"owner":"RunDevelopment"},"brainfuck":{"title":"Brainfuck","owner":"Golmote"},"brightscript":{"title":"BrightScript","owner":"RunDevelopment"},"bro":{"title":"Bro","owner":"wayward710"},"bsl":{"title":"BSL (1C:Enterprise)","alias":"oscript","aliasTitles":{"oscript":"OneScript"},"owner":"Diversus23"},"c":{"title":"C","require":"clike","owner":"zeitgeist87"},"csharp":{"title":"C#","require":"clike","alias":["cs","dotnet"],"owner":"mvalipour"},"cpp":{"title":"C++","require":"c","owner":"zeitgeist87"},"cfscript":{"title":"CFScript","require":"clike","alias":"cfc","owner":"mjclemente"},"chaiscript":{"title":"ChaiScript","require":["clike","cpp"],"owner":"RunDevelopment"},"cil":{"title":"CIL","owner":"sbrl"},"clojure":{"title":"Clojure","owner":"troglotit"},"cmake":{"title":"CMake","owner":"mjrogozinski"},"cobol":{"title":"COBOL","owner":"RunDevelopment"},"coffeescript":{"title":"CoffeeScript","require":"javascript","alias":"coffee","owner":"R-osey"},"concurnas":{"title":"Concurnas","alias":"conc","owner":"jasontatton"},"csp":{"title":"Content-Security-Policy","owner":"ScottHelme"},"cooklang":{"title":"Cooklang","owner":"ahue"},"coq":{"title":"Coq","owner":"RunDevelopment"},"crystal":{"title":"Crystal","require":"ruby","owner":"MakeNowJust"},"css-extras":{"title":"CSS Extras","require":"css","modify":"css","owner":"milesj"},"csv":{"title":"CSV","owner":"RunDevelopment"},"cue":{"title":"CUE","owner":"RunDevelopment"},"cypher":{"title":"Cypher","owner":"RunDevelopment"},"d":{"title":"D","require":"clike","owner":"Golmote"},"dart":{"title":"Dart","require":"clike","owner":"Golmote"},"dataweave":{"title":"DataWeave","owner":"machaval"},"dax":{"title":"DAX","owner":"peterbud"},"dhall":{"title":"Dhall","owner":"RunDevelopment"},"diff":{"title":"Diff","owner":"uranusjr"},"django":{"title":"Django/Jinja2","require":"markup-templating","alias":"jinja2","owner":"romanvm"},"dns-zone-file":{"title":"DNS zone file","owner":"RunDevelopment","alias":"dns-zone"},"docker":{"title":"Docker","alias":"dockerfile","owner":"JustinBeckwith"},"dot":{"title":"DOT (Graphviz)","alias":"gv","optional":"markup","owner":"RunDevelopment"},"ebnf":{"title":"EBNF","owner":"RunDevelopment"},"editorconfig":{"title":"EditorConfig","owner":"osipxd"},"eiffel":{"title":"Eiffel","owner":"Conaclos"},"ejs":{"title":"EJS","require":["javascript","markup-templating"],"owner":"RunDevelopment","alias":"eta","aliasTitles":{"eta":"Eta"}},"elixir":{"title":"Elixir","owner":"Golmote"},"elm":{"title":"Elm","owner":"zwilias"},"etlua":{"title":"Embedded Lua templating","require":["lua","markup-templating"],"owner":"RunDevelopment"},"erb":{"title":"ERB","require":["ruby","markup-templating"],"owner":"Golmote"},"erlang":{"title":"Erlang","owner":"Golmote"},"excel-formula":{"title":"Excel Formula","alias":["xlsx","xls"],"owner":"RunDevelopment"},"fsharp":{"title":"F#","require":"clike","owner":"simonreynolds7"},"factor":{"title":"Factor","owner":"catb0t"},"false":{"title":"False","owner":"edukisto"},"firestore-security-rules":{"title":"Firestore security rules","require":"clike","owner":"RunDevelopment"},"flow":{"title":"Flow","require":"javascript","owner":"Golmote"},"fortran":{"title":"Fortran","owner":"Golmote"},"ftl":{"title":"FreeMarker Template Language","require":"markup-templating","owner":"RunDevelopment"},"gml":{"title":"GameMaker Language","alias":"gamemakerlanguage","require":"clike","owner":"LiarOnce"},"gap":{"title":"GAP (CAS)","owner":"RunDevelopment"},"gcode":{"title":"G-code","owner":"RunDevelopment"},"gdscript":{"title":"GDScript","owner":"RunDevelopment"},"gedcom":{"title":"GEDCOM","owner":"Golmote"},"gettext":{"title":"gettext","alias":"po","owner":"RunDevelopment"},"gherkin":{"title":"Gherkin","owner":"hason"},"git":{"title":"Git","owner":"lgiraudel"},"glsl":{"title":"GLSL","require":"c","owner":"Golmote"},"gn":{"title":"GN","alias":"gni","owner":"RunDevelopment"},"linker-script":{"title":"GNU Linker Script","alias":"ld","owner":"RunDevelopment"},"go":{"title":"Go","require":"clike","owner":"arnehormann"},"go-module":{"title":"Go module","alias":"go-mod","owner":"RunDevelopment"},"graphql":{"title":"GraphQL","optional":"markdown","owner":"Golmote"},"groovy":{"title":"Groovy","require":"clike","owner":"robfletcher"},"haml":{"title":"Haml","require":"ruby","optional":["css","css-extras","coffeescript","erb","javascript","less","markdown","scss","textile"],"owner":"Golmote"},"handlebars":{"title":"Handlebars","require":"markup-templating","alias":["hbs","mustache"],"aliasTitles":{"mustache":"Mustache"},"owner":"Golmote"},"haskell":{"title":"Haskell","alias":"hs","owner":"bholst"},"haxe":{"title":"Haxe","require":"clike","optional":"regex","owner":"Golmote"},"hcl":{"title":"HCL","owner":"outsideris"},"hlsl":{"title":"HLSL","require":"c","owner":"RunDevelopment"},"hoon":{"title":"Hoon","owner":"matildepark"},"http":{"title":"HTTP","optional":["csp","css","hpkp","hsts","javascript","json","markup","uri"],"owner":"danielgtaylor"},"hpkp":{"title":"HTTP Public-Key-Pins","owner":"ScottHelme"},"hsts":{"title":"HTTP Strict-Transport-Security","owner":"ScottHelme"},"ichigojam":{"title":"IchigoJam","owner":"BlueCocoa"},"icon":{"title":"Icon","owner":"Golmote"},"icu-message-format":{"title":"ICU Message Format","owner":"RunDevelopment"},"idris":{"title":"Idris","alias":"idr","owner":"KeenS","require":"haskell"},"ignore":{"title":".ignore","owner":"osipxd","alias":["gitignore","hgignore","npmignore"],"aliasTitles":{"gitignore":".gitignore","hgignore":".hgignore","npmignore":".npmignore"}},"inform7":{"title":"Inform 7","owner":"Golmote"},"ini":{"title":"Ini","owner":"aviaryan"},"io":{"title":"Io","owner":"AlesTsurko"},"j":{"title":"J","owner":"Golmote"},"java":{"title":"Java","require":"clike","owner":"sherblot"},"javadoc":{"title":"JavaDoc","require":["markup","java","javadoclike"],"modify":"java","optional":"scala","owner":"RunDevelopment"},"javadoclike":{"title":"JavaDoc-like","modify":["java","javascript","php"],"owner":"RunDevelopment"},"javastacktrace":{"title":"Java stack trace","owner":"RunDevelopment"},"jexl":{"title":"Jexl","owner":"czosel"},"jolie":{"title":"Jolie","require":"clike","owner":"thesave"},"jq":{"title":"JQ","owner":"RunDevelopment"},"jsdoc":{"title":"JSDoc","require":["javascript","javadoclike","typescript"],"modify":"javascript","optional":["actionscript","coffeescript"],"owner":"RunDevelopment"},"js-extras":{"title":"JS Extras","require":"javascript","modify":"javascript","optional":["actionscript","coffeescript","flow","n4js","typescript"],"owner":"RunDevelopment"},"json":{"title":"JSON","alias":"webmanifest","aliasTitles":{"webmanifest":"Web App Manifest"},"owner":"CupOfTea696"},"json5":{"title":"JSON5","require":"json","owner":"RunDevelopment"},"jsonp":{"title":"JSONP","require":"json","owner":"RunDevelopment"},"jsstacktrace":{"title":"JS stack trace","owner":"sbrl"},"js-templates":{"title":"JS Templates","require":"javascript","modify":"javascript","optional":["css","css-extras","graphql","markdown","markup","sql"],"owner":"RunDevelopment"},"julia":{"title":"Julia","owner":"cdagnino"},"keepalived":{"title":"Keepalived Configure","owner":"dev-itsheng"},"keyman":{"title":"Keyman","owner":"mcdurdin"},"kotlin":{"title":"Kotlin","alias":["kt","kts"],"aliasTitles":{"kts":"Kotlin Script"},"require":"clike","owner":"Golmote"},"kumir":{"title":"KuMir (КуМир)","alias":"kum","owner":"edukisto"},"kusto":{"title":"Kusto","owner":"RunDevelopment"},"latex":{"title":"LaTeX","alias":["tex","context"],"aliasTitles":{"tex":"TeX","context":"ConTeXt"},"owner":"japborst"},"latte":{"title":"Latte","require":["clike","markup-templating","php"],"owner":"nette"},"less":{"title":"Less","require":"css","optional":"css-extras","owner":"Golmote"},"lilypond":{"title":"LilyPond","require":"scheme","alias":"ly","owner":"RunDevelopment"},"liquid":{"title":"Liquid","require":"markup-templating","owner":"cinhtau"},"lisp":{"title":"Lisp","alias":["emacs","elisp","emacs-lisp"],"owner":"JuanCaicedo"},"livescript":{"title":"LiveScript","owner":"Golmote"},"llvm":{"title":"LLVM IR","owner":"porglezomp"},"log":{"title":"Log file","optional":"javastacktrace","owner":"RunDevelopment"},"lolcode":{"title":"LOLCODE","owner":"Golmote"},"lua":{"title":"Lua","owner":"Golmote"},"magma":{"title":"Magma (CAS)","owner":"RunDevelopment"},"makefile":{"title":"Makefile","owner":"Golmote"},"markdown":{"title":"Markdown","require":"markup","optional":"yaml","alias":"md","owner":"Golmote"},"markup-templating":{"title":"Markup templating","require":"markup","owner":"Golmote"},"mata":{"title":"Mata","owner":"RunDevelopment"},"matlab":{"title":"MATLAB","owner":"Golmote"},"maxscript":{"title":"MAXScript","owner":"RunDevelopment"},"mel":{"title":"MEL","owner":"Golmote"},"mermaid":{"title":"Mermaid","owner":"RunDevelopment"},"mizar":{"title":"Mizar","owner":"Golmote"},"mongodb":{"title":"MongoDB","owner":"airs0urce","require":"javascript"},"monkey":{"title":"Monkey","owner":"Golmote"},"moonscript":{"title":"MoonScript","alias":"moon","owner":"RunDevelopment"},"n1ql":{"title":"N1QL","owner":"TMWilds"},"n4js":{"title":"N4JS","require":"javascript","optional":"jsdoc","alias":"n4jsd","owner":"bsmith-n4"},"nand2tetris-hdl":{"title":"Nand To Tetris HDL","owner":"stephanmax"},"naniscript":{"title":"Naninovel Script","owner":"Elringus","alias":"nani"},"nasm":{"title":"NASM","owner":"rbmj"},"neon":{"title":"NEON","owner":"nette"},"nevod":{"title":"Nevod","owner":"nezaboodka"},"nginx":{"title":"nginx","owner":"volado"},"nim":{"title":"Nim","owner":"Golmote"},"nix":{"title":"Nix","owner":"Golmote"},"nsis":{"title":"NSIS","owner":"idleberg"},"objectivec":{"title":"Objective-C","require":"c","alias":"objc","owner":"uranusjr"},"ocaml":{"title":"OCaml","owner":"Golmote"},"odin":{"title":"Odin","owner":"edukisto"},"opencl":{"title":"OpenCL","require":"c","modify":["c","cpp"],"owner":"Milania1"},"openqasm":{"title":"OpenQasm","alias":"qasm","owner":"RunDevelopment"},"oz":{"title":"Oz","owner":"Golmote"},"parigp":{"title":"PARI/GP","owner":"Golmote"},"parser":{"title":"Parser","require":"markup","owner":"Golmote"},"pascal":{"title":"Pascal","alias":"objectpascal","aliasTitles":{"objectpascal":"Object Pascal"},"owner":"Golmote"},"pascaligo":{"title":"Pascaligo","owner":"DefinitelyNotAGoat"},"psl":{"title":"PATROL Scripting Language","owner":"bertysentry"},"pcaxis":{"title":"PC-Axis","alias":"px","owner":"RunDevelopment"},"peoplecode":{"title":"PeopleCode","alias":"pcode","owner":"RunDevelopment"},"perl":{"title":"Perl","owner":"Golmote"},"php":{"title":"PHP","require":"markup-templating","owner":"milesj"},"phpdoc":{"title":"PHPDoc","require":["php","javadoclike"],"modify":"php","owner":"RunDevelopment"},"php-extras":{"title":"PHP Extras","require":"php","modify":"php","owner":"milesj"},"plant-uml":{"title":"PlantUML","alias":"plantuml","owner":"RunDevelopment"},"plsql":{"title":"PL/SQL","require":"sql","owner":"Golmote"},"powerquery":{"title":"PowerQuery","alias":["pq","mscript"],"owner":"peterbud"},"powershell":{"title":"PowerShell","owner":"nauzilus"},"processing":{"title":"Processing","require":"clike","owner":"Golmote"},"prolog":{"title":"Prolog","owner":"Golmote"},"promql":{"title":"PromQL","owner":"arendjr"},"properties":{"title":".properties","owner":"Golmote"},"protobuf":{"title":"Protocol Buffers","require":"clike","owner":"just-boris"},"pug":{"title":"Pug","require":["markup","javascript"],"optional":["coffeescript","ejs","handlebars","less","livescript","markdown","scss","stylus","twig"],"owner":"Golmote"},"puppet":{"title":"Puppet","owner":"Golmote"},"pure":{"title":"Pure","optional":["c","cpp","fortran"],"owner":"Golmote"},"purebasic":{"title":"PureBasic","require":"clike","alias":"pbfasm","owner":"HeX0R101"},"purescript":{"title":"PureScript","require":"haskell","alias":"purs","owner":"sriharshachilakapati"},"python":{"title":"Python","alias":"py","owner":"multipetros"},"qsharp":{"title":"Q#","require":"clike","alias":"qs","owner":"fedonman"},"q":{"title":"Q (kdb+ database)","owner":"Golmote"},"qml":{"title":"QML","require":"javascript","owner":"RunDevelopment"},"qore":{"title":"Qore","require":"clike","owner":"temnroegg"},"r":{"title":"R","owner":"Golmote"},"racket":{"title":"Racket","require":"scheme","alias":"rkt","owner":"RunDevelopment"},"cshtml":{"title":"Razor C#","alias":"razor","require":["markup","csharp"],"optional":["css","css-extras","javascript","js-extras"],"owner":"RunDevelopment"},"jsx":{"title":"React JSX","require":["markup","javascript"],"optional":["jsdoc","js-extras","js-templates"],"owner":"vkbansal"},"tsx":{"title":"React TSX","require":["jsx","typescript"]},"reason":{"title":"Reason","require":"clike","owner":"Golmote"},"regex":{"title":"Regex","owner":"RunDevelopment"},"rego":{"title":"Rego","owner":"JordanSh"},"renpy":{"title":"Ren'py","alias":"rpy","owner":"HyuchiaDiego"},"rescript":{"title":"ReScript","alias":"res","owner":"vmarcosp"},"rest":{"title":"reST (reStructuredText)","owner":"Golmote"},"rip":{"title":"Rip","owner":"ravinggenius"},"roboconf":{"title":"Roboconf","owner":"Golmote"},"robotframework":{"title":"Robot Framework","alias":"robot","owner":"RunDevelopment"},"ruby":{"title":"Ruby","require":"clike","alias":"rb","owner":"samflores"},"rust":{"title":"Rust","owner":"Golmote"},"sas":{"title":"SAS","optional":["groovy","lua","sql"],"owner":"Golmote"},"sass":{"title":"Sass (Sass)","require":"css","optional":"css-extras","owner":"Golmote"},"scss":{"title":"Sass (Scss)","require":"css","optional":"css-extras","owner":"MoOx"},"scala":{"title":"Scala","require":"java","owner":"jozic"},"scheme":{"title":"Scheme","owner":"bacchus123"},"shell-session":{"title":"Shell session","require":"bash","alias":["sh-session","shellsession"],"owner":"RunDevelopment"},"smali":{"title":"Smali","owner":"RunDevelopment"},"smalltalk":{"title":"Smalltalk","owner":"Golmote"},"smarty":{"title":"Smarty","require":"markup-templating","optional":"php","owner":"Golmote"},"sml":{"title":"SML","alias":"smlnj","aliasTitles":{"smlnj":"SML/NJ"},"owner":"RunDevelopment"},"solidity":{"title":"Solidity (Ethereum)","alias":"sol","require":"clike","owner":"glachaud"},"solution-file":{"title":"Solution file","alias":"sln","owner":"RunDevelopment"},"soy":{"title":"Soy (Closure Template)","require":"markup-templating","owner":"Golmote"},"sparql":{"title":"SPARQL","require":"turtle","owner":"Triply-Dev","alias":"rq"},"splunk-spl":{"title":"Splunk SPL","owner":"RunDevelopment"},"sqf":{"title":"SQF: Status Quo Function (Arma 3)","require":"clike","owner":"RunDevelopment"},"sql":{"title":"SQL","owner":"multipetros"},"squirrel":{"title":"Squirrel","require":"clike","owner":"RunDevelopment"},"stan":{"title":"Stan","owner":"RunDevelopment"},"stata":{"title":"Stata Ado","require":["mata","java","python"],"owner":"RunDevelopment"},"iecst":{"title":"Structured Text (IEC 61131-3)","owner":"serhioromano"},"stylus":{"title":"Stylus","owner":"vkbansal"},"supercollider":{"title":"SuperCollider","alias":"sclang","owner":"RunDevelopment"},"swift":{"title":"Swift","owner":"chrischares"},"systemd":{"title":"Systemd configuration file","owner":"RunDevelopment"},"t4-templating":{"title":"T4 templating","owner":"RunDevelopment"},"t4-cs":{"title":"T4 Text Templates (C#)","require":["t4-templating","csharp"],"alias":"t4","owner":"RunDevelopment"},"t4-vb":{"title":"T4 Text Templates (VB)","require":["t4-templating","vbnet"],"owner":"RunDevelopment"},"tap":{"title":"TAP","owner":"isaacs","require":"yaml"},"tcl":{"title":"Tcl","owner":"PeterChaplin"},"tt2":{"title":"Template Toolkit 2","require":["clike","markup-templating"],"owner":"gflohr"},"textile":{"title":"Textile","require":"markup","optional":"css","owner":"Golmote"},"toml":{"title":"TOML","owner":"RunDevelopment"},"tremor":{"title":"Tremor","alias":["trickle","troy"],"owner":"darach","aliasTitles":{"trickle":"trickle","troy":"troy"}},"turtle":{"title":"Turtle","alias":"trig","aliasTitles":{"trig":"TriG"},"owner":"jakubklimek"},"twig":{"title":"Twig","require":"markup-templating","owner":"brandonkelly"},"typescript":{"title":"TypeScript","require":"javascript","optional":"js-templates","alias":"ts","owner":"vkbansal"},"typoscript":{"title":"TypoScript","alias":"tsconfig","aliasTitles":{"tsconfig":"TSConfig"},"owner":"dkern"},"unrealscript":{"title":"UnrealScript","alias":["uscript","uc"],"owner":"RunDevelopment"},"uorazor":{"title":"UO Razor Script","owner":"jaseowns"},"uri":{"title":"URI","alias":"url","aliasTitles":{"url":"URL"},"owner":"RunDevelopment"},"v":{"title":"V","require":"clike","owner":"taggon"},"vala":{"title":"Vala","require":"clike","optional":"regex","owner":"TemplarVolk"},"vbnet":{"title":"VB.Net","require":"basic","owner":"Bigsby"},"velocity":{"title":"Velocity","require":"markup","owner":"Golmote"},"verilog":{"title":"Verilog","owner":"a-rey"},"vhdl":{"title":"VHDL","owner":"a-rey"},"vim":{"title":"vim","owner":"westonganger"},"visual-basic":{"title":"Visual Basic","alias":["vb","vba"],"aliasTitles":{"vba":"VBA"},"owner":"Golmote"},"warpscript":{"title":"WarpScript","owner":"RunDevelopment"},"wasm":{"title":"WebAssembly","owner":"Golmote"},"web-idl":{"title":"Web IDL","alias":"webidl","owner":"RunDevelopment"},"wiki":{"title":"Wiki markup","require":"markup","owner":"Golmote"},"wolfram":{"title":"Wolfram language","alias":["mathematica","nb","wl"],"aliasTitles":{"mathematica":"Mathematica","nb":"Mathematica Notebook"},"owner":"msollami"},"wren":{"title":"Wren","owner":"clsource"},"xeora":{"title":"Xeora","require":"markup","alias":"xeoracube","aliasTitles":{"xeoracube":"XeoraCube"},"owner":"freakmaxi"},"xml-doc":{"title":"XML doc (.net)","require":"markup","modify":["csharp","fsharp","vbnet"],"owner":"RunDevelopment"},"xojo":{"title":"Xojo (REALbasic)","owner":"Golmote"},"xquery":{"title":"XQuery","require":"markup","owner":"Golmote"},"yaml":{"title":"YAML","alias":"yml","owner":"hason"},"yang":{"title":"YANG","owner":"RunDevelopment"},"zig":{"title":"Zig","owner":"RunDevelopment"}},"plugins":{"meta":{"path":"plugins/{id}/prism-{id}","link":"plugins/{id}/"},"line-highlight":{"title":"Line Highlight","description":"Highlights specific lines and/or line ranges."},"line-numbers":{"title":"Line Numbers","description":"Line number at the beginning of code lines.","owner":"kuba-kubula"},"show-invisibles":{"title":"Show Invisibles","description":"Show hidden characters such as tabs and line breaks.","optional":["autolinker","data-uri-highlight"]},"autolinker":{"title":"Autolinker","description":"Converts URLs and emails in code to clickable links. Parses Markdown links in comments."},"wpd":{"title":"WebPlatform Docs","description":"Makes tokens link to <a href=\"https://webplatform.github.io/docs/\">WebPlatform.org documentation</a>. The links open in a new tab."},"custom-class":{"title":"Custom Class","description":"This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.","owner":"dvkndn","noCSS":true},"file-highlight":{"title":"File Highlight","description":"Fetch external files and highlight them with Prism. Used on the Prism website itself.","noCSS":true},"show-language":{"title":"Show Language","description":"Display the highlighted language in code blocks (inline code does not show the label).","owner":"nauzilus","noCSS":true,"require":"toolbar"},"jsonp-highlight":{"title":"JSONP Highlight","description":"Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).","noCSS":true,"owner":"nauzilus"},"highlight-keywords":{"title":"Highlight Keywords","description":"Adds special CSS classes for each keyword for fine-grained highlighting.","owner":"vkbansal","noCSS":true},"remove-initial-line-feed":{"title":"Remove initial line feed","description":"Removes the initial line feed in code blocks.","owner":"Golmote","noCSS":true},"inline-color":{"title":"Inline color","description":"Adds a small inline preview for colors in style sheets.","require":"css-extras","owner":"RunDevelopment"},"previewers":{"title":"Previewers","description":"Previewers for angles, colors, gradients, easing and time.","require":"css-extras","owner":"Golmote"},"autoloader":{"title":"Autoloader","description":"Automatically loads the needed languages to highlight the code blocks.","owner":"Golmote","noCSS":true},"keep-markup":{"title":"Keep Markup","description":"Prevents custom markup from being dropped out during highlighting.","owner":"Golmote","optional":"normalize-whitespace","noCSS":true},"command-line":{"title":"Command Line","description":"Display a command line with a prompt and, optionally, the output/response from the commands.","owner":"chriswells0"},"unescaped-markup":{"title":"Unescaped Markup","description":"Write markup without having to escape anything."},"normalize-whitespace":{"title":"Normalize Whitespace","description":"Supports multiple operations to normalize whitespace in code blocks.","owner":"zeitgeist87","optional":"unescaped-markup","noCSS":true},"data-uri-highlight":{"title":"Data-URI Highlight","description":"Highlights data-URI contents.","owner":"Golmote","noCSS":true},"toolbar":{"title":"Toolbar","description":"Attach a toolbar for plugins to easily register buttons on the top of a code block.","owner":"mAAdhaTTah"},"copy-to-clipboard":{"title":"Copy to Clipboard Button","description":"Add a button that copies the code block to the clipboard when clicked.","owner":"mAAdhaTTah","require":"toolbar","noCSS":true},"download-button":{"title":"Download Button","description":"A button in the toolbar of a code block adding a convenient way to download a code file.","owner":"Golmote","require":"toolbar","noCSS":true},"match-braces":{"title":"Match braces","description":"Highlights matching braces.","owner":"RunDevelopment"},"diff-highlight":{"title":"Diff Highlight","description":"Highlights the code inside diff blocks.","owner":"RunDevelopment","require":"diff"},"filter-highlight-all":{"title":"Filter highlightAll","description":"Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.","owner":"RunDevelopment","noCSS":true},"treeview":{"title":"Treeview","description":"A language with special styles to highlight file system tree structures.","owner":"Golmote"}}};
if ( true && module.exports) { module.exports = components; }

/***/ }),

/***/ 3916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const components = __webpack_require__(9911);
const getLoader = __webpack_require__(4587);


/**
 * The set of all languages which have been loaded using the below function.
 *
 * @type {Set<string>}
 */
const loadedLanguages = new Set();

/**
 * Loads the given languages and adds them to the current Prism instance.
 *
 * If no languages are provided, __all__ Prism languages will be loaded.
 *
 * @param {string|string[]} [languages]
 * @returns {void}
 */
function loadLanguages(languages) {
	if (languages === undefined) {
		languages = Object.keys(components.languages).filter(l => l != 'meta');
	} else if (!Array.isArray(languages)) {
		languages = [languages];
	}

	// the user might have loaded languages via some other way or used `prism.js` which already includes some
	// we don't need to validate the ids because `getLoader` will ignore invalid ones
	const loaded = [...loadedLanguages, ...Object.keys(Prism.languages)];

	getLoader(components, languages, loaded).load(lang => {
		if (!(lang in components.languages)) {
			if (!loadLanguages.silent) {
				console.warn('Language does not exist: ' + lang);
			}
			return;
		}

		const pathToLanguage = './prism-' + lang;

		// remove from require cache and from Prism
		delete __webpack_require__.c[/*require.resolve*/(__webpack_require__(3392).resolve(pathToLanguage))];
		delete Prism.languages[lang];

		__webpack_require__(3392)(pathToLanguage);

		loadedLanguages.add(lang);
	});
}

/**
 * Set this to `true` to prevent all warning messages `loadLanguages` logs.
 */
loadLanguages.silent = false;

module.exports = loadLanguages;


/***/ }),

/***/ 3392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./": 3916
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 3392;

/***/ }),

/***/ 4587:
/***/ (function(module) {

"use strict";


/**
 * @typedef {Object<string, ComponentCategory>} Components
 * @typedef {Object<string, ComponentEntry | string>} ComponentCategory
 *
 * @typedef ComponentEntry
 * @property {string} [title] The title of the component.
 * @property {string} [owner] The GitHub user name of the owner.
 * @property {boolean} [noCSS=false] Whether the component doesn't have style sheets which should also be loaded.
 * @property {string | string[]} [alias] An optional list of aliases for the id of the component.
 * @property {Object<string, string>} [aliasTitles] An optional map from an alias to its title.
 *
 * Aliases which are not in this map will the get title of the component.
 * @property {string | string[]} [optional]
 * @property {string | string[]} [require]
 * @property {string | string[]} [modify]
 */

var getLoader = (function () {

	/**
	 * A function which does absolutely nothing.
	 *
	 * @type {any}
	 */
	var noop = function () { };

	/**
	 * Invokes the given callback for all elements of the given value.
	 *
	 * If the given value is an array, the callback will be invokes for all elements. If the given value is `null` or
	 * `undefined`, the callback will not be invoked. In all other cases, the callback will be invoked with the given
	 * value as parameter.
	 *
	 * @param {null | undefined | T | T[]} value
	 * @param {(value: T, index: number) => void} callbackFn
	 * @returns {void}
	 * @template T
	 */
	function forEach(value, callbackFn) {
		if (Array.isArray(value)) {
			value.forEach(callbackFn);
		} else if (value != null) {
			callbackFn(value, 0);
		}
	}

	/**
	 * Returns a new set for the given string array.
	 *
	 * @param {string[]} array
	 * @returns {StringSet}
	 *
	 * @typedef {Object<string, true>} StringSet
	 */
	function toSet(array) {
		/** @type {StringSet} */
		var set = {};
		for (var i = 0, l = array.length; i < l; i++) {
			set[array[i]] = true;
		}
		return set;
	}

	/**
	 * Creates a map of every components id to its entry.
	 *
	 * @param {Components} components
	 * @returns {EntryMap}
	 *
	 * @typedef {{ readonly [id: string]: Readonly<ComponentEntry> | undefined }} EntryMap
	 */
	function createEntryMap(components) {
		/** @type {Object<string, Readonly<ComponentEntry>>} */
		var map = {};

		for (var categoryName in components) {
			var category = components[categoryName];
			for (var id in category) {
				if (id != 'meta') {
					/** @type {ComponentEntry | string} */
					var entry = category[id];
					map[id] = typeof entry == 'string' ? { title: entry } : entry;
				}
			}
		}

		return map;
	}

	/**
	 * Creates a full dependencies map which includes all types of dependencies and their transitive dependencies.
	 *
	 * @param {EntryMap} entryMap
	 * @returns {DependencyResolver}
	 *
	 * @typedef {(id: string) => StringSet} DependencyResolver
	 */
	function createDependencyResolver(entryMap) {
		/** @type {Object<string, StringSet>} */
		var map = {};
		var _stackArray = [];

		/**
		 * Adds the dependencies of the given component to the dependency map.
		 *
		 * @param {string} id
		 * @param {string[]} stack
		 */
		function addToMap(id, stack) {
			if (id in map) {
				return;
			}

			stack.push(id);

			// check for circular dependencies
			var firstIndex = stack.indexOf(id);
			if (firstIndex < stack.length - 1) {
				throw new Error('Circular dependency: ' + stack.slice(firstIndex).join(' -> '));
			}

			/** @type {StringSet} */
			var dependencies = {};

			var entry = entryMap[id];
			if (entry) {
				/**
				 * This will add the direct dependency and all of its transitive dependencies to the set of
				 * dependencies of `entry`.
				 *
				 * @param {string} depId
				 * @returns {void}
				 */
				function handleDirectDependency(depId) {
					if (!(depId in entryMap)) {
						throw new Error(id + ' depends on an unknown component ' + depId);
					}
					if (depId in dependencies) {
						// if the given dependency is already in the set of deps, then so are its transitive deps
						return;
					}

					addToMap(depId, stack);
					dependencies[depId] = true;
					for (var transitiveDepId in map[depId]) {
						dependencies[transitiveDepId] = true;
					}
				}

				forEach(entry.require, handleDirectDependency);
				forEach(entry.optional, handleDirectDependency);
				forEach(entry.modify, handleDirectDependency);
			}

			map[id] = dependencies;

			stack.pop();
		}

		return function (id) {
			var deps = map[id];
			if (!deps) {
				addToMap(id, _stackArray);
				deps = map[id];
			}
			return deps;
		};
	}

	/**
	 * Returns a function which resolves the aliases of its given id of alias.
	 *
	 * @param {EntryMap} entryMap
	 * @returns {(idOrAlias: string) => string}
	 */
	function createAliasResolver(entryMap) {
		/** @type {Object<string, string> | undefined} */
		var map;

		return function (idOrAlias) {
			if (idOrAlias in entryMap) {
				return idOrAlias;
			} else {
				// only create the alias map if necessary
				if (!map) {
					map = {};

					for (var id in entryMap) {
						var entry = entryMap[id];
						forEach(entry && entry.alias, function (alias) {
							if (alias in map) {
								throw new Error(alias + ' cannot be alias for both ' + id + ' and ' + map[alias]);
							}
							if (alias in entryMap) {
								throw new Error(alias + ' cannot be alias of ' + id + ' because it is a component.');
							}
							map[alias] = id;
						});
					}
				}
				return map[idOrAlias] || idOrAlias;
			}
		};
	}

	/**
	 * @typedef LoadChainer
	 * @property {(before: T, after: () => T) => T} series
	 * @property {(values: T[]) => T} parallel
	 * @template T
	 */

	/**
	 * Creates an implicit DAG from the given components and dependencies and call the given `loadComponent` for each
	 * component in topological order.
	 *
	 * @param {DependencyResolver} dependencyResolver
	 * @param {StringSet} ids
	 * @param {(id: string) => T} loadComponent
	 * @param {LoadChainer<T>} [chainer]
	 * @returns {T}
	 * @template T
	 */
	function loadComponentsInOrder(dependencyResolver, ids, loadComponent, chainer) {
		var series = chainer ? chainer.series : undefined;
		var parallel = chainer ? chainer.parallel : noop;

		/** @type {Object<string, T>} */
		var cache = {};

		/**
		 * A set of ids of nodes which are not depended upon by any other node in the graph.
		 *
		 * @type {StringSet}
		 */
		var ends = {};

		/**
		 * Loads the given component and its dependencies or returns the cached value.
		 *
		 * @param {string} id
		 * @returns {T}
		 */
		function handleId(id) {
			if (id in cache) {
				return cache[id];
			}

			// assume that it's an end
			// if it isn't, it will be removed later
			ends[id] = true;

			// all dependencies of the component in the given ids
			var dependsOn = [];
			for (var depId in dependencyResolver(id)) {
				if (depId in ids) {
					dependsOn.push(depId);
				}
			}

			/**
			 * The value to be returned.
			 *
			 * @type {T}
			 */
			var value;

			if (dependsOn.length === 0) {
				value = loadComponent(id);
			} else {
				var depsValue = parallel(dependsOn.map(function (depId) {
					var value = handleId(depId);
					// none of the dependencies can be ends
					delete ends[depId];
					return value;
				}));
				if (series) {
					// the chainer will be responsibly for calling the function calling loadComponent
					value = series(depsValue, function () { return loadComponent(id); });
				} else {
					// we don't have a chainer, so we call loadComponent ourselves
					loadComponent(id);
				}
			}

			// cache and return
			return cache[id] = value;
		}

		for (var id in ids) {
			handleId(id);
		}

		/** @type {T[]} */
		var endValues = [];
		for (var endId in ends) {
			endValues.push(cache[endId]);
		}
		return parallel(endValues);
	}

	/**
	 * Returns whether the given object has any keys.
	 *
	 * @param {object} obj
	 */
	function hasKeys(obj) {
		for (var key in obj) {
			return true;
		}
		return false;
	}

	/**
	 * Returns an object which provides methods to get the ids of the components which have to be loaded (`getIds`) and
	 * a way to efficiently load them in synchronously and asynchronous contexts (`load`).
	 *
	 * The set of ids to be loaded is a superset of `load`. If some of these ids are in `loaded`, the corresponding
	 * components will have to reloaded.
	 *
	 * The ids in `load` and `loaded` may be in any order and can contain duplicates.
	 *
	 * @param {Components} components
	 * @param {string[]} load
	 * @param {string[]} [loaded=[]] A list of already loaded components.
	 *
	 * If a component is in this list, then all of its requirements will also be assumed to be in the list.
	 * @returns {Loader}
	 *
	 * @typedef Loader
	 * @property {() => string[]} getIds A function to get all ids of the components to load.
	 *
	 * The returned ids will be duplicate-free, alias-free and in load order.
	 * @property {LoadFunction} load A functional interface to load components.
	 *
	 * @typedef {<T> (loadComponent: (id: string) => T, chainer?: LoadChainer<T>) => T} LoadFunction
	 * A functional interface to load components.
	 *
	 * The `loadComponent` function will be called for every component in the order in which they have to be loaded.
	 *
	 * The `chainer` is useful for asynchronous loading and its `series` and `parallel` functions can be thought of as
	 * `Promise#then` and `Promise.all`.
	 *
	 * @example
	 * load(id => { loadComponent(id); }); // returns undefined
	 *
	 * await load(
	 *     id => loadComponentAsync(id), // returns a Promise for each id
	 *     {
	 *         series: async (before, after) => {
	 *             await before;
	 *             await after();
	 *         },
	 *         parallel: async (values) => {
	 *             await Promise.all(values);
	 *         }
	 *     }
	 * );
	 */
	function getLoader(components, load, loaded) {
		var entryMap = createEntryMap(components);
		var resolveAlias = createAliasResolver(entryMap);

		load = load.map(resolveAlias);
		loaded = (loaded || []).map(resolveAlias);

		var loadSet = toSet(load);
		var loadedSet = toSet(loaded);

		// add requirements

		load.forEach(addRequirements);
		function addRequirements(id) {
			var entry = entryMap[id];
			forEach(entry && entry.require, function (reqId) {
				if (!(reqId in loadedSet)) {
					loadSet[reqId] = true;
					addRequirements(reqId);
				}
			});
		}

		// add components to reload

		// A component x in `loaded` has to be reloaded if
		//  1) a component in `load` modifies x.
		//  2) x depends on a component in `load`.
		// The above two condition have to be applied until nothing changes anymore.

		var dependencyResolver = createDependencyResolver(entryMap);

		/** @type {StringSet} */
		var loadAdditions = loadSet;
		/** @type {StringSet} */
		var newIds;
		while (hasKeys(loadAdditions)) {
			newIds = {};

			// condition 1)
			for (var loadId in loadAdditions) {
				var entry = entryMap[loadId];
				forEach(entry && entry.modify, function (modId) {
					if (modId in loadedSet) {
						newIds[modId] = true;
					}
				});
			}

			// condition 2)
			for (var loadedId in loadedSet) {
				if (!(loadedId in loadSet)) {
					for (var depId in dependencyResolver(loadedId)) {
						if (depId in loadSet) {
							newIds[loadedId] = true;
							break;
						}
					}
				}
			}

			loadAdditions = newIds;
			for (var newId in loadAdditions) {
				loadSet[newId] = true;
			}
		}

		/** @type {Loader} */
		var loader = {
			getIds: function () {
				var ids = [];
				loader.load(function (id) {
					ids.push(id);
				});
				return ids;
			},
			load: function (loadComponent, chainer) {
				return loadComponentsInOrder(dependencyResolver, loadSet, loadComponent, chainer);
			}
		};

		return loader;
	}

	return getLoader;

}());

if (true) {
	module.exports = getLoader;
}


/***/ }),

/***/ 8772:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(331);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 3615:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(8772)();
}


/***/ }),

/***/ 331:
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 3577:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;
/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(7378),n=__webpack_require__(2525),r=__webpack_require__(1102);function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0}}b&&ra()}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b))}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a])}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea()}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La()}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return!0;if(Oa.call(Pa,a))return!1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return!1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new v(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new v(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new v(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new v(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new v(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new v(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new v(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new v(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new v(a,5,!1,a.toLowerCase(),null,!1)});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C[b]=new v(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!0)});var Wa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var Ya=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,Za=E?Symbol.for("react.element"):60103,$a=E?Symbol.for("react.portal"):60106,ab=E?Symbol.for("react.fragment"):60107,bb=E?Symbol.for("react.strict_mode"):60108,cb=E?Symbol.for("react.profiler"):60114,db=E?Symbol.for("react.provider"):60109,eb=E?Symbol.for("react.context"):60110,fb=E?Symbol.for("react.concurrent_mode"):60111,gb=E?Symbol.for("react.forward_ref"):60112,hb=E?Symbol.for("react.suspense"):60113,ib=E?Symbol.for("react.suspense_list"):
60120,jb=E?Symbol.for("react.memo"):60115,kb=E?Symbol.for("react.lazy"):60116,lb=E?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return"function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return"Fragment";case $a:return"Portal";case cb:return"Profiler";case bb:return"StrictMode";case hb:return"Suspense";case ib:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return"Context.Consumer";case db:return"Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d)}finally{(Ja=f)||La()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{Ma(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else{Ja=!0;try{Fa(Ce,a)}finally{Ja=!1,La()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Wa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null)}var m=0!==(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g))}S!==
jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};Ha=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd)},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.14.0",
rendererPackageName:"react-dom"});__webpack_unused_export__=lk;__webpack_unused_export__=kk;__webpack_unused_export__=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
__webpack_unused_export__=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};__webpack_unused_export__=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
__webpack_unused_export__=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;__webpack_unused_export__=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
__webpack_unused_export__=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};__webpack_unused_export__="16.14.0";


/***/ }),

/***/ 1542:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(3577);
} else {}


/***/ }),

/***/ 4335:
/***/ (function(module) {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ 2883:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B6": function() { return /* binding */ q; },
/* harmony export */   "ql": function() { return /* binding */ W; }
/* harmony export */ });
/* unused harmony export HelmetData */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3615);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4335);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3996);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4445);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_3__);
function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,c(t,e)}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function u(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)e.indexOf(r=o[n])>=0||(i[r]=t[r]);return i}var l={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},p={rel:["amphtml","canonical","alternate"]},f={type:["application/ld+json"]},d={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},h=Object.keys(l).map(function(t){return l[t]}),m={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},y=Object.keys(m).reduce(function(t,e){return t[m[e]]=e,t},{}),T=function(t,e){for(var r=t.length-1;r>=0;r-=1){var n=t[r];if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}return null},g=function(t){var e=T(t,l.TITLE),r=T(t,"titleTemplate");if(Array.isArray(e)&&(e=e.join("")),r&&e)return r.replace(/%s/g,function(){return e});var n=T(t,"defaultTitle");return e||n||void 0},b=function(t){return T(t,"onChangeClientState")||function(){}},v=function(t,e){return e.filter(function(e){return void 0!==e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return a({},t,e)},{})},A=function(t,e){return e.filter(function(t){return void 0!==t[l.BASE]}).map(function(t){return t[l.BASE]}).reverse().reduce(function(e,r){if(!e.length)for(var n=Object.keys(r),i=0;i<n.length;i+=1){var o=n[i].toLowerCase();if(-1!==t.indexOf(o)&&r[o])return e.concat(r)}return e},[])},C=function(t,e,r){var n={};return r.filter(function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+t+' should be of type "Array". Instead found type "'+typeof e[t]+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,r){var i={};r.filter(function(t){for(var r,o=Object.keys(t),a=0;a<o.length;a+=1){var s=o[a],c=s.toLowerCase();-1===e.indexOf(c)||"rel"===r&&"canonical"===t[r].toLowerCase()||"rel"===c&&"stylesheet"===t[c].toLowerCase()||(r=c),-1===e.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!t[r])return!1;var u=t[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var o=Object.keys(i),s=0;s<o.length;s+=1){var c=o[s],u=a({},n[c],i[c]);n[c]=u}return t},[]).reverse()},O=function(t,e){if(Array.isArray(t)&&t.length)for(var r=0;r<t.length;r+=1)if(t[r][e])return!0;return!1},S=function(t){return Array.isArray(t)?t.join(""):t},E=function(t,e){return Array.isArray(t)?t.reduce(function(t,r){return function(t,e){for(var r=Object.keys(t),n=0;n<r.length;n+=1)if(e[r[n]]&&e[r[n]].includes(t[r[n]]))return!0;return!1}(r,e)?t.priority.push(r):t.default.push(r),t},{priority:[],default:[]}):{default:t}},I=function(t,e){var r;return a({},t,((r={})[e]=void 0,r))},P=[l.NOSCRIPT,l.SCRIPT,l.STYLE],w=function(t,e){return void 0===e&&(e=!0),!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},x=function(t){return Object.keys(t).reduce(function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n},"")},L=function(t,e){return void 0===e&&(e={}),Object.keys(t).reduce(function(e,r){return e[m[r]||r]=t[r],e},e)},j=function(e,r){return r.map(function(r,n){var i,o=((i={key:n})["data-rh"]=!0,i);return Object.keys(r).forEach(function(t){var e=m[t]||t;"innerHTML"===e||"cssText"===e?o.dangerouslySetInnerHTML={__html:r.innerHTML||r.cssText}:o[e]=r[t]}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(e,o)})},M=function(e,r,n){switch(e){case l.TITLE:return{toComponent:function(){return n=r.titleAttributes,(i={key:e=r.title})["data-rh"]=!0,o=L(n,i),[react__WEBPACK_IMPORTED_MODULE_0__.createElement(l.TITLE,o,e)];var e,n,i,o},toString:function(){return function(t,e,r,n){var i=x(r),o=S(e);return i?"<"+t+' data-rh="true" '+i+">"+w(o,n)+"</"+t+">":"<"+t+' data-rh="true">'+w(o,n)+"</"+t+">"}(e,r.title,r.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return L(r)},toString:function(){return x(r)}};default:return{toComponent:function(){return j(e,r)},toString:function(){return function(t,e,r){return e.reduce(function(e,n){var i=Object.keys(n).filter(function(t){return!("innerHTML"===t||"cssText"===t)}).reduce(function(t,e){var i=void 0===n[e]?e:e+'="'+w(n[e],r)+'"';return t?t+" "+i:i},""),o=n.innerHTML||n.cssText||"",a=-1===P.indexOf(t);return e+"<"+t+' data-rh="true" '+i+(a?"/>":">"+o+"</"+t+">")},"")}(e,r,n)}}}},k=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,i=t.htmlAttributes,o=t.noscriptTags,a=t.styleTags,s=t.title,c=void 0===s?"":s,u=t.titleAttributes,h=t.linkTags,m=t.metaTags,y=t.scriptTags,T={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var g=function(t){var e=t.linkTags,r=t.scriptTags,n=t.encode,i=E(t.metaTags,d),o=E(e,p),a=E(r,f);return{priorityMethods:{toComponent:function(){return[].concat(j(l.META,i.priority),j(l.LINK,o.priority),j(l.SCRIPT,a.priority))},toString:function(){return M(l.META,i.priority,n)+" "+M(l.LINK,o.priority,n)+" "+M(l.SCRIPT,a.priority,n)}},metaTags:i.default,linkTags:o.default,scriptTags:a.default}}(t);T=g.priorityMethods,h=g.linkTags,m=g.metaTags,y=g.scriptTags}return{priority:T,base:M(l.BASE,e,n),bodyAttributes:M("bodyAttributes",r,n),htmlAttributes:M("htmlAttributes",i,n),link:M(l.LINK,h,n),meta:M(l.META,m,n),noscript:M(l.NOSCRIPT,o,n),script:M(l.SCRIPT,y,n),style:M(l.STYLE,a,n),title:M(l.TITLE,{title:c,titleAttributes:u},n)}},H=[],N=function(t,e){var r=this;void 0===e&&(e="undefined"!=typeof document),this.instances=[],this.value={setHelmet:function(t){r.context.helmet=t},helmetInstances:{get:function(){return r.canUseDOM?H:r.instances},add:function(t){(r.canUseDOM?H:r.instances).push(t)},remove:function(t){var e=(r.canUseDOM?H:r.instances).indexOf(t);(r.canUseDOM?H:r.instances).splice(e,1)}}},this.context=t,this.canUseDOM=e,e||(t.helmet=k({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},R=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),D=prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({setHelmet:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),helmetInstances:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({get:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),add:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),remove:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)})}),U="undefined"!=typeof document,q=/*#__PURE__*/function(e){function r(t){var n;return(n=e.call(this,t)||this).helmetData=new N(n.props.context,r.canUseDOM),n}return s(r,e),r.prototype.render=function(){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(R.Provider,{value:this.helmetData.value},this.props.children)},r}(react__WEBPACK_IMPORTED_MODULE_0__.Component);q.canUseDOM=U,q.propTypes={context:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({helmet:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape()}),children:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired)},q.defaultProps={context:{}},q.displayName="HelmetProvider";var Y=function(t,e){var r,n=document.head||document.querySelector(l.HEAD),i=n.querySelectorAll(t+"[data-rh]"),o=[].slice.call(i),a=[];return e&&e.length&&e.forEach(function(e){var n=document.createElement(t);for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&("innerHTML"===i?n.innerHTML=e.innerHTML:"cssText"===i?n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText)):n.setAttribute(i,void 0===e[i]?"":e[i]));n.setAttribute("data-rh","true"),o.some(function(t,e){return r=e,n.isEqualNode(t)})?o.splice(r,1):a.push(n)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),a.forEach(function(t){return n.appendChild(t)}),{oldTags:o,newTags:a}},B=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute("data-rh"),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(e),s=0;s<a.length;s+=1){var c=a[s],u=e[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var p=o.length-1;p>=0;p-=1)r.removeAttribute(o[p]);i.length===o.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==a.join(",")&&r.setAttribute("data-rh",a.join(","))}},K=function(t,e){var r=t.baseTag,n=t.htmlAttributes,i=t.linkTags,o=t.metaTags,a=t.noscriptTags,s=t.onChangeClientState,c=t.scriptTags,u=t.styleTags,p=t.title,f=t.titleAttributes;B(l.BODY,t.bodyAttributes),B(l.HTML,n),function(t,e){void 0!==t&&document.title!==t&&(document.title=S(t)),B(l.TITLE,e)}(p,f);var d={baseTag:Y(l.BASE,r),linkTags:Y(l.LINK,i),metaTags:Y(l.META,o),noscriptTags:Y(l.NOSCRIPT,a),scriptTags:Y(l.SCRIPT,c),styleTags:Y(l.STYLE,u)},h={},m={};Object.keys(d).forEach(function(t){var e=d[t],r=e.newTags,n=e.oldTags;r.length&&(h[t]=r),n.length&&(m[t]=d[t].oldTags)}),e&&e(),s(t,h,m)},_=null,z=/*#__PURE__*/function(t){function e(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).rendered=!1,e}s(e,t);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!shallowequal__WEBPACK_IMPORTED_MODULE_3___default()(t,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var t,e,r=this.props.context,n=r.setHelmet,i=null,o=(t=r.helmetInstances.get().map(function(t){var e=a({},t.props);return delete e.context,e}),{baseTag:A(["href"],t),bodyAttributes:v("bodyAttributes",t),defer:T(t,"defer"),encode:T(t,"encodeSpecialCharacters"),htmlAttributes:v("htmlAttributes",t),linkTags:C(l.LINK,["rel","href"],t),metaTags:C(l.META,["name","charset","http-equiv","property","itemprop"],t),noscriptTags:C(l.NOSCRIPT,["innerHTML"],t),onChangeClientState:b(t),scriptTags:C(l.SCRIPT,["src","innerHTML"],t),styleTags:C(l.STYLE,["cssText"],t),title:g(t),titleAttributes:v("titleAttributes",t),prioritizeSeoTags:O(t,"prioritizeSeoTags")});q.canUseDOM?(e=o,_&&cancelAnimationFrame(_),e.defer?_=requestAnimationFrame(function(){K(e,function(){_=null})}):(K(e),_=null)):k&&(i=k(o)),n(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},e}(react__WEBPACK_IMPORTED_MODULE_0__.Component);z.propTypes={context:D.isRequired},z.displayName="HelmetDispatcher";var F=["children"],G=["children"],W=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}s(r,e);var o=r.prototype;return o.shouldComponentUpdate=function(t){return!react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(I(this.props,"helmetData"),I(t,"helmetData"))},o.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.SCRIPT:case l.NOSCRIPT:return{innerHTML:e};case l.STYLE:return{cssText:e};default:throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},o.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren;return a({},n,((e={})[r.type]=[].concat(n[r.type]||[],[a({},t.newChildProps,this.mapNestedChildrenToProps(r,t.nestedChildren))]),e))},o.mapObjectTypeChildren=function(t){var e,r,n=t.child,i=t.newProps,o=t.newChildProps,s=t.nestedChildren;switch(n.type){case l.TITLE:return a({},i,((e={})[n.type]=s,e.titleAttributes=a({},o),e));case l.BODY:return a({},i,{bodyAttributes:a({},o)});case l.HTML:return a({},i,{htmlAttributes:a({},o)});default:return a({},i,((r={})[n.type]=a({},o),r))}},o.mapArrayTypeChildrenToProps=function(t,e){var r=a({},e);return Object.keys(t).forEach(function(e){var n;r=a({},r,((n={})[e]=t[e],n))}),r},o.warnOnInvalidChildren=function(t,e){return invariant__WEBPACK_IMPORTED_MODULE_2___default()(h.some(function(e){return t.type===e}),"function"==typeof t.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+h.join(", ")+" are allowed. Helmet does not support rendering <"+t.type+"> elements. Refer to our API for more information."),invariant__WEBPACK_IMPORTED_MODULE_2___default()(!e||"string"==typeof e||Array.isArray(e)&&!e.some(function(t){return"string"!=typeof t}),"Helmet expects a string as a child of <"+t.type+">. Did you forget to wrap your children in braces? ( <"+t.type+">{``}</"+t.type+"> ) Refer to our API for more information."),!0},o.mapChildrenToProps=function(e,r){var n=this,i={};return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(e,function(t){if(t&&t.props){var e=t.props,o=e.children,a=u(e,F),s=Object.keys(a).reduce(function(t,e){return t[y[e]||e]=a[e],t},{}),c=t.type;switch("symbol"==typeof c?c=c.toString():n.warnOnInvalidChildren(t,o),c){case l.FRAGMENT:r=n.mapChildrenToProps(o,r);break;case l.LINK:case l.META:case l.NOSCRIPT:case l.SCRIPT:case l.STYLE:i=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:i,newChildProps:s,nestedChildren:o});break;default:r=n.mapObjectTypeChildren({child:t,newProps:r,newChildProps:s,nestedChildren:o})}}}),this.mapArrayTypeChildrenToProps(i,r)},o.render=function(){var e=this.props,r=e.children,n=u(e,G),i=a({},n),o=n.helmetData;return r&&(i=this.mapChildrenToProps(r,i)),!o||o instanceof N||(o=new N(o.context,o.instances)),o?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(z,a({},i,{context:o.value,helmetData:void 0})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(R.Consumer,null,function(e){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(z,a({},i,{context:e}))})},r}(react__WEBPACK_IMPORTED_MODULE_0__.Component);W.propTypes={base:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),bodyAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)),(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)]),defaultTitle:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),defer:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),encodeSpecialCharacters:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),htmlAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),link:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),meta:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),noscript:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),onChangeClientState:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),script:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),style:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),title:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),titleAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),titleTemplate:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),prioritizeSeoTags:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),helmetData:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)},W.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},W.displayName="Helmet";
//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ 8702:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 9185:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(8702);
} else {}


/***/ }),

/***/ 1237:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = __webpack_require__(7378);

var PropTypes = __webpack_require__(3615);

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];

function isWebpackReady(getModuleIds) {
  if (false) {}

  return getModuleIds().every(function (moduleId) {
    return typeof moduleId !== "undefined" && typeof __webpack_require__.m[moduleId] !== "undefined";
  });
}

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return React.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _class, _temp;

  if (!options.loading) {
    throw new Error("react-loadable requires a `loading` component");
  }

  var opts = _extends({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);

  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }

    return res.promise;
  }

  ALL_INITIALIZERS.push(init);

  if (typeof opts.webpack === "function") {
    READY_INITIALIZERS.push(function () {
      if (isWebpackReady(opts.webpack)) {
        return init();
      }
    });
  }

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(LoadableComponent, _React$Component);

    function LoadableComponent(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "retry", function () {
        _this.setState({
          error: null,
          loading: true,
          timedOut: false
        });

        res = loadFn(opts.loader);

        _this._loadModule();
      });

      init();
      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    LoadableComponent.preload = function preload() {
      return init();
    };

    var _proto = LoadableComponent.prototype;

    _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
      this._loadModule();
    };

    _proto.componentDidMount = function componentDidMount() {
      this._mounted = true;
    };

    _proto._loadModule = function _loadModule() {
      var _this2 = this;

      if (this.context.loadable && Array.isArray(opts.modules)) {
        opts.modules.forEach(function (moduleName) {
          _this2.context.loadable.report(moduleName);
        });
      }

      if (!res.loading) {
        return;
      }

      var setStateWithMountCheck = function setStateWithMountCheck(newState) {
        if (!_this2._mounted) {
          return;
        }

        _this2.setState(newState);
      };

      if (typeof opts.delay === 'number') {
        if (opts.delay === 0) {
          this.setState({
            pastDelay: true
          });
        } else {
          this._delay = setTimeout(function () {
            setStateWithMountCheck({
              pastDelay: true
            });
          }, opts.delay);
        }
      }

      if (typeof opts.timeout === "number") {
        this._timeout = setTimeout(function () {
          setStateWithMountCheck({
            timedOut: true
          });
        }, opts.timeout);
      }

      var update = function update() {
        setStateWithMountCheck({
          error: res.error,
          loaded: res.loaded,
          loading: res.loading
        });

        _this2._clearTimeouts();
      };

      res.promise.then(function () {
        update();
        return null;
      }).catch(function (err) {
        update();
        return null;
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this._mounted = false;

      this._clearTimeouts();
    };

    _proto._clearTimeouts = function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    };

    _proto.render = function render() {
      if (this.state.loading || this.state.error) {
        return React.createElement(opts.loading, {
          isLoading: this.state.loading,
          pastDelay: this.state.pastDelay,
          timedOut: this.state.timedOut,
          error: this.state.error,
          retry: this.retry
        });
      } else if (this.state.loaded) {
        return opts.render(this.state.loaded, this.props);
      } else {
        return null;
      }
    };

    return LoadableComponent;
  }(React.Component), _defineProperty(_class, "contextTypes", {
    loadable: PropTypes.shape({
      report: PropTypes.func.isRequired
    })
  }), _temp;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== "function") {
    throw new Error("LoadableMap requires a `render(loaded, props)` function");
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

var Capture =
/*#__PURE__*/
function (_React$Component2) {
  _inheritsLoose(Capture, _React$Component2);

  function Capture() {
    return _React$Component2.apply(this, arguments) || this;
  }

  var _proto2 = Capture.prototype;

  _proto2.getChildContext = function getChildContext() {
    return {
      loadable: {
        report: this.props.report
      }
    };
  };

  _proto2.render = function render() {
    return React.Children.only(this.props.children);
  };

  return Capture;
}(React.Component);

_defineProperty(Capture, "propTypes", {
  report: PropTypes.func.isRequired
});

_defineProperty(Capture, "childContextTypes", {
  loadable: PropTypes.shape({
    report: PropTypes.func.isRequired
  }).isRequired
});

Loadable.Capture = Capture;

function flushInitializers(initializers) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init());
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  return new Promise(function (resolve, reject) {
    // We always will resolve, errors should be handled within loading UIs.
    flushInitializers(READY_INITIALIZERS).then(resolve, resolve);
  });
};

module.exports = Loadable;

/***/ }),

/***/ 5473:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": function() { return /* binding */ renderRoutes; },
/* harmony export */   "f": function() { return /* binding */ matchRoutes; }
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5331);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5773);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);




function matchRoutes(routes, pathname,
/*not public API*/
branch) {
  if (branch === void 0) {
    branch = [];
  }

  routes.some(function (route) {
    var match = route.path ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__/* .matchPath */ .LX)(pathname, route) : branch.length ? branch[branch.length - 1].match // use parent match
    : react_router__WEBPACK_IMPORTED_MODULE_1__/* .Router.computeRootMatch */ .F0.computeRootMatch(pathname); // use default "root" match

    if (match) {
      branch.push({
        route: route,
        match: match
      });

      if (route.routes) {
        matchRoutes(route.routes, pathname, branch);
      }
    }

    return match;
  });
  return branch;
}

function renderRoutes(routes, extraProps, switchProps) {
  if (extraProps === void 0) {
    extraProps = {};
  }

  if (switchProps === void 0) {
    switchProps = {};
  }

  return routes ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__/* .Switch */ .rs, switchProps, routes.map(function (route, i) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__/* .Route */ .AW, {
      key: route.key || i,
      path: route.path,
      exact: route.exact,
      strict: route.strict,
      render: function render(props) {
        return route.render ? route.render((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({}, props, {}, extraProps, {
          route: route
        })) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({}, props, extraProps, {
          route: route
        }));
      }
    });
  })) : null;
}


//# sourceMappingURL=react-router-config.js.map


/***/ }),

/***/ 4289:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OL": function() { return /* binding */ NavLink; },
/* harmony export */   "VK": function() { return /* binding */ BrowserRouter; },
/* harmony export */   "rU": function() { return /* binding */ Link; }
/* harmony export */ });
/* unused harmony export HashRouter */
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5331);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3219);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5036);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5773);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(808);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1115);











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_2__/* .createBrowserHistory */ .lX)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .F0, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_2__/* .createHashHistory */ .q_)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .F0, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_2__/* .createLocation */ .ob)(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref2, ["component", "replace", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__/* .__RouterContext.Consumer */ .s6.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var isDuplicateNavigation = (0,history__WEBPACK_IMPORTED_MODULE_2__/* .createPath */ .Ep)(context.location) === (0,history__WEBPACK_IMPORTED_MODULE_2__/* .createPath */ .Ep)(normalizeToLocation(location));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__/* .__RouterContext.Consumer */ .s6.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? (0,react_router__WEBPACK_IMPORTED_MODULE_3__/* .matchPath */ .LX)(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;

    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, style, activeStyle);
    }

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link, props);
  });
});

if (false) { var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map


/***/ }),

/***/ 5331:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AW": function() { return /* binding */ Route; },
  "F0": function() { return /* binding */ Router; },
  "rs": function() { return /* binding */ Switch; },
  "s6": function() { return /* binding */ context; },
  "LX": function() { return /* binding */ matchPath; },
  "k6": function() { return /* binding */ useHistory; },
  "TH": function() { return /* binding */ useLocation; }
});

// UNUSED EXPORTS: MemoryRouter, Prompt, Redirect, StaticRouter, __HistoryContext, generatePath, useParams, useRouteMatch, withRouter

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(3219);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/history/esm/history.js + 1 modules
var esm_history = __webpack_require__(5036);
// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(3615);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ../node_modules/mini-create-react-context/dist/esm/index.js





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    (0,inheritsLoose/* default */.Z)(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types_default()).object.isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    (0,inheritsLoose/* default */.Z)(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types_default()).object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react.createContext || createReactContext;

/* harmony default export */ var esm = (index);

// EXTERNAL MODULE: ../node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var tiny_invariant_esm = __webpack_require__(1115);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(5773);
// EXTERNAL MODULE: ../node_modules/react-router/node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(4039);
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);
// EXTERNAL MODULE: ../node_modules/react-is/index.js
var react_is = __webpack_require__(9185);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(808);
// EXTERNAL MODULE: ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(5839);
;// CONCATENATED MODULE: ../node_modules/react-router/esm/react-router.js













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = esm();
  context.displayName = name;
  return context;
};

var historyContext = /*#__PURE__*/createNamedContext("Router-History");

var context = /*#__PURE__*/createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var Router = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        _this._pendingLocation = location;
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._isMounted = true;

    if (this.unlisten) {
      // Any pre-mount location changes have been captured at
      // this point, so unregister the listener.
      this.unlisten();
    }

    if (!this.props.staticContext) {
      this.unlisten = this.props.history.listen(function (location) {
        if (_this2._isMounted) {
          _this2.setState({
            location: location
          });
        }
      });
    }

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/react.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /*#__PURE__*/react.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react.Component);

if (false) {}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,esm_history/* createMemoryHistory */.PP)(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react.Component);

if (false) {}

var Lifecycle = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : invariant(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return /*#__PURE__*/React.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (false) { var messageType; }

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = pathToRegexp.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : invariant(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return /*#__PURE__*/React.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, _extends({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (false) {}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp_default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   false ? 0 : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  false ? 0 : (0,tiny_invariant_esm/* default */.Z)(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = (0,esm_extends/* default */.Z)({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }

      return /*#__PURE__*/react.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  false ? 0 : children(props) : children : component ? /*#__PURE__*/react.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  false ? 0 : children(props) : null);
    });
  };

  return Route;
}(react.Component);

if (false) {}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0,esm_extends/* default */.Z)({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0,esm_extends/* default */.Z)({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : (0,esm_history/* createPath */.Ep)(location);
}

function staticHandler(methodName) {
  return function () {
      false ? 0 : (0,tiny_invariant_esm/* default */.Z)(false) ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, (0,esm_history/* createLocation */.ob)(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, (0,esm_history/* createLocation */.ob)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /*#__PURE__*/react.createElement(Router, (0,esm_extends/* default */.Z)({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react.Component);

if (false) {}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : (0,tiny_invariant_esm/* default */.Z)(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react.Children.forEach(_this.props.children, function (child) {
        if (match == null && /*#__PURE__*/react.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0,esm_extends/* default */.Z)({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? /*#__PURE__*/react.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react.Component);

if (false) {}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutPropertiesLoose(props, ["wrappedComponentRef"]);

    return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : invariant(false) : void 0;
      return /*#__PURE__*/React.createElement(Component, _extends({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (false) {}

  return hoistStatics(C, Component);
}

var useContext = react.useContext;
function useHistory() {
  if (false) {}

  return useContext(historyContext);
}
function useLocation() {
  if (false) {}

  return useContext(context).location;
}
function useParams() {
  if (false) {}

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (false) {}

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (false) { var secondaryBuildName, initialBuildName, buildNames, key, global; }


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ 4039:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isarray = __webpack_require__(5182)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ 1535:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(2525),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.14.0";


/***/ }),

/***/ 7378:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(1535);
} else {}


/***/ }),

/***/ 3323:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),

/***/ 1102:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(3323);
} else {}


/***/ }),

/***/ 4445:
/***/ (function(module) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ 1115:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ invariant; }
/* harmony export */ });
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? prefix + ": " + provided : prefix;
    throw new Error(value);
}




/***/ }),

/***/ 5773:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ 3219:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6983);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(subClass, superClass);
}

/***/ }),

/***/ 808:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ 6983:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ 9616:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _wrapRegExp; }
});

;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__(6983);
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,setPrototypeOf/* default */.Z)(subClass, superClass);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/wrapRegExp.js



function _wrapRegExp() {
  _wrapRegExp = function _wrapRegExp(re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };

  var _super = RegExp.prototype,
      _groups = new WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);

    return _groups.set(_this, groups || _groups.get(re)), (0,setPrototypeOf/* default */.Z)(_this, BabelRegExp.prototype);
  }

  function buildGroups(result, re) {
    var g = _groups.get(re);

    return Object.keys(g).reduce(function (groups, name) {
      return groups[name] = result[g[name]], groups;
    }, Object.create(null));
  }

  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    return result && (result.groups = buildGroups(result, this)), result;
  }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if ("string" == typeof substitution) {
      var groups = _groups.get(this);

      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    }

    if ("function" == typeof substitution) {
      var _this = this;

      return _super[Symbol.replace].call(this, str, function () {
        var args = arguments;
        return "object" != _typeof(args[args.length - 1]) && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }

    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}

/***/ }),

/***/ 6809:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  "title": "React Easy Diagram",
  "tagline": "Open source library to build highly customizable interactive React diagrams with easy.",
  "url": "https://tokarchyn.github.io/react-easy-diagram/",
  "baseUrl": "/react-easy-diagram/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "tokarchyn",
  "projectName": "react-easy-diagram",
  "themeConfig": {
    "docs": {
      "sidebar": {
        "hideable": true,
        "autoCollapseCategories": false
      },
      "versionPersistence": "localStorage"
    },
    "navbar": {
      "title": "React Easy Diagram",
      "logo": {
        "alt": "React Easy Diagram",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "right"
        },
        {
          "label": "Examples",
          "position": "right",
          "items": [
            {
              "label": "Basic",
              "to": "examples/basic"
            },
            {
              "label": "Calculator",
              "to": "examples/calculator"
            },
            {
              "label": "Configure default link",
              "to": "examples/configureDefaultLink"
            },
            {
              "label": "Customize port",
              "to": "examples/customizePortDiagram"
            },
            {
              "label": "Performance",
              "to": "examples/performance"
            },
            {
              "label": "Port position",
              "to": "examples/portPosition"
            },
            {
              "label": "Position snapping",
              "to": "examples/positionSnapping"
            },
            {
              "label": "Update ports position",
              "to": "examples/updatePortsPosition"
            },
            {
              "label": "Configure user interaction",
              "to": "examples/configureUserInteraction"
            },
            {
              "label": "Callbacks (+ save and restore)",
              "to": "examples/callbacks"
            },
            {
              "label": "Link Markers",
              "to": "examples/linkMarkers"
            },
            {
              "label": "Drag and drop",
              "to": "examples/dragAndDrop"
            }
          ]
        },
        {
          "href": "https://github.com/tokarchyn/react-easy-diagram",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "copyright": "Copyright © 2022 Tokarchyn Vitalii.",
      "links": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "metadata": [],
    "prism": {
      "additionalLanguages": [],
      "theme": {
        "plain": {
          "color": "#bfc7d5",
          "backgroundColor": "#292d3e"
        },
        "styles": [
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(105, 112, 152)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "string",
              "inserted"
            ],
            "style": {
              "color": "rgb(195, 232, 141)"
            }
          },
          {
            "types": [
              "number"
            ],
            "style": {
              "color": "rgb(247, 140, 108)"
            }
          },
          {
            "types": [
              "builtin",
              "char",
              "constant",
              "function"
            ],
            "style": {
              "color": "rgb(130, 170, 255)"
            }
          },
          {
            "types": [
              "punctuation",
              "selector"
            ],
            "style": {
              "color": "rgb(199, 146, 234)"
            }
          },
          {
            "types": [
              "variable"
            ],
            "style": {
              "color": "rgb(191, 199, 213)"
            }
          },
          {
            "types": [
              "class-name",
              "attr-name"
            ],
            "style": {
              "color": "rgb(255, 203, 107)"
            }
          },
          {
            "types": [
              "tag",
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 114)"
            }
          },
          {
            "types": [
              "operator"
            ],
            "style": {
              "color": "rgb(137, 221, 255)"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "rgb(255, 88, 116)"
            }
          },
          {
            "types": [
              "keyword"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "doctype"
            ],
            "style": {
              "color": "rgb(199, 146, 234)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "color": "rgb(178, 204, 214)"
            }
          },
          {
            "types": [
              "url"
            ],
            "style": {
              "color": "rgb(221, 221, 221)"
            }
          }
        ]
      },
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    },
    "liveCodeBlock": {
      "playgroundPosition": "bottom"
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/runner/work/react-easy-diagram/react-easy-diagram/website/sidebars.js",
          "editUrl": "https://github.com/tokarchyn/react-easy-diagram/edit/main/website"
        },
        "theme": {
          "customCss": "/home/runner/work/react-easy-diagram/react-easy-diagram/website/src/css/custom.css"
        }
      }
    ]
  ],
  "themes": [
    "@docusaurus/theme-live-codeblock"
  ],
  "plugins": [
    [
      "docusaurus-plugin-typedoc",
      {
        "entryPoints": [
          "../lib/src/index.ts"
        ],
        "tsconfig": "../lib/tsconfig.json",
        "readme": "none",
        "excludeProtected": true,
        "excludeInternal": true,
        "excludePrivate": true,
        "disableSources": true
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "scripts": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false
});


/***/ }),

/***/ 7529:
/***/ (function(module) {

"use strict";
module.exports = {};

/***/ }),

/***/ 6887:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"/react-easy-diagram/examples/basic-aed":{"__comp":"aa3c789d","__context":{"plugin":"37cdcd52"},"config":"5e9f5e1a"},"/react-easy-diagram/examples/calculator-7c4":{"__comp":"315cfba4","__context":{"plugin":"37cdcd52"},"config":"5e9f5e1a"},"/react-easy-diagram/examples/callbacks-5ac":{"__comp":"78bfeeec","__context":{"plugin":"37cdcd52"},"config":"5e9f5e1a"},"/react-easy-diagram/examples/configureDefaultLink-8c1":{"__comp":"fb72e560","__context":{"plugin":"37cdcd52"},"config":"5e9f5e1a"},"/react-easy-diagram/examples/configureUserInteraction-9ec":{"__comp":"812c8586","__context":{"plugin":"37cdcd52"},"config":"5e9f5e1a"},"/react-easy-diagram/examples/customizePortDiagram-35f":{"__comp":"433d41a3","__context":{"plugin":"37cdcd52"},"config":"5e9f5e1a"},"/react-easy-diagram/examples/dragAndDrop-29d":{"__comp":"3229ceca","__context":{"plugin":"37cdcd52"},"config":"5e9f5e1a"},"/react-easy-diagram/examples/dynamicPorts-111":{"__comp":"cf959e9c","__context":{"plugin":"37cdcd52"},"config":"5e9f5e1a"},"/react-easy-diagram/examples/linkMarkers-3f5":{"__comp":"66accb38","__context":{"plugin":"37cdcd52"},"config":"5e9f5e1a"},"/react-easy-diagram/examples/performance-b90":{"__comp":"af557546","__context":{"plugin":"37cdcd52"},"config":"5e9f5e1a"},"/react-easy-diagram/examples/portPosition-255":{"__comp":"c2a627a4","__context":{"plugin":"37cdcd52"},"config":"5e9f5e1a"},"/react-easy-diagram/examples/positionSnapping-ab6":{"__comp":"fcdae9f6","__context":{"plugin":"37cdcd52"},"config":"5e9f5e1a"},"/react-easy-diagram/examples/updatePortsPosition-baa":{"__comp":"ce59fbe4","__context":{"plugin":"37cdcd52"},"config":"5e9f5e1a"},"/react-easy-diagram/docs-f22":{"__comp":"1be78505","__context":{"plugin":"a081921c"},"versionMetadata":"935f2afb"},"/react-easy-diagram/docs/-fa5":{"__comp":"17896441","content":"972d9d57"},"/react-easy-diagram/docs/api/-282":{"__comp":"17896441","content":"5e8c322a"},"/react-easy-diagram/docs/api/classes/Callbacks-dee":{"__comp":"17896441","content":"e4b253d3"},"/react-easy-diagram/docs/api/classes/CommandExecutor-766":{"__comp":"17896441","content":"40f48482"},"/react-easy-diagram/docs/api/classes/DiagramSettings-1f5":{"__comp":"17896441","content":"d034e2e7"},"/react-easy-diagram/docs/api/classes/DiagramState-a8d":{"__comp":"17896441","content":"f9677936"},"/react-easy-diagram/docs/api/classes/DragState-0ac":{"__comp":"17896441","content":"630caeaa"},"/react-easy-diagram/docs/api/classes/HtmlElementRefState-677":{"__comp":"17896441","content":"3b5b1066"},"/react-easy-diagram/docs/api/classes/LinkCreationState-c0f":{"__comp":"17896441","content":"a74c7b06"},"/react-easy-diagram/docs/api/classes/LinkPointEndpointState-c16":{"__comp":"17896441","content":"f8fc711c"},"/react-easy-diagram/docs/api/classes/LinkPortEndpointState-98d":{"__comp":"17896441","content":"228a8de0"},"/react-easy-diagram/docs/api/classes/LinksSettings-1f6":{"__comp":"17896441","content":"955cdec7"},"/react-easy-diagram/docs/api/classes/LinksStore-15e":{"__comp":"17896441","content":"636ef741"},"/react-easy-diagram/docs/api/classes/LinkState-e9f":{"__comp":"17896441","content":"69d36dff"},"/react-easy-diagram/docs/api/classes/NodesSettings-5b4":{"__comp":"17896441","content":"b23d75c0"},"/react-easy-diagram/docs/api/classes/NodesStore-582":{"__comp":"17896441","content":"afdeda04"},"/react-easy-diagram/docs/api/classes/NodeState-a26":{"__comp":"17896441","content":"beab9ec7"},"/react-easy-diagram/docs/api/classes/PortsSettings-1d3":{"__comp":"17896441","content":"50af8da1"},"/react-easy-diagram/docs/api/classes/PortState-fd1":{"__comp":"17896441","content":"2db0ba82"},"/react-easy-diagram/docs/api/classes/RootStore-332":{"__comp":"17896441","content":"12b11b9f"},"/react-easy-diagram/docs/api/classes/SelectionState-5a4":{"__comp":"17896441","content":"9cd322d0"},"/react-easy-diagram/docs/api/classes/UserInteractionSettings-35a":{"__comp":"17896441","content":"58508f90"},"/react-easy-diagram/docs/api/classes/VisualComponents-cfe":{"__comp":"17896441","content":"29d0b7b6"},"/react-easy-diagram/docs/api/classes/VisualComponentState-8a2":{"__comp":"17896441","content":"ee1a77ac"},"/react-easy-diagram/docs/api/classes/VisualComponentWithDefault-c09":{"__comp":"17896441","content":"76cda8ea"},"/react-easy-diagram/docs/api/interfaces/Dictionary-625":{"__comp":"17896441","content":"c25aca17"},"/react-easy-diagram/docs/api/interfaces/DragAndDropContainerProps-cd0":{"__comp":"17896441","content":"fbee2183"},"/react-easy-diagram/docs/api/interfaces/DragAndDropEvent-8f6":{"__comp":"17896441","content":"1b9e7c79"},"/react-easy-diagram/docs/api/interfaces/DragAndDropItemProps-b34":{"__comp":"17896441","content":"8268b811"},"/react-easy-diagram/docs/api/interfaces/DragAndDropStartEvent-12e":{"__comp":"17896441","content":"336602c1"},"/react-easy-diagram/docs/api/interfaces/IBackgroundComponentProps-5de":{"__comp":"17896441","content":"f1eeb769"},"/react-easy-diagram/docs/api/interfaces/ICallbacks-55f":{"__comp":"17896441","content":"687a2a40"},"/react-easy-diagram/docs/api/interfaces/ICommand-2e5":{"__comp":"17896441","content":"bd8cd49d"},"/react-easy-diagram/docs/api/interfaces/IComponentDefinition-806":{"__comp":"17896441","content":"442cf82c"},"/react-easy-diagram/docs/api/interfaces/ICurvedLinkPathConstructorSettings-be3":{"__comp":"17896441","content":"401d8b43"},"/react-easy-diagram/docs/api/interfaces/IDiagramInitState-669":{"__comp":"17896441","content":"83e5247a"},"/react-easy-diagram/docs/api/interfaces/IDiagramInnerProps-a33":{"__comp":"17896441","content":"44f8dd4c"},"/react-easy-diagram/docs/api/interfaces/IDiagramSettings-461":{"__comp":"17896441","content":"f9022ab0"},"/react-easy-diagram/docs/api/interfaces/IDiagramState-e83":{"__comp":"17896441","content":"4dfb37ac"},"/react-easy-diagram/docs/api/interfaces/IDragHandlers-22c":{"__comp":"17896441","content":"99dd505c"},"/react-easy-diagram/docs/api/interfaces/IHtmlElementRect-e89":{"__comp":"17896441","content":"d02074d9"},"/react-easy-diagram/docs/api/interfaces/ILineStyling-5c3":{"__comp":"17896441","content":"1920c4e6"},"/react-easy-diagram/docs/api/interfaces/ILinkDefaultSettings-107":{"__comp":"17896441","content":"489ae690"},"/react-easy-diagram/docs/api/interfaces/ILinkInteractionState-430":{"__comp":"17896441","content":"a2da613c"},"/react-easy-diagram/docs/api/interfaces/ILinkPath-55b":{"__comp":"17896441","content":"52d1cebf"},"/react-easy-diagram/docs/api/interfaces/ILinkPathConstructorEndpointInfo-5a3":{"__comp":"17896441","content":"8d1f52b3"},"/react-easy-diagram/docs/api/interfaces/ILinkPortEndpoint-4a4":{"__comp":"17896441","content":"b8f7a87d"},"/react-easy-diagram/docs/api/interfaces/ILinkSegment-3f2":{"__comp":"17896441","content":"5735c2b9"},"/react-easy-diagram/docs/api/interfaces/ILinksSettings-57e":{"__comp":"17896441","content":"f6c71fb8"},"/react-easy-diagram/docs/api/interfaces/ILinkState-f3d":{"__comp":"17896441","content":"b2ec8c1d"},"/react-easy-diagram/docs/api/interfaces/ILinkStateWithId-aef":{"__comp":"17896441","content":"a10b0601"},"/react-easy-diagram/docs/api/interfaces/ILinkStateWithoutId-ce0":{"__comp":"17896441","content":"235d3851"},"/react-easy-diagram/docs/api/interfaces/ILinkVisualComponentProps-b7d":{"__comp":"17896441","content":"98ff0432"},"/react-easy-diagram/docs/api/interfaces/IMiniControlComponentProps-ef5":{"__comp":"17896441","content":"6ff6fd8a"},"/react-easy-diagram/docs/api/interfaces/IMiniControlDefaultSettings-ee4":{"__comp":"17896441","content":"3eb2aded"},"/react-easy-diagram/docs/api/interfaces/INodeComponentSettings-e24":{"__comp":"17896441","content":"312105d1"},"/react-easy-diagram/docs/api/interfaces/INodeDefaultSettings-9cf":{"__comp":"17896441","content":"5c0cd74b"},"/react-easy-diagram/docs/api/interfaces/INodeExport-649":{"__comp":"17896441","content":"66c968f6"},"/react-easy-diagram/docs/api/interfaces/INodePortState-4f4":{"__comp":"17896441","content":"116352d3"},"/react-easy-diagram/docs/api/interfaces/INodesSettings-d82":{"__comp":"17896441","content":"307b857d"},"/react-easy-diagram/docs/api/interfaces/INodeState-2a6":{"__comp":"17896441","content":"c21e4ab5"},"/react-easy-diagram/docs/api/interfaces/INodeStateWithId-e03":{"__comp":"17896441","content":"7a63f82f"},"/react-easy-diagram/docs/api/interfaces/INodeStateWithoutId-5ec":{"__comp":"17896441","content":"af39baa3"},"/react-easy-diagram/docs/api/interfaces/INodeVisualComponentProps-c82":{"__comp":"17896441","content":"875054f9"},"/react-easy-diagram/docs/api/interfaces/IPortExport-dc2":{"__comp":"17896441","content":"07aeaa11"},"/react-easy-diagram/docs/api/interfaces/IPortFinalState-980":{"__comp":"17896441","content":"01387d82"},"/react-easy-diagram/docs/api/interfaces/IPortInnerDefaultSettings-51d":{"__comp":"17896441","content":"97f7c156"},"/react-easy-diagram/docs/api/interfaces/IPortProps-af6":{"__comp":"17896441","content":"89f48b69"},"/react-easy-diagram/docs/api/interfaces/IPortsContainerProps-143":{"__comp":"17896441","content":"de301305"},"/react-easy-diagram/docs/api/interfaces/IPortsContainerSettings-21c":{"__comp":"17896441","content":"24c5f504"},"/react-easy-diagram/docs/api/interfaces/IPortsSettings-4da":{"__comp":"17896441","content":"a838186a"},"/react-easy-diagram/docs/api/interfaces/IPortState-442":{"__comp":"17896441","content":"2e3f7b1e"},"/react-easy-diagram/docs/api/interfaces/IPortStateWithIds-338":{"__comp":"17896441","content":"f5a580a6"},"/react-easy-diagram/docs/api/interfaces/IPortStateWithoutIds-c08":{"__comp":"17896441","content":"bd0bfe9a"},"/react-easy-diagram/docs/api/interfaces/IPortVisualComponentProps-db1":{"__comp":"17896441","content":"2b3f87df"},"/react-easy-diagram/docs/api/interfaces/ISettings-5a1":{"__comp":"17896441","content":"5b1ce5e3"},"/react-easy-diagram/docs/api/interfaces/ISvgArrowMarkerSettings-fa2":{"__comp":"17896441","content":"71bae565"},"/react-easy-diagram/docs/api/interfaces/ISvgBackgroundSettings-a83":{"__comp":"17896441","content":"61ae1ca8"},"/react-easy-diagram/docs/api/interfaces/ISvgCircleMarkerSettings-bce":{"__comp":"17896441","content":"cc4c535a"},"/react-easy-diagram/docs/api/interfaces/ISvgMarkerSettings-764":{"__comp":"17896441","content":"a5d28b63"},"/react-easy-diagram/docs/api/interfaces/ITransformation-e15":{"__comp":"17896441","content":"5bd1257b"},"/react-easy-diagram/docs/api/interfaces/IUseLinkUserInteractionResult-6fd":{"__comp":"17896441","content":"3d4d768c"},"/react-easy-diagram/docs/api/interfaces/IUsePortUserInteractionResult-9c1":{"__comp":"17896441","content":"8df92a11"},"/react-easy-diagram/docs/api/interfaces/IUserInteraction-e2e":{"__comp":"17896441","content":"32327e54"},"/react-easy-diagram/docs/api/interfaces/IUserInteractionTranslate-50a":{"__comp":"17896441","content":"9ef8d1bc"},"/react-easy-diagram/docs/api/interfaces/IUserInteractionTranslateAndZoom-172":{"__comp":"17896441","content":"f5978b58"},"/react-easy-diagram/docs/api/interfaces/IUseStylingOptions-dee":{"__comp":"17896441","content":"74eaa3a9"},"/react-easy-diagram/docs/api/interfaces/IVisualComponentProps-b65":{"__comp":"17896441","content":"c5c23f20"},"/react-easy-diagram/docs/api/interfaces/IVisualComponentsObject-5df":{"__comp":"17896441","content":"6f8de287"},"/react-easy-diagram/docs/api/interfaces/IZoomToFitSettings-5c0":{"__comp":"17896441","content":"3be1f5b9"},"/react-easy-diagram/docs/componentsCustomization/introduction-020":{"__comp":"17896441","content":"895edbb2"},"/react-easy-diagram/docs/componentsCustomization/link-34f":{"__comp":"17896441","content":"3521215b"},"/react-easy-diagram/docs/componentsCustomization/node-e6c":{"__comp":"17896441","content":"299eae8c"},"/react-easy-diagram/docs/componentsCustomization/port-8f9":{"__comp":"17896441","content":"2692539f"},"/react-easy-diagram/docs/dragAndDrop-6af":{"__comp":"17896441","content":"84b18c29"},"/react-easy-diagram/docs/stateManagement-091":{"__comp":"17896441","content":"ca8d3fd8"},"/react-easy-diagram/docs/userInteraction-95a":{"__comp":"17896441","content":"65f3459c"},"/react-easy-diagram/-beb":{"__comp":"c4f5d8e4","__context":{"plugin":"37cdcd52"},"config":"5e9f5e1a"}}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [532], function() { return __webpack_exec__(3375); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);