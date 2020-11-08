import React from "react";
import {} from "recoil";

export const LinksLayer = (props: { transform: string }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        overflow: "visible",
        transformOrigin: "0px 0px",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        transform: props.transform,
      }}
    ></div>
  );
};
