import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import TimePage from "./pages/Check/Time";
import NamePage from "./pages/Check/Name";
import EndPage from "./pages/Check/End";
import AdminPage from "./pages/Admin";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/time" element={<TimePage />} />
                <Route path="/name" element={<NamePage />} />
                <Route path="/end" element={<EndPage />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
