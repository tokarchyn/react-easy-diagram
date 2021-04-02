(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 85:
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
var _exampleWrapper = __webpack_require__(96);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-live-codeblock/src/theme/CodeBlock/index.js + 9 modules
var CodeBlock = __webpack_require__(92);

// EXTERNAL MODULE: ./src/pages/examples/_diagramContainer.jsx
var _diagramContainer = __webpack_require__(97);

// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_performanceDiagram.tsx
/* harmony default export */ var _performanceDiagram = ("import React from 'react';\r\nimport {\r\n  createCurvedLinkPathConstructor,\r\n  createDefaultMiniControl,\r\n  createLinkDefault,\r\n  Diagram,\r\n  ILinkState,\r\n  INodeState,\r\n} from '@react-easy-diagram/core';\r\n\r\nconst generateState = (colNum: number, rowNum: number) => {\r\n  const nodes: INodeState[] = [];\r\n  const links: ILinkState[] = [];\r\n  const getNodeId = (i: number, j: number) => `node_${i}_${j}`;\r\n\r\n  for (let i = 0; i < colNum; i++) {\r\n    for (let j = 0; j < rowNum; j++) {\r\n      nodes.push({\r\n        id: getNodeId(i, j),\r\n        position: [i * 120, j * 120],\r\n        ports: [\r\n          { id: 'left', type: 'left' },\r\n          { id: 'top', type: 'top' },\r\n          { id: 'right', type: 'right' },\r\n          { id: 'bottom', type: 'bottom' },\r\n        ],\r\n      });\r\n      if (i - 1 >= 0) {\r\n        links.push({\r\n          source: {\r\n            nodeId: getNodeId(i - 1, j),\r\n            portId: 'right',\r\n          },\r\n          target: {\r\n            nodeId: getNodeId(i, j),\r\n            portId: 'left',\r\n          },\r\n        });\r\n      }\r\n      if (j - 1 >= 0) {\r\n        links.push({\r\n          source: {\r\n            nodeId: getNodeId(i, j - 1),\r\n            portId: 'bottom',\r\n          },\r\n          target: {\r\n            nodeId: getNodeId(i, j),\r\n            portId: 'top',\r\n          },\r\n        });\r\n      }\r\n    }\r\n  }\r\n\r\n  return { nodes, links };\r\n};\r\n\r\nexport default () => (\r\n  <Diagram\r\n    initState={generateState(10, 10)}\r\n    settings={{\r\n      links: {\r\n        components: {\r\n          attention: createLinkDefault({ color: 'red' }),\r\n        },\r\n        pathConstructor: createCurvedLinkPathConstructor(),\r\n      },\r\n      diagram: {\r\n        miniControlComponent: createDefaultMiniControl({\r\n          buttonsSize: 30,\r\n          position: 'left-bottom',\r\n        }),\r\n      },\r\n    }}\r\n  />\r\n);\r\n");
// EXTERNAL MODULE: ../lib_core/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(94);

// CONCATENATED MODULE: ./src/pages/examples/_performanceDiagram.tsx
const generateState=(colNum,rowNum)=>{const nodes=[];const links=[];const getNodeId=(i,j)=>`node_${i}_${j}`;for(let i=0;i<colNum;i++){for(let j=0;j<rowNum;j++){nodes.push({id:getNodeId(i,j),position:[i*120,j*120],ports:[{id:'left',type:'left'},{id:'top',type:'top'},{id:'right',type:'right'},{id:'bottom',type:'bottom'}]});if(i-1>=0){links.push({source:{nodeId:getNodeId(i-1,j),portId:'right'},target:{nodeId:getNodeId(i,j),portId:'left'}});}if(j-1>=0){links.push({source:{nodeId:getNodeId(i,j-1),portId:'bottom'},target:{nodeId:getNodeId(i,j),portId:'top'}});}}}return{nodes,links};};/* harmony default export */ var examples_performanceDiagram = (()=>/*#__PURE__*/react_default.a.createElement(index_esm["Diagram"],{initState:generateState(10,10),settings:{links:{components:{attention:Object(index_esm["createLinkDefault"])({color:'red'})},pathConstructor:Object(index_esm["createCurvedLinkPathConstructor"])()},diagram:{miniControlComponent:Object(index_esm["createDefaultMiniControl"])({buttonsSize:30,position:'left-bottom'})}}}));
// CONCATENATED MODULE: ./src/pages/examples/performance.jsx
function Example(){return/*#__PURE__*/react_default.a.createElement(_exampleWrapper["a" /* ExampleWrapper */],{title:"Performance Example"},/*#__PURE__*/react_default.a.createElement(_diagramContainer["a" /* DiagramContainer */],null,/*#__PURE__*/react_default.a.createElement(examples_performanceDiagram,null)),/*#__PURE__*/react_default.a.createElement(CodeBlock["a" /* default */],{className:"language-jsx"},_performanceDiagram));}

/***/ })

}]);