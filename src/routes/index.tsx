import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Default } from "@/layouts/default";

import { Home } from "@/pages/home";
import { Details } from "@/pages/details";

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;