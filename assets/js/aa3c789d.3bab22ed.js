(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[829],{

/***/ 9858:
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
;// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_basicDiagram.tsx
/* harmony default export */ var _basicDiagram = ("import React from 'react';\nimport {\n  Diagram,\n} from 'react-easy-diagram';\n\nexport default function () {\n  return (\n    <Diagram\n      initState={{\n        nodes: [\n          {\n            id: 'node_1',\n            label: 'Node 1',\n            position: [300, 300],\n            type: 'output_horizontal'\n          },\n          {\n            id: 'node_2',\n            label: 'Node 2',\n            position: [520, 400],\n            type: 'input_output_horizontal'\n          },\n          {\n            id: 'node_3',\n            label: 'Node 3',\n            position: [520, 200],\n            type: 'input_horizontal'\n          },\n        ],\n        links: [\n          {\n            source: {\n              nodeId: 'node_1',\n              portId: 'output',\n            },\n            target: {\n              nodeId: 'node_2',\n              portId: 'input',\n            }\n          },\n          {\n            source: {\n              nodeId: 'node_1',\n              portId: 'output',\n            },\n            target: {\n              nodeId: 'node_3',\n              portId: 'input',\n            },\n          },\n          {\n            source: {\n              nodeId: 'node_3',\n              portId: 'input',\n            },\n            target: {\n              nodeId: 'node_2',\n              portId: 'output',\n            },\n          },\n        ],\n      }}\n    />\n  );\n}\n");
// EXTERNAL MODULE: ../lib/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(4714);
;// CONCATENATED MODULE: ./src/pages/examples/_basicDiagram.tsx
/* harmony default export */ function examples_basicDiagram() {return/*#__PURE__*/react.createElement(index_esm.Diagram,{initState:{nodes:[{id:'node_1',label:'Node 1',position:[300,300],type:'output_horizontal'},{id:'node_2',label:'Node 2',position:[520,400],type:'input_output_horizontal'},{id:'node_3',label:'Node 3',position:[520,200],type:'input_horizontal'}],links:[{source:{nodeId:'node_1',portId:'output'},target:{nodeId:'node_2',portId:'input'}},{source:{nodeId:'node_1',portId:'output'},target:{nodeId:'node_3',portId:'input'}},{source:{nodeId:'node_3',portId:'input'},target:{nodeId:'node_2',portId:'output'}}]}});}
;// CONCATENATED MODULE: ./src/pages/examples/basic.jsx
function Example(){return/*#__PURE__*/react.createElement(_exampleWrapper/* ExampleWrapper */.U,{title:"Basic Example"},/*#__PURE__*/react.createElement(_diagramContainer/* DiagramContainer */.G,null,/*#__PURE__*/react.createElement(examples_basicDiagram,null)),/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,{className:"language-jsx"},_basicDiagram));}

/***/ })

}]);