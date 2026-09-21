import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { makeGroundedAnswer } from './rag.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Portfolio chatbot API is running' });
});

app.post('/api/chatbot', async (req, res) => {
  try {
    const { question } = req.body || {};

    if (!question || typeof question !== 'string' || !question.trim()) {
      return res.status(400).json({ error: 'A valid question is required.' });
    }

    const result = await makeGroundedAnswer(question.trim());
    res.json({
      answer: result.answer,
      debug: result.debug,
    });
  } catch (error) {
    console.error('Chatbot route error:', error);
    res.status(500).json({
      error: 'Unable to answer the question right now.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Portfolio chatbot API listening on http://localhost:${PORT}`);
});
