import React from "react";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Favourite } from "./components/Favourite";
export default () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourites" element={<Favourite />} />
    </Routes>
  </>
);
