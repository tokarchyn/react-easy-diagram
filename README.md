<img src="https://github.com/tokarchyn/react-easy-diagram/blob/main/repo/logo-with-name.png?raw=true" alt="React Easy Digram logo" height="50">

---

Open source library to build highly customazible interactive React diagrams with easy.
![React Easy Digram demo image](https://github.com/tokarchyn/react-easy-diagram/blob/main/website/static/img/demo.png?raw=true)

- **Website**: https://tokarchyn.github.io/react-easy-diagram
- **Repository**: https://github.com/tokarchyn/react-easy-diagram
- Live playground in Codesandbox: https://codesandbox.io/s/react-easy-diagram-basic-kki8o

## Features
- **Customization** - The library was designed from the ground up to be easily customizable so you can change any component you like or customize existing ones.
- **HTML nodes** - Nodes are represented as `HTML`, so you can define them at any level of complexity. *(Because of this, if expected nodes number exceeds hundreds of them then it is better to use libraries with other approaches, for example diagrams that use Canvas)*  
- **Advanced API** - Entire diagram state with all its methods and types are available so you are aware about everything that is going on in library and can manipulate the state as you want.
- **Performance** - Thanks to `MobX` all components are rerendered only when it strictly needed.
- **Touch devices support** - User interaction is implemented with helps of `UseGesture` library that enables you to use diagrams not only on PC but also on touch devices, use pinch & zoom gesture.

## Installation
Using `npm`:
```
npm install react-easy-diagram
```
Using `yarn`:
```
yarn add react-easy-diagram
```

## Getting started
There are three main entities in library: `node`, `port`, `link`.
<img src="https://github.com/tokarchyn/react-easy-diagram/blob/main/repo/entities.png?raw=true" alt="Entities" height="130">
To create simple diagram import `Diagram`:
```
import { Diagram } from "react-easy-diagram";
```
Pass it to the rendering function and provide props, for example:
```
const YourDiagram = () => (
    <Diagram initState={{
        nodes: [
          {
            id: "node_1",
            position: [300, 300],
          },
          {
            id: "node_2",
            position: [520, 400],
          },
        ],
        links: [
          {
            source: {
              nodeId: "node_1",
              portId: "output"
            },
            target: {
              nodeId: "node_2",
              portId: "input"
            }
          },
        ]
      }} />
);
```
Right now you can use examples in the [website](https://tokarchyn.github.io/react-easy-diagram) to see how you can customize, change settings and do other things.Also, thanks to typescript you can explore API right in the code editor. Documentation is a top priority and will be provided as soon as possible.