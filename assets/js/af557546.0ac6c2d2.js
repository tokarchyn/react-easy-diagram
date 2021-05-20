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
var CodeBlock = __webpack_require__(1642);
// EXTERNAL MODULE: ./src/pages/examples/_diagramContainer.jsx + 1 modules
var _diagramContainer = __webpack_require__(1353);
;// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_performanceDiagram.tsx
/* harmony default export */ var _performanceDiagram = ("import React from 'react';\nimport {\n  Diagram,\n  ILinkState,\n  INodeState,\n} from 'react-easy-diagram';\n\nconst generateState = (colNum: number, rowNum: number) => {\n  const nodes: INodeState[] = [];\n  const links: ILinkState[] = [];\n  const getNodeId = (i: number, j: number) => `node_${i}_${j}`;\n\n  for (let i = 0; i < colNum; i++) {\n    for (let j = 0; j < rowNum; j++) {\n      nodes.push({\n        id: getNodeId(i, j),\n        position: [i * 120, j * 120],\n        componentType: 'star'\n      });\n      if (i - 1 >= 0) {\n        links.push({\n          source: {\n            nodeId: getNodeId(i - 1, j),\n            portId: 'right',\n          },\n          target: {\n            nodeId: getNodeId(i, j),\n            portId: 'left',\n          },\n        });\n      }\n      if (j - 1 >= 0) {\n        links.push({\n          source: {\n            nodeId: getNodeId(i, j - 1),\n            portId: 'bottom',\n          },\n          target: {\n            nodeId: getNodeId(i, j),\n            portId: 'top',\n          },\n        });\n      }\n    }\n  }\n\n  return { nodes, links };\n};\n\nexport default () => <Diagram initState={generateState(10, 10)} />;\n");
// EXTERNAL MODULE: ../lib/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(4714);
;// CONCATENATED MODULE: ./src/pages/examples/_performanceDiagram.tsx
var generateState=function generateState(colNum,rowNum){var nodes=[];var links=[];var getNodeId=function getNodeId(i,j){return"node_"+i+"_"+j;};for(var i=0;i<colNum;i++){for(var j=0;j<rowNum;j++){nodes.push({id:getNodeId(i,j),position:[i*120,j*120],componentType:'star'});if(i-1>=0){links.push({source:{nodeId:getNodeId(i-1,j),portId:'right'},target:{nodeId:getNodeId(i,j),portId:'left'}});}if(j-1>=0){links.push({source:{nodeId:getNodeId(i,j-1),portId:'bottom'},target:{nodeId:getNodeId(i,j),portId:'top'}});}}}return{nodes:nodes,links:links};};/* harmony default export */ var examples_performanceDiagram = (function(){return/*#__PURE__*/react.createElement(index_esm.Diagram,{initState:generateState(10,10)});});
;// CONCATENATED MODULE: ./src/pages/examples/performance.jsx
function Example(){return/*#__PURE__*/react.createElement(_exampleWrapper/* ExampleWrapper */.U,{title:"Performance Example"},/*#__PURE__*/react.createElement(_diagramContainer/* DiagramContainer */.G,null,/*#__PURE__*/react.createElement(examples_performanceDiagram,null)),/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,{className:"language-jsx"},_performanceDiagram));}

/***/ })

}]);