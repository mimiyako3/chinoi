/** 
 * author: 航世 or 若菜
 * ルーティング設定
 */

import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import StartPage from '../pages/StartPage';
import ChinoiHomePage from '../pages/ChinoiHomePage';
import HealthFormPage from '../pages/HealthFormPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
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