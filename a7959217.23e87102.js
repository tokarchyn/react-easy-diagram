(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return c}));var i=t(3),o=t(7),s=(t(0),t(90)),p={title:"Simple",hide_table_of_contents:!0,hide_title:!0},r={unversionedId:"examples/simple",id:"examples/simple",isDocsHomePage:!1,title:"Simple",description:"`js live",source:"@site/docs\\examples\\simple.mdx",slug:"/examples/simple",permalink:"/docs/examples/simple",editUrl:"https://github.com/tokarchyn/react-easy-diagram/edit/main/website/docs/examples/simple.mdx",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Basic",permalink:"/docs/examples/basic"}},d=[],a={toc:d};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},a,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function App() {\n  return (\n    <Diagram\n      initState={{\n        nodes: [\n          {\n            id: 'Node 1',\n            position: [100, 100],\n            ports: [{ id: 'port', type: 'right' }],\n          },\n          {\n            id: 'Node 2',\n            position: [420, 300],\n            ports: [\n              { id: 'port_1', type: 'left' },\n              { id: 'port_2', type: 'right' },\n            ],\n          },\n          {\n            id: 'Node 3',\n            position: [420, 100],\n            ports: [{ id: 'port', type: 'left' }],\n          },\n        ],\n        links: [\n          {\n            source: { nodeId: 'Node 1', portId: 'port' },\n            target: { nodeId: 'Node 2', portId: 'port_1' },\n          },\n        ],\n      }}\n    />\n  );\n}\n")))}c.isMDXComponent=!0}}]);