(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[651],{

/***/ 4301:
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
var CodeBlock = __webpack_require__(842);
// EXTERNAL MODULE: ./src/pages/examples/_diagramContainer.jsx
var _diagramContainer = __webpack_require__(7709);
;// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_positionSnappingDiagram.tsx
/* harmony default export */ var _positionSnappingDiagram = ("import React from 'react';\r\nimport { Diagram } from '@react-easy-diagram/core';\r\n\r\nexport default () => (\r\n  <Diagram\r\n    initState={{\r\n      nodes: [\r\n        {\r\n          id: 'Node 1',\r\n          position: [100, 100],\r\n          componentType: 'output_horizontal'\r\n        },\r\n        {\r\n          id: 'Node 2',\r\n          position: [420, 300],\r\n          componentType: 'input_horizontal'\r\n        },\r\n      ],\r\n      links: [\r\n        {\r\n          source: { nodeId: 'Node 1', portId: 'output' },\r\n          target: { nodeId: 'Node 2', portId: 'input' },\r\n        },\r\n      ],\r\n    }}\r\n    settings={{\r\n      nodes:{\r\n        gridSnap: 35 // or [10, 20] to set x and y snap separately\r\n      }\r\n    }}\r\n  />\r\n);\r\n");
// EXTERNAL MODULE: ../lib_core/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(1943);
;// CONCATENATED MODULE: ./src/pages/examples/_positionSnappingDiagram.tsx
/* harmony default export */ var examples_positionSnappingDiagram = (function(){return/*#__PURE__*/react.createElement(index_esm.Diagram,{initState:{nodes:[{id:'Node 1',position:[100,100],componentType:'output_horizontal'},{id:'Node 2',position:[420,300],componentType:'input_horizontal'}],links:[{source:{nodeId:'Node 1',portId:'output'},target:{nodeId:'Node 2',portId:'input'}}]},settings:{nodes:{gridSnap:35// or [10, 20] to set x and y snap separately
}}});});
;// CONCATENATED MODULE: ./src/pages/examples/positionSnapping.jsx
function Example(){return/*#__PURE__*/react.createElement(_exampleWrapper/* ExampleWrapper */.U,{title:"Position snapping example"},/*#__PURE__*/react.createElement(_diagramContainer/* DiagramContainer */.G,null,/*#__PURE__*/react.createElement(examples_positionSnappingDiagram,null)),/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,{className:"language-jsx"},_positionSnappingDiagram));}

/***/ })

}]);