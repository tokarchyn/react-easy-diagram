(this["webpackJsonp@react-easy-diagram/demo"]=this["webpackJsonp@react-easy-diagram/demo"]||[]).push([[0],{63:function(t,e,n){},64:function(t,e,n){},66:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var r=n(12),o=n(0),a=n.n(o),i=n(9),c=n.n(i),u=(n(63),n(64),n(5)),v="reactEasyDiagram",s=Object(u.c)({key:v+"_LinksIds",default:[]}),h=Object(u.d)({key:v+"_Link",default:function(t){return{id:t,type:l}}}),l="default",f=function(){return(f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},d=Object(o.forwardRef)((function(t,e){var n=f({color:"LightBlue",strokeWidth:3},t.settings?t.settings:{});return a.a.createElement("path",{ref:e,d:t.path,stroke:n.color,strokeWidth:n.strokeWidth,fill:"none"})}));function m(t){return{component:d,settings:t}}var p=function(t,e){var n="translate("+t.x+"px, "+t.y+"px)";return e?n+" "+("scale("+e+")"):n},b=.1,g=function(t,e,n,r,o){o=function(t,e){return e*t<b?b/e:e*t>2?2/e:t}(o,r);var a,i,c,u=t.getBoundingClientRect(),v=e.x-u.left,s=e.y-u.top,h=(v-n.x)*(o-1),l=(s-n.y)*(o-1);return{scale:(a=r*o,i=b,c=2,Math.min(Math.max(a,i),c)),position:{x:n.x-h,y:n.y-l}}};var j=function(t){return{x:Math.round(t.x),y:Math.round(t.y)}},y=function(t,e){return{x:t.x+e.x,y:t.y+e.y}},O=function(t,e){return t===e||t&&e&&t.x===e.x&&t.y===e.y},z=function(t,e){return t===e||t&&e&&t.scale===e.scale&&O(t.position,e.position)};function x(t){return"node"in t?function(t){var e,n,r=null===(n=null===(e=t.node)||void 0===e?void 0:e.ref)||void 0===n?void 0:n.current;return r?{x:t.node.position.x+(r.clientWidth?r.clientWidth/2:0),y:t.node.position.y+(r.clientHeight?r.clientHeight/2:0)}:t.node.position}(t):t.position}var k=function(){return(k=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var E={};function C(t){return function(e){return function(t,e){var n=x(t.source),r=x(t.target);return _(n,r)}(e,t&&k(k({},E),t))}}var _=function(t,e){if(!t||!e)return"";var n=j(t),r=j(e),o=n.x+", "+n.y,a=r.x+", "+r.y;return"M "+o+" Q "+(r.x+", "+n.y)+", "+a},N=Object(u.c)({key:v+"_LinksSettings",default:{defaultLinkType:l,linkComponents:{default:d},pathConstructor:C()}}),w=Object(u.f)({key:v+"_LinkComponentDefinition",get:function(t){return function(e){var n=(0,e.get)(N),r=(t=null!==t&&void 0!==t?t:l)in n.linkComponents?n.linkComponents[t]:n.linkComponents[l];return"component"in r?r:{component:r}}}}),I=Object(u.e)({key:v+"_LinkPathContructor",get:function(t){var e=t.get;return e(N).pathConstructor}}),S=Object(o.forwardRef)((function(t,e){var n;return a.a.createElement("div",{ref:e,className:"react_fast_diagram_Node_Default",style:null===(n=t.settings)||void 0===n?void 0:n.style},a.a.createElement("span",null,t.node.id))}));var D=Object(u.c)({key:v+"_NodesSettings",default:{defaultNodeType:R,nodeComponents:{default:S}}}),L=Object(u.f)({key:v+"_NodeComponentDefinition",get:function(t){return function(e){var n=(0,e.get)(D),r=(t=null!==t&&void 0!==t?t:R)in n.nodeComponents?n.nodeComponents[t]:n.nodeComponents[R];return"component"in r?r:{component:r}}}}),P=Object(u.c)({key:v+"_NodesIds",default:[]}),R="default",H=Object(u.d)({key:v+"_Node",default:function(t){return{id:t,position:{x:0,y:0},type:R}}}),M=function(t){return Object(u.h)(H(t))},V=function(t){var e=function(t){return Object(u.h)(h(t))}(t),n=e[0],r=e[1];return[{link:n,source:{node:M(W(n.source))[0]},target:{node:M(W(n.target))[0]}},r]},W=function(t){return t&&"nodeId"in t?t.nodeId:""},B=function(t){var e=Object(o.useState)(0),n=(e[0],e[1]),r=Object(o.useState)((function(){return{value:t,facade:{get current(){return r.value},set current(t){r.value!==t&&(r.value=t,n((function(t){return t+1})))}}}}))[0];return r.facade},T=a.a.memo((function(t){var e=t.id,n=V(e)[0],r=Object(u.i)(I)(n),o=Object(u.i)(w(n.link.type)),i=B(null);return a.a.createElement("g",null,a.a.createElement(o.component,{ref:i,path:r,settings:o.settings}))})),A=a.a.memo((function(){var t=Object(u.h)(s)[0];return a.a.createElement("svg",null,t.map((function(t){return a.a.createElement(T,{key:t,id:t})})))})),J=n(35),G=Object(u.c)({key:v+"_DiagramTranslate",default:{x:0,y:0}}),Q=Object(u.c)({key:v+"_DiagramScale",default:1}),X=Object(u.e)({key:v+"_DiagramTransformation",get:function(t){var e=t.get;return{scale:e(Q),position:e(G)}},set:function(t,e){var n=t.set;e instanceof u.a||(n(Q,e.scale),n(G,e.position))}}),Y=Object(u.c)({key:v+"_CommonSettings",default:{readonly:!1}});var q="react_fast_diagram_disabled_user_select";function F(t,e){Object(o.useEffect)((function(){if(t&&e&&!e.classList.contains(q))return e.classList.add(q),function(){e.classList.remove(q)}}),[t,e])}function K(t,e,n,r){return Object(o.useMemo)((function(){return{onDrag:function(r){var o=r.pinching,a=r.delta;if(t.current&&!o){var i=n?n():1;"scale"in e.current?e.current={scale:e.current.scale,position:{x:e.current.position.x+a[0]/i,y:e.current.position.y+a[1]/i}}:e.current={x:e.current.x+a[0]/i,y:e.current.y+a[1]/i}}},onDragStart:function(e){var n=e.event;r&&r(n)||(t.current=!0)},onDragEnd:function(){return t.current=!1}}}),[t,e,n,r])}var U=function(){return(U=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},Z=function(t,e,n){var r,a,i,c,v,s,h=B(t.position),l=B(!1),f=Object(o.useRef)(null),d=Object(u.g)((function(t){var e=t.snapshot;return function(){var t=e.getLoadable(Q).contents;return"number"===typeof t?t:1}})),m=Object(o.useCallback)((function(t){e((function(e){var n=t(e.position);return e.position!==n?U(U({},e),{position:n}):e}))}),[e]);i=l.current,c=h,v=t.position,s=m,Object(o.useEffect)((function(){i?s((function(t){return O(c.current,t)?t:c.current})):O(c.current,v)||(c.current=v)}),[i,c,c.current,v,s]);var b=K(l,h,d);return Object(J.a)(b,{domTarget:f,eventOptions:{passive:!1},enabled:n}),F(l.current,null===(a=null===(r=f.current)||void 0===r?void 0:r.ownerDocument)||void 0===a?void 0:a.body),{transform:p(h.current),active:l.current,userInteractionElemRef:f}},$=function(){return($=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},tt=a.a.memo((function(t){var e,n=M(t.id),r=n[0],i=n[1],c=Object(u.i)(L(null!==(e=r.type)&&void 0!==e?e:R)),v=function(t,e){var n=B(null);return Object(o.useEffect)((function(){e((function(t){return t.ref!==n?$($({},t),{ref:n}):t}))}),[n,t.ref]),n}(r,i),s=Z(r,i),h=s.transform,l=s.userInteractionElemRef;return a.a.createElement("div",{id:r.id,className:"react_fast_diagram_NodeWrapper",style:{transform:h},ref:v},a.a.createElement(c.component,{ref:l,node:r,setNode:i,settings:c.settings}))}));var et=a.a.memo((function(){var t=Object(u.h)(P)[0];return a.a.createElement("div",null,t.map((function(t){return a.a.createElement(tt,{key:t,id:t})})))})),nt=n(107),rt=function(){return(rt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function ot(t,e,n){!function(t,e){if(!e)return;e.common&&t.set(Y,e.common);if(e.nodes){"defaultNodeType"in(n=t.getLoadable(D)).contents&&t.set(D,rt(rt({},n.contents),e.nodes))}if(e.links){var n;"defaultLinkType"in(n=t.getLoadable(N)).contents&&t.set(N,rt(rt({},n.contents),e.links))}}(t,e),at(t,n)}function at(t,e){e&&(function(t,e){e.forEach((function(e){t.set(H(e.id),e)})),t.set(P,e.map((function(t){return t.id})))}(t,e.nodes),function(t,e){var n=[];e.forEach((function(e){var r,o=rt({type:l,id:null!==(r=e.id)&&void 0!==r?r:Object(nt.a)()},e);n.push(o.id),t.set(h(o.id),o)})),t.set(s,n)}(t,e.links))}var it=function(){return(it=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},ct=function(t){var e,n,r,a,i,c,v=Object(u.h)(X),s=v[0],h=v[1],l=B({scale:s.scale,position:s.position}),f=B(!1),d=Object(o.useRef)(null);r=f.current,a=l,i=s,c=h,Object(o.useEffect)((function(){r?c((function(t){return z(t,a.current)?t:a.current})):z(a.current,i)||(a.current={scale:i.scale,position:i.position})}),[r,a.current,i,c]);var m=Object(o.useCallback)((function(t){return t.target!==d.current}),[d]),b=K(f,l,void 0,m),j=function(t,e,n,r){var a=Object(o.useRef)({distance:0,origin:[0,0]});return Object(o.useMemo)((function(){return{onPinch:function(r){var o=r.da[0],i=r.origin;if(e.current){var c={x:i[0]-a.current.origin[0],y:i[1]-a.current.origin[1]},u=o-a.current.distance;if(Math.abs(u)>1&&t.current){var v=t.current.clientWidth*n.current.scale,s=(v+u)/v,h=g(t.current,{x:i[0],y:i[1]},y(n.current.position,c),n.current.scale,s);a.current={distance:o,origin:i},n.current=h}else a.current={distance:a.current.distance,origin:i},n.current={scale:n.current.scale,position:y(n.current.position,c)}}},onPinchStart:function(t){var n=t.da[0],o=t.origin,i=t.event;r&&r(i)||(a.current={distance:n,origin:o},e.current=!0)},onPinchEnd:function(){return e.current=!1}}}),[t,e,n,r])}(d,f,l,m),O=function(t,e,n,r){return Object(o.useMemo)((function(){return{onWheel:function(e){var o=e.direction,a=(o[0],o[1]),i=e.event,c=i.clientX,u=i.clientY;if(t.current){var v=.9;a<0&&(v=1/v);var s=g(t.current,{x:c,y:u},n.current.position,n.current.scale,v);r(s)}}}}),[t,e,n,r])}(d,f,l,h);return Object(J.a)(it(it(it({},b),j),O),{domTarget:d,eventOptions:{passive:!1},enabled:t}),F(f.current,null===(n=null===(e=d.current)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.body),{userInteractionElemRef:d,transform:p(l.current.position,l.current.scale),active:f.current}};var ut=function(){return(ut=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},vt=Object(o.forwardRef)((function(t,e){var n=ct(),r=n.transform,i=n.userInteractionElemRef,c=Object(u.g)((function(t){var e=t.set;return function(t){e(H(t.id),t),e(P,(function(e){return e.concat([t.id])}))}})),v=Object(u.g)((function(t){var e=t.snapshot,n=t.gotoSnapshot;return function(t){n(e.map((function(e){var n=e.getLoadable(P).contents;Array.isArray(n)&&n.forEach((function(t){return e.reset(H(t))}));var r=e.getLoadable(s).contents;Array.isArray(r)&&r.forEach((function(t){return e.reset(h(t))})),at(e,t)})))}}));return Object(o.useImperativeHandle)(e,(function(){return{addNode:c,setState:v}}),[]),a.a.createElement("div",{ref:i,style:ut({touchAction:"none"},t.diagramStyles),className:"react_fast_diagram_DiagramInner"},a.a.createElement("div",{className:"react_fast_diagram_DiagramInner_DraggablePart",style:{transform:r}},a.a.createElement(A,null),a.a.createElement(et,null)))}));vt.displayName="InnerDiagram";n(66);var st=Object(o.forwardRef)((function(t,e){var n=Object(o.useCallback)((function(e){return ot(e,t.settings,t.initState)}),[]);return a.a.createElement(u.b,{initializeState:n},a.a.createElement(vt,{ref:e}))}));st.displayName="Diagram";var ht=n(98),lt=n(105),ft=n(4),dt=n(108),mt=n(100),pt=n(106),bt=n(103),gt=n(104),jt=Object(ht.a)((function(){return{form:{display:"flex",flexDirection:"column",gap:"7px"},visibilityBtn:{borderRadius:"25px",minWidth:"24px",padding:"8px 8px",backgroundColor:"white"},header:{marginBottom:"15px",display:"flex",alignItems:"center",gap:"14px"}}})),yt=function(t){var e=jt(),n=Object(o.useState)(10),a=Object(ft.a)(n,2),i=a[0],c=a[1],u=Object(o.useState)(10),v=Object(ft.a)(u,2),s=v[0],h=v[1],l=Object(o.useState)(!0),f=Object(ft.a)(l,2),d=f[0],m=f[1];return d?Object(r.jsx)(lt.a,{padding:3,clone:!0,children:Object(r.jsxs)(mt.a,{children:[Object(r.jsxs)("div",{className:e.header,children:[Object(r.jsx)(pt.a,{className:e.visibilityBtn,variant:"outlined","aria-label":"control-panel",onClick:function(){return m(!1)},children:Object(r.jsx)(dt.a,{})}),Object(r.jsx)(bt.a,{variant:"h5",children:"Control Panel"})]}),Object(r.jsxs)("form",{className:e.form,noValidate:!0,autoComplete:"off",onSubmit:function(e){t.reinitState&&t.reinitState(function(t,e){for(var n=[],r=[],o=function(t,e){return"node_".concat(t,"_").concat(e)},a=0;a<t;a++)for(var i=0;i<e;i++)n.push({id:o(a,i),position:{x:120*a,y:120*i}}),a-1>=0&&r.push({source:{nodeId:o(a-1,i)},target:{nodeId:o(a,i)}}),i-1>=0&&r.push({source:{nodeId:o(a,i-1)},target:{nodeId:o(a,i)}});return{nodes:n,links:r}}(i,s)),e.preventDefault(),e.stopPropagation()},children:[Object(r.jsx)(gt.a,{id:"rows",value:i,type:"number",label:"Rows",variant:"outlined",onChange:function(t){return c(parseInt(t.target.value))}}),Object(r.jsx)(gt.a,{id:"columns",value:s,type:"number",label:"Columns",variant:"outlined",onChange:function(t){return h(parseInt(t.target.value))}}),Object(r.jsx)(pt.a,{variant:"contained",type:"submit",children:"Generate new Diagram"})]})]})}):Object(r.jsx)(pt.a,{variant:"outlined",className:e.visibilityBtn,"aria-label":"control-panel",onClick:function(){return m(!0)},children:Object(r.jsx)(dt.a,{})})},Ot=Object(ht.a)((function(){return{diagram:{height:"100vh",width:"100vw",backgroundColor:"#dbdbdb",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"},controlPanel:{position:"absolute",top:"20px",left:"20px"}}})),zt=function(){var t,e=Ot(),n=function(t,e){var n=B(null);return Object(o.useMemo)((function(){return{Diagram:function(){return a.a.createElement(st,{ref:n,initState:e,settings:t})},apiRef:n}}),[])}({links:{linkComponents:{default:m(),attention:m({color:"red"})},pathConstructor:C()}},xt),i=n.Diagram,c=n.apiRef;return Object(r.jsxs)(lt.a,{className:e.diagram,children:[Object(r.jsx)(i,{}),Object(r.jsx)(lt.a,{className:e.controlPanel,children:Object(r.jsx)(yt,{reinitState:null===(t=c.current)||void 0===t?void 0:t.setState})})]})},xt={nodes:[{id:"Node 1",position:{x:300,y:300}},{id:"Node 2",position:{x:520,y:400}},{id:"Node 3",position:{x:520,y:200}}],links:[{source:{nodeId:"Node 2"},target:{nodeId:"Node 1"},type:"attention"},{source:{nodeId:"Node 2"},target:{nodeId:"Node 3"}}]};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(zt,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.7efae071.chunk.js.map