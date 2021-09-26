(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[763],{

/***/ 2396:
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
;// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_callbacksDiagram.tsx
/* harmony default export */ var _callbacksDiagram = ("import React, { useEffect, useRef } from 'react';\nimport { Diagram, NodeState, RootStore } from 'react-easy-diagram';\nimport { reaction } from 'mobx';\n\nexport default function () {\n  const storeRef = useRef<RootStore>(null);\n\n  // To react on changes in the diagram state, in addition to callbacks the library provides,\n  // you can also use mobx functions like reaction, autorun and when. More info here: https://mobx.js.org/reactions.html\n  // Here is example that will help you to do some work when selection changed.\n  useEffect(\n    () =>\n      reaction(\n        () => {\n          if (storeRef.current) {\n            // When you read properties in any observable object mobx subscribes to changes in this properties \n            // and will call function you provide as a second argument to reaction function.\n            return storeRef.current.selectionState.selectedItems.map(i => i);\n          }\n        },\n        (selectedItems, prevSelectedItems) => {\n          console.log(\n            'Selection updated. Current selected nodes: ',\n            selectedItems\n              ?.filter((i) => i instanceof NodeState)\n              .map((n) => n.id)\n          );\n        }\n      ),\n    [storeRef.current]\n  );\n\n  return (\n    <Diagram\n      storeRef={storeRef}\n      settings={{\n        callbacks: {\n          nodesAdded: (addResults, failedToAdd, importing, store) => {\n            console.log('Added nodes:');\n            console.log(addResults.map((r) => r.export()));\n          },\n          nodePositionChanged: (node, oldPos, newPos, isDragActive, store) => {\n            console.log(\n              `Position of node '${\n                node.id\n              }' changed from '${oldPos.toString()}' to '${newPos.toString()}'`\n            );\n          },\n          dragStateChanged: (nodes, dragStarted, store) => {\n            console.log(\n              `${dragStarted ? 'Start' : 'Finish'} dragging nodes: '${nodes\n                .map((n) => n.id)\n                .reduce((prev, val) => prev + ', ' + val)}'`\n            );\n          },\n        },\n      }}\n      initState={{\n        nodes: [\n          {\n            id: 'node_1',\n            label: 'Node 1',\n            position: [300, 300],\n            type: 'output_horizontal',\n          },\n          {\n            id: 'node_2',\n            label: 'Node 2',\n            position: [520, 400],\n            type: 'input_output_horizontal',\n          },\n          {\n            id: 'node_3',\n            label: 'Node 3',\n            position: [520, 200],\n            type: 'input_horizontal',\n          },\n        ],\n        links: [\n          {\n            source: {\n              nodeId: 'node_1',\n              portId: 'output',\n            },\n            target: {\n              nodeId: 'node_2',\n              portId: 'input',\n            },\n          },\n          {\n            source: {\n              nodeId: 'node_1',\n              portId: 'output',\n            },\n            target: {\n              nodeId: 'node_3',\n              portId: 'input',\n            },\n          },\n          {\n            source: {\n              nodeId: 'node_3',\n              portId: 'input',\n            },\n            target: {\n              nodeId: 'node_2',\n              portId: 'output',\n            },\n          },\n        ],\n      }}\n    />\n  );\n}\n");
// EXTERNAL MODULE: ../lib/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(4714);
// EXTERNAL MODULE: ../node_modules/mobx/dist/mobx.esm.js
var mobx_esm = __webpack_require__(9588);
;// CONCATENATED MODULE: ./src/pages/examples/_callbacksDiagram.tsx
/* harmony default export */ function examples_callbacksDiagram() {var storeRef=(0,react.useRef)(null);// To react on changes in the diagram state, in addition to callbacks the library provides,
// you can also use mobx functions like reaction, autorun and when. More info here: https://mobx.js.org/reactions.html
// Here is example that will help you to do some work when selection changed.
(0,react.useEffect)(function(){return (0,mobx_esm/* reaction */.U5)(function(){if(storeRef.current){// When you read properties in any observable object mobx subscribes to changes in this properties 
// and will call function you provide as a second argument to reaction function.
return storeRef.current.selectionState.selectedItems.map(function(i){return i;});}},function(selectedItems,prevSelectedItems){console.log('Selection updated. Current selected nodes: ',selectedItems==null?void 0:selectedItems.filter(function(i){return i instanceof index_esm.NodeState;}).map(function(n){return n.id;}));});},[storeRef.current]);return/*#__PURE__*/react.createElement(index_esm.Diagram,{storeRef:storeRef,settings:{callbacks:{nodesAdded:function nodesAdded(addResults,failedToAdd,importing,store){console.log('Added nodes:');console.log(addResults.map(function(r){return r.export();}));},nodePositionChanged:function nodePositionChanged(node,oldPos,newPos,isDragActive,store){console.log("Position of node '"+node.id+"' changed from '"+oldPos.toString()+"' to '"+newPos.toString()+"'");},dragStateChanged:function dragStateChanged(nodes,dragStarted,store){console.log((dragStarted?'Start':'Finish')+" dragging nodes: '"+nodes.map(function(n){return n.id;}).reduce(function(prev,val){return prev+', '+val;})+"'");}}},initState:{nodes:[{id:'node_1',label:'Node 1',position:[300,300],type:'output_horizontal'},{id:'node_2',label:'Node 2',position:[520,400],type:'input_output_horizontal'},{id:'node_3',label:'Node 3',position:[520,200],type:'input_horizontal'}],links:[{source:{nodeId:'node_1',portId:'output'},target:{nodeId:'node_2',portId:'input'}},{source:{nodeId:'node_1',portId:'output'},target:{nodeId:'node_3',portId:'input'}},{source:{nodeId:'node_3',portId:'input'},target:{nodeId:'node_2',portId:'output'}}]}});}
;// CONCATENATED MODULE: ./src/pages/examples/callbacks.jsx
function Example(){return/*#__PURE__*/react.createElement(_exampleWrapper/* ExampleWrapper */.U,{title:"Callbacks Example"},/*#__PURE__*/react.createElement(_diagramContainer/* DiagramContainer */.G,null,/*#__PURE__*/react.createElement(examples_callbacksDiagram,null)),/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,{className:"language-jsx"},_callbacksDiagram));}

/***/ })

}]);