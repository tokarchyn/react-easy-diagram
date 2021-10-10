(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[7918],{

/***/ 9745:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ theme_DocItem; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(4142);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1787);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPaginator(props){var metadata=props.metadata;return/*#__PURE__*/react.createElement("nav",{className:"pagination-nav","aria-label":(0,Translate/* translate */.I)({id:'theme.docs.paginator.navAriaLabel',message:'Docs pages navigation',description:'The ARIA label for the docs pagination'})},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item"},metadata.previous&&/*#__PURE__*/react.createElement(Link/* default */.Z,{className:"pagination-nav__link",to:metadata.previous.permalink},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__sublabel"},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),/*#__PURE__*/react.createElement("div",{className:"pagination-nav__label"},"\xAB ",metadata.previous.title))),/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},metadata.next&&/*#__PURE__*/react.createElement(Link/* default */.Z,{className:"pagination-nav__link",to:metadata.next.permalink},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__sublabel"},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),/*#__PURE__*/react.createElement("div",{className:"pagination-nav__label"},metadata.next.title," \xBB"))));}/* harmony default export */ var theme_DocPaginator = (DocPaginator);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(353);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useDocs.js
var useDocs = __webpack_require__(6889);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/index.js
var lib = __webpack_require__(4801);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocVersionSuggestions/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnreleasedVersionLabel(_ref){var siteTitle=_ref.siteTitle,versionLabel=_ref.versionLabel;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:siteTitle,versionLabel:/*#__PURE__*/react.createElement("strong",null,versionLabel)}},'This is unreleased documentation for {siteTitle} {versionLabel} version.');}function UnmaintainedVersionLabel(_ref2){var siteTitle=_ref2.siteTitle,versionLabel=_ref2.versionLabel;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:siteTitle,versionLabel:/*#__PURE__*/react.createElement("strong",null,versionLabel)}},'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.');}function LatestVersionSuggestionLabel(_ref3){var versionLabel=_ref3.versionLabel,to=_ref3.to,onClick=_ref3.onClick;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:versionLabel,latestVersionLink:/*#__PURE__*/react.createElement("strong",null,/*#__PURE__*/react.createElement(Link/* default */.Z,{to:to,onClick:onClick},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).');}var getVersionMainDoc=function getVersionMainDoc(version){return version.docs.find(function(doc){return doc.id===version.mainDocId;});};function DocVersionSuggestions(){var _useDocusaurusContext=(0,useDocusaurusContext.default)(),siteTitle=_useDocusaurusContext.siteConfig.title;var _useActivePlugin=(0,useDocs.useActivePlugin)({failfast:true}),pluginId=_useActivePlugin.pluginId;var _useDocsPreferredVers=(0,lib/* useDocsPreferredVersion */.J)(pluginId),savePreferredVersionName=_useDocsPreferredVers.savePreferredVersionName;var activeVersion=(0,useDocs.useActiveVersion)(pluginId);var _useDocVersionSuggest=(0,useDocs.useDocVersionSuggestions)(pluginId),latestDocSuggestion=_useDocVersionSuggest.latestDocSuggestion,latestVersionSuggestion=_useDocVersionSuggest.latestVersionSuggestion;// No suggestion to be made
if(!latestVersionSuggestion){return/*#__PURE__*/react.createElement(react.Fragment,null);}// try to link to same doc in latest version (not always possible)
// fallback to main doc of latest version
var latestVersionSuggestedDoc=latestDocSuggestion!=null?latestDocSuggestion:getVersionMainDoc(latestVersionSuggestion);return/*#__PURE__*/react.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},/*#__PURE__*/react.createElement("div",null,activeVersion.name==='current'?/*#__PURE__*/react.createElement(UnreleasedVersionLabel,{siteTitle:siteTitle,versionLabel:activeVersion.label}):/*#__PURE__*/react.createElement(UnmaintainedVersionLabel,{siteTitle:siteTitle,versionLabel:activeVersion.label})),/*#__PURE__*/react.createElement("div",{className:"margin-top--md"},/*#__PURE__*/react.createElement(LatestVersionSuggestionLabel,{versionLabel:latestVersionSuggestion.label,to:latestVersionSuggestedDoc.path,onClick:function onClick(){return savePreferredVersionName(latestVersionSuggestion.name);}})));}/* harmony default export */ var theme_DocVersionSuggestions = (DocVersionSuggestions);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/Seo/index.js
var Seo = __webpack_require__(1956);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/LastUpdated/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"lastUpdatedDate":"lastUpdatedDate_Xku4"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LastUpdatedAtDate(_ref){var lastUpdatedAt=_ref.lastUpdatedAt,formattedLastUpdatedAt=_ref.formattedLastUpdatedAt;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:/*#__PURE__*/react.createElement("time",{dateTime:new Date(lastUpdatedAt*1000).toISOString(),className:styles_module.lastUpdatedDate},formattedLastUpdatedAt)}},' on {date}');}function LastUpdatedByUser(_ref2){var lastUpdatedBy=_ref2.lastUpdatedBy;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:/*#__PURE__*/react.createElement("strong",null,lastUpdatedBy)}},' by {user}');}function LastUpdated(_ref3){var lastUpdatedAt=_ref3.lastUpdatedAt,formattedLastUpdatedAt=_ref3.formattedLastUpdatedAt,lastUpdatedBy=_ref3.lastUpdatedBy;return/*#__PURE__*/react.createElement("div",{className:"col text--right"},/*#__PURE__*/react.createElement("em",null,/*#__PURE__*/react.createElement("small",null,/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:lastUpdatedAt&&formattedLastUpdatedAt?/*#__PURE__*/react.createElement(LastUpdatedAtDate,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt}):'',byUser:lastUpdatedBy?/*#__PURE__*/react.createElement(LastUpdatedByUser,{lastUpdatedBy:lastUpdatedBy}):''}},'Last updated{atDate}{byUser}'), false&&/*#__PURE__*/0)));}
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(8944);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useTOCHighlight(linkClassName,linkActiveClassName,topOffset){var _useState=(0,react.useState)(undefined),lastActiveLink=_useState[0],setLastActiveLink=_useState[1];(0,react.useEffect)(function(){function setActiveLink(){function getActiveHeaderAnchor(){var headersAnchors=Array.from(document.getElementsByClassName('anchor'));var firstAnchorUnderViewportTop=headersAnchors.find(function(anchor){var _anchor$getBoundingCl=anchor.getBoundingClientRect(),top=_anchor$getBoundingCl.top;return top>=topOffset;});if(firstAnchorUnderViewportTop){// If first anchor in viewport is under a certain threshold, we consider it's not the active anchor.
// In such case, the active anchor is the previous one (if it exists), that may be above the viewport
if(firstAnchorUnderViewportTop.getBoundingClientRect().top>=topOffset){var previousAnchor=headersAnchors[headersAnchors.indexOf(firstAnchorUnderViewportTop)-1];return previousAnchor!=null?previousAnchor:firstAnchorUnderViewportTop;}// If the anchor is at the top of the viewport, we consider it's the first anchor
else{return firstAnchorUnderViewportTop;}}// no anchor under viewport top? (ie we are at the bottom of the page)
else{// highlight the last anchor found
return headersAnchors[headersAnchors.length-1];}}var activeHeaderAnchor=getActiveHeaderAnchor();if(activeHeaderAnchor){var index=0;var itemHighlighted=false;// @ts-expect-error: Must be <a> tags.
var links=document.getElementsByClassName(linkClassName);while(index<links.length&&!itemHighlighted){var link=links[index];var href=link.href;var anchorValue=decodeURIComponent(href.substring(href.indexOf('#')+1));if(activeHeaderAnchor.id===anchorValue){if(lastActiveLink){lastActiveLink.classList.remove(linkActiveClassName);}link.classList.add(linkActiveClassName);setLastActiveLink(link);itemHighlighted=true;}index+=1;}}}document.addEventListener('scroll',setActiveLink);document.addEventListener('resize',setActiveLink);setActiveLink();return function(){document.removeEventListener('scroll',setActiveLink);document.removeEventListener('resize',setActiveLink);};});}/* harmony default export */ var hooks_useTOCHighlight = (useTOCHighlight);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var TOC_styles_module = ({"tableOfContents":"tableOfContents_3J2a","docItemContainer":"docItemContainer_2VRk"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LINK_CLASS_NAME='table-of-contents__link';var ACTIVE_LINK_CLASS_NAME='table-of-contents__link--active';var TOP_OFFSET=100;/* eslint-disable jsx-a11y/control-has-associated-label */function Headings(_ref){var toc=_ref.toc,isChild=_ref.isChild;if(!toc.length){return null;}return/*#__PURE__*/react.createElement("ul",{className:isChild?'':'table-of-contents table-of-contents__left-border'},toc.map(function(heading){return/*#__PURE__*/react.createElement("li",{key:heading.id},/*#__PURE__*/react.createElement("a",{href:"#"+heading.id,className:LINK_CLASS_NAME// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:heading.value}}),/*#__PURE__*/react.createElement(Headings,{isChild:true,toc:heading.children}));}));}function TOC(_ref2){var toc=_ref2.toc;hooks_useTOCHighlight(LINK_CLASS_NAME,ACTIVE_LINK_CLASS_NAME,TOP_OFFSET);return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(TOC_styles_module.tableOfContents,'thin-scrollbar')},/*#__PURE__*/react.createElement(Headings,{toc:toc}));}/* harmony default export */ var theme_TOC = (TOC);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(9603);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(120);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var IconEdit_styles_module = ({"iconEdit":"iconEdit_1CBY"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconEdit=function IconEdit(_ref){var className=_ref.className,restProps=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,["className"]);return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,clsx_m/* default */.Z)(IconEdit_styles_module.iconEdit,className),"aria-label":"Edit page"},restProps),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));};/* harmony default export */ var theme_IconEdit = (IconEdit);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditThisPage(_ref){var editUrl=_ref.editUrl;return/*#__PURE__*/react.createElement("a",{href:editUrl,target:"_blank",rel:"noreferrer noopener"},/*#__PURE__*/react.createElement(theme_IconEdit,null),/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocItem_styles_module = ({"docTitle":"docTitle_33JP","docItemContainer":"docItemContainer_3nUq","docItemCol":"docItemCol_1o9i"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItem(props){var _clsx;var DocContent=props.content;var metadata=DocContent.metadata,frontMatter=DocContent.frontMatter;var image=frontMatter.image,keywords=frontMatter.keywords,hideTitle=frontMatter.hide_title,hideTableOfContents=frontMatter.hide_table_of_contents;var description=metadata.description,title=metadata.title,editUrl=metadata.editUrl,lastUpdatedAt=metadata.lastUpdatedAt,formattedLastUpdatedAt=metadata.formattedLastUpdatedAt,lastUpdatedBy=metadata.lastUpdatedBy;var _useActivePlugin=(0,useDocs.useActivePlugin)({failfast:true}),pluginId=_useActivePlugin.pluginId;var versions=(0,useDocs.useVersions)(pluginId);var version=(0,useDocs.useActiveVersion)(pluginId);// If site is not versioned or only one version is included
// we don't show the version badge
// See https://github.com/facebook/docusaurus/issues/3362
var showVersionBadge=versions.length>1;// For meta title, using frontMatter.title in priority over a potential # title found in markdown
// See https://github.com/facebook/docusaurus/issues/4665#issuecomment-825831367
var metaTitle=frontMatter.title||title;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Seo/* default */.Z,{title:metaTitle,description:description,keywords:keywords,image:image}),/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col',(_clsx={},_clsx[DocItem_styles_module.docItemCol]=!hideTableOfContents,_clsx))},/*#__PURE__*/react.createElement(theme_DocVersionSuggestions,null),/*#__PURE__*/react.createElement("div",{className:DocItem_styles_module.docItemContainer},/*#__PURE__*/react.createElement("article",null,showVersionBadge&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("span",{className:"badge badge--secondary"},"Version: ",version.label)),!hideTitle&&/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement("h1",{className:DocItem_styles_module.docTitle},title)),/*#__PURE__*/react.createElement("div",{className:"markdown"},/*#__PURE__*/react.createElement(DocContent,null))),(editUrl||lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/react.createElement("div",{className:"margin-vert--xl"},/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("div",{className:"col"},editUrl&&/*#__PURE__*/react.createElement(EditThisPage,{editUrl:editUrl})),(lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/react.createElement(LastUpdated,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt,lastUpdatedBy:lastUpdatedBy}))),/*#__PURE__*/react.createElement("div",{className:"margin-vert--lg"},/*#__PURE__*/react.createElement(theme_DocPaginator,{metadata:metadata})))),!hideTableOfContents&&DocContent.toc&&/*#__PURE__*/react.createElement("div",{className:"col col--3"},/*#__PURE__*/react.createElement(theme_TOC,{toc:DocContent.toc}))));}/* harmony default export */ var theme_DocItem = (DocItem);

/***/ })

}]);