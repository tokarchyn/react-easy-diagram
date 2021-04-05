(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 84:
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
var CodeBlock = __webpack_require__(93);

// EXTERNAL MODULE: ./src/pages/examples/_diagramContainer.jsx
var _diagramContainer = __webpack_require__(96);

// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_basicDiagram.tsx
/* harmony default export */ var _basicDiagram = ("import React from 'react';\r\nimport {\r\n  createCurvedLinkPathConstructor,\r\n  createDefaultMiniControl,\r\n  createLinkDefault,\r\n  Diagram,\r\n} from '@react-easy-diagram/core';\r\n\r\nexport default function () {\r\n  return (\r\n    <Diagram\r\n      initState={{\r\n        nodes: [\r\n          {\r\n            id: 'Node 1',\r\n            position: [300, 300],\r\n            ports: [{ id: 'output_1', type: 'bottom' }],\r\n          },\r\n          {\r\n            id: 'Node 2',\r\n            position: [520, 400],\r\n            ports: [\r\n              { id: 'input_1', type: 'top' },\r\n              { id: 'input_2', type: 'top' },\r\n              { id: 'output_1', type: 'right' },\r\n              { id: 'output_2', type: 'right' },\r\n              { id: 'output_3', type: 'right' },\r\n            ],\r\n          },\r\n          {\r\n            id: 'Node 3',\r\n            position: [520, 200],\r\n            ports: [\r\n              { id: 'input_1', type: 'top' },\r\n              { id: 'output_1', type: 'bottom' },\r\n              { id: 'output_2', type: 'bottom' },\r\n            ],\r\n          },\r\n        ],\r\n        links: [\r\n          {\r\n            id: 'Node 1 - Node 2',\r\n            source: {\r\n              nodeId: 'Node 1',\r\n              portId: 'output_1',\r\n            },\r\n            target: {\r\n              nodeId: 'Node 2',\r\n              portId: 'input_1',\r\n            },\r\n            componentType: 'attention',\r\n          },\r\n          {\r\n            id: 'Node 1 - Node 3',\r\n            source: {\r\n              nodeId: 'Node 1',\r\n              portId: 'output_1',\r\n            },\r\n            target: {\r\n              nodeId: 'Node 3',\r\n              portId: 'input_1',\r\n            },\r\n          },\r\n          {\r\n            id: 'Node 3 - Node 2',\r\n            source: {\r\n              nodeId: 'Node 3',\r\n              portId: 'output_1',\r\n            },\r\n            target: {\r\n              nodeId: 'Node 2',\r\n              portId: 'input_1',\r\n            },\r\n          },\r\n        ],\r\n      }}\r\n      settings={{\r\n        links: {\r\n          components: {\r\n            attention: createLinkDefault({ color: 'red' }),\r\n          },\r\n          pathConstructor: createCurvedLinkPathConstructor(),\r\n        },\r\n        diagram: {\r\n          miniControlComponent: createDefaultMiniControl({\r\n            buttonsSize: 30,\r\n            position: 'left-bottom',\r\n          }),\r\n        },\r\n      }}\r\n    />\r\n  );\r\n}\r\n");
// EXTERNAL MODULE: ../lib_core/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(94);

// CONCATENATED MODULE: ./src/pages/examples/_basicDiagram.tsx
/* harmony default export */ var examples_basicDiagram = (function(){return/*#__PURE__*/react_default.a.createElement(index_esm["Diagram"],{initState:{nodes:[{id:'Node 1',position:[300,300],ports:[{id:'output_1',type:'bottom'}]},{id:'Node 2',position:[520,400],ports:[{id:'input_1',type:'top'},{id:'input_2',type:'top'},{id:'output_1',type:'right'},{id:'output_2',type:'right'},{id:'output_3',type:'right'}]},{id:'Node 3',position:[520,200],ports:[{id:'input_1',type:'top'},{id:'output_1',type:'bottom'},{id:'output_2',type:'bottom'}]}],links:[{id:'Node 1 - Node 2',source:{nodeId:'Node 1',portId:'output_1'},target:{nodeId:'Node 2',portId:'input_1'},componentType:'attention'},{id:'Node 1 - Node 3',source:{nodeId:'Node 1',portId:'output_1'},target:{nodeId:'Node 3',portId:'input_1'}},{id:'Node 3 - Node 2',source:{nodeId:'Node 3',portId:'output_1'},target:{nodeId:'Node 2',portId:'input_1'}}]},settings:{links:{components:{attention:Object(index_esm["createLinkDefault"])({color:'red'})},pathConstructor:Object(index_esm["createCurvedLinkPathConstructor"])()},diagram:{miniControlComponent:Object(index_esm["createDefaultMiniControl"])({buttonsSize:30,position:'left-bottom'})}}});});
// CONCATENATED MODULE: ./src/pages/examples/basic.jsx
function Example(){return/*#__PURE__*/react_default.a.createElement(_exampleWrapper["a" /* ExampleWrapper */],{title:"Basic Example"},/*#__PURE__*/react_default.a.createElement(_diagramContainer["a" /* DiagramContainer */],null,/*#__PURE__*/react_default.a.createElement(examples_basicDiagram,null)),/*#__PURE__*/react_default.a.createElement(CodeBlock["a" /* default */],{className:"language-jsx"},_basicDiagram));}

/***/ })

}]);