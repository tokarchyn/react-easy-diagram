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
/* harmony default export */ var _basicDiagram = ("import React from 'react';\r\nimport {\r\n  createCurvedLinkPathConstructor,\r\n  createDefaultMiniControl,\r\n  createLinkDefault,\r\n  Diagram,\r\n} from '@react-easy-diagram/core';\r\n\r\nexport default function () {\r\n  return (\r\n    <Diagram\r\n      initState={{\r\n        nodes: [\r\n          {\r\n            id: 'node_1',\r\n            label: 'Node 1',\r\n            position: [300, 300],\r\n            componentType: 'output_horizontal'\r\n          },\r\n          {\r\n            id: 'node_2',\r\n            label: 'Node 2',\r\n            position: [520, 400],\r\n            componentType: 'input_output_horizontal'\r\n          },\r\n          {\r\n            id: 'node_3',\r\n            label: 'Node 3',\r\n            position: [520, 200],\r\n            componentType: 'input_horizontal'\r\n          },\r\n        ],\r\n        links: [\r\n          {\r\n            source: {\r\n              nodeId: 'node_1',\r\n              portId: 'output',\r\n            },\r\n            target: {\r\n              nodeId: 'node_2',\r\n              portId: 'input',\r\n            }\r\n          },\r\n          {\r\n            source: {\r\n              nodeId: 'node_1',\r\n              portId: 'output',\r\n            },\r\n            target: {\r\n              nodeId: 'node_3',\r\n              portId: 'input',\r\n            },\r\n          },\r\n          {\r\n            source: {\r\n              nodeId: 'node_3',\r\n              portId: 'input',\r\n            },\r\n            target: {\r\n              nodeId: 'node_2',\r\n              portId: 'output',\r\n            },\r\n          },\r\n        ],\r\n      }}\r\n    />\r\n  );\r\n}\r\n");
// EXTERNAL MODULE: ../lib_core/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(1943);
;// CONCATENATED MODULE: ./src/pages/examples/_basicDiagram.tsx
/* harmony default export */ function examples_basicDiagram() {return/*#__PURE__*/react.createElement(index_esm.Diagram,{initState:{nodes:[{id:'node_1',label:'Node 1',position:[300,300],componentType:'output_horizontal'},{id:'node_2',label:'Node 2',position:[520,400],componentType:'input_output_horizontal'},{id:'node_3',label:'Node 3',position:[520,200],componentType:'input_horizontal'}],links:[{source:{nodeId:'node_1',portId:'output'},target:{nodeId:'node_2',portId:'input'}},{source:{nodeId:'node_1',portId:'output'},target:{nodeId:'node_3',portId:'input'}},{source:{nodeId:'node_3',portId:'input'},target:{nodeId:'node_2',portId:'output'}}]}});}
;// CONCATENATED MODULE: ./src/pages/examples/basic.jsx
function Example(){return/*#__PURE__*/react.createElement(_exampleWrapper/* ExampleWrapper */.U,{title:"Basic Example"},/*#__PURE__*/react.createElement(_diagramContainer/* DiagramContainer */.G,null,/*#__PURE__*/react.createElement(examples_basicDiagram,null)),/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,{className:"language-jsx"},_basicDiagram));}

/***/ })

}]);