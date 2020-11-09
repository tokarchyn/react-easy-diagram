import React from "react";
import "./App.css";
import { Diagram, useDiagramRef } from "./components/Diagram";

const btnStyle: React.CSSProperties = {
  padding: "14px 16px",
};

const liStyle: React.CSSProperties = {
  float: "left",
  gap: '10px'
};

function App() {
  const diagramRef = useDiagramRef();

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          backgroundColor: "pink",
        }}
      >
        <li style={liStyle}>
          <div
            style={btnStyle}
            onClick={() =>
              diagramRef.current?.addNode({
                id: "" + Math.floor(Math.random() * 100000),
                position: {
                  x: Math.floor(Math.random() * 300),
                  y: Math.floor(Math.random() * 300),
                },
              })
            }
          >
            Add rand node
          </div>
        </li>
        <li style={liStyle}>
          <div style={btnStyle}>Second</div>
        </li>
      </ul>
      <div
        style={{
          flexGrow: 1,
          backgroundColor: "lightgray",
        }}
      >
        <Diagram
          ref={diagramRef}
          initialState={[
            { id: "node_1", position: { x: 0, y: 0 } },
            { id: "node_2", position: { x: 100, y: 100 } },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
