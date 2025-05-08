/** 
 * author: 航世 or 若菜
 * ルーティング設定
 */

import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import StartPage from '../pages/Start/StartPage';
import ChinoiHomePage from '../pages/ChinoiHome/ChinoiHomePage';
import HealthFormPage from '../pages/HealthForm/HealthFormPage';
import SignupPage from '../pages/Signup/SignupPage';
import LoginPage from '../pages/Login/LoginPage';
import { isLoggedIn } from '../utils/auth';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* スタート画面（最初に表示される） */}
        <Route path="/" element={<StartPage />} />

        {/* ログイン・サインアップ */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* ログイン後のみアクセス可能なページ */}
        <Route
          path="/form"
          element={isLoggedIn() ? <HealthFormPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/chinoiHome"
          element={isLoggedIn() ? <ChinoiHomePage /> : <Navigate to="/login" />}
        />

        {/* それ以外のURLにアクセスされたときはスタートへ */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes