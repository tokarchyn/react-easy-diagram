(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[901],{

/***/ 2824:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Example; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ./src/pages/examples/_exampleWrapper.jsx
var _exampleWrapper = __webpack_require__(1713);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-live-codeblock/src/theme/CodeBlock/index.js + 11 modules
var CodeBlock = __webpack_require__(1642);
// EXTERNAL MODULE: ./src/pages/examples/_diagramContainer.jsx + 1 modules
var _diagramContainer = __webpack_require__(1353);
;// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_configureDefaultPortDiagram.tsx
/* harmony default export */ var _configureDefaultPortDiagram = ("import React from 'react';\r\nimport {\r\n  createNode,\r\n  createPortInnerDefault,\r\n  Diagram,\r\n} from '@react-easy-diagram/core';\r\n\r\nexport default () => (\r\n  <Diagram\r\n    initState={{\r\n      nodes: [\r\n        {\r\n          id: 'Node 1',\r\n          position: [100, 100],\r\n          componentType: 'output_horizontal',\r\n        },\r\n        {\r\n          id: 'Node 2',\r\n          position: [420, 300],\r\n          componentType: 'custom',\r\n        },\r\n      ],\r\n      links: [\r\n        {\r\n          source: { nodeId: 'Node 1', portId: 'output' },\r\n          target: { nodeId: 'Node 2', portId: 'input' },\r\n        },\r\n      ],\r\n    }}\r\n    settings={{\r\n      ports: {\r\n        portComponents: {\r\n          default: createPortInnerDefault({\r\n            size: [10, 10],\r\n            color: '#ee6eff',\r\n            dragColor: '#f849d2',\r\n            hoverColor: '#f849d2',\r\n            invalidColor: '#cccccc',\r\n          }),\r\n          big_yellow: createPortInnerDefault({\r\n            size: [10, 20],\r\n            color: '#ffe657',\r\n          }),\r\n        },\r\n      },\r\n      nodes: {\r\n        components: {\r\n          custom: createNode({\r\n            ports: [\r\n              { id: 'input', type: 'big_yellow', position: 'left-center' },\r\n            ],\r\n          }),\r\n        },\r\n      },\r\n    }}\r\n  />\r\n);\r\n");
// EXTERNAL MODULE: ../lib_core/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(1943);
;// CONCATENATED MODULE: ./src/pages/examples/_configureDefaultPortDiagram.tsx
/* harmony default export */ var examples_configureDefaultPortDiagram = (function(){return/*#__PURE__*/react.createElement(index_esm.Diagram,{initState:{nodes:[{id:'Node 1',position:[100,100],componentType:'output_horizontal'},{id:'Node 2',position:[420,300],componentType:'custom'}],links:[{source:{nodeId:'Node 1',portId:'output'},target:{nodeId:'Node 2',portId:'input'}}]},settings:{ports:{portComponents:{default:(0,index_esm.createPortInnerDefault)({size:[10,10],color:'#ee6eff',dragColor:'#f849d2',hoverColor:'#f849d2',invalidColor:'#cccccc'}),big_yellow:(0,index_esm.createPortInnerDefault)({size:[10,20],color:'#ffe657'})}},nodes:{components:{custom:(0,index_esm.createNode)({ports:[{id:'input',type:'big_yellow',position:'left-center'}]})}}}});});
;// CONCATENATED MODULE: ./src/pages/examples/configureDefaultPort.jsx
function Example(){return/*#__PURE__*/react.createElement(_exampleWrapper/* ExampleWrapper */.U,{title:"Configure Default Port Example"},/*#__PURE__*/react.createElement(_diagramContainer/* DiagramContainer */.G,null,/*#__PURE__*/react.createElement(examples_configureDefaultPortDiagram,null)),/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,{className:"language-jsx"},_configureDefaultPortDiagram));}

/***/ })

}]);