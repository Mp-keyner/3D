import React from "react";
import { StlViewer } from "react-stl-viewer";

const ViewStl3D = ({ urlStl }) => {
  const style = {
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
  };
  return (
    <>
      <StlViewer style={style} orbitControls shadows url={urlStl} />
    </>
  );
};

export default ViewStl3D;
