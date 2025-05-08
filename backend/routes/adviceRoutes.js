const express = require('express');
const router = express.Router();

const {
    generateAdvice,
    getTodayAdvice,
    //getAdviceHistory
}
= require('../controllers/adviceController');

router.post("/generate", generateAdvice);
router.get("/today", getTodayAdvice);
//router.get("/history", getAdviceHistory);

module.exports = router;