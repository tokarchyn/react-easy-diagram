(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[317],{

/***/ 7207:
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
;// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_dynamicPortsDiagram.tsx
/* harmony default export */ var _dynamicPortsDiagram = ("import React, { useCallback, useState } from 'react';\nimport {\n  Diagram,\n  disableNodeUserInteractionClassName,\n  INodeVisualComponentProps,\n  Port\n} from 'react-easy-diagram';\nimport { observer } from 'mobx-react-lite';\n\nconst PortWithLabel: React.FC<{\n  id: string;\n  remove?: (id: string) => any;\n}> = (props) => {\n  return (\n    <div>\n      {props.remove && (<button onClick={() => props.remove && props.remove(props.id)}>X</button>)}\n      <span>Port id: {props.id}</span>\n      <Port id={props.id} />\n    </div>\n  );\n};\n\nconst NodeComponent = observer<INodeVisualComponentProps>(\n  ({ entity, draggableRef }) => {\n    const [ports, setPorts] = useState<string[]>([]);\n    const remove = useCallback(\n      (idToRemove: string) =>\n        setPorts((ids) => ids.filter((id) => id !== idToRemove)),\n      [setPorts]\n    );\n    const [portToAdd, setPortToAdd] = useState<string>('');\n\n    return (\n      <div className='react_fast_diagram_Node_Default' ref={draggableRef}>\n        <span>\n          <input\n            type='number'\n            onChange={(event) => setPortToAdd(event.target.value)}\n            className={disableNodeUserInteractionClassName}\n          />\n          <button\n            onClick={() =>\n              setPorts((ports) =>\n                ports.includes(portToAdd) ? ports : [...ports, portToAdd]\n              )\n            }\n          >\n            add new\n          </button>\n          <button\n            onClick={() =>\n              setPorts([])\n            }\n          >remove all</button>\n        </span>\n        <PortWithLabel id={\"test\"} key={\"test\"}/>\n        {ports.map((id) => (\n          <PortWithLabel id={id} remove={remove} key={id}/>\n        ))}\n      </div>\n    );\n  }\n);\n\nexport default () => (\n  <Diagram\n    initState={{\n      nodes: [\n        {\n          id: 'node_1',\n          position: [100, 100],\n          componentType: 'dynamic',\n        },\n      ],\n    }}\n    settings={{\n      nodes: {\n        components: {\n          dynamic: NodeComponent,\n        },\n      },\n    }}\n  />\n);\n");
// EXTERNAL MODULE: ../lib/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(4714);
// EXTERNAL MODULE: ../node_modules/mobx-react-lite/es/index.js + 17 modules
var es = __webpack_require__(5479);
;// CONCATENATED MODULE: ./src/pages/examples/_dynamicPortsDiagram.tsx
var PortWithLabel=function PortWithLabel(props){return/*#__PURE__*/react.createElement("div",null,props.remove&&/*#__PURE__*/react.createElement("button",{onClick:function onClick(){return props.remove&&props.remove(props.id);}},"X"),/*#__PURE__*/react.createElement("span",null,"Port id: ",props.id),/*#__PURE__*/react.createElement(index_esm.Port,{id:props.id}));};var NodeComponent=(0,es/* observer */.Pi)(function(_ref){var entity=_ref.entity,draggableRef=_ref.draggableRef;var _useState=(0,react.useState)([]),ports=_useState[0],setPorts=_useState[1];var remove=(0,react.useCallback)(function(idToRemove){return setPorts(function(ids){return ids.filter(function(id){return id!==idToRemove;});});},[setPorts]);var _useState2=(0,react.useState)(''),portToAdd=_useState2[0],setPortToAdd=_useState2[1];return/*#__PURE__*/react.createElement("div",{className:"react_fast_diagram_Node_Default",ref:draggableRef},/*#__PURE__*/react.createElement("span",null,/*#__PURE__*/react.createElement("input",{type:"number",onChange:function onChange(event){return setPortToAdd(event.target.value);},className:index_esm.disableNodeUserInteractionClassName}),/*#__PURE__*/react.createElement("button",{onClick:function onClick(){return setPorts(function(ports){return ports.includes(portToAdd)?ports:[].concat(ports,[portToAdd]);});}},"add new"),/*#__PURE__*/react.createElement("button",{onClick:function onClick(){return setPorts([]);}},"remove all")),/*#__PURE__*/react.createElement(PortWithLabel,{id:"test",key:"test"}),ports.map(function(id){return/*#__PURE__*/react.createElement(PortWithLabel,{id:id,remove:remove,key:id});}));});/* harmony default export */ var examples_dynamicPortsDiagram = (function(){return/*#__PURE__*/react.createElement(index_esm.Diagram,{initState:{nodes:[{id:'node_1',position:[100,100],componentType:'dynamic'}]},settings:{nodes:{components:{dynamic:NodeComponent}}}});});
;// CONCATENATED MODULE: ./src/pages/examples/dynamicPorts.jsx
function Example(){return/*#__PURE__*/react.createElement(_exampleWrapper/* ExampleWrapper */.U,{title:"Dynamic Ports Example"},/*#__PURE__*/react.createElement(_diagramContainer/* DiagramContainer */.G,null,/*#__PURE__*/react.createElement(examples_dynamicPortsDiagram,null)),/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,{className:"language-jsx"},_dynamicPortsDiagram));}

/***/ })

}]);