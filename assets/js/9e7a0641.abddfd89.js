(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Example; });

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/pages/examples/_exampleWrapper.jsx
var _exampleWrapper = __webpack_require__(95);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-live-codeblock/src/theme/CodeBlock/index.js + 9 modules
var CodeBlock = __webpack_require__(92);

// EXTERNAL MODULE: ./src/pages/examples/_diagramContainer.jsx
var _diagramContainer = __webpack_require__(96);

// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_configureDefaultPortDiagram.tsx
/* harmony default export */ var _configureDefaultPortDiagram = ("import React from 'react';\r\nimport {\r\n  createPortInnerDefault,\r\n  Diagram,\r\n} from '@react-easy-diagram/core';\r\n\r\nexport default () => (\r\n  <Diagram\r\n    initState={{\r\n      nodes: [\r\n        {\r\n          id: 'Node 1',\r\n          position: [100, 100],\r\n          ports: [{ id: 'port', type: 'right' }],\r\n        },\r\n        {\r\n          id: 'Node 2',\r\n          position: [420, 300],\r\n          ports: [\r\n            { id: 'port_1', type: 'left' },\r\n            { id: 'port_2', type: 'right' },\r\n          ],\r\n        },\r\n      ],\r\n      links: [\r\n        {\r\n          source: { nodeId: 'Node 1', portId: 'port' },\r\n          target: { nodeId: 'Node 2', portId: 'port_1' },\r\n        },\r\n      ],\r\n    }}\r\n    settings={{\r\n      ports: {\r\n        portComponents: {\r\n          default: createPortInnerDefault({\r\n            size: [10, 10],\r\n            color: '#6eb7ff',\r\n            dragColor: '#49f860',\r\n            hoverColor: '#49f860',\r\n            invalidColor: '#fa4040',\r\n          }),\r\n          left: createPortInnerDefault({\r\n            size: [7, 15],\r\n          }),\r\n        },\r\n      },\r\n    }}\r\n  />\r\n);\r\n");
// EXTERNAL MODULE: ../lib_core/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(93);

// CONCATENATED MODULE: ./src/pages/examples/_configureDefaultPortDiagram.tsx
/* harmony default export */ var examples_configureDefaultPortDiagram = (function(){return/*#__PURE__*/react_default.a.createElement(index_esm["Diagram"],{initState:{nodes:[{id:'Node 1',position:[100,100],ports:[{id:'port',type:'right'}]},{id:'Node 2',position:[420,300],ports:[{id:'port_1',type:'left'},{id:'port_2',type:'right'}]}],links:[{source:{nodeId:'Node 1',portId:'port'},target:{nodeId:'Node 2',portId:'port_1'}}]},settings:{ports:{portComponents:{default:Object(index_esm["createPortInnerDefault"])({size:[10,10],color:'#6eb7ff',dragColor:'#49f860',hoverColor:'#49f860',invalidColor:'#fa4040'}),left:Object(index_esm["createPortInnerDefault"])({size:[7,15]})}}}});});
// CONCATENATED MODULE: ./src/pages/examples/configureDefaultPort.jsx
function Example(){return/*#__PURE__*/react_default.a.createElement(_exampleWrapper["a" /* ExampleWrapper */],{title:"Configure Default Port Example"},/*#__PURE__*/react_default.a.createElement(_diagramContainer["a" /* DiagramContainer */],null,/*#__PURE__*/react_default.a.createElement(examples_configureDefaultPortDiagram,null)),/*#__PURE__*/react_default.a.createElement(CodeBlock["a" /* default */],{className:"language-jsx"},_configureDefaultPortDiagram));}

/***/ })

}]);