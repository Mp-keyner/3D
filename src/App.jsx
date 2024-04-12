import React from "react";
import { StlViewer } from "react-stl-viewer";
// import stld from "./assets/Baby_Yoda_v2.2.stl";
// import stld from "./assets/Octocat-v2.stl";
import stld from "./assets/pie1.stl";

const App = () => {
  const style = {
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
  };
  return (
    <>
      <StlViewer style={style} orbitControls shadows url={stld} />
    </>
  );
};

export default App;
