import { FlexMessage } from '@line/bot-sdk';

import { quizContents } from '../../../constants/line/quizContents';
import { lineClient } from '../../../lib/line/lineClient';
import { generateQuizFlex } from '../message/generateQuizFlex';

import { generateCorrectQuizFlex } from './generateCorrectQuizFlex';
import { generateIncorrectQuizFlex } from './generateIncorrectQuizFlex';

export const nextQuiz = (
  replyToken: string,
  quizAmount: number,
  quizIndex: string,
  isCorrect: string,
  correctAmount: string,
  posedQuizAmount: string,
  correctAnswer: string,
) => {
  let currentCorrectAmount = correctAmount;
  let answerFlex: FlexMessage;
  const nextPosedQuizAmount = (Number(posedQuizAmount) + 1).toString();

  if (isCorrect === 't') {
    currentCorrectAmount = (Number(correctAmount) + 1).toString();
    answerFlex = generateCorrectQuizFlex();
  } else {
    answerFlex = generateIncorrectQuizFlex(correctAnswer);
  }

  if (quizAmount === Number(posedQuizAmount)) {
    lineClient.replyMessage(replyToken, [
      answerFlex,
      {
        text: `正解数: ${currentCorrectAmount}`,
        type: 'text',
      },
    ]);
  } else {
    // 最初の-で分割
    const quizIndexSplitted = quizIndex.split(/(?<=^[^-]+)-/);

    const quizContent = quizContents[Number(quizIndexSplitted[0])];

    const quizFlex = generateQuizFlex(
      quizContent,
      quizIndexSplitted[1] || '',
      currentCorrectAmount,
      nextPosedQuizAmount,
    );

    lineClient.replyMessage(replyToken, [answerFlex, quizFlex]);
  }
};
