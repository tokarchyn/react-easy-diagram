(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3,17],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDXContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDXProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createElement; });
/* unused harmony export useMDXComponents */
/* unused harmony export withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}




/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NotFound(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{title:"Page Not Found"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main",{className:"container margin-vert--xl"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col col--6 col--offset-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"hero__title"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))));}/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(114);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(16);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/renderRoutes.js
var renderRoutes = __webpack_require__(28);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js
var Layout = __webpack_require__(99);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js + 1 modules
var esm_extends = __webpack_require__(3);

// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(90);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(89);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useUserPreferencesContext.js
var useUserPreferencesContext = __webpack_require__(122);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useLockBodyScroll.js
var useLockBodyScroll = __webpack_require__(126);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(127);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useScrollPosition.js
var useScrollPosition = __webpack_require__(125);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(97);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(113);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Logo/index.js
var Logo = __webpack_require__(128);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/IconArrow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const IconArrow=props=>{return/*#__PURE__*/react_default.a.createElement("svg",Object(esm_extends["a" /* default */])({width:"20",height:"20",role:"img"},props),/*#__PURE__*/react_default.a.createElement("g",{fill:"#7a7a7a"},/*#__PURE__*/react_default.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),/*#__PURE__*/react_default.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));};/* harmony default export */ var theme_IconArrow = (IconArrow);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/IconMenu/index.js
var IconMenu = __webpack_require__(130);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(91);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/styles.module.css
var styles_module = __webpack_require__(69);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const MOBILE_TOGGLE_SIZE=24;function usePrevious(value){const ref=Object(react["useRef"])(value);Object(react["useEffect"])(()=>{ref.current=value;},[value]);return ref.current;}const isActiveSidebarItem=(item,activePath)=>{if(item.type==='link'){return Object(lib["isSamePath"])(item.href,activePath);}if(item.type==='category'){return item.items.some(subItem=>isActiveSidebarItem(subItem,activePath));}return false;};function DocSidebarItemCategory({item,onItemClick,collapsible,activePath,...props}){const{items,label}=item;const isActive=isActiveSidebarItem(item,activePath);const wasActive=usePrevious(isActive);// active categories are always initialized as expanded
// the default (item.collapsed) is only used for non-active categories
const[collapsed,setCollapsed]=Object(react["useState"])(()=>{if(!collapsible){return false;}return isActive?false:item.collapsed;});const menuListRef=Object(react["useRef"])(null);const[menuListHeight,setMenuListHeight]=Object(react["useState"])(undefined);const handleMenuListHeight=(calc=true)=>{var _menuListRef$current;setMenuListHeight(calc?`${(_menuListRef$current=menuListRef.current)===null||_menuListRef$current===void 0?void 0:_menuListRef$current.scrollHeight}px`:undefined);};// If we navigate to a category, it should automatically expand itself
Object(react["useEffect"])(()=>{const justBecameActive=isActive&&!wasActive;if(justBecameActive&&collapsed){setCollapsed(false);}},[isActive,wasActive,collapsed]);const handleItemClick=Object(react["useCallback"])(e=>{e.preventDefault();if(!menuListHeight){handleMenuListHeight();}setTimeout(()=>setCollapsed(state=>!state),100);},[menuListHeight]);if(items.length===0){return null;}return/*#__PURE__*/react_default.a.createElement("li",{className:Object(clsx_m["a" /* default */])('menu__list-item',{'menu__list-item--collapsed':collapsed}),key:label},/*#__PURE__*/react_default.a.createElement("a",Object(esm_extends["a" /* default */])({className:Object(clsx_m["a" /* default */])('menu__link',{'menu__link--sublist':collapsible,'menu__link--active':collapsible&&isActive,[styles_module_default.a.menuLinkText]:!collapsible}),onClick:collapsible?handleItemClick:undefined,href:collapsible?'#!':undefined},props),label),/*#__PURE__*/react_default.a.createElement("ul",{className:"menu__list",ref:menuListRef,style:{height:menuListHeight},onTransitionEnd:()=>{if(!collapsed){handleMenuListHeight(false);}}},items.map(childItem=>/*#__PURE__*/react_default.a.createElement(DocSidebarItem,{tabIndex:collapsed?'-1':'0',key:childItem.label,item:childItem,onItemClick:onItemClick,collapsible:collapsible,activePath:activePath}))));}function DocSidebarItemLink({item,onItemClick,activePath,collapsible:_collapsible,...props}){const{href,label}=item;const isActive=isActiveSidebarItem(item,activePath);return/*#__PURE__*/react_default.a.createElement("li",{className:"menu__list-item",key:label},/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],Object(esm_extends["a" /* default */])({className:Object(clsx_m["a" /* default */])('menu__link',{'menu__link--active':isActive,[styles_module_default.a.menuLinkExternal]:!Object(isInternalUrl["a" /* default */])(href)}),to:href},Object(isInternalUrl["a" /* default */])(href)&&{isNavLink:true,exact:true,onClick:onItemClick},props),label));}function DocSidebarItem(props){switch(props.item.type){case'category':return/*#__PURE__*/react_default.a.createElement(DocSidebarItemCategory,props);case'link':default:return/*#__PURE__*/react_default.a.createElement(DocSidebarItemLink,props);}}function DocSidebar({path,sidebar,sidebarCollapsible=true,onCollapse,isHidden}){const[showResponsiveSidebar,setShowResponsiveSidebar]=Object(react["useState"])(false);const{navbar:{hideOnScroll},hideableSidebar}=Object(lib["useThemeConfig"])();const{isAnnouncementBarClosed}=Object(useUserPreferencesContext["a" /* default */])();const{scrollY}=Object(useScrollPosition["a" /* default */])();Object(useLockBodyScroll["a" /* default */])(showResponsiveSidebar);const windowSize=Object(useWindowSize["a" /* default */])();Object(react["useEffect"])(()=>{if(windowSize===useWindowSize["b" /* windowSizes */].desktop){setShowResponsiveSidebar(false);}},[windowSize]);return/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])(styles_module_default.a.sidebar,{[styles_module_default.a.sidebarWithHideableNavbar]:hideOnScroll,[styles_module_default.a.sidebarHidden]:isHidden})},hideOnScroll&&/*#__PURE__*/react_default.a.createElement(Logo["a" /* default */],{tabIndex:-1,className:styles_module_default.a.sidebarLogo}),/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])('menu','menu--responsive','thin-scrollbar',styles_module_default.a.menu,{'menu--show':showResponsiveSidebar,[styles_module_default.a.menuWithAnnouncementBar]:!isAnnouncementBarClosed&&scrollY===0})},/*#__PURE__*/react_default.a.createElement("button",{"aria-label":showResponsiveSidebar?Object(Translate["b" /* translate */])({id:'theme.docs.sidebar.responsiveCloseButtonLabel',message:'Close menu',description:'The ARIA label for close button of mobile doc sidebar'}):Object(Translate["b" /* translate */])({id:'theme.docs.sidebar.responsiveOpenButtonLabel',message:'Open menu',description:'The ARIA label for open button of mobile doc sidebar'}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{setShowResponsiveSidebar(!showResponsiveSidebar);}},showResponsiveSidebar?/*#__PURE__*/react_default.a.createElement("span",{className:Object(clsx_m["a" /* default */])(styles_module_default.a.sidebarMenuIcon,styles_module_default.a.sidebarMenuCloseIcon)},"\xD7"):/*#__PURE__*/react_default.a.createElement(IconMenu["a" /* default */],{className:styles_module_default.a.sidebarMenuIcon,height:MOBILE_TOGGLE_SIZE,width:MOBILE_TOGGLE_SIZE})),/*#__PURE__*/react_default.a.createElement("ul",{className:"menu__list"},sidebar.map(item=>/*#__PURE__*/react_default.a.createElement(DocSidebarItem,{key:item.label,item:item,onItemClick:e=>{e.target.blur();setShowResponsiveSidebar(false);},collapsible:sidebarCollapsible,activePath:path})))),hideableSidebar&&/*#__PURE__*/react_default.a.createElement("button",{type:"button",title:Object(Translate["b" /* translate */])({id:'theme.docs.sidebar.collapseButtonTitle',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),"aria-label":Object(Translate["b" /* translate */])({id:'theme.docs.sidebar.collapseButtonAriaLabel',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),className:Object(clsx_m["a" /* default */])('button button--secondary button--outline',styles_module_default.a.collapseSidebarButton),onClick:onCollapse},/*#__PURE__*/react_default.a.createElement(theme_IconArrow,{className:styles_module_default.a.collapseSidebarButtonIcon})));}/* harmony default export */ var theme_DocSidebar = (DocSidebar);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-live-codeblock/src/theme/CodeBlock/index.js + 9 modules
var CodeBlock = __webpack_require__(92);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/styles.css
var styles = __webpack_require__(72);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/styles.module.css
var Heading_styles_module = __webpack_require__(73);
var Heading_styles_module_default = /*#__PURE__*/__webpack_require__.n(Heading_styles_module);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */const Heading=Tag=>function TargetComponent({id,...props}){const{navbar:{hideOnScroll}}=Object(lib["useThemeConfig"])();if(!id){return/*#__PURE__*/react_default.a.createElement(Tag,props);}return/*#__PURE__*/react_default.a.createElement(Tag,props,/*#__PURE__*/react_default.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(clsx_m["a" /* default */])('anchor',{[Heading_styles_module_default.a.enhancedAnchor]:!hideOnScroll}),id:id}),props.children,/*#__PURE__*/react_default.a.createElement("a",{className:"hash-link",href:`#${id}`,title:Object(Translate["b" /* translate */])({id:'theme.common.headingLinkTitle',message:'Direct link to heading',description:'Title for link to heading'})},"#"));};/* harmony default export */ var theme_Heading = (Heading);
// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const MDXComponents={code:props=>{const{children}=props;if(typeof children==='string'){if(!children.includes('\n')){return/*#__PURE__*/react_default.a.createElement("code",props);}return/*#__PURE__*/react_default.a.createElement(CodeBlock["a" /* default */],props);}return children;},a:props=>/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],props),pre:props=>{const{children}=props;return/*#__PURE__*/react_default.a.createElement(CodeBlock["a" /* default */],/*#__PURE__*/Object(react["isValidElement"])(children)?children===null||children===void 0?void 0:children.props:{children});},h1:theme_Heading('h1'),h2:theme_Heading('h2'),h3:theme_Heading('h3'),h4:theme_Heading('h4'),h5:theme_Heading('h5'),h6:theme_Heading('h6')};/* harmony default export */ var theme_MDXComponents = (MDXComponents);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/NotFound.js
var NotFound = __webpack_require__(118);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/router.js
var router = __webpack_require__(23);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/styles.module.css
var DocPage_styles_module = __webpack_require__(74);
var DocPage_styles_module_default = /*#__PURE__*/__webpack_require__.n(DocPage_styles_module);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageContent({currentDocRoute,versionMetadata,children}){var _siteConfig$themeConf,_siteConfig$themeConf2;const{siteConfig,isClient}=Object(useDocusaurusContext["default"])();const{pluginId,permalinkToSidebar,docsSidebars,version}=versionMetadata;const sidebarName=permalinkToSidebar[currentDocRoute.path];const sidebar=docsSidebars[sidebarName];const[hiddenSidebarContainer,setHiddenSidebarContainer]=Object(react["useState"])(false);const[hiddenSidebar,setHiddenSidebar]=Object(react["useState"])(false);const toggleSidebar=Object(react["useCallback"])(()=>{if(hiddenSidebar){setHiddenSidebar(false);}setHiddenSidebarContainer(!hiddenSidebarContainer);},[hiddenSidebar]);return/*#__PURE__*/react_default.a.createElement(Layout["a" /* default */],{key:isClient,wrapperClassName:"main-docs-wrapper",searchMetadatas:{version,tag:Object(lib["docVersionSearchTag"])(pluginId,version)}},/*#__PURE__*/react_default.a.createElement("div",{className:DocPage_styles_module_default.a.docPage},sidebar&&/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])(DocPage_styles_module_default.a.docSidebarContainer,{[DocPage_styles_module_default.a.docSidebarContainerHidden]:hiddenSidebarContainer}),onTransitionEnd:e=>{if(!e.currentTarget.classList.contains(DocPage_styles_module_default.a.docSidebarContainer)){return;}if(hiddenSidebarContainer){setHiddenSidebar(true);}},role:"complementary"},/*#__PURE__*/react_default.a.createElement(theme_DocSidebar,{key:// Reset sidebar state on sidebar changes
// See https://github.com/facebook/docusaurus/issues/3414
sidebarName,sidebar:sidebar,path:currentDocRoute.path,sidebarCollapsible:(_siteConfig$themeConf=(_siteConfig$themeConf2=siteConfig.themeConfig)===null||_siteConfig$themeConf2===void 0?void 0:_siteConfig$themeConf2.sidebarCollapsible)!==null&&_siteConfig$themeConf!==void 0?_siteConfig$themeConf:true,onCollapse:toggleSidebar,isHidden:hiddenSidebar}),hiddenSidebar&&/*#__PURE__*/react_default.a.createElement("div",{className:DocPage_styles_module_default.a.collapsedDocSidebar,title:Object(Translate["b" /* translate */])({id:'theme.docs.sidebar.expandButtonTitle',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),"aria-label":Object(Translate["b" /* translate */])({id:'theme.docs.sidebar.expandButtonAriaLabel',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),tabIndex:0,role:"button",onKeyDown:toggleSidebar,onClick:toggleSidebar},/*#__PURE__*/react_default.a.createElement(theme_IconArrow,{className:DocPage_styles_module_default.a.expandSidebarButtonIcon}))),/*#__PURE__*/react_default.a.createElement("main",{className:Object(clsx_m["a" /* default */])(DocPage_styles_module_default.a.docMainContainer,{[DocPage_styles_module_default.a.docMainContainerEnhanced]:hiddenSidebarContainer})},/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])('container padding-vert--lg',DocPage_styles_module_default.a.docItemWrapper,{[DocPage_styles_module_default.a.docItemWrapperEnhanced]:hiddenSidebarContainer})},/*#__PURE__*/react_default.a.createElement(esm["a" /* MDXProvider */],{components:theme_MDXComponents},children)))));}function DocPage(props){const{route:{routes:docRoutes},versionMetadata,location}=props;const currentDocRoute=docRoutes.find(docRoute=>Object(router["matchPath"])(location.pathname,docRoute));if(!currentDocRoute){return/*#__PURE__*/react_default.a.createElement(NotFound["default"],props);}return/*#__PURE__*/react_default.a.createElement(DocPageContent,{currentDocRoute:currentDocRoute,versionMetadata:versionMetadata},Object(renderRoutes["a" /* default */])(docRoutes));}/* harmony default export */ var theme_DocPage = __webpack_exports__["default"] = (DocPage);

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90);
/* harmony import */ var _theme_SkipToContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(101);
/* harmony import */ var _theme_AnnouncementBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(102);
/* harmony import */ var _theme_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(108);
/* harmony import */ var _theme_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(103);
/* harmony import */ var _theme_LayoutProviders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(109);
/* harmony import */ var _theme_LayoutHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(110);
/* harmony import */ var _theme_hooks_useKeyboardNavigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(104);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_9__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Layout(props){const{children,noFooter,wrapperClassName}=props;Object(_theme_hooks_useKeyboardNavigation__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_LayoutProviders__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_LayoutHead__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_SkipToContent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_AnnouncementBar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_Navbar__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:Object(clsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('main-wrapper',wrapperClassName)},children),!noFooter&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_Footer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],null));}/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ })

}]);