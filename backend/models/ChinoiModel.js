const db = require('./db');

// DBにChinoiを登録
const createChinoi = async (userId, imageUrl, name, personality, prompt) => {
  const [result] = await db.execute(
    'INSERT INTO chinoi (user_id, image_url, name, personality, prompt, created_at) VALUES (?, ?, ?, ?, ?, NOW())',
    [userId, imageUrl, name, personality, prompt]
  );
  return result.insertId;
};

// 今日のChinoiを取得
const getTodayChinoi = async (userId) => {
  const [rows] = await db.execute(
    'SELECT * FROM chinoi WHERE user_id = ? AND DATE(created_at) = CURDATE()',
    [userId]
  );
  return rows[0];
};

// 過去のChinoi履歴を取得
const getChinoiHistory = async (userId) => {
  const [rows] = await db.execute(
    'SELECT * FROM chinoi WHERE user_id = ? ORDER BY created_at DESC',
    [userId]
  );
  return rows;
};

module.exports = { createChinoi, getTodayChinoi, getChinoiHistory };
