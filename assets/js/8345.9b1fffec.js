(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[8345,6119],{

/***/ 5318:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);


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

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
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

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 8345:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ theme_DocPage; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(5318);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(353);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/renderRoutes.js
var renderRoutes = __webpack_require__(6028);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js
var Layout = __webpack_require__(6562);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(9603);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(120);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(8944);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(4801);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useUserPreferencesContext.js
var useUserPreferencesContext = __webpack_require__(4309);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useLockBodyScroll.js
var useLockBodyScroll = __webpack_require__(1080);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(8245);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useScrollPosition.js
var useScrollPosition = __webpack_require__(5135);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(4142);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(5626);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Logo/index.js
var Logo = __webpack_require__(3059);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/IconArrow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconArrow=function IconArrow(props){return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({width:"20",height:"20",role:"img"},props),/*#__PURE__*/react.createElement("g",{fill:"#7a7a7a"},/*#__PURE__*/react.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),/*#__PURE__*/react.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));};/* harmony default export */ var theme_IconArrow = (IconArrow);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/IconMenu/index.js
var IconMenu = __webpack_require__(3204);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1787);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"sidebar":"sidebar_2j-V","sidebarWithHideableNavbar":"sidebarWithHideableNavbar_2fMR","sidebarHidden":"sidebarHidden_1sUd","sidebarLogo":"sidebarLogo_1OGv","menu":"menu_1Xkn","menuLinkText":"menuLinkText_24Nz","menuWithAnnouncementBar":"menuWithAnnouncementBar_1DU9","collapseSidebarButton":"collapseSidebarButton_2Hma","collapseSidebarButtonIcon":"collapseSidebarButtonIcon_1Kc0","sidebarMenuIcon":"sidebarMenuIcon_Vtis","sidebarMenuCloseIcon":"sidebarMenuCloseIcon_Qs94","menuLinkExternal":"menuLinkExternal_3RKO"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MOBILE_TOGGLE_SIZE=24;function usePrevious(value){var ref=(0,react.useRef)(value);(0,react.useEffect)(function(){ref.current=value;},[value]);return ref.current;}var isActiveSidebarItem=function isActiveSidebarItem(item,activePath){if(item.type==='link'){return (0,lib/* isSamePath */.Mg)(item.href,activePath);}if(item.type==='category'){return item.items.some(function(subItem){return isActiveSidebarItem(subItem,activePath);});}return false;};// Optimize sidebar at each "level"
// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
var DocSidebarItems=/*#__PURE__*/(0,react.memo)(function DocSidebarItems(_ref){var items=_ref.items,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,["items"]);return items.map(function(item,index){return/*#__PURE__*/react.createElement(DocSidebarItem,(0,esm_extends/* default */.Z)({key:index// sidebar is static, the index does not change
,item:item},props));});});function DocSidebarItem(props){switch(props.item.type){case'category':return/*#__PURE__*/react.createElement(DocSidebarItemCategory,props);case'link':default:return/*#__PURE__*/react.createElement(DocSidebarItemLink,props);}}function DocSidebarItemCategory(_ref2){var _clsx;var item=_ref2.item,onItemClick=_ref2.onItemClick,collapsible=_ref2.collapsible,activePath=_ref2.activePath,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref2,["item","onItemClick","collapsible","activePath"]);var items=item.items,label=item.label;var isActive=isActiveSidebarItem(item,activePath);var wasActive=usePrevious(isActive);// active categories are always initialized as expanded
// the default (item.collapsed) is only used for non-active categories
var _useState=(0,react.useState)(function(){if(!collapsible){return false;}return isActive?false:item.collapsed;}),collapsed=_useState[0],setCollapsed=_useState[1];var menuListRef=(0,react.useRef)(null);var _useState2=(0,react.useState)(undefined),menuListHeight=_useState2[0],setMenuListHeight=_useState2[1];var handleMenuListHeight=function handleMenuListHeight(calc){var _menuListRef$current;if(calc===void 0){calc=true;}setMenuListHeight(calc?((_menuListRef$current=menuListRef.current)==null?void 0:_menuListRef$current.scrollHeight)+"px":undefined);};// If we navigate to a category, it should automatically expand itself
(0,react.useEffect)(function(){var justBecameActive=isActive&&!wasActive;if(justBecameActive&&collapsed){setCollapsed(false);}},[isActive,wasActive,collapsed]);var handleItemClick=(0,react.useCallback)(function(e){e.preventDefault();if(!menuListHeight){handleMenuListHeight();}setTimeout(function(){return setCollapsed(function(state){return!state;});},100);},[menuListHeight]);if(items.length===0){return null;}return/*#__PURE__*/react.createElement("li",{className:(0,clsx_m/* default */.Z)('menu__list-item',{'menu__list-item--collapsed':collapsed})},/*#__PURE__*/react.createElement("a",(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)('menu__link',(_clsx={'menu__link--sublist':collapsible,'menu__link--active':collapsible&&isActive},_clsx[styles_module.menuLinkText]=!collapsible,_clsx)),onClick:collapsible?handleItemClick:undefined,href:collapsible?'#!':undefined},props),label),/*#__PURE__*/react.createElement("ul",{className:"menu__list",ref:menuListRef,style:{height:menuListHeight},onTransitionEnd:function onTransitionEnd(){if(!collapsed){handleMenuListHeight(false);}}},/*#__PURE__*/react.createElement(DocSidebarItems,{items:items,tabIndex:collapsed?'-1':'0',onItemClick:onItemClick,collapsible:collapsible,activePath:activePath})));}function DocSidebarItemLink(_ref3){var _clsx2;var item=_ref3.item,onItemClick=_ref3.onItemClick,activePath=_ref3.activePath,_collapsible=_ref3.collapsible,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref3,["item","onItemClick","activePath","collapsible"]);var href=item.href,label=item.label;var isActive=isActiveSidebarItem(item,activePath);return/*#__PURE__*/react.createElement("li",{className:"menu__list-item",key:label},/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({className:(0,clsx_m/* default */.Z)('menu__link',(_clsx2={'menu__link--active':isActive},_clsx2[styles_module.menuLinkExternal]=!(0,isInternalUrl/* default */.Z)(href),_clsx2)),to:href},(0,isInternalUrl/* default */.Z)(href)&&{isNavLink:true,exact:true,onClick:onItemClick},props),label));}function useShowAnnouncementBar(){var _useUserPreferencesCo=(0,useUserPreferencesContext/* default */.Z)(),isAnnouncementBarClosed=_useUserPreferencesCo.isAnnouncementBarClosed;var _useState3=(0,react.useState)(!isAnnouncementBarClosed),showAnnouncementBar=_useState3[0],setShowAnnouncementBar=_useState3[1];(0,useScrollPosition/* default */.Z)(function(_ref4){var scrollY=_ref4.scrollY;if(!isAnnouncementBarClosed){setShowAnnouncementBar(scrollY===0);}});return showAnnouncementBar;}function useResponsiveSidebar(){var _useState4=(0,react.useState)(false),showResponsiveSidebar=_useState4[0],setShowResponsiveSidebar=_useState4[1];(0,useLockBodyScroll/* default */.Z)(showResponsiveSidebar);var windowSize=(0,useWindowSize/* default */.Z)();(0,react.useEffect)(function(){if(windowSize===useWindowSize/* windowSizes.desktop */.D.desktop){setShowResponsiveSidebar(false);}},[windowSize]);var closeResponsiveSidebar=(0,react.useCallback)(function(e){e.target.blur();setShowResponsiveSidebar(false);},[setShowResponsiveSidebar]);var toggleResponsiveSidebar=(0,react.useCallback)(function(){setShowResponsiveSidebar(function(value){return!value;});},[setShowResponsiveSidebar]);return{showResponsiveSidebar:showResponsiveSidebar,closeResponsiveSidebar:closeResponsiveSidebar,toggleResponsiveSidebar:toggleResponsiveSidebar};}function HideableSidebarButton(_ref5){var onClick=_ref5.onClick;return/*#__PURE__*/react.createElement("button",{type:"button",title:(0,Translate/* translate */.I)({id:'theme.docs.sidebar.collapseButtonTitle',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.collapseButtonAriaLabel',message:'Collapse sidebar',description:'The title attribute for collapse button of doc sidebar'}),className:(0,clsx_m/* default */.Z)('button button--secondary button--outline',styles_module.collapseSidebarButton),onClick:onClick},/*#__PURE__*/react.createElement(theme_IconArrow,{className:styles_module.collapseSidebarButtonIcon}));}function ResponsiveSidebarButton(_ref6){var responsiveSidebarOpened=_ref6.responsiveSidebarOpened,onClick=_ref6.onClick;return/*#__PURE__*/react.createElement("button",{"aria-label":responsiveSidebarOpened?(0,Translate/* translate */.I)({id:'theme.docs.sidebar.responsiveCloseButtonLabel',message:'Close menu',description:'The ARIA label for close button of mobile doc sidebar'}):(0,Translate/* translate */.I)({id:'theme.docs.sidebar.responsiveOpenButtonLabel',message:'Open menu',description:'The ARIA label for open button of mobile doc sidebar'}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:onClick},responsiveSidebarOpened?/*#__PURE__*/react.createElement("span",{className:(0,clsx_m/* default */.Z)(styles_module.sidebarMenuIcon,styles_module.sidebarMenuCloseIcon)},"\xD7"):/*#__PURE__*/react.createElement(IconMenu/* default */.Z,{className:styles_module.sidebarMenuIcon,height:MOBILE_TOGGLE_SIZE,width:MOBILE_TOGGLE_SIZE}));}function DocSidebar(_ref7){var _clsx3,_clsx4;var path=_ref7.path,sidebar=_ref7.sidebar,_ref7$sidebarCollapsi=_ref7.sidebarCollapsible,sidebarCollapsible=_ref7$sidebarCollapsi===void 0?true:_ref7$sidebarCollapsi,onCollapse=_ref7.onCollapse,isHidden=_ref7.isHidden;var showAnnouncementBar=useShowAnnouncementBar();var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll,hideableSidebar=_useThemeConfig.hideableSidebar;var _useUserPreferencesCo2=(0,useUserPreferencesContext/* default */.Z)(),isAnnouncementBarClosed=_useUserPreferencesCo2.isAnnouncementBarClosed;var _useResponsiveSidebar=useResponsiveSidebar(),showResponsiveSidebar=_useResponsiveSidebar.showResponsiveSidebar,closeResponsiveSidebar=_useResponsiveSidebar.closeResponsiveSidebar,toggleResponsiveSidebar=_useResponsiveSidebar.toggleResponsiveSidebar;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(styles_module.sidebar,(_clsx3={},_clsx3[styles_module.sidebarWithHideableNavbar]=hideOnScroll,_clsx3[styles_module.sidebarHidden]=isHidden,_clsx3))},hideOnScroll&&/*#__PURE__*/react.createElement(Logo/* default */.Z,{tabIndex:-1,className:styles_module.sidebarLogo}),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('menu','menu--responsive','thin-scrollbar',styles_module.menu,(_clsx4={'menu--show':showResponsiveSidebar},_clsx4[styles_module.menuWithAnnouncementBar]=!isAnnouncementBarClosed&&showAnnouncementBar,_clsx4))},/*#__PURE__*/react.createElement(ResponsiveSidebarButton,{responsiveSidebarOpened:showResponsiveSidebar,onClick:toggleResponsiveSidebar}),/*#__PURE__*/react.createElement("ul",{className:"menu__list"},/*#__PURE__*/react.createElement(DocSidebarItems,{items:sidebar,onItemClick:closeResponsiveSidebar,collapsible:sidebarCollapsible,activePath:path}))),hideableSidebar&&/*#__PURE__*/react.createElement(HideableSidebarButton,{onClick:onCollapse}));}/* harmony default export */ var theme_DocSidebar = (DocSidebar);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-live-codeblock/src/theme/CodeBlock/index.js + 5 modules
var CodeBlock = __webpack_require__(3338);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Heading_styles_module = ({"enhancedAnchor":"enhancedAnchor_2Cjg"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */var Heading=function Heading(Tag){return function TargetComponent(_ref){var _clsx;var id=_ref.id,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,["id"]);var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll;if(!id){return/*#__PURE__*/react.createElement(Tag,props);}return/*#__PURE__*/react.createElement(Tag,props,/*#__PURE__*/react.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,clsx_m/* default */.Z)('anchor',(_clsx={},_clsx[Heading_styles_module.enhancedAnchor]=!hideOnScroll,_clsx)),id:id}),props.children,/*#__PURE__*/react.createElement("a",{className:"hash-link",href:"#"+id,title:(0,Translate/* translate */.I)({id:'theme.common.headingLinkTitle',message:'Direct link to heading',description:'Title for link to heading'})},"#"));};};/* harmony default export */ var theme_Heading = (Heading);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MDXComponents={code:function code(props){var children=props.children;// For retrocompatibility purposes (pretty rare use case)
// See https://github.com/facebook/docusaurus/pull/1584
if(/*#__PURE__*/(0,react.isValidElement)(children)){return children;}return!children.includes('\n')?/*#__PURE__*/react.createElement("code",props):/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,props);},a:function a(props){return/*#__PURE__*/react.createElement(Link/* default */.Z,props);},pre:function pre(props){var _children$props;var children=props.children;// See comment for `code` above
if(/*#__PURE__*/(0,react.isValidElement)(children==null?void 0:(_children$props=children.props)==null?void 0:_children$props.children)){return children==null?void 0:children.props.children;}return/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,/*#__PURE__*/(0,react.isValidElement)(children)?children==null?void 0:children.props:{children:children});},h1:theme_Heading('h1'),h2:theme_Heading('h2'),h3:theme_Heading('h3'),h4:theme_Heading('h4'),h5:theme_Heading('h5'),h6:theme_Heading('h6')};/* harmony default export */ var theme_MDXComponents = (MDXComponents);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/NotFound.js
var NotFound = __webpack_require__(6119);
// EXTERNAL MODULE: ../node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(9635);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocPage_styles_module = ({"docPage":"docPage_3jyA","docMainContainer":"docMainContainer_28SP","docMainContainerEnhanced":"docMainContainerEnhanced_YA74","docSidebarContainer":"docSidebarContainer_3jRz","docSidebarContainerHidden":"docSidebarContainerHidden_2b_F","collapsedDocSidebar":"collapsedDocSidebar_KeEu","expandSidebarButtonIcon":"expandSidebarButtonIcon_1pq6","docItemWrapperEnhanced":"docItemWrapperEnhanced_2IZb","docItemWrapper":"docItemWrapper_3ZSj"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPageContent(_ref){var _clsx,_siteConfig$themeConf,_siteConfig$themeConf2,_clsx2,_clsx3;var currentDocRoute=_ref.currentDocRoute,versionMetadata=_ref.versionMetadata,children=_ref.children;var _useDocusaurusContext=(0,useDocusaurusContext.default)(),siteConfig=_useDocusaurusContext.siteConfig,isClient=_useDocusaurusContext.isClient;var pluginId=versionMetadata.pluginId,permalinkToSidebar=versionMetadata.permalinkToSidebar,docsSidebars=versionMetadata.docsSidebars,version=versionMetadata.version;var sidebarName=permalinkToSidebar[currentDocRoute.path];var sidebar=docsSidebars[sidebarName];var _useState=(0,react.useState)(false),hiddenSidebarContainer=_useState[0],setHiddenSidebarContainer=_useState[1];var _useState2=(0,react.useState)(false),hiddenSidebar=_useState2[0],setHiddenSidebar=_useState2[1];var toggleSidebar=(0,react.useCallback)(function(){if(hiddenSidebar){setHiddenSidebar(false);}setHiddenSidebarContainer(!hiddenSidebarContainer);},[hiddenSidebar]);return/*#__PURE__*/react.createElement(Layout/* default */.Z,{key:isClient,wrapperClassName:lib/* ThemeClassNames.wrapper.docPages */.kM.wrapper.docPages,pageClassName:lib/* ThemeClassNames.page.docPage */.kM.page.docPage,searchMetadatas:{version:version,tag:(0,lib/* docVersionSearchTag */.os)(pluginId,version)}},/*#__PURE__*/react.createElement("div",{className:DocPage_styles_module.docPage},sidebar&&/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(DocPage_styles_module.docSidebarContainer,(_clsx={},_clsx[DocPage_styles_module.docSidebarContainerHidden]=hiddenSidebarContainer,_clsx)),onTransitionEnd:function onTransitionEnd(e){if(!e.currentTarget.classList.contains(DocPage_styles_module.docSidebarContainer)){return;}if(hiddenSidebarContainer){setHiddenSidebar(true);}},role:"complementary"},/*#__PURE__*/react.createElement(theme_DocSidebar,{key:// Reset sidebar state on sidebar changes
// See https://github.com/facebook/docusaurus/issues/3414
sidebarName,sidebar:sidebar,path:currentDocRoute.path,sidebarCollapsible:(_siteConfig$themeConf=(_siteConfig$themeConf2=siteConfig.themeConfig)==null?void 0:_siteConfig$themeConf2.sidebarCollapsible)!=null?_siteConfig$themeConf:true,onCollapse:toggleSidebar,isHidden:hiddenSidebar}),hiddenSidebar&&/*#__PURE__*/react.createElement("div",{className:DocPage_styles_module.collapsedDocSidebar,title:(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonTitle',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),"aria-label":(0,Translate/* translate */.I)({id:'theme.docs.sidebar.expandButtonAriaLabel',message:'Expand sidebar',description:'The ARIA label and title attribute for expand button of doc sidebar'}),tabIndex:0,role:"button",onKeyDown:toggleSidebar,onClick:toggleSidebar},/*#__PURE__*/react.createElement(theme_IconArrow,{className:DocPage_styles_module.expandSidebarButtonIcon}))),/*#__PURE__*/react.createElement("main",{className:(0,clsx_m/* default */.Z)(DocPage_styles_module.docMainContainer,(_clsx2={},_clsx2[DocPage_styles_module.docMainContainerEnhanced]=hiddenSidebarContainer||!sidebar,_clsx2))},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('container padding-vert--lg',DocPage_styles_module.docItemWrapper,(_clsx3={},_clsx3[DocPage_styles_module.docItemWrapperEnhanced]=hiddenSidebarContainer,_clsx3))},/*#__PURE__*/react.createElement(esm/* MDXProvider */.Zo,{components:theme_MDXComponents},children)))));}function DocPage(props){var docRoutes=props.route.routes,versionMetadata=props.versionMetadata,location=props.location;var currentDocRoute=docRoutes.find(function(docRoute){return (0,react_router/* matchPath */.LX)(location.pathname,docRoute);});if(!currentDocRoute){return/*#__PURE__*/react.createElement(NotFound.default,props);}return/*#__PURE__*/react.createElement(DocPageContent,{currentDocRoute:currentDocRoute,versionMetadata:versionMetadata},(0,renderRoutes/* default */.Z)(docRoutes));}/* harmony default export */ var theme_DocPage = (DocPage);

/***/ }),

/***/ 6562:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8944);
/* harmony import */ var _theme_SkipToContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8608);
/* harmony import */ var _theme_AnnouncementBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4200);
/* harmony import */ var _theme_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9234);
/* harmony import */ var _theme_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2955);
/* harmony import */ var _theme_LayoutProviders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6395);
/* harmony import */ var _theme_LayoutHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7707);
/* harmony import */ var _theme_hooks_useKeyboardNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3471);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4801);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Layout(props){var children=props.children,noFooter=props.noFooter,wrapperClassName=props.wrapperClassName,pageClassName=props.pageClassName;(0,_theme_hooks_useKeyboardNavigation__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_LayoutProviders__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_LayoutHead__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z,props),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_SkipToContent__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_AnnouncementBar__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Navbar__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .ThemeClassNames.wrapper.main */ .kM.wrapper.main,wrapperClassName,pageClassName)},children),!noFooter&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Footer__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z,null));}/* harmony default export */ __webpack_exports__["Z"] = (Layout);

/***/ }),

/***/ 6119:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6562);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1787);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NotFound(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z,{title:"Page Not Found"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{className:"container margin-vert--xl"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col col--6 col--offset-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"hero__title"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))));}/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ })

}]);