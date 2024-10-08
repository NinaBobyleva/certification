import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage.tsx";
import { paths } from "./path.ts";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={paths.HOME} element={<HomePage />} />
      <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
