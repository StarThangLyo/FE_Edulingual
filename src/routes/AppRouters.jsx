import React from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import PermissionDeniedPage from "../pages/PermissionDeniedPage/PermissionDeniedPage";
import { LoginSignupPage } from "../pages/LoginPage/LoginSignupPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { SearchPage } from "../pages/SearchPage/SearchPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";

export const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/homepage" />}></Route>
      <Route path="/dashboard" element={<DashboardPage />}></Route>
      <Route
        path="/permission-denied"
        element={<PermissionDeniedPage />}
      ></Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/loginpage" element={<LoginSignupPage />}></Route>
      <Route path="/homepage" element={<HomePage />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
    </Routes>
  );
};
