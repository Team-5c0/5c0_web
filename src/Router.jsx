import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/Admin";
import MainPage from "./pages/Main";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/main" element={<AdminPage />} />
                <Route path="/admin" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
