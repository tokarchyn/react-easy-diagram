(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 85:
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
var _exampleWrapper = __webpack_require__(96);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-live-codeblock/src/theme/CodeBlock/index.js + 9 modules
var CodeBlock = __webpack_require__(94);

// EXTERNAL MODULE: ./src/pages/examples/_diagramContainer.jsx
var _diagramContainer = __webpack_require__(97);

// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_basicDiagram.tsx
/* harmony default export */ var _basicDiagram = ("import React from 'react';\r\nimport {\r\n  createCurvedLinkPathConstructor,\r\n  createDefaultMiniControl,\r\n  createLinkDefault,\r\n  Diagram,\r\n} from '@react-easy-diagram/core';\r\n\r\nexport default function () {\r\n  return (\r\n    <Diagram\r\n      initState={{\r\n        nodes: [\r\n          {\r\n            id: 'node_1',\r\n            label: 'Node 1',\r\n            position: [300, 300],\r\n            ports: [{ id: 'output_1', type: 'bottom' }],\r\n          },\r\n          {\r\n            id: 'node_2',\r\n            label: 'Node 2',\r\n            position: [520, 400],\r\n            ports: [\r\n              { id: 'input_1', type: 'top' },\r\n              { id: 'input_2', type: 'top' },\r\n              { id: 'output_1', type: 'right' },\r\n              { id: 'output_2', type: 'right' },\r\n              { id: 'output_3', type: 'right' },\r\n            ],\r\n          },\r\n          {\r\n            id: 'node_3',\r\n            label: 'Node 3',\r\n            position: [520, 200],\r\n            ports: [\r\n              { id: 'input_1', type: 'top' },\r\n              { id: 'output_1', type: 'bottom' },\r\n              { id: 'output_2', type: 'bottom' },\r\n            ],\r\n          },\r\n        ],\r\n        links: [\r\n          {\r\n            source: {\r\n              nodeId: 'node_1',\r\n              portId: 'output_1',\r\n            },\r\n            target: {\r\n              nodeId: 'node_2',\r\n              portId: 'input_1',\r\n            },\r\n            componentType: 'attention',\r\n          },\r\n          {\r\n            source: {\r\n              nodeId: 'node_1',\r\n              portId: 'output_1',\r\n            },\r\n            target: {\r\n              nodeId: 'node_3',\r\n              portId: 'input_1',\r\n            },\r\n          },\r\n          {\r\n            source: {\r\n              nodeId: 'node_3',\r\n              portId: 'output_1',\r\n            },\r\n            target: {\r\n              nodeId: 'node_2',\r\n              portId: 'input_1',\r\n            },\r\n          },\r\n        ],\r\n      }}\r\n      settings={{\r\n        links: {\r\n          components: {\r\n            attention: createLinkDefault({ color: 'red' }),\r\n          }\r\n        }\r\n      }}\r\n    />\r\n  );\r\n}\r\n");
// EXTERNAL MODULE: ../lib_core/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(95);

// CONCATENATED MODULE: ./src/pages/examples/_basicDiagram.tsx
/* harmony default export */ var examples_basicDiagram = (function(){return/*#__PURE__*/react_default.a.createElement(index_esm["Diagram"],{initState:{nodes:[{id:'node_1',label:'Node 1',position:[300,300],ports:[{id:'output_1',type:'bottom'}]},{id:'node_2',label:'Node 2',position:[520,400],ports:[{id:'input_1',type:'top'},{id:'input_2',type:'top'},{id:'output_1',type:'right'},{id:'output_2',type:'right'},{id:'output_3',type:'right'}]},{id:'node_3',label:'Node 3',position:[520,200],ports:[{id:'input_1',type:'top'},{id:'output_1',type:'bottom'},{id:'output_2',type:'bottom'}]}],links:[{source:{nodeId:'node_1',portId:'output_1'},target:{nodeId:'node_2',portId:'input_1'},componentType:'attention'},{source:{nodeId:'node_1',portId:'output_1'},target:{nodeId:'node_3',portId:'input_1'}},{source:{nodeId:'node_3',portId:'output_1'},target:{nodeId:'node_2',portId:'input_1'}}]},settings:{links:{components:{attention:Object(index_esm["createLinkDefault"])({color:'red'})}}}});});
// CONCATENATED MODULE: ./src/pages/examples/basic.jsx
function Example(){return/*#__PURE__*/react_default.a.createElement(_exampleWrapper["a" /* ExampleWrapper */],{title:"Basic Example"},/*#__PURE__*/react_default.a.createElement(_diagramContainer["a" /* DiagramContainer */],null,/*#__PURE__*/react_default.a.createElement(examples_basicDiagram,null)),/*#__PURE__*/react_default.a.createElement(CodeBlock["a" /* default */],{className:"language-jsx"},_basicDiagram));}

/***/ })

}]);