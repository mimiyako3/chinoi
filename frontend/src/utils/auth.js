/** 
 * author: 航世 or 若菜
 * 認証関連のユーティリティ関数
 */

// トークンが存在するかどうかでログイン状態を判定
export const isLoggedIn = () => {
  return !!localStorage.getItem('token');
};

// 仮のログイン処理（トークン保存）
export const login = () => {
  localStorage.setItem('token', 'dummy_token');
};

// ログアウト処理（トークン削除）
export const logout = () => {
  localStorage.removeItem('token');
};