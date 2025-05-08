const AdviceModel = require("../models/adviceModel");
const { generateAdviceText } = require("../services/adviceService");

exports.generateAdvice = async (req, res) => {
  try {
    const { userId, healthDataId, healthData } = req.body;
    const text = await generateAdviceText(healthData);
    const adviceId = await AdviceModel.createAdvice(userId, healthDataId, text);
    res.status(200).json({ adviceId, text });
  } catch (error) {
    console.error("generateAdvice error:", error);
    res.status(500).json({ error: "アドバイスの生成に失敗しました" });
  }
};

exports.getTodayAdvice = async (req, res) => {
  try {
    const { userId } = req.query;
    const advice = await AdviceModel.getTodayAdvice(userId);
    if (!advice) {
      return res.status(404).json({ message: "今日のアドバイスはありません" });
    }
    res.status(200).json(advice);
  } catch (error) {
    console.error("getTodayAdvice error:", error);
    res.status(500).json({ error: "取得に失敗しました" });
  }
};
