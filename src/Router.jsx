import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/Start/index";
import MainPage from "./pages/Check/Main";
import TimePage from "./pages/Check/Time";
import NamePage from "./pages/Check/Name";
import EndPage from "./pages/Check/End";
import AdminPage from "./pages/Admin/Admin";
import AdminPw from "./pages/AdminPw/AdminPw";
import Error from "./pages/Error";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/" element={<StartPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/time" element={<TimePage />} />
                <Route path="/name" element={<NamePage />} />
                <Route path="/end" element={<EndPage />} />
                <Route path="/admin" element={<AdminPage/>} />
                <Route path="/adminPW" element={<AdminPw/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
