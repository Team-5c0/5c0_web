import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/Admin";
import MainPage from "./pages/Main";
import WashRoom from "./components/WashRoom/WashRoom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
