(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(93);

// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(90);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPaginator(props){const{metadata}=props;return/*#__PURE__*/react_default.a.createElement("nav",{className:"pagination-nav","aria-label":Object(Translate["b" /* translate */])({id:'theme.docs.paginator.navAriaLabel',message:'Docs pages navigation',description:'The ARIA label for the docs pagination'})},/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__item"},metadata.previous&&/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],{className:"pagination-nav__link",to:metadata.previous.permalink},/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__sublabel"},/*#__PURE__*/react_default.a.createElement(Translate["a" /* default */],{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__label"},"\xAB ",metadata.previous.title))),/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},metadata.next&&/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],{className:"pagination-nav__link",to:metadata.next.permalink},/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__sublabel"},/*#__PURE__*/react_default.a.createElement(Translate["a" /* default */],{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),/*#__PURE__*/react_default.a.createElement("div",{className:"pagination-nav__label"},metadata.next.title," \xBB"))));}/* harmony default export */ var theme_DocPaginator = (DocPaginator);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(16);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useDocs.js
var useDocs = __webpack_require__(91);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(88);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocVersionSuggestions/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnreleasedVersionLabel({siteTitle,versionLabel}){return/*#__PURE__*/react_default.a.createElement(Translate["a" /* default */],{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle,versionLabel:/*#__PURE__*/react_default.a.createElement("strong",null,versionLabel)}},'This is unreleased documentation for {siteTitle} {versionLabel} version.');}function UnmaintainedVersionLabel({siteTitle,versionLabel}){return/*#__PURE__*/react_default.a.createElement(Translate["a" /* default */],{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle,versionLabel:/*#__PURE__*/react_default.a.createElement("strong",null,versionLabel)}},'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.');}function LatestVersionSuggestionLabel({versionLabel,to,onClick}){return/*#__PURE__*/react_default.a.createElement(Translate["a" /* default */],{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel,latestVersionLink:/*#__PURE__*/react_default.a.createElement("strong",null,/*#__PURE__*/react_default.a.createElement(Link["a" /* default */],{to:to,onClick:onClick},/*#__PURE__*/react_default.a.createElement(Translate["a" /* default */],{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).');}const getVersionMainDoc=version=>version.docs.find(doc=>doc.id===version.mainDocId);function DocVersionSuggestions(){const{siteConfig:{title:siteTitle}}=Object(useDocusaurusContext["default"])();const{pluginId}=Object(useDocs["useActivePlugin"])({failfast:true});const{savePreferredVersionName}=Object(lib["useDocsPreferredVersion"])(pluginId);const activeVersion=Object(useDocs["useActiveVersion"])(pluginId);const{latestDocSuggestion,latestVersionSuggestion}=Object(useDocs["useDocVersionSuggestions"])(pluginId);// No suggestion to be made
if(!latestVersionSuggestion){return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null);}// try to link to same doc in latest version (not always possible)
// fallback to main doc of latest version
const latestVersionSuggestedDoc=latestDocSuggestion!==null&&latestDocSuggestion!==void 0?latestDocSuggestion:getVersionMainDoc(latestVersionSuggestion);return/*#__PURE__*/react_default.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},/*#__PURE__*/react_default.a.createElement("div",null,activeVersion.name==='current'?/*#__PURE__*/react_default.a.createElement(UnreleasedVersionLabel,{siteTitle:siteTitle,versionLabel:activeVersion.label}):/*#__PURE__*/react_default.a.createElement(UnmaintainedVersionLabel,{siteTitle:siteTitle,versionLabel:activeVersion.label})),/*#__PURE__*/react_default.a.createElement("div",{className:"margin-top--md"},/*#__PURE__*/react_default.a.createElement(LatestVersionSuggestionLabel,{versionLabel:latestVersionSuggestion.label,to:latestVersionSuggestedDoc.path,onClick:()=>savePreferredVersionName(latestVersionSuggestion.name)})));}/* harmony default export */ var theme_DocVersionSuggestions = (DocVersionSuggestions);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Seo/index.js
var Seo = __webpack_require__(130);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/LastUpdated/styles.module.css
var styles_module = __webpack_require__(65);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LastUpdatedAtDate({lastUpdatedAt,formattedLastUpdatedAt}){return/*#__PURE__*/react_default.a.createElement(Translate["a" /* default */],{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:/*#__PURE__*/react_default.a.createElement("time",{dateTime:new Date(lastUpdatedAt*1000).toISOString(),className:styles_module_default.a.lastUpdatedDate},formattedLastUpdatedAt)}},' on {date}');}function LastUpdatedByUser({lastUpdatedBy}){return/*#__PURE__*/react_default.a.createElement(Translate["a" /* default */],{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:/*#__PURE__*/react_default.a.createElement("strong",null,lastUpdatedBy)}},' by {user}');}function LastUpdated({lastUpdatedAt,formattedLastUpdatedAt,lastUpdatedBy}){return/*#__PURE__*/react_default.a.createElement("div",{className:"col text--right"},/*#__PURE__*/react_default.a.createElement("em",null,/*#__PURE__*/react_default.a.createElement("small",null,/*#__PURE__*/react_default.a.createElement(Translate["a" /* default */],{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:lastUpdatedAt&&formattedLastUpdatedAt?/*#__PURE__*/react_default.a.createElement(LastUpdatedAtDate,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt}):'',byUser:lastUpdatedBy?/*#__PURE__*/react_default.a.createElement(LastUpdatedByUser,{lastUpdatedBy:lastUpdatedBy}):''}},'Last updated{atDate}{byUser}'), false&&/*#__PURE__*/false)));}
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(89);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useTOCHighlight(linkClassName,linkActiveClassName,topOffset){const[lastActiveLink,setLastActiveLink]=Object(react["useState"])(undefined);Object(react["useEffect"])(()=>{function setActiveLink(){function getActiveHeaderAnchor(){const headersAnchors=Array.from(document.getElementsByClassName('anchor'));const firstAnchorUnderViewportTop=headersAnchors.find(anchor=>{const{top}=anchor.getBoundingClientRect();return top>=topOffset;});if(firstAnchorUnderViewportTop){// If first anchor in viewport is under a certain threshold, we consider it's not the active anchor.
// In such case, the active anchor is the previous one (if it exists), that may be above the viewport
if(firstAnchorUnderViewportTop.getBoundingClientRect().top>=topOffset){const previousAnchor=headersAnchors[headersAnchors.indexOf(firstAnchorUnderViewportTop)-1];return previousAnchor!==null&&previousAnchor!==void 0?previousAnchor:firstAnchorUnderViewportTop;}// If the anchor is at the top of the viewport, we consider it's the first anchor
else{return firstAnchorUnderViewportTop;}}// no anchor under viewport top? (ie we are at the bottom of the page)
else{// highlight the last anchor found
return headersAnchors[headersAnchors.length-1];}}const activeHeaderAnchor=getActiveHeaderAnchor();if(activeHeaderAnchor){let index=0;let itemHighlighted=false;// @ts-expect-error: Must be <a> tags.
const links=document.getElementsByClassName(linkClassName);while(index<links.length&&!itemHighlighted){const link=links[index];const{href}=link;const anchorValue=decodeURIComponent(href.substring(href.indexOf('#')+1));if(activeHeaderAnchor.id===anchorValue){if(lastActiveLink){lastActiveLink.classList.remove(linkActiveClassName);}link.classList.add(linkActiveClassName);setLastActiveLink(link);itemHighlighted=true;}index+=1;}}}document.addEventListener('scroll',setActiveLink);document.addEventListener('resize',setActiveLink);setActiveLink();return()=>{document.removeEventListener('scroll',setActiveLink);document.removeEventListener('resize',setActiveLink);};});}/* harmony default export */ var hooks_useTOCHighlight = (useTOCHighlight);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/styles.module.css
var TOC_styles_module = __webpack_require__(66);
var TOC_styles_module_default = /*#__PURE__*/__webpack_require__.n(TOC_styles_module);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const LINK_CLASS_NAME='table-of-contents__link';const ACTIVE_LINK_CLASS_NAME='table-of-contents__link--active';const TOP_OFFSET=100;/* eslint-disable jsx-a11y/control-has-associated-label */function Headings({toc,isChild}){if(!toc.length){return null;}return/*#__PURE__*/react_default.a.createElement("ul",{className:isChild?'':'table-of-contents table-of-contents__left-border'},toc.map(heading=>/*#__PURE__*/react_default.a.createElement("li",{key:heading.id},/*#__PURE__*/react_default.a.createElement("a",{href:`#${heading.id}`,className:LINK_CLASS_NAME// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:heading.value}}),/*#__PURE__*/react_default.a.createElement(Headings,{isChild:true,toc:heading.children}))));}function TOC({toc}){hooks_useTOCHighlight(LINK_CLASS_NAME,ACTIVE_LINK_CLASS_NAME,TOP_OFFSET);return/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])(TOC_styles_module_default.a.tableOfContents,'thin-scrollbar')},/*#__PURE__*/react_default.a.createElement(Headings,{toc:toc}));}/* harmony default export */ var theme_TOC = (TOC);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js + 1 modules
var esm_extends = __webpack_require__(3);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/styles.module.css
var IconEdit_styles_module = __webpack_require__(67);
var IconEdit_styles_module_default = /*#__PURE__*/__webpack_require__.n(IconEdit_styles_module);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const IconEdit=({className,...restProps})=>{return/*#__PURE__*/react_default.a.createElement("svg",Object(esm_extends["a" /* default */])({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(clsx_m["a" /* default */])(IconEdit_styles_module_default.a.iconEdit,className),"aria-label":"Edit page"},restProps),/*#__PURE__*/react_default.a.createElement("g",null,/*#__PURE__*/react_default.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));};/* harmony default export */ var theme_IconEdit = (IconEdit);
// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditThisPage({editUrl}){return/*#__PURE__*/react_default.a.createElement("a",{href:editUrl,target:"_blank",rel:"noreferrer noopener"},/*#__PURE__*/react_default.a.createElement(theme_IconEdit,null),/*#__PURE__*/react_default.a.createElement(Translate["a" /* default */],{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"));}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/styles.module.css
var DocItem_styles_module = __webpack_require__(68);
var DocItem_styles_module_default = /*#__PURE__*/__webpack_require__.n(DocItem_styles_module);

// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItem(props){const{content:DocContent}=props;const{metadata,frontMatter:{image,keywords,hide_title:hideTitle,hide_table_of_contents:hideTableOfContents}}=DocContent;const{description,title,editUrl,lastUpdatedAt,formattedLastUpdatedAt,lastUpdatedBy}=metadata;const{pluginId}=Object(useDocs["useActivePlugin"])({failfast:true});const versions=Object(useDocs["useVersions"])(pluginId);const version=Object(useDocs["useActiveVersion"])(pluginId);// If site is not versioned or only one version is included
// we don't show the version badge
// See https://github.com/facebook/docusaurus/issues/3362
const showVersionBadge=versions.length>1;return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(Seo["a" /* default */],{title,description,keywords,image}),/*#__PURE__*/react_default.a.createElement("div",{className:"row"},/*#__PURE__*/react_default.a.createElement("div",{className:Object(clsx_m["a" /* default */])('col',{[DocItem_styles_module_default.a.docItemCol]:!hideTableOfContents})},/*#__PURE__*/react_default.a.createElement(theme_DocVersionSuggestions,null),/*#__PURE__*/react_default.a.createElement("div",{className:DocItem_styles_module_default.a.docItemContainer},/*#__PURE__*/react_default.a.createElement("article",null,showVersionBadge&&/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement("span",{className:"badge badge--secondary"},"Version: ",version.label)),!hideTitle&&/*#__PURE__*/react_default.a.createElement("header",null,/*#__PURE__*/react_default.a.createElement("h1",{className:DocItem_styles_module_default.a.docTitle},title)),/*#__PURE__*/react_default.a.createElement("div",{className:"markdown"},/*#__PURE__*/react_default.a.createElement(DocContent,null))),(editUrl||lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/react_default.a.createElement("div",{className:"margin-vert--xl"},/*#__PURE__*/react_default.a.createElement("div",{className:"row"},/*#__PURE__*/react_default.a.createElement("div",{className:"col"},editUrl&&/*#__PURE__*/react_default.a.createElement(EditThisPage,{editUrl:editUrl})),(lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/react_default.a.createElement(LastUpdated,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt,lastUpdatedBy:lastUpdatedBy}))),/*#__PURE__*/react_default.a.createElement("div",{className:"margin-vert--lg"},/*#__PURE__*/react_default.a.createElement(theme_DocPaginator,{metadata:metadata})))),!hideTableOfContents&&DocContent.toc&&/*#__PURE__*/react_default.a.createElement("div",{className:"col col--3"},/*#__PURE__*/react_default.a.createElement(theme_TOC,{toc:DocContent.toc}))));}/* harmony default export */ var theme_DocItem = __webpack_exports__["default"] = (DocItem);

/***/ })

}]);