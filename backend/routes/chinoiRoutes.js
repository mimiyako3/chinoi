const express = require('express');
const router = express.Router();

// Chinoiのルーティングを定義
const {
  generateChinoiHandler,
  getTodayChinoiHandler,
  getChinoiHistoryHandler
} = require('../controllers/chinoiController');

// Chinoiを生成するエンドポイント
router.post('/generate', generateChinoiHandler);
router.get('/today', getTodayChinoiHandler);
router.get('/history', getChinoiHistoryHandler);

module.exports = router;
