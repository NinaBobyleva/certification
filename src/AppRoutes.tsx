import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage.tsx";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}