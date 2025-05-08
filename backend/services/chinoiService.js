const { createChinoi } = require('../models/ChinoiModel');
const axios = require('axios');
require('dotenv').config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const buildPrompt = (healthData, personality) => {
  return `A cute mascot character that looks ${personality}, slept ${healthData.sleep} hours, feeling ${healthData.mood}`;
};

const generateImageWithOpenAI = async (prompt) => {
  console.log('Prompt:', prompt); // デバッグ出力で中身確認
  console.log("OpenAI API Key:", OPENAI_API_KEY);
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        model: 'dall-e-3', // 画像生成なら 'dall-e-3' を推奨
        prompt,
        n: 1,
        response_format: 'url'
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const imageUrl = response?.data?.data?.[0]?.url;
    if (!imageUrl) throw new Error('Image URL not found in OpenAI response');

    console.log('Generated image URL:', imageUrl);
    return imageUrl;
  } catch (error) {
    console.error('OpenAI API error:', error.response?.data || error.message);
    return null;
  }
};

const generateChinoi = async (userId, healthData, personality) => {
  const prompt = buildPrompt(healthData, personality);
  const imageUrl = await generateImageWithOpenAI(prompt);
  const name = `チノイ-${Math.floor(Math.random() * 10000)}`;
  //const id = await createChinoi(userId, imageUrl, name, personality, prompt);
  return {name, imageUrl, personality, prompt };
};

module.exports = { generateChinoi };
