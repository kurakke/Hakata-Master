import { quizContents } from '../../../constants/line/quizContents';
import { lineClient } from '../../../lib/line/lineClient';

import { generateQuizFlex } from './generateQuizFlex';

export const quiz = (replyToken: string, quizAmount: number) => {
  const quizIndexSet = new Set<number>();
  let quizIndex = '';

  while (quizIndexSet.size < quizAmount) {
    const random = Math.floor(Math.random() * quizContents.length);
    quizIndexSet.add(random);
  }

  const quizIndexArray = [...quizIndexSet];

  quizIndex += quizIndexArray[1];

  for (let i = 2; i < quizIndexArray.length; i++) {
    quizIndex = `${quizIndex}-${quizIndexArray[i]}`;
  }

  const quizContent = quizContents[quizIndexArray[0]];

  lineClient.replyMessage(replyToken, [generateQuizFlex(quizContent, quizIndex)]);
};
