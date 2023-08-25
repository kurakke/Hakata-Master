import { quizContents } from '../../../constants/line/quizContents';
import { lineClient } from '../../../lib/line/lineClient';
import { generateQuizFlex } from '../message/generateQuizFlex';

export const nextQuiz = (
  replyToken: string,
  quizIndex: string,
  isCorrect: string,
  correctAmount: string,
) => {
  let currentCorrectAmount = correctAmount;

  if (isCorrect === 't') {
    currentCorrectAmount = (Number(correctAmount) + 1).toString();
  }

  // 最初の-で分割
  const quizIndexSplitted = quizIndex.split(/(?<=^[^-]+)-/)[1];

  const quizContent = quizContents[Number(quizIndexSplitted[0])];

  lineClient.replyMessage(replyToken, [
    generateQuizFlex(quizContent, quizIndexSplitted[1], currentCorrectAmount),
  ]);
};
