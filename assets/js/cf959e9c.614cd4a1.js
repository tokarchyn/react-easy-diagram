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
/* harmony default export */ var _dynamicPortsDiagram = ("import React, { useCallback, useEffect, useRef, useState } from 'react';\r\nimport {\r\n  Diagram,\r\n  disableNodeUserInteractionClassName,\r\n  INodeVisualComponentProps,\r\n  Port,\r\n  usePorts,\r\n  usePortUserInteraction,\r\n} from '@react-easy-diagram/core';\r\nimport { observer } from 'mobx-react-lite';\r\n\r\nconst PortWithLabel: React.FC<{\r\n  id: string;\r\n  remove?: (id: string) => any;\r\n}> = (props) => {\r\n  return (\r\n    <div>\r\n      {props.remove && (<button onClick={() => props.remove && props.remove(props.id)}>X</button>)}\r\n      <span>Port id: {props.id}</span>\r\n      <Port id={props.id} />\r\n    </div>\r\n  );\r\n};\r\n\r\nconst NodeComponent = observer<INodeVisualComponentProps>(\r\n  ({ entity, draggableRef }) => {\r\n    const [ports, setPorts] = useState<string[]>([]);\r\n    const remove = useCallback(\r\n      (idToRemove: string) =>\r\n        setPorts((ids) => ids.filter((id) => id !== idToRemove)),\r\n      [setPorts]\r\n    );\r\n    const [portToAdd, setPortToAdd] = useState<string>('');\r\n\r\n    return (\r\n      <div className='react_fast_diagram_Node_Default' ref={draggableRef}>\r\n        <span>\r\n          <input\r\n            type='number'\r\n            onChange={(event) => setPortToAdd(event.target.value)}\r\n            className={disableNodeUserInteractionClassName}\r\n          />\r\n          <button\r\n            onClick={() =>\r\n              setPorts((ports) =>\r\n                ports.includes(portToAdd) ? ports : [...ports, portToAdd]\r\n              )\r\n            }\r\n          >\r\n            add new\r\n          </button>\r\n          <button\r\n            onClick={() =>\r\n              setPorts([])\r\n            }\r\n          >remove all</button>\r\n        </span>\r\n        <PortWithLabel id={\"test\"} key={\"test\"}/>\r\n        {ports.map((id) => (\r\n          <PortWithLabel id={id} remove={remove} key={id}/>\r\n        ))}\r\n      </div>\r\n    );\r\n  }\r\n);\r\n\r\nexport default () => (\r\n  <Diagram\r\n    initState={{\r\n      nodes: [\r\n        {\r\n          id: 'node_1',\r\n          position: [100, 100],\r\n          componentType: 'dynamic',\r\n        },\r\n      ],\r\n    }}\r\n    settings={{\r\n      nodes: {\r\n        components: {\r\n          dynamic: NodeComponent,\r\n        },\r\n      },\r\n    }}\r\n  />\r\n);\r\n");
// EXTERNAL MODULE: ../lib_core/dist/index.js
var dist = __webpack_require__(4513);
// EXTERNAL MODULE: ../node_modules/mobx-react-lite/es/index.js + 17 modules
var es = __webpack_require__(5479);
;// CONCATENATED MODULE: ./src/pages/examples/_dynamicPortsDiagram.tsx
var PortWithLabel=function PortWithLabel(props){return/*#__PURE__*/react.createElement("div",null,props.remove&&/*#__PURE__*/react.createElement("button",{onClick:function onClick(){return props.remove&&props.remove(props.id);}},"X"),/*#__PURE__*/react.createElement("span",null,"Port id: ",props.id),/*#__PURE__*/react.createElement(dist.Port,{id:props.id}));};var NodeComponent=(0,es.observer)(function(_ref){var entity=_ref.entity,draggableRef=_ref.draggableRef;var _useState=(0,react.useState)([]),ports=_useState[0],setPorts=_useState[1];var remove=(0,react.useCallback)(function(idToRemove){return setPorts(function(ids){return ids.filter(function(id){return id!==idToRemove;});});},[setPorts]);var _useState2=(0,react.useState)(''),portToAdd=_useState2[0],setPortToAdd=_useState2[1];return/*#__PURE__*/react.createElement("div",{className:"react_fast_diagram_Node_Default",ref:draggableRef},/*#__PURE__*/react.createElement("span",null,/*#__PURE__*/react.createElement("input",{type:"number",onChange:function onChange(event){return setPortToAdd(event.target.value);},className:dist.disableNodeUserInteractionClassName}),/*#__PURE__*/react.createElement("button",{onClick:function onClick(){return setPorts(function(ports){return ports.includes(portToAdd)?ports:[].concat(ports,[portToAdd]);});}},"add new"),/*#__PURE__*/react.createElement("button",{onClick:function onClick(){return setPorts([]);}},"remove all")),/*#__PURE__*/react.createElement(PortWithLabel,{id:"test",key:"test"}),ports.map(function(id){return/*#__PURE__*/react.createElement(PortWithLabel,{id:id,remove:remove,key:id});}));});/* harmony default export */ var examples_dynamicPortsDiagram = (function(){return/*#__PURE__*/react.createElement(dist.Diagram,{initState:{nodes:[{id:'node_1',position:[100,100],componentType:'dynamic'}]},settings:{nodes:{components:{dynamic:NodeComponent}}}});});
;// CONCATENATED MODULE: ./src/pages/examples/dynamicPorts.jsx
function Example(){return/*#__PURE__*/react.createElement(_exampleWrapper/* ExampleWrapper */.U,{title:"Dynamic Ports Example"},/*#__PURE__*/react.createElement(_diagramContainer/* DiagramContainer */.G,null,/*#__PURE__*/react.createElement(examples_dynamicPortsDiagram,null)),/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,{className:"language-jsx"},_dynamicPortsDiagram));}

/***/ })

}]);