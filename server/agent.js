import { makeGroundedAnswer } from './rag.js';

const answerPortfolioQuestion = (question) => makeGroundedAnswer(question);

export { answerPortfolioQuestion };