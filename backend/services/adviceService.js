const { OpenAI } = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.generateAdviceText = async (healthData) => {
  const prompt = `
以下の健康データに基づいて、カジュアルで親しみやすい健康アドバイスを100文字以内で書いてください。

歩数: ${healthData.steps}歩
食事: ${healthData.meals}
睡眠: ${healthData.sleepHours}時間
気分: ${healthData.mood}
`;

  const chat = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "あなたは健康アドバイザーです。" },
      { role: "user", content: prompt }
    ],
    max_tokens: 100,
    temperature: 0.8
  });

  return chat.choices[0].message.content.trim();
};
