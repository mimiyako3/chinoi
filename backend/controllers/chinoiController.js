const { generateChinoi } = require('../services/chinoiService');
const { getTodayChinoi, getChinoiHistory } = require('../models/ChinoiModel');

const generateChinoiHandler = async (req, res) => {
  const userId = req.body.userId;
  const healthData = req.body.healthData;
  const personality = req.body.personality;

  try {
    const result = await generateChinoi(userId, healthData, personality);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate Chinoi' });
  }
};

const getTodayChinoiHandler = async (req, res) => {
  const userId = req.query.userId;
  const chinoi = await getTodayChinoi(userId);
  res.json(chinoi);
};

const getChinoiHistoryHandler = async (req, res) => {
  const userId = req.query.userId;
  const history = await getChinoiHistory(userId);
  res.json(history);
};

module.exports = {
  generateChinoiHandler,
  getTodayChinoiHandler,
  getChinoiHistoryHandler
};
