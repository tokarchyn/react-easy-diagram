(this["webpackJsonp@react-easy-diagram/demo"]=this["webpackJsonp@react-easy-diagram/demo"]||[]).push([[0],{60:function(t,e,n){},61:function(t,e,n){},63:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var o=n(11),r=n(0),i=n.n(r),a=n(9),s=n.n(a),c=(n(60),n(61),n(102)),u=function(t){var e=Object(r.useState)(0),n=(e[0],e[1]),o=Object(r.useState)((function(){return{value:t,facade:{get current(){return o.value},set current(t){o.value!==t&&(o.value=t,n((function(t){return t+1})))}}}}))[0];return o.facade},l=Object(c.a)((function(t){var e=t.link,n=u(null),o=e.componentDefinition.component;return i.a.createElement("g",null,i.a.createElement(o,{draggableRef:n,path:e.path,entity:e,settings:e.componentDefinition.settings}))})),h=Object(c.a)((function(t){var e=t.linksStore;return i.a.createElement("svg",null,Object.values(e.links).map((function(t){return i.a.createElement(l,{key:t.id,link:t})})),e.linkCreation.link&&i.a.createElement(l,{key:e.linkCreation.link.id,link:e.linkCreation.link}))})),d=n(23),v=function(){return Object(r.useContext)(dt)};function f(t,e,n,o){return Object(r.useMemo)((function(){return{onDrag:function(o){var r=o.pinching,i=o.delta;if(t.current&&!r){var a=n?n():1;e.setOffset([e.offset[0]+i[0]/a,e.offset[1]+i[1]/a])}},onDragStart:function(e){var n=e.event;o&&o(n)||(t.current=!0)},onDragEnd:function(){return t.current=!1}}}),[t,e,n,o])}var p="react_fast_diagram_disabled_user_select";function m(t,e){Object(r.useEffect)((function(){if(t&&e&&!e.classList.contains(p))return e.classList.add(p),function(){e.classList.remove(p)}}),[t,e])}var g=Object(c.a)((function(t){var e=t.node,n=function(t,e){var n,o,i=v().diagramState,a=u(!1),s=Object(r.useRef)(null),c=f(a,t,(function(){return i.zoom}),(function(t){return function(t,e){if("composedPath"in t)for(var n=t.composedPath(),o=0;o<n.length;o++){var r=n[o];if("classList"in r&&r.classList.contains(e))return!0}return!1}(t,"react_fast_diagram_PortWrapper")}));return Object(d.a)(c,{domTarget:s,eventOptions:{passive:!1},enabled:e}),m(a.current,null===(o=null===(n=s.current)||void 0===n?void 0:n.ownerDocument)||void 0===o?void 0:o.body),{active:a.current,userInteractionElemRef:s}}(e).userInteractionElemRef;return i.a.createElement("div",{id:e.id,className:"react_fast_diagram_NodeWrapper",style:{left:e.offset[0],top:e.offset[1]},ref:e.ref},i.a.createElement(e.componentDefinition.component,{draggableRef:n,entity:e,settings:e.componentDefinition.settings}))})),b=Object(c.a)((function(t){var e=t.nodesStore;return i.a.createElement("div",null,Object.values(e.nodes).map((function(t){return i.a.createElement(g,{key:t.id,node:t})})))})),y=function(t,e){var n="translate("+t[0]+"px, "+t[1]+"px)";return e?n+" "+("scale("+e+")"):n},O=.1,j=function(t,e,n,o,r){r=function(t,e){return e*t<O?O/e:e*t>3?3/e:t}(r,o);var i,a,s,c=t.getBoundingClientRect(),u=e[0]-c.left,l=e[1]-c.top,h=(u-n[0])*(r-1),d=(l-n[1])*(r-1);return{scale:(i=o*r,a=O,s=3,Math.min(Math.max(i,a),s)),position:[n[0]-h,n[1]-d]}};var S=function(t){return[Math.round(t[0]),Math.round(t[1])]},k=function(t,e){return[t[0]+e[0],t[1]+e[1]]};var z=function(){return(z=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},C=function(t){var e,n,o=v().diagramState,i=u(!1),a=Object(r.useRef)(null),s=Object(r.useCallback)((function(t){return t.target!==a.current}),[a]),c=f(i,o,void 0,s),l=function(t,e,n,o){var i=Object(r.useRef)({distance:0,origin:[0,0]});return Object(r.useMemo)((function(){return{onPinch:function(o){var r=o.da[0],a=o.origin;if(e.current&&t.current){var s,c,u=(s=a,c=i.current.origin,[s[0]-c[0],s[1]-c[1]]),l=r-i.current.distance,h=t.current.clientWidth*n.zoom,d=(h+l)/h,v=j(t.current,a,k(n.offset,u),n.zoom,d);i.current={distance:r,origin:a},n.setTransformation(v.position,v.scale)}},onPinchStart:function(t){var n=t.da[0],r=t.origin,a=t.event;o&&o(a)||(i.current={distance:n,origin:r},e.current=!0)},onPinchEnd:function(){return e.current=!1}}}),[t,e,n,o])}(a,i,o,s),h=function(t,e,n){return Object(r.useMemo)((function(){return{onWheel:function(e){var o=e.direction,r=(o[0],o[1]),i=e.event,a=i.clientX,s=i.clientY;if(t.current){var c=.9;r<0&&(c=1/c);var u=j(t.current,[a,s],n.offset,n.zoom,c);n.setTransformation(u.position,u.scale)}}}}),[t,e,n])}(a,i,o);return Object(d.a)(z(z(z({},c),l),h),{domTarget:a,eventOptions:{passive:!1},enabled:t}),m(i.current,null===(n=null===(e=a.current)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.body),{userInteractionElemRef:a,transform:o.transformString,active:i.current}},w=Object(c.a)((function(){var t=v(),e=t.diagramSettings,n=t.diagramState;return i.a.createElement("div",{className:"react_fast_diagram_BackgroundWrapper"},i.a.createElement(e.backgroundComponent.component,{diagramOffset:n.offset,digramZoom:n.zoom,settings:e.backgroundComponent.settings}))})),I=function(){return(I=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},_=Object(c.a)((function(t){var e=v(),n=C(),o=n.transform,r=n.userInteractionElemRef;return i.a.createElement("div",{ref:r,style:I({},t.diagramStyles),className:"react_fast_diagram_DiagramInner"},i.a.createElement(w,null),i.a.createElement("div",{className:"react_fast_diagram_DiagramInner_DraggablePart",style:{transform:o}},i.a.createElement(h,{linksStore:e.linksStore}),i.a.createElement(b,{nodesStore:e.nodesStore})))}));_.displayName="InnerDiagram";n(63);var E=function(t){var e=this;this.addNode=function(t){e.rootStore.nodesStore.addNode(t)},this.reinitState=function(t,n){e.rootStore.nodesStore.fromJson(t),e.rootStore.linksStore.fromJson(n)},this.reinitSettings=function(t){t.nodes&&e.rootStore.nodesSettings.fromJson(t.nodes),t.links&&e.rootStore.linksSettings.fromJson(t.links)},this.rootStore=t},x=n(6),P=function(){return(P=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},D=function(t){var e=t.diagramOffset,n=t.digramZoom,o=t.settings;return o=null!==o&&void 0!==o?o:J,i.a.createElement("div",{className:"react_fast_diagram_Background_Default",style:{backgroundColor:o.color,backgroundImage:o.imageCreator(100*n,100*n),backgroundPosition:e[0]+"px "+e[1]+"px"}})},J={imageCreator:function(t,e){return"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"},color:"#ececec"},R=function(){this.backgroundComponent=function(t){var e=P(P({},J),t||{});return{component:D,settings:e}}(),Object(x.c)(this)},T=function(){function t(t){var e=this;this.offset=[0,0],this.zoom=1,this.setOffset=function(t){e.offset=t},this.setTransformation=function(t,n){e.offset=t,e.zoom=n},Object(x.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"transformString",{get:function(){return y(this.offset,this.zoom)},enumerable:!1,configurable:!0}),t}(),N=function(){return(N=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},B=function(t){var e,n=null!==(e=t.settings)&&void 0!==e?e:M;return i.a.createElement("g",null,i.a.createElement("path",{ref:t.draggableRef,d:t.path,stroke:n.color,strokeWidth:n.strokeWidth,fill:"none"}),t.entity.target.hasOnlyPosition&&i.a.createElement("circle",{cx:t.entity.target.point[0]-n.cirleRadius/2,cy:t.entity.target.point[1]-n.cirleRadius/2,r:n.cirleRadius,fill:"orange"}))},M={color:"LightBlue",strokeWidth:3,cirleRadius:5};function V(t){var e=N(N({},M),t||{});return{component:B,settings:e}}var L="default",H=function(){function t(t){var e=this;this.defaultType=L,this.fromJson=function(t,n){var o;void 0===n&&(n=!0),e.defaultType=null!==(o=t.defaultNodeType)&&void 0!==o?o:L,n?e.initDefaultComponents():e.components={},e.addComponentsFromJson(t.components)},this.getComponent=function(t){var n,o=null!==t&&void 0!==t?t:e.defaultType;return null!==(n=e.components[o])&&void 0!==n?n:e.components[e.defaultType]},this.defaultComponents=t,this.initDefaultComponents(),Object(x.c)(this)}return t.prototype.initDefaultComponents=function(){this.components={},this.addComponentsFromJson(this.defaultComponents)},t.prototype.addComponentsFromJson=function(t){var e=this;Object.entries(t).forEach((function(t){var n=t[0],o=t[1];e.components[n]="component"in o?{component:Object(c.a)(o.component),settings:o.settings}:{component:Object(c.a)(o)}}))},t}(),W=function(){return(W=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function F(t,e,n,o,r){if(!t||!e)return"";t=S(t),e=S(e);var i,a,s=t[0]+", "+t[1],c=e[0]+", "+e[1],u=r.tweakDirectionFactorBasedOnDistance((i=t,a=e,Math.sqrt(Math.pow(i[0]-a[0],2)+Math.pow(i[1]-a[1],2))),r.directionFactor);function l(t,e){switch(e&&r.portTypeToLinkDirectionMapping[e]){case"left":return t[0]-u+", "+t[1];case"up":return t[0]+", "+(t[1]-u);case"right":return t[0]+u+", "+t[1];case"down":return t[0]+", "+(t[1]+u);default:return t[0]+", "+t[1]}}return n||o?"M "+s+" C "+l(t,n)+" "+l(e,o)+", "+c:"M "+s+" Q "+e[0]+", "+t[1]+", "+c}var A={portTypeToLinkDirectionMapping:{left:"left",right:"right",top:"up",bottom:"down"},directionFactor:60,tweakDirectionFactorBasedOnDistance:function(t,e){return t<100?e*(t/100):e}};function Z(t){return function(e,n,o,r){return F(e,n,o,r,t?W(W({},A),t):A)}}var q=function(){var t,e=this;this.pathConstructor=Z(),this.visualComponents=new H(((t={}).default=B,t)),this.fromJson=function(t){e.visualComponents.fromJson(t),e.pathConstructor=t.pathConstructor},Object(x.c)(this)},G=n(104),Q=function(){function t(t){var e=this;this.position=null,this.nodeId=null,this.portId=null,this.fromJson=function(t){var n;"position"in t?(e.position=t.position,e.nodeId=null,e.portId=null):(e.position=null,e.nodeId=t.nodeId,e.portId=null!==(n=t.portId)&&void 0!==n?n:null)},Object(x.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"port",{get:function(){if(this.nodeId&&this.portId){var t=this.rootStore.nodesStore.nodes[this.nodeId];if(null===t||void 0===t?void 0:t.ports)return t.ports[this.portId]}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"point",{get:function(){var t,e,n;if(this.nodeId){var o=this.rootStore.nodesStore.nodes[this.nodeId],r=o.ref.getBoundingClientRect(this.rootStore.diagramState.zoom),i=void 0;if(this.portId&&(i=o.ports[this.portId].ref.getBoundingClientRect(this.rootStore.diagramState.zoom)),r&&i){var a=[r.left-i.left,r.top-i.top];e=a,n=-1/this.rootStore.diagramState.zoom,a=[e[0]*n,e[1]*n];var s=k(o.offset,a);return s=k(s,[i.width/2,i.height/2])}return r?[o.offset[0]+r.width/2,o.offset[1]+r.height/2]:o.offset}return null!==(t=this.position)&&void 0!==t?t:[0,0]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasOnlyPosition",{get:function(){return!!this.position&&!this.nodeId},enumerable:!1,configurable:!0}),t}(),X=function(){function t(t,e){var n=this;void 0===e&&(e=Object(G.a)()),this.componentType=L,this.segments=[],this.extra=null,this.fromJson=function(t){var e;n.componentType=null!==(e=t.componentType)&&void 0!==e?e:L,n.source.fromJson(t.source),n.target.fromJson(t.target),n.segments=t.segments,n.extra=t.extra},this.id=e,this.source=new Q(t),this.target=new Q(t),Object(x.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"path",{get:function(){var t,e;return this.rootStore.linksSettings.pathConstructor(this.source.point,this.target.point,null===(t=this.source.port)||void 0===t?void 0:t.type,null===(e=this.target.port)||void 0===e?void 0:e.type)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"componentDefinition",{get:function(){return this.rootStore.linksSettings.visualComponents.getComponent(this.componentType)},enumerable:!1,configurable:!0}),t.prototype.setSource=function(t){this.source.fromJson(t)},t.prototype.setTarget=function(t){this.target.fromJson(t)},t}(),Y=function(){function t(t){this.link=null,this.targetPortCandidate=null,Object(x.c)(this,{link:x.d,targetPortCandidate:x.d}),this.rootStore=t}return t.prototype.startLinking=function(t){this.link=new X(this.rootStore),this.link.setSource({nodeId:t.nodeId,portId:t.id}),this.link.setTarget({position:this.link.source.point})},t.prototype.setTargetPortCandidate=function(t){var e;(null===(e=this.link)||void 0===e?void 0:e.source)&&"portId"in this.link.source&&this.link.source.nodeId!==t.nodeId&&(this.targetPortCandidate=t)},t.prototype.resetTargetPortCandidate=function(){this.targetPortCandidate=null},t.prototype.stopLinking=function(){this.targetPortCandidate&&this.link&&(this.link.setTarget({nodeId:this.targetPortCandidate.nodeId,portId:this.targetPortCandidate.id}),this.rootStore.linksStore.addLink(this.link)),this.targetPortCandidate=null,this.link=null},t}(),K=function(t){var e=this;this.links={},this.fromJson=function(t){e.links={},t&&t.forEach((function(t){var n=new X(e.rootStore,t.id);n.fromJson(t),e.links[n.id]=n}))},this.addLinkFromJson=function(t){var n,o=null!==(n=t.id)&&void 0!==n?n:Object(G.a)();e.links[o]||(e.links[o]=new X(e.rootStore,o)),e.links[o].fromJson(t)},this.addLink=function(t){e.links[t.id]=t},this.linkCreation=new Y(t),Object(x.c)(this),this.rootStore=t},U=function(t){var e=t.entity,n=t.settings,o=t.draggableRef,r=v().portsSettings;return i.a.createElement("div",{ref:o,className:"react_fast_diagram_Node_Default",style:null===n||void 0===n?void 0:n.style},i.a.createElement("span",null,e.id),$(r,e.ports,"left","left"),$(r,e.ports,"top","top"),$(r,e.ports,"right","right"),$(r,e.ports,"bottom","bottom"))};function $(t,e,n,o){var r=Object.values(e).filter((function(t){return t.type===n})),a=t.portsContainerVisualComponents.getComponent("left"===o||"right"===o?"vertical":"horizontal");return r&&i.a.createElement("div",{style:{position:"absolute",left:"left"===o?0:void 0,top:"top"===o?0:void 0,right:"right"===o?0:void 0,bottom:"bottom"===o?0:void 0,height:"left"===o||"right"===o?"100%":void 0}},i.a.createElement(a.component,{entity:r,settings:a.settings}))}var tt=function(){var t,e=this;this.visualComponents=new H(((t={}).default=U,t)),this.fromJson=function(t){e.visualComponents.fromJson(t)},Object(x.c)(this)},et=function(){function t(t){this.currentInternal=t,Object(x.c)(this)}return Object.defineProperty(t.prototype,"current",{get:function(){return this.currentInternal},set:function(t){this.currentInternal=t},enumerable:!1,configurable:!0}),t.prototype.getBoundingClientRect=function(t){var e,n=null===(e=this.current)||void 0===e?void 0:e.getBoundingClientRect();if(n){var o=n.toJSON();return o.width/=t,o.height/=t,o}},t}(),nt=function(t,e){var n=this;void 0===t&&(t=Object(G.a)()),void 0===e&&(e=Object(G.a)()),this.id="",this.nodeId="",this.label="",this.type="",this.fromJson=function(t){var e;n.type=null!==(e=t.type)&&void 0!==e?e:L,n.label=t.label},this.id=t,this.nodeId=e,this.ref=new et(null),Object(x.c)(this)},ot=function(){function t(t,e){var n=this;void 0===e&&(e=Object(G.a)()),this.id="",this.offset=[0,0],this.ports={},this.componentType=L,this.extra=null,this.setOffset=function(t){n.offset=t},this.fromJson=function(t){var e;n.offset=t.position,n.componentType=null!==(e=t.componentType)&&void 0!==e?e:L,n.extra=t.extra,n.ports={},t.ports&&Object.keys(t.ports).length>0&&Object.entries(t.ports).forEach((function(t){var e=t[0],o=t[1],r=new nt(e,n.id);r.fromJson(o),n.ports[e]=r}))},this.id=e,this.ref=new et(null),Object(x.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"transformString",{get:function(){return y(this.offset)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"componentDefinition",{get:function(){return this.rootStore.nodesSettings.visualComponents.getComponent(this.componentType)},enumerable:!1,configurable:!0}),t}(),rt=function(t){var e=this;this.nodes={},this.fromJson=function(t){e.nodes={},t&&t.forEach((function(t){var n=new ot(e.rootStore,t.id);n.fromJson(t),e.nodes[n.id]=n}))},this.addNode=function(t){var n,o=null!==(n=t.id)&&void 0!==n?n:Object(G.a)();e.nodes[o]||(e.nodes[o]=new ot(e.rootStore,o)),e.nodes[o].fromJson(t)},Object(x.c)(this),this.rootStore=t},it=Object(c.a)((function(t){var e=t.port,n=function(t,e){var n,o,i=v(),a=i.linksStore.linkCreation,s=i.diagramState,c=i.nodesStore,l=u(!1),h=Object(r.useRef)(null);return Object(d.a)({onDrag:function(t){var e=t.pinching,n=t.delta;if(l.current&&!e&&a.link){var o=s.zoom;a.link.setTarget({position:[a.link.target.point[0]+n[0]/o,a.link.target.point[1]+n[1]/o]})}},onDragStart:function(e){var n,o=e.event,r=c.nodes[t.nodeId].ref.getBoundingClientRect(s.zoom),i=o.target,u=null===(n=o.target)||void 0===n?void 0:n.getBoundingClientRect();i.releasePointerCapture(o.pointerId),r&&u&&(l.current=!0,a.startLinking(t))},onDragEnd:function(){l.current=!1,a.stopLinking()},onPointerEnter:function(){a.setTargetPortCandidate(t)}},{domTarget:h,eventOptions:{passive:!1},enabled:e}),m(l.current,null===(o=null===(n=h.current)||void 0===n?void 0:n.ownerDocument)||void 0===o?void 0:o.body),{active:l.current,userInteractionElemRef:h}}(e).userInteractionElemRef;return i.a.createElement("div",{ref:{set current(t){n.current=t,e.ref.current=t}},className:"react_fast_diagram_PortWrapper"},i.a.createElement("div",{style:{width:10,height:10,backgroundColor:"green"}}))})),at=function(){return(at=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},st=function(t){var e=t.entity,n=t.settings,o=at(at({},ut),n),r="react_fast_diagram_PortContainer_Default ";return"horizontal"===o.direction?r+="react_fast_diagram_PortContainer_Default_Horizontal":r+="react_fast_diagram_PortContainer_Default_Vertical",i.a.createElement("div",{className:r,style:{"--flex-gap":o.gapBetweenPorts}},Object.values(e).map((function(t){return i.a.createElement(it,{key:t.id,port:t})})))};function ct(t){return{component:st,settings:at(at({},ut),t)}}var ut={direction:"horizontal",gapBetweenPorts:8},lt=function(){var t=this;this.portsContainerVisualComponents=new H({horizontal:ct({direction:"horizontal"}),vertical:ct({direction:"vertical"})}),this.fromJson=function(e){t.portsContainerVisualComponents.fromJson(e)},Object(x.c)(this)},ht=function(){this.diagramState=new T(this),this.nodesStore=new rt(this),this.linksStore=new K(this),this.diagramSettings=new R,this.nodesSettings=new tt,this.linksSettings=new q,this.portsSettings=new lt,this.diagramApi=new E(this)},dt=i.a.createContext(null),vt=function(t){var e=Object(r.useMemo)((function(){var e,n,o,r,i=new ht;return i.diagramApi.reinitState(null!==(n=null===(e=t.initState)||void 0===e?void 0:e.nodes)&&void 0!==n?n:[],null!==(r=null===(o=t.initState)||void 0===o?void 0:o.links)&&void 0!==r?r:[]),t.settings&&i.diagramApi.reinitSettings(t.settings),i}),[]);return Object(r.useEffect)((function(){t.apiRef&&(t.apiRef.current=e.diagramApi)}),[e,t.apiRef]),i.a.createElement(dt.Provider,{value:e},i.a.createElement(_,null))};vt.displayName="Diagram";var ft=n(94),pt=n(101),mt=n(36),gt=n(105),bt=n(96),yt=n(103),Ot=n(99),jt=n(100),St=Object(ft.a)((function(){return{form:{display:"flex",flexDirection:"column",margin:"-8px 0","& > *":{margin:"8px 0"}},visibilityBtn:{borderRadius:"25px",minWidth:"24px",padding:"8px 8px",backgroundColor:"white"},header:{marginBottom:"15px",display:"flex",alignItems:"center",margin:"0 -14px","& > *":{margin:"0 14px"}}}})),kt=function(t){var e=St(),n=Object(r.useState)(10),i=Object(mt.a)(n,2),a=i[0],s=i[1],c=Object(r.useState)(10),u=Object(mt.a)(c,2),l=u[0],h=u[1],d=Object(r.useState)(!0),v=Object(mt.a)(d,2),f=v[0],p=v[1];return f?Object(o.jsx)(pt.a,{padding:3,clone:!0,children:Object(o.jsxs)(bt.a,{children:[Object(o.jsxs)("div",{className:e.header,children:[Object(o.jsx)(yt.a,{className:e.visibilityBtn,variant:"outlined","aria-label":"control-panel",onClick:function(){return p(!1)},children:Object(o.jsx)(gt.a,{})}),Object(o.jsx)(Ot.a,{variant:"h5",children:"Control Panel"})]}),Object(o.jsxs)("form",{className:e.form,noValidate:!0,autoComplete:"off",onSubmit:function(e){if(e.preventDefault(),t.reinitState){var n=function(t,e){for(var n=[],o=[],r=function(t,e){return"node_".concat(t,"_").concat(e)},i=0;i<t;i++)for(var a=0;a<e;a++)n.push({id:r(i,a),position:[120*i,120*a],ports:{left:{type:"left"},top:{type:"top"},right:{type:"right"},bottom:{type:"bottom"}}}),i-1>=0&&o.push({source:{nodeId:r(i-1,a),portId:"right"},target:{nodeId:r(i,a),portId:"left"}}),a-1>=0&&o.push({source:{nodeId:r(i,a-1),portId:"bottom"},target:{nodeId:r(i,a),portId:"top"}});return{nodes:n,links:o}}(a,l);t.reinitState(n.nodes,n.links)}},children:[Object(o.jsx)(jt.a,{id:"rows",value:a,type:"number",label:"Rows",variant:"outlined",onChange:function(t){return s(parseInt(t.target.value))}}),Object(o.jsx)(jt.a,{id:"columns",value:l,type:"number",label:"Columns",variant:"outlined",onChange:function(t){return h(parseInt(t.target.value))}}),Object(o.jsx)(yt.a,{variant:"contained",type:"submit",children:"Generate new Diagram"})]})]})}):Object(o.jsx)(yt.a,{variant:"outlined",className:e.visibilityBtn,"aria-label":"control-panel",onClick:function(){return p(!0)},children:Object(o.jsx)(gt.a,{})})},zt=Object(ft.a)((function(){return{diagram:{height:"100vh",width:"100vw"},controlPanel:{position:"absolute",top:"20px",left:"20px"}}})),Ct=function(){var t,e=zt(),n=function(t,e){var n=u(null);return Object(r.useMemo)((function(){return{Diagram:function(){return i.a.createElement(vt,{apiRef:n,initState:t,settings:e})},apiRef:n}}),[])}(wt,{links:{components:{default:V(),attention:V({color:"red"})},pathConstructor:Z()}}),a=n.Diagram,s=n.apiRef;return Object(o.jsxs)(pt.a,{className:e.diagram,children:[Object(o.jsx)(a,{}),Object(o.jsx)(pt.a,{className:e.controlPanel,children:Object(o.jsx)(kt,{reinitState:null===(t=s.current)||void 0===t?void 0:t.reinitState})})]})},wt={nodes:[{id:"Node 1",position:[300,300],ports:{output_1:{type:"bottom"}}},{id:"Node 2",position:[520,400],ports:{input_1:{type:"top"},input_2:{type:"top"},output_1:{type:"right"},output_2:{type:"right"},output_3:{type:"right"}}},{id:"Node 3",position:[520,200],ports:{input_1:{type:"top"},output_1:{type:"bottom"},output_2:{type:"bottom"}}}],links:[{source:{nodeId:"Node 2"},target:{nodeId:"Node 1"},componentType:"attention"}]};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(Ct,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.fe535aaf.chunk.js.map