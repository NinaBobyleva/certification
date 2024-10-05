import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notfound" element={<NotFoundPage />} />
        </Routes>
    );
}