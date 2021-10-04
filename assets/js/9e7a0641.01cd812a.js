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
/* harmony default export */ var _configureDefaultPortDiagram = ("import React from 'react';\nimport {\n  createNode,\n  createPortInnerDefault,\n  Diagram,\n} from 'react-easy-diagram';\n\nexport default () => (\n  <Diagram\n    initState={{\n      nodes: [\n        {\n          id: 'Node 1',\n          position: [100, 100],\n          type: 'output_horizontal',\n        },\n        {\n          id: 'Node 2',\n          position: [420, 300],\n          type: 'custom',\n        },\n      ],\n      links: [\n        {\n          source: { nodeId: 'Node 1', portId: 'output' },\n          target: { nodeId: 'Node 2', portId: 'input' },\n        },\n      ],\n    }}\n    settings={{\n      ports: {\n        portComponents: {\n          default: createPortInnerDefault({\n            size: [10, 10],\n            color: '#ee6eff',\n            dragColor: '#f849d2',\n            hoverColor: '#f849d2',\n            invalidColor: '#cccccc',\n          }),\n          big_yellow: createPortInnerDefault({\n            size: [10, 20],\n            color: '#ffe657',\n          }),\n        },\n      },\n      nodes: {\n        components: {\n          custom: createNode({\n            ports: [\n              { id: 'input', type: 'big_yellow', position: 'left-center' },\n            ],\n          }),\n        },\n      },\n    }}\n  />\n);\n");
// EXTERNAL MODULE: ../lib/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(4714);
;// CONCATENATED MODULE: ./src/pages/examples/_configureDefaultPortDiagram.tsx
/* harmony default export */ var examples_configureDefaultPortDiagram = (function(){return/*#__PURE__*/react.createElement(index_esm.Diagram,{initState:{nodes:[{id:'Node 1',position:[100,100],type:'output_horizontal'},{id:'Node 2',position:[420,300],type:'custom'}],links:[{source:{nodeId:'Node 1',portId:'output'},target:{nodeId:'Node 2',portId:'input'}}]},settings:{ports:{portComponents:{default:(0,index_esm.createPortInnerDefault)({size:[10,10],color:'#ee6eff',dragColor:'#f849d2',hoverColor:'#f849d2',invalidColor:'#cccccc'}),big_yellow:(0,index_esm.createPortInnerDefault)({size:[10,20],color:'#ffe657'})}},nodes:{components:{custom:(0,index_esm.createNode)({ports:[{id:'input',type:'big_yellow',position:'left-center'}]})}}}});});
;// CONCATENATED MODULE: ./src/pages/examples/configureDefaultPort.jsx
function Example(){return/*#__PURE__*/react.createElement(_exampleWrapper/* ExampleWrapper */.U,{title:"Configure Default Port Example"},/*#__PURE__*/react.createElement(_diagramContainer/* DiagramContainer */.G,null,/*#__PURE__*/react.createElement(examples_configureDefaultPortDiagram,null)),/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,{className:"language-jsx"},_configureDefaultPortDiagram));}

/***/ })

}]);