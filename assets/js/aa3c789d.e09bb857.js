(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{84:function(t,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return s}));var o=r(0),e=r.n(o),i=r(96),d=r(93),p=r(97),u=r(94),a=function(){return e.a.createElement(u.Diagram,{initState:{nodes:[{id:"Node 1",position:[300,300],ports:[{id:"output_1",type:"bottom"}]},{id:"Node 2",position:[520,400],ports:[{id:"input_1",type:"top"},{id:"input_2",type:"top"},{id:"output_1",type:"right"},{id:"output_2",type:"right"},{id:"output_3",type:"right"}]},{id:"Node 3",position:[520,200],ports:[{id:"input_1",type:"top"},{id:"output_1",type:"bottom"},{id:"output_2",type:"bottom"}]}],links:[{id:"Node 1 - Node 2",source:{nodeId:"Node 1",portId:"output_1"},target:{nodeId:"Node 2",portId:"input_1"},componentType:"attention"},{id:"Node 1 - Node 3",source:{nodeId:"Node 1",portId:"output_1"},target:{nodeId:"Node 3",portId:"input_1"}},{id:"Node 3 - Node 2",source:{nodeId:"Node 3",portId:"output_1"},target:{nodeId:"Node 2",portId:"input_1"}}]},settings:{links:{components:{attention:Object(u.createLinkDefault)({color:"red"})},pathConstructor:Object(u.createCurvedLinkPathConstructor)()},diagram:{miniControlComponent:Object(u.createDefaultMiniControl)({buttonsSize:30,position:"left-bottom"})}}})};function s(){return e.a.createElement(i.a,{title:"Basic Example"},e.a.createElement(p.a,null,e.a.createElement(a,null)),e.a.createElement(d.a,{className:"language-jsx"},"import React from 'react';\r\nimport {\r\n  createCurvedLinkPathConstructor,\r\n  createDefaultMiniControl,\r\n  createLinkDefault,\r\n  Diagram,\r\n} from '@react-easy-diagram/core';\r\n\r\nexport default function () {\r\n  return (\r\n    <Diagram\r\n      initState={{\r\n        nodes: [\r\n          {\r\n            id: 'Node 1',\r\n            position: [300, 300],\r\n            ports: [{ id: 'output_1', type: 'bottom' }],\r\n          },\r\n          {\r\n            id: 'Node 2',\r\n            position: [520, 400],\r\n            ports: [\r\n              { id: 'input_1', type: 'top' },\r\n              { id: 'input_2', type: 'top' },\r\n              { id: 'output_1', type: 'right' },\r\n              { id: 'output_2', type: 'right' },\r\n              { id: 'output_3', type: 'right' },\r\n            ],\r\n          },\r\n          {\r\n            id: 'Node 3',\r\n            position: [520, 200],\r\n            ports: [\r\n              { id: 'input_1', type: 'top' },\r\n              { id: 'output_1', type: 'bottom' },\r\n              { id: 'output_2', type: 'bottom' },\r\n            ],\r\n          },\r\n        ],\r\n        links: [\r\n          {\r\n            id: 'Node 1 - Node 2',\r\n            source: {\r\n              nodeId: 'Node 1',\r\n              portId: 'output_1',\r\n            },\r\n            target: {\r\n              nodeId: 'Node 2',\r\n              portId: 'input_1',\r\n            },\r\n            componentType: 'attention',\r\n          },\r\n          {\r\n            id: 'Node 1 - Node 3',\r\n            source: {\r\n              nodeId: 'Node 1',\r\n              portId: 'output_1',\r\n            },\r\n            target: {\r\n              nodeId: 'Node 3',\r\n              portId: 'input_1',\r\n            },\r\n          },\r\n          {\r\n            id: 'Node 3 - Node 2',\r\n            source: {\r\n              nodeId: 'Node 3',\r\n              portId: 'output_1',\r\n            },\r\n            target: {\r\n              nodeId: 'Node 2',\r\n              portId: 'input_1',\r\n            },\r\n          },\r\n        ],\r\n      }}\r\n      settings={{\r\n        links: {\r\n          components: {\r\n            attention: createLinkDefault({ color: 'red' }),\r\n          },\r\n          pathConstructor: createCurvedLinkPathConstructor(),\r\n        },\r\n        diagram: {\r\n          miniControlComponent: createDefaultMiniControl({\r\n            buttonsSize: 30,\r\n            position: 'left-bottom',\r\n          }),\r\n        },\r\n      }}\r\n    />\r\n  );\r\n}\r\n"))}}}]);