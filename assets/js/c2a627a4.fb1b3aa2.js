(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[409],{

/***/ 7541:
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
;// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_portPositionDiagram.tsx
/* harmony default export */ var _portPositionDiagram = ("import React, { useState } from 'react';\r\nimport {\r\n  createNodeDefault,\r\n  createPortInnerDefault,\r\n  Diagram,\r\n  disableNodeUserInteractionClassName,\r\n  INodeVisualComponentProps,\r\n  NodeState,\r\n  Point,\r\n  Port,\r\n} from '@react-easy-diagram/core';\r\nimport { observer } from 'mobx-react-lite';\r\n\r\nconst SomeNode = observer<INodeVisualComponentProps>(\r\n  ({ draggableRef, entity }) => {\r\n    const [\r\n      portOffsetFromNodeCenter,\r\n      setPortOffsetFromNodeCenter,\r\n    ] = useState<number>();\r\n\r\n    const [\r\n      yellowPortOffsetFromOrigin,\r\n      setYellowPortOffsetFromOrigin,\r\n    ] = useState<Point>([0, 0]);\r\n\r\n    return (\r\n      <div\r\n        ref={draggableRef}\r\n        className='react_fast_diagram_Node_Default'\r\n        style={{\r\n          padding: 15,\r\n          border: entity.selected ? '#6eb7ff solid 1px' : '',\r\n        }}\r\n      >\r\n        <div>Offset from center of node:</div>\r\n        <span>\r\n          <input\r\n            className={disableNodeUserInteractionClassName}\r\n            type='number'\r\n            onChange={(event) =>\r\n              setPortOffsetFromNodeCenter(parseInt(event.target.value) ?? 0)\r\n            }\r\n            defaultValue={0}\r\n          />\r\n        </span>\r\n        <div>Yellow port's offset from origin position:</div>\r\n        <span>\r\n          X:{' '}\r\n          <input\r\n            className={disableNodeUserInteractionClassName}\r\n            type='number'\r\n            style={{ width: 50, marginRight: 10 }}\r\n            onChange={(event) => {\r\n              event.persist();\r\n              setYellowPortOffsetFromOrigin((current) => [\r\n                parseInt(event.target.value),\r\n                current[1],\r\n              ]);\r\n            }}\r\n            defaultValue={0}\r\n          />\r\n          Y:{' '}\r\n          <input\r\n            className={disableNodeUserInteractionClassName}\r\n            type='number'\r\n            style={{ width: 50 }}\r\n            onChange={(event) => {\r\n              event.persist();\r\n              setYellowPortOffsetFromOrigin((current) => [\r\n                current[0],\r\n                parseInt(event.target.value),\r\n              ]);\r\n            }}\r\n            defaultValue={0}\r\n          />\r\n        </span>\r\n        <Port\r\n          id='1'\r\n          position='left-top'\r\n          offsetFromNodeCenter={portOffsetFromNodeCenter}\r\n        />\r\n        <Port\r\n          id='2'\r\n          position='left-top'\r\n          offsetFromNodeCenter={portOffsetFromNodeCenter}\r\n          offsetFromOrigin={[0, 15]}\r\n        />\r\n        <Port\r\n          id='3'\r\n          position='left-center'\r\n          offsetFromNodeCenter={portOffsetFromNodeCenter}\r\n        />\r\n        <Port\r\n          id='4'\r\n          position='left-bottom'\r\n          offsetFromNodeCenter={portOffsetFromNodeCenter}\r\n        />\r\n        <Port\r\n          id='5'\r\n          position='center-top'\r\n          offsetFromNodeCenter={portOffsetFromNodeCenter}\r\n          linkDirection='up'\r\n        />\r\n        <Port\r\n          id='6'\r\n          position='center-bottom'\r\n          offsetFromNodeCenter={portOffsetFromNodeCenter}\r\n          linkDirection='down'\r\n        />\r\n        <Port\r\n          id='7'\r\n          position='right-top'\r\n          offsetFromNodeCenter={portOffsetFromNodeCenter}\r\n        />\r\n        <Port\r\n          id='8'\r\n          position='right-center'\r\n          offsetFromNodeCenter={portOffsetFromNodeCenter}\r\n          offsetFromOrigin={yellowPortOffsetFromOrigin}\r\n          type='custom_port'\r\n        />\r\n        <Port\r\n          id='9'\r\n          position='right-bottom'\r\n          offsetFromNodeCenter={portOffsetFromNodeCenter}\r\n        />\r\n      </div>\r\n    );\r\n  }\r\n);\r\n\r\nexport default () => (\r\n  <Diagram\r\n    initState={{\r\n      nodes: [\r\n        {\r\n          id: 'node_1',\r\n          position: [100, 100],\r\n        },\r\n      ],\r\n      links: [],\r\n    }}\r\n    settings={{\r\n      nodes: {\r\n        components: {\r\n          default: SomeNode,\r\n        },\r\n      },\r\n      ports: {\r\n        portComponents: {\r\n          custom_port: createPortInnerDefault({\r\n            color: 'yellow',\r\n          }),\r\n        },\r\n      },\r\n    }}\r\n  />\r\n);\r\n");
// EXTERNAL MODULE: ../lib_core/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(1943);
// EXTERNAL MODULE: ../node_modules/mobx-react-lite/es/index.js + 17 modules
var es = __webpack_require__(5479);
;// CONCATENATED MODULE: ./src/pages/examples/_portPositionDiagram.tsx
var SomeNode=(0,es/* observer */.Pi)(function(_ref){var draggableRef=_ref.draggableRef,entity=_ref.entity;var _useState=(0,react.useState)(),portOffsetFromNodeCenter=_useState[0],setPortOffsetFromNodeCenter=_useState[1];var _useState2=(0,react.useState)([0,0]),yellowPortOffsetFromOrigin=_useState2[0],setYellowPortOffsetFromOrigin=_useState2[1];return/*#__PURE__*/react.createElement("div",{ref:draggableRef,className:"react_fast_diagram_Node_Default",style:{padding:15,border:entity.selected?'#6eb7ff solid 1px':''}},/*#__PURE__*/react.createElement("div",null,"Offset from center of node:"),/*#__PURE__*/react.createElement("span",null,/*#__PURE__*/react.createElement("input",{className:index_esm.disableNodeUserInteractionClassName,type:"number",onChange:function onChange(event){var _parseInt;return setPortOffsetFromNodeCenter((_parseInt=parseInt(event.target.value))!=null?_parseInt:0);},defaultValue:0})),/*#__PURE__*/react.createElement("div",null,"Yellow port's offset from origin position:"),/*#__PURE__*/react.createElement("span",null,"X:",' ',/*#__PURE__*/react.createElement("input",{className:index_esm.disableNodeUserInteractionClassName,type:"number",style:{width:50,marginRight:10},onChange:function onChange(event){event.persist();setYellowPortOffsetFromOrigin(function(current){return[parseInt(event.target.value),current[1]];});},defaultValue:0}),"Y:",' ',/*#__PURE__*/react.createElement("input",{className:index_esm.disableNodeUserInteractionClassName,type:"number",style:{width:50},onChange:function onChange(event){event.persist();setYellowPortOffsetFromOrigin(function(current){return[current[0],parseInt(event.target.value)];});},defaultValue:0})),/*#__PURE__*/react.createElement(index_esm.Port,{id:"1",position:"left-top",offsetFromNodeCenter:portOffsetFromNodeCenter}),/*#__PURE__*/react.createElement(index_esm.Port,{id:"2",position:"left-top",offsetFromNodeCenter:portOffsetFromNodeCenter,offsetFromOrigin:[0,15]}),/*#__PURE__*/react.createElement(index_esm.Port,{id:"3",position:"left-center",offsetFromNodeCenter:portOffsetFromNodeCenter}),/*#__PURE__*/react.createElement(index_esm.Port,{id:"4",position:"left-bottom",offsetFromNodeCenter:portOffsetFromNodeCenter}),/*#__PURE__*/react.createElement(index_esm.Port,{id:"5",position:"center-top",offsetFromNodeCenter:portOffsetFromNodeCenter,linkDirection:"up"}),/*#__PURE__*/react.createElement(index_esm.Port,{id:"6",position:"center-bottom",offsetFromNodeCenter:portOffsetFromNodeCenter,linkDirection:"down"}),/*#__PURE__*/react.createElement(index_esm.Port,{id:"7",position:"right-top",offsetFromNodeCenter:portOffsetFromNodeCenter}),/*#__PURE__*/react.createElement(index_esm.Port,{id:"8",position:"right-center",offsetFromNodeCenter:portOffsetFromNodeCenter,offsetFromOrigin:yellowPortOffsetFromOrigin,type:"custom_port"}),/*#__PURE__*/react.createElement(index_esm.Port,{id:"9",position:"right-bottom",offsetFromNodeCenter:portOffsetFromNodeCenter}));});/* harmony default export */ var examples_portPositionDiagram = (function(){return/*#__PURE__*/react.createElement(index_esm.Diagram,{initState:{nodes:[{id:'node_1',position:[100,100]}],links:[]},settings:{nodes:{components:{default:SomeNode}},ports:{portComponents:{custom_port:(0,index_esm.createPortInnerDefault)({color:'yellow'})}}}});});
;// CONCATENATED MODULE: ./src/pages/examples/portPosition.jsx
function Example(){return/*#__PURE__*/react.createElement(_exampleWrapper/* ExampleWrapper */.U,{title:"Port Position Example"},/*#__PURE__*/react.createElement(_diagramContainer/* DiagramContainer */.G,null,/*#__PURE__*/react.createElement(examples_portPositionDiagram,null)),/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,{className:"language-jsx"},_portPositionDiagram));}

/***/ })

}]);