import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/Admin";
import MainPage from "./pages/Main";
import TimePage from "./pages/Check/Time";
import NamePage from "./pages/Check/Name";
import EndPage from "./pages/Check/End";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/main" element={<MainPage />} />
                <Route path="/main/time" element={<TimePage />} />
                <Route path="/main/Name" element={<NamePage />} />
                <Route path="/main/End" element={<EndPage />} />
                <Route path="/admin" element={<AdminPage />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;
