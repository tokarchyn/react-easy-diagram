(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(n,t,e){"use strict";e.r(t),e.d(t,"frontMatter",(function(){return s})),e.d(t,"metadata",(function(){return r})),e.d(t,"toc",(function(){return a})),e.d(t,"default",(function(){return c}));var o=e(3),i=e(7),p=(e(0),e(90)),s={title:"Basic",hide_table_of_contents:!0,hide_title:!0},r={unversionedId:"examples/basic",id:"examples/basic",isDocsHomePage:!1,title:"Basic",description:"`js live",source:"@site/docs\\examples\\basic.mdx",slug:"/examples/basic",permalink:"/docs/examples/basic",editUrl:"https://github.com/tokarchyn/react-easy-diagram/edit/main/website/docs/examples/basic.mdx",version:"current",sidebar:"docs",previous:{title:"Simple",permalink:"/docs/examples/simple"},next:{title:"Performance",permalink:"/docs/examples/perf"}},a=[],d={toc:a};function c(n){var t=n.components,e=Object(i.a)(n,["components"]);return Object(p.b)("wrapper",Object(o.a)({},d,e,{components:t,mdxType:"MDXLayout"}),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function App() {\n  return (\n    <Diagram\n      initState={{\n        nodes: [\n          {\n            id: 'Node 1',\n            position: [300, 300],\n            ports: [{ id: 'output_1', type: 'bottom' }],\n          },\n          {\n            id: 'Node 2',\n            position: [520, 400],\n            ports: [\n              { id: 'input_1', type: 'top' },\n              { id: 'input_2', type: 'top' },\n              { id: 'output_1', type: 'right' },\n              { id: 'output_2', type: 'right' },\n              { id: 'output_3', type: 'right' },\n            ],\n          },\n          {\n            id: 'Node 3',\n            position: [520, 200],\n            ports: [\n              { id: 'input_1', type: 'top' },\n              { id: 'output_1', type: 'bottom' },\n              { id: 'output_2', type: 'bottom' },\n            ],\n          },\n        ],\n        links: [\n          {\n            source: {\n              nodeId: 'Node 1',\n              portId: 'output_1',\n            },\n            target: {\n              nodeId: 'Node 2',\n              portId: 'input_1',\n            },\n            componentType: 'attention',\n          },\n        ],\n      }}\n      settings={{\n        links: {\n          components: {\n            attention: createLinkDefault({ color: 'red' }),\n          },\n          pathConstructor: createCurvedLinkPathConstructor(),\n        },\n        diagram: {\n          miniControlComponent: createDefaultMiniControl({\n            buttonsSize: 30,\n            position: 'left-bottom',\n          }),\n        },\n      }}\n    />\n  );\n}\n")))}c.isMDXComponent=!0}}]);