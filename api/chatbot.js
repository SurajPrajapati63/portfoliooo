import { answerPortfolioQuestion } from '../server/agent.js';

const allowedMethods = ['POST', 'OPTIONS'];

export default async function handler(request, response) {
  if (!allowedMethods.includes(request.method)) {
    response.setHeader('Allow', allowedMethods.join(', '));
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  if (request.method === 'OPTIONS') {
    return response.status(204).end();
  }

  const question = request.body?.question;
  if (typeof question !== 'string' || !question.trim()) {
    return response.status(400).json({ error: 'A valid question is required.' });
  }

  try {
    const result = await answerPortfolioQuestion(question.trim());
    const payload = { answer: result.answer };

    if (process.env.NODE_ENV !== 'production') {
      payload.debug = result.debug;
    }

    return response.status(200).json(payload);
  } catch (error) {
    console.error('Chatbot function error:', error);
    return response.status(500).json({ error: 'Unable to answer the question right now.' });
  }
}
