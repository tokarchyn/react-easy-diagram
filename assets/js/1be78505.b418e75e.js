(window.webpackJsonp=window.webpackJsonp||[]).push([[3,15],{111:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(a),b=n,p=m["".concat(l,".").concat(b)]||m[b]||u[b]||c;return a?r.a.createElement(p,o(o({ref:t},s),{},{components:a})):r.a.createElement(p,o({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<c;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(95),l=a(89);t.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},r.a.createElement(l.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.a.createElement("p",null,r.a.createElement(l.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.a.createElement("p",null,r.a.createElement(l.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(111),l=a(16),o=a(28),i=a(95),s=a(3),d=a(88),m=a(87),u=a(120),b=a(124),p=a(125),h=a(123),f=a(91),O=a(110),E=a(126);var v=e=>r.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),j=a(128),g=a(89),y=a(69),k=a.n(y);const N=(e,t)=>"link"===e.type?Object(m.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>N(e,t)));function C({item:e,onItemClick:t,collapsible:a,activePath:c,...l}){const{items:o,label:i}=e,m=N(e,c),u=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(m),[b,p]=Object(n.useState)((()=>!!a&&(!m&&e.collapsed))),h=Object(n.useRef)(null),[f,O]=Object(n.useState)(void 0),E=(e=!0)=>{var t;O(e?`${null===(t=h.current)||void 0===t?void 0:t.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{m&&!u&&b&&p(!1)}),[m,u,b]);const v=Object(n.useCallback)((e=>{e.preventDefault(),f||E(),setTimeout((()=>p((e=>!e))),100)}),[f]);return 0===o.length?null:r.a.createElement("li",{className:Object(d.a)("menu__list-item",{"menu__list-item--collapsed":b}),key:i},r.a.createElement("a",Object(s.a)({className:Object(d.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&m,[k.a.menuLinkText]:!a}),onClick:a?v:void 0,href:a?"#!":void 0},l),i),r.a.createElement("ul",{className:"menu__list",ref:h,style:{height:f},onTransitionEnd:()=>{b||E(!1)}},o.map((e=>r.a.createElement(T,{tabIndex:b?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:c})))))}function w({item:e,onItemClick:t,activePath:a,collapsible:n,...c}){const{href:l,label:o}=e,i=N(e,a);return r.a.createElement("li",{className:"menu__list-item",key:o},r.a.createElement(f.a,Object(s.a)({className:Object(d.a)("menu__link",{"menu__link--active":i,[k.a.menuLinkExternal]:!Object(O.a)(l)}),to:l},Object(O.a)(l)&&{isNavLink:!0,exact:!0,onClick:t},c),o))}function T(e){switch(e.item.type){case"category":return r.a.createElement(C,e);case"link":default:return r.a.createElement(w,e)}}var x=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:c,isHidden:l}){const[o,i]=Object(n.useState)(!1),{navbar:{hideOnScroll:s},hideableSidebar:f}=Object(m.useThemeConfig)(),{isAnnouncementBarClosed:O}=Object(u.a)(),{scrollY:y}=Object(h.a)();Object(b.a)(o);const N=Object(p.a)();return Object(n.useEffect)((()=>{N===p.b.desktop&&i(!1)}),[N]),r.a.createElement("div",{className:Object(d.a)(k.a.sidebar,{[k.a.sidebarWithHideableNavbar]:s,[k.a.sidebarHidden]:l})},s&&r.a.createElement(E.a,{tabIndex:-1,className:k.a.sidebarLogo}),r.a.createElement("div",{className:Object(d.a)("menu","menu--responsive","thin-scrollbar",k.a.menu,{"menu--show":o,[k.a.menuWithAnnouncementBar]:!O&&0===y})},r.a.createElement("button",{"aria-label":o?Object(g.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(g.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{i(!o)}},o?r.a.createElement("span",{className:Object(d.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(j.a,{className:k.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},t.map((t=>r.a.createElement(T,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),i(!1)},collapsible:a,activePath:e}))))),f&&r.a.createElement("button",{type:"button",title:Object(g.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(g.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(d.a)("button button--secondary button--outline",k.a.collapseSidebarButton),onClick:c},r.a.createElement(v,{className:k.a.collapseSidebarButtonIcon})))},_=a(93),P=(a(72),a(73)),S=a.n(P);var I=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(m.useThemeConfig)();return t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(d.a)("anchor",{[S.a.enhancedAnchor]:!n}),id:t}),a.children,r.a.createElement("a",{className:"hash-link",href:`#${t}`,title:Object(g.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,a)};var A={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?r.a.createElement(_.a,e):r.a.createElement("code",e):t},a:e=>r.a.createElement(f.a,e),pre:e=>{const{children:t}=e;return r.a.createElement(_.a,Object(n.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:I("h1"),h2:I("h2"),h3:I("h3"),h4:I("h4"),h5:I("h5"),h6:I("h6")},L=a(116),M=a(23),B=a(74),D=a.n(B);function R({currentDocRoute:e,versionMetadata:t,children:a}){var o,s;const{siteConfig:u,isClient:b}=Object(l.default)(),{pluginId:p,permalinkToSidebar:h,docsSidebars:f,version:O}=t,E=h[e.path],j=f[E],[y,k]=Object(n.useState)(!1),[N,C]=Object(n.useState)(!1),w=Object(n.useCallback)((()=>{N&&C(!1),k(!y)}),[N]);return r.a.createElement(i.a,{key:b,wrapperClassName:"main-docs-wrapper",searchMetadatas:{version:O,tag:Object(m.docVersionSearchTag)(p,O)}},r.a.createElement("div",{className:D.a.docPage},j&&r.a.createElement("div",{className:Object(d.a)(D.a.docSidebarContainer,{[D.a.docSidebarContainerHidden]:y}),onTransitionEnd:e=>{e.currentTarget.classList.contains(D.a.docSidebarContainer)&&y&&C(!0)},role:"complementary"},r.a.createElement(x,{key:E,sidebar:j,path:e.path,sidebarCollapsible:null===(o=null===(s=u.themeConfig)||void 0===s?void 0:s.sidebarCollapsible)||void 0===o||o,onCollapse:w,isHidden:N}),N&&r.a.createElement("div",{className:D.a.collapsedDocSidebar,title:Object(g.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(g.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:w,onClick:w},r.a.createElement(v,{className:D.a.expandSidebarButtonIcon}))),r.a.createElement("main",{className:Object(d.a)(D.a.docMainContainer,{[D.a.docMainContainerEnhanced]:y})},r.a.createElement("div",{className:Object(d.a)("container padding-vert--lg",D.a.docItemWrapper,{[D.a.docItemWrapperEnhanced]:y})},r.a.createElement(c.a,{components:A},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,c=t.find((e=>Object(M.matchPath)(n.pathname,e)));return c?r.a.createElement(R,{currentDocRoute:c,versionMetadata:a},Object(o.a)(t)):r.a.createElement(L.default,e)}},95:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(88),l=a(99),o=a(100),i=a(106),s=a(101),d=a(107),m=a(108),u=a(102);a(56);t.a=function(e){const{children:t,noFooter:a,wrapperClassName:n}=e;return Object(u.a)(),r.a.createElement(d.a,null,r.a.createElement(m.a,e),r.a.createElement(l.a,null),r.a.createElement(o.a,null),r.a.createElement(i.a,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(s.a,null))}}}]);