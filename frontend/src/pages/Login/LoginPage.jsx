/** 
 * author: 航世 or 若菜
 * ログインページ
 */

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // 仮トークンを保存（本来はAPIから受け取る）
    localStorage.setItem('token', 'dummy_token');


     // 入力は今は使わない（将来的に使う予定）
     console.log('ログイン試行:', { email, password });

    // 入力フォーム画面へ遷移
    navigate('/form');
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>ログイン</h2>
      <input type="email" placeholder="メールアドレス" required  />
      <input type="password" placeholder="パスワード" required autoComplete='' />
      <button type="submit">ログイン</button>
    </form>
  )
}

export default LoginPage