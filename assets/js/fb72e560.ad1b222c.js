(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[99],{

/***/ 5525:
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
;// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_configureDefaultLinkDiagram.tsx
/* harmony default export */ var _configureDefaultLinkDiagram = ("import React from 'react';\r\nimport {\r\n  createLinkDefault,\r\n  Diagram,\r\n} from '@react-easy-diagram/core';\r\n\r\nexport default () => (\r\n  <Diagram\r\n    initState={{\r\n      nodes: [\r\n        {\r\n          id: 'Node 1',\r\n          position: [100, 100],\r\n          componentType: 'input_output_horizontal'\r\n        },\r\n        {\r\n          id: 'Node 2',\r\n          position: [420, 300],\r\n          componentType: 'input_output_horizontal'\r\n        },\r\n        {\r\n          id: 'Node 3',\r\n          position: [420, 100],\r\n          componentType: 'input_output_horizontal'\r\n        },\r\n      ],\r\n      links: [\r\n        {\r\n          source: { nodeId: 'Node 1', portId: 'output' },\r\n          target: { nodeId: 'Node 2', portId: 'input' },\r\n        },\r\n      ],\r\n    }}\r\n    settings={{\r\n      links: {\r\n        components: {\r\n          default: createLinkDefault({\r\n            color: 'grey',\r\n            strokeWidth: 1,\r\n          }),\r\n          linkCreation: createLinkDefault({\r\n            color: 'green',\r\n            strokeWidth: 3,\r\n            cirleRadius: 3,\r\n          }),\r\n        },\r\n      },\r\n    }}\r\n  />\r\n);\r\n");
// EXTERNAL MODULE: ../lib_core/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(1943);
;// CONCATENATED MODULE: ./src/pages/examples/_configureDefaultLinkDiagram.tsx
/* harmony default export */ var examples_configureDefaultLinkDiagram = (function(){return/*#__PURE__*/react.createElement(index_esm.Diagram,{initState:{nodes:[{id:'Node 1',position:[100,100],componentType:'input_output_horizontal'},{id:'Node 2',position:[420,300],componentType:'input_output_horizontal'},{id:'Node 3',position:[420,100],componentType:'input_output_horizontal'}],links:[{source:{nodeId:'Node 1',portId:'output'},target:{nodeId:'Node 2',portId:'input'}}]},settings:{links:{components:{default:(0,index_esm.createLinkDefault)({color:'grey',strokeWidth:1}),linkCreation:(0,index_esm.createLinkDefault)({color:'green',strokeWidth:3,cirleRadius:3})}}}});});
;// CONCATENATED MODULE: ./src/pages/examples/configureDefaultLink.jsx
function Example(){return/*#__PURE__*/react.createElement(_exampleWrapper/* ExampleWrapper */.U,{title:"Configure Default Link Example"},/*#__PURE__*/react.createElement(_diagramContainer/* DiagramContainer */.G,null,/*#__PURE__*/react.createElement(examples_configureDefaultLinkDiagram,null)),/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,{className:"language-jsx"},_configureDefaultLinkDiagram));}

/***/ })

}]);