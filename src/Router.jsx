import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import TimePage from "./pages/Check/Time";
import NamePage from "./pages/Check/Name";
import EndPage from "./pages/Check/End";
import AdminPage from "./pages/Admin";
import AdminPw from "./pages/AdminPw/AdminPw";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/time" element={<TimePage />} />
                <Route path="/Name" element={<NamePage />} />
                <Route path="/End" element={<EndPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/adminPW" element={<AdminPw/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
