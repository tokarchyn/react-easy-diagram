import React from "react";
import {} from "recoil";

export const LinksLayer = (props: { transform: string }) => {
  return (
    <div
      className="react-fast-diagram-Layer"
      style={{
        transform: props.transform,
      }}
    ></div>
  );
};
