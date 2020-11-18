import React, { useEffect, useState } from "react";
import "./App.css";
import { Diagram, useDiagramRef, NodeState } from "diagram-lib";

const btnStyle: React.CSSProperties = {
  padding: "14px 16px",
};

const liStyle: React.CSSProperties = {
  float: "left",
  gap: '10px'
};

const generateLargeDiagram = (colNum: number, rowNum: number) : NodeState[] => {
  const nodes = [];
  for(let i = 0; i < colNum; i++) {
    for(let j = 0; j < rowNum; j++) {
      nodes.push({ id: `node_${i}_${j}`, position: { x: i * 120, y: j * 120 } })
    }
  }

  return nodes;
}

export const App = () => {
  const diagramRef = useDiagramRef();
  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);

  useEffect(() => {
    diagramRef.current?.reinitState(generateLargeDiagram(row,col))
  }, [diagramRef, row,col])

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
        <li style={liStyle}>
          <input type="number" onChange={(e) => setRow(parseInt(e.target.value))} value={row} />
        </li>
        <li style={liStyle}>
          <input type="number" onChange={(e) => setCol(parseInt(e.target.value))} value={col} />
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
          initialState={generateLargeDiagram(row,col)}
        />
      </div>
    </div>
  );
}
