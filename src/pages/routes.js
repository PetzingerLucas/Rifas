import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import GenerateRaffle from "./GenerateRaffle";

import RafflePage from "./RafflePage";

const Path = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RafflePage />} path="/rifa" exact />
        <Route element={<GenerateRaffle />} path="/criar" exact />
      </Routes>
    </BrowserRouter>
  );
};

export default Path;
