import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutPage from "./LayoutPage";
import LandingPage from "./pages/LandingPage";
import NFTBuyPage from "./pages/NFTBuyPage";
import NFTSwapPage from "./pages/NFTSwapPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/buy-nft" element={<NFTBuyPage />} />
        <Route path="/swap-nft" element={<NFTSwapPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
