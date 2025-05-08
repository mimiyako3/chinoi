const db = require('./db'); // MySQL接続

exports.createAdvice = async (userId, healthDataId, text) => {
  const sql = `INSERT INTO advice (user_id, health_data_id, text, created_at) VALUES (?, ?, ?, NOW())`;
  const [result] = await db.execute(sql, [userId, healthDataId, text]);
  return result.insertId;
};

exports.getTodayAdvice = async (userId) => {
  const sql = `
    SELECT * FROM advice 
    WHERE user_id = ? AND DATE(created_at) = CURDATE()
    ORDER BY created_at DESC LIMIT 1
  `;
  const [rows] = await db.execute(sql, [userId]);
  return rows[0];
};
