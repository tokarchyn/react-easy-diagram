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
var CodeBlock = __webpack_require__(1642);
// EXTERNAL MODULE: ./src/pages/examples/_diagramContainer.jsx + 1 modules
var _diagramContainer = __webpack_require__(1353);
;// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_positionSnappingDiagram.tsx
/* harmony default export */ var _positionSnappingDiagram = ("import React from 'react';\nimport { Diagram } from 'react-easy-diagram';\n\nexport default () => (\n  <Diagram\n    initState={{\n      nodes: [\n        {\n          id: 'Node 1',\n          position: [100, 100],\n          type: 'output_horizontal'\n        },\n        {\n          id: 'Node 2',\n          position: [420, 300],\n          type: 'input_horizontal'\n        },\n      ],\n      links: [\n        {\n          source: { nodeId: 'Node 1', portId: 'output' },\n          target: { nodeId: 'Node 2', portId: 'input' },\n        },\n      ],\n    }}\n    settings={{\n      nodes:{\n        gridSnap: 35 // or [10, 20] to set x and y snap separately\n      }\n    }}\n  />\n);\n");
// EXTERNAL MODULE: ../lib/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(4714);
;// CONCATENATED MODULE: ./src/pages/examples/_positionSnappingDiagram.tsx
/* harmony default export */ var examples_positionSnappingDiagram = (function(){return/*#__PURE__*/react.createElement(index_esm.Diagram,{initState:{nodes:[{id:'Node 1',position:[100,100],type:'output_horizontal'},{id:'Node 2',position:[420,300],type:'input_horizontal'}],links:[{source:{nodeId:'Node 1',portId:'output'},target:{nodeId:'Node 2',portId:'input'}}]},settings:{nodes:{gridSnap:35// or [10, 20] to set x and y snap separately
}}});});
;// CONCATENATED MODULE: ./src/pages/examples/positionSnapping.jsx
function Example(){return/*#__PURE__*/react.createElement(_exampleWrapper/* ExampleWrapper */.U,{title:"Position snapping example"},/*#__PURE__*/react.createElement(_diagramContainer/* DiagramContainer */.G,null,/*#__PURE__*/react.createElement(examples_positionSnappingDiagram,null)),/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,{className:"language-jsx"},_positionSnappingDiagram));}

/***/ })

}]);