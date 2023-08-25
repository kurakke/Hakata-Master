import { quizContents } from '../../../constants/line/quizContents';
import { lineClient } from '../../../lib/line/lineClient';
import { generateQuizFlex } from '../message/generateQuizFlex';

export const nextQuiz = (
  replyToken: string,
  quizAmount: number,
  quizIndex: string,
  isCorrect: string,
  correctAmount: string,
  posedQuizAmount: string,
) => {
  let currentCorrectAmount = correctAmount;
  let answerText = '不正解です';
  const nextPosedQuizAmount = (Number(posedQuizAmount) + 1).toString();

  if (isCorrect === 't') {
    currentCorrectAmount = (Number(correctAmount) + 1).toString();
    answerText = '正解です';
  }

  if (quizAmount === Number(posedQuizAmount)) {
    lineClient.replyMessage(replyToken, [
      {
        text: answerText,
        type: 'text',
      },
      {
        text: `正解数: ${correctAmount}`,
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

    lineClient.replyMessage(replyToken, [
      {
        text: answerText,
        type: 'text',
      },
      quizFlex,
    ]);
  }
};
