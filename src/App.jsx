import React from "react";
import { StlViewer } from "react-stl-viewer";
// import stld from "./assets/Baby_Yoda_v2.2.stl";
// import stld from "./assets/Octocat-v2.stl";
import stld from "./assets/pie1.stl";
import stld2 from "./assets/pie2.stl";
import ViewStl3D from "./components/ViewStl3D";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/1" element={<ViewStl3D urlStl={stld} />} />
          <Route path="/2" element={<ViewStl3D urlStl={stld2} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
