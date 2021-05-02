(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[976],{

/***/ 369:
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
// EXTERNAL MODULE: ./src/pages/examples/_diagramContainer.jsx + 1 modules
var _diagramContainer = __webpack_require__(9339);
;// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_performanceDiagram.tsx
/* harmony default export */ var _performanceDiagram = ("import React from 'react';\r\nimport {\r\n  Diagram,\r\n  ILinkState,\r\n  INodeState,\r\n} from '@react-easy-diagram/core';\r\n\r\nconst generateState = (colNum: number, rowNum: number) => {\r\n  const nodes: INodeState[] = [];\r\n  const links: ILinkState[] = [];\r\n  const getNodeId = (i: number, j: number) => `node_${i}_${j}`;\r\n\r\n  for (let i = 0; i < colNum; i++) {\r\n    for (let j = 0; j < rowNum; j++) {\r\n      nodes.push({\r\n        id: getNodeId(i, j),\r\n        position: [i * 120, j * 120],\r\n        componentType: 'star'\r\n      });\r\n      if (i - 1 >= 0) {\r\n        links.push({\r\n          source: {\r\n            nodeId: getNodeId(i - 1, j),\r\n            portId: 'right',\r\n          },\r\n          target: {\r\n            nodeId: getNodeId(i, j),\r\n            portId: 'left',\r\n          },\r\n        });\r\n      }\r\n      if (j - 1 >= 0) {\r\n        links.push({\r\n          source: {\r\n            nodeId: getNodeId(i, j - 1),\r\n            portId: 'bottom',\r\n          },\r\n          target: {\r\n            nodeId: getNodeId(i, j),\r\n            portId: 'top',\r\n          },\r\n        });\r\n      }\r\n    }\r\n  }\r\n\r\n  return { nodes, links };\r\n};\r\n\r\nexport default () => <Diagram initState={generateState(10, 10)} />;\r\n");
// EXTERNAL MODULE: ../lib_core/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(1943);
;// CONCATENATED MODULE: ./src/pages/examples/_performanceDiagram.tsx
var generateState=function generateState(colNum,rowNum){var nodes=[];var links=[];var getNodeId=function getNodeId(i,j){return"node_"+i+"_"+j;};for(var i=0;i<colNum;i++){for(var j=0;j<rowNum;j++){nodes.push({id:getNodeId(i,j),position:[i*120,j*120],componentType:'star'});if(i-1>=0){links.push({source:{nodeId:getNodeId(i-1,j),portId:'right'},target:{nodeId:getNodeId(i,j),portId:'left'}});}if(j-1>=0){links.push({source:{nodeId:getNodeId(i,j-1),portId:'bottom'},target:{nodeId:getNodeId(i,j),portId:'top'}});}}}return{nodes:nodes,links:links};};/* harmony default export */ var examples_performanceDiagram = (function(){return/*#__PURE__*/react.createElement(index_esm.Diagram,{initState:generateState(10,10)});});
;// CONCATENATED MODULE: ./src/pages/examples/performance.jsx
function Example(){return/*#__PURE__*/react.createElement(_exampleWrapper/* ExampleWrapper */.U,{title:"Performance Example"},/*#__PURE__*/react.createElement(_diagramContainer/* DiagramContainer */.G,null,/*#__PURE__*/react.createElement(examples_performanceDiagram,null)),/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,{className:"language-jsx"},_performanceDiagram));}

/***/ })

}]);